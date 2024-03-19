var wms_layers = [];


        var lyr_BakgrundskartaOSMStandard_0 = new ol.layer.Tile({
            'title': 'Bakgrundskarta OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_BakgrundskartaCartoLight_1 = new ol.layer.Tile({
            'title': 'Bakgrundskarta Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Vinkomrde_2 = new ol.format.GeoJSON();
var features_Vinkomrde_2 = format_Vinkomrde_2.readFeatures(json_Vinkomrde_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vinkomrde_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vinkomrde_2.addFeatures(features_Vinkomrde_2);
var lyr_Vinkomrde_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vinkomrde_2, 
                style: style_Vinkomrde_2,
                popuplayertitle: "Vinkområde",
                interactive: true,
                title: '<img src="styles/legend/Vinkomrde_2.png" /> Vinkområde'
            });
var format_Upptagningsomrde600m_3 = new ol.format.GeoJSON();
var features_Upptagningsomrde600m_3 = format_Upptagningsomrde600m_3.readFeatures(json_Upptagningsomrde600m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Upptagningsomrde600m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Upptagningsomrde600m_3.addFeatures(features_Upptagningsomrde600m_3);
var lyr_Upptagningsomrde600m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Upptagningsomrde600m_3, 
                style: style_Upptagningsomrde600m_3,
                popuplayertitle: "Upptagningsområde 600 m",
                interactive: true,
                title: '<img src="styles/legend/Upptagningsomrde600m_3.png" /> Upptagningsområde 600 m'
            });
var format_Upptagningsomrde400m_4 = new ol.format.GeoJSON();
var features_Upptagningsomrde400m_4 = format_Upptagningsomrde400m_4.readFeatures(json_Upptagningsomrde400m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Upptagningsomrde400m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Upptagningsomrde400m_4.addFeatures(features_Upptagningsomrde400m_4);
var lyr_Upptagningsomrde400m_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Upptagningsomrde400m_4, 
                style: style_Upptagningsomrde400m_4,
                popuplayertitle: "Upptagningsområde 400 m",
                interactive: true,
                title: '<img src="styles/legend/Upptagningsomrde400m_4.png" /> Upptagningsområde 400 m'
            });
var format_HllplatserutanDagNattbefolkning_5 = new ol.format.GeoJSON();
var features_HllplatserutanDagNattbefolkning_5 = format_HllplatserutanDagNattbefolkning_5.readFeatures(json_HllplatserutanDagNattbefolkning_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HllplatserutanDagNattbefolkning_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HllplatserutanDagNattbefolkning_5.addFeatures(features_HllplatserutanDagNattbefolkning_5);
var lyr_HllplatserutanDagNattbefolkning_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HllplatserutanDagNattbefolkning_5, 
                style: style_HllplatserutanDagNattbefolkning_5,
                popuplayertitle: "Hållplatser utan Dag- & Nattbefolkning",
                interactive: true,
                title: '<img src="styles/legend/HllplatserutanDagNattbefolkning_5.png" /> Hållplatser utan Dag- & Nattbefolkning'
            });
var format_TotalBefolkning2022_6 = new ol.format.GeoJSON();
var features_TotalBefolkning2022_6 = format_TotalBefolkning2022_6.readFeatures(json_TotalBefolkning2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalBefolkning2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalBefolkning2022_6.addFeatures(features_TotalBefolkning2022_6);
var lyr_TotalBefolkning2022_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalBefolkning2022_6, 
                style: style_TotalBefolkning2022_6,
                popuplayertitle: "Total Befolkning 2022",
                interactive: true,
    title: 'Total Befolkning 2022<br />\
    <img src="styles/legend/TotalBefolkning2022_6_0.png" /> 1 - 25<br />\
    <img src="styles/legend/TotalBefolkning2022_6_1.png" /> 25 - 50<br />\
    <img src="styles/legend/TotalBefolkning2022_6_2.png" /> 50 - 100<br />\
    <img src="styles/legend/TotalBefolkning2022_6_3.png" /> 100 - 200<br />\
    <img src="styles/legend/TotalBefolkning2022_6_4.png" /> 200 - 400<br />\
    <img src="styles/legend/TotalBefolkning2022_6_5.png" /> 400 - 800<br />\
    <img src="styles/legend/TotalBefolkning2022_6_6.png" /> 800 - 24658<br />'
        });
var format_Nattbefolkning2017_7 = new ol.format.GeoJSON();
var features_Nattbefolkning2017_7 = format_Nattbefolkning2017_7.readFeatures(json_Nattbefolkning2017_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nattbefolkning2017_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nattbefolkning2017_7.addFeatures(features_Nattbefolkning2017_7);
var lyr_Nattbefolkning2017_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nattbefolkning2017_7, 
                style: style_Nattbefolkning2017_7,
                popuplayertitle: "Nattbefolkning 2017",
                interactive: true,
    title: 'Nattbefolkning 2017<br />\
    <img src="styles/legend/Nattbefolkning2017_7_0.png" /> 1 - 25<br />\
    <img src="styles/legend/Nattbefolkning2017_7_1.png" /> 25 - 50<br />\
    <img src="styles/legend/Nattbefolkning2017_7_2.png" /> 50 - 100<br />\
    <img src="styles/legend/Nattbefolkning2017_7_3.png" /> 100 - 200<br />\
    <img src="styles/legend/Nattbefolkning2017_7_4.png" /> 200 - 400<br />\
    <img src="styles/legend/Nattbefolkning2017_7_5.png" /> 400 - 624<br />'
        });
var format_Dagbefolkning2017_8 = new ol.format.GeoJSON();
var features_Dagbefolkning2017_8 = format_Dagbefolkning2017_8.readFeatures(json_Dagbefolkning2017_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dagbefolkning2017_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dagbefolkning2017_8.addFeatures(features_Dagbefolkning2017_8);
var lyr_Dagbefolkning2017_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dagbefolkning2017_8, 
                style: style_Dagbefolkning2017_8,
                popuplayertitle: "Dagbefolkning 2017",
                interactive: true,
    title: 'Dagbefolkning 2017<br />\
    <img src="styles/legend/Dagbefolkning2017_8_0.png" /> 1 - 25<br />\
    <img src="styles/legend/Dagbefolkning2017_8_1.png" /> 25 - 50<br />\
    <img src="styles/legend/Dagbefolkning2017_8_2.png" /> 50 - 100<br />\
    <img src="styles/legend/Dagbefolkning2017_8_3.png" /> 100 - 200<br />\
    <img src="styles/legend/Dagbefolkning2017_8_4.png" /> 200 - 400<br />\
    <img src="styles/legend/Dagbefolkning2017_8_5.png" /> 400 - 11866<br />'
        });
var format_KollektivtrafiklinjerStockholmnord_9 = new ol.format.GeoJSON();
var features_KollektivtrafiklinjerStockholmnord_9 = format_KollektivtrafiklinjerStockholmnord_9.readFeatures(json_KollektivtrafiklinjerStockholmnord_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KollektivtrafiklinjerStockholmnord_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KollektivtrafiklinjerStockholmnord_9.addFeatures(features_KollektivtrafiklinjerStockholmnord_9);
var lyr_KollektivtrafiklinjerStockholmnord_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KollektivtrafiklinjerStockholmnord_9, 
                style: style_KollektivtrafiklinjerStockholmnord_9,
                popuplayertitle: "Kollektivtrafiklinjer Stockholm-nord",
                interactive: true,
                title: '<img src="styles/legend/KollektivtrafiklinjerStockholmnord_9.png" /> Kollektivtrafiklinjer Stockholm-nord'
            });
var format_Antalturerpvardagarmellanhllplatser_10 = new ol.format.GeoJSON();
var features_Antalturerpvardagarmellanhllplatser_10 = format_Antalturerpvardagarmellanhllplatser_10.readFeatures(json_Antalturerpvardagarmellanhllplatser_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antalturerpvardagarmellanhllplatser_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antalturerpvardagarmellanhllplatser_10.addFeatures(features_Antalturerpvardagarmellanhllplatser_10);
var lyr_Antalturerpvardagarmellanhllplatser_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Antalturerpvardagarmellanhllplatser_10, 
                style: style_Antalturerpvardagarmellanhllplatser_10,
                popuplayertitle: "Antal turer på vardagar mellan hållplatser",
                interactive: true,
                title: '<img src="styles/legend/Antalturerpvardagarmellanhllplatser_10.png" /> Antal turer på vardagar mellan hållplatser'
            });
var format_Antalturerpvardagarfrnhllplatser_11 = new ol.format.GeoJSON();
var features_Antalturerpvardagarfrnhllplatser_11 = format_Antalturerpvardagarfrnhllplatser_11.readFeatures(json_Antalturerpvardagarfrnhllplatser_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antalturerpvardagarfrnhllplatser_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antalturerpvardagarfrnhllplatser_11.addFeatures(features_Antalturerpvardagarfrnhllplatser_11);
var lyr_Antalturerpvardagarfrnhllplatser_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Antalturerpvardagarfrnhllplatser_11, 
                style: style_Antalturerpvardagarfrnhllplatser_11,
                popuplayertitle: "Antal turer på vardagar från hållplatser",
                interactive: true,
    title: 'Antal turer på vardagar från hållplatser<br />\
    <img src="styles/legend/Antalturerpvardagarfrnhllplatser_11_0.png" /> 1 - 25<br />\
    <img src="styles/legend/Antalturerpvardagarfrnhllplatser_11_1.png" /> 25 - 125<br />\
    <img src="styles/legend/Antalturerpvardagarfrnhllplatser_11_2.png" /> 125 - 250<br />\
    <img src="styles/legend/Antalturerpvardagarfrnhllplatser_11_3.png" /> 250 - 2905<br />'
        });
var format_HllplatserochStationerAggregerad_12 = new ol.format.GeoJSON();
var features_HllplatserochStationerAggregerad_12 = format_HllplatserochStationerAggregerad_12.readFeatures(json_HllplatserochStationerAggregerad_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HllplatserochStationerAggregerad_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HllplatserochStationerAggregerad_12.addFeatures(features_HllplatserochStationerAggregerad_12);
var lyr_HllplatserochStationerAggregerad_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HllplatserochStationerAggregerad_12, 
                style: style_HllplatserochStationerAggregerad_12,
                popuplayertitle: "Hållplatser och Stationer Aggregerad",
                interactive: true,
                title: '<img src="styles/legend/HllplatserochStationerAggregerad_12.png" /> Hållplatser och Stationer Aggregerad'
            });
var format_HllplatserochStationerConsatsHastus_13 = new ol.format.GeoJSON();
var features_HllplatserochStationerConsatsHastus_13 = format_HllplatserochStationerConsatsHastus_13.readFeatures(json_HllplatserochStationerConsatsHastus_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HllplatserochStationerConsatsHastus_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HllplatserochStationerConsatsHastus_13.addFeatures(features_HllplatserochStationerConsatsHastus_13);
var lyr_HllplatserochStationerConsatsHastus_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HllplatserochStationerConsatsHastus_13, 
                style: style_HllplatserochStationerConsatsHastus_13,
                popuplayertitle: "Hållplatser och Stationer Consats&Hastus",
                interactive: true,
                title: '<img src="styles/legend/HllplatserochStationerConsatsHastus_13.png" /> Hållplatser och Stationer Consats&Hastus'
            });
var format_KommungrnserStockholmRegion_14 = new ol.format.GeoJSON();
var features_KommungrnserStockholmRegion_14 = format_KommungrnserStockholmRegion_14.readFeatures(json_KommungrnserStockholmRegion_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KommungrnserStockholmRegion_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KommungrnserStockholmRegion_14.addFeatures(features_KommungrnserStockholmRegion_14);
var lyr_KommungrnserStockholmRegion_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KommungrnserStockholmRegion_14, 
                style: style_KommungrnserStockholmRegion_14,
                popuplayertitle: "Kommungränser Stockholm Region",
                interactive: true,
                title: '<img src="styles/legend/KommungrnserStockholmRegion_14.png" /> Kommungränser Stockholm Region'
            });
var group_Kommuner = new ol.layer.Group({
                                layers: [lyr_KommungrnserStockholmRegion_14,],
                                title: "Kommuner"});
var group_Hllplatserochstationer = new ol.layer.Group({
                                layers: [lyr_HllplatserochStationerAggregerad_12,lyr_HllplatserochStationerConsatsHastus_13,],
                                title: "Hållplatser och stationer"});
var group_Turtthet = new ol.layer.Group({
                                layers: [lyr_Antalturerpvardagarmellanhllplatser_10,lyr_Antalturerpvardagarfrnhllplatser_11,],
                                title: "Turtäthet"});
var group_Linjer = new ol.layer.Group({
                                layers: [lyr_KollektivtrafiklinjerStockholmnord_9,],
                                title: "Linjer"});
var group_Befolkning = new ol.layer.Group({
                                layers: [lyr_TotalBefolkning2022_6,lyr_Nattbefolkning2017_7,lyr_Dagbefolkning2017_8,],
                                title: "Befolkning"});
var group_Upptagningsomrde = new ol.layer.Group({
                                layers: [lyr_Vinkomrde_2,lyr_Upptagningsomrde600m_3,lyr_Upptagningsomrde400m_4,lyr_HllplatserutanDagNattbefolkning_5,],
                                title: "Upptagningsområde"});
var group_BakgrundskartaCartoLight = new ol.layer.Group({
                                layers: [lyr_BakgrundskartaCartoLight_1,],
                                title: "Bakgrundskarta Carto Light"});
var group_BakgrundskartaOSMStandard = new ol.layer.Group({
                                layers: [lyr_BakgrundskartaOSMStandard_0,],
                                title: "Bakgrundskarta OSM Standard"});

lyr_BakgrundskartaOSMStandard_0.setVisible(false);lyr_BakgrundskartaCartoLight_1.setVisible(true);lyr_Vinkomrde_2.setVisible(false);lyr_Upptagningsomrde600m_3.setVisible(false);lyr_Upptagningsomrde400m_4.setVisible(false);lyr_HllplatserutanDagNattbefolkning_5.setVisible(false);lyr_TotalBefolkning2022_6.setVisible(false);lyr_Nattbefolkning2017_7.setVisible(false);lyr_Dagbefolkning2017_8.setVisible(false);lyr_KollektivtrafiklinjerStockholmnord_9.setVisible(false);lyr_Antalturerpvardagarmellanhllplatser_10.setVisible(false);lyr_Antalturerpvardagarfrnhllplatser_11.setVisible(false);lyr_HllplatserochStationerAggregerad_12.setVisible(false);lyr_HllplatserochStationerConsatsHastus_13.setVisible(false);lyr_KommungrnserStockholmRegion_14.setVisible(true);
var layersList = [group_BakgrundskartaOSMStandard,group_BakgrundskartaCartoLight,group_Upptagningsomrde,group_Befolkning,group_Linjer,group_Turtthet,group_Hllplatserochstationer,group_Kommuner];
lyr_Vinkomrde_2.set('fieldAliases', {'fid': 'fid', 'Busslinje': 'Busslinje', });
lyr_Upptagningsomrde600m_3.set('fieldAliases', {'fid': 'fid', 'similar_stop_name': 'similar_stop_name', 'stopid': 'stopid', 'StombussPendel': 'StombussPendel', });
lyr_Upptagningsomrde400m_4.set('fieldAliases', {'fid': 'fid', 'similar_stop_name': 'similar_stop_name', 'stopid': 'stopid', 'StombussPendel': 'StombussPendel', });
lyr_HllplatserutanDagNattbefolkning_5.set('fieldAliases', {'fid': 'fid', 'similar_stop_name': 'similar_stop_name', 'similar_stop_id': 'similar_stop_id', 'count': 'count', 'stopid': 'stopid', });
lyr_TotalBefolkning2022_6.set('fieldAliases', {'fid': 'fid', 'Totalbefolkning': 'Totalbefolkning', });
lyr_Nattbefolkning2017_7.set('fieldAliases', {'fid': 'fid', 'Nattbefolkning': 'Nattbefolkning', });
lyr_Dagbefolkning2017_8.set('fieldAliases', {'fid': 'fid', 'Dagbefolkning': 'Dagbefolkning', 'Nattbefolkning': 'Nattbefolkning', });
lyr_KollektivtrafiklinjerStockholmnord_9.set('fieldAliases', {'fid': 'fid', 'route_id': 'route_id', 'Linjenummer': 'Linjenummer', });
lyr_Antalturerpvardagarmellanhllplatser_10.set('fieldAliases', {'fid': 'fid', 'Antal turer vardagar mellan hptser': 'Antal turer vardagar mellan hptser', 'prev_stop_id': 'prev_stop_id', 'prev_stop_name': 'prev_stop_name', 'next_stop_id': 'next_stop_id', 'next_stop_name': 'next_stop_name', 'agency_id': 'agency_id', 'agency_name': 'agency_name', });
lyr_Antalturerpvardagarfrnhllplatser_11.set('fieldAliases', {'fid': 'fid', 'similar_stop_name': 'similar_stop_name', 'similar_stop_id': 'similar_stop_id', 'Antal turer vardag från hållplatser': 'Antal turer vardag från hållplatser', });
lyr_HllplatserochStationerAggregerad_12.set('fieldAliases', {'fid': 'fid', 'similar_stop_name': 'similar_stop_name', 'similar_stop_id': 'similar_stop_id', 'count': 'count', 'stopid': 'stopid', 'StombussPendel': 'StombussPendel', });
lyr_HllplatserochStationerConsatsHastus_13.set('fieldAliases', {'fid': 'fid', 'stopPoint': 'stopPoint', 'stopPointName': 'stopPointName', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_KommungrnserStockholmRegion_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'parent_id': 'parent_id', 'name': 'name', 'placetype': 'placetype', 'placelocal': 'placelocal', 'country': 'country', 'population': 'Befolkning', 'country_id': 'country_id', 'region_id': 'region_id', 'county_id': 'county_id', 'Komunnamn': 'Komunnamn', });
lyr_Vinkomrde_2.set('fieldImages', {'fid': 'Hidden', 'Busslinje': 'Range', });
lyr_Upptagningsomrde600m_3.set('fieldImages', {'fid': 'Hidden', 'similar_stop_name': 'TextEdit', 'stopid': 'Hidden', 'StombussPendel': 'Hidden', });
lyr_Upptagningsomrde400m_4.set('fieldImages', {'fid': 'Hidden', 'similar_stop_name': 'TextEdit', 'stopid': 'Hidden', 'StombussPendel': 'Hidden', });
lyr_HllplatserutanDagNattbefolkning_5.set('fieldImages', {'fid': 'Hidden', 'similar_stop_name': 'TextEdit', 'similar_stop_id': 'Hidden', 'count': 'Hidden', 'stopid': 'Hidden', });
lyr_TotalBefolkning2022_6.set('fieldImages', {'fid': 'Hidden', 'Totalbefolkning': 'Range', });
lyr_Nattbefolkning2017_7.set('fieldImages', {'fid': 'Hidden', 'Nattbefolkning': 'TextEdit', });
lyr_Dagbefolkning2017_8.set('fieldImages', {'fid': 'Hidden', 'Dagbefolkning': 'TextEdit', 'Nattbefolkning': 'Hidden', });
lyr_KollektivtrafiklinjerStockholmnord_9.set('fieldImages', {'fid': 'Hidden', 'route_id': 'Hidden', 'Linjenummer': 'UniqueValues', });
lyr_Antalturerpvardagarmellanhllplatser_10.set('fieldImages', {'fid': 'Hidden', 'Antal turer vardagar mellan hptser': 'Range', 'prev_stop_id': 'Hidden', 'prev_stop_name': 'Hidden', 'next_stop_id': 'Hidden', 'next_stop_name': 'Hidden', 'agency_id': 'Hidden', 'agency_name': 'Hidden', });
lyr_Antalturerpvardagarfrnhllplatser_11.set('fieldImages', {'fid': 'Hidden', 'similar_stop_name': 'Hidden', 'similar_stop_id': 'Hidden', 'Antal turer vardag från hållplatser': 'TextEdit', });
lyr_HllplatserochStationerAggregerad_12.set('fieldImages', {'fid': 'Hidden', 'similar_stop_name': 'TextEdit', 'similar_stop_id': 'Hidden', 'count': 'Hidden', 'stopid': 'Hidden', 'StombussPendel': 'Hidden', });
lyr_HllplatserochStationerConsatsHastus_13.set('fieldImages', {'fid': 'Hidden', 'stopPoint': 'Hidden', 'stopPointName': 'TextEdit', 'longitude': 'Hidden', 'latitude': 'Hidden', });
lyr_KommungrnserStockholmRegion_14.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'parent_id': 'Hidden', 'name': 'Hidden', 'placetype': 'Hidden', 'placelocal': 'Hidden', 'country': 'Hidden', 'population': 'Range', 'country_id': 'Hidden', 'region_id': 'Hidden', 'county_id': 'Hidden', 'Komunnamn': 'TextEdit', });
lyr_Vinkomrde_2.set('fieldLabels', {});
lyr_Upptagningsomrde600m_3.set('fieldLabels', {});
lyr_Upptagningsomrde400m_4.set('fieldLabels', {});
lyr_HllplatserutanDagNattbefolkning_5.set('fieldLabels', {});
lyr_TotalBefolkning2022_6.set('fieldLabels', {});
lyr_Nattbefolkning2017_7.set('fieldLabels', {});
lyr_Dagbefolkning2017_8.set('fieldLabels', {});
lyr_KollektivtrafiklinjerStockholmnord_9.set('fieldLabels', {});
lyr_Antalturerpvardagarmellanhllplatser_10.set('fieldLabels', {});
lyr_Antalturerpvardagarfrnhllplatser_11.set('fieldLabels', {});
lyr_HllplatserochStationerAggregerad_12.set('fieldLabels', {});
lyr_HllplatserochStationerConsatsHastus_13.set('fieldLabels', {});
lyr_KommungrnserStockholmRegion_14.set('fieldLabels', {});
lyr_KommungrnserStockholmRegion_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});