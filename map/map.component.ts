import { IComponentController, IComponentOptions } from "angular";
// import MapService from "./shared/map.service";


class TrackMapController implements IComponentController {
    // static $inject = ["TrackMapService"]
    static ctrl;
    path: any[];
    constructor() { }

    $onInit() {
        this.path = [[41.879535, -87.624333]];
    }

    addMarkerAndPath(event) {
        console.log(this);
        this.path.push([event.latLng.lat(), event.latLng.lng()]);
    };
}


const trackMapComponent: IComponentOptions = {
    controller: TrackMapController,
    template: require("./map.component.html") as string
};

export default trackMapComponent;