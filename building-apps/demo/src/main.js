import MapView from "@arcgis/core/views/MapView";

new MapView({
  map: {
    basemap: "topo-vector"
  },
  container: "viewDiv"
});