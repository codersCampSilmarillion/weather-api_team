import {Map, View} from 'ol';
import XYZ from 'ol/source/XYZ'
import OSM from 'ol/source/OSM';
import {Tile as TileLayer} from 'ol/layer';

function getMap(x, y) {
  const APIKEY = `621ade6f9cf22647cbe0dc0e15904a9c`;
  let api = `https://tile.openweathermap.org/map/clouds_new/5/{${x}}/${y}.png?appid=621ade6f9cf22647cbe0dc0e15904a9c`;
  var main_layer;
  main_layer = new TileLayer({
    source: new OSM({})
  });
  let layer_temp = new TileLayer({
    source: new XYZ({
      url: api
    })
  });

  const map = new Map({
    target: "map",
    layers: [main_layer, layer_temp],
    view: new View({
      center: [x,y],
      zoom: 4
    })
  });
}


export {getMap};
