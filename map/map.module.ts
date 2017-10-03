import { module } from 'angular';
import 'ngmap';


import TrackMapComponent from './map.component';
import TrackMapService from './shared/map.service';


const TrackMap = module('map', ['ngMap'])
    .component('trackMap', TrackMapComponent)
    .service("TrackMapService", TrackMapService)
    .name;

export default TrackMap;