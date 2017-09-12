import * as chai from 'chai';
import { GeoToools } from '../src/geotools';
import { GEO_LINESTRING, GEO_MULTI_LINESTRING, GEO_UNSUPPORTED_TYPE } from './test.geojson';

const expect = chai.expect;

describe('GeoToools', () => {

  it('should be possible to create the GeoTools', () => {
    const greeter = new GeoToools();
    expect(greeter).to.not.be.undefined;
  });

  it('should collect each coordinate in a linestring geojson', () => {
    const geojson = GEO_LINESTRING as GeoJSON.FeatureCollection<
      GeoJSON.GeometryObject
    >;
    const result: number[][] = [];
    GeoToools.processOnEachEntry(geojson, coords => {
      result.push(coords);
    });
    expect(result.length).to.eq(4);
  });

  it('should collect each coordinate in a multilinestring geojson', () => {
    const geojson = GEO_MULTI_LINESTRING as any;
    const result: number[][] = [];
    GeoToools.processOnEachEntry(geojson, coords => {
      result.push(coords);
    });
    expect(result.length).to.eq(3);
  });

  it('should throw an error if the type is not supported', () => {
    const geojson = GEO_UNSUPPORTED_TYPE as any;

    expect(() => {
      GeoToools.processOnEachEntry(geojson, coords => {})
    }).to.throw('unsupported geometry type: LineStringX');
    
  })

});
