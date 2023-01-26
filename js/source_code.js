var map;
var OSM;
var lyrOSM;
var mrkCurrentLocation;
var popMinarEPakistan;
var ctlPan;
var ctlMeasure;
var ctlButton;
var ctlSidebar;
var Dark;
var routes;
var baseMaps;
var ctlPan;
var ALTSTADT;
var LUDWIGSVORSTADT;
var MAXVORSTADT;
var SCHWABING;
var probando;
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;
var newMarker, markerLocation;
let pointsURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTh7dQ0JPgZNoagkd77B4S-5xZRpPFHXjXOA5Z7JKNITb4YGw31Pqro_k8Rlo1Gy1D_5YZy7TcvT_li/pub?gid=1170715324&single=true&output=csv";
$(document).ready(function () {
    // create map object
    map = L.map('map_div',  {center:[48.13743,11.57549], zoom:13
        , zoomControl:false });

    //popup Minar e Pakistan
    popMinarEPakistan =  L.popup();
    popMinarEPakistan.setLatLng([31.59248,74.30966]);
    popMinarEPakistan.setContent("<h2>Minar e Pakistan</h2>" +
        "<img src='img/minar-e-pakistan.jpg'  width='300px'/>");

    //map.openPopup(popMinarEPakistan);
    //popMinarEPakistan.openOn(map);

    // plugins
    ctlPan = L.control.pan().addTo(map);
    ctlZoomslider = L.control.zoomslider({position:'topright'}).addTo(map);

    ctlMousePosition = L.control.mousePosition().addTo(map);
    ctlMeasure =L.control.polylineMeasure().addTo(map);


    ctlSidebar = L.control.sidebar('side-bar').addTo(map);
    ctlEasyButton = L.easyButton('fa-exchange', function () {
        ctlSidebar.toggle();
    }).addTo(map);

var UbahnIcon = L.icon({
    iconUrl: 'U-Bahnlogo_Muenchen.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [0,0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
    a = L.marker([48.13724, 11.57563], {icon: UbahnIcon}).addTo(map).bindPopup("Marienplatz: Elevators: 4/4 Escalators: 26/28 Service Point: AVAILABLE Barrier-free WC: AVAILABLE"); //Marienplatz
    b = L.marker([48.13938, 11.56585], {icon: UbahnIcon}).addTo(map); //Karlsplatz
    c = L.marker([48.13356, 11.56711], {icon: UbahnIcon}).addTo(map); //Sendlinger Tor
    d = L.marker([48.13988, 11.58683], {icon: UbahnIcon}).addTo(map); //Lehel
    e = L.marker([48.14274, 11.57754], {icon: UbahnIcon}).addTo(map); //Odeonsplatz

    f = L.marker([48.14026, 11.56064], {icon: UbahnIcon}).addTo(map); //München Hauptbahnhof
    g = L.marker([48.13635, 11.55326], {icon: UbahnIcon}).addTo(map); //Theresienwiese
    h = L.marker([48.12958, 11.55845], {icon: UbahnIcon}).addTo(map); //Goetheplatz
    i = L.marker([48.12917, 11.57439], {icon: UbahnIcon}).addTo(map); //Fraunhoferstraße
    j = L.marker([48.12573, 11.55057], {icon: UbahnIcon}).addTo(map); //Poccistraße

    k = L.marker([48.15003, 11.54571], {icon: UbahnIcon}).addTo(map); //Maillingerstraße
    l = L.marker([48.14507, 11.56337], {icon: UbahnIcon}).addTo(map); //Königsplatz
    m = L.marker([48.15113, 11.56418], {icon: UbahnIcon}).addTo(map); //Theresienstraße
    n = L.marker([48.15577, 11.56680], {icon: UbahnIcon}).addTo(map); //Josephsplatz
    o = L.marker([48.14965, 11.58081], {icon: UbahnIcon}).addTo(map); //Universität
    p = L.marker([48.14790, 11.55685], {icon: UbahnIcon}).addTo(map); //Stiglmaierplatz

    q = L.marker([48.16218, 11.56867], {icon: UbahnIcon}).addTo(map); ///Hohenzollernplatz
    r = L.marker([48.16683, 11.57867], {icon: UbahnIcon}).addTo(map); //Bonner Platz
    s = L.marker([48.17121, 11.57288], {icon: UbahnIcon}).addTo(map); //Scheidplatz
    t = L.marker([48.17553, 11.56641], {icon: UbahnIcon}).addTo(map); //Petuelring
    ALTSTADT = L.layerGroup([a, b, c, d, e]);
    LUDWIGSVORSTADT = L.layerGroup([f, g, h, i, j]);
    MAXVORSTADT = L.layerGroup([k, l, m, n, o, p]);
    SCHWABING = L.layerGroup([q, r, s, t]);
    probando = L.layerGroup([a, f, k, q]);


    //add basemap layer
    lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    map.addLayer(lyrOSM);

    Dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);
//OSM = = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    maxZoom: 19,
//    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//});
//});



    // right click
    map.on('contextmenu',function (e) {

        L.marker(e.latlng).addTo(map).bindPopup(e.latlng.toString());

    });



    //call method location
    map.on('keypress',function (e) {
        if(e.originalEvent.key = 'l'){
            map.locate();
        }

    });

    //create circle if location found
    map.on('locationfound',function (e) {
        if(mrkCurrentLocation){
            mrkCurrentLocation.remove();
        }
        mrkCurrentLocation = L.circleMarker(e.latlng).addTo(map);
        //mrkCurrentLocation = L.circle(e.latlng, {radius:e.accuracy/4}).addTo(map);
        map.setView(e.latlng, 18);
    });

    baseMaps = {
    "Dark": Dark,
    "OSM": OSM
};

 routes = {
    "Route option 1": ALTSTADT,
    "Route option 2": LUDWIGSVORSTADT,
    "Route option 3": MAXVORSTADT,
    "Route option 4": SCHWABING,
    "Route option 5": MAXVORSTADT
};


//var layerControl =
L.control.layers(baseMaps, routes).addTo(map);
//add maker
map.on('click', addMarker);


//add Google sheet
Papa.parse(pointsURL, {
    download: true,
    header: true,
    complete: addPoints,
  });



});
document.getElementById('select-station').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,19);

});



//add google sheet point
function addPoints(data) {
  data = data.data;
  let pointGroupLayer = L.layerGroup().addTo(map);

  // Choose marker type. Options are:
  // (these are case-sensitive, defaults to marker!)
  // marker: standard point with an icon
  // circleMarker: a circle with a radius set in pixels
  // circle: a circle with a radius set in meters
  let markerType = "marker";

  // Marker radius
  // Wil be in pixels for circleMarker, metres for circle
  // Ignore for point
  let markerRadius = 100;
    for (let row = 0; row < data.length; row++) {
        let marker;
        marker = L.marker([data[row].lat, data[row].lng]);
//        marker = L.marker([data[row].lat, data[row].lng]).bindPopup("<b>" + data[row].Type + '</b><br>' +
//          (data[row].Image ? ('<img src="' + data[row].Image + '"><br>') : '') +
//          data[row].Position + data[row].Scale);
        marker.addTo(pointGroupLayer);
//        marker.feature = {
//      properties: {
//        Type: data[row].Type,
//        Position: data[row].Position,
//        Scale: data[row].Scale,
//      },
//    };
   }

//    // AwesomeMarkers is used to create fancier icons
//    let icon = L.AwesomeMarkers.icon({
//      icon: "info-circle",
//      iconColor: "white",
//      markerColor: data[row].color,
//      prefix: "fa",
//      extraClasses: "fa-rotate-0",
//    });
//    if (!markerType.includes("circle")) {
//      marker.setIcon(icon);
//    }
  }
