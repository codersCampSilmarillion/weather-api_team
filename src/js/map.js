import img from './file.png';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';
import "./styles.css";

// function map() {
//     var map = new Map({ // a map object is created
//         target: 'map', // the id of the div in html to contain the map
//         layers: [ // list of layers available in the map
//             new TileLayer({ // first and only layer is the OpenStreetMap tiled layer
//                 source: new XYZ
//             })
//         ],
//         view: new View({ // view allows to specify center, resolution, rotation of the map
//             center: fromLonLat([33.411254, 35.144581]), // center of the map
//             zoom: 15 // zoom level (0 = zoomed out)
//         })
//     });
//
// }
//
// export {map};