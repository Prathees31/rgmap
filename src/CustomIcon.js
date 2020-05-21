import L from 'leaflet';
export const carIcon = new L.Icon({
    iconUrl: require('./assets/mapicons/car.svg'),
    iconRetinaUrl: require('./assets/mapicons/car.svg'),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 55],
    shadowUrl: require('./assets/mapicons/marker-shadow.png'),
    shadowSize: [0, 0],
    shadowAnchor: [20, 92],
});
export const truckIcon = new L.Icon({
iconUrl: require('./assets/mapicons/truck.svg'),
iconRetinaUrl: require('./assets/mapicons/truck.svg'),
iconAnchor: [20, 40],
popupAnchor: [0, -35],
iconSize: [40, 40],
shadowUrl: require('./assets/mapicons/marker-shadow.png'),
shadowSize: [0, 0],
shadowAnchor: [7, 40],
});