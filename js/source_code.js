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
var other;
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
        ctlSidebar.setContent("<a href='https://forms.gle/MgLVYHANrJEjkMCX7' target='_blank'>Report Us More Barriers</a>");
    }).addTo(map);

var UbahnIcon = L.icon({
    iconUrl: 'data/U-Bahnlogo_München.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [0,0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var HousingIcon = L.icon({
    iconUrl: 'data/house_logo2.png',

    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [0,0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});



//BARRIER IMAGES

images = ["data/work.jpg", "data/PA.jpg", "data/PA2.jpg"]

//.bindPopup("Marienplatz: Elevators: 4/4 Escalators: 26/28 Service Point: AVAILABLE Barrier-free WC: AVAILABLE")
    a = L.marker([48.13724, 11.57563], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Marienplatz</b><br>Elevators: 4/4</b><br>Escalators: 26/28</b><br>Service Point: AVAILABLE</b><br>Barrier-free WC: AVAILABLE");}); //Marienplatz
    b = L.marker([48.13938, 11.56585], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Karlsplatz</b><br>Elevators: 8/8</b><br>Escalators: 37/40</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Karlsplatz
    c = L.marker([48.13356, 11.56711], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Sendlinger Tor
    d = L.marker([48.13988, 11.58683], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Lehel</b><br>Elevators: 2/2</b><br>Escalators: 11/12</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//Lehel
    e = L.marker([48.14274, 11.57754], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Odeonsplatz</b><br>Elevators: 3/3</b><br>Escalators: 19/19</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//Odeonsplatz

    f = L.marker([48.14026, 11.56064], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Hauptbahnhof</b><br>Elevators: 9/9</b><br>Escalators: 37/30</b><br>Service Point: AVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//München Hauptbahnhof
    g = L.marker([48.13635, 11.55326], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Theresienwiese</b><br>Elevators: 1/1</b><br>Escalators: 7/7</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//Theresienwiese
    h = L.marker([48.12958, 11.55845], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Goetheplatz</b><br>Elevators: 2/2</b><br>Escalators: 6/6</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: AVAILABLE")}); //Goetheplatz
    i = L.marker([48.12917, 11.57439], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Fraunhoferstraße</b><br>Elevators: 2/2</b><br>Escalators: 9/9</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: AVAILABLE")}); //Fraunhoferstraße
    j = L.marker([48.12573, 11.55057], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Poccistraße</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Poccistraße

    k = L.marker([48.15003, 11.54571], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Maillingerstraße</b><br>Elevators: 2/2</b><br>Escalators: 6/6</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Maillingerstraße
    l = L.marker([48.14507, 11.56337], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Königsplatz</b><br>Elevators: 1/2</b><br>Escalators: 9/11</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Königsplatz
    m = L.marker([48.15113, 11.56418], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Theresienstraße</b><br>Elevators: 2/2</b><br>Escalators: 8/8</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Theresienstraße
    n = L.marker([48.15577, 11.56680], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Josephsplatz</b><br>Elevators: 1/1</b><br>Escalators: 10/10</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Josephsplatz
    o = L.marker([48.14965, 11.58081], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Universität</b><br>Elevators: 2/2</b><br>Escalators: 9/10</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Universität
    p = L.marker([48.14790, 11.55685], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Stiglmaierplatz</b><br>Elevators: 1/1</b><br>Escalators: 8/8</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Stiglmaierplatz

    q = L.marker([48.16218, 11.56867], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Hohenzollerplatz</b><br>Elevators: 1/1</b><br>Escalators: 7/8</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); ///Hohenzollernplatz
    r = L.marker([48.16683, 11.57867], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Bonner Platz</b><br>Elevators: 1/1</b><br>Escalators: 6/6</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Bonner Platz
    s = L.marker([48.17121, 11.57288], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Scheidplatz</b><br>Elevators: 2/2</b><br>Escalators: 8/9</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Scheidplatz
    t = L.marker([48.17553, 11.56641], {icon: UbahnIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Petuelring</b><br>Elevators: 1/1</b><br>Escalators: 5/5</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")}); //Petuelring

    //HOUSING

L.marker([48.136273, 11.572853], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});
L.marker([48.155198, 11.565252], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});
L.marker([48.139908, 11.591901], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});
L.marker([48.138732, 11.590591], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});
L.marker([48.137871, 11.559438], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//1
L.marker([48.137871, 11.559438], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//2
L.marker([48.137871, 11.559438], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//3
L.marker([48.152249, 11.582348], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});
L.marker([48.155198, 11.565252], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});
L.marker([48.166841, 11.556467], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//1
L.marker([48.166841, 11.556467], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//2
L.marker([48.166841, 11.556467], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});//3
L.marker([48.156839, 11,577436], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});
L.marker([48.172674, 11,563776], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});
L.marker([48.154216, 11,561411], {icon: HousingIcon}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>Sendlinger Tor</b><br>Elevators: 3/8</b><br>Escalators: 21/30</b><br>Service Point: UNAVAILABLE</b><br>Barrier-free WC: UNAVAILABLE")});
//L.marker([48.137871, 11,559438], {icon: HousingIcon}).addTo(map).bindPopup("<b>hHello world!</b><br>I am a popup.");//1
//L.marker([48.137871, 11,559438], {icon: HousingIcon}).addTo(map).bindPopup("<b>jHello world!</b><br>I am a popup.");//2
//L.marker([48.137871, 11,559438], {icon: HousingIcon}).addTo(map).bindPopup("<b>kHello world!</b><br>I am a popup.");//3


    ALTSTADT = L.layerGroup([a, b, c, d, e]);
    LUDWIGSVORSTADT = L.layerGroup([f, g, h, i, j]);
    MAXVORSTADT = L.layerGroup([k, l, m, n, o, p]);
    SCHWABING = L.layerGroup([q, r, s, t]);
    probando = L.layerGroup([a, f, k, q]);


//document.write(s1);
//document.getElementById('select-housing').disabled = true;

    //add geoJson lines
var line1 = [{ //Pocci-Goethe-Sendlinger-Marien
    "type": "LineString",
    "coordinates": [[11.54895, 48.12456], [11.55057, 48.12573], [11.55845, 48.12958], [11.56711, 48.13356], [11.56753, 48.13402],
    [11.56968, 48.13504], [11.57200, 48.13590], [11.57491, 48.13724], [11.5774, 48.14261], [11.58192, 48.15227]]
}];

var line2 = [{ //Pfenningparade-Arcistr.-
    "type": "LineString",
    "coordinates": [[11.57307, 48.17791], [11.57276, 48.17712], [11.57409, 48.16714], [11.5751, 48.16037], [11.57477, 48.1594],
    [11.57526, 48.15522], [11.57335, 48.15577], [11.56486, 48.14256], [11.56575, 48.14225], [11.56617, 48.14158], [11.56628, 48.14059],
    [11.56536, 48.1398]]
}];

var line3 = [{ //Petuelring-HBF-Karlsplatz-Marienplatz-Isartorplatz
    "type": "LineString",
    "coordinates": [[11.5661, 48.17538], [11.56445, 48.17114], [11.56441, 48.17062], [11.56486, 48.16848], [11.5645, 48.1648],
    [11.5619, 48.15609], [11.56058, 48.15266], [11.55901, 48.14794], [11.55912, 48.14754], [11.55909, 48.14715], [11.55865, 48.14639],
    [11.55629, 48.14209], [11.5612, 48.14106], [11.56572, 48.13964], [11.56637, 48.1391], [11.56948, 48.13846], [11.57122, 48.13822],
    [11.57486, 48.13723], [11.57671, 48.13677], [11.57744, 48.13634], [11.57974, 48.13586], [11.58153, 48.13525], [11.58337, 48.13293],
    [11.5851, 48.1321]]
}];


var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.85
};

var myStyle2 = {
    "color": "#00FF00",
    "weight": 5,
    "opacity": 0.85
};

var myStyle3 = {
    "color": "#A020F0",
    "weight": 5,
    "opacity": 0.85
};

var ROUTE1 = L.geoJSON(line1, {
    style: myStyle
}).addTo(map);

var ROUTE2 = L.geoJSON(line2, {
    style: myStyle2
}).addTo(map);

var ROUTE3 = L.geoJSON(line3, {
    style: myStyle3
}).addTo(map);


    //add basemap layer
    lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    map.addLayer(lyrOSM);
    other = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	maxZoom: 19,
	ext: 'png'});
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
other.addTo(map);
//OSM = = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    maxZoom: 19,
//    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//});
//});
    // right click
    map.on('contextmenu',function (e) {

        L.marker(e.latlng).addTo(map).bindPopup(e.latlng.toString());

    });



    baseMaps = {
    "Black and White": other,
    "OSM": OSM,
    "Dark": Dark
};

 routes = {
    "Route option 1": ROUTE1,
    "Route option 2": ROUTE2,
    "Route option 3": ROUTE3,
};


map.removeLayer(OSM)
map.removeLayer(Dark)
map.removeLayer(ROUTE1)
map.removeLayer(ROUTE2)
map.removeLayer(ROUTE3)

L.control.layers(baseMaps, routes, {collapsed: false}, {sortLayers: true}).addTo(map);


//GEOJSON

L.geoJSON(lineJSON).addTo(map);




});
document.getElementById('select-station').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,19);

});



