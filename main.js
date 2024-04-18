// Load the Map and MapView modules
require([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/config",
  "esri/widgets/Legend",
  "esri/widgets/LayerList",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Expand",
  "esri/widgets/ScaleBar",
], function (
  WebMap,
  MapView,
  esriConfig,
  Legend,
  LayerList,
  BasemapGallery,
  Expand,
  ScaleBar
) {
  //   connect to portal
  esriConfig.portalUrl = "https://cgi.nlcs.gov.bt/portal";

  // Create a Map instance
  const webmap = new WebMap({
    portalItem: {
      // autocasts as new PortalItem()
      id: "945107c9988646c697238dd03bfd9062",
    },
  });
  // Create a MapView instance (for 2D viewing) and reference the map instance
  const view = new MapView({
    map: webmap,
    container: "Viewdiv", //viewdiv is case sensitive and should match with html viewdiv
  });

  //   define

  let legend = new Legend({
    view: view,
    container: "legend-container",
  });

  let layerList = new LayerList({
    view: view,
    container: "layer-list",
  });

  let basemapGallery = new BasemapGallery({
    view: view,
  });

  // A. specify content with a widget
  // expand
  let expand = new Expand({
    view: view,
    content: basemapGallery,
  });

  let scaleBar = new ScaleBar({
    view: view,
    unit: "metric",
  });

  view.ui.add(expand, "top-right");

  // Add widget to the bottom left corner of the view
  view.ui.add(scaleBar, {
    position: "bottom-right",
  });

  //adding to  the mapview ui
  //   view.ui.add(legend, "bottom-left");

  const appDetailModalBtn = document.getElementById("app-details-action");
  const appDetailModalEl = document.getElementById("app-details-modal");
  appDetailModalBtn.addEventListener("click", () => {
    appDetailModalEl.open = !appDetailModalEl.open;
  });
});
