
import {getDate, getTime} from "./js/getDate";
import {getLocalization} from "./js/wetByLocation"
//import {getMap1} from "./js/map";
import {setPositionUv} from "./js/uvIndex";
import {backgroundChange} from "./js/backgroundChange";
import {search} from "./js/search";
import {dailyPrognoseByLocation} from "./js/fiveDaysWeather";


getDate();
getTime();
getLocalization();
setPositionUv();
//getMap1();

search();


