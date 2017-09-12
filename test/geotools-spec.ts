import * as chai from "chai";
import { GeoToools } from "../src/geotools";

const expect = chai.expect;

describe("GeoToools", () => {
  it("should be possible to create the GeoTools", () => {
    const greeter = new GeoToools();
    expect(greeter).to.not.be.undefined;
  });
});
