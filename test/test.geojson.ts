export const GEO_LINESTRING = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [8.8944831388, 50.127477198499996],
          [8.8918678042, 50.128425448]
        ]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [8.997116639400002, 50.3164196264],
          [8.998020416700001, 50.3185558057]
        ]
      }
    }
  ]
};

export const GEO_MULTI_LINESTRING = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Saar-Hunsrück-Steig"
      },
      "geometry": {
        "type": "MultiLineString",
        "coordinates": [
          [
            [
              6.6818051619,
              49.7397933883
            ],
            [
              6.6812162333,
              49.7373458773
            ],
            [
              6.6812883374,
              49.7369755936
            ]
          ]
        ]
      }
    }
  ]
};

export const GEO_UNSUPPORTED_TYPE = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineStringX",
        coordinates: [
          [8.8944831388, 50.127477198499996],
          [8.8918678042, 50.128425448]
        ]
      }
    }
  ]
};


