var map = L.map('mapid').setView([49.586956, 34.552131], 18);

// GrayScale map
var osmGray = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});

// Colored Layer
var OSMColored = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);



//add choose base Layer
var baseMaps = {
    COLOR: OSMColored,
    GRAY: osmGray
};

L.control.layers(baseMaps, {}).addTo(map);
//

///// add Polygon - all data are located in geojson.js file

L.polygon(latlngs1, {
    color: 'green',
    fillOpacity: 0.1
}).bindPopup('Зона 1 - 71').addTo(map);


L.polygon(latlngs2, {
    color: 'blue',
    fillOpacity: 0.1
}).bindPopup('Зона 2 - 40').addTo(map);


L.polygon(latlngs3, {
    color: 'grey',
    fillOpacity: 0.1
}).bindPopup('Зона 3 - 46').addTo(map);


L.polygon(latlngs4, {
    color: 'brown',
    fillOpacity: 0.1
}).bindPopup('Зона 4 - 18').addTo(map);


L.polygon(latlngs5, {
    color: 'green',
    fillOpacity: 0.1
}).bindPopup('Зона 5 - 50').addTo(map);


L.polygon(latlngs8, {
    color: 'red',
    fillOpacity: 0.1
}).bindPopup('Зона 8 - 6').addTo(map);


L.polygon(latlngs7, {
    color: 'black',
    fillOpacity: 0.1
}).bindPopup('Зона 7 - 20').addTo(map);


L.polygon(latlngs6, {
    color: 'blue',
    fillOpacity: 0.1
}).bindPopup('Зона 6 - 29').addTo(map);


///------------ example of how to Draw circleMarker -------------------------------//
// var latLngCircle = [49.594992, 34.574514];
// var circleMarker = L.circleMarker(latLngCircle, {
//     color: '#3388ff',
//     radius: 5
// }).bindPopup('111').addTo(map);






///-------------------------------------------------------------
// --------- additional -  which is located on the right side of the window ------------- //
// --------add LEAFLET-GEOMAN  Plugin controls with some options to the map
///-------------------------------------------------------------
map.pm.addControls({
    position: 'topright',
    drawCircle: false,
});




/////-------------------------------------------------
///        insert main circleMarker                  ///
/////-------------------------------------------------
function styleGeoJson(feature, layer) {
    var popupContent = "<b>Номер: </b>" + feature.properties.id + "</br><b>Имя: </b> " + feature.properties.name + "</br><b>Адресс: </b>" + feature.properties.address + "</br><b>Город: </b>" + feature.properties.city + "</br><b>Собрание: </b>" + feature.properties.congregation + "</br><b>Телефон: </b>" + feature.properties.tel;

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}

///////////////////////////////////
L.geoJSON(servants, {

    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: styleGeoJson,


    pointToLayer: function (feature, latlng) {
        var colors = {
            'Браилки': 'green',
            'Центральное': 'blue',
            'Юровка': 'red',
            'Восточное': 'black',

        }


        return L.circleMarker(latlng, {
            radius: 7,
            fillColor: colors[feature.properties.congregation],
            color: colors[feature.properties.congregation],
            weight: 1,
            opacity: 1,
            fillOpacity: 0.4,
        });
    }
}).addTo(map);


/////-------------------------------------------------
//// the code bellow will help you to get any coordinates on map
/////-------------------------------------------------
// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);





// --------------------------------------------
// add slide panel legend
//---------------------------------------------
$(document).ready(function () {
    // $(".form1").addClass("hide");
    $("#formButton").click(function () {
        $(".form1").toggle();
    });
});


// ------------------------------------------------------------------------------------------------------------------
// ------------    code from YouTube - Leaflet. Взаимосвязь карты с элементами DOM --------------
// ------------------------------------------------------------------------------------------------------------------
var divMain = document.getElementById('myTable-thead');
// console.log(divMain);

var tbody = document.createElement("tbody");
tbody.setAttribute("id", "myTbody");
divMain.after(tbody);

//// add tHeader
// var tbody = document.createElement('thead');
// thead.innerHTML = 'Header';


// build table
var data = [];

wcp.features.map((feature, index) => {
    data.push(feature.properties.name);
    //console.log(index);
    index = index + 1;
    var name = feature.properties.name;
    var latLong = feature.geometry.coordinates;

    //console.log(latLong);


    //console.log(feature.properties.name);
    row = document.createElement("tr");
    col1 = document.createElement("th");
    col2 = document.createElement("th");
    var refCell = document.createElement("td");
    var itemCell = document.createElement("td");

    var ref = document.createTextNode(index);
    //console.log("ref-", ref);

    var item = document.createTextNode(name);
    // console.log("item-", item);

    tbody.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
    refCell.appendChild(ref);
    itemCell.appendChild(item);

    col1.appendChild(refCell);
    // col1.appendChild();
    col2.appendChild(itemCell);

    row.setAttribute("id", index);
    //console.log(index);



    //---------------------------------------------------------------
    //---------- react the ROW when the mouse CLICK on it  -------------
    //---------------------------------------------------------------
    // row.style.backgroundColor = "red";


    row.onclick = function (e) {
        //     for (var i = 0; i < data.length; i++) {
        //         var rowSel = document.getElementById(i);
        //         console.log(rowSel);            
        //       //  rowSel.style.backgroundColor = 'red';
        //     }
        //this.style.backgroundColor = "green";

        rowIndex = this.getAttribute("id");
        //console.log(rowIndex);
        var theLat = latLong[1];
        var theLong = latLong[0];
        console.log(theLat);
        console.log(theLong);
        
        var LatLong = [];
        LatLong = [theLat,theLong];
        //console.log('var = ',LatLong);



        map.setView([theLat, theLong], 18);
        //    L.popup([theLat,theLong]).addTo(map);
        // map.addLayer(mymarker);
        // mymarker.bindPopup('popupContent');


        // ----------------------------------------------------------------
        // ---------  popup for marker when you click in the list----------
        // ----------------------------------------------------------------
        var popupContent = "<b>Номер: </b>" + feature.properties.id + "</br><b>Имя: </b> " + feature.properties.name + "</br><b>Адресс: </b>" + feature.properties.address + "</br><b>Город: </b>" + feature.properties.city + "</br><b>Собрание: </b>" + feature.properties.congregation + "</br><b>Телефон: </b>" + feature.properties.tel;
        var popup = new L.Popup();
        popup.setLatLng(LatLong);
        popup.setContent(popupContent);
        map.openPopup(popup);

        // ----------------------------------------------------------------

    }


});