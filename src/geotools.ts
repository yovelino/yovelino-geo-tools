import { LineString, MultiLineString } from 'geojson';

export class GeoToools {
  /**
   * @param {FeatureCollection<GeometryObject>} track
   * @param {(coord: number[]) => void} fn die cooridnaten sind in der Reihenfolge lng, lat, ele
   */
  public static processOnEachEntry = (
    track: GeoJSON.FeatureCollection<GeoJSON.GeometryObject>,
    fn: ((coord: number[]) => void)
  ) => {
    for( const feature of track.features) {
      if (feature.geometry.type === 'LineString') {
        const coordinates = (feature.geometry as LineString).coordinates;
        for (const coord of coordinates) {
          fn(coord);
        };
      } else if (feature.geometry.type === 'MultiLineString') {
        const coordinates = (feature.geometry as MultiLineString).coordinates;
        for(const lineStringCoords of coordinates) {
          for(const pointArray of lineStringCoords) {
            fn(pointArray);
          };
        };
      } else {
        throw new Error(`unsupported geometry type: ${feature.geometry.type}`);
      }
    };
  };
}
