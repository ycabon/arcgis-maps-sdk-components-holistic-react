import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  ArcgisMap,
  ArcgisSearch,
  ArcgisLegend,
} from '@arcgis/map-components-react';

import '@arcgis/core/assets/esri/themes/dark/main.css';
import Basemap from '@arcgis/core/Basemap';
import CSVLayer from '@arcgis/core/layers/CSVLayer';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';

const root = ReactDOM.createRoot(document.getElementById('root'));

const basemap = new Basemap({
  portalItem: {
    id: '3113eacc129942b4abde490a51aeb33f',
  },
});

const layer = new CSVLayer({
  url: 'https://ycabon.github.io/2018-devsummit-plenary/src/2-hurricanes/Hurricanes.csv',
  renderer: new UniqueValueRenderer({
    orderByClassesEnabled: true,
    field: 'Category',
    defaultSymbol: new PictureMarkerSymbol({
      url: 'https://ycabon.github.io/2018-devsummit-plenary/src/2-hurricanes/CatTS.png',
    }),
    uniqueValueInfos: [
      {
        value: 1,
        symbol: new PictureMarkerSymbol({
          url: 'https://ycabon.github.io/2018-devsummit-plenary/src/2-hurricanes/Cat1.png',
        }),
      },
      {
        value: 2,
        symbol: new PictureMarkerSymbol({
          url: 'https://ycabon.github.io/2018-devsummit-plenary/src/2-hurricanes/Cat2.png',
        }),
      },
      {
        value: 3,
        symbol: new PictureMarkerSymbol({
          url: 'https://ycabon.github.io/2018-devsummit-plenary/src/2-hurricanes/Cat3.png',
        }),
      },
      {
        value: 4,
        symbol: new PictureMarkerSymbol({
          url: 'https://ycabon.github.io/2018-devsummit-plenary/src/2-hurricanes/Cat4.png',
        }),
      },
      {
        value: 5,
        symbol: new PictureMarkerSymbol({
          url: 'https://ycabon.github.io/2018-devsummit-plenary/src/2-hurricanes/Cat5.png',
        }),
      },
    ].reverse(),
  }),
});

root.render(
  <React.StrictMode>
    <ArcgisMap basemap={basemap}>
      <ArcgisSearch
        position="top-right"
        includeDefaultSources="false"
        locationEnabled="false"
        sources={[
          {
            layer,
            searchFields: ['Name'],
            displayField: 'Name',
            exactMatch: false,
            outFields: ['*'],
            name: 'Hurricanes',
            placeholder: 'example: Hilda',
            maxResults: 6,
            maxSuggestions: 6,
            suggestionsEnabled: true,
            minSuggestCharacters: 0,
          },
        ]}
      ></ArcgisSearch>
    </ArcgisMap>
  </React.StrictMode>
);
