///// add Polygon
// Зона 1
var latlngs1 = [
    [49.587026, 34.552195],
    [49.581544, 34.546337],
    [49.580473, 34.544985],
    [49.575715, 34.537368],
    [49.573572, 34.535823], // Панаса Мирного /- Европейская
    [49.573488, 34.537539],
    [49.571693, 34.544256],
    [49.561019, 34.576044],
    [49.566141, 34.586259],
    [49.575715, 34.586431],
    [49.575715, 34.584886], // Небесной Сотни /- Миру
    [49.580223, 34.56952],
    [49.58089, 34.565142],
    [49.583116, 34.560077],
    [49.586956, 34.552265] // Небесной сотни /- Европейской 
];


// Зона 2
var latlngs2 = [
    [49.587026, 34.552195], //Европейской /- Монастырской
    [49.590517, 34.556015], // 
    [49.594495, 34.572301], //
    [49.599975, 34.57552], //
    [49.601226, 34.581699], //
    [49.600893, 34.585218], //
    [49.586372, 34.584961], //
    [49.583617, 34.584403],
    //[49.566141, 34.586259],//************ */
    [49.575715, 34.586431],
    [49.575715, 34.584886],
    [49.580223, 34.56952],
    [49.58089, 34.565142],
    [49.583116, 34.560077],
    [49.586956, 34.552265] // Небесной Сотни /- Миру
];


// Зона 3
var latlngs3 = [
    [49.587026, 34.552195], //Европейской /- Монастырской
    [49.590322, 34.549727], // 
    [49.59711, 34.535394], //
    [49.603785, 34.539471], //
    [49.604314, 34.538183], //
    [49.605704, 34.538505], //
    [49.606983, 34.543591], //
    //[49.618051, 34.567494],//
    //[49.623305, 34.555564],//
    [49.632896, 34.561186], //
    [49.634286, 34.569941], //

    [49.619552, 34.577193], //
    [49.600907, 34.58524],
    [49.601237, 34.58171],
    [49.599992, 34.575514],
    [49.594495, 34.572274],
    [49.590524, 34.556009]

];

// Зона 4
var latlngs4 = [
    [49.597113, 34.535378], //Шведская /- Соборности
    [49.59937, 34.530405], // 
    [49.614971, 34.529868], // 
    [49.63291, 34.561175], // 
    //[49.607001, 34.543591],// 
    // [49.606983, 34.543591], //
    [49.606983, 34.543591], //
    [49.606994, 34.543564],
    [49.605704, 34.538478],
    [49.604303, 34.538167],
    [49.603785, 34.539455],

];

// Зона 5
var latlngs5 = [
    [49.599589, 34.530383], //Зиньковская /- Берюзова
    //[49.590319, 34.549711],// 
    [49.599836, 34.497478], // 
    [49.59946, 34.49279], // 
    [49.599356, 34.490322], // 
    [49.599808, 34.483842], // 
    [49.600183, 34.469304], // 
    [49.604953, 34.469476], // 
    [49.604929, 34.468451], // 
    [49.607043, 34.468285], // 
    [49.609848, 34.470634], // 
    [49.614961, 34.529842], // 


];

// Зона 6
var latlngs6 = [
    [49.59622, 34.53725], //
    [49.586824, 34.52673], //
    [49.584424, 34.524643], //
    [49.583993, 34.522347], //
    [49.580974, 34.517519], //

    [49.580974, 34.517519], //
    [49.584619, 34.51061], //
    [49.586274, 34.509065], //
    [49.590183, 34.50501], //
    [49.590524, 34.505546], //
    [49.592214, 34.505407], //

    [49.592137, 34.514558], //
    [49.595399, 34.514966], //
    [49.595399, 34.514966], //
    [49.599697, 34.514923], //
    [49.599578, 34.529933], //
];

// Зона 7
var latlngs7 = [
    [49.59364, 34.542695], //
    [49.592221, 34.541096], //
    [49.592082, 34.540957], //
    [49.587958, 34.538698], //

    [49.584167, 34.53769], //
    [49.583902, 34.537539], //
    [49.585509, 34.530834], //
    [49.586393, 34.528388], //

    [49.58681, 34.526752], //
    [49.596213, 34.537255], //
];

// Зона 8
var latlngs8 = [
    [49.587026, 34.552195], //Европейской /- Монастырской
    [49.590312, 34.549722], //
    [49.59364, 34.542695], //
    [49.592221, 34.541096], //
    [49.592082, 34.540957], //
    [49.587958, 34.538698], //
    [49.584229, 34.537733], //
    [49.58313, 34.537164], //
    [49.580049, 34.536842], //
    [49.575436, 34.536885], //
    [49.580501, 34.544996], //
    [49.581572, 34.546353], //

];


var servants = [{
        "type": "Feature",
        "properties": {
            "id": "1",
            "name": "БРА - Адамец Анна Григорьевна",
            "address": "ул. Баленка 18, кв. 18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60243",
            "geometry/coordinates/1": "34.50014",
            "tel": "0996787493",
            "congregation": "Браилки",
            "pin": "marker-icon_blue_dark.png",
        },
        "geometry": {
            "coordinates": [34.50014, 49.60243],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "2",
            "name": "БРА - Базалий Юлия Сергеевна",
            "address": "ул. Половка 3, кв. 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.593083",
            "geometry/coordinates/1": "34.523571",
            "tel": "0958177880",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.523571, 49.593083],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "3",
            "name": "БРА - Бездитко Иванна Игоревна",
            "address": "бул. Нестерова 18, кор. 1, кв. 28",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60507",
            "geometry/coordinates/1": "34.488",
            "tel": "0733106095",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.488, 49.60507],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "4",
            "name": "БРА - Бездитко Наталья Васильевна",
            "address": "ул. Кучеренка 11, кв. 111",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.6047398",
            "geometry/coordinates/1": "34.4900468",
            "tel": "0996584988",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.4900468, 49.6047398],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "5",
            "name": "БРА - Бездитко Сергей Владимирович",
            "address": "ул. Кучеренка 11, кв. 111",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.6047398",
            "geometry/coordinates/1": "34.4900468",
            "tel": "0662014179",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.4900468, 49.6047398],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "6",
            "name": "БРА - Бездитко Сергей Сергеевич",
            "address": "бул. Нестерова 18, кор. 1, кв. 28",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60488",
            "geometry/coordinates/1": "34.48803",
            "tel": "0661717028",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.48803, 49.60488],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "7",
            "name": "БРА - Белокур Лидия Ивановна",
            "address": "ул. Софиевская 20",
            "city": "пгт. Скороходово",
            "region": "Полтавская Область",
            "Index": "38813",
            "geometry/coordinates/0": "49.772292",
            "geometry/coordinates/1": "35.073273",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.073273, 49.772292],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "8",
            "name": "БРА - Берёзкина Светлана Евгеньевна",
            "address": "ул. Грабиновская 16а",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.601740",
            "geometry/coordinates/1": "34.611500",
            "tel": "0508714496\n0635657627\n0681664057",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.611500, 49.601740],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "9",
            "name": "БРА - Блюмкина Валентина Викторовна",
            "address": "ул. Ст. Кондратенка 5, кв. 8",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.6022932",
            "geometry/coordinates/1": "34.5279502",
            "tel": "0669280469\n0667109196",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.5279502, 49.6022932],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "10",
            "name": "БРА - Бояринова Леся  Васильевна",
            "address": "Бульвар  Нестерова  8/11 кв.1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.601831",
            "geometry/coordinates/1": "34.484147",
            "Activity": "сдают отчет не приходят в зал",
            "tel": "095-540--17-50",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.484147, 49.601831],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "11",
            "name": "БРА - Броварь Виталий Владимирович",
            "address": "ул. Ленина (Небесной Сотни) 85, кв. 20",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.577638",
            "geometry/coordinates/1": "34.581909",
            "Activity": "не активный",
            "tel": "0933706040",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.581909, 49.577638],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "12",
            "name": "БРА - Броварь Дмитрий Владимирович",
            "address": "ул. Гожулянская 12, кв. 40",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.602196",
            "geometry/coordinates/1": "34.494152",
            "tel": "0633539102",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.494152, 49.602196],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "13",
            "name": "БРА - Буряченко Лидия Сергеевна",
            "address": "ул. Баленка 18, кв. 2",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60255",
            "geometry/coordinates/1": "34.50013",
            "Activity": "сдают отчет не приходят в зал",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.50013, 49.60255],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "14",
            "name": "БРА - Быкова Елена Валериевна",
            "address": "ул. Лесная 4",
            "city": "с. Кочубеевка",
            "region": "Полтавская Область",
            "Index": "38822",
            "geometry/coordinates/0": "49.752271",
            "geometry/coordinates/1": "35.106533",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.106533, 49.752271],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "15",
            "name": "БРА - Веклич Татьяна ",
            "address": "ул.Репина,21 кв.10.",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.59992",
            "geometry/coordinates/1": "34.53891",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53891, 49.59992],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "16",
            "name": "БРА - Воробьева Екатерина Владимировна",
            "address": "ул. Комсомольская",
            "city": "с. Рябкивка",
            "region": "Полтавская Область",
            "Index": "38812",
            "geometry/coordinates/0": "49.829162",
            "geometry/coordinates/1": "35.053209",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.053209, 49.829162],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "17",
            "name": "БРА - Гавловская Анна Ильинична",
            "address": "ул. Шведская 22, кв. 45",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60098",
            "geometry/coordinates/1": "34.53921",
            "tel": "0951926410",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53921, 49.60098],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "18",
            "name": "БРА - Голуб Людмила",
            "address": "пер. Островского 5, кв. 2",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60056",
            "geometry/coordinates/1": "34.52222",
            "tel": "0952576192\n67-81-96",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.52222, 49.60056],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "19",
            "name": "БРА - Готвянская Мария Сафронова",
            "address": "пер. Великий 4, кв. 23",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.601678",
            "geometry/coordinates/1": "34.511077",
            "Activity": "не активная",
            "tel": "0994441685",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.511077, 49.601678],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "20",
            "name": "БРА - Грицай Лариса Васильевна",
            "address": "ул. Павленковская 18, ком. 512",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.59907",
            "geometry/coordinates/1": "34.53359",
            "tel": "0508015769",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53359, 49.59907],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "21",
            "name": "БРА - Грубич Елена Васильевна",
            "address": "ул. Кучеренка 5, кв. 24",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60407",
            "geometry/coordinates/1": "34.4903652",
            "tel": "0669933359",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.49244, 49.60407],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "22",
            "name": "БРА - Дмитренко Евгения Сергеевна",
            "address": "с. Яковцы, ул. Автоагрегатчиков 17",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.62326",
            "geometry/coordinates/1": "34.55806",
            "tel": "0993559297",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.55806, 49.62326],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "23",
            "name": "БРА - Дмитренко Ярослава Григорьевна",
            "address": "ул. Шевченка 96, кв. 86",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.5908288",
            "geometry/coordinates/1": "34.5317084",
            "tel": "0669108585",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.5345, 49.59079],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "24",
            "name": "БРА - Дорошина Валентина Алексеевна",
            "address": "ул. Квитучая 6, кв. 36",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.61024",
            "geometry/coordinates/1": "34.53282",
            "Activity": "не активная",
            "tel": "958395467",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53282, 49.61024],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "25",
            "name": "БРА - Дыкань Екатерина Федоровна",
            "address": "пер. Виноградный 3",
            "city": "с. Гожулы",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.6066771",
            "geometry/coordinates/1": "34.4441272",
            "Activity": "не активная",
            "tel": "0999271880",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.4441272, 49.6066771],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "26",
            "name": "БРА - Ефремова Валентина Федоровна",
            "address": "ул. Боровика 3",
            "city": "с. Степановка",
            "region": "Полтавская Область",
            "Index": "38813",
            "geometry/coordinates/0": "49.800803",
            "geometry/coordinates/1": "35.078455",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.078455, 49.800803],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "27",
            "name": "БРА - Жорник Фаина",
            "address": "ул. Краснодонская 19/2 ",
            "city": "с. Веселовка, Диканского р-на",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.73541",
            "geometry/coordinates/1": "34.49286",
            "tel": "0508885629",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.49286, 49.73541],
            "type": "Point"
        }
    }, //28
    {
        "type": "Feature",
        "properties": {
            "id": "28",
            "name": "БРА - Засенко  Артур Игоревич",
            "address": "ул. Павленковская 8, кв 43",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.5994447",
            "geometry/coordinates/1": "34.5322636",
            "tel": "06388839962",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.5322636, 49.5994447],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "29",
            "name": "БРА - Засенко  Лия Александровна",
            "address": "ул. Павленковская 8, кв 43",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.5994447",
            "geometry/coordinates/1": "34.5322636",
            "tel": "06388839962",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53256380660801, 49.59984452937001],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "30",
            "name": "БРА - Засенко Герман Игоревич",
            "address": "ул. Лавчанская 18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.605154",
            "geometry/coordinates/1": "34.473856",
            "tel": "0970584481",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.473856, 49.605154],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "31",
            "name": "БРА - Захлестун Тамара Евгеньевна",
            "address": "ул. Зеньковская 10, кв, 28",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60859",
            "geometry/coordinates/1": "34.53116",
            "Activity": "не активная",
            "tel": "0681535205",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53116, 49.60859],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "32",
            "name": "БРА - Звонова Людмила Георгиевна",
            "address": "ул. Европейская 223",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36000",
            "geometry/coordinates/0": "49.555148",
            "geometry/coordinates/1": "34.520877",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.520877, 49.555148],
            "type": "Point"
        },

    },
    {
        "type": "Feature",
        "properties": {
            "id": "33",
            "name": "БРА - Золотова Анна Борисовна",
            "address": "ул. Кучеренка 5, кв. 24 пгт. Котельва, ул. Покровская (Островского) 67",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60424",
            "geometry/coordinates/1": "34.49249",
            "tel": "0993885024",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.49249, 49.60424],
            "type": "Point"
        }
    }, //34
    {
        "type": "Feature",
        "properties": {
            "id": "34",
            "name": "БРА - Какотин Геннадий Анатольевич",
            "address": "ул. Октябрьская 74, кв. 36",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.5984",
            "geometry/coordinates/1": "34.53347",
            "Activity": "не активный",
            "tel": "0937962688",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53347, 49.5984],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "35",
            "name": "БРА - Какотина Наталья Владимировна",
            "address": "ул. Октябрьская 74, кв. 36",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.59847",
            "geometry/coordinates/1": "34.53331",
            "tel": "0666997578",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53331, 49.59847],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "36",
            "name": "БРА - Кальянова Елена Васильевна",
            "address": "ул. Сенная 32, кв. 4 ул. Латышева 8, кв. 22",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.587325",
            "geometry/coordinates/1": "34.537808",
            "tel": "0996441716",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.537808, 49.587325],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "37",
            "name": "БРА - Керимова Алла",
            "address": "ул. Зеньковская 16, кв. 46",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.610388",
            "geometry/coordinates/1": "34.53034",
            "tel": "0953503999\n0933506777\n65-44-44",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53034, 49.610388],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "38",
            "name": "БРА - Киракосов Вячеслав",
            "address": "ул. Центральная 89",
            "city": "с. Тахтаулово",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.66456",
            "geometry/coordinates/1": "34.51007",
            "tel": "0504046104",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.51007, 49.66456],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "39",
            "name": "БРА - Киракосов Евгений",
            "address": "ул. Центральная 89",
            "city": "с. Тахтаулово",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.66456",
            "geometry/coordinates/1": "34.51007",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.51007, 49.66456],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "40",
            "name": "БРА - Киракосов Егор",
            "address": "ул. Центральная 89",
            "city": "с. Тахтаулово",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.66456",
            "geometry/coordinates/1": "34.51007",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.51007, 49.66456],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "41",
            "name": "БРА - Киракосова Светлана",
            "address": "ул. Центральная 89",
            "city": "с. Тахтаулово",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.66456",
            "geometry/coordinates/1": "34.5106264",
            "tel": "0665272744",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.51007, 49.66456],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "42",
            "name": "БРА - Кириченко Надежда",
            "address": "ул. Шведская 18, кв. 41",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.599359",
            "geometry/coordinates/1": "34.538634",
            "tel": "0501366803\n7-39-68",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.538634, 49.599359],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "43",
            "name": "БРА - Ковнерова Ольга Евгеньевна",
            "address": "ул. Петра Юрченка 19, кв. 405",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.606177",
            "geometry/coordinates/1": "34.501534",
            "tel": "0951747795",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.501534, 49.606177],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "44",
            "name": "БРА - Кондрашова Ольга",
            "address": "ул. Магистральная 11 кор.0-1, кв. 1",
            "city": "с. Ивонченцы",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.639577",
            "geometry/coordinates/1": "34.528479",
            "tel": "0661939702\n0677108475",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.528479, 49.639577],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "45",
            "name": "БРА - Кононенко Миланья Сергеевна",
            "address": "ул. Медицинская 7, кв. 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.638038",
            "geometry/coordinates/1": "34.538301",
            "Activity": "не посещает зал отчеты сдает",
            "tel": "0507713970",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.538301, 49.638038],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "46",
            "name": "БРА - Копий Ирина Валентиновна",
            "address": "ул. Петра Юрченка 3, кв. 54",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.603712",
            "geometry/coordinates/1": "34.503014",
            "tel": "0500131028",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.503014, 49.603712],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "47",
            "name": "БРА - Коровянская Ирина Ивановна",
            "address": "ул. Лесная 50",
            "city": "Чернякивка",
            "region": "Полтавская Область",
            "Index": "38820",
            "geometry/coordinates/0": "49.774318",
            "geometry/coordinates/1": "35.155243",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.155243, 49.774318],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "48",
            "name": "БРА - Кылыч Кира",
            "address": "ул.  Соборности 62, кв 47",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.59621",
            "geometry/coordinates/1": "34.53809",
            "tel": "0994999251",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53809, 49.59621],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "49",
            "name": "БРА - Кылыч Артур",
            "address": "ул.  Соборности 62, кв 47",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.59609",
            "geometry/coordinates/1": "34.53827",
            "tel": "0504046137\n0634079632",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53827, 49.59609],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "50",
            "name": "БРА - Лапа Инна Ивановна",
            "address": "пер. Спортивный 1а, кв. 80; с. Розсошенцы, ул. Горбаневская 4, кв. 25",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.606455",
            "geometry/coordinates/1": "34.515771",
            "tel": "0933810877",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.515771, 49.606455],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "51",
            "name": "БРА - Лапа Максим Николаевич",
            "address": "пер. Спортивный 1а, кв. 80; с. Розсошенцы, ул. Горбаневская 4, кв. 25",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.606486",
            "geometry/coordinates/1": "34.515669",
            "tel": "0935472109",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.515669, 49.606486],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "52",
            "name": "БРА - Левченко Дмитрий Петрович",
            "address": "ул.М.Бирюзова 82 кв.100",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.600295",
            "geometry/coordinates/1": "34.486449",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.486449, 49.600295],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "53",
            "name": "БРА - Левченко Нина Петровна",
            "address": "ул. Баленка 8, кв. 38",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.602471",
            "geometry/coordinates/1": "34.497038",
            "Activity": "не активная",
            "tel": "59-78-48",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.497038, 49.602471],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "54",
            "name": "БРА - Левченко Оксана Юрьевна",
            "address": "ул. М. Бирюзова 82, кв. 100; г. Гребёнка, ул. Калинина 14, кв. 36 с. Паризька комуна, д. 23",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.600472",
            "geometry/coordinates/1": "34.486476",
            "tel": "0662203597\n0733104010",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.486476, 49.600472],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "55",
            "name": "БРА - Лила Ольга Ивановна",
            "address": "ул. Петра Юрченка 9/1, кв. 7",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.604766",
            "geometry/coordinates/1": "34.502741",
            "tel": "0999488727",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.502741, 49.604766],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "56",
            "name": "БРА - Любая Татьяна Ивановна",
            "address": "ул. Вильямса 6, кв. 45",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.6110328",
            "geometry/coordinates/1": "34.533629",
            "tel": "0505850833",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.533629, 49.6110328],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "57",
            "name": "БРА - Макаренко Клара Валериевна",
            "address": "ул. Максименко 15",
            "city": "Скороходово",
            "region": "Полтавская Область",
            "Index": "38813",
            "geometry/coordinates/0": "49.771904",
            "geometry/coordinates/1": "35.05814",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.05814, 49.771904],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "58",
            "name": "БРА - Макарова Елена",
            "address": "пер. Стрелковый 7",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.606817",
            "geometry/coordinates/1": "34.515994",
            "tel": "0504045246",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.515994, 49.606817],
            "type": "Point"
        }
    }, //////-----------59
    {
        "type": "Feature",
        "properties": {
            "id": "59",
            "name": "БРА - Маркова Любовь Васильевна",
            "address": "ул. Ст. Кондратенка 8, кв. 51",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.603458",
            "geometry/coordinates/1": "34.526778",
            "tel": "0993574687",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.526778, 49.603458],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "60",
            "name": "БРА - Марченко Оксана Васильевна",
            "address": "ул. Опытная 5, кв. 67",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.6097561",
            "geometry/coordinates/1": "34.532228",
            "tel": "0505980641",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.532228, 49.6097561],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "61",
            "name": "БРА - Марченко Олег Владимирович",
            "address": "ул. Опытная 5, кв. 67",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.6097561",
            "geometry/coordinates/1": "34.532416",
            "tel": "0735980641\n0505980641",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.532416, 49.6097561],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "62",
            "name": "БРА - Мисюра Лариса Григорьевна",
            "address": "ул. Г. Хоткевича 3, кв. 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.568131",
            "geometry/coordinates/1": "34.497832",
            "tel": "0669304843",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.497832, 49.568131],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "63",
            "name": "БРА - Михайлюк Софья",
            "address": "ул. М. Бирюзова 82, кв. 21",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.600284",
            "geometry/coordinates/1": "34.487994",
            "tel": "0999057563",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.487994, 49.600284],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "64",
            "name": "БРА - Миценко Валентина Владимировна",
            "address": "с. Байрак, ул. Степова 32",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.719438",
            "geometry/coordinates/1": "34.3693228",
            "tel": "0500617004",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.3693228, 49.719438],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "65",
            "name": "БРА - Мовчан Евгения Анатольевна",
            "address": "ул. Г. Хоткевича 3, кв. 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.56778",
            "geometry/coordinates/1": "34.497816",
            "tel": "0669785226\n0934173926",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.497816, 49.56778],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "66",
            "name": "БРА - Могильная Галина Анатольевна",
            "address": "ул. Розы Люксембург 11б, кв. 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.586172",
            "geometry/coordinates/1": "34.545144",
            "tel": "0999688939",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.545144, 49.586172],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "67",
            "name": "БРА - Нагорная Зоя Семёновна",
            "address": "ул. Фруктовая 60",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.586891",
            "geometry/coordinates/1": "34.509172",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.509172, 49.586891],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "68",
            "name": "БРА - Нагорная Наталья Николаевна",
            "address": "ул. Фруктовая 60",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.58698",
            "geometry/coordinates/1": "34.50906",
            "tel": "0950557706",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.50906, 49.58698],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "69",
            "name": "БРА - Назаренко Татьяна  Николаевна ",
            "address": "Опытная ,6 кв.39.",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60896",
            "geometry/coordinates/1": "34.53256",
            "tel": "0662710593",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53256, 49.60896],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "70",
            "name": "БРА - Олефир Екатерина",
            "address": "ул. М. Бирюзова 80, кв. 30 \nул. Лученка 52, кв. 19",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.600284",
            "geometry/coordinates/1": "34.487994",
            "tel": "0505156038 \n \n0990686306",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.487994, 49.600284],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "71",
            "name": "БРА - Онацько Ирина Анатольевна",
            "address": "ул. Докучаева 10, кв. 89",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.611",
            "geometry/coordinates/1": "34.53475",
            "Activity": "отчеты сдает в зал не ходит",
            "tel": "0993391181",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53475, 49.611],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "72",
            "name": "БРА - Павленко Екатерина ",
            "address": " ул. Уютная, 26 кв.31",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.595197",
            "geometry/coordinates/1": "34.527481",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.527481, 49.595197],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "73",
            "name": "БРА - Панасенко Зоя Ивановна",
            "address": "ул. Халтурина 6, кв. 39",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.598803,",
            "geometry/coordinates/1": "34.52872",
            "tel": "0509356840",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.52872, 49.598803, ],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "74",
            "name": "БРА - Пардаев Алешер Файзулаевич",
            "address": "ул Грабиновская 16а",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.601765",
            "geometry/coordinates/1": "34.611611",
            "tel": "0509590111",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.611611, 49.601765],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "75",
            "name": "БРА - Пардаева Валентина Дмитриевна ",
            "address": "ул Грабиновская 16а",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.601741",
            "geometry/coordinates/1": "34.611676",
            "tel": "0733104656",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.611676, 49.601741],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "76",
            "name": "БРА - Паскару Вячеслав Александрович",
            "address": "ул. Софиевская 85/8",
            "city": "Скороходово",
            "region": "Полтавская Область",
            "Index": "38813",
            "geometry/coordinates/0": "49.768432",
            "geometry/coordinates/1": "35.07727",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.07727, 49.768432],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "77",
            "name": "БРА - Паскару Юлия Вячеславовна",
            "address": "ул. Софиевская 85/8",
            "city": "Скороходово",
            "region": "Полтавская Область",
            "Index": "38813",
            "geometry/coordinates/0": "49.768377",
            "geometry/coordinates/1": "35.077345",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.077345, 49.768377],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "78",
            "name": "БРА - Пастушенко Валентина Евгеньевна",
            "address": "ул. Грабиновская 16а",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.601685",
            "geometry/coordinates/1": "34.611692",
            "tel": "0502137650",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.611692, 49.601685],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "79",
            "name": "БРА - Пастушенко Николай Александрович",
            "address": "ул. Грабиновская 16а",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.601685",
            "geometry/coordinates/1": "34.611552",
            "tel": "0950806930",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.611552, 49.601685],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "80",
            "name": "БРА - Пацуля Людмила Васильевна",
            "address": "ул. Чистопрудная 5",
            "city": "с. Ивонченцы",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.64246",
            "geometry/coordinates/1": "34.508051",
            "tel": "0664951280",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.508051, 49.64246],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "81",
            "name": "БРА - Пипоть Юлия Дмитриевна",
            "address": "ул. Красина 83/23 корп. 3, кв. 79",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.571008",
            "geometry/coordinates/1": "34.505466",
            "tel": "0990415451 \n58-04-81",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.505466, 49.571008],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "82",
            "name": "БРА - Погорелая Василина Михайловна",
            "address": "с. Байрак, ул. Лесная 10",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.719478",
            "geometry/coordinates/1": "34.369848",
            "tel": "0958608675",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.369848, 49.719478],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "83",
            "name": "БРА - Покотило Зинаида Васильевна",
            "address": "ул. Софиевская 18",
            "city": "Скороходово",
            "region": "Полтавская Область",
            "Index": "38813",
            "geometry/coordinates/0": "49.772396",
            "geometry/coordinates/1": "35.073954",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.073954, 49.772396],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "84",
            "name": "БРА - Полякова Алёна Сергеевна",
            "address": "ул. Глущенко 20, кв 5 .",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60367",
            "geometry/coordinates/1": "34.505825",
            "tel": "0957103321",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.505825, 49.60367],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "85",
            "name": "БРА - Порпа Андрей Николаевич",
            "address": "ул. Софиевская 53/1",
            "city": "Скороходово",
            "region": "Полтавская Область",
            "Index": "38813",
            "geometry/coordinates/0": "49.771239",
            "geometry/coordinates/1": "35.076572",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.076572, 49.771239],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "86",
            "name": "БРА - Пушкарь Александр Дмитриевич",
            "address": "ул. Докучаева 10, кв. 114",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.61089",
            "geometry/coordinates/1": "34.53472",
            "tel": "0663719251",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53472, 49.61089],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "87",
            "name": "БРА - Расулова Галина Евгеньевна",
            "address": "ул. Гетьмана 13/18, кв. 64",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.607456",
            "geometry/coordinates/1": "34.498851",
            "tel": "0506568064",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.498851, 49.607456],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "88",
            "name": "БРА - Рослик Вита Александровна",
            "address": "пер. Шевченка 11а, кв. 59",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.603173",
            "geometry/coordinates/1": "34.506876",
            "tel": "0956062918",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.506876, 49.603173],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "89",
            "name": "БРА - Рослик Виталий Николаевич",
            "address": "пер. Шевченка 11а, кв. 59",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60286",
            "geometry/coordinates/1": "34.506893",
            "tel": "0934715316",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.506893, 49.6029751],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "90",
            "name": "БРА - Руденко Надежда",
            "address": "ул. Баленка 9, кв. 51",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60349",
            "geometry/coordinates/1": "34.497709",
            "tel": "0660577538",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.497709, 49.60349],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "91",
            "name": "БРА - Сахарова Светлана",
            "address": "ул. Квитучая 6, кв. 36",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.61026",
            "geometry/coordinates/1": "34.5324",
            "Activity": "неактивная",
            "tel": "0992418083",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.5324, 49.61026],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "92",
            "name": "БРА - Свирова Зоя Алексеевна",
            "address": "ул. Щорса 10, кв. 13",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.557602",
            "geometry/coordinates/1": "34.491091",
            "Activity": "не приходит в зал отчеты сдает",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.491091, 49.557602],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "93",
            "name": "БРА - Северин Наталья Лазаревна",
            "address": "пер. Заячий 1, кв. 105",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.607766",
            "geometry/coordinates/1": "34.533634",
            "tel": "0991901152",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.533634, 49.607766],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "94",
            "name": "БРА - Сивоконь Алёна Владимировна",
            "address": "ул. Докучаева 10, кв. 10",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.61073",
            "geometry/coordinates/1": "34.53473",
            "tel": "0664709528",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53473, 49.61073],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "95",
            "name": "БРА - Сивоконь Валентина Владимировна",
            "address": "ул. Докучаева 10, кв. 10",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.61058",
            "geometry/coordinates/1": "34.53476",
            "tel": "0999348809",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.53476, 49.61058],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "96",
            "name": "БРА - Строкань Елена ",
            "address": "М. Бирюзова,48/2 .",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.600406",
            "geometry/coordinates/1": "34.50995",
            "tel": "0957078038",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.50995, 49.600406],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "97",
            "name": "БРА - Сузыма Раиса Акимовна",
            "address": "ул. Ульяновых (Глиба Котельникова) 15, кв. 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.602568",
            "geometry/coordinates/1": "34.479614",
            "tel": "0997838142",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.479614, 49.602568],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "98",
            "name": "БРА - Сухолотюк Ольга",
            "address": "ул. Петра Юрченка 3, кв. 11",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.60382",
            "geometry/coordinates/1": "34.503009",
            "tel": "0999371267",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.503009, 49.60382],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "99",
            "name": "БРА - Тучин Геннадий  Викторович",
            "address": "пер. Шевченко 3, кв 39",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.601313",
            "geometry/coordinates/1": "34.508539",
            "tel": "06329106",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.508539, 49.601313],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "100",
            "name": "БРА - Тучина Наталья Дмитриевна",
            "address": "пер. Шевченко 3, кв 39",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.601595",
            "geometry/coordinates/1": "34.508486",
            "tel": "0669661878",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.508486, 49.601595],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "101",
            "name": "БРА - Урская Светлана Константиновна",
            "address": "ул. Баленка 4,кв.27",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.602012",
            "geometry/coordinates/1": "34.495482",
            "tel": "0991811519",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.495482, 49.602012],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "102",
            "name": "БРА - Урская Юлия Александровна",
            "address": "ул. Баленка 4,кв.27",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.602276",
            "geometry/coordinates/1": "34.495525",
            "tel": "0999652419",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.495525, 49.602276],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "103",
            "name": "БРА - Феделеш Анна",
            "address": "ул. М. Бирюзова 50/1, кв. 10",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.600246",
            "geometry/coordinates/1": "34.507638",
            "tel": "0954033325",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.507638, 49.600246],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "104",
            "name": "БРА - Филь Надежда",
            "address": "ул. Магистральная 11 кор.0-1, кв. 1",
            "city": "с. Ивонченцы",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.639566",
            "geometry/coordinates/1": "34.528624",
            "tel": "0983506876\n0630745697",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.528624, 49.639566],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "105",
            "name": "БРА - Хабаши Анастасия Александровна",
            "address": "ул. Прозора 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.588542",
            "geometry/coordinates/1": "34.500321",
            "tel": "0994446957",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.500321, 49.588542],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "106",
            "name": "БРА - Хабаши Хаджет",
            "address": "ул. Прозора 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.588504",
            "geometry/coordinates/1": "34.500241",
            "tel": "0999348233",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.500241, 49.588504],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "107",
            "name": "БРА - Шаркова Любовь Андреевна",
            "address": "ул. Гожулянская 26, кв. 118",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.603222",
            "geometry/coordinates/1": "34.486202",
            "tel": "0508428690",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.486202, 49.603222],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "108",
            "name": "БРА - Шинкаренко Инна Владимировна",
            "address": "ул. Медицинская 10, кв. 30",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.639042",
            "geometry/coordinates/1": "34.534611",
            "Activity": "отчеты сдает в зал не приходят",
            "tel": "0999178823",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.534611, 49.639042],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "109",
            "name": "БРА - Шинкаренко Татьяна Петровна",
            "address": "ул. Медицинская 10, кв. 30",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.638979",
            "geometry/coordinates/1": "34.534873",
            "Activity": "отчеты сдает в зал не приходят",
            "tel": "0970817383",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.534873, 49.638979],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "110",
            "name": "БРА - Шкляр Надежда Ивановна",
            "address": "ул.Софиевская 31в/42",
            "city": "Скороходово",
            "region": "Полтавская Область",
            "Index": "38813",
            "geometry/coordinates/0": "49.773965",
            "geometry/coordinates/1": "35.076315",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [35.076315, 49.773965],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "111",
            "name": "БРА - Шостак Вилена Васильевна",
            "address": "ул. Чехова 10",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.615534",
            "geometry/coordinates/1": "34.533752",
            "tel": "0934717281",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.533752, 49.615534],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "112",
            "name": "БРА - Шостя Виктория А.",
            "address": "ул. Гетьмана 3, кв. 62",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.607143",
            "geometry/coordinates/1": "34.505541",
            "tel": "0508054143",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.505541, 49.607143],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "113",
            "name": "БРА - Эсаулов Сергей",
            "address": "пер..Стрелковый 7",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.606828",
            "geometry/coordinates/1": "34.515923",
            "tel": "050305304",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.515923, 49.606828],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "114",
            "name": "БРА - Яцюк Анатолий Михайлович",
            "address": "М . Бирюзова, 88 кв. 24",
            "city": "Полтава",
            "region": "Полтавская Область",
            "geometry/coordinates/0": "49.600469",
            "geometry/coordinates/1": "34.483429",
            "tel": "0963958471",
            "congregation": "Браилки",
            "marker-color": "blue",
        },
        "geometry": {
            "coordinates": [34.483429, 49.600469],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "115",
            "name": "ЦТР - Абросенков Андрей Владимирович",
            "address": "переулок Стрелковый, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36014",
            "geometry/coordinates/0": "49.60673",
            "geometry/coordinates/1": "34.515325",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.515325, 49.60673],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "116",
            "name": "ЦТР - Абросенков Даниил Владимирович",
            "address": "улица Железная, 54",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36021",
            "geometry/coordinates/0": "49.567888",
            "geometry/coordinates/1": "34.522977",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.522977, 49.567888],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "117",
            "name": "ЦТР - Абросенкова Анна Владимировна",
            "address": "улица Железная, 54",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36021",
            "geometry/coordinates/0": "49.567887",
            "geometry/coordinates/1": "34.522911",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.522911, 49.567887],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "118",
            "name": "ЦТР - Абросенкова Яна Ивановна",
            "address": "переулок Стрелковый, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36014",
            "geometry/coordinates/0": "49.606744",
            "geometry/coordinates/1": "34.515266",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.515266, 49.606744],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "119",
            "name": "ЦТР - Алданов Игорь Михайлович",
            "address": "улица Узкая, 11",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36022",
            "geometry/coordinates/0": "49.580097",
            "geometry/coordinates/1": "34.579473",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.579473, 49.580097],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "120",
            "name": "ЦТР - Алданова Марина Степановна",
            "address": "улица Узкая, 11",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36022",
            "geometry/coordinates/0": "49.58024",
            "geometry/coordinates/1": "34.579516",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.579516, 49.58024],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "121",
            "name": "ЦТР - Антонова Тамара Юрьевна",
            "address": "улица Пушкина, 9",
            "city": "с.Ватажково/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38772",
            "geometry/coordinates/0": "49.4921338",
            "geometry/coordinates/1": "34.6566486",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.6566486, 49.4921338],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "122",
            "name": "ЦТР - Базанов Александр Георгиевич",
            "address": "улица Головко, 18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569564",
            "geometry/coordinates/1": "34.584966",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.584966, 49.569564],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "123",
            "name": "ЦТР - Барановская Елена Александровна",
            "address": "улица ПРЗ, 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36015",
            "geometry/coordinates/0": "49.600517",
            "geometry/coordinates/1": "34.604589",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.604589, 49.600517],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "124",
            "name": "ЦТР - Барановская Татьяна Геннадьевна",
            "address": "улица ПРЗ, 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36015",
            "geometry/coordinates/0": "49.600514",
            "geometry/coordinates/1": "34.604729",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.604729, 49.600514],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "125",
            "name": "ЦТР - Барановский Максим Владимирович",
            "address": "улица ПРЗ, 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36015",
            "geometry/coordinates/0": "49.600521",
            "geometry/coordinates/1": "34.604648",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.604648, 49.600521],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "126",
            "name": "ЦТР - Белоконь Наталья Петровна",
            "address": "улица Европейская, 66",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36002",
            "geometry/coordinates/0": "49.575116",
            "geometry/coordinates/1": "34.535683",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.535683, 49.575116],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "127",
            "name": "ЦТР - Белоус Галина Алексеевна",
            "address": "улица Чураивны, 11",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.5668581",
            "geometry/coordinates/1": "34.5775131",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.5775131, 49.5668581],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "128",
            "name": "ЦТР - Бородина Янина Андреевна",
            "address": "переулок Рыбальский, 12",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.574448",
            "geometry/coordinates/1": "34.578819",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.578819, 49.574448],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "129",
            "name": "ЦТР - Брилевская Любовь Альбертовна",
            "city": "с. Коломак/ Решетиловский",
            "region": "Полтавская Область",
            "Index": "38413",
            "geometry/coordinates/0": "49.6366698",
            "geometry/coordinates/1": "34.1711485",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.1711485, 49.6366698],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "130",
            "name": "ЦТР - Бугаевская Юлия Федоровна",
            "address": "проспект Н. Вавилова, 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.565789",
            "geometry/coordinates/1": "34.578899",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.578899, 49.565789],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "131",
            "name": "ЦТР - Бухарина Юлия Геннадьевна",
            "address": "проспект Н. Вавилова, 13",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.567077",
            "geometry/coordinates/1": "34.584559",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.584559, 49.567077],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "132",
            "name": "ЦТР - Войнов Валентин Эвальдович",
            "address": "бульвар Богдана Хмельницкого, 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.572974",
            "geometry/coordinates/1": "34.581989",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.581989, 49.572974],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "133",
            "name": "ЦТР - Войнова Тамара Ивановна",
            "address": "бульвар Богдана Хмельницкого, 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.573116",
            "geometry/coordinates/1": "34.581871",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.581871, 49.573116],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "134",
            "name": "ЦТР - Ворона Галина Григорьевна",
            "city": "с. Рясское/ Машевский",
            "region": "Полтавская Область",
            "Index": "39453",
            "geometry/coordinates/0": "49.184649",
            "geometry/coordinates/1": "34.908285",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.908285, 49.184649],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "135",
            "name": "ЦТР - Галетка Евгения Ивановна",
            "address": "переулок Стрелковый, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36014",
            "geometry/coordinates/0": "49.606771",
            "geometry/coordinates/1": "34.515164",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.515164, 49.606771],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "136",
            "name": "ЦТР - Галетка Сергей Фёдорович",
            "address": "переулок Стрелковый, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36014",
            "geometry/coordinates/0": "49.606796",
            "geometry/coordinates/1": "34.515089",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.515089, 49.606796],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "137",
            "name": "ЦТР - Герасименко Сергей Яковлевич",
            "address": "проспект Н. Вавилова, 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.565535",
            "geometry/coordinates/1": "34.574962",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.574962, 49.565535],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "138",
            "name": "ЦТР - Глушко Виктор Александрович",
            "address": "улица Лесная, 7",
            "city": "с. Копылы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38762",
            "geometry/coordinates/0": "49.5603465",
            "geometry/coordinates/1": "34.6101107",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.6101107, 49.5603465],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "139",
            "name": "ЦТР - Гоженко Анна Тимофеевна",
            "address": "улица Рабочая, 11а",
            "city": "с. Терешки/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38762",
            "geometry/coordinates/0": "49.555243",
            "geometry/coordinates/1": "34.613843",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.613843, 49.555243],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "140",
            "name": "ЦТР - Головко Екатерина Романовна",
            "address": "улица Первомайская, ",
            "city": "с. Малая Нехвороща/ Машевский",
            "region": "Полтавская Область",
            "Index": "39451",
            "geometry/coordinates/0": "49.218438",
            "geometry/coordinates/1": "34.727247",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.727247, 49.218438],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "141",
            "name": "ЦТР - Госоляк Валентина Михайловна",
            "address": "улица Европейская, 75",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36002",
            "geometry/coordinates/0": "49.577468",
            "geometry/coordinates/1": "34.540769",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.540769, 49.577468],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "142",
            "name": "ЦТР - Госоляк Игорь Богданович",
            "address": "улица Европейская, 75",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36002",
            "geometry/coordinates/0": "49.577457",
            "geometry/coordinates/1": "34.540688",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.540688, 49.577457],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "143",
            "name": "ЦТР - Гренко Алексей Владимирович",
            "address": "улица Гоголя, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36000",
            "geometry/coordinates/0": "49.588032",
            "geometry/coordinates/1": "34.559733",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.559733, 49.588032],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "144",
            "name": "ЦТР - Гренко Вита Валерьевна",
            "address": "улица Гоголя, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36000",
            "geometry/coordinates/0": "49.588027",
            "geometry/coordinates/1": "34.559678",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.559738, 49.588097],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "145",
            "name": "ЦТР - Гриненко Юлия Викторовна",
            "address": "улица Головко, 14",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.570222",
            "geometry/coordinates/1": "34.582365",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.582365, 49.570222],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "146",
            "name": "ЦТР - Громова Людмила Викторовна",
            "address": "улица Головко, 8",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569168",
            "geometry/coordinates/1": "34.578824",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.578824, 49.569168],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "147",
            "name": "ЦТР - Делендык Алёна Васильевна",
            "address": "улица Головко, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569829",
            "geometry/coordinates/1": "34.579221",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.579221, 49.569829],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "148",
            "name": "ЦТР - Делендык Людмила Сергеевна",
            "address": "улица Головко, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569829",
            "geometry/coordinates/1": "34.579087",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.579087, 49.569829],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "149",
            "name": "ЦТР - Деревянко Людмила Ивановна",
            "address": "бульвар Богдана Хмельницкого, 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.572848",
            "geometry/coordinates/1": "34.582145",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.582145, 49.572848],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "150",
            "name": "ЦТР - Деркач Иван Григорьевич",
            "address": "улица Королёва, 65",
            "city": "с. Миновка/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38773",
            "geometry/coordinates/0": "49.496347",
            "geometry/coordinates/1": "34.713696",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.713696, 49.496347],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "151",
            "name": "ЦТР - Едунова Владилена Ивановна",
            "address": "улица Пушкина, 9",
            "city": "с.Ватажково/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38772",
            "geometry/coordinates/0": "49.492675",
            "geometry/coordinates/1": "34.657037",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.657037, 49.492675],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "152",
            "name": "ЦТР - Ефименко Светлана Юрьевна",
            "address": "улица Калиновая, 25",
            "city": "с.Коломацкое/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38742",
            "geometry/coordinates/0": "49.605788",
            "geometry/coordinates/1": "34.773188",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.773188, 49.605788],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "153",
            "name": "ЦТР - Ефименко Татьяна Евгеньевна",
            "address": "бульвар Богдана Хмельницкого, 13",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.568639",
            "geometry/coordinates/1": "34.582043",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.582043, 49.568639],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "154",
            "name": "ЦТР - Жуков Геннадий Васильевич",
            "address": "улица Ярошенко, 30",
            "city": "с. Копылы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38761",
            "geometry/coordinates/0": "49.5591139",
            "geometry/coordinates/1": "34.6059305",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.6059305, 49.5591139],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "155",
            "name": "ЦТР - Жуков Евгений Геннадьевич",
            "address": "улица Ярошенко, 30",
            "city": "с. Копылы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38761",
            "geometry/coordinates/0": "49.5591139",
            "geometry/coordinates/1": "34.6059305",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.6059305, 49.5591139],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "156",
            "name": "ЦТР - Жукова Наталья Владимировна",
            "address": "улица Ярошенко, 30",
            "city": "с. Копылы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38761",
            "geometry/coordinates/0": "49.5591139",
            "geometry/coordinates/1": "34.6059305",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.6059305, 49.5591139],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "157",
            "name": "ЦТР - Жулинская Елена Ивановна",
            "address": "улица Южная, 2",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36011",
            "geometry/coordinates/0": "49.571681",
            "geometry/coordinates/1": "34.566519",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.566519, 49.571681],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "158",
            "name": "ЦТР - Жулинский Анатолий Александрович",
            "address": "улица Южная, 2",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36011",
            "geometry/coordinates/0": "49.571666",
            "geometry/coordinates/1": "34.566609",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.566609, 49.571666],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "159",
            "name": "ЦТР - Заровная Галина Эдуардовна",
            "address": "улица Головко, 18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569651",
            "geometry/coordinates/1": "34.584816",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.584816, 49.569651],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "160",
            "name": "ЦТР - Иващенко Вячеслав Михайлович",
            "address": "улица Южная, 77",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36011",
            "geometry/coordinates/0": "49.564885",
            "geometry/coordinates/1": "34.574114",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.574114, 49.564885],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "161",
            "name": "ЦТР - Иващенко Оксана Викторовна",
            "address": "улица Южная, 77",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36011",
            "geometry/coordinates/0": "49.565003",
            "geometry/coordinates/1": "34.574044",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.574044, 49.565003],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "162",
            "name": "ЦТР - Игнатенко Вера Николаевна",
            "address": "улица Р.Кириченко, 39",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.583934",
            "geometry/coordinates/1": "34.541332",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.541332, 49.583934],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "163",
            "name": "ЦТР - Калинчук Наталья Фёдоровна",
            "address": "переулок Рыбальский, 16",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.574883",
            "geometry/coordinates/1": "34.577118",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.577118, 49.574883],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "164",
            "name": "ЦТР - Клименко Валентина ",
            "address": "улица Повстанческая, 47",
            "city": "с. Рыбцы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "36042",
            "geometry/coordinates/0": "49.606552",
            "geometry/coordinates/1": "34.470248",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.470248, 49.606552],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "165",
            "name": "ЦТР - Козуб Евдокия Александровна",
            "address": "улица Шляхова, 35",
            "city": "с. Великий Тростянец/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38770",
            "geometry/coordinates/0": "49.500019",
            "geometry/coordinates/1": "34.542024",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.542024, 49.500019],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "166",
            "name": "ЦТР - Койнаш Наталья Ивановна",
            "address": "улица А. Бедного, 11",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.57328",
            "geometry/coordinates/1": "34.58348",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.58348, 49.57328],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "167",
            "name": "ЦТР - Коломиец Нина Ильинична",
            "address": ", ",
            "city": "с. Рясское/ Машевский",
            "region": "Полтавская Область",
            "Index": "39453",
            "geometry/coordinates/0": "49.183667",
            "geometry/coordinates/1": "34.90026",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.90026, 49.183667],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "168",
            "name": "ЦТР - Коляда Любовь Васильевна",
            "address": "улица Марата, 7",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36002",
            "geometry/coordinates/0": "49.576852",
            "geometry/coordinates/1": "34.541627",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.541627, 49.576852],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "169",
            "name": "ЦТР - Корнилко Валентина Филипповна",
            "address": "улица Небесной Сотни 114",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.577054",
            "geometry/coordinates/1": "34.579135",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.579135, 49.577054],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "170",
            "name": "ЦТР - Коровянская Ирина Евгеньевна",
            "address": ", ",
            "city": "с. Рясское/ Машевский",
            "region": "Полтавская Область",
            "Index": "39453",
            "geometry/coordinates/0": "49.181142",
            "geometry/coordinates/1": "34.909229",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.909229, 49.181142],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "171",
            "name": "ЦТР - Коровянская Юлия Сергеевна",
            "address": ", ",
            "city": "с. Рясское/ Машевский",
            "region": "Полтавская Область",
            "Index": "39453",
            "geometry/coordinates/0": "49.182461",
            "geometry/coordinates/1": "34.912276",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.912276, 49.182461],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "172",
            "name": "ЦТР - Косминский Николай Григорьевич",
            "address": "бульвар Богдана Хмельницкого, 18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.568928",
            "geometry/coordinates/1": "34.580905",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.580905, 49.568928],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "173",
            "name": "ЦТР - Крыштоп Тамара Георгиевна",
            "address": "проспект Н.Вавилова, 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.565535",
            "geometry/coordinates/1": "34.574919",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.574919, 49.565535],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "174",
            "name": "ЦТР - Кудинов Сергей Анатольевич",
            "address": "улица Европейская, 63",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.578637",
            "geometry/coordinates/1": "34.542711",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.542711, 49.578637],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "175",
            "name": "ЦТР - Кудинова Нина Исааковна",
            "address": "улица Европейская, 63",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.578623",
            "geometry/coordinates/1": "34.542652",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.542652, 49.578623],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "176",
            "name": "ЦТР - Кузнецова Вера Григорьевна",
            "address": "улица Горького, 102",
            "city": "с. Копылы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38761",
            "geometry/coordinates/0": "49.5565004",
            "geometry/coordinates/1": "34.6203498",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.6203498, 49.5565004],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "177",
            "name": "ЦТР - Кущ Ирина Николаевна",
            "address": "улица Покровская, 33",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36003",
            "geometry/coordinates/0": "49.599721",
            "geometry/coordinates/1": "34.544517",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.544517, 49.599721],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "178",
            "name": "ЦТР - Лазаренко Вера Алексеевна",
            "address": "улица Чураивны, 11",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.566913",
            "geometry/coordinates/1": "34.577059",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.577059, 49.566913],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "179",
            "name": "ЦТР - Лёзин Дмитрий Иванович",
            "address": "бульвар Богдана Хмельницкого, 17",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.567119",
            "geometry/coordinates/1": "34.583153",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.583153, 49.567119],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "180",
            "name": "ЦТР - Лёзина Оксана Александровна",
            "address": "бульвар Богдана Хмельницкого, 17",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.567119",
            "geometry/coordinates/1": "34.582821",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.582821, 49.567119],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "181",
            "name": "ЦТР - Лейно Мария Юлиевна",
            "address": "бульвар Богдана Хмельницкого, 18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.568722",
            "geometry/coordinates/1": "34.580889",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.580889, 49.568722],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "182",
            "name": "ЦТР - Ливер Виктория Владимировна",
            "address": "улица Европейская, 38",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.581437",
            "geometry/coordinates/1": "34.545023",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.545023, 49.581437],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "183",
            "name": "ЦТР - Ливер Владимир Григорьевич",
            "address": "улица Европейская, 38",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.581534",
            "geometry/coordinates/1": "34.544803",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.544803, 49.581534],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "184",
            "name": "ЦТР - Литвин Анжелика Константиновна",
            "address": "улица Ивана Мазепы, 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36021",
            "geometry/coordinates/0": "49.565177",
            "geometry/coordinates/1": "34.518206",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.518206, 49.565177],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "185",
            "name": "ЦТР - Литвин Роман Николаевич",
            "address": "улица Ивана Мазепы, 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36021",
            "geometry/coordinates/0": "49.565215",
            "geometry/coordinates/1": "34.518002",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.518002, 49.565215],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "186",
            "name": "ЦТР - Лукачина Оксана Юрьевна",
            "address": "улица Чураивны, 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569008",
            "geometry/coordinates/1": "34.576705",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.576705, 49.569008],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "187",
            "name": "ЦТР - Луцай Любовь Николаевна",
            "address": "улица Котляревского, 26",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36000",
            "geometry/coordinates/0": "49.5848396",
            "geometry/coordinates/1": "34.5506637",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.5506637, 49.5848396],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "188",
            "name": "ЦТР - Майборода Ирина Николаевна",
            "address": "улица Центральная, 64а",
            "city": "с. Никольское/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38760",
            "geometry/coordinates/0": "49.5364429",
            "geometry/coordinates/1": "34.6628442",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.6628442, 49.5364429],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "189",
            "name": "ЦТР - Мелешко Нина Григорьевна",
            "address": "переулок Рыбальский, 16",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.574504",
            "geometry/coordinates/1": "34.577172",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.577172, 49.574504],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "190",
            "name": "ЦТР - Моисеенко Екатерина Анатольевна",
            "address": "улица Ломоносова, 35",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36000",
            "geometry/coordinates/0": "49.600091",
            "geometry/coordinates/1": "34.568322",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.568322, 49.600091],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "191",
            "name": "ЦТР - Москаленко Нина Николаевна",
            "address": "улица Богдана Хмельницкого, 32",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.574915",
            "geometry/coordinates/1": "34.580798",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.580798, 49.574915],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "192",
            "name": "ЦТР - Мотрий Валерий Андреевич",
            "address": "улица Перепелиная, 9",
            "city": "с. Рыбцы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "36042",
            "geometry/coordinates/0": "49.618060",
            "geometry/coordinates/1": "34.465226",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.465226, 49.618060],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "193",
            "name": "ЦТР - Мотрий Наталья Михайловна",
            "address": "улица Перепелиная, 9",
            "city": "с. Рыбцы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "36042",
            "geometry/coordinates/0": "49.617719",
            "geometry/coordinates/1": "34.464636",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.464636, 49.617719],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "194",
            "name": "ЦТР - Назаренко Раиса Андреевна",
            "address": "улица Южная, 2",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36011",
            "geometry/coordinates/0": "49.571791",
            "geometry/coordinates/1": "34.566588",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.566588, 49.571791],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "195",
            "name": "ЦТР - Науменко Юлия Александровна",
            "address": "улица Добролюбова, 25",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36011",
            "geometry/coordinates/0": "49.570156",
            "geometry/coordinates/1": "34.555610",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.555610, 49.570156],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "196",
            "name": "ЦТР - Неизвидский Виталий Андреевич",
            "address": "улица Узкая, 11",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36022",
            "geometry/coordinates/0": "49.580299",
            "geometry/coordinates/1": "34.57936",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.57936, 49.580299],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "197",
            "name": "ЦТР - Нестеренко Юлия Васильевна",
            "address": "бульвар Богдана Хмельницкого, 13",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.568642",
            "geometry/coordinates/1": "34.58245",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.58245, 49.568642],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "198",
            "name": "ЦТР - Пашин Леонид Владимирович",
            "address": "улица Европейская, 87",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36002",
            "geometry/coordinates/0": "49.576508",
            "geometry/coordinates/1": "34.539186",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.539186, 49.576508],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "199",
            "name": "ЦТР - Пашин Сергей Леонидович",
            "address": "улица Европейская, 87",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36002",
            "geometry/coordinates/0": "49.576452",
            "geometry/coordinates/1": "34.539101",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.539101, 49.5764399],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "200",
            "name": "ЦТР - Пашина Анна Алексеевна",
            "address": "улица Европейская, 87",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36002",
            "geometry/coordinates/0": "49.576595",
            "geometry/coordinates/1": "34.5392836",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.5392836, 49.576595],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "201",
            "name": "ЦТР - Пащенко Алла Николаевна",
            "address": "улица Затишна, 2",
            "city": "с. Ватажково/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38772",
            "geometry/coordinates/0": "49.49602",
            "geometry/coordinates/1": "334.654119",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.654119, 49.49602],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "202",
            "name": "ЦТР - Педченко Алла Васильевна",
            "address": "улица Победы, 11",
            "city": "с. Копылы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38761",
            "geometry/coordinates/0": "49.5601424",
            "geometry/coordinates/1": "34.6088829",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.6088829, 49.5601424],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "203",
            "name": "ЦТР - Писковая Зинаида Терентьевна",
            "address": "переулок Баварский, 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36003",
            "geometry/coordinates/0": "49.59186",
            "geometry/coordinates/1": "34.56448",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.56448, 49.59186],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "204",
            "name": "ЦТР - Рабачкова Ольга Никаноровна",
            "address": "улица Сапиго, 6",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.59032",
            "geometry/coordinates/1": "34.53755",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.53755, 49.59032],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "205",
            "name": "ЦТР - Разумова Тамара Васильевна",
            "address": "переулок 2-й Трубный, 7",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36011",
            "geometry/coordinates/0": "49.569042",
            "geometry/coordinates/1": "34.561696",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.561696, 49.569042],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "206",
            "name": "ЦТР - Ревенко Надежда Владимировна",
            "address": "улица Садовая, 78",
            "city": "с. Степное/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38744",
            "geometry/coordinates/0": "49.5600521",
            "geometry/coordinates/1": "34.8086501",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.8086501, 49.5600521],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "207",
            "name": "ЦТР - Рудак Владимир Николаевич",
            "address": "улица Чураивны, 23",
            "city": "с. Ватажково/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38772",
            "geometry/coordinates/0": "49.493817",
            "geometry/coordinates/1": "34.663711",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.663711, 49.493817],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "208",
            "name": "ЦТР - Рудак Наталья Дмитриевна",
            "address": "улица Чураивны, 23",
            "city": "с. Ватажково/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38772",
            "geometry/coordinates/0": "49.494054",
            "geometry/coordinates/1": "34.663957",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.663957, 49.494054],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "209",
            "name": "ЦТР - Сеневич Любовь Ивановна",
            "address": "улица Луговая, 15",
            "city": "с. Рясское/ Машевский",
            "region": "Полтавская Область",
            "Index": "39453",
            "geometry/coordinates/0": "49.1846594",
            "geometry/coordinates/1": "34.8893013",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.8893013, 49.1846594],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "210",
            "name": "ЦТР - Сидоренко Ульяна Степановна",
            "address": "улица Головко, 10",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569196",
            "geometry/coordinates/1": "34.579688",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.579688, 49.569196],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "211",
            "name": "ЦТР - Сисько Яна Анатольевна",
            "address": "улица Журавлиная, 6",
            "city": "с. Ватажково/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38772",
            "geometry/coordinates/0": "49.497525",
            "geometry/coordinates/1": "34.658024",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.658024, 49.497525],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "212",
            "name": "ЦТР - Спивак Елена Владимировна",
            "address": "улица Кучеренко, 9",
            "city": "с. Нижние Млыны/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38752",
            "geometry/coordinates/0": "49.541885",
            "geometry/coordinates/1": "334.580251",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.580251, 49.541885],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "213",
            "name": "ЦТР - Тарабукина Ольга Степановна",
            "address": "улица Ватутина, 36а",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.587387",
            "geometry/coordinates/1": "34.532089",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.532089, 49.587387],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "214",
            "name": "ЦТР - Телятник Вера Ивановна",
            "address": "улица Харьковская, 34",
            "city": "с. Копылы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38761",
            "geometry/coordinates/0": "49.5578603",
            "geometry/coordinates/1": "34.5979512",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.5979512, 49.5578603],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "215",
            "name": "ЦТР - Тихоненко Дмитрий Иванович",
            "address": "улица Головко, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569829",
            "geometry/coordinates/1": "34.578502",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.578502, 49.569829],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "216",
            "name": "ЦТР - Тихоненко Лидия Павловна",
            "address": "улица Головко, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569829",
            "geometry/coordinates/1": "34.578331",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.578331, 49.569829],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "217",
            "name": "ЦТР - Тихоненко Татьяна Ивановна",
            "address": "улица Головко, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.569829",
            "geometry/coordinates/1": "34.578105",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.578105, 49.569829],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "218",
            "name": "ЦТР - Ткаченко Михаил Юрьевич",
            "address": "улица Пушкина, 9",
            "city": "с.Ватажково/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38772",
            "geometry/coordinates/0": "49.491769",
            "geometry/coordinates/1": "34.65678",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.65678, 49.491769],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "219",
            "name": "ЦТР - Тонконоженко Анастасия Дмитриевна",
            "address": "переулок Р.Шухевича, 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36020",
            "geometry/coordinates/0": "49.587088",
            "geometry/coordinates/1": "34.554298",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.554298, 49.587088],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "220",
            "name": "ЦТР - Тонконоженко Виктория Владимировна",
            "address": "переулок Р.Шухевича, 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36020",
            "geometry/coordinates/0": "49.58714",
            "geometry/coordinates/1": "34.554169",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.554169, 49.58714],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "221",
            "name": "ЦТР - Тонконоженко Дмитрий Викторович",
            "address": "переулок Р.Шухевича, 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36020",
            "geometry/coordinates/0": "49.587099",
            "geometry/coordinates/1": "34.554137",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.554137, 49.587099],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "222",
            "name": "ЦТР - Тонконоженко Виктория Викторовна",
            "address": "переулок Вагонный, 2",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36015",
            "geometry/coordinates/0": "49.605781",
            "geometry/coordinates/1": "34.618349",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.618349, 49.605781],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "223",
            "name": "ЦТР - Тригуб Валентина Владимировна",
            "address": "улица Европейская, 63",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.578831",
            "geometry/coordinates/1": "34.542995",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.542995, 49.578831],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "224",
            "name": "ЦТР - Федорина Людмила Николаевна",
            "address": "улица А. Бедного, 20",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.572006",
            "geometry/coordinates/1": "34.584323",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.584323, 49.572006],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "225",
            "name": "ЦТР - Филинская Раиса Ильинична",
            "address": "улица Подгорная, ",
            "city": "с. Рясское/ Машевский",
            "region": "Полтавская Область",
            "Index": "39453",
            "geometry/coordinates/0": "49.1918542",
            "geometry/coordinates/1": "34.9005685",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.9005685, 49.1918542],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "226",
            "name": "ЦТР - Филиппович Галина Владимировна",
            "address": "переулок Марата, 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36002",
            "geometry/coordinates/0": "49.575429",
            "geometry/coordinates/1": "34.542801",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.542801, 49.575429],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "227",
            "name": "ЦТР - Хавренко Иван Иванович",
            "address": "переулок Стрелковый, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36014",
            "geometry/coordinates/0": "49.606716",
            "geometry/coordinates/1": "34.515454",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.515454, 49.606716],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "228",
            "name": "ЦТР - Хавренко Людмила Викторовна",
            "address": "переулок Стрелковый, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36014",
            "geometry/coordinates/0": "49.606813",
            "geometry/coordinates/1": "34.514993",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.514993, 49.606813],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "229",
            "name": "ЦТР - Хижняк Ольга Сергеевна",
            "address": "улица Сковороды, 45",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36003",
            "geometry/coordinates/0": "49.597934",
            "geometry/coordinates/1": "34.564818",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.564818, 49.597934],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "230",
            "name": "ЦТР - Цебржинский Игорь Игоревич",
            "address": "переулок Вечный, 14",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36023",
            "geometry/coordinates/0": "49.569919",
            "geometry/coordinates/1": "34.465302",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.465302, 49.569919],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "231",
            "name": "ЦТР - Цыба Наталья Фёдоровна",
            "address": "улица Мира, 19а",
            "city": "с. Селещина/ Машевский",
            "region": "Полтавская Область",
            "Index": "39430",
            "geometry/coordinates/0": "49.462044",
            "geometry/coordinates/1": "34.8349",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.8349, 49.462044],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "232",
            "name": "ЦТР - Чекалюк Галина Филипповна",
            "address": "бульвар Богдана Хмельницкого, 18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.568559",
            "geometry/coordinates/1": "34.580873",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.580873, 49.568559],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "233",
            "name": "ЦТР - Череванёва Лидия Михайловна",
            "address": "улица 1100-летия Полтавы, 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36000",
            "geometry/coordinates/0": "49.587293",
            "geometry/coordinates/1": "34.551439",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.551439, 49.587293],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "234",
            "name": "ЦТР - Черникова Екатерина Алексеевна",
            "address": "проспект Н. Вавилова, 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.565459",
            "geometry/coordinates/1": "34.580584",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.580584, 49.565459],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "235",
            "name": "ЦТР - Чернушенко Наталья Юрьевна",
            "address": "переулок Марата, 7",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36002",
            "geometry/coordinates/0": "49.576821",
            "geometry/coordinates/1": "34.541702",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.541702, 49.576821],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "236",
            "name": "ЦТР - Чугуй Любовь Константиновна",
            "address": "улица Оксаны Мешко, 24",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36011",
            "geometry/coordinates/0": "49.57553",
            "geometry/coordinates/1": "34.552227",
            "Activity": "не приходят в зал",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.552227, 49.57553],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "237",
            "name": "ЦТР - Шапченко Екатерина Александровна",
            "address": "проспект Н. Вавилова, 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.565538",
            "geometry/coordinates/1": "34.575025",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.575025, 49.565538],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "238",
            "name": "ЦТР - Шевченко Павел Александрович",
            "address": "улица Сапиго, 6",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.59032",
            "geometry/coordinates/1": "34.53755",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.53755, 49.59032],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "239",
            "name": "ЦТР - Шевченко Юлия Владимировна",
            "address": "улица Сапиго, 6",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.59032",
            "geometry/coordinates/1": "34.53755",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.53755, 49.59032],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "240",
            "name": "ЦТР - Шматко Любовь Пантелеймоновна",
            "address": "улица Шевченко, 23",
            "city": "с. Вацы/ Полтавский",
            "region": "Полтавская Область",
            "Index": "38760",
            "geometry/coordinates/0": "49.5510527",
            "geometry/coordinates/1": "34.691581",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.691581, 49.5510527],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "241",
            "name": "ЦТР - Щеглова Татьяна Леонидовна",
            "address": "улица Н.Сотни 114",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36004",
            "geometry/coordinates/0": "49.576842",
            "geometry/coordinates/1": "34.579017",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.579017, 49.576842],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "242",
            "name": "ЦТР - Эвентаве Валентина Михайловна",
            "address": "улица Европейская, 42",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36039",
            "geometry/coordinates/0": "49.580612",
            "geometry/coordinates/1": "34.544315",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.544315, 49.580612],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "243",
            "name": "ЦТР - Эсаулова Наталья Анатольевна",
            "address": "улица Яценко, 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "36003",
            "geometry/coordinates/0": "49.595622",
            "geometry/coordinates/1": "34.545157",
            "congregation": "Центральное",
            "marker-color": "red",
        },
        "geometry": {
            "coordinates": [34.545157, 49.595622],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "244",
            "name": "ЮРО - Балаба Надежда",
            "address": "пер. Весёлый 2/16",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.595928",
            "geometry/coordinates/1": "34.520406",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.520406, 49.595928],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "245",
            "name": "ЮРО - Бахшиева Ирина Евгениевна",
            "address": "ул. Октябрская 79",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.598702",
            "geometry/coordinates/1": "34.530888",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.530888, 49.598702],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "246",
            "name": "ЮРО - Береза Миланья Сергеевна",
            "address": "ул. Первомайская",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.660847",
            "geometry/coordinates/1": "34.532556",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.532556, 49.660847],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "247",
            "name": "ЮРО - Бондарь Татьяна Прокофьевна",
            "address": "Октябрская 60а, кв. 24",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.596067",
            "geometry/coordinates/1": "34.539497",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.539497, 49.596067],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "248",
            "name": "ЮРО - Двужилова Елена Владимировна",
            "address": "Ул. Грабиновская 22б",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.602217",
            "geometry/coordinates/1": "34.612668",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.612668, 49.602217],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "249",
            "name": "ЮРО - Джупий Татьяна Ивановна",
            "address": "Пер. Федька 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.587043",
            "geometry/coordinates/1": "34.528618",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.528618, 49.587043],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "250",
            "name": "ЮРО - Донченко Валентина Михайловна",
            "address": "Ул. Сурикова, 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.591146",
            "geometry/coordinates/1": "34.508228",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.508228, 49.591146],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "251",
            "name": "ЮРО - Доровскнх Лидия Иосифовна",
            "address": "Ул. Круговая 35",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.642078",
            "geometry/coordinates/1": "34.517123",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.517123, 49.642078],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "252",
            "name": "ЮРО - Дробышевская Надежда Васильевна",
            "address": "Артёма 45",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.588427",
            "geometry/coordinates/1": "34.529123",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.529123, 49.588427],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "253",
            "name": "ЮРО - Жидкова Анастасия Сергеевна",
            "address": "Уютная 28",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.595437",
            "geometry/coordinates/1": "34.526988",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.526988, 49.595437],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "254",
            "name": "ЮРО - Жидков Андрей Петрович",
            "address": "Уютная 28",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.595187",
            "geometry/coordinates/1": "34.52673",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.52673, 49.595187],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "255",
            "name": "ЮРО - Жидкова Галина Васильевна",
            "address": "Уютная 28",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.595535",
            "geometry/coordinates/1": "34.527159",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.527159, 49.595535],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "256",
            "name": "ЮРО - Жидков Павел Андреевич",
            "address": "Уютная 28",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.595323",
            "geometry/coordinates/1": "34.527578",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.527578, 49.595323],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "257",
            "name": "ЮРО - Забельская Любовь Ивановна",
            "address": "Пушкина 116",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.596282",
            "geometry/coordinates/1": "34.528613",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.528613, 49.596282],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "258",
            "name": "ЮРО - Зиновьева Алла Прокопьевна",
            "address": "Пушкина 66а",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.592315",
            "geometry/coordinates/1": "34.537813",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.537813, 49.592315],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "259",
            "name": "ЮРО - Зозуля Александр Николаевич",
            "address": "ул. Касьяна 10",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.657162",
            "geometry/coordinates/1": "34.534568",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.534568, 49.657162],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "260",
            "name": "ЮРО - Зозуля Николай",
            "address": "ул. Касьяна 10",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.657134",
            "geometry/coordinates/1": "34.534771",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.534771, 49.657134],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "261",
            "name": "ЮРО - Зозуля Татьяна",
            "address": "ул. Касьяна 10",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.657312",
            "geometry/coordinates/1": "34.534766",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.534766, 49.657312],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "262",
            "name": "ЮРО - Иванов Игорь Дмитриевич",
            "address": "Ул. Далёкая 22",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.586321",
            "geometry/coordinates/1": "34.518570",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.518570, 49.586321],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "263",
            "name": "ЮРО - Иванова Татьяна Павловна",
            "address": "Ул. Далёкая 22",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.586382",
            "geometry/coordinates/1": "34.518673",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.518673, 49.586382],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "264",
            "name": "ЮРО - Камнева Таисия Аксентиевна",
            "address": "Ул. Некрасова 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.589029",
            "geometry/coordinates/1": "34.532223",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.532223, 49.589029],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "265",
            "name": "ЮРО - Колесник Светлана Николаевна",
            "address": "Леси Украинки 25",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.567958",
            "geometry/coordinates/1": "34.544929",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.544929, 49.567958],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "266",
            "name": "ЮРО - Колотий Марина Генадиевна",
            "address": "Ул. С. Кондратенка 12",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.60391",
            "geometry/coordinates/1": "34.526778",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.526778, 49.60391],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "267",
            "name": "ЮРО - Котлубай Нина",
            "address": "Ул. Уютная 26",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.594971",
            "geometry/coordinates/1": "34.527224",
            "Activity": "редко посещает",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.527224, 49.594971],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "268",
            "name": "ЮРО - Кравец Наталья Ивановна",
            "address": "Ул. Пушкина 145",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5954268",
            "geometry/coordinates/1": "34.5264159",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.5264159, 49.5954268],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "269",
            "name": "ЮРО - Крапивина Мария Тимофеевна",
            "address": "Ул. Артёма 7/22",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.594634",
            "geometry/coordinates/1": "34.536429",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.536429, 49.594634],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "270",
            "name": "ЮРО - Лаврова Яна",
            "address": "Ул. Крамского 1/14",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.588177",
            "geometry/coordinates/1": "34.536729",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.536729, 49.588177],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "271",
            "name": "ЮРО - Лихоманова Ирина",
            "address": "Ул. Опытная 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.6097561",
            "geometry/coordinates/1": "34.532824",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.532824, 49.6097561],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "272",
            "name": "ЮРО - Луговая Галина Ивановна",
            "address": "Ул. Сенная 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.592704",
            "geometry/coordinates/1": "34.541246",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.541246, 49.592704],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "273",
            "name": "ЮРО - Матвиенко Татьяна Борисовна",
            "address": "Ул. Н. Левицкого 24",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593528",
            "geometry/coordinates/1": "34.527712",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.527712, 49.593528],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "274",
            "name": "ЮРО - Махно Елена Евгениевна",
            "address": "ул. Степная 20",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.65378",
            "geometry/coordinates/1": "34.532669",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.532669, 49.65378],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "275",
            "name": "ЮРО - Можчиль Людмила Анатолиевна",
            "address": "Ул. Шевченка 113",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593056",
            "geometry/coordinates/1": "34.526505",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.526505, 49.593056],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "276",
            "name": "ЮРО - Панченко Валентина Николаевна",
            "address": "Ул. Шевченко 73",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.589244",
            "geometry/coordinates/1": "34.534482",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.534482, 49.589244],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "277",
            "name": "ЮРО - Паржина Валентина Григорьевна",
            "address": "Ул. Артёма 13",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593601",
            "geometry/coordinates/1": "34.53467",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.53467, 49.593601],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "278",
            "name": "ЮРО - Пикинер Татьяна Владимировна",
            "address": "Ул. Артёма 45",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.588841",
            "geometry/coordinates/1": "34.529616",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.529616, 49.588841],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "279",
            "name": "ЮРО - Пилипенко Вера Павловна",
            "address": "Ул. Зыгина 6",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.594231",
            "geometry/coordinates/1": "34.537244",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.537244, 49.594231],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "280",
            "name": "ЮРО - Полтавец Дарья Михайловна",
            "address": "Ул. Шевченка 115",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593848",
            "geometry/coordinates/1": "34.524466",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.524466, 49.593848],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "281",
            "name": "ЮРО - Полтавец Татьяна Фёдоровна",
            "address": "Ул. Шевченка 115",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593702",
            "geometry/coordinates/1": "34.524842",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.524842, 49.593702],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "282",
            "name": "ЮРО - Продащук Валентина Григорьевна",
            "address": "ул. Патлаивская 4",
            "city": "С. Вакуленцы,",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.629851",
            "geometry/coordinates/1": "34.597733",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.597733, 49.629851],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "283",
            "name": "ЮРО - Прдащук Сергей Андреевич",
            "address": "ул. Патлаивская 4",
            "city": "С. Вакуленцы,",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.62988",
            "geometry/coordinates/1": "34.597653",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.597653, 49.62988],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "284",
            "name": "ЮРО - Резвая Татьяна Николаевна",
            "address": "улица Энгельса 11",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.58528",
            "geometry/coordinates/1": "34.532266",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.532266, 49.58528],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "285",
            "name": "ЮРО - Решетникова Анна Михайловна",
            "address": "улица Н. Левицкого 24",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593761",
            "geometry/coordinates/1": "34.528002",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.528002, 49.593761],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "286",
            "name": "ЮРО - Салиенко Зинаида Никитична",
            "address": "улица Кошевого 28",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.589905",
            "geometry/coordinates/1": "34.505433",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.505433, 49.589905],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "287",
            "name": "ЮРО - Салий Ольга Тимофеевна",
            "address": "улица Халтурина 21",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.594971",
            "geometry/coordinates/1": "34.525491",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.525491, 49.594971],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "288",
            "name": "ЮРО - Слинько Светлана Иосифовна",
            "address": "улица Уютная 17/19",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593779",
            "geometry/coordinates/1": "34.528876",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.528876, 49.593779],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "289",
            "name": "ЮРО - Соловьяненко Валентина Василиевна",
            "address": "Ул. Артёма 13",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593476",
            "geometry/coordinates/1": "34.534471",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.534471, 49.593476],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "290",
            "name": "ЮРО - Соловьяненко Елена Владимировна",
            "address": "Ул. Артёма 13",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593313",
            "geometry/coordinates/1": "34.534348",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.534348, 49.593313],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "291",
            "name": "ЮРО - Стадннк Мария Леонтьевна",
            "address": "Уп. Пушкина 135, кв.18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.594081",
            "geometry/coordinates/1": "34.529836",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.529836, 49.594081],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "292",
            "name": "ЮРО - Сулима Ольга Васильевна",
            "address": "пер. Радянский 15",
            "city": "село Супруновка",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5740969",
            "geometry/coordinates/1": "34.4317127",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.4317127, 49.5740969],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "293",
            "name": "ЮРО - Суцкевер Николай Владимирович",
            "address": "улица Шведская",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.604543",
            "geometry/coordinates/1": "34.539701",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.539701, 49.604543],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "294",
            "name": "ЮРО - Татарко Мария Михайловна",
            "address": "Ул. Октябрская 79",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.598866",
            "geometry/coordinates/1": "34.530539",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.530539, 49.598866],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "295",
            "name": "ЮРО - Токало Алексей Алексеевич",
            "address": "ул. Братская 11",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.661479",
            "geometry/coordinates/1": "34.539181",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.539181, 49.661479],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "296",
            "name": "ЮРО - Токало Максим Алексеевич",
            "address": "ул. Братская 11",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.661489",
            "geometry/coordinates/1": "34.539374",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.539374, 49.661489],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "297",
            "name": "ЮРО - Токало Оксана Леонидовна",
            "address": "ул. Братская 11",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.661475",
            "geometry/coordinates/1": "34.539508",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.539508, 49.661475],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "298",
            "name": "ЮРО - Филимонов Дмитрий",
            "address": "ул. Первомайская 107",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.661767",
            "geometry/coordinates/1": "34.518603",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.518603, 49.661767],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "299",
            "name": "ЮРО - Черкашина Алла Борисовна",
            "address": "Ул. Нижне-Фабриканская 15-1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.601049",
            "geometry/coordinates/1": "34.565764",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.565764, 49.601049],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "300",
            "name": "ЮРО - Черкашин Сергей Викторович",
            "address": "Ул. Нижне-Фабриканская 15-1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.600969",
            "geometry/coordinates/1": "34.565681",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.565681, 49.600969],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "301",
            "name": "ЮРО - Шелудько Светлана Фёдоровна",
            "address": "Ул. Половка 7",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.589153",
            "geometry/coordinates/1": "34.472060",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.472060, 49.589153],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "302",
            "name": "ЮРО - Шкурба Лариса Василиевна",
            "address": "ул. Победы 7",
            "city": "С. Тахтаулово",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.667114",
            "geometry/coordinates/1": "34.508379",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.508379, 49.667114],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "303",
            "name": "ЮРО - Ястреба Лариса Алексеевна",
            "address": "Ул. Артёма 45",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.588684",
            "geometry/coordinates/1": "34.529418",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.529418, 49.588684],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "304",
            "name": "ЮРО - Суцкевер Юлия",
            "address": "улица Шведская",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.603994",
            "geometry/coordinates/1": "34.539514",
            "Activity": "редко посещает",
            "congregation": "Юровка",
            "marker-color": "green",
        },
        "geometry": {
            "coordinates": [34.539514, 49.603994],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "305",
            "name": "ВСТ -  Бедная Светлана Петровна",
            "address": "улица Садовая 14",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.576421",
            "geometry/coordinates/1": "34.557433",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.557433, 49.576421],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "306",
            "name": "ВСТ -  Беленькая Лидия Васильевна",
            "address": "улица Соборный Майдан 16",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.583026",
            "geometry/coordinates/1": "34.565917",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.565917, 49.583026],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "307",
            "name": "ВСТ -  Богомолова Елена Константиновна",
            "address": "улица  Небесной Сотни 87",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.577089",
            "geometry/coordinates/1": "34.582161",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.582161, 49.577089],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "308",
            "name": "ВСТ -  Бондаренко Вадим Григорьевич",
            "address": "улица Богдана Хмельницкого 36",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.576396",
            "geometry/coordinates/1": "34.582391",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.582391, 49.576396],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "309",
            "name": "ВСТ -  Бондаренко Валентина Тимофеевна",
            "address": "улица Богдана Хмельницкого 36",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.576386",
            "geometry/coordinates/1": "34.5823",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.5823, 49.576386],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "310",
            "name": "ВСТ -  Борисенко Лариса Владимировна",
            "address": "булевард Юрия Победоносцева 3",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.575384",
            "geometry/coordinates/1": "34.50855",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.50855, 49.575384],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "311",
            "name": "ВСТ -  Вакула Наталья Васильевна",
            "address": "улица Ленина 33",
            "city": "село Головач",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.4624798",
            "geometry/coordinates/1": "34.5960067",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.5960067, 49.4624798],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "312",
            "name": "ВСТ -  Владимирская Ирина Дмитриевна",
            "address": "улица Соборный Майдан 15",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.582104",
            "geometry/coordinates/1": "34.565333",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.565333, 49.582104],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "313",
            "name": "ВСТ -  Вовк Анна",
            "address": "улица Шевченко 73",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.589255",
            "geometry/coordinates/1": "34.534342",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.534342, 49.589255],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "314",
            "name": "ВСТ -  Врона Валерий Валериевич",
            "address": "улица Кропивницкого 24",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.569789",
            "geometry/coordinates/1": "34.525793",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.525793, 49.569789],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "315",
            "name": "ВСТ -  Горнило Александра Александровна",
            "address": "улица Пушкина 17",
            "city": "село Новосёловка",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.628205",
            "geometry/coordinates/1": "34.694738",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.694738, 49.628205],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "316",
            "name": "ВСТ -  Грабовская Любовь Дмитриевна",
            "address": "улица  Небесной Сотни 32",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.581229",
            "geometry/coordinates/1": "34.562645",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.562645, 49.581229],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "317",
            "name": "ВСТ -  Гринько Виктория Викторовна",
            "address": "улица  Подмонастырская 16",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.591346",
            "geometry/coordinates/1": "34.572451",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.572451, 49.591346],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "318",
            "name": "ВСТ -  Гринько Роман Валериевич",
            "address": "улица  Подмонастырская 16",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.591306",
            "geometry/coordinates/1": "34.572371",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.572371, 49.591306],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "319",
            "name": "ВСТ -  Грищук Людмила",
            "address": "улица  Грабиновская 22",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.602116",
            "geometry/coordinates/1": "34.612454",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.612454, 49.602116],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "320",
            "name": "ВСТ -  Давыдова Ольга Викторовна",
            "address": "переулок Школьный 4А",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.596484",
            "geometry/coordinates/1": "34.556444",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.556444, 49.596484],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "321",
            "name": "ВСТ -  Демченко Оксана",
            "address": "переулок Балковий, 10а",
            "city": "Гожулы",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.609755",
            "geometry/coordinates/1": "34.446176",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.446176, 49.609755],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "322",
            "name": "ВСТ -  Десятник Александра Степановна",
            "address": "улица  Небесной Сотни 90",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.578167",
            "geometry/coordinates/1": "34.574318",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.574318, 49.578167],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "323",
            "name": "ВСТ -  Десятник Николай Иванович",
            "address": "улица  Небесной Сотни 90",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.578073",
            "geometry/coordinates/1": "34.57427",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.57427, 49.578073],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "324",
            "name": "ВСТ -  Дикань Алиса",
            "address": "улица Театральная 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5977649",
            "geometry/coordinates/1": "34.5496444",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.5496444, 49.5977649],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "325",
            "name": "ВСТ -  Довганич Светлана",
            "address": "пер. Ломаный, 36",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5834566",
            "geometry/coordinates/1": "34.5713613",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.5713613, 49.5834566],
            "type": "Point"
        }
    },
    {
        "type": "Feature",
        "properties": {
            "id": "326",
            "name": "ВСТ -  Дорохов Александр Андреевич",
            "address": "улица Занасыпная 6",
            "city": "Поселок Воронина",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.594054",
            "geometry/coordinates/1": "34.580600",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.580600, 49.594054],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "327",
            "name": "ВСТ -  Дорохова Александра Семеновна",
            "address": "улица Занасыпная 6",
            "city": "Поселок Воронина",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.59413",
            "geometry/coordinates/1": "34.580551",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.580551, 49.59413],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "328",
            "name": "ВСТ -  Дроцкая Лидия",
            "address": "улица Театральная 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5977649",
            "geometry/coordinates/1": "34.5496444",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.5496444, 49.5977649],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "329",
            "name": "ВСТ -  Зленко Богдан",
            "address": "улица Преображенская 12",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.617133",
            "geometry/coordinates/1": "34.576217",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.576217, 49.617133],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "330",
            "name": "ВСТ -  Зленко Даниил",
            "address": "улица Преображенская 12",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.617178",
            "geometry/coordinates/1": "34.57634",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.57634, 49.617178],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "331",
            "name": "ВСТ -  Зленко Светлана Анатольевна",
            "address": "улица Преображенская 12",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.617074",
            "geometry/coordinates/1": "34.576308",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.576308, 49.617074],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "332",
            "name": "ВСТ -  Зленко Сергей Иванович",
            "address": "улица Преображенская 12",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.617154",
            "geometry/coordinates/1": "34.576464",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.576464, 49.617154],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "333",
            "name": "ВСТ -  Золотоверх Елена",
            "address": "переулок Госпитальный 8",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593761",
            "geometry/coordinates/1": "34.557275",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.557275, 49.593761],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "334",
            "name": "ВСТ -  Зубкова Валентина",
            "address": "улица Серова 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.602205",
            "geometry/coordinates/1": "34.571032",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.571032, 49.602205],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "335",
            "name": "ВСТ -  Зубков Николай",
            "address": "улица Серова 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.602252",
            "geometry/coordinates/1": "34.571174",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.571174, 49.602252],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "336",
            "name": "ВСТ -  Иванова Ольга Дмитриевна",
            "address": "улица Ст.Подол 10",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.581478",
            "geometry/coordinates/1": "34.582198",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.582198, 49.581478],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "337",
            "name": "ВСТ -  Иващенко Алина Владимировна",
            "address": "улица  Небесной Сотни 91",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.57633",
            "geometry/coordinates/1": "34.584467",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.584467, 49.57633],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "338",
            "name": "ВСТ -  Иващенко Владимир Викторович",
            "address": "улица  Небесной Сотни 91",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.57647",
            "geometry/coordinates/1": "34.584258",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.584258, 49.57647],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "339",
            "name": "ВСТ -  Иващенко Елена Николаевна",
            "address": "улица  Небесной Сотни 91",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.57639",
            "geometry/coordinates/1": "34.584333",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.584333, 49.57639],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "340",
            "name": "ВСТ -  Кабушка Виктория Сергеевна",
            "address": "улица  Балакина 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.597409",
            "geometry/coordinates/1": "34.553086",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.553086, 49.597409],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "341",
            "name": "ВСТ -  Калиниченко Галина Александровна",
            "address": "Институтский прорез 76",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.57921",
            "geometry/coordinates/1": "34.571716",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.571716, 49.57921],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "342",
            "name": "ВСТ -  Клеймёнова Наталья Игоревна",
            "address": "улица Сортировочная 13",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.596842",
            "geometry/coordinates/1": "34.60651",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.60651, 49.596842],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "343",
            "name": "ВСТ -  Кобозев Владимир Васильевич",
            "address": "улица Панянки 58",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.582685",
            "geometry/coordinates/1": "34.582434",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.582434, 49.582685],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "344",
            "name": "ВСТ -  Котельникова Марина",
            "address": "улица  Небесной Сотни 87",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.576957",
            "geometry/coordinates/1": "34.58207",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.58207, 49.576957],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "345",
            "name": "ВСТ -  Кравцова Жанна Юрьевна",
            "address": "улица Горовая 21",
            "city": "Село Мыльцы",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5626608",
            "geometry/coordinates/1": "34.4358127",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.4358127, 49.5626608],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "346",
            "name": "ВСТ -  Кравцова Юлия Викторовна",
            "address": "улица Горовая 21",
            "city": "Село Мыльцы",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5626608",
            "geometry/coordinates/1": "34.4358127",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.4358127, 49.5626608],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "347",
            "name": "ВСТ -  Кравченко Денис Юрьевич",
            "address": "улица Спартака 95",
            "city": "Село Яковцы",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.6225801",
            "geometry/coordinates/1": "34.5606741",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.5606741, 49.6225801],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "348",
            "name": "ВСТ -  Кравченко Наталья Александровна",
            "address": "улица Спартака 95",
            "city": "Село Яковцы",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.6225801",
            "geometry/coordinates/1": "34.5606741",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.5606741, 49.6225801],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "349",
            "name": "ВСТ -  Куличковский Сергей Викторович",
            "address": "улица Капельгородского 14",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.587512",
            "geometry/coordinates/1": "34.565628",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.565628, 49.587512],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "350",
            "name": "ВСТ -  Куличковская Юлия Петровна",
            "address": "улица Капельгородского 14",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.587591",
            "geometry/coordinates/1": "34.565723",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.565723, 49.587591],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "351",
            "name": "ВСТ -  Кудла Елизавета Сергеевна",
            "address": "улица Нижне-Фабриканская 15",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.600997",
            "geometry/coordinates/1": "34.565885",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.565885, 49.600997],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "352",
            "name": "ВСТ -  Кудла Кирилл Сергеевич",
            "address": "улица Нижне-Фабриканская 15",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.600948",
            "geometry/coordinates/1": "34.565617",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.565617, 49.600948],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "353",
            "name": "ВСТ -  Курочка Александра Тимофеевна",
            "address": "улица Воронина 34",
            "city": "Поселок Воронина",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.599331",
            "geometry/coordinates/1": "34.581640",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.581640, 49.599331],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "354",
            "name": "ВСТ -  Левцун Надежда Константиновна",
            "address": "улица Балакина 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.597346",
            "geometry/coordinates/1": "34.553043",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.553043, 49.597346],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "355",
            "name": "ВСТ -  Легарь Тамара Станиславовна",
            "address": "проспект Мира 18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.575537",
            "geometry/coordinates/1": "34.584628",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.584628, 49.575537],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "356",
            "name": "ВСТ -  Лещенко Давид Павлович",
            "address": "улица Ломоносова 54",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.601322",
            "geometry/coordinates/1": "34.568900",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.568900, 49.601322],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "357",
            "name": "ВСТ -  Лещенко Павел Анатольевич",
            "address": "улица Ломоносова 54",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.601404",
            "geometry/coordinates/1": "34.569045",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.569045, 49.601404],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "358",
            "name": "ВСТ -  Лещенко Юлия Николаевна",
            "address": "улица  Ломоносова 54",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.601306",
            "geometry/coordinates/1": "34.569055",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.569055, 49.601306],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "359",
            "name": "ВСТ -  Лихошвай Виктор Михайлович",
            "address": "улица Береговая 6",
            "city": "Поселок Макуховка",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5968926",
            "geometry/coordinates/1": "34.6233416",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.6233416, 49.5968926],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "360",
            "name": "ВСТ -  Лихошвай Надежда",
            "address": "улица Береговая 6",
            "city": "Поселок Макуховка",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5968926",
            "geometry/coordinates/1": "34.6233416",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.6233416, 49.5968926],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "361",
            "name": "ВСТ -  Лящук Людмила",
            "address": "улица Соборности 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.583262",
            "geometry/coordinates/1": "34.563616",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.563616, 49.583262],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "362",
            "name": "ВСТ -  Малинская Валентина Евгеньевна",
            "address": "переулок Институтский прорез 70",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.578484",
            "geometry/coordinates/1": "34.571868",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.571868, 49.578484],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "363",
            "name": "ВСТ -  Мартыненко Лариса Петровна",
            "address": "улица Фрунзе 107",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.574282",
            "geometry/coordinates/1": "34.537523",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.537523, 49.574282],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "364",
            "name": "ВСТ -  Марценюк Александр А.",
            "address": "улица  Соборности 27",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.587589",
            "geometry/coordinates/1": "34.554926",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.554926, 49.587589],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "365",
            "name": "ВСТ -  Марценюк Александр",
            "address": "улица  Соборности 27",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.587516",
            "geometry/coordinates/1": "34.555178",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.555178, 49.587516],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "366",
            "name": "ВСТ -  Марценюк Татьяна",
            "address": "улица  Соборности 27",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.587526",
            "geometry/coordinates/1": "34.555044",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.555044, 49.587526],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "367",
            "name": "ВСТ -  Марченко Ольга",
            "address": "переулок Перекопский 15",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.592899",
            "geometry/coordinates/1": "34.523318",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.523318, 49.592899],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "368",
            "name": "ВСТ -  Марченко Пётр",
            "address": "переулок Перекопский 15",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.592795",
            "geometry/coordinates/1": "34.523377",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.523377, 49.592795],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "369",
            "name": "ВСТ -  Михайленко Светлана Николаевна",
            "address": "улица  Мира 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.581037",
            "geometry/coordinates/1": "34.583732",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.583732, 49.581037],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "370",
            "name": "ВСТ -  Мороз Александр Николаевич",
            "address": "улица Октябрьская 74",
            "city": "Село Головач",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.4594117",
            "geometry/coordinates/1": "34.5953495",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.5953495, 49.4594117],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "371",
            "name": "ВСТ -  Мороз Екатерина Ивановна",
            "address": "улица Шевченка 158",
            "city": "Село Безручки",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.51529",
            "geometry/coordinates/1": "34.616611",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.616611, 49.51529],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "372",
            "name": "ВСТ -  Мороз Марина Александровна",
            "address": "улица Шевченка 158",
            "city": "Село Безручки",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.5153888",
            "geometry/coordinates/1": "34.6160728",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.6160728, 49.5153888],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "373",
            "name": "ВСТ -  Мосиенко Галина Николаевна",
            "address": "улица Пионерская 22",
            "city": "Село Головач",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.4734929",
            "geometry/coordinates/1": "34.5927414",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.5927414, 49.4734929],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "374",
            "name": "ВСТ -  Мурашко Наталья",
            "address": "улица Ленина 33",
            "city": "Село Головач",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.469846",
            "geometry/coordinates/1": "34.598823",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.598823, 49.469846],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "375",
            "name": "ВСТ -  Нечитайло Анастасия Юрьевна",
            "address": "улица  Небесной Сотни 124",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.575896",
            "geometry/coordinates/1": "34.582649",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.582649, 49.575896],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "376",
            "name": "ВСТ -  Никифоров Николай Валериевич",
            "address": "улица  Небесной Сотни 57",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.579464",
            "geometry/coordinates/1": "34.572731",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.572731, 49.579464],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "377",
            "name": "ВСТ -  Нужный Богдан Игоревич",
            "address": "улица Пушкина 17",
            "city": "Село Новосёловка",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.6282468",
            "geometry/coordinates/1": "34.6953023",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.6953023, 49.6282468],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "378",
            "name": "ВСТ -  Нужная Ирина Константиновна",
            "address": "улица Пушкина 17",
            "city": "Село Новосёловка",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.628108",
            "geometry/coordinates/1": "34.695114",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.695114, 49.628108],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "379",
            "name": "ВСТ -  Овчаренко Сергей Владимирович",
            "address": "переулок Тыловой 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.596039",
            "geometry/coordinates/1": "34.569662",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.569662, 49.596039],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "380",
            "name": "ВСТ -  Очкал Александр",
            "address": "переулок Госпитальный 8",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593887",
            "geometry/coordinates/1": "34.557382",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.557382, 49.593887],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "381",
            "name": "ВСТ -  Пархоменко Ольга",
            "address": "улица  Андрущянская 3",
            "city": "Село Макуховка",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.597527",
            "geometry/coordinates/1": "34.632457",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.632457, 49.597527],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "382",
            "name": "ВСТ -  Писковая Валентина",
            "address": "улица Панфилова 13",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.600643",
            "geometry/coordinates/1": "34.556671",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.556671, 49.600643],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "383",
            "name": "ВСТ -  Погорелая Надежда",
            "address": " ул. Надворсклянська 24",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.587260",
            "geometry/coordinates/1": "34.590680",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.590680, 49.587260],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "384",
            "name": "ВСТ -  Позоян Людмила Устимовна",
            "address": "улица  Небесной Сотни 55",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.579941",
            "geometry/coordinates/1": "34.572119",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.572119, 49.579941],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "385",
            "name": "ВСТ -  Пустовит Татьяна",
            "address": "переулок Белинского 4",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.590743",
            "geometry/coordinates/1": "34.561615",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.561615, 49.590743],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "386",
            "name": "ВСТ -  Савицкая Анна Николаевна",
            "address": "улица Балакина 39",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.598473",
            "geometry/coordinates/1": "34.559249",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.559249, 49.598473],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "387",
            "name": "ВСТ -  Сандина Надежда Афанасьевна",
            "address": "Майдан Независимости 1",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.593348",
            "geometry/coordinates/1": "34.549384",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.549384, 49.593348],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "388",
            "name": "ВСТ -  Седляр Светлана Ивановна",
            "address": "улица Пятая Линия 17",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.608455",
            "geometry/coordinates/1": "34.574457",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.574457, 49.608455],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "389",
            "name": "ВСТ -  Сень Людмила",
            "address": "проулок Никитский 18",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.588395",
            "geometry/coordinates/1": "34.582171",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.582171, 49.588395],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "390",
            "name": "ВСТ -  Сиволап Татьяна Андреевна",
            "address": "улица Монастырская 25",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.59342",
            "geometry/coordinates/1": "34.56734",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.56734, 49.59342],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "391",
            "name": "ВСТ -  Ткаченко Антонина",
            "address": "улица Четвертая линия 20",
            "city": "Поселок Червонный Шлях",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.608005",
            "geometry/coordinates/1": "34.576874",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.576874, 49.608005],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "392",
            "name": "ВСТ -  Ткаченко Людмила",
            "address": "улица Молодижна 80",
            "city": "Село Яковцы",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.63038",
            "geometry/coordinates/1": "34.563117",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.563117, 49.63038],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "393",
            "name": "ВСТ -  Ткаченко Юрий Григорьевич",
            "address": "переулок Пионерский 7",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.587307",
            "geometry/coordinates/1": "34.553837",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.553837, 49.587307],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "394",
            "name": "ВСТ -  Ульшина Неля Васильевна",
            "address": "улица  Соборности 46",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.59332",
            "geometry/coordinates/1": "34.544862",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.544862, 49.59332],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "395",
            "name": "ВСТ -  Фисун Анастасия Николаевна",
            "address": "улица Лизы Чайкиной 23",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.604345",
            "geometry/coordinates/1": "34.564163",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.564163, 49.604345],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "396",
            "name": "ВСТ -  Фисун Антон Николаевич",
            "address": "улица Лизы Чайкиной 23",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.604359",
            "geometry/coordinates/1": "34.564447",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.564447, 49.604359],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "397",
            "name": "ВСТ -  Фисун Светлана Викторовна",
            "address": "улица Лизы Чайкиной 23",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.604487",
            "geometry/coordinates/1": "34.564313",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.564313, 49.604487],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "398",
            "name": "ВСТ -  Цыгурова Елена Витальевна",
            "address": "улица Южная 10",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.562277",
            "geometry/coordinates/1": "34.576044",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.576044, 49.562277],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "399",
            "name": "ВСТ -  Цымбалист Наталья",
            "address": "переулок Миргородский 4",
            "city": "Село Яковцы",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.631432",
            "geometry/coordinates/1": "34.568699",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.568699, 49.631432],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "400",
            "name": "ВСТ -  Шагакова Татьяна Ивановна",
            "address": "улица Седьмая Линия 17",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.610107",
            "geometry/coordinates/1": "34.573155",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.573155, 49.610107],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "401",
            "name": "ВСТ -  Шевченко Анна",
            "address": "улица  Зелёный Остров 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.583924",
            "geometry/coordinates/1": "34.582543",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.582543, 49.583924],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "402",
            "name": "ВСТ -  Шевченко Виталий",
            "address": "улица  Зелёный Остров 5",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.583875",
            "geometry/coordinates/1": "34.582493",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.582493, 49.583875],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "403",
            "name": "ВСТ -  Шевченко Татьяна Владимировна",
            "address": "улица Воронина 17",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.596685",
            "geometry/coordinates/1": "34.580530",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.580530, 49.596685],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "404",
            "name": "ВСТ -  Шикаренко Светлана",
            "address": "улица Садовая 8",
            "city": "Село Ковалёвка",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.605857",
            "geometry/coordinates/1": "34.702957",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.702957, 49.605857],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "405",
            "name": "ВСТ -  Якименко Анна",
            "address": "улица Вавилова 9",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.565464",
            "geometry/coordinates/1": "34.580704",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.580704, 49.565464],
            "type": "Point"
        }
    }, {
        "type": "Feature",
        "properties": {
            "id": "406",
            "name": "ВСТ -  Ярошенко Ольга Владимировна",
            "address": "улица  Небесной Сотни 91",
            "city": "Полтава",
            "region": "Полтавская Область",
            "Index": "-",
            "geometry/coordinates/0": "49.576306",
            "geometry/coordinates/1": "34.584585",
            "congregation": "Восточное",
            "marker-color": "yellow",
        },
        "geometry": {
            "coordinates": [34.584585, 49.576306],
            "type": "Point"
        }
    }

];


var wcp = {
    "type": "FeatureCollection",
    "features": servants
}

// console.log(wcp);
