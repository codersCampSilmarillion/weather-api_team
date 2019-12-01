// import 'ol/ol.css';
// import {Map, View} from 'ol';
// import XYZ from 'ol/source/XYZ'
// import OSM from 'ol/source/OSM';
// import {Tile as TileLayer} from 'ol/layer';
// import {toLonLat} from "ol/proj";
// import {latLng} from "leaflet/dist/leaflet-src.esm";


function getMap(x, y) {
    const APIKEY = `621ade6f9cf22647cbe0dc0e15904a9c`;
    let coordinate = [x, y]
    let api = `https://tile.openweathermap.org/map/clouds_new/5/{${coordinate[0]}}/{${coordinate[1]}}.png?appid=621ade6f9cf22647cbe0dc0e15904a9c`;
    var main_layer;
    main_layer = new TileLayer({
        source: new OSM({})
    });
    let layer_temp = new TileLayer({
        source: new XYZ({
            url: api,
        })
    });

    const map = new Map({
        target: 'map',
        layers: [
            main_layer, layer_temp
        ],
        view: new View({
            center: [37.41, 8.82],
            zoom: 4
        })
    });
}


export {getMap};
