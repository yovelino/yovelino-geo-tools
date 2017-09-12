import { LineString, MultiLineString } from 'geojson';

export class GeoToools {
  /**
   * @param {FeatureCollection<GeometryObject>} track
   * @param {(coord: number[]) => void} fn die cooridnaten sind in der Reihenfolge lat, lng, ele
   */
  public static processOnEachEntry = (
    track: GeoJSON.FeatureCollection<GeoJSON.GeometryObject>,
    fn: ((coord: number[]) => void)
  ) => {
    track.features.forEach(feature => {
      if (feature.geometry.type === 'LineString') {
        const coordinates = (feature.geometry as LineString).coordinates;
        coordinates.forEach((coord: any) => {
          fn(coord);
        });
      } else if (feature.geometry.type === 'MultiLineString') {
        const coordinates = (feature.geometry as MultiLineString).coordinates;
        coordinates.forEach((lineStringCoords: any) => {
          lineStringCoords.forEach((pointArray: number[]) => {
            fn(pointArray);
          });
        });
      } else {
        throw new Error(`unsupported geometry type: ${feature.geometry.type}`);
      }
    });
  };
}
