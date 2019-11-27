import 'ol/ol.css';
import {Map, View} from 'ol';

import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';
import KML from 'ol/format/KML';
import VectorSource from 'ol/source/Vector';
import {Heatmap as HeatmapLayer, Tile as TileLayer} from 'ol/layer';

const APIKEY = `621ade6f9cf22647cbe0dc0e15904a9c`;

function getMap1() {
    if (!('geolocation' in navigator)) {
        error.style.display = "block";
        return error.message = `<p>Something go wrong</p>`
    } else {
        return navigator.geolocation.getCurrentPosition(setPosition);
    }
}

//user position
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let api = `https://tile.openweathermap.org/map/clouds_new/{4}/${latitude}/${longitude}.png?appid=${APIKEY}`;
    map(api);
}

function getMap() {
    var layer_temp;
    var main_layer;
    main_layer = new TileLayer({
        source: new OSM({
        })
    });

    const map = new Map({
        target: 'map',
        layers: [
            main_layer, //layer_temp
        ],
        view: new View({
            center: [37.41, 8.82],
            zoom: 4
        })

    });
}


export {getMap};