var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PerimetroABA_1 = new ol.format.GeoJSON();
var features_PerimetroABA_1 = format_PerimetroABA_1.readFeatures(json_PerimetroABA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroABA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroABA_1.addFeatures(features_PerimetroABA_1);
var lyr_PerimetroABA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroABA_1, 
                style: style_PerimetroABA_1,
                popuplayertitle: 'Perimetro ABA',
                interactive: true,
                title: '<img src="styles/legend/PerimetroABA_1.png" /> Perimetro ABA'
            });
var format_ClasificacinSupervisadaTRESCRUCES_2 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaTRESCRUCES_2 = format_ClasificacinSupervisadaTRESCRUCES_2.readFeatures(json_ClasificacinSupervisadaTRESCRUCES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaTRESCRUCES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaTRESCRUCES_2.addFeatures(features_ClasificacinSupervisadaTRESCRUCES_2);
var lyr_ClasificacinSupervisadaTRESCRUCES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaTRESCRUCES_2, 
                style: style_ClasificacinSupervisadaTRESCRUCES_2,
                popuplayertitle: 'Clasificación Supervisada TRES CRUCES',
                interactive: true,
    title: 'Clasificación Supervisada TRES CRUCES<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_1.png" /> 2 - ARBOLES<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_2.png" /> 3 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_3.png" /> 4 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_4.png" /> 5 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_5.png" /> 6 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_6.png" /> 7 - PASTO BOMBAZA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_7.png" /> 8 - PASTO FORRAJERO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_8.png" /> 9 - PASTO GATOMPANIA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_9.png" /> 10 - SOYA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_10.png" /> 11 - SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_2_11.png" /> 12 - VEGETACION<br />' });
var format_ClasificacinSupervisadaKORYMAYU_3 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaKORYMAYU_3 = format_ClasificacinSupervisadaKORYMAYU_3.readFeatures(json_ClasificacinSupervisadaKORYMAYU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaKORYMAYU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaKORYMAYU_3.addFeatures(features_ClasificacinSupervisadaKORYMAYU_3);
var lyr_ClasificacinSupervisadaKORYMAYU_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaKORYMAYU_3, 
                style: style_ClasificacinSupervisadaKORYMAYU_3,
                popuplayertitle: 'Clasificación Supervisada KORY MAYU',
                interactive: true,
    title: 'Clasificación Supervisada KORY MAYU<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_0.png" /> 1- AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_1.png" /> 2 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_2.png" /> 3 - CEBOLLA<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_3.png" /> 4 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_4.png" /> 5 - DURAZNO<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_5.png" /> 6 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_6.png" /> 7 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_7.png" /> 8 - PAPA<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_8.png" /> 9 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_9.png" /> 10 - SUELO<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_3_10.png" /> 11 - VEGETACION<br />' });
var format_ClasificacinCultivoTRESCRUCES_4 = new ol.format.GeoJSON();
var features_ClasificacinCultivoTRESCRUCES_4 = format_ClasificacinCultivoTRESCRUCES_4.readFeatures(json_ClasificacinCultivoTRESCRUCES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinCultivoTRESCRUCES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinCultivoTRESCRUCES_4.addFeatures(features_ClasificacinCultivoTRESCRUCES_4);
var lyr_ClasificacinCultivoTRESCRUCES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinCultivoTRESCRUCES_4, 
                style: style_ClasificacinCultivoTRESCRUCES_4,
                popuplayertitle: 'Clasificación Cultivo TRES CRUCES',
                interactive: true,
    title: 'Clasificación Cultivo TRES CRUCES<br />\
    <img src="styles/legend/ClasificacinCultivoTRESCRUCES_4_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/ClasificacinCultivoTRESCRUCES_4_1.png" /> AREA NO CULTIVADA<br />' });
var format_ClasificacinCultivoKORYMAYU_5 = new ol.format.GeoJSON();
var features_ClasificacinCultivoKORYMAYU_5 = format_ClasificacinCultivoKORYMAYU_5.readFeatures(json_ClasificacinCultivoKORYMAYU_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinCultivoKORYMAYU_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinCultivoKORYMAYU_5.addFeatures(features_ClasificacinCultivoKORYMAYU_5);
var lyr_ClasificacinCultivoKORYMAYU_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinCultivoKORYMAYU_5, 
                style: style_ClasificacinCultivoKORYMAYU_5,
                popuplayertitle: 'Clasificación Cultivo KORY MAYU',
                interactive: true,
    title: 'Clasificación Cultivo KORY MAYU<br />\
    <img src="styles/legend/ClasificacinCultivoKORYMAYU_5_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/ClasificacinCultivoKORYMAYU_5_1.png" /> AREA NO CULTIVADA<br />' });
var format_MuestrasCampo_6 = new ol.format.GeoJSON();
var features_MuestrasCampo_6 = format_MuestrasCampo_6.readFeatures(json_MuestrasCampo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MuestrasCampo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MuestrasCampo_6.addFeatures(features_MuestrasCampo_6);
cluster_MuestrasCampo_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MuestrasCampo_6
});
var lyr_MuestrasCampo_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MuestrasCampo_6, 
                style: style_MuestrasCampo_6,
                popuplayertitle: 'Muestras Campo',
                interactive: true,
                title: '<img src="styles/legend/MuestrasCampo_6.png" /> Muestras Campo'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PerimetroABA_1.setVisible(true);lyr_ClasificacinSupervisadaTRESCRUCES_2.setVisible(true);lyr_ClasificacinSupervisadaKORYMAYU_3.setVisible(true);lyr_ClasificacinCultivoTRESCRUCES_4.setVisible(true);lyr_ClasificacinCultivoKORYMAYU_5.setVisible(true);lyr_MuestrasCampo_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PerimetroABA_1,lyr_ClasificacinSupervisadaTRESCRUCES_2,lyr_ClasificacinSupervisadaKORYMAYU_3,lyr_ClasificacinCultivoTRESCRUCES_4,lyr_ClasificacinCultivoKORYMAYU_5,lyr_MuestrasCampo_6];
lyr_PerimetroABA_1.set('fieldAliases', {'Depto.': 'Depto.', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'A. Cult.': 'A. Cult.', 'A. no Cul': 'A. no Cul', });
lyr_ClasificacinSupervisadaTRESCRUCES_2.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisadaKORYMAYU_3.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinCultivoTRESCRUCES_4.set('fieldAliases', {'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Region': 'Region', 'Comunidad': 'Comunidad', 'Area ha': 'Area ha', 'Cultivo': 'Cultivo', });
lyr_ClasificacinCultivoKORYMAYU_5.set('fieldAliases', {'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Region': 'Region', 'Comunidad': 'Comunidad', 'Area ha': 'Area ha', 'Cultivo': 'Cultivo', });
lyr_MuestrasCampo_6.set('fieldAliases', {'Productor': 'Productor', 'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Cult.Campo': 'Cult.Campo', 'Area ha.': 'Area ha.', });
lyr_PerimetroABA_1.set('fieldImages', {'Depto.': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'A. Cult.': 'TextEdit', 'A. no Cul': 'TextEdit', });
lyr_ClasificacinSupervisadaTRESCRUCES_2.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': 'TextEdit', });
lyr_ClasificacinSupervisadaKORYMAYU_3.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': '', });
lyr_ClasificacinCultivoTRESCRUCES_4.set('fieldImages', {'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Region': 'TextEdit', 'Comunidad': 'TextEdit', 'Area ha': 'TextEdit', 'Cultivo': 'TextEdit', });
lyr_ClasificacinCultivoKORYMAYU_5.set('fieldImages', {'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Region': 'TextEdit', 'Comunidad': 'TextEdit', 'Area ha': 'TextEdit', 'Cultivo': 'TextEdit', });
lyr_MuestrasCampo_6.set('fieldImages', {'Productor': 'TextEdit', 'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Cult.Campo': 'TextEdit', 'Area ha.': 'TextEdit', });
lyr_PerimetroABA_1.set('fieldLabels', {'Depto.': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'A. Cult.': 'inline label - always visible', 'A. no Cul': 'inline label - always visible', });
lyr_ClasificacinSupervisadaTRESCRUCES_2.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisadaKORYMAYU_3.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinCultivoTRESCRUCES_4.set('fieldLabels', {'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Region': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Area ha': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinCultivoKORYMAYU_5.set('fieldLabels', {'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Region': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Area ha': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_MuestrasCampo_6.set('fieldLabels', {'Productor': 'inline label - always visible', 'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Cult.Campo': 'inline label - always visible', 'Area ha.': 'inline label - always visible', });
lyr_MuestrasCampo_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});