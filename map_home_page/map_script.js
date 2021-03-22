var map = L.map('map', {
    zoomControl:true, maxZoom:17, minZoom:5
})
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
var bounds_group = new L.featureGroup([]);
function setBounds() {
    if (bounds_group.getLayers().length) {
        map.fitBounds(bounds_group.getBounds());
    }
}
map.createPane('pane_OpenStreetMap_0');
map.getPane('pane_OpenStreetMap_0').style.zIndex = 400;
var layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OpenStreetMap_0',
    opacity: 1.0,
    attribution: '',
    minZoom: 5,
    maxZoom: 17,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OpenStreetMap_0;
map.addLayer(layer_OpenStreetMap_0);
function pop_ZONAMEDIA_1(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ZONAMEDIA_1_0() {
    return {
        pane: 'pane_ZONAMEDIA_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,158,23,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ZONAMEDIA_1');
map.getPane('pane_ZONAMEDIA_1').style.zIndex = 401;
map.getPane('pane_ZONAMEDIA_1').style['mix-blend-mode'] = 'normal';
var layer_ZONAMEDIA_1 = new L.geoJson(json_ZONAMEDIA_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ZONAMEDIA_1',
    layerName: 'layer_ZONAMEDIA_1',
    pane: 'pane_ZONAMEDIA_1',
    onEachFeature: pop_ZONAMEDIA_1,
    style: style_ZONAMEDIA_1_0,
});
bounds_group.addLayer(layer_ZONAMEDIA_1);
map.addLayer(layer_ZONAMEDIA_1);
function pop_ZONABAJA_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ZONABAJA_2_0() {
    return {
        pane: 'pane_ZONABAJA_2',
        opacity: 1,
        color: 'rgba(56,128,54,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(77,175,74,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ZONABAJA_2');
map.getPane('pane_ZONABAJA_2').style.zIndex = 402;
map.getPane('pane_ZONABAJA_2').style['mix-blend-mode'] = 'normal';
var layer_ZONABAJA_2 = new L.geoJson(json_ZONABAJA_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ZONABAJA_2',
    layerName: 'layer_ZONABAJA_2',
    pane: 'pane_ZONABAJA_2',
    onEachFeature: pop_ZONABAJA_2,
    style: style_ZONABAJA_2_0,
});
bounds_group.addLayer(layer_ZONABAJA_2);
map.addLayer(layer_ZONABAJA_2);
function pop_ZMsitiosreferencia_3(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">CERROS_Y_P</th>\
                <td>' + (feature.properties['CERROS_Y_P'] !== null ? autolinker.link(feature.properties['CERROS_Y_P'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ZMsitiosreferencia_3_0() {
    return {
        pane: 'pane_ZMsitiosreferencia_3',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(133,182,111,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ZMsitiosreferencia_3');
map.getPane('pane_ZMsitiosreferencia_3').style.zIndex = 403;
map.getPane('pane_ZMsitiosreferencia_3').style['mix-blend-mode'] = 'normal';
var layer_ZMsitiosreferencia_3 = new L.geoJson(json_ZMsitiosreferencia_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ZMsitiosreferencia_3',
    layerName: 'layer_ZMsitiosreferencia_3',
    pane: 'pane_ZMsitiosreferencia_3',
    onEachFeature: pop_ZMsitiosreferencia_3,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_ZMsitiosreferencia_3_0(feature));
    },
});
bounds_group.addLayer(layer_ZMsitiosreferencia_3);
map.addLayer(layer_ZMsitiosreferencia_3);
function pop_ZBsitiosreferencia_4(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">CERROS_Y_P</th>\
                <td>' + (feature.properties['CERROS_Y_P'] !== null ? autolinker.link(feature.properties['CERROS_Y_P'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ZBsitiosreferencia_4_0() {
    return {
        pane: 'pane_ZBsitiosreferencia_4',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(164,113,88,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ZBsitiosreferencia_4');
map.getPane('pane_ZBsitiosreferencia_4').style.zIndex = 404;
map.getPane('pane_ZBsitiosreferencia_4').style['mix-blend-mode'] = 'normal';
var layer_ZBsitiosreferencia_4 = new L.geoJson(json_ZBsitiosreferencia_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ZBsitiosreferencia_4',
    layerName: 'layer_ZBsitiosreferencia_4',
    pane: 'pane_ZBsitiosreferencia_4',
    onEachFeature: pop_ZBsitiosreferencia_4,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_ZBsitiosreferencia_4_0(feature));
    },
});
bounds_group.addLayer(layer_ZBsitiosreferencia_4);
map.addLayer(layer_ZBsitiosreferencia_4);
function pop_ZAsitiosreferencia_5(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">CERROS_Y_P</th>\
                <td>' + (feature.properties['CERROS_Y_P'] !== null ? autolinker.link(feature.properties['CERROS_Y_P'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ZAsitiosreferencia_5_0() {
    return {
        pane: 'pane_ZAsitiosreferencia_5',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(213,180,60,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ZAsitiosreferencia_5');
map.getPane('pane_ZAsitiosreferencia_5').style.zIndex = 405;
map.getPane('pane_ZAsitiosreferencia_5').style['mix-blend-mode'] = 'normal';
var layer_ZAsitiosreferencia_5 = new L.geoJson(json_ZAsitiosreferencia_5, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ZAsitiosreferencia_5',
    layerName: 'layer_ZAsitiosreferencia_5',
    pane: 'pane_ZAsitiosreferencia_5',
    onEachFeature: pop_ZAsitiosreferencia_5,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_ZAsitiosreferencia_5_0(feature));
    },
});
bounds_group.addLayer(layer_ZAsitiosreferencia_5);
map.addLayer(layer_ZAsitiosreferencia_5);
function pop_SITIOSDEREFERENCIA_6(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">CERROS_Y_P</th>\
                <td>' + (feature.properties['CERROS_Y_P'] !== null ? autolinker.link(feature.properties['CERROS_Y_P'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_SITIOSDEREFERENCIA_6_0() {
    return {
        pane: 'pane_SITIOSDEREFERENCIA_6',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(114,155,111,1.0)',
        interactive: true,
    }
}
map.createPane('pane_SITIOSDEREFERENCIA_6');
map.getPane('pane_SITIOSDEREFERENCIA_6').style.zIndex = 406;
map.getPane('pane_SITIOSDEREFERENCIA_6').style['mix-blend-mode'] = 'normal';
var layer_SITIOSDEREFERENCIA_6 = new L.geoJson(json_SITIOSDEREFERENCIA_6, {
    attribution: '',
    interactive: true,
    dataVar: 'json_SITIOSDEREFERENCIA_6',
    layerName: 'layer_SITIOSDEREFERENCIA_6',
    pane: 'pane_SITIOSDEREFERENCIA_6',
    onEachFeature: pop_SITIOSDEREFERENCIA_6,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_SITIOSDEREFERENCIA_6_0(feature));
    },
});
bounds_group.addLayer(layer_SITIOSDEREFERENCIA_6);
map.addLayer(layer_SITIOSDEREFERENCIA_6);
function pop_ZONAALTA_7(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Área (ha)</th>\
                <td>' + (feature.properties['Área (ha)'] !== null ? autolinker.link(feature.properties['Área (ha)'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ZONAALTA_7_0() {
    return {
        pane: 'pane_ZONAALTA_7',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(231,113,72,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ZONAALTA_7');
map.getPane('pane_ZONAALTA_7').style.zIndex = 407;
map.getPane('pane_ZONAALTA_7').style['mix-blend-mode'] = 'normal';
var layer_ZONAALTA_7 = new L.geoJson(json_ZONAALTA_7, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ZONAALTA_7',
    layerName: 'layer_ZONAALTA_7',
    pane: 'pane_ZONAALTA_7',
    onEachFeature: pop_ZONAALTA_7,
    style: style_ZONAALTA_7_0,
});
bounds_group.addLayer(layer_ZONAALTA_7);
map.addLayer(layer_ZONAALTA_7);
function pop_RIOMAGDALENA_8(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">RIOMAGNAD2</th>\
                <td>' + (feature.properties['RIOMAGNAD2'] !== null ? autolinker.link(feature.properties['RIOMAGNAD2'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">LONGITUD</th>\
                <td>' + (feature.properties['LONGITUD'] !== null ? autolinker.link(feature.properties['LONGITUD'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SUELO</th>\
                <td>' + (feature.properties['SUELO'] !== null ? autolinker.link(feature.properties['SUELO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">TIPO_RIO</th>\
                <td>' + (feature.properties['TIPO_RIO'] !== null ? autolinker.link(feature.properties['TIPO_RIO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">TIPO_2</th>\
                <td>' + (feature.properties['TIPO_2'] !== null ? autolinker.link(feature.properties['TIPO_2'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_RIOMAGDALENA_8_0() {
    return {
        pane: 'pane_RIOMAGDALENA_8',
        opacity: 1,
        color: 'rgba(65,111,164,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 3.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_RIOMAGDALENA_8');
map.getPane('pane_RIOMAGDALENA_8').style.zIndex = 408;
map.getPane('pane_RIOMAGDALENA_8').style['mix-blend-mode'] = 'normal';
var layer_RIOMAGDALENA_8 = new L.geoJson(json_RIOMAGDALENA_8, {
    attribution: '',
    interactive: true,
    dataVar: 'json_RIOMAGDALENA_8',
    layerName: 'layer_RIOMAGDALENA_8',
    pane: 'pane_RIOMAGDALENA_8',
    onEachFeature: pop_RIOMAGDALENA_8,
    style: style_RIOMAGDALENA_8_0,
});
bounds_group.addLayer(layer_RIOMAGDALENA_8);
map.addLayer(layer_RIOMAGDALENA_8);
var baseMaps = {};
L.control.layers(baseMaps,{'<img src="map_home_page/legend/RIOMAGDALENA_8.png" /> RÍO MAGDALENA': layer_RIOMAGDALENA_8,'<img src="map_home_page/legend/ZONAALTA_7.png" /> ZONA ALTA': layer_ZONAALTA_7,'<img src="map_home_page/legend/SITIOSDEREFERENCIA_6.png" /> SITIOS DE REFERENCIA': layer_SITIOSDEREFERENCIA_6,'<img src="map_home_page/legend/ZAsitiosreferencia_5.png" /> ZA sitios referencia': layer_ZAsitiosreferencia_5,'<img src="map_home_page/legend/ZBsitiosreferencia_4.png" /> ZB sitios referencia': layer_ZBsitiosreferencia_4,'<img src="map_home_page/legend/ZMsitiosreferencia_3.png" /> ZM sitios referencia': layer_ZMsitiosreferencia_3,'<img src="map_home_page/legend/ZONABAJA_2.png" /> ZONA BAJA': layer_ZONABAJA_2,'<img src="map_home_page/legend/ZONAMEDIA_1.png" /> ZONA MEDIA': layer_ZONAMEDIA_1,},{collapsed:true}).addTo(map);
setBounds();


function mostrarZonaAlta(){
    map.removeLayer(layer_RIOMAGDALENA_8)
    map.removeLayer(layer_ZONAALTA_7)
    map.removeLayer(layer_SITIOSDEREFERENCIA_6)
    map.removeLayer(layer_ZAsitiosreferencia_5)
    map.removeLayer(layer_ZBsitiosreferencia_4)
    map.removeLayer(layer_ZMsitiosreferencia_3)
    map.removeLayer(layer_ZONABAJA_2)
    map.removeLayer(layer_ZONAMEDIA_1)
    map.addLayer(layer_ZONAALTA_7)
}

function mostrarZonaMedia(){
    map.removeLayer(layer_RIOMAGDALENA_8)
    map.removeLayer(layer_ZONAALTA_7)
    map.removeLayer(layer_SITIOSDEREFERENCIA_6)
    map.removeLayer(layer_ZAsitiosreferencia_5)
    map.removeLayer(layer_ZBsitiosreferencia_4)
    map.removeLayer(layer_ZMsitiosreferencia_3)
    map.removeLayer(layer_ZONABAJA_2)
    map.removeLayer(layer_ZONAMEDIA_1)
    map.addLayer(layer_ZONAMEDIA_1)
}

function mostrarZonaBaja(){
    map.removeLayer(layer_RIOMAGDALENA_8)
    map.removeLayer(layer_ZONAALTA_7)
    map.removeLayer(layer_SITIOSDEREFERENCIA_6)
    map.removeLayer(layer_ZAsitiosreferencia_5)
    map.removeLayer(layer_ZBsitiosreferencia_4)
    map.removeLayer(layer_ZMsitiosreferencia_3)
    map.removeLayer(layer_ZONABAJA_2)
    map.removeLayer(layer_ZONAMEDIA_1)
    map.addLayer(layer_ZONABAJA_2)
}