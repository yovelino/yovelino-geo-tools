import { LineString, MultiLineString } from 'geojson';

export class GeoToools {
  /**
   * @param {FeatureCollection<GeometryObject>} track
   * @param {(coord: number[]) => void} fn die cooridnaten sind in der Reihenfolge lat, lng, ele
   */
  // TODO umwandeln in for (let num of numbers) siehe https://jsperf.com/fast-array-foreach
  public static processOnEachEntry = (
    track: GeoJSON.FeatureCollection<GeoJSON.GeometryObject>,
    fn: ((coord: number[]) => void)
  ) => {
    for( let feature of track.features) {
      if (feature.geometry.type === 'LineString') {
        const coordinates = (feature.geometry as LineString).coordinates;
        for (let coord of coordinates) {
          fn(coord);
        };
      } else if (feature.geometry.type === 'MultiLineString') {
        const coordinates = (feature.geometry as MultiLineString).coordinates;
        for(let lineStringCoords of coordinates) {
          for(let pointArray of lineStringCoords) {
            fn(pointArray);
          };
        };
      } else {
        throw new Error(`unsupported geometry type: ${feature.geometry.type}`);
      }
    };
  };
}
