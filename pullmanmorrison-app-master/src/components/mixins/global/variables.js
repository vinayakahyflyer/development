var barLocations = [
	
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Antigua & Deps",
	"Argentina",
	"Armenia",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda Islands",
	"Bhutan",
	"Bolivia",
	"Bosnia Herzegovina",
	"Botswana",
	"Brazil",
	"British Virgin Islands",
	"Brunei",
	"Bulgaria",
	"Burkina",
	"Burundi",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cape Verde",
	"Cayman Islands",
	"Central African Rep",
	"Chad",
	"Chile",
	"China",
	"Colombia",
	"Comoros",
	"Congo",
	"Congo {Democratic Rep}",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"East Timor",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Ethiopia",
	"Fiji",
	"Finland",
	"France",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Greece",
	"Grenada",
	"Guatemala",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland {Republic}",
	"Israel",
	"Italy",
	"Ivory Coast",
	"Jamaica",
	"Japan",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea North",
	"Korea South",
	"Kosovo",
	"Kuwait",
	"Kyrgyzstan",
	"Laos",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macedonia",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Mauritania",
	"Mauritius",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Morocco",
	"Mozambique",
	"Myanmar, {Burma}",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Poland",
	"Portugal",
	"Qatar",
	"Romania",
	"Russian Federation",
	"Rwanda",
	"St Kitts & Nevis",
	"St Lucia",
	"Saint Vincent & the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome & Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Swaziland",
	"Sweden",
	"Switzerland",
	"Syria",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Togo",
	"Tonga",
	"Trinidad & Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States, California/New York",
	"United States, Others",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Vatican City",
	"Venezuela",
	"Vietnam",
	"Yemen",
	"Zambia",
	"Zimbabwe"

];

var countriesAndCities = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Antigua & Deps",
	"Argentina",
	"Armenia",
	"Australia",
	"Australia, New South Wales",
	"Australia, New South Wales, Sydney",
	"Australia, Queensland",
	"Australia, Queensland, Brisbane",
	"Australia, Southern Australia",
	"Australia, Southern Australia, Adelaide",
	"Australia, Victoria",
	"Australia, Victoria, Melbourne",
	"Australia, Western Australia",
	"Australia, Western Australia, Perth",
	"Australia, Tasmania",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda Islands",
	"Bhutan",
	"Bolivia",
	"Bosnia Herzegovina",
	"Botswana",
	"Brazil",
	"British Virgin Islands",
	"Brunei",
	"Bulgaria",
	"Burkina",
	"Burundi",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cape Verde",
	"Cayman Islands",
	"Central African Rep",
	"Chad",
	"Chile",
	"China",
	"China, Beijing",
	"China, Shanghai",
	"China, Shenzhen",
	"Colombia",
	"Comoros",
	"Congo",
	"Congo {Democratic Rep}",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"East Timor",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Ethiopia",
	"Fiji",
	"Finland",
	"France",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Greece",
	"Grenada",
	"Guatemala",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland {Republic}",
	"Israel",
	"Italy",
	"Ivory Coast",
	"Jamaica",
	"Japan",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea North",
	"Korea South",
	"Kosovo",
	"Kuwait",
	"Kyrgyzstan",
	"Laos",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macedonia",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Mauritania",
	"Mauritius",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Morocco",
	"Mozambique",
	"Myanmar, {Burma}",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Poland",
	"Portugal",
	"Qatar",
	"Romania",
	"Russian Federation",
	"Rwanda",
	"St Kitts & Nevis",
	"St Lucia",
	"Saint Vincent & the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome & Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Swaziland",
	"Sweden",
	"Switzerland",
	"Syria",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Togo",
	"Tonga",
	"Trinidad & Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States",
	"United States, California",
	"United States, New York",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Vatican City",
	"Venezuela",
	"Vietnam",
	"Yemen",
	"Zambia",
	"Zimbabwe"
	
];


const countriesAndCitiesUnformatted = {
   "Andorra": [
      {
         "City": " les Escaldes"
      },
      {
         "City": " Andorra la Vella"
      }
   ],
   "United Arab Emirates": [
      {
         "City": " Umm al Qaywayn"
      },
      {
         "City": " Ras al-Khaimah"
      },
      {
         "City": " Khawr Fakkān"
      },
      {
         "City": " Dubai"
      },
      {
         "City": " Dibba Al-Fujairah"
      },
      {
         "City": " Dibba Al-Hisn"
      },
      {
         "City": " Sharjah"
      },
      {
         "City": " Ar Ruways"
      },
      {
         "City": " Al Fujayrah"
      },
      {
         "City": " Al Ain"
      },
      {
         "City": " Ajman"
      },
      {
         "City": " Adh Dhayd"
      },
      {
         "City": " Abu Dhabi"
      }
   ],
   "Afghanistan": [
      {
         "City": " Zaranj"
      },
      {
         "City": " Taloqan"
      },
      {
         "City": " Shīnḏanḏ"
      },
      {
         "City": " Shibirghān"
      },
      {
         "City": " Shahrak"
      },
      {
         "City": " Sar-e Pul"
      },
      {
         "City": " Sang-e Chārak"
      },
      {
         "City": " Aībak"
      },
      {
         "City": " Rustāq"
      },
      {
         "City": " Qarqīn"
      },
      {
         "City": " Qarāwul"
      },
      {
         "City": " Pul-e Khumrī"
      },
      {
         "City": " Paghmān"
      },
      {
         "City": " Nahrīn"
      },
      {
         "City": " Maymana"
      },
      {
         "City": " Mehtar Lām"
      },
      {
         "City": " Mazār-e Sharīf"
      },
      {
         "City": " Lashkar Gāh"
      },
      {
         "City": " Kushk"
      },
      {
         "City": " Kunduz"
      },
      {
         "City": " Khōst"
      },
      {
         "City": " Khulm"
      },
      {
         "City": " Khāsh"
      },
      {
         "City": " Khanabad"
      },
      {
         "City": " Karukh"
      },
      {
         "City": " Kandahār"
      },
      {
         "City": " Kabul"
      },
      {
         "City": " Jalālābād"
      },
      {
         "City": " Jabal os Saraj"
      },
      {
         "City": " Herāt"
      },
      {
         "City": " Ghormach"
      },
      {
         "City": " Ghazni"
      },
      {
         "City": " Gereshk"
      },
      {
         "City": " Gardēz"
      },
      {
         "City": " Fayzabad"
      },
      {
         "City": " Farah"
      },
      {
         "City": " Kafir Qala"
      },
      {
         "City": " Charikar"
      },
      {
         "City": " Barakī Barak"
      },
      {
         "City": " Bāmyān"
      },
      {
         "City": " Balkh"
      },
      {
         "City": " Baghlān"
      },
      {
         "City": " Ārt Khwājah"
      },
      {
         "City": " Āsmār"
      },
      {
         "City": " Asadābād"
      },
      {
         "City": " Andkhōy"
      },
      {
         "City": " Bāzārak"
      },
      {
         "City": " Markaz-e Woluswalī-ye Āchīn"
      }
   ],
   "Antigua and Barbuda": [
      {
         "City": " Saint John’s"
      }
   ],
   "Anguilla": [
      {
         "City": " The Valley"
      }
   ],
   "Albania": [
      {
         "City": " Sarandë"
      },
      {
         "City": " Kukës"
      },
      {
         "City": " Korçë"
      },
      {
         "City": " Gjirokastër"
      },
      {
         "City": " Elbasan"
      },
      {
         "City": " Burrel"
      },
      {
         "City": " Vlorë"
      },
      {
         "City": " Tirana"
      },
      {
         "City": " Shkodër"
      },
      {
         "City": " Patos Fshat"
      },
      {
         "City": " Lushnjë"
      },
      {
         "City": " Lezhë"
      },
      {
         "City": " Laç"
      },
      {
         "City": " Kuçovë"
      },
      {
         "City": " Krujë"
      },
      {
         "City": " Kavajë"
      },
      {
         "City": " Fier-Çifçi"
      },
      {
         "City": " Fier"
      },
      {
         "City": " Durrës"
      },
      {
         "City": " Berat"
      }
   ],
   "Armenia": [
      {
         "City": " Kapan"
      },
      {
         "City": " Goris"
      },
      {
         "City": " Hats’avan"
      },
      {
         "City": " Artashat"
      },
      {
         "City": " Ararat"
      },
      {
         "City": " Yerevan"
      },
      {
         "City": " Ejmiatsin"
      },
      {
         "City": " Spitak"
      },
      {
         "City": " Sevan"
      },
      {
         "City": " Masis"
      },
      {
         "City": " Vanadzor"
      },
      {
         "City": " Gavarr"
      },
      {
         "City": " Hrazdan"
      },
      {
         "City": " Armavir"
      },
      {
         "City": " Gyumri"
      },
      {
         "City": " Ashtarak"
      },
      {
         "City": " Abovyan"
      }
   ],
   "Angola": [
      {
         "City": " Saurimo"
      },
      {
         "City": " Lucapa"
      },
      {
         "City": " Luau"
      },
      {
         "City": " Uíge"
      },
      {
         "City": " Soio"
      },
      {
         "City": " Nzeto"
      },
      {
         "City": " N’dalatando"
      },
      {
         "City": " Mbanza Congo"
      },
      {
         "City": " Malanje"
      },
      {
         "City": " Luanda"
      },
      {
         "City": " Caxito"
      },
      {
         "City": " Cabinda"
      },
      {
         "City": " Sumbe"
      },
      {
         "City": " Namibe"
      },
      {
         "City": " Menongue"
      },
      {
         "City": " Luena"
      },
      {
         "City": " Lubango"
      },
      {
         "City": " Longonjo"
      },
      {
         "City": " Lobito"
      },
      {
         "City": " Cuito"
      },
      {
         "City": " Huambo"
      },
      {
         "City": " Catumbela"
      },
      {
         "City": " Catabola"
      },
      {
         "City": " Camacupa"
      },
      {
         "City": " Caluquembe"
      },
      {
         "City": " Caála"
      },
      {
         "City": " Benguela"
      }
   ],
   "Argentina": [
      {
         "City": " Zárate"
      },
      {
         "City": " Villa Ocampo"
      },
      {
         "City": " Villa Lugano"
      },
      {
         "City": " Villaguay"
      },
      {
         "City": " Villa Gesell"
      },
      {
         "City": " Tigre"
      },
      {
         "City": " Tandil"
      },
      {
         "City": " San Vicente"
      },
      {
         "City": " Santo Tomé"
      },
      {
         "City": " Santa Elena"
      },
      {
         "City": " San Pedro"
      },
      {
         "City": " San Luis del Palmar"
      },
      {
         "City": " San Lorenzo"
      },
      {
         "City": " San Javier"
      },
      {
         "City": " San Isidro"
      },
      {
         "City": " Saladas"
      },
      {
         "City": " Retiro"
      },
      {
         "City": " Resistencia"
      },
      {
         "City": " Reconquista"
      },
      {
         "City": " Quilmes"
      },
      {
         "City": " Puerto Rico"
      },
      {
         "City": " Puerto Iguazú"
      },
      {
         "City": " Puerto Esperanza"
      },
      {
         "City": " Puerto Eldorado"
      },
      {
         "City": " Posadas"
      },
      {
         "City": " Pontevedra"
      },
      {
         "City": " Pirané"
      },
      {
         "City": " Paso de los Libres"
      },
      {
         "City": " Oberá"
      },
      {
         "City": " Necochea"
      },
      {
         "City": " Morón"
      },
      {
         "City": " Monte Caseros"
      },
      {
         "City": " Montecarlo"
      },
      {
         "City": " Mercedes"
      },
      {
         "City": " Mercedes"
      },
      {
         "City": " Mar del Plata"
      },
      {
         "City": " Luján"
      },
      {
         "City": " La Plata"
      },
      {
         "City": " La Paz"
      },
      {
         "City": " Jardín América"
      },
      {
         "City": " Gualeguaychú"
      },
      {
         "City": " Gualeguay"
      },
      {
         "City": " Goya"
      },
      {
         "City": " Gobernador Ingeniero Valentín Virasoro"
      },
      {
         "City": " General José de San Martín"
      },
      {
         "City": " Garupá"
      },
      {
         "City": " Formosa"
      },
      {
         "City": " Fontana"
      },
      {
         "City": " Federal"
      },
      {
         "City": " Esquina"
      },
      {
         "City": " El Soberbio"
      },
      {
         "City": " Dolores"
      },
      {
         "City": " Curuzú Cuatiá"
      },
      {
         "City": " Corrientes"
      },
      {
         "City": " Concordia"
      },
      {
         "City": " Concepción del Uruguay"
      },
      {
         "City": " Colegiales"
      },
      {
         "City": " Chajarí"
      },
      {
         "City": " Campana"
      },
      {
         "City": " Buenos Aires"
      },
      {
         "City": " Barranqueras"
      },
      {
         "City": " Azul"
      },
      {
         "City": " Avellaneda"
      },
      {
         "City": " Aristóbulo del Valle"
      },
      {
         "City": " Zapala"
      },
      {
         "City": " Yerba Buena"
      },
      {
         "City": " Villa Regina"
      },
      {
         "City": " Villa Paula de Sarmiento"
      },
      {
         "City": " Villa Nueva"
      },
      {
         "City": " Villa María"
      },
      {
         "City": " Villa Dolores"
      },
      {
         "City": " Villa Constitución"
      },
      {
         "City": " Villa Carlos Paz"
      },
      {
         "City": " Villa Ángela"
      },
      {
         "City": " Villa Allende"
      },
      {
         "City": " Viedma"
      },
      {
         "City": " Victoria"
      },
      {
         "City": " Vera"
      },
      {
         "City": " Venado Tuerto"
      },
      {
         "City": " Veinticinco de Mayo"
      },
      {
         "City": " Ushuaia"
      },
      {
         "City": " Unquillo"
      },
      {
         "City": " Tres Isletas"
      },
      {
         "City": " Tres Arroyos"
      },
      {
         "City": " Trelew"
      },
      {
         "City": " Termas de Río Hondo"
      },
      {
         "City": " Tartagal"
      },
      {
         "City": " Tafí Viejo"
      },
      {
         "City": " Sunchales"
      },
      {
         "City": " Santo Tomé"
      },
      {
         "City": " Santiago del Estero"
      },
      {
         "City": " Santa Rosa"
      },
      {
         "City": " Santa Lucía"
      },
      {
         "City": " Santa Fe de la Vera Cruz"
      },
      {
         "City": " San Salvador de Jujuy"
      },
      {
         "City": " San Ramón de la Nueva Orán"
      },
      {
         "City": " San Rafael"
      },
      {
         "City": " San Pedro"
      },
      {
         "City": " San Nicolás de los Arroyos"
      },
      {
         "City": " San Miguel de Tucumán"
      },
      {
         "City": " San Martín de los Andes"
      },
      {
         "City": " San Martín"
      },
      {
         "City": " San Luis"
      },
      {
         "City": " San Justo"
      },
      {
         "City": " San Juan"
      },
      {
         "City": " San José de Jáchal"
      },
      {
         "City": " San Jorge"
      },
      {
         "City": " San Francisco"
      },
      {
         "City": " San Fernando del Valle de Catamarca"
      },
      {
         "City": " San Antonio Oeste"
      },
      {
         "City": " Salta"
      },
      {
         "City": " Rufino"
      },
      {
         "City": " Rosario"
      },
      {
         "City": " Río Tercero"
      },
      {
         "City": " Río Segundo"
      },
      {
         "City": " Río Gallegos"
      },
      {
         "City": " Río Cuarto"
      },
      {
         "City": " Río Ceballos"
      },
      {
         "City": " Rawson"
      },
      {
         "City": " Rafaela"
      },
      {
         "City": " Quitilipi"
      },
      {
         "City": " Punta Alta"
      },
      {
         "City": " Puerto Madryn"
      },
      {
         "City": " Presidencia Roque Sáenz Peña"
      },
      {
         "City": " Pocito"
      },
      {
         "City": " Plottier"
      },
      {
         "City": " Pergamino"
      },
      {
         "City": " Pérez"
      },
      {
         "City": " Paraná"
      },
      {
         "City": " Palpalá"
      },
      {
         "City": " Olavarría"
      },
      {
         "City": " Nueve de Julio"
      },
      {
         "City": " Neuquén"
      },
      {
         "City": " Morteros"
      },
      {
         "City": " Monteros"
      },
      {
         "City": " Mendoza"
      },
      {
         "City": " Marcos Juárez"
      },
      {
         "City": " Machagai"
      },
      {
         "City": " Lincoln"
      },
      {
         "City": " Libertador General San Martín"
      },
      {
         "City": " Las Breñas"
      },
      {
         "City": " La Rioja"
      },
      {
         "City": " La Falda"
      },
      {
         "City": " La Calera"
      },
      {
         "City": " Laboulaye"
      },
      {
         "City": " Junín"
      },
      {
         "City": " Joaquín V. González"
      },
      {
         "City": " Jesús María"
      },
      {
         "City": " Granadero Baigorria"
      },
      {
         "City": " Gobernador Gálvez"
      },
      {
         "City": " General Roca"
      },
      {
         "City": " General Pinedo"
      },
      {
         "City": " General Pico"
      },
      {
         "City": " General Enrique Mosconi"
      },
      {
         "City": " Gálvez"
      },
      {
         "City": " Firmat"
      },
      {
         "City": " Famaillá"
      },
      {
         "City": " Esquel"
      },
      {
         "City": " Esperanza"
      },
      {
         "City": " Embarcación"
      },
      {
         "City": " Embalse"
      },
      {
         "City": " El Bolsón"
      },
      {
         "City": " Diamante"
      },
      {
         "City": " Deán Funes"
      },
      {
         "City": " Cutral-Có"
      },
      {
         "City": " Cruz del Eje"
      },
      {
         "City": " Crespo"
      },
      {
         "City": " Cosquín"
      },
      {
         "City": " Coronel Suárez"
      },
      {
         "City": " Coronda"
      },
      {
         "City": " Córdoba"
      },
      {
         "City": " Comodoro Rivadavia"
      },
      {
         "City": " Cipolletti"
      },
      {
         "City": " Cinco Saltos"
      },
      {
         "City": " Chivilcoy"
      },
      {
         "City": " Chimbas"
      },
      {
         "City": " Chilecito"
      },
      {
         "City": " Charata"
      },
      {
         "City": " Chacabuco"
      },
      {
         "City": " Centenario"
      },
      {
         "City": " Caucete"
      },
      {
         "City": " Catriel"
      },
      {
         "City": " Castelli"
      },
      {
         "City": " Casilda"
      },
      {
         "City": " Carcarañá"
      },
      {
         "City": " Capitán Bermúdez"
      },
      {
         "City": " Cañada de Gómez"
      },
      {
         "City": " Caleta Olivia"
      },
      {
         "City": " Bell Ville"
      },
      {
         "City": " Bella Vista"
      },
      {
         "City": " Bahía Blanca"
      },
      {
         "City": " Arroyo Seco"
      },
      {
         "City": " Arroyito"
      },
      {
         "City": " Añatuya"
      },
      {
         "City": " Alta Gracia"
      },
      {
         "City": " Allen"
      },
      {
         "City": " Alderetes"
      },
      {
         "City": " Albardón"
      },
      {
         "City": " Aguilares"
      },
      {
         "City": " Villa Santa Rita"
      },
      {
         "City": " Villa Mercedes"
      },
      {
         "City": " San Carlos de Bariloche"
      },
      {
         "City": " Adrogué"
      }
   ],
   "American Samoa": [
      {
         "City": " Pago Pago"
      }
   ],
   "Austria": [
      {
         "City": " Wolfsberg"
      },
      {
         "City": " Wiener Neustadt"
      },
      {
         "City": " Vienna"
      },
      {
         "City": " Wels"
      },
      {
         "City": " Weinzierl bei Krems"
      },
      {
         "City": " Villach"
      },
      {
         "City": " Traun"
      },
      {
         "City": " Traiskirchen"
      },
      {
         "City": " Ternitz"
      },
      {
         "City": " Steyr"
      },
      {
         "City": " Spittal an der Drau"
      },
      {
         "City": " Schwechat"
      },
      {
         "City": " Sankt Pölten"
      },
      {
         "City": " Salzburg"
      },
      {
         "City": " Saalfelden am Steinernen Meer"
      },
      {
         "City": " Mödling"
      },
      {
         "City": " Lustenau"
      },
      {
         "City": " Linz"
      },
      {
         "City": " Leonding"
      },
      {
         "City": " Leoben"
      },
      {
         "City": " Kufstein"
      },
      {
         "City": " Krems an der Donau"
      },
      {
         "City": " Klosterneuburg"
      },
      {
         "City": " Klagenfurt am Wörthersee"
      },
      {
         "City": " Kapfenberg"
      },
      {
         "City": " Innsbruck"
      },
      {
         "City": " Hallein"
      },
      {
         "City": " Graz"
      },
      {
         "City": " Feldkirch"
      },
      {
         "City": " Dornbirn"
      },
      {
         "City": " Bregenz"
      },
      {
         "City": " Braunau am Inn"
      },
      {
         "City": " Baden"
      },
      {
         "City": " Amstetten"
      },
      {
         "City": " Ansfelden"
      }
   ],
   "Australia": [
      {
         "City": " Whyalla"
      },
      {
         "City": " Rockingham"
      },
      {
         "City": " Prospect"
      },
      {
         "City": " Port Hedland"
      },
      {
         "City": " Perth"
      },
      {
         "City": " Murray Bridge"
      },
      {
         "City": " Mount Isa"
      },
      {
         "City": " Morphett Vale"
      },
      {
         "City": " Mandurah"
      },
      {
         "City": " Kwinana"
      },
      {
         "City": " Kalgoorlie"
      },
      {
         "City": " Gosnells"
      },
      {
         "City": " Geraldton"
      },
      {
         "City": " Gawler"
      },
      {
         "City": " Fremantle"
      },
      {
         "City": " Darwin"
      },
      {
         "City": " Busselton"
      },
      {
         "City": " Bunbury"
      },
      {
         "City": " Armadale"
      },
      {
         "City": " Alice Springs"
      },
      {
         "City": " Albany"
      },
      {
         "City": " Adelaide"
      },
      {
         "City": " Woodridge"
      },
      {
         "City": " Wodonga"
      },
      {
         "City": " Werribee"
      },
      {
         "City": " Warrnambool"
      },
      {
         "City": " Wantirna South"
      },
      {
         "City": " Wangaratta"
      },
      {
         "City": " Wagga Wagga"
      },
      {
         "City": " Traralgon"
      },
      {
         "City": " Townsville"
      },
      {
         "City": " Toowoomba"
      },
      {
         "City": " Thornbury"
      },
      {
         "City": " Thomastown"
      },
      {
         "City": " Tarneit"
      },
      {
         "City": " Taree"
      },
      {
         "City": " Tamworth"
      },
      {
         "City": " Sydney"
      },
      {
         "City": " Surfers Paradise"
      },
      {
         "City": " Sunnybank"
      },
      {
         "City": " Sunbury"
      },
      {
         "City": " Port Stephens"
      },
      {
         "City": " Springvale"
      },
      {
         "City": " Southport"
      },
      {
         "City": " South Grafton"
      },
      {
         "City": " Shepparton"
      },
      {
         "City": " Seaford"
      },
      {
         "City": " Saint Kilda"
      },
      {
         "City": " Saint Albans"
      },
      {
         "City": " Rowville"
      },
      {
         "City": " Rockhampton"
      },
      {
         "City": " Richmond"
      },
      {
         "City": " Reservoir"
      },
      {
         "City": " Queanbeyan"
      },
      {
         "City": " Quakers Hill"
      },
      {
         "City": " Preston"
      },
      {
         "City": " Port Macquarie"
      },
      {
         "City": " Point Cook"
      },
      {
         "City": " Pakenham South"
      },
      {
         "City": " Orange"
      },
      {
         "City": " Nowra"
      },
      {
         "City": " Northcote"
      },
      {
         "City": " Noble Park"
      },
      {
         "City": " Newcastle"
      },
      {
         "City": " Nerang"
      },
      {
         "City": " Narre Warren"
      },
      {
         "City": " Narangba"
      },
      {
         "City": " Mulgrave"
      },
      {
         "City": " Mount Martha"
      },
      {
         "City": " Mount Gambier"
      },
      {
         "City": " Mount Eliza"
      },
      {
         "City": " Mosman"
      },
      {
         "City": " Mornington"
      },
      {
         "City": " Morayfield"
      },
      {
         "City": " Moe"
      },
      {
         "City": " Mill Park"
      },
      {
         "City": " Mildura"
      },
      {
         "City": " Melton"
      },
      {
         "City": " Melbourne"
      },
      {
         "City": " Maryborough"
      },
      {
         "City": " Marrickville"
      },
      {
         "City": " Maroubra"
      },
      {
         "City": " Maitland"
      },
      {
         "City": " Mackay"
      },
      {
         "City": " Liverpool"
      },
      {
         "City": " Lismore"
      },
      {
         "City": " Lilydale"
      },
      {
         "City": " Launceston"
      },
      {
         "City": " Lara"
      },
      {
         "City": " Langwarrin"
      },
      {
         "City": " Lalor"
      },
      {
         "City": " Keysborough"
      },
      {
         "City": " Kew"
      },
      {
         "City": " Katoomba"
      },
      {
         "City": " Hornsby"
      },
      {
         "City": " Hobart"
      },
      {
         "City": " Hawthorn South"
      },
      {
         "City": " Hampton Park"
      },
      {
         "City": " Griffith"
      },
      {
         "City": " Greensborough"
      },
      {
         "City": " Granville"
      },
      {
         "City": " Goulburn"
      },
      {
         "City": " Gold Coast"
      },
      {
         "City": " Glenroy"
      },
      {
         "City": " Glenferrie"
      },
      {
         "City": " Gladstone"
      },
      {
         "City": " Geelong"
      },
      {
         "City": " Frankston East"
      },
      {
         "City": " Frankston"
      },
      {
         "City": " Forster"
      },
      {
         "City": " Essendon"
      },
      {
         "City": " Epping"
      },
      {
         "City": " Epping"
      },
      {
         "City": " Engadine"
      },
      {
         "City": " Eltham"
      },
      {
         "City": " Echuca"
      },
      {
         "City": " Earlwood"
      },
      {
         "City": " Dubbo"
      },
      {
         "City": " Doncaster East"
      },
      {
         "City": " Doncaster"
      },
      {
         "City": " Devonport"
      },
      {
         "City": " Deer Park"
      },
      {
         "City": " Deception Bay"
      },
      {
         "City": " Dandenong"
      },
      {
         "City": " Cronulla"
      },
      {
         "City": " Cranbourne"
      },
      {
         "City": " Cranbourne"
      },
      {
         "City": " Craigieburn"
      },
      {
         "City": " Coffs Harbour"
      },
      {
         "City": " Coburg"
      },
      {
         "City": " Clayton"
      },
      {
         "City": " Wollongong"
      },
      {
         "City": " Cessnock"
      },
      {
         "City": " Castle Hill"
      },
      {
         "City": " Carrum Downs"
      },
      {
         "City": " Carnegie"
      },
      {
         "City": " Carlingford"
      },
      {
         "City": " Caringbah"
      },
      {
         "City": " Canberra"
      },
      {
         "City": " Camberwell"
      },
      {
         "City": " Caloundra"
      },
      {
         "City": " Cairns"
      },
      {
         "City": " Caboolture"
      },
      {
         "City": " Burnie"
      },
      {
         "City": " Bundaberg"
      },
      {
         "City": " Buderim"
      },
      {
         "City": " Brunswick"
      },
      {
         "City": " Broken Hill"
      },
      {
         "City": " Brisbane"
      },
      {
         "City": " Boronia"
      },
      {
         "City": " Blacktown"
      },
      {
         "City": " Berwick"
      },
      {
         "City": " Bendigo"
      },
      {
         "City": " Baulkham Hills"
      },
      {
         "City": " Bathurst"
      },
      {
         "City": " Banora Point"
      },
      {
         "City": " Bankstown"
      },
      {
         "City": " Ballarat"
      },
      {
         "City": " Auburn"
      },
      {
         "City": " Ashfield"
      },
      {
         "City": " Armidale"
      },
      {
         "City": " Albury"
      },
      {
         "City": " South Brisbane"
      },
      {
         "City": " Cheltenham"
      },
      {
         "City": " Randwick"
      },
      {
         "City": " Dee Why"
      },
      {
         "City": " Umina"
      },
      {
         "City": " Palmerston"
      },
      {
         "City": " Bracken Ridge"
      },
      {
         "City": " North Ryde"
      },
      {
         "City": " Hoppers Crossing"
      },
      {
         "City": " Logan City"
      },
      {
         "City": " Carindale"
      },
      {
         "City": " Paramatta"
      },
      {
         "City": " Ferntree Gully"
      },
      {
         "City": " City of Parramatta"
      },
      {
         "City": " Adelaide Hills"
      },
      {
         "City": " Canning Vale"
      },
      {
         "City": " Glenmore Park"
      },
      {
         "City": " Glen Iris"
      },
      {
         "City": " Balwyn North"
      },
      {
         "City": " Carnegie"
      },
      {
         "City": " Malvern East"
      },
      {
         "City": " Brighton East"
      },
      {
         "City": " Booval"
      },
      {
         "City": " St Albans"
      },
      {
         "City": " Endeavour Hills"
      },
      {
         "City": " Clayton"
      },
      {
         "City": " Taylors Lakes"
      },
      {
         "City": " Roxburgh Park"
      },
      {
         "City": " Wyndham Vale"
      },
      {
         "City": " Willetton"
      },
      {
         "City": " Thornbury"
      },
      {
         "City": " Thornlie"
      },
      {
         "City": " Hillside"
      },
      {
         "City": " Bundoora"
      },
      {
         "City": " Forest Lake"
      },
      {
         "City": " Sunnybank Hills"
      },
      {
         "City": " Narre Warren South"
      },
      {
         "City": " Dandenong North"
      },
      {
         "City": " Frankston South"
      },
      {
         "City": " Sunshine West"
      },
      {
         "City": " Altona Meadows"
      },
      {
         "City": " West Pennant"
      }
   ],
   "Aruba": [
      {
         "City": " Oranjestad"
      },
      {
         "City": " Babijn"
      },
      {
         "City": " Angochi"
      }
   ],
   "Aland Islands": [
      {
         "City": " Mariehamn"
      }
   ],
   "Azerbaijan": [
      {
         "City": " Xankandi"
      },
      {
         "City": " Əhmədbəyli"
      },
      {
         "City": " Shushi"
      },
      {
         "City": " Salyan"
      },
      {
         "City": " Saatlı"
      },
      {
         "City": " Neftçala"
      },
      {
         "City": " Nakhchivan"
      },
      {
         "City": " Lankaran"
      },
      {
         "City": " Imishli"
      },
      {
         "City": " Fizuli"
      },
      {
         "City": " Dzhalilabad"
      },
      {
         "City": " Pushkino"
      },
      {
         "City": " Beylagan"
      },
      {
         "City": " Astara"
      },
      {
         "City": " Şirvan"
      },
      {
         "City": " Ağdam"
      },
      {
         "City": " Zaqatala"
      },
      {
         "City": " Zabrat"
      },
      {
         "City": " Yevlakh"
      },
      {
         "City": " Yelenendorf"
      },
      {
         "City": " Xaçmaz"
      },
      {
         "City": " Ujar"
      },
      {
         "City": " Terter"
      },
      {
         "City": " Sumqayıt"
      },
      {
         "City": " Qaraçuxur"
      },
      {
         "City": " Shamkhor"
      },
      {
         "City": " Shamakhi"
      },
      {
         "City": " Sheki"
      },
      {
         "City": " Sabunçu"
      },
      {
         "City": " Sabirabad"
      },
      {
         "City": " Qusar"
      },
      {
         "City": " Quba"
      },
      {
         "City": " Hacıqabul"
      },
      {
         "City": " Qazax"
      },
      {
         "City": " Hacı Zeynalabdin"
      },
      {
         "City": " Mingelchaur"
      },
      {
         "City": " Maştağa"
      },
      {
         "City": " Mardakan"
      },
      {
         "City": " Lökbatan"
      },
      {
         "City": " Kyurdarmir"
      },
      {
         "City": " Khirdalan"
      },
      {
         "City": " Yeni Suraxanı"
      },
      {
         "City": " Geoktschai"
      },
      {
         "City": " Hövsan"
      },
      {
         "City": " Ganja"
      },
      {
         "City": " Divichibazar"
      },
      {
         "City": " Buzovna"
      },
      {
         "City": " Biny Selo"
      },
      {
         "City": " Barda"
      },
      {
         "City": " Bilajari"
      },
      {
         "City": " Baku"
      },
      {
         "City": " Amirdzhan"
      },
      {
         "City": " Aghsu"
      },
      {
         "City": " Ağdaş"
      },
      {
         "City": " Agdzhabedy"
      },
      {
         "City": " Bakıxanov"
      }
   ],
   "Bosnia and Herzegovina": [
      {
         "City": " Zenica"
      },
      {
         "City": " Visoko"
      },
      {
         "City": " Velika Kladuša"
      },
      {
         "City": " Tuzla"
      },
      {
         "City": " Trebinje"
      },
      {
         "City": " Travnik"
      },
      {
         "City": " Sarajevo"
      },
      {
         "City": " Prijedor"
      },
      {
         "City": " Mostar"
      },
      {
         "City": " Gradačac"
      },
      {
         "City": " Gračanica"
      },
      {
         "City": " Goražde"
      },
      {
         "City": " Doboj"
      },
      {
         "City": " Cazin"
      },
      {
         "City": " Bugojno"
      },
      {
         "City": " Brčko"
      },
      {
         "City": " Bosanska Krupa"
      },
      {
         "City": " Bijeljina"
      },
      {
         "City": " Bihać"
      },
      {
         "City": " Banja Luka"
      },
      {
         "City": " Konjic"
      }
   ],
   "Barbados": [
      {
         "City": " Bridgetown"
      }
   ],
   "Bangladesh": [
      {
         "City": " Thākurgaon"
      },
      {
         "City": " Teknāf"
      },
      {
         "City": " Tungi"
      },
      {
         "City": " Sylhet"
      },
      {
         "City": " Dohār"
      },
      {
         "City": " Jamālpur"
      },
      {
         "City": " Shibganj"
      },
      {
         "City": " Sātkhira"
      },
      {
         "City": " Sirājganj"
      },
      {
         "City": " Netrakona"
      },
      {
         "City": " Narsingdi"
      },
      {
         "City": " Sandwīp"
      },
      {
         "City": " Shāhzādpur"
      },
      {
         "City": " Rāmganj"
      },
      {
         "City": " Rājshāhi"
      },
      {
         "City": " Pirojpur"
      },
      {
         "City": " Panchagarh"
      },
      {
         "City": " Patiya"
      },
      {
         "City": " Parbatipur"
      },
      {
         "City": " Nārāyanganj"
      },
      {
         "City": " Nālchiti"
      },
      {
         "City": " Nāgarpur"
      },
      {
         "City": " Nageswari"
      },
      {
         "City": " Mymensingh"
      },
      {
         "City": " Muktāgācha"
      },
      {
         "City": " Mirzāpur"
      },
      {
         "City": " Maulavi Bāzār"
      },
      {
         "City": " Morrelgonj"
      },
      {
         "City": " Mehendiganj"
      },
      {
         "City": " Mathba"
      },
      {
         "City": " Lalmanirhat"
      },
      {
         "City": " Lākshām"
      },
      {
         "City": " Comilla"
      },
      {
         "City": " Rangpur"
      },
      {
         "City": " Kushtia"
      },
      {
         "City": " Kālīganj"
      },
      {
         "City": " Jhingergācha"
      },
      {
         "City": " Joypur Hāt"
      },
      {
         "City": " Ishurdi"
      },
      {
         "City": " Habiganj"
      },
      {
         "City": " Gaurnadi"
      },
      {
         "City": " Gafargaon"
      },
      {
         "City": " Feni"
      },
      {
         "City": " Rāipur"
      },
      {
         "City": " Sarankhola"
      },
      {
         "City": " Dhaka"
      },
      {
         "City": " Chilmāri"
      },
      {
         "City": " Chhāgalnāiya"
      },
      {
         "City": " Lālmohan"
      },
      {
         "City": " Khagrachhari"
      },
      {
         "City": " Chhātak"
      },
      {
         "City": " Bhātpāra Abhaynagar"
      },
      {
         "City": " Bherāmāra"
      },
      {
         "City": " Bhairab Bāzār"
      },
      {
         "City": " Bāndarban"
      },
      {
         "City": " Kālia"
      },
      {
         "City": " Baniachang"
      },
      {
         "City": " Bājitpur"
      },
      {
         "City": " Badarganj"
      },
      {
         "City": " Narail"
      },
      {
         "City": " Tungipāra"
      },
      {
         "City": " Sarishābāri"
      },
      {
         "City": " Sakhipur"
      },
      {
         "City": " Raojān"
      },
      {
         "City": " Phultala"
      },
      {
         "City": " Pālang"
      },
      {
         "City": " Pār Naogaon"
      },
      {
         "City": " Nabīnagar"
      },
      {
         "City": " Lakshmīpur"
      },
      {
         "City": " Kesabpur"
      },
      {
         "City": " Hājīganj"
      },
      {
         "City": " Farīdpur"
      },
      {
         "City": " Dinājpur"
      },
      {
         "City": " Uttar Char Fasson"
      },
      {
         "City": " Chittagong"
      },
      {
         "City": " Char Bhadrāsan"
      },
      {
         "City": " Bera"
      },
      {
         "City": " Burhānuddin"
      },
      {
         "City": " Sātkania"
      },
      {
         "City": " Cox’s Bāzār"
      },
      {
         "City": " Khulna"
      },
      {
         "City": " Bhola"
      },
      {
         "City": " Barisāl"
      },
      {
         "City": " Jessore"
      },
      {
         "City": " Pābna"
      },
      {
         "City": " Tāngāil"
      },
      {
         "City": " Bogra"
      },
      {
         "City": " Pīrgaaj"
      },
      {
         "City": " Nawābganj"
      },
      {
         "City": " Mādārīpur"
      },
      {
         "City": " Sherpur"
      },
      {
         "City": " Kishorganj"
      },
      {
         "City": " Manikchari"
      },
      {
         "City": " Bhāndāria"
      },
      {
         "City": " Fatikchari"
      },
      {
         "City": " Saidpur"
      },
      {
         "City": " Azimpur"
      },
      {
         "City": " Paltan"
      }
   ],
   "Belgium": [
      {
         "City": " Zwijndrecht"
      },
      {
         "City": " Zwevegem"
      },
      {
         "City": " Zottegem"
      },
      {
         "City": " Zonhoven"
      },
      {
         "City": " Zoersel"
      },
      {
         "City": " Zemst"
      },
      {
         "City": " Zele"
      },
      {
         "City": " Zedelgem"
      },
      {
         "City": " Zaventem"
      },
      {
         "City": " Wuustwezel"
      },
      {
         "City": " Willebroek"
      },
      {
         "City": " Wevelgem"
      },
      {
         "City": " Wetteren"
      },
      {
         "City": " Westerlo"
      },
      {
         "City": " Wervik"
      },
      {
         "City": " Wavre"
      },
      {
         "City": " Waterloo"
      },
      {
         "City": " Waregem"
      },
      {
         "City": " Walcourt"
      },
      {
         "City": " Visé"
      },
      {
         "City": " Vilvoorde"
      },
      {
         "City": " Verviers"
      },
      {
         "City": " Turnhout"
      },
      {
         "City": " Tubize"
      },
      {
         "City": " Tournai"
      },
      {
         "City": " Torhout"
      },
      {
         "City": " Tongeren"
      },
      {
         "City": " Tienen"
      },
      {
         "City": " Tielt"
      },
      {
         "City": " Tessenderlo"
      },
      {
         "City": " Tervuren"
      },
      {
         "City": " Temse"
      },
      {
         "City": " Stekene"
      },
      {
         "City": " Stabroek"
      },
      {
         "City": " Soumagne"
      },
      {
         "City": " Soignies"
      },
      {
         "City": " Sint-Truiden"
      },
      {
         "City": " Sint-Pieters-Leeuw"
      },
      {
         "City": " Sint-Niklaas"
      },
      {
         "City": " Sint-Kruis"
      },
      {
         "City": " Sint-Katelijne-Waver"
      },
      {
         "City": " Sint-Gillis-Waas"
      },
      {
         "City": " Sint-Genesius-Rode"
      },
      {
         "City": " Seraing"
      },
      {
         "City": " Schoten"
      },
      {
         "City": " Schilde"
      },
      {
         "City": " Saint-Nicolas"
      },
      {
         "City": " Saint-Ghislain"
      },
      {
         "City": " Rotselaar"
      },
      {
         "City": " Ronse"
      },
      {
         "City": " Roeselare"
      },
      {
         "City": " Rixensart"
      },
      {
         "City": " Riemst"
      },
      {
         "City": " Ranst"
      },
      {
         "City": " Quaregnon"
      },
      {
         "City": " Puurs"
      },
      {
         "City": " Putte"
      },
      {
         "City": " Poperinge"
      },
      {
         "City": " Pont-à-Celles"
      },
      {
         "City": " Péruwelz"
      },
      {
         "City": " Peer"
      },
      {
         "City": " Overijse"
      },
      {
         "City": " Oupeye"
      },
      {
         "City": " Oudenaarde"
      },
      {
         "City": " Oostkamp"
      },
      {
         "City": " Ostend"
      },
      {
         "City": " Nivelles"
      },
      {
         "City": " Ninove"
      },
      {
         "City": " Nijlen"
      },
      {
         "City": " Neerpelt"
      },
      {
         "City": " Namur"
      },
      {
         "City": " Mouscron"
      },
      {
         "City": " Mortsel"
      },
      {
         "City": " Morlanwelz-Mariemont"
      },
      {
         "City": " Mons"
      },
      {
         "City": " Mol"
      },
      {
         "City": " Middelkerke"
      },
      {
         "City": " Merelbeke"
      },
      {
         "City": " Menen"
      },
      {
         "City": " Meise"
      },
      {
         "City": " Mechelen"
      },
      {
         "City": " Marche-en-Famenne"
      },
      {
         "City": " Manage"
      },
      {
         "City": " Maldegem"
      },
      {
         "City": " Maasmechelen"
      },
      {
         "City": " Maaseik"
      },
      {
         "City": " Louvain-la-Neuve"
      },
      {
         "City": " Londerzeel"
      },
      {
         "City": " Lommel"
      },
      {
         "City": " Lokeren"
      },
      {
         "City": " Lochristi"
      },
      {
         "City": " Lille"
      },
      {
         "City": " Lier"
      },
      {
         "City": " Liège"
      },
      {
         "City": " Leuven"
      },
      {
         "City": " Lessines"
      },
      {
         "City": " Lede"
      },
      {
         "City": " Lebbeke"
      },
      {
         "City": " Lanaken"
      },
      {
         "City": " La Louvière"
      },
      {
         "City": " Kortrijk"
      },
      {
         "City": " Kortenberg"
      },
      {
         "City": " Kontich"
      },
      {
         "City": " Koksijde"
      },
      {
         "City": " Knokke-Heist"
      },
      {
         "City": " Kasterlee"
      },
      {
         "City": " Kapellen"
      },
      {
         "City": " Kalmthout"
      },
      {
         "City": " Izegem"
      },
      {
         "City": " Ieper"
      },
      {
         "City": " Huy"
      },
      {
         "City": " Houthalen"
      },
      {
         "City": " Hoogstraten"
      },
      {
         "City": " Hoboken"
      },
      {
         "City": " Heusden"
      },
      {
         "City": " Herzele"
      },
      {
         "City": " Herve"
      },
      {
         "City": " Herstal"
      },
      {
         "City": " Herentals"
      },
      {
         "City": " Herent"
      },
      {
         "City": " Helchteren"
      },
      {
         "City": " Heist-op-den-Berg"
      },
      {
         "City": " Hasselt"
      },
      {
         "City": " Harelbeke"
      },
      {
         "City": " Hamme"
      },
      {
         "City": " Halle"
      },
      {
         "City": " Haaltert"
      },
      {
         "City": " Grimbergen"
      },
      {
         "City": " Geraardsbergen"
      },
      {
         "City": " Gent"
      },
      {
         "City": " Genk"
      },
      {
         "City": " Gembloux"
      },
      {
         "City": " Geel"
      },
      {
         "City": " Frameries"
      },
      {
         "City": " Fleurus"
      },
      {
         "City": " Fléron"
      },
      {
         "City": " Flémalle-Haute"
      },
      {
         "City": " Evergem"
      },
      {
         "City": " Eupen"
      },
      {
         "City": " Essen"
      },
      {
         "City": " Eeklo"
      },
      {
         "City": " Edegem"
      },
      {
         "City": " Duffel"
      },
      {
         "City": " Dour"
      },
      {
         "City": " Dilbeek"
      },
      {
         "City": " Diksmuide"
      },
      {
         "City": " Diest"
      },
      {
         "City": " Diepenbeek"
      },
      {
         "City": " Destelbergen"
      },
      {
         "City": " Dendermonde"
      },
      {
         "City": " Denderleeuw"
      },
      {
         "City": " Deinze"
      },
      {
         "City": " Courcelles"
      },
      {
         "City": " Colfontaine"
      },
      {
         "City": " Chaudfontaine"
      },
      {
         "City": " Châtelet"
      },
      {
         "City": " Chasse Royale"
      },
      {
         "City": " Charleroi"
      },
      {
         "City": " Brussels"
      },
      {
         "City": " Brugge"
      },
      {
         "City": " Brecht"
      },
      {
         "City": " Brasschaat"
      },
      {
         "City": " Braine-le-Comte"
      },
      {
         "City": " Braine-l'Alleud"
      },
      {
         "City": " Boussu"
      },
      {
         "City": " Bornem"
      },
      {
         "City": " Boom"
      },
      {
         "City": " Blankenberge"
      },
      {
         "City": " Binche"
      },
      {
         "City": " Bilzen"
      },
      {
         "City": " Beveren"
      },
      {
         "City": " Beringen"
      },
      {
         "City": " Beersel"
      },
      {
         "City": " Beerse"
      },
      {
         "City": " Balen"
      },
      {
         "City": " Ath"
      },
      {
         "City": " Asse"
      },
      {
         "City": " Arlon"
      },
      {
         "City": " Antwerpen"
      },
      {
         "City": " Ans"
      },
      {
         "City": " Andenne"
      },
      {
         "City": " Aarschot"
      },
      {
         "City": " Aalter"
      },
      {
         "City": " Aalst"
      }
   ],
   "Burkina Faso": [
      {
         "City": " Zorgo"
      },
      {
         "City": " Yako"
      },
      {
         "City": " Tougan"
      },
      {
         "City": " Titao"
      },
      {
         "City": " Tenkodogo"
      },
      {
         "City": " Réo"
      },
      {
         "City": " Pô"
      },
      {
         "City": " Ouahigouya"
      },
      {
         "City": " Ouagadougou"
      },
      {
         "City": " Nouna"
      },
      {
         "City": " Manga"
      },
      {
         "City": " Léo"
      },
      {
         "City": " Koupéla"
      },
      {
         "City": " Koudougou"
      },
      {
         "City": " Kongoussi"
      },
      {
         "City": " Kombissiri"
      },
      {
         "City": " Kokologo"
      },
      {
         "City": " Kaya"
      },
      {
         "City": " Houndé"
      },
      {
         "City": " Gourcy"
      },
      {
         "City": " Garango"
      },
      {
         "City": " Fada N'gourma"
      },
      {
         "City": " Dori"
      },
      {
         "City": " Djibo"
      },
      {
         "City": " Diapaga"
      },
      {
         "City": " Dédougou"
      },
      {
         "City": " Boussé"
      },
      {
         "City": " Boulsa"
      },
      {
         "City": " Bobo-Dioulasso"
      },
      {
         "City": " Banfora"
      },
      {
         "City": " Gaoua"
      },
      {
         "City": " Orodara"
      }
   ],
   "Bulgaria": [
      {
         "City": " Yambol"
      },
      {
         "City": " Vratsa"
      },
      {
         "City": " Vidin"
      },
      {
         "City": " Velingrad"
      },
      {
         "City": " Veliko Tŭrnovo"
      },
      {
         "City": " Varna"
      },
      {
         "City": " Targovishte"
      },
      {
         "City": " Troyan"
      },
      {
         "City": " Dobrich"
      },
      {
         "City": " Svishtov"
      },
      {
         "City": " Svilengrad"
      },
      {
         "City": " Stara Zagora"
      },
      {
         "City": " Dupnitsa"
      },
      {
         "City": " Sofia"
      },
      {
         "City": " Smolyan"
      },
      {
         "City": " Sliven"
      },
      {
         "City": " Silistra"
      },
      {
         "City": " Shumen"
      },
      {
         "City": " Sevlievo"
      },
      {
         "City": " Sandanski"
      },
      {
         "City": " Samokov"
      },
      {
         "City": " Ruse"
      },
      {
         "City": " Razgrad"
      },
      {
         "City": " Rakovski"
      },
      {
         "City": " Popovo"
      },
      {
         "City": " Plovdiv"
      },
      {
         "City": " Pleven"
      },
      {
         "City": " Petrich"
      },
      {
         "City": " Peshtera"
      },
      {
         "City": " Pernik"
      },
      {
         "City": " Pazardzhik"
      },
      {
         "City": " Panagyurishte"
      },
      {
         "City": " Nova Zagora"
      },
      {
         "City": " Montana"
      },
      {
         "City": " Lovech"
      },
      {
         "City": " Lom"
      },
      {
         "City": " Kyustendil"
      },
      {
         "City": " Kardzhali"
      },
      {
         "City": " Haskovo"
      },
      {
         "City": " Kharmanli"
      },
      {
         "City": " Kazanlŭk"
      },
      {
         "City": " Karnobat"
      },
      {
         "City": " Karlovo"
      },
      {
         "City": " Gotse Delchev"
      },
      {
         "City": " Gorna Oryakhovitsa"
      },
      {
         "City": " Gabrovo"
      },
      {
         "City": " Dimitrovgrad"
      },
      {
         "City": " Chirpan"
      },
      {
         "City": " Cherven Bryag"
      },
      {
         "City": " Burgas"
      },
      {
         "City": " Botevgrad"
      },
      {
         "City": " Blagoevgrad"
      },
      {
         "City": " Berkovitsa"
      },
      {
         "City": " Aytos"
      },
      {
         "City": " Asenovgrad"
      }
   ],
   "Bahrain": [
      {
         "City": " Sitrah"
      },
      {
         "City": " Madīnat ‘Īsá"
      },
      {
         "City": " Jidd Ḩafş"
      },
      {
         "City": " Madīnat Ḩamad"
      },
      {
         "City": " Dār Kulayb"
      },
      {
         "City": " Al Muharraq"
      },
      {
         "City": " Manama"
      },
      {
         "City": " Ar Rifā‘"
      }
   ],
   "Burundi": [
      {
         "City": " Makamba"
      },
      {
         "City": " Bururi"
      },
      {
         "City": " Bujumbura"
      },
      {
         "City": " Muramvya"
      },
      {
         "City": " Gitega"
      },
      {
         "City": " Ruyigi"
      },
      {
         "City": " Ngozi"
      },
      {
         "City": " Kayanza"
      },
      {
         "City": " Muyinga"
      },
      {
         "City": " Rutana"
      }
   ],
   "Benin": [
      {
         "City": " Tchaourou"
      },
      {
         "City": " Tanguiéta"
      },
      {
         "City": " Savé"
      },
      {
         "City": " Savalou"
      },
      {
         "City": " Sakété"
      },
      {
         "City": " Porto-Novo"
      },
      {
         "City": " Pobé"
      },
      {
         "City": " Parakou"
      },
      {
         "City": " Ouidah"
      },
      {
         "City": " Nikki"
      },
      {
         "City": " Natitingou"
      },
      {
         "City": " Malanville"
      },
      {
         "City": " Lokossa"
      },
      {
         "City": " Kétou"
      },
      {
         "City": " Kandi"
      },
      {
         "City": " Dogbo"
      },
      {
         "City": " Djougou"
      },
      {
         "City": " Dassa-Zoumé"
      },
      {
         "City": " Cové"
      },
      {
         "City": " Cotonou"
      },
      {
         "City": " Comé"
      },
      {
         "City": " Bohicon"
      },
      {
         "City": " Bembèrèkè"
      },
      {
         "City": " Bassila"
      },
      {
         "City": " Banikoara"
      },
      {
         "City": " Aplahoué"
      },
      {
         "City": " Allada"
      },
      {
         "City": " Abomey-Calavi"
      },
      {
         "City": " Abomey"
      }
   ],
   "Saint Barthelemy": [
      {
         "City": " Gustavia"
      }
   ],
   "Bermuda": [
      {
         "City": " Hamilton"
      }
   ],
   "Brunei": [
      {
         "City": " Tutong"
      },
      {
         "City": " Seria"
      },
      {
         "City": " Kuala Belait"
      },
      {
         "City": " Bandar Seri Begawan"
      }
   ],
   "Bolivia": [
      {
         "City": " Yacuiba"
      },
      {
         "City": " Warnes"
      },
      {
         "City": " Villazón"
      },
      {
         "City": " Villa Yapacaní"
      },
      {
         "City": " Villamontes"
      },
      {
         "City": " Tupiza"
      },
      {
         "City": " Trinidad"
      },
      {
         "City": " Tarija"
      },
      {
         "City": " Sucre"
      },
      {
         "City": " Santiago del Torno"
      },
      {
         "City": " Santa Cruz de la Sierra"
      },
      {
         "City": " San Ignacio de Velasco"
      },
      {
         "City": " San Borja"
      },
      {
         "City": " Riberalta"
      },
      {
         "City": " Punata"
      },
      {
         "City": " Potosí"
      },
      {
         "City": " Oruro"
      },
      {
         "City": " Montero"
      },
      {
         "City": " Mizque"
      },
      {
         "City": " Llallagua"
      },
      {
         "City": " La Paz"
      },
      {
         "City": " Huanuni"
      },
      {
         "City": " Guayaramerín"
      },
      {
         "City": " Cotoca"
      },
      {
         "City": " Cochabamba"
      },
      {
         "City": " Cobija"
      },
      {
         "City": " Camiri"
      }
   ],
   "Bonaire,  Saint Eustatius and Saba": [
      {
         "City": " Kralendijk"
      }
   ],
   "Brazil": [
      {
         "City": " Vitória do Mearim"
      },
      {
         "City": " Vitória de Santo Antão"
      },
      {
         "City": " Viseu"
      },
      {
         "City": " Conde"
      },
      {
         "City": " Vigia"
      },
      {
         "City": " Viçosa do Ceará"
      },
      {
         "City": " Viçosa"
      },
      {
         "City": " Viana"
      },
      {
         "City": " Várzea Alegre"
      },
      {
         "City": " Varjota"
      },
      {
         "City": " Vargem Grande"
      },
      {
         "City": " Valença do Piauí"
      },
      {
         "City": " União dos Palmares"
      },
      {
         "City": " União"
      },
      {
         "City": " Tuntum"
      },
      {
         "City": " Tucuruí"
      },
      {
         "City": " Tucumã"
      },
      {
         "City": " Trindade"
      },
      {
         "City": " Trairi"
      },
      {
         "City": " Toritama"
      },
      {
         "City": " Tomé Açu"
      },
      {
         "City": " Timon"
      },
      {
         "City": " Timbiras"
      },
      {
         "City": " Timbaúba"
      },
      {
         "City": " Tianguá"
      },
      {
         "City": " Teresina"
      },
      {
         "City": " São João dos Inhamuns"
      },
      {
         "City": " Tamandaré"
      },
      {
         "City": " Tabira"
      },
      {
         "City": " Surubim"
      },
      {
         "City": " Sousa"
      },
      {
         "City": " Soure"
      },
      {
         "City": " Solânea"
      },
      {
         "City": " Sobral"
      },
      {
         "City": " Sirinhaém"
      },
      {
         "City": " Sertânia"
      },
      {
         "City": " Serra Talhada"
      },
      {
         "City": " Senador Pompeu"
      },
      {
         "City": " Satuba"
      },
      {
         "City": " São Raimundo Nonato"
      },
      {
         "City": " São Miguel dos Campos"
      },
      {
         "City": " São Miguel do Guamá"
      },
      {
         "City": " São Mateus do Maranhão"
      },
      {
         "City": " São Luís do Quitunde"
      },
      {
         "City": " São Luís"
      },
      {
         "City": " São Lourenço da Mata"
      },
      {
         "City": " São José do Egito"
      },
      {
         "City": " São José de Ribamar"
      },
      {
         "City": " São José de Mipibu"
      },
      {
         "City": " São João dos Patos"
      },
      {
         "City": " São Gonçalo do Amarante"
      },
      {
         "City": " São Félix do Xingu"
      },
      {
         "City": " São Domingos do Maranhão"
      },
      {
         "City": " São Bento"
      },
      {
         "City": " São Bento"
      },
      {
         "City": " Santa Rita"
      },
      {
         "City": " Santarém"
      },
      {
         "City": " Santa Quitéria do Maranhão"
      },
      {
         "City": " Santa Quitéria"
      },
      {
         "City": " Santana do Ipanema"
      },
      {
         "City": " Santa Luzia"
      },
      {
         "City": " Santa Inês"
      },
      {
         "City": " Santa Helena"
      },
      {
         "City": " Santa Cruz do Capibaribe"
      },
      {
         "City": " Santa Cruz"
      },
      {
         "City": " Salinópolis"
      },
      {
         "City": " Salgueiro"
      },
      {
         "City": " Russas"
      },
      {
         "City": " Rio Largo"
      },
      {
         "City": " Rio Formoso"
      },
      {
         "City": " Ribeirão"
      },
      {
         "City": " Recife"
      },
      {
         "City": " Quixeramobim"
      },
      {
         "City": " Quixadá"
      },
      {
         "City": " Presidente Dutra"
      },
      {
         "City": " Santana"
      },
      {
         "City": " Porto Calvo"
      },
      {
         "City": " Portel"
      },
      {
         "City": " Pombos"
      },
      {
         "City": " Pombal"
      },
      {
         "City": " Piripiri"
      },
      {
         "City": " Piracuruca"
      },
      {
         "City": " Pinheiro"
      },
      {
         "City": " Pindaré Mirim"
      },
      {
         "City": " Pilar"
      },
      {
         "City": " Picos"
      },
      {
         "City": " Petrolina"
      },
      {
         "City": " Jatobá"
      },
      {
         "City": " Pesqueira"
      },
      {
         "City": " Pentecoste"
      },
      {
         "City": " Penalva"
      },
      {
         "City": " Pedro II"
      },
      {
         "City": " Pedra Branca"
      },
      {
         "City": " Paulo Afonso"
      },
      {
         "City": " Paulista"
      },
      {
         "City": " Patos"
      },
      {
         "City": " Parnamirim"
      },
      {
         "City": " Parnaíba"
      },
      {
         "City": " Parintins"
      },
      {
         "City": " Parelhas"
      },
      {
         "City": " Paraipaba"
      },
      {
         "City": " Paragominas"
      },
      {
         "City": " Paracuru"
      },
      {
         "City": " Palmares"
      },
      {
         "City": " Pacatuba"
      },
      {
         "City": " Pacajus"
      },
      {
         "City": " Ouricuri"
      },
      {
         "City": " Orós"
      },
      {
         "City": " Oriximiná"
      },
      {
         "City": " Olinda"
      },
      {
         "City": " Oeiras"
      },
      {
         "City": " Ábidos"
      },
      {
         "City": " Nova Russas"
      },
      {
         "City": " Nova Cruz"
      },
      {
         "City": " Nazaré da Mata"
      },
      {
         "City": " Natal"
      },
      {
         "City": " Murici"
      },
      {
         "City": " Moreno"
      },
      {
         "City": " Morada Nova"
      },
      {
         "City": " Monteiro"
      },
      {
         "City": " Monte Alegre"
      },
      {
         "City": " Mombaça"
      },
      {
         "City": " Moju"
      },
      {
         "City": " Mossoró"
      },
      {
         "City": " Mocajuba"
      },
      {
         "City": " Maués"
      },
      {
         "City": " Matriz de Camaragibe"
      },
      {
         "City": " Mari"
      },
      {
         "City": " Marechal Deodoro"
      },
      {
         "City": " Maragogi"
      },
      {
         "City": " Maracanaú"
      },
      {
         "City": " Marabá"
      },
      {
         "City": " Mamanguape"
      },
      {
         "City": " Maceió"
      },
      {
         "City": " Macau"
      },
      {
         "City": " Macapá"
      },
      {
         "City": " Macaíba"
      },
      {
         "City": " Limoeiro do Norte"
      },
      {
         "City": " Limoeiro"
      },
      {
         "City": " Lavras da Mangabeira"
      },
      {
         "City": " Lajedo"
      },
      {
         "City": " Lago da Pedra"
      },
      {
         "City": " Lagoa do Itaenga"
      },
      {
         "City": " Juazeiro do Norte"
      },
      {
         "City": " José de Freitas"
      },
      {
         "City": " João Pessoa"
      },
      {
         "City": " João Câmara"
      },
      {
         "City": " Jaguaruana"
      },
      {
         "City": " Jaguaribe"
      },
      {
         "City": " Jaboatão"
      },
      {
         "City": " Itupiranga"
      },
      {
         "City": " Itacoatiara"
      },
      {
         "City": " Itaporanga"
      },
      {
         "City": " Itapissuma"
      },
      {
         "City": " Itapipoca"
      },
      {
         "City": " Itapecuru Mirim"
      },
      {
         "City": " Itapagé"
      },
      {
         "City": " Itaituba"
      },
      {
         "City": " Itaitinga"
      },
      {
         "City": " Itabaiana"
      },
      {
         "City": " Ipueiras"
      },
      {
         "City": " Ipubi"
      },
      {
         "City": " Ipu"
      },
      {
         "City": " Ipojuca"
      },
      {
         "City": " Imperatriz"
      },
      {
         "City": " Iguatu"
      },
      {
         "City": " Igarapé Miri"
      },
      {
         "City": " Igarapé Açu"
      },
      {
         "City": " Igarassu"
      },
      {
         "City": " Icó"
      },
      {
         "City": " Horizonte"
      },
      {
         "City": " Guaraciaba do Norte"
      },
      {
         "City": " Guarabira"
      },
      {
         "City": " Guaiúba"
      },
      {
         "City": " Gravatá"
      },
      {
         "City": " Granja"
      },
      {
         "City": " Grajaú"
      },
      {
         "City": " Goiana"
      },
      {
         "City": " Glória do Goitá"
      },
      {
         "City": " Garanhuns"
      },
      {
         "City": " Gameleira"
      },
      {
         "City": " Fortaleza"
      },
      {
         "City": " Floriano"
      },
      {
         "City": " Floresta"
      },
      {
         "City": " Eusébio"
      },
      {
         "City": " Extremoz"
      },
      {
         "City": " Estreito"
      },
      {
         "City": " Esperantina"
      },
      {
         "City": " Esperança"
      },
      {
         "City": " Escada"
      },
      {
         "City": " Dom Pedro"
      },
      {
         "City": " Demerval Lobão"
      },
      {
         "City": " Delmiro Gouveia"
      },
      {
         "City": " Custódia"
      },
      {
         "City": " Cururupu"
      },
      {
         "City": " Currais Novos"
      },
      {
         "City": " Cupira"
      },
      {
         "City": " Crato"
      },
      {
         "City": " Crateús"
      },
      {
         "City": " Coroatá"
      },
      {
         "City": " Condado"
      },
      {
         "City": " Conceição do Araguaia"
      },
      {
         "City": " Colinas"
      },
      {
         "City": " Coelho Neto"
      },
      {
         "City": " Codó"
      },
      {
         "City": " Chapadinha"
      },
      {
         "City": " Chã Grande"
      },
      {
         "City": " Ceará Mirim"
      },
      {
         "City": " Caxias"
      },
      {
         "City": " Caucaia"
      },
      {
         "City": " Catolé do Rocha"
      },
      {
         "City": " Catende"
      },
      {
         "City": " Castanhal"
      },
      {
         "City": " Cascavel"
      },
      {
         "City": " Caruaru"
      },
      {
         "City": " Carpina"
      },
      {
         "City": " Carolina"
      },
      {
         "City": " Capitão Poço"
      },
      {
         "City": " Capanema"
      },
      {
         "City": " Canindé"
      },
      {
         "City": " Canguaretama"
      },
      {
         "City": " Campos Sales"
      },
      {
         "City": " Campo Maior"
      },
      {
         "City": " Campo Alegre"
      },
      {
         "City": " Campina Grande"
      },
      {
         "City": " Camocim"
      },
      {
         "City": " Cametá"
      },
      {
         "City": " Cajueiro"
      },
      {
         "City": " Cajazeiras"
      },
      {
         "City": " Caicó"
      },
      {
         "City": " Cabrobó"
      },
      {
         "City": " Cabo"
      },
      {
         "City": " Cabedelo"
      },
      {
         "City": " Buriti Bravo"
      },
      {
         "City": " Buíque"
      },
      {
         "City": " Breves"
      },
      {
         "City": " Brejo Santo"
      },
      {
         "City": " Brejo da Madre de Deus"
      },
      {
         "City": " Bragança"
      },
      {
         "City": " Bom Conselho"
      },
      {
         "City": " Boa Viagem"
      },
      {
         "City": " Bezerros"
      },
      {
         "City": " Benevides"
      },
      {
         "City": " Belo Jardim"
      },
      {
         "City": " Belém"
      },
      {
         "City": " Belém"
      },
      {
         "City": " Beberibe"
      },
      {
         "City": " Bayeux"
      },
      {
         "City": " Baturité"
      },
      {
         "City": " Barreiros"
      },
      {
         "City": " Barreirinhas"
      },
      {
         "City": " Barras"
      },
      {
         "City": " Barra do Corda"
      },
      {
         "City": " Barcarena"
      },
      {
         "City": " Barbalha"
      },
      {
         "City": " Balsas"
      },
      {
         "City": " Bacabal"
      },
      {
         "City": " Augusto Corrêa"
      },
      {
         "City": " Atalaia"
      },
      {
         "City": " Areia Branca"
      },
      {
         "City": " Arcoverde"
      },
      {
         "City": " Araripina"
      },
      {
         "City": " Arari"
      },
      {
         "City": " Arapiraca"
      },
      {
         "City": " Araguaína"
      },
      {
         "City": " Aracati"
      },
      {
         "City": " Aquiraz"
      },
      {
         "City": " Apodi"
      },
      {
         "City": " Ananindeua"
      },
      {
         "City": " Amaraji"
      },
      {
         "City": " Altos"
      },
      {
         "City": " Altamira"
      },
      {
         "City": " Almeirim"
      },
      {
         "City": " Alenquer"
      },
      {
         "City": " Alagoa Grande"
      },
      {
         "City": " Águas Belas"
      },
      {
         "City": " Água Preta"
      },
      {
         "City": " Afogados da Ingazeira"
      },
      {
         "City": " Açu"
      },
      {
         "City": " Acopiara"
      },
      {
         "City": " Acaraú"
      },
      {
         "City": " Abreu e Lima"
      },
      {
         "City": " Abaetetuba"
      },
      {
         "City": " Xique Xique"
      },
      {
         "City": " Xanxerê"
      },
      {
         "City": " Votuporanga"
      },
      {
         "City": " Votorantim"
      },
      {
         "City": " Volta Redonda"
      },
      {
         "City": " Vitória da Conquista"
      },
      {
         "City": " Vitória"
      },
      {
         "City": " Visconde do Rio Branco"
      },
      {
         "City": " Viradouro"
      },
      {
         "City": " Vinhedo"
      },
      {
         "City": " Vila Velha"
      },
      {
         "City": " Videira"
      },
      {
         "City": " Viçosa"
      },
      {
         "City": " Viana"
      },
      {
         "City": " Viamão"
      },
      {
         "City": " Vespasiano"
      },
      {
         "City": " Veranópolis"
      },
      {
         "City": " Vera Cruz"
      },
      {
         "City": " Wenceslau Braz"
      },
      {
         "City": " Venâncio Aires"
      },
      {
         "City": " Vazante"
      },
      {
         "City": " Vassouras"
      },
      {
         "City": " Várzea Paulista"
      },
      {
         "City": " Várzea Grande"
      },
      {
         "City": " Várzea da Palma"
      },
      {
         "City": " Varginha"
      },
      {
         "City": " Vargem Grande do Sul"
      },
      {
         "City": " Valparaíso"
      },
      {
         "City": " Valinhos"
      },
      {
         "City": " Valença"
      },
      {
         "City": " Valença"
      },
      {
         "City": " Vacaria"
      },
      {
         "City": " Uruguaiana"
      },
      {
         "City": " Uruçuca"
      },
      {
         "City": " Uruaçu"
      },
      {
         "City": " União da Vitória"
      },
      {
         "City": " Unaí"
      },
      {
         "City": " Una"
      },
      {
         "City": " Umuarama"
      },
      {
         "City": " Uberlândia"
      },
      {
         "City": " Uberaba"
      },
      {
         "City": " Ubatuba"
      },
      {
         "City": " Ubatã"
      },
      {
         "City": " Ubaitaba"
      },
      {
         "City": " Ubá"
      },
      {
         "City": " Tupanciretã"
      },
      {
         "City": " Tupaciguara"
      },
      {
         "City": " Tupã"
      },
      {
         "City": " Tucano"
      },
      {
         "City": " Tubarão"
      },
      {
         "City": " Trindade"
      },
      {
         "City": " Três Rios"
      },
      {
         "City": " Três Pontas"
      },
      {
         "City": " Três Passos"
      },
      {
         "City": " Três Lagoas"
      },
      {
         "City": " Três de Maio"
      },
      {
         "City": " Três Coroas"
      },
      {
         "City": " Três Corações"
      },
      {
         "City": " Tremembé"
      },
      {
         "City": " Tramandaí"
      },
      {
         "City": " Torres"
      },
      {
         "City": " Toledo"
      },
      {
         "City": " Tobias Barreto"
      },
      {
         "City": " Timóteo"
      },
      {
         "City": " Timbó"
      },
      {
         "City": " Tijucas"
      },
      {
         "City": " Tietê"
      },
      {
         "City": " Teutônia"
      },
      {
         "City": " Teresópolis"
      },
      {
         "City": " Teófilo Otoni"
      },
      {
         "City": " Teodoro Sampaio"
      },
      {
         "City": " Telêmaco Borba"
      },
      {
         "City": " Taubaté"
      },
      {
         "City": " Tatuí"
      },
      {
         "City": " Taquarituba"
      },
      {
         "City": " Taquaritinga"
      },
      {
         "City": " Taquari"
      },
      {
         "City": " Taquara"
      },
      {
         "City": " Tapiramutá"
      },
      {
         "City": " Tapes"
      },
      {
         "City": " Tanguá"
      },
      {
         "City": " Tanabi"
      },
      {
         "City": " Tambaú"
      },
      {
         "City": " Taiobeiras"
      },
      {
         "City": " Taboão da Serra"
      },
      {
         "City": " Suzano"
      },
      {
         "City": " Sumaré"
      },
      {
         "City": " Sorocaba"
      },
      {
         "City": " Soledade"
      },
      {
         "City": " Socorro"
      },
      {
         "City": " Sobradinho"
      },
      {
         "City": " Simão Dias"
      },
      {
         "City": " Silva Jardim"
      },
      {
         "City": " Sidrolândia"
      },
      {
         "City": " Sete Lagoas"
      },
      {
         "City": " Sertãozinho"
      },
      {
         "City": " Serrinha"
      },
      {
         "City": " Serra Negra"
      },
      {
         "City": " Serrana"
      },
      {
         "City": " Serra"
      },
      {
         "City": " Seropédica"
      },
      {
         "City": " Senhor do Bonfim"
      },
      {
         "City": " Senador Canedo"
      },
      {
         "City": " Seabra"
      },
      {
         "City": " Schroeder"
      },
      {
         "City": " Saubara"
      },
      {
         "City": " Sarzedo"
      },
      {
         "City": " Sarandi"
      },
      {
         "City": " Sarandi"
      },
      {
         "City": " Saquarema"
      },
      {
         "City": " Sapucaia"
      },
      {
         "City": " Sapiranga"
      },
      {
         "City": " São Vicente"
      },
      {
         "City": " São Sepé"
      },
      {
         "City": " São Sebastião do Passé"
      },
      {
         "City": " São Sebastião do Paraíso"
      },
      {
         "City": " São Sebastião do Caí"
      },
      {
         "City": " São Sebastião"
      },
      {
         "City": " São Roque"
      },
      {
         "City": " São Pedro da Aldeia"
      },
      {
         "City": " São Pedro"
      },
      {
         "City": " São Paulo"
      },
      {
         "City": " São Miguel do Iguaçu"
      },
      {
         "City": " São Miguel do Araguaia"
      },
      {
         "City": " São Mateus do Sul"
      },
      {
         "City": " São Mateus"
      },
      {
         "City": " São Marcos"
      },
      {
         "City": " São Manuel"
      },
      {
         "City": " São Luiz Gonzaga"
      },
      {
         "City": " São Luís de Montes Belos"
      },
      {
         "City": " São Lourenço do Sul"
      },
      {
         "City": " São Lourenço"
      },
      {
         "City": " São Leopoldo"
      },
      {
         "City": " São José dos Pinhais"
      },
      {
         "City": " São José dos Campos"
      },
      {
         "City": " São José do Rio Preto"
      },
      {
         "City": " São José do Rio Pardo"
      },
      {
         "City": " São José"
      },
      {
         "City": " São Joaquim da Barra"
      },
      {
         "City": " São Joaquim"
      },
      {
         "City": " São João Nepomuceno"
      },
      {
         "City": " São João de Meriti"
      },
      {
         "City": " São João del Rei"
      },
      {
         "City": " São João da Boa Vista"
      },
      {
         "City": " São João da Barra"
      },
      {
         "City": " São Jerônimo"
      },
      {
         "City": " São Gotardo"
      },
      {
         "City": " São Gonçalo do Sapucaí"
      },
      {
         "City": " São Gabriel"
      },
      {
         "City": " São Francisco do Sul"
      },
      {
         "City": " São Francisco do Conde"
      },
      {
         "City": " São Francisco"
      },
      {
         "City": " São Fidélis"
      },
      {
         "City": " São Cristóvão"
      },
      {
         "City": " São Carlos"
      },
      {
         "City": " São Caetano do Sul"
      },
      {
         "City": " São Borja"
      },
      {
         "City": " São Bernardo do Campo"
      },
      {
         "City": " São Bento do Sul"
      },
      {
         "City": " Santos Dumont"
      },
      {
         "City": " Santos"
      },
      {
         "City": " Santo Estêvão"
      },
      {
         "City": " Santo Antônio do Monte"
      },
      {
         "City": " Santo Antônio do Amparo"
      },
      {
         "City": " Santo Antônio de Posse"
      },
      {
         "City": " Santo Antônio de Pádua"
      },
      {
         "City": " Santo Antônio de Jesus"
      },
      {
         "City": " Santo Antônio da Platina"
      },
      {
         "City": " Santo Ângelo"
      },
      {
         "City": " Santo André"
      },
      {
         "City": " Santo Anastácio"
      },
      {
         "City": " Santo Amaro da Imperatriz"
      },
      {
         "City": " Santo Amaro"
      },
      {
         "City": " Santiago"
      },
      {
         "City": " Santa Vitória do Palmar"
      },
      {
         "City": " Santa Rosa de Viterbo"
      },
      {
         "City": " Santa Rosa"
      },
      {
         "City": " Santa Rita do Sapucaí"
      },
      {
         "City": " Santa Rita do Passa Quatro"
      },
      {
         "City": " Santana do Paraíso"
      },
      {
         "City": " Santana do Livramento"
      },
      {
         "City": " Santana de Parnaíba"
      },
      {
         "City": " Santa Maria da Vitória"
      },
      {
         "City": " Santa Maria"
      },
      {
         "City": " Santa Luzia"
      },
      {
         "City": " Santaluz"
      },
      {
         "City": " Santa Isabel"
      },
      {
         "City": " Santa Helena de Goiás"
      },
      {
         "City": " Santa Gertrudes"
      },
      {
         "City": " Santa Fé do Sul"
      },
      {
         "City": " Santa Cruz do Sul"
      },
      {
         "City": " Santa Cruz do Rio Pardo"
      },
      {
         "City": " Santa Cruz das Palmeiras"
      },
      {
         "City": " Santa Cruz Cabrália"
      },
      {
         "City": " Santa Cecília"
      },
      {
         "City": " Santa Bárbara d'Oeste"
      },
      {
         "City": " Salvador"
      },
      {
         "City": " Salto de Pirapora"
      },
      {
         "City": " Salto"
      },
      {
         "City": " Salinas"
      },
      {
         "City": " Sacramento"
      },
      {
         "City": " Ruy Barbosa"
      },
      {
         "City": " Rubiataba"
      },
      {
         "City": " Rosário do Sul"
      },
      {
         "City": " Rondonópolis"
      },
      {
         "City": " Rolante"
      },
      {
         "City": " Rolândia"
      },
      {
         "City": " Rio Verde de Mato Grosso"
      },
      {
         "City": " Rio Real"
      },
      {
         "City": " Rio Pardo"
      },
      {
         "City": " Rio Negro"
      },
      {
         "City": " Rio Negrinho"
      },
      {
         "City": " Rio Grande da Serra"
      },
      {
         "City": " Rio Grande"
      },
      {
         "City": " Rio do Sul"
      },
      {
         "City": " Rio de Janeiro"
      },
      {
         "City": " Rio das Pedras"
      },
      {
         "City": " Rio das Ostras"
      },
      {
         "City": " Rio Claro"
      },
      {
         "City": " Rio Brilhante"
      },
      {
         "City": " Rio Branco do Sul"
      },
      {
         "City": " Rio Bonito"
      },
      {
         "City": " Ribeirão Preto"
      },
      {
         "City": " Ribeirão Pires"
      },
      {
         "City": " Ribeirão das Neves"
      },
      {
         "City": " Ribeirão da Ilha"
      },
      {
         "City": " Ribeira do Pombal"
      },
      {
         "City": " Riachão do Jacuípe"
      },
      {
         "City": " Resplendor"
      },
      {
         "City": " Resende"
      },
      {
         "City": " Registro"
      },
      {
         "City": " Regente Feijó"
      },
      {
         "City": " Rancharia"
      },
      {
         "City": " Quirinópolis"
      },
      {
         "City": " Queimados"
      },
      {
         "City": " Quatro Barras"
      },
      {
         "City": " Quaraí"
      },
      {
         "City": " Prudentópolis"
      },
      {
         "City": " Propriá"
      },
      {
         "City": " Promissão"
      },
      {
         "City": " Presidente Venceslau"
      },
      {
         "City": " Presidente Prudente"
      },
      {
         "City": " Presidente Epitácio"
      },
      {
         "City": " Prata"
      },
      {
         "City": " Praia Grande"
      },
      {
         "City": " Prado"
      },
      {
         "City": " Pouso Alegre"
      },
      {
         "City": " Posse"
      },
      {
         "City": " Porto União"
      },
      {
         "City": " Porto Seguro"
      },
      {
         "City": " Porto Ferreira"
      },
      {
         "City": " Porto Feliz"
      },
      {
         "City": " Porto Alegre"
      },
      {
         "City": " Portão"
      },
      {
         "City": " Porangatu"
      },
      {
         "City": " Pontes e Lacerda"
      },
      {
         "City": " Ponte Nova"
      },
      {
         "City": " Ponta Porã"
      },
      {
         "City": " Pontal"
      },
      {
         "City": " Ponta Grossa"
      },
      {
         "City": " Pompéu"
      },
      {
         "City": " Pompéia"
      },
      {
         "City": " Pomerode"
      },
      {
         "City": " Poços de Caldas"
      },
      {
         "City": " Poconé"
      },
      {
         "City": " Poções"
      },
      {
         "City": " Poá"
      },
      {
         "City": " Planaltina"
      },
      {
         "City": " Piúma"
      },
      {
         "City": " Piuí"
      },
      {
         "City": " Pitangui"
      },
      {
         "City": " Pitangueiras"
      },
      {
         "City": " Pitanga"
      },
      {
         "City": " Piritiba"
      },
      {
         "City": " Pires do Rio"
      },
      {
         "City": " Piraquara"
      },
      {
         "City": " Pirapozinho"
      },
      {
         "City": " Pirapora"
      },
      {
         "City": " Pirajuí"
      },
      {
         "City": " Piraju"
      },
      {
         "City": " Piraí do Sul"
      },
      {
         "City": " Piraí"
      },
      {
         "City": " Pirassununga"
      },
      {
         "City": " Piracicaba"
      },
      {
         "City": " Piracanjuba"
      },
      {
         "City": " Piracaia"
      },
      {
         "City": " Pinheiral"
      },
      {
         "City": " Pinhão"
      },
      {
         "City": " Espírito Santo do Pinhal"
      },
      {
         "City": " Pindobaçu"
      },
      {
         "City": " Pindamonhangaba"
      },
      {
         "City": " Pilar do Sul"
      },
      {
         "City": " Piedade"
      },
      {
         "City": " Petrópolis"
      },
      {
         "City": " Peruíbe"
      },
      {
         "City": " Pereira Barreto"
      },
      {
         "City": " Perdões"
      },
      {
         "City": " Penha"
      },
      {
         "City": " Penedo"
      },
      {
         "City": " Penápolis"
      },
      {
         "City": " Pelotas"
      },
      {
         "City": " Pedro Leopoldo"
      },
      {
         "City": " Pedreira"
      },
      {
         "City": " Pedra Azul"
      },
      {
         "City": " Pederneiras"
      },
      {
         "City": " Paulínia"
      },
      {
         "City": " Patrocínio"
      },
      {
         "City": " Patos de Minas"
      },
      {
         "City": " Pato Branco"
      },
      {
         "City": " Paty do Alferes"
      },
      {
         "City": " Passos"
      },
      {
         "City": " Passo Fundo"
      },
      {
         "City": " Parobé"
      },
      {
         "City": " Paraty"
      },
      {
         "City": " Paranavaí"
      },
      {
         "City": " Paranapanema"
      },
      {
         "City": " Paranaíba"
      },
      {
         "City": " Paranaguá"
      },
      {
         "City": " Paraíba do Sul"
      },
      {
         "City": " Paraguaçu Paulista"
      },
      {
         "City": " Paraguaçu"
      },
      {
         "City": " Pará de Minas"
      },
      {
         "City": " Paracatu"
      },
      {
         "City": " Paracambi"
      },
      {
         "City": " Panambi"
      },
      {
         "City": " Palotina"
      },
      {
         "City": " Palmital"
      },
      {
         "City": " Palmeira das Missões"
      },
      {
         "City": " Palmeira"
      },
      {
         "City": " Palmas"
      },
      {
         "City": " Palhoça"
      },
      {
         "City": " Paiçandu"
      },
      {
         "City": " Padre Bernardo"
      },
      {
         "City": " Ouro Preto"
      },
      {
         "City": " Ouro Branco"
      },
      {
         "City": " Ourinhos"
      },
      {
         "City": " Osvaldo Cruz"
      },
      {
         "City": " Osório"
      },
      {
         "City": " Osasco"
      },
      {
         "City": " Orleans"
      },
      {
         "City": " Orlândia"
      },
      {
         "City": " Oliveira"
      },
      {
         "City": " Olímpia"
      },
      {
         "City": " Novo Horizonte"
      },
      {
         "City": " Novo Hamburgo"
      },
      {
         "City": " Nova Viçosa"
      },
      {
         "City": " Nova Venécia"
      },
      {
         "City": " Nova Prata"
      },
      {
         "City": " Nova Petrópolis"
      },
      {
         "City": " Nova Olímpia"
      },
      {
         "City": " Nova Odessa"
      },
      {
         "City": " Nova Lima"
      },
      {
         "City": " Nova Iguaçu"
      },
      {
         "City": " Nova Granada"
      },
      {
         "City": " Nova Friburgo"
      },
      {
         "City": " Nova Era"
      },
      {
         "City": " Nossa Senhora do Socorro"
      },
      {
         "City": " Nossa Senhora da Glória"
      },
      {
         "City": " Niterói"
      },
      {
         "City": " Niquelândia"
      },
      {
         "City": " Nilópolis"
      },
      {
         "City": " Nerópolis"
      },
      {
         "City": " Nepomuceno"
      },
      {
         "City": " Nazaré"
      },
      {
         "City": " Naviraí"
      },
      {
         "City": " Navegantes"
      },
      {
         "City": " Nanuque"
      },
      {
         "City": " Muzambinho"
      },
      {
         "City": " Muritiba"
      },
      {
         "City": " Muriaé"
      },
      {
         "City": " Mucuri"
      },
      {
         "City": " Morro do Chapéu"
      },
      {
         "City": " Morro Agudo"
      },
      {
         "City": " Morrinhos"
      },
      {
         "City": " Montes Claros"
      },
      {
         "City": " Monte Santo de Minas"
      },
      {
         "City": " Montenegro"
      },
      {
         "City": " Monte Mor"
      },
      {
         "City": " Monte Carmelo"
      },
      {
         "City": " Monte Azul Paulista"
      },
      {
         "City": " Monte Aprazível"
      },
      {
         "City": " Monte Alto"
      },
      {
         "City": " Mongaguá"
      },
      {
         "City": " Mogi Mirim"
      },
      {
         "City": " Mogi-Gaucu"
      },
      {
         "City": " Mogi das Cruzes"
      },
      {
         "City": " Mococa"
      },
      {
         "City": " Mirandopólis"
      },
      {
         "City": " Miracema"
      },
      {
         "City": " Mineiros"
      },
      {
         "City": " Miguel Pereira"
      },
      {
         "City": " Miguelópolis"
      },
      {
         "City": " Mendes"
      },
      {
         "City": " Medianeira"
      },
      {
         "City": " Medeiros Neto"
      },
      {
         "City": " Mauá"
      },
      {
         "City": " Matozinhos"
      },
      {
         "City": " Mateus Leme"
      },
      {
         "City": " Matão"
      },
      {
         "City": " Mata de São João"
      },
      {
         "City": " Mascote"
      },
      {
         "City": " Martinópolis"
      },
      {
         "City": " Maringá"
      },
      {
         "City": " Marília"
      },
      {
         "City": " Maricá"
      },
      {
         "City": " Mariana"
      },
      {
         "City": " Marialva"
      },
      {
         "City": " Marechal Cândido Rondon"
      },
      {
         "City": " Marau"
      },
      {
         "City": " Marataizes"
      },
      {
         "City": " Maragogipe"
      },
      {
         "City": " Maracás"
      },
      {
         "City": " Maracaju"
      },
      {
         "City": " Manhumirim"
      },
      {
         "City": " Manhuaçu"
      },
      {
         "City": " Mangaratiba"
      },
      {
         "City": " Mandaguari"
      },
      {
         "City": " Mairiporã"
      },
      {
         "City": " Mairinque"
      },
      {
         "City": " Mafra"
      },
      {
         "City": " Machado"
      },
      {
         "City": " Macatuba"
      },
      {
         "City": " Macaé"
      },
      {
         "City": " Luziânia"
      },
      {
         "City": " Lucas"
      },
      {
         "City": " Louveira"
      },
      {
         "City": " Lorena"
      },
      {
         "City": " Londrina"
      },
      {
         "City": " Loanda"
      },
      {
         "City": " Livramento do Brumado"
      },
      {
         "City": " Lins"
      },
      {
         "City": " Linhares"
      },
      {
         "City": " Limeira"
      },
      {
         "City": " Leopoldina"
      },
      {
         "City": " Lençóis Paulista"
      },
      {
         "City": " Leme"
      },
      {
         "City": " Lavras"
      },
      {
         "City": " Laranjeiras do Sul"
      },
      {
         "City": " Laranjeiras"
      },
      {
         "City": " Laranjal Paulista"
      },
      {
         "City": " Lapa"
      },
      {
         "City": " Lajinha"
      },
      {
         "City": " Lages"
      },
      {
         "City": " Lajeado"
      },
      {
         "City": " Laguna"
      },
      {
         "City": " Lagoa Vermelha"
      },
      {
         "City": " Lagoa Santa"
      },
      {
         "City": " Lagoa da Prata"
      },
      {
         "City": " Lagarto"
      },
      {
         "City": " Ladário"
      },
      {
         "City": " Jundiaí"
      },
      {
         "City": " Júlio de Castilhos"
      },
      {
         "City": " Juiz de Fora"
      },
      {
         "City": " Juatuba"
      },
      {
         "City": " José Bonifácio"
      },
      {
         "City": " Joinville"
      },
      {
         "City": " João Pinheiro"
      },
      {
         "City": " João Monlevade"
      },
      {
         "City": " Joaçaba"
      },
      {
         "City": " Jeremoabo"
      },
      {
         "City": " Jequitinhonha"
      },
      {
         "City": " Jequié"
      },
      {
         "City": " Jaú"
      },
      {
         "City": " Jataí"
      },
      {
         "City": " Jarinu"
      },
      {
         "City": " Jardinópolis"
      },
      {
         "City": " Jardim"
      },
      {
         "City": " Jaraguá do Sul"
      },
      {
         "City": " Jaraguá"
      },
      {
         "City": " Japeri"
      },
      {
         "City": " Januária"
      },
      {
         "City": " Jandira"
      },
      {
         "City": " Jandaia do Sul"
      },
      {
         "City": " Janaúba"
      },
      {
         "City": " Jales"
      },
      {
         "City": " Jaguariúna"
      },
      {
         "City": " Jaguariaíva"
      },
      {
         "City": " Jaguarari"
      },
      {
         "City": " Jaguarão"
      },
      {
         "City": " Jaguaquara"
      },
      {
         "City": " Jacutinga"
      },
      {
         "City": " Jacobina"
      },
      {
         "City": " Jaciara"
      },
      {
         "City": " Jacarezinho"
      },
      {
         "City": " Jacareí"
      },
      {
         "City": " Jaboticabal"
      },
      {
         "City": " Ivoti"
      },
      {
         "City": " Ituverava"
      },
      {
         "City": " Iturama"
      },
      {
         "City": " Itupeva"
      },
      {
         "City": " Itumbiara"
      },
      {
         "City": " Ituiutaba"
      },
      {
         "City": " Ituberá"
      },
      {
         "City": " Itu"
      },
      {
         "City": " Itororó"
      },
      {
         "City": " Itaúna"
      },
      {
         "City": " Itatinga"
      },
      {
         "City": " Itatiba"
      },
      {
         "City": " Itararé"
      },
      {
         "City": " Itaqui"
      },
      {
         "City": " Itaquaquecetuba"
      },
      {
         "City": " Itapuranga"
      },
      {
         "City": " Itápolis"
      },
      {
         "City": " Itapira"
      },
      {
         "City": " Itapevi"
      },
      {
         "City": " Itapeva"
      },
      {
         "City": " Itapetininga"
      },
      {
         "City": " Itapetinga"
      },
      {
         "City": " Itaperuna"
      },
      {
         "City": " Itaperuçu"
      },
      {
         "City": " Itapemirim"
      },
      {
         "City": " Itapema"
      },
      {
         "City": " Itapecerica da Serra"
      },
      {
         "City": " Itapecerica"
      },
      {
         "City": " Itaparica"
      },
      {
         "City": " Itapaci"
      },
      {
         "City": " Itaocara"
      },
      {
         "City": " Itanhaém"
      },
      {
         "City": " Itambé"
      },
      {
         "City": " Itamarandiba"
      },
      {
         "City": " Itamaraju"
      },
      {
         "City": " Itajuípe"
      },
      {
         "City": " Itajubá"
      },
      {
         "City": " Itajaí"
      },
      {
         "City": " Itaí"
      },
      {
         "City": " Itaguaí"
      },
      {
         "City": " Itabuna"
      },
      {
         "City": " Itaboraí"
      },
      {
         "City": " Itabirito"
      },
      {
         "City": " Itabira"
      },
      {
         "City": " Itaberaí"
      },
      {
         "City": " Itaberaba"
      },
      {
         "City": " Itabaianinha"
      },
      {
         "City": " Itabaiana"
      },
      {
         "City": " Irecê"
      },
      {
         "City": " Irati"
      },
      {
         "City": " Iracemápolis"
      },
      {
         "City": " Iporá"
      },
      {
         "City": " Ipirá"
      },
      {
         "City": " Ipiaú"
      },
      {
         "City": " Iperó"
      },
      {
         "City": " Ipatinga"
      },
      {
         "City": " Ipameri"
      },
      {
         "City": " Ipaba"
      },
      {
         "City": " Inhumas"
      },
      {
         "City": " Indaiatuba"
      },
      {
         "City": " Indaial"
      },
      {
         "City": " Imbituva"
      },
      {
         "City": " Imbituba"
      },
      {
         "City": " Ilhéus"
      },
      {
         "City": " Ilha Solteira"
      },
      {
         "City": " Ilhabela"
      },
      {
         "City": " Ijuí"
      },
      {
         "City": " Iguape"
      },
      {
         "City": " Igrejinha"
      },
      {
         "City": " Igarapé"
      },
      {
         "City": " Igarapava"
      },
      {
         "City": " Igaraçu do Tietê"
      },
      {
         "City": " Içara"
      },
      {
         "City": " Ibotirama"
      },
      {
         "City": " Ibiúna"
      },
      {
         "City": " Ibitinga"
      },
      {
         "City": " Ibirité"
      },
      {
         "City": " Ibirataia"
      },
      {
         "City": " Ibirama"
      },
      {
         "City": " Ibiporã"
      },
      {
         "City": " Ibicaraí"
      },
      {
         "City": " Ibiá"
      },
      {
         "City": " Ibaté"
      },
      {
         "City": " Ibaiti"
      },
      {
         "City": " Iaçu"
      },
      {
         "City": " Hortolândia"
      },
      {
         "City": " Herval"
      },
      {
         "City": " Gurupi"
      },
      {
         "City": " Guaxupé"
      },
      {
         "City": " Guarulhos"
      },
      {
         "City": " Guarujá"
      },
      {
         "City": " Guariba"
      },
      {
         "City": " Guaratuba"
      },
      {
         "City": " Guaratinguetá"
      },
      {
         "City": " Guararema"
      },
      {
         "City": " Guararapes"
      },
      {
         "City": " Guarapuava"
      },
      {
         "City": " Guarapari"
      },
      {
         "City": " Guaranésia"
      },
      {
         "City": " Guaramirim"
      },
      {
         "City": " Guará"
      },
      {
         "City": " Guaporé"
      },
      {
         "City": " Guapimirim"
      },
      {
         "City": " Guanhães"
      },
      {
         "City": " Guanambi"
      },
      {
         "City": " Guaíra"
      },
      {
         "City": " Guaçuí"
      },
      {
         "City": " Gravataí"
      },
      {
         "City": " Governador Valadares"
      },
      {
         "City": " Goiatuba"
      },
      {
         "City": " Goiás"
      },
      {
         "City": " Goianira"
      },
      {
         "City": " Goiânia"
      },
      {
         "City": " Goianésia"
      },
      {
         "City": " Gaspar"
      },
      {
         "City": " Garibaldi"
      },
      {
         "City": " Garça"
      },
      {
         "City": " Gandu"
      },
      {
         "City": " Frutal"
      },
      {
         "City": " Frederico Westphalen"
      },
      {
         "City": " Franco da Rocha"
      },
      {
         "City": " Francisco Morato"
      },
      {
         "City": " Francisco Beltrão"
      },
      {
         "City": " Franca"
      },
      {
         "City": " Foz do Iguaçu"
      },
      {
         "City": " Forquilhinha"
      },
      {
         "City": " Formosa"
      },
      {
         "City": " Formiga"
      },
      {
         "City": " Florianópolis"
      },
      {
         "City": " Flores da Cunha"
      },
      {
         "City": " Ferraz de Vasconcelos"
      },
      {
         "City": " Fernandópolis"
      },
      {
         "City": " Feira de Santana"
      },
      {
         "City": " Farroupilha"
      },
      {
         "City": " Euclides da Cunha"
      },
      {
         "City": " Estrela"
      },
      {
         "City": " Esteio"
      },
      {
         "City": " Estância Velha"
      },
      {
         "City": " Estância"
      },
      {
         "City": " Esplanada"
      },
      {
         "City": " Espinosa"
      },
      {
         "City": " Esmeraldas"
      },
      {
         "City": " Erechim"
      },
      {
         "City": " Entre Rios"
      },
      {
         "City": " Encruzilhada do Sul"
      },
      {
         "City": " Encantado"
      },
      {
         "City": " Embu Guaçu"
      },
      {
         "City": " Embu"
      },
      {
         "City": " Elói Mendes"
      },
      {
         "City": " Duque de Caxias"
      },
      {
         "City": " Dourados"
      },
      {
         "City": " Dom Pedrito"
      },
      {
         "City": " Dois Vizinhos"
      },
      {
         "City": " Dois Córregos"
      },
      {
         "City": " Divinópolis"
      },
      {
         "City": " Diamantino"
      },
      {
         "City": " Diamantina"
      },
      {
         "City": " Diadema"
      },
      {
         "City": " Descalvado"
      },
      {
         "City": " Curvelo"
      },
      {
         "City": " Curitibanos"
      },
      {
         "City": " Curitiba"
      },
      {
         "City": " Cuiabá"
      },
      {
         "City": " Cubatão"
      },
      {
         "City": " Cruzeiro do Oeste"
      },
      {
         "City": " Cruzeiro"
      },
      {
         "City": " Cruz das Almas"
      },
      {
         "City": " Cruz Alta"
      },
      {
         "City": " Cristalina"
      },
      {
         "City": " Criciúma"
      },
      {
         "City": " Cravinhos"
      },
      {
         "City": " Coxim"
      },
      {
         "City": " Cotia"
      },
      {
         "City": " Cosmópolis"
      },
      {
         "City": " Coruripe"
      },
      {
         "City": " Corumbá"
      },
      {
         "City": " Coronel Vivida"
      },
      {
         "City": " Coronel Fabriciano"
      },
      {
         "City": " Coromandel"
      },
      {
         "City": " Cornélio Procópio"
      },
      {
         "City": " Corinto"
      },
      {
         "City": " Cordeirópolis"
      },
      {
         "City": " Cordeiro"
      },
      {
         "City": " Contagem"
      },
      {
         "City": " Conselheiro Lafaiete"
      },
      {
         "City": " Congonhas"
      },
      {
         "City": " Conde"
      },
      {
         "City": " Concórdia"
      },
      {
         "City": " Conchal"
      },
      {
         "City": " Conceição do Coité"
      },
      {
         "City": " Conceição do Jacuípe"
      },
      {
         "City": " Conceição das Alagoas"
      },
      {
         "City": " Conceição da Feira"
      },
      {
         "City": " Conceição da Barra"
      },
      {
         "City": " Colorado"
      },
      {
         "City": " Colombo"
      },
      {
         "City": " Colatina"
      },
      {
         "City": " Coaraci"
      },
      {
         "City": " Cláudio"
      },
      {
         "City": " Cícero Dantas"
      },
      {
         "City": " Cianorte"
      },
      {
         "City": " Charqueadas"
      },
      {
         "City": " Chapecó"
      },
      {
         "City": " Cerquilho"
      },
      {
         "City": " Ceres"
      },
      {
         "City": " Celso Ramos"
      },
      {
         "City": " Caxias do Sul"
      },
      {
         "City": " Caxambu"
      },
      {
         "City": " Catu"
      },
      {
         "City": " Catanduva"
      },
      {
         "City": " Catalão"
      },
      {
         "City": " Cataguases"
      },
      {
         "City": " Castro"
      },
      {
         "City": " Castelo"
      },
      {
         "City": " Cassilândia"
      },
      {
         "City": " Casimiro de Abreu"
      },
      {
         "City": " Cascavel"
      },
      {
         "City": " Casa Branca"
      },
      {
         "City": " Carmo do Paranaíba"
      },
      {
         "City": " Carmo do Cajuru"
      },
      {
         "City": " Carlos Barbosa"
      },
      {
         "City": " Carazinho"
      },
      {
         "City": " Caratinga"
      },
      {
         "City": " Carapicuíba"
      },
      {
         "City": " Carangola"
      },
      {
         "City": " Carandaí"
      },
      {
         "City": " Caraguatatuba"
      },
      {
         "City": " Capivari"
      },
      {
         "City": " Capinzal"
      },
      {
         "City": " Capim Grosso"
      },
      {
         "City": " Capelinha"
      },
      {
         "City": " Capela"
      },
      {
         "City": " Capão da Canoa"
      },
      {
         "City": " Capâo Bonito"
      },
      {
         "City": " Canoinhas"
      },
      {
         "City": " Canoas"
      },
      {
         "City": " Canguçu"
      },
      {
         "City": " Canela"
      },
      {
         "City": " Cândido Mota"
      },
      {
         "City": " Candelária"
      },
      {
         "City": " Canavieiras"
      },
      {
         "City": " Campo Verde"
      },
      {
         "City": " Campos Novos"
      },
      {
         "City": " Campos Gerais"
      },
      {
         "City": " Campos do Jordão"
      },
      {
         "City": " Campos Belos"
      },
      {
         "City": " Campos"
      },
      {
         "City": " Campo Mourão"
      },
      {
         "City": " Campo Largo"
      },
      {
         "City": " Campo Grande"
      },
      {
         "City": " Campo Formoso"
      },
      {
         "City": " Campo Belo"
      },
      {
         "City": " Campinas"
      },
      {
         "City": " Campina Grande do Sul"
      },
      {
         "City": " Cambuí"
      },
      {
         "City": " Cambé"
      },
      {
         "City": " Cambará"
      },
      {
         "City": " Camaquã"
      },
      {
         "City": " Camanducaia"
      },
      {
         "City": " Camaçari"
      },
      {
         "City": " Caldas Novas"
      },
      {
         "City": " Cajuru"
      },
      {
         "City": " Cajati"
      },
      {
         "City": " Cajamar"
      },
      {
         "City": " Caieiras"
      },
      {
         "City": " Caetité"
      },
      {
         "City": " Caeté"
      },
      {
         "City": " Cachoeiro de Itapemirim"
      },
      {
         "City": " Cachoeirinha"
      },
      {
         "City": " Cachoeiras de Macacu"
      },
      {
         "City": " Cachoeira do Sul"
      },
      {
         "City": " Cachoeira"
      },
      {
         "City": " Caçapava do Sul"
      },
      {
         "City": " Caçapava"
      },
      {
         "City": " Caçador"
      },
      {
         "City": " Cabreúva"
      },
      {
         "City": " Cabo Frio"
      },
      {
         "City": " Butiá"
      },
      {
         "City": " Buritizeiro"
      },
      {
         "City": " Buritis"
      },
      {
         "City": " Buri"
      },
      {
         "City": " Buerarema"
      },
      {
         "City": " Brusque"
      },
      {
         "City": " Brumado"
      },
      {
         "City": " Brumadinho"
      },
      {
         "City": " Brotas"
      },
      {
         "City": " Brodósqui"
      },
      {
         "City": " Brasília"
      },
      {
         "City": " Bragança Paulista"
      },
      {
         "City": " Braço do Norte"
      },
      {
         "City": " Botucatu"
      },
      {
         "City": " Bom Jesus do Itabapoana"
      },
      {
         "City": " Bom Jesus da Lapa"
      },
      {
         "City": " Bom Despacho"
      },
      {
         "City": " Boituva"
      },
      {
         "City": " Bocaiúva"
      },
      {
         "City": " Boa Esperança"
      },
      {
         "City": " Blumenau"
      },
      {
         "City": " Biritiba Mirim"
      },
      {
         "City": " Birigui"
      },
      {
         "City": " Biguaçu"
      },
      {
         "City": " Betim"
      },
      {
         "City": " Bertioga"
      },
      {
         "City": " Bento Gonçalves"
      },
      {
         "City": " Belo Oriente"
      },
      {
         "City": " Belo Horizonte"
      },
      {
         "City": " Belford Roxo"
      },
      {
         "City": " Bela Vista"
      },
      {
         "City": " Bebedouro"
      },
      {
         "City": " Bauru"
      },
      {
         "City": " Batatais"
      },
      {
         "City": " Bastos"
      },
      {
         "City": " Barueri"
      },
      {
         "City": " Barroso"
      },
      {
         "City": " Barrinha"
      },
      {
         "City": " Barretos"
      },
      {
         "City": " Barreiro do Jaíba"
      },
      {
         "City": " Barreiras"
      },
      {
         "City": " Barra Velha"
      },
      {
         "City": " Barra Mansa"
      },
      {
         "City": " Barra dos Coqueiros"
      },
      {
         "City": " Barra do Piraí"
      },
      {
         "City": " Barra do Garças"
      },
      {
         "City": " Barra do Bugres"
      },
      {
         "City": " Barra de São Francisco"
      },
      {
         "City": " Barra Bonita"
      },
      {
         "City": " Barra"
      },
      {
         "City": " Bariri"
      },
      {
         "City": " Barbacena"
      },
      {
         "City": " Barão de Cocais"
      },
      {
         "City": " Bandeirantes"
      },
      {
         "City": " Bambuí"
      },
      {
         "City": " Balneário Camboriú"
      },
      {
         "City": " Baixo Guandu"
      },
      {
         "City": " Bagé"
      },
      {
         "City": " Avaré"
      },
      {
         "City": " Atibaia"
      },
      {
         "City": " Astorga"
      },
      {
         "City": " Assis"
      },
      {
         "City": " Arujá"
      },
      {
         "City": " Artur Nogueira"
      },
      {
         "City": " Arroio Grande"
      },
      {
         "City": " Arroio do Meio"
      },
      {
         "City": " Arraial do Cabo"
      },
      {
         "City": " Armação de Búzios"
      },
      {
         "City": " Arcos"
      },
      {
         "City": " Araxá"
      },
      {
         "City": " Araucária"
      },
      {
         "City": " Araruama"
      },
      {
         "City": " Araras"
      },
      {
         "City": " Araraquara"
      },
      {
         "City": " Araranguá"
      },
      {
         "City": " Arapongas"
      },
      {
         "City": " Araguari"
      },
      {
         "City": " Aragarças"
      },
      {
         "City": " Araçuaí"
      },
      {
         "City": " Aracruz"
      },
      {
         "City": " Araçoiaba da Serra"
      },
      {
         "City": " Araci"
      },
      {
         "City": " Araçatuba"
      },
      {
         "City": " Aracaju"
      },
      {
         "City": " Aquidauana"
      },
      {
         "City": " Apucarana"
      },
      {
         "City": " Apiaí"
      },
      {
         "City": " Aparecida do Taboado"
      },
      {
         "City": " Aparecida"
      },
      {
         "City": " Antonina"
      },
      {
         "City": " Anicuns"
      },
      {
         "City": " Angra dos Reis"
      },
      {
         "City": " Andradina"
      },
      {
         "City": " Andradas"
      },
      {
         "City": " Anastácio"
      },
      {
         "City": " Anápolis"
      },
      {
         "City": " Amparo"
      },
      {
         "City": " Américo Brasiliense"
      },
      {
         "City": " Americana"
      },
      {
         "City": " Amargosa"
      },
      {
         "City": " Álvares Machado"
      },
      {
         "City": " Almirante Tamandaré"
      },
      {
         "City": " Almenara"
      },
      {
         "City": " Alfenas"
      },
      {
         "City": " Além Paraíba"
      },
      {
         "City": " Alegrete"
      },
      {
         "City": " Alegre"
      },
      {
         "City": " Alagoinhas"
      },
      {
         "City": " Aimorés"
      },
      {
         "City": " Agudos"
      },
      {
         "City": " Águas Vermelhas"
      },
      {
         "City": " Águas de Lindóia"
      },
      {
         "City": " Aguaí"
      },
      {
         "City": " Adamantina"
      },
      {
         "City": " Abaeté"
      },
      {
         "City": " Guaíba"
      },
      {
         "City": " Palmas"
      },
      {
         "City": " Tefé"
      },
      {
         "City": " Tarauacá"
      },
      {
         "City": " Tabatinga"
      },
      {
         "City": " Sena Madureira"
      },
      {
         "City": " São Gabriel da Cachoeira"
      },
      {
         "City": " Rio Branco"
      },
      {
         "City": " Porto Velho"
      },
      {
         "City": " Manaus"
      },
      {
         "City": " Manacapuru"
      },
      {
         "City": " Humaitá"
      },
      {
         "City": " Fonte Boa"
      },
      {
         "City": " Eirunepé"
      },
      {
         "City": " Cruzeiro do Sul"
      },
      {
         "City": " Coari"
      },
      {
         "City": " Carauari"
      },
      {
         "City": " Boa Vista"
      },
      {
         "City": " Ariquemes"
      },
      {
         "City": " Aripuanã"
      },
      {
         "City": " Vilhena"
      },
      {
         "City": " Pôsto Fiscal Rolim de Moura"
      },
      {
         "City": " Pimenta Bueno"
      },
      {
         "City": " Ouro Preto do Oeste"
      },
      {
         "City": " Ji Paraná"
      },
      {
         "City": " Jaru"
      },
      {
         "City": " Guajará Mirim"
      },
      {
         "City": " Cacoal"
      },
      {
         "City": " Aparecida de Goiânia"
      },
      {
         "City": " Campinas"
      },
      {
         "City": " Jaboatão dos Guararapes"
      },
      {
         "City": " Lauro de Freitas"
      },
      {
         "City": " Pinhais"
      },
      {
         "City": " Rio Preto da Eva"
      },
      {
         "City": " Simões Filho"
      },
      {
         "City": " Sinop"
      },
      {
         "City": " Cambebba"
      },
      {
         "City": " Trindade"
      },
      {
         "City": " Freguesia do Ribeirao da Ilha"
      }
   ],
   "Bahamas": [
      {
         "City": " Nassau"
      },
      {
         "City": " Lucaya"
      },
      {
         "City": " Freeport"
      }
   ],
   "Bhutan": [
      {
         "City": " Thimphu"
      },
      {
         "City": " Punākha"
      },
      {
         "City": " Phuntsholing"
      },
      {
         "City": " Tsirang"
      }
   ],
   "Botswana": [
      {
         "City": " Tonota"
      },
      {
         "City": " Thamaga"
      },
      {
         "City": " Serowe"
      },
      {
         "City": " Selebi-Phikwe"
      },
      {
         "City": " Ramotswa"
      },
      {
         "City": " Palapye"
      },
      {
         "City": " Mosopa"
      },
      {
         "City": " Molepolole"
      },
      {
         "City": " Mogoditshane"
      },
      {
         "City": " Mochudi"
      },
      {
         "City": " Maun"
      },
      {
         "City": " Mahalapye"
      },
      {
         "City": " Lobatse"
      },
      {
         "City": " Letlhakane"
      },
      {
         "City": " Kanye"
      },
      {
         "City": " Janeng"
      },
      {
         "City": " Gaborone"
      },
      {
         "City": " Francistown"
      }
   ],
   "Belarus": [
      {
         "City": " Horad Zhodzina"
      },
      {
         "City": " Zhlobin"
      },
      {
         "City": " Vitebsk"
      },
      {
         "City": " Vilyeyka"
      },
      {
         "City": " Vawkavysk"
      },
      {
         "City": " Svyetlahorsk"
      },
      {
         "City": " Stowbtsy"
      },
      {
         "City": " Smarhon’"
      },
      {
         "City": " Slutsk"
      },
      {
         "City": " Slonim"
      },
      {
         "City": " Shchuchin"
      },
      {
         "City": " Salihorsk"
      },
      {
         "City": " Rahachow"
      },
      {
         "City": " Rechytsa"
      },
      {
         "City": " Pruzhany"
      },
      {
         "City": " Polatsk"
      },
      {
         "City": " Pinsk"
      },
      {
         "City": " Pastavy"
      },
      {
         "City": " Asipovichy"
      },
      {
         "City": " Orsha"
      },
      {
         "City": " Novoye Medvezhino"
      },
      {
         "City": " Navapolatsk"
      },
      {
         "City": " Navahrudak"
      },
      {
         "City": " Minsk"
      },
      {
         "City": " Mazyr"
      },
      {
         "City": " Masty"
      },
      {
         "City": " Mar’’ina Horka"
      },
      {
         "City": " Maladzyechna"
      },
      {
         "City": " Mahilyow"
      },
      {
         "City": " Lyepyel’"
      },
      {
         "City": " Luninyets"
      },
      {
         "City": " Lida"
      },
      {
         "City": " Krychaw"
      },
      {
         "City": " Kalodzishchy"
      },
      {
         "City": " Kobryn"
      },
      {
         "City": " Kalinkavichy"
      },
      {
         "City": " Ivatsevichy"
      },
      {
         "City": " Hrodna"
      },
      {
         "City": " Horki"
      },
      {
         "City": " Gomel"
      },
      {
         "City": " Hlybokaye"
      },
      {
         "City": " Dzyarzhynsk"
      },
      {
         "City": " Dobrush"
      },
      {
         "City": " Bykhaw"
      },
      {
         "City": " Byaroza"
      },
      {
         "City": " Brest"
      },
      {
         "City": " Horad Barysaw"
      },
      {
         "City": " Baranovichi"
      },
      {
         "City": " Babruysk"
      },
      {
         "City": " Malinovka"
      }
   ],
   "Belize": [
      {
         "City": " San Ignacio"
      },
      {
         "City": " Orange Walk"
      },
      {
         "City": " Belmopan"
      },
      {
         "City": " Belize City"
      }
   ],
   "Canada": [
      {
         "City": " Abbotsford"
      },
      {
         "City": " Airdrie"
      },
      {
         "City": " Ajax"
      },
      {
         "City": " Alma"
      },
      {
         "City": " Amos"
      },
      {
         "City": " Anmore"
      },
      {
         "City": " Baie-Comeau"
      },
      {
         "City": " Barrie"
      },
      {
         "City": " Beaconsfield"
      },
      {
         "City": " Belleville"
      },
      {
         "City": " Beloeil"
      },
      {
         "City": " Blainville"
      },
      {
         "City": " Boisbriand"
      },
      {
         "City": " Boucherville"
      },
      {
         "City": " Bradford West Gwillimbury"
      },
      {
         "City": " Brampton"
      },
      {
         "City": " Brandon"
      },
      {
         "City": " Brant"
      },
      {
         "City": " Brantford"
      },
      {
         "City": " Brockville"
      },
      {
         "City": " Brossard"
      },
      {
         "City": " Burlington"
      },
      {
         "City": " Burnaby"
      },
      {
         "City": " Calgary"
      },
      {
         "City": " Cambridge"
      },
      {
         "City": " Campbell River"
      },
      {
         "City": " Camrose"
      },
      {
         "City": " Candiac"
      },
      {
         "City": " Chambly"
      },
      {
         "City": " Charlottetown"
      },
      {
         "City": " Châteauguay"
      },
      {
         "City": " Chilliwack"
      },
      {
         "City": " Clarence-Rockland"
      },
      {
         "City": " Cobourg"
      },
      {
         "City": " Cochrane"
      },
      {
         "City": " Collingwood"
      },
      {
         "City": " Conception Bay South"
      },
      {
         "City": " Coquitlam"
      },
      {
         "City": " Corner Brook"
      },
      {
         "City": " Cornwall"
      },
      {
         "City": " Côte-Saint-Luc"
      },
      {
         "City": " Courtenay"
      },
      {
         "City": " Cranbrook"
      },
      {
         "City": " Dartmouth"
      },
      {
         "City": " Delta"
      },
      {
         "City": " Deux-Montagnes"
      },
      {
         "City": " Dieppe"
      },
      {
         "City": " Dollard-Des Ormeaux"
      },
      {
         "City": " Dorval"
      },
      {
         "City": " Drummondville"
      },
      {
         "City": " Duncan"
      },
      {
         "City": " Edmonton"
      },
      {
         "City": " Etobicoke"
      },
      {
         "City": " Fort Erie"
      },
      {
         "City": " Fort McMurray"
      },
      {
         "City": " Fort St. John"
      },
      {
         "City": " Fredericton"
      },
      {
         "City": " Gatineau"
      },
      {
         "City": " Glace Bay"
      },
      {
         "City": " Granby"
      },
      {
         "City": " Grande Prairie"
      },
      {
         "City": " Greater Sudbury"
      },
      {
         "City": " Greater Napanee"
      },
      {
         "City": " Guelph"
      },
      {
         "City": " Hamilton"
      },
      {
         "City": " Huntsville"
      },
      {
         "City": " Joliette"
      },
      {
         "City": " Kamloops"
      },
      {
         "City": " Kelowna"
      },
      {
         "City": " Keswick"
      },
      {
         "City": " Kingston"
      },
      {
         "City": " Kirkland"
      },
      {
         "City": " Kitchener"
      },
      {
         "City": " Langford"
      },
      {
         "City": " Langley"
      },
      {
         "City": " Langley"
      },
      {
         "City": " La Prairie"
      },
      {
         "City": " L'Assomption"
      },
      {
         "City": " Laval"
      },
      {
         "City": " Leduc"
      },
      {
         "City": " Lethbridge"
      },
      {
         "City": " Lloydminster"
      },
      {
         "City": " London"
      },
      {
         "City": " Longueuil"
      },
      {
         "City": " Magog"
      },
      {
         "City": " Maple Ridge"
      },
      {
         "City": " Markham"
      },
      {
         "City": " Mascouche"
      },
      {
         "City": " Medicine Hat"
      },
      {
         "City": " Midland"
      },
      {
         "City": " Milton"
      },
      {
         "City": " Mirabel"
      },
      {
         "City": " Miramichi"
      },
      {
         "City": " Mississauga"
      },
      {
         "City": " Moncton"
      },
      {
         "City": " Montréal"
      },
      {
         "City": " Mont-Royal"
      },
      {
         "City": " Mont-Saint-Hilaire"
      },
      {
         "City": " Moose Jaw"
      },
      {
         "City": " Mount Pearl"
      },
      {
         "City": " Nanaimo"
      },
      {
         "City": " New Glasgow"
      },
      {
         "City": " Newmarket"
      },
      {
         "City": " New Westminster"
      },
      {
         "City": " Niagara Falls"
      },
      {
         "City": " Norfolk County"
      },
      {
         "City": " North Battleford"
      },
      {
         "City": " North Bay"
      },
      {
         "City": " North Cowichan"
      },
      {
         "City": " North Vancouver"
      },
      {
         "City": " North York"
      },
      {
         "City": " Oak Bay"
      },
      {
         "City": " Oakville"
      },
      {
         "City": " Orangeville"
      },
      {
         "City": " Orillia"
      },
      {
         "City": " Oshawa"
      },
      {
         "City": " Ottawa"
      },
      {
         "City": " Owen Sound"
      },
      {
         "City": " Parksville"
      },
      {
         "City": " Pembroke"
      },
      {
         "City": " Penticton"
      },
      {
         "City": " Petawawa"
      },
      {
         "City": " Peterborough"
      },
      {
         "City": " Pickering"
      },
      {
         "City": " Pitt Meadows"
      },
      {
         "City": " Pointe-Claire"
      },
      {
         "City": " Port Alberni"
      },
      {
         "City": " Port Colborne"
      },
      {
         "City": " Port Moody"
      },
      {
         "City": " Prince Albert"
      },
      {
         "City": " Prince Edward"
      },
      {
         "City": " Prince George"
      },
      {
         "City": " Quinte West"
      },
      {
         "City": " Rayside-Balfour"
      },
      {
         "City": " Red Deer"
      },
      {
         "City": " Regina"
      },
      {
         "City": " Repentigny"
      },
      {
         "City": " Richmond"
      },
      {
         "City": " Richmond Hill"
      },
      {
         "City": " Rouyn-Noranda"
      },
      {
         "City": " Saguenay"
      },
      {
         "City": " Saint-Basile-le-Grand"
      },
      {
         "City": " Saint-Bruno-de-Montarville"
      },
      {
         "City": " Saint-Constant"
      },
      {
         "City": " Sainte-Catherine"
      },
      {
         "City": " Sainte-Julie"
      },
      {
         "City": " Sainte-Thérèse"
      },
      {
         "City": " Saint-Eustache"
      },
      {
         "City": " Saint-Hyacinthe"
      },
      {
         "City": " Saint-Jean-sur-Richelieu"
      },
      {
         "City": " Saint-Jérôme"
      },
      {
         "City": " Saint John"
      },
      {
         "City": " Saint-Laurent"
      },
      {
         "City": " Saint-Lazare"
      },
      {
         "City": " Saint-Léonard"
      },
      {
         "City": " Salaberry-de-Valleyfield"
      },
      {
         "City": " Salmon Arm"
      },
      {
         "City": " Sarnia"
      },
      {
         "City": " Saskatoon"
      },
      {
         "City": " Sault Ste. Marie"
      },
      {
         "City": " Sept-Îles"
      },
      {
         "City": " Shawinigan"
      },
      {
         "City": " Sherbrooke"
      },
      {
         "City": " Sherwood Park"
      },
      {
         "City": " Sorel-Tracy"
      },
      {
         "City": " Spruce Grove"
      },
      {
         "City": " St. Albert"
      },
      {
         "City": " St. Catharines"
      },
      {
         "City": " Stratford"
      },
      {
         "City": " St. Thomas"
      },
      {
         "City": " Surrey"
      },
      {
         "City": " Terrace"
      },
      {
         "City": " Terrebonne"
      },
      {
         "City": " Thorold"
      },
      {
         "City": " Thunder Bay"
      },
      {
         "City": " Timmins"
      },
      {
         "City": " Toronto"
      },
      {
         "City": " Trois-Rivières"
      },
      {
         "City": " Truro"
      },
      {
         "City": " Val-d'Or"
      },
      {
         "City": " Vancouver"
      },
      {
         "City": " Varennes"
      },
      {
         "City": " Vaudreuil-Dorion"
      },
      {
         "City": " Vaughan"
      },
      {
         "City": " Vernon"
      },
      {
         "City": " Victoria"
      },
      {
         "City": " Victoriaville"
      },
      {
         "City": " Waterloo"
      },
      {
         "City": " Welland"
      },
      {
         "City": " West End"
      },
      {
         "City": " Westmount"
      },
      {
         "City": " Whitehorse"
      },
      {
         "City": " White Rock"
      },
      {
         "City": " Windsor"
      },
      {
         "City": " Winnipeg"
      },
      {
         "City": " Woodstock"
      },
      {
         "City": " Yellowknife"
      },
      {
         "City": " Yorkton"
      },
      {
         "City": " Halifax"
      },
      {
         "City": " St. John's"
      },
      {
         "City": " Québec"
      },
      {
         "City": " Lévis"
      },
      {
         "City": " Rimouski"
      },
      {
         "City": " Rivière-du-Loup"
      },
      {
         "City": " Sydney"
      },
      {
         "City": " L'Ancienne-Lorette"
      },
      {
         "City": " Edmundston"
      },
      {
         "City": " Thetford-Mines"
      },
      {
         "City": " Scarborough"
      },
      {
         "City": " Cole Harbour"
      },
      {
         "City": " Okanagan"
      },
      {
         "City": " West Kelowna"
      },
      {
         "City": " Bellechasse Regional County Municipality"
      },
      {
         "City": " Jonquière"
      },
      {
         "City": " Saint-Augustin-de-Desmaures"
      },
      {
         "City": " Ladner"
      },
      {
         "City": " Walnut Grove"
      },
      {
         "City": " Ancaster"
      },
      {
         "City": " West Vancouver"
      },
      {
         "City": " Willowdale"
      },
      {
         "City": " Lower Sacvkille"
      }
   ],
   "Cocos Islands": [
      {
         "City": " West Island"
      }
   ],
   "Democratic Republic of the Congo": [
      {
         "City": " Yangambi"
      },
      {
         "City": " Watsa"
      },
      {
         "City": " Wamba"
      },
      {
         "City": " Uvira"
      },
      {
         "City": " Tshikapa"
      },
      {
         "City": " Sake"
      },
      {
         "City": " Mwene-Ditu"
      },
      {
         "City": " Mweka"
      },
      {
         "City": " Mbuji-Mayi"
      },
      {
         "City": " Lusambo"
      },
      {
         "City": " Luebo"
      },
      {
         "City": " Lubao"
      },
      {
         "City": " Lodja"
      },
      {
         "City": " Lisala"
      },
      {
         "City": " Kongolo"
      },
      {
         "City": " Kisangani"
      },
      {
         "City": " Kindu"
      },
      {
         "City": " Kasongo"
      },
      {
         "City": " Kananga"
      },
      {
         "City": " Kampene"
      },
      {
         "City": " Kamina"
      },
      {
         "City": " Kalemie"
      },
      {
         "City": " Kabinda"
      },
      {
         "City": " Kabare"
      },
      {
         "City": " Kabalo"
      },
      {
         "City": " Isiro"
      },
      {
         "City": " Ilebo"
      },
      {
         "City": " Goma"
      },
      {
         "City": " Gbadolite"
      },
      {
         "City": " Gandajika"
      },
      {
         "City": " Demba"
      },
      {
         "City": " Butembo"
      },
      {
         "City": " Buta"
      },
      {
         "City": " Businga"
      },
      {
         "City": " Bunia"
      },
      {
         "City": " Bumba"
      },
      {
         "City": " Bukavu"
      },
      {
         "City": " Bukama"
      },
      {
         "City": " Bondo"
      },
      {
         "City": " Boende"
      },
      {
         "City": " Beni"
      },
      {
         "City": " Basoko"
      },
      {
         "City": " Aketi"
      },
      {
         "City": " Lubumbashi"
      },
      {
         "City": " Likasi"
      },
      {
         "City": " Kolwezi"
      },
      {
         "City": " Kipushi"
      },
      {
         "City": " Kambove"
      },
      {
         "City": " Tshela"
      },
      {
         "City": " Nioki"
      },
      {
         "City": " Mushie"
      },
      {
         "City": " Mbanza-Ngungu"
      },
      {
         "City": " Mbandaka"
      },
      {
         "City": " Matadi"
      },
      {
         "City": " Mangai"
      },
      {
         "City": " Libenge"
      },
      {
         "City": " Kinshasa"
      },
      {
         "City": " Kikwit"
      },
      {
         "City": " Kasongo-Lunda"
      },
      {
         "City": " Kasangulu"
      },
      {
         "City": " Inongo"
      },
      {
         "City": " Gemena"
      },
      {
         "City": " Bulungu"
      },
      {
         "City": " Bolobo"
      },
      {
         "City": " Bandundu"
      },
      {
         "City": " Masina"
      }
   ],
   "Central African Republic": [
      {
         "City": " Mobaye"
      },
      {
         "City": " Ippy"
      },
      {
         "City": " Bria"
      },
      {
         "City": " Bangassou"
      },
      {
         "City": " Bambari"
      },
      {
         "City": " Sibut"
      },
      {
         "City": " Paoua"
      },
      {
         "City": " Nola"
      },
      {
         "City": " Mbaïki"
      },
      {
         "City": " Kaga Bandoro"
      },
      {
         "City": " Damara"
      },
      {
         "City": " Carnot"
      },
      {
         "City": " Bozoum"
      },
      {
         "City": " Bouar"
      },
      {
         "City": " Bossangoa"
      },
      {
         "City": " Boda"
      },
      {
         "City": " Bimbo"
      },
      {
         "City": " Berbérati"
      },
      {
         "City": " Batangafo"
      },
      {
         "City": " Bangui"
      }
   ],
   "Republic of the Congo": [
      {
         "City": " Sibiti"
      },
      {
         "City": " Pointe-Noire"
      },
      {
         "City": " Owando"
      },
      {
         "City": " Ouésso"
      },
      {
         "City": " Mossendjo"
      },
      {
         "City": " Madingou"
      },
      {
         "City": " Dolisie"
      },
      {
         "City": " Loandjili"
      },
      {
         "City": " Kayes"
      },
      {
         "City": " Impfondo"
      },
      {
         "City": " Gamboma"
      },
      {
         "City": " Brazzaville"
      }
   ],
   "Switzerland": [
      {
         "City": " Zürich"
      },
      {
         "City": " Zug"
      },
      {
         "City": " Yverdon-les-Bains"
      },
      {
         "City": " Winterthur"
      },
      {
         "City": " Wil"
      },
      {
         "City": " Wettingen"
      },
      {
         "City": " Vevey"
      },
      {
         "City": " Vernier"
      },
      {
         "City": " Uster"
      },
      {
         "City": " Thun"
      },
      {
         "City": " Steffisburg"
      },
      {
         "City": " Sitten"
      },
      {
         "City": " Sierre"
      },
      {
         "City": " Zürich (Kreis 11) / Seebach"
      },
      {
         "City": " Schaffhausen"
      },
      {
         "City": " Sankt Gallen"
      },
      {
         "City": " Renens"
      },
      {
         "City": " Rapperswil"
      },
      {
         "City": " Pully"
      },
      {
         "City": " Onex"
      },
      {
         "City": " Olten"
      },
      {
         "City": " Zürich (Kreis 11) / Oerlikon"
      },
      {
         "City": " Nyon"
      },
      {
         "City": " Neuchâtel"
      },
      {
         "City": " Muttenz"
      },
      {
         "City": " Montreux"
      },
      {
         "City": " Monthey"
      },
      {
         "City": " Meyrin"
      },
      {
         "City": " Luzern"
      },
      {
         "City": " Lugano"
      },
      {
         "City": " Littau"
      },
      {
         "City": " Le Châtelard"
      },
      {
         "City": " Lausanne"
      },
      {
         "City": " La Chaux-de-Fonds"
      },
      {
         "City": " Kriens"
      },
      {
         "City": " Kreuzlingen"
      },
      {
         "City": " Köniz"
      },
      {
         "City": " Kloten"
      },
      {
         "City": " Jona"
      },
      {
         "City": " Horgen"
      },
      {
         "City": " Zürich (Kreis 10) / Höngg"
      },
      {
         "City": " Herisau"
      },
      {
         "City": " Grenchen"
      },
      {
         "City": " Gossau"
      },
      {
         "City": " Genève"
      },
      {
         "City": " Fribourg"
      },
      {
         "City": " Frauenfeld"
      },
      {
         "City": " Emmen"
      },
      {
         "City": " Dübendorf"
      },
      {
         "City": " Dietikon"
      },
      {
         "City": " Chur"
      },
      {
         "City": " Carouge"
      },
      {
         "City": " Biel/Bienne"
      },
      {
         "City": " Bern"
      },
      {
         "City": " Bellinzona"
      },
      {
         "City": " Basel"
      },
      {
         "City": " Baden"
      },
      {
         "City": " Baar"
      },
      {
         "City": " Zürich (Kreis 4)"
      },
      {
         "City": " Allschwil"
      },
      {
         "City": " Adliswil"
      },
      {
         "City": " Aarau"
      },
      {
         "City": " Riehen"
      },
      {
         "City": " Zürich (Kreis 10) / Wipkingen"
      },
      {
         "City": " Zürich (Kreis 11) / Affoltern"
      },
      {
         "City": " Zürich (Kreis 2) / Wollishofen"
      },
      {
         "City": " Zürich (Kreis 3) / Sihlfeld"
      },
      {
         "City": " Zürich (Kreis 6) / Unterstrass"
      },
      {
         "City": " Zürich (Kreis 9) / Albisrieden"
      },
      {
         "City": " Zürich (Kreis 9) / Altstetten"
      },
      {
         "City": " Stadt Winterthur (Kreis 1)"
      },
      {
         "City": " Zürich (Kreis 12)"
      },
      {
         "City": " Seen (Kreis 3)"
      },
      {
         "City": " Zürich (Kreis 3)"
      },
      {
         "City": " Zürich (Kreis 11)"
      },
      {
         "City": " Zürich (Kreis 9)"
      },
      {
         "City": " Oberwinterthur (Kreis 2)"
      },
      {
         "City": " Zürich (Kreis 10)"
      },
      {
         "City": " Zürich (Kreis 2)"
      },
      {
         "City": " Zürich (Kreis 8)"
      },
      {
         "City": " Zürich (Kreis 7)"
      },
      {
         "City": " Zürich (Kreis 6)"
      },
      {
         "City": " Lancy"
      }
   ],
   "Ivory Coast": [
      {
         "City": " Zuénoula"
      },
      {
         "City": " Yamoussoukro"
      },
      {
         "City": " Vavoua"
      },
      {
         "City": " Toumodi"
      },
      {
         "City": " Touba"
      },
      {
         "City": " Tengrela"
      },
      {
         "City": " Tiassalé"
      },
      {
         "City": " Tanda"
      },
      {
         "City": " Tabou"
      },
      {
         "City": " Sinfra"
      },
      {
         "City": " Sassandra"
      },
      {
         "City": " San-Pédro"
      },
      {
         "City": " Sakassou"
      },
      {
         "City": " Oumé"
      },
      {
         "City": " Odienné"
      },
      {
         "City": " Mankono"
      },
      {
         "City": " Man"
      },
      {
         "City": " Lakota"
      },
      {
         "City": " Korhogo"
      },
      {
         "City": " Katiola"
      },
      {
         "City": " Issia"
      },
      {
         "City": " Guiglo"
      },
      {
         "City": " Grand-Bassam"
      },
      {
         "City": " Affery"
      },
      {
         "City": " Gagnoa"
      },
      {
         "City": " Ferkessédougou"
      },
      {
         "City": " Duekoué"
      },
      {
         "City": " Divo"
      },
      {
         "City": " Dimbokro"
      },
      {
         "City": " Daoukro"
      },
      {
         "City": " Danané"
      },
      {
         "City": " Daloa"
      },
      {
         "City": " Dabou"
      },
      {
         "City": " Boundiali"
      },
      {
         "City": " Bouna"
      },
      {
         "City": " Bouaké"
      },
      {
         "City": " Bouaflé"
      },
      {
         "City": " Bonoua"
      },
      {
         "City": " Bongouanou"
      },
      {
         "City": " Bondoukou"
      },
      {
         "City": " Bingerville"
      },
      {
         "City": " Biankouma"
      },
      {
         "City": " Béoumi"
      },
      {
         "City": " Bangolo"
      },
      {
         "City": " Arrah"
      },
      {
         "City": " Anyama"
      },
      {
         "City": " Akoupé"
      },
      {
         "City": " Agnibilékrou"
      },
      {
         "City": " Agboville"
      },
      {
         "City": " Adzopé"
      },
      {
         "City": " Adiaké"
      },
      {
         "City": " Aboisso"
      },
      {
         "City": " Abobo"
      },
      {
         "City": " Abidjan"
      },
      {
         "City": " Abengourou"
      },
      {
         "City": " Séguéla"
      },
      {
         "City": " Soubré"
      }
   ],
   "Cook Islands": [
      {
         "City": " Avarua"
      }
   ],
   "Chile": [
      {
         "City": " Viña del Mar"
      },
      {
         "City": " Villarrica"
      },
      {
         "City": " Villa Alemana"
      },
      {
         "City": " Victoria"
      },
      {
         "City": " Valparaíso"
      },
      {
         "City": " Vallenar"
      },
      {
         "City": " Valdivia"
      },
      {
         "City": " Tomé"
      },
      {
         "City": " Tocopilla"
      },
      {
         "City": " Temuco"
      },
      {
         "City": " Talcahuano"
      },
      {
         "City": " Talca"
      },
      {
         "City": " Talagante"
      },
      {
         "City": " San Vicente de Tagua Tagua"
      },
      {
         "City": " San Vicente"
      },
      {
         "City": " Santiago"
      },
      {
         "City": " Santa Cruz"
      },
      {
         "City": " San Javier"
      },
      {
         "City": " San Felipe"
      },
      {
         "City": " San Carlos"
      },
      {
         "City": " San Bernardo"
      },
      {
         "City": " San Antonio"
      },
      {
         "City": " Río Bueno"
      },
      {
         "City": " Rengo"
      },
      {
         "City": " Rancagua"
      },
      {
         "City": " Quilpué"
      },
      {
         "City": " Quillota"
      },
      {
         "City": " Punta Arenas"
      },
      {
         "City": " Puerto Varas"
      },
      {
         "City": " Puerto Quellón"
      },
      {
         "City": " Puerto Natales"
      },
      {
         "City": " Puerto Montt"
      },
      {
         "City": " Puerto Aisén"
      },
      {
         "City": " Puente Alto"
      },
      {
         "City": " Pucón"
      },
      {
         "City": " Penco"
      },
      {
         "City": " Peñaflor"
      },
      {
         "City": " Parral"
      },
      {
         "City": " Panguipulli"
      },
      {
         "City": " Paine"
      },
      {
         "City": " Ovalle"
      },
      {
         "City": " Osorno"
      },
      {
         "City": " Nueva Imperial"
      },
      {
         "City": " Nacimiento"
      },
      {
         "City": " Mulchén"
      },
      {
         "City": " Molina"
      },
      {
         "City": " Melipilla"
      },
      {
         "City": " Machalí"
      },
      {
         "City": " Lota"
      },
      {
         "City": " Los Ángeles"
      },
      {
         "City": " Los Andes"
      },
      {
         "City": " Loncoche"
      },
      {
         "City": " Llaillay"
      },
      {
         "City": " Linares"
      },
      {
         "City": " Limache"
      },
      {
         "City": " Lebu"
      },
      {
         "City": " Lautaro"
      },
      {
         "City": " La Unión"
      },
      {
         "City": " La Serena"
      },
      {
         "City": " Lampa"
      },
      {
         "City": " La Ligua"
      },
      {
         "City": " La Laja"
      },
      {
         "City": " Iquique"
      },
      {
         "City": " Illapel"
      },
      {
         "City": " Hacienda La Calera"
      },
      {
         "City": " Graneros"
      },
      {
         "City": " Frutillar"
      },
      {
         "City": " El Monte"
      },
      {
         "City": " Diego de Almagro"
      },
      {
         "City": " Curicó"
      },
      {
         "City": " Curanilahue"
      },
      {
         "City": " Coronel"
      },
      {
         "City": " Coquimbo"
      },
      {
         "City": " Copiapó"
      },
      {
         "City": " Constitución"
      },
      {
         "City": " Concepción"
      },
      {
         "City": " Collipulli"
      },
      {
         "City": " Coihaique"
      },
      {
         "City": " Chimbarongo"
      },
      {
         "City": " Chillán"
      },
      {
         "City": " Chiguayante"
      },
      {
         "City": " Chicureo Abajo"
      },
      {
         "City": " Cauquenes"
      },
      {
         "City": " Castro"
      },
      {
         "City": " Cartagena"
      },
      {
         "City": " Cañete"
      },
      {
         "City": " Calama"
      },
      {
         "City": " Cabrero"
      },
      {
         "City": " Buin"
      },
      {
         "City": " Arica"
      },
      {
         "City": " Arauco"
      },
      {
         "City": " Antofagasta"
      },
      {
         "City": " Angol"
      },
      {
         "City": " Ancud"
      },
      {
         "City": " Las Animas"
      },
      {
         "City": " La Pintana"
      },
      {
         "City": " Lo Prado"
      }
   ],
   "Cameroon": [
      {
         "City": " Yaoundé"
      },
      {
         "City": " Yagoua"
      },
      {
         "City": " Wum"
      },
      {
         "City": " Tonga"
      },
      {
         "City": " Tiko"
      },
      {
         "City": " Tibati"
      },
      {
         "City": " Tcholliré"
      },
      {
         "City": " Sangmélima"
      },
      {
         "City": " Penja"
      },
      {
         "City": " Obala"
      },
      {
         "City": " Nkoteng"
      },
      {
         "City": " Nkongsamba"
      },
      {
         "City": " Ngaoundéré"
      },
      {
         "City": " Nanga Eboko"
      },
      {
         "City": " Muyuka"
      },
      {
         "City": " Mutengene"
      },
      {
         "City": " Mora"
      },
      {
         "City": " Mokolo"
      },
      {
         "City": " Melong"
      },
      {
         "City": " Meïganga"
      },
      {
         "City": " Mbouda"
      },
      {
         "City": " Mbanga"
      },
      {
         "City": " Mbandjok"
      },
      {
         "City": " Mbalmayo"
      },
      {
         "City": " Maroua"
      },
      {
         "City": " Manjo"
      },
      {
         "City": " Mamfe"
      },
      {
         "City": " Loum"
      },
      {
         "City": " Lolodorf"
      },
      {
         "City": " Limbe"
      },
      {
         "City": " Lagdo"
      },
      {
         "City": " Kumbo"
      },
      {
         "City": " Kumba"
      },
      {
         "City": " Kribi"
      },
      {
         "City": " Kousséri"
      },
      {
         "City": " Kaélé"
      },
      {
         "City": " Guider"
      },
      {
         "City": " Garoua Boulaï"
      },
      {
         "City": " Garoua"
      },
      {
         "City": " Fundong"
      },
      {
         "City": " Foumbot"
      },
      {
         "City": " Foumban"
      },
      {
         "City": " Fontem"
      },
      {
         "City": " Eséka"
      },
      {
         "City": " Edéa"
      },
      {
         "City": " Ébolowa"
      },
      {
         "City": " Dschang"
      },
      {
         "City": " Douala"
      },
      {
         "City": " Dizangué"
      },
      {
         "City": " Buea"
      },
      {
         "City": " Bogo"
      },
      {
         "City": " Bertoua"
      },
      {
         "City": " Bélabo"
      },
      {
         "City": " Batouri"
      },
      {
         "City": " Banyo"
      },
      {
         "City": " Bangangté"
      },
      {
         "City": " Bamusso"
      },
      {
         "City": " Bamenda"
      },
      {
         "City": " Bali"
      },
      {
         "City": " Bafoussam"
      },
      {
         "City": " Bafia"
      },
      {
         "City": " Bafang"
      },
      {
         "City": " Akonolinga"
      },
      {
         "City": " Idenao"
      }
   ],
   "China": [
      {
         "City": " Rikaze"
      },
      {
         "City": " Jiuquan"
      },
      {
         "City": " Shache"
      },
      {
         "City": " Qamdo"
      },
      {
         "City": " Nagqu"
      },
      {
         "City": " Lhasa"
      },
      {
         "City": " Laojunmiao"
      },
      {
         "City": " Kashgar"
      },
      {
         "City": " Jiayuguan"
      },
      {
         "City": " Hotan"
      },
      {
         "City": " Dêqên"
      },
      {
         "City": " Ürümqi"
      },
      {
         "City": " Laochenglu"
      },
      {
         "City": " Shihezi"
      },
      {
         "City": " Kuche"
      },
      {
         "City": " Sayibage"
      },
      {
         "City": " Hoxtolgay"
      },
      {
         "City": " Hami"
      },
      {
         "City": " Changji"
      },
      {
         "City": " Baijiantan"
      },
      {
         "City": " Aral"
      },
      {
         "City": " Altay"
      },
      {
         "City": " Yingbazha"
      },
      {
         "City": " Zunyi"
      },
      {
         "City": " Zoucheng"
      },
      {
         "City": " Yanjiang"
      },
      {
         "City": " Zigong"
      },
      {
         "City": " Zhuzhou"
      },
      {
         "City": " Zhumadian"
      },
      {
         "City": " Zhujiajiao"
      },
      {
         "City": " Shangqiu"
      },
      {
         "City": " Zhuji"
      },
      {
         "City": " Mizhou"
      },
      {
         "City": " Zhuanghe"
      },
      {
         "City": " Zhouzhuang"
      },
      {
         "City": " Zhoukou"
      },
      {
         "City": " Zhoucun"
      },
      {
         "City": " Yuxi"
      },
      {
         "City": " Zhongxing"
      },
      {
         "City": " Zhongshu"
      },
      {
         "City": " Zhicheng"
      },
      {
         "City": " Zhicheng"
      },
      {
         "City": " Zhenzhou"
      },
      {
         "City": " Zhenjiang"
      },
      {
         "City": " Zhaobaoshan"
      },
      {
         "City": " Zhengzhou"
      },
      {
         "City": " Xinghua"
      },
      {
         "City": " Zhaotong"
      },
      {
         "City": " Zhaoqing"
      },
      {
         "City": " Zhaogezhuang"
      },
      {
         "City": " Luofeng"
      },
      {
         "City": " Zhanjiang"
      },
      {
         "City": " Zhangzhou"
      },
      {
         "City": " Zhangye"
      },
      {
         "City": " Zibo"
      },
      {
         "City": " Anyang"
      },
      {
         "City": " Zaozhuang"
      },
      {
         "City": " Zaoyang"
      },
      {
         "City": " Yuyao"
      },
      {
         "City": " Yingchuan"
      },
      {
         "City": " Yuxia"
      },
      {
         "City": " Kunshan"
      },
      {
         "City": " Yunyang"
      },
      {
         "City": " Yunmeng Chengguanzhen"
      },
      {
         "City": " Jinghong"
      },
      {
         "City": " Pizhou"
      },
      {
         "City": " Yunfu"
      },
      {
         "City": " Yuncheng"
      },
      {
         "City": " Yulin"
      },
      {
         "City": " Yulin"
      },
      {
         "City": " Yudong"
      },
      {
         "City": " Yuci"
      },
      {
         "City": " Yucheng"
      },
      {
         "City": " Yuanping"
      },
      {
         "City": " Qianjiang"
      },
      {
         "City": " Heyuan"
      },
      {
         "City": " Yongfeng"
      },
      {
         "City": " Yongchuan"
      },
      {
         "City": " Yishui"
      },
      {
         "City": " Zhongxiang"
      },
      {
         "City": " Yingshang Chengguanzhen"
      },
      {
         "City": " Chengzhong"
      },
      {
         "City": " Yinchuan"
      },
      {
         "City": " Yima"
      },
      {
         "City": " Yigou"
      },
      {
         "City": " Qingzhou"
      },
      {
         "City": " Yichun"
      },
      {
         "City": " Yicheng"
      },
      {
         "City": " Yicheng"
      },
      {
         "City": " Yichang"
      },
      {
         "City": " Yibin"
      },
      {
         "City": " Yatou"
      },
      {
         "City": " Yashan"
      },
      {
         "City": " Yanzhou"
      },
      {
         "City": " Yantai"
      },
      {
         "City": " Yanliang"
      },
      {
         "City": " Yangzhou"
      },
      {
         "City": " Yangshuo"
      },
      {
         "City": " Zhangjiagang"
      },
      {
         "City": " Yangquan"
      },
      {
         "City": " Yangliuqing"
      },
      {
         "City": " Yanggu"
      },
      {
         "City": " Yangcun"
      },
      {
         "City": " Yancheng"
      },
      {
         "City": " Tongshan"
      },
      {
         "City": " Xucheng"
      },
      {
         "City": " Shangrao"
      },
      {
         "City": " Xunchang"
      },
      {
         "City": " Jiangguanchi"
      },
      {
         "City": " Xuanzhou"
      },
      {
         "City": " Xixiang"
      },
      {
         "City": " Xiuying"
      },
      {
         "City": " Xiulin"
      },
      {
         "City": " Xiongzhou"
      },
      {
         "City": " Guixi"
      },
      {
         "City": " Xinzhou"
      },
      {
         "City": " Xinzhou"
      },
      {
         "City": " Xinzhi"
      },
      {
         "City": " Xinyu"
      },
      {
         "City": " Hancheng"
      },
      {
         "City": " Xinyang"
      },
      {
         "City": " Nangandao"
      },
      {
         "City": " Xintai"
      },
      {
         "City": " Xinshi"
      },
      {
         "City": " Xinpu"
      },
      {
         "City": " Xinji"
      },
      {
         "City": " Xining"
      },
      {
         "City": " Shangmei"
      },
      {
         "City": " Xingtai"
      },
      {
         "City": " Ankang"
      },
      {
         "City": " Xindian"
      },
      {
         "City": " Xindi"
      },
      {
         "City": " Feicheng"
      },
      {
         "City": " Sanshui"
      },
      {
         "City": " Ximei"
      },
      {
         "City": " Wacheng"
      },
      {
         "City": " Xihe"
      },
      {
         "City": " Xichang"
      },
      {
         "City": " Xiazhuang"
      },
      {
         "City": " Xiazhen"
      },
      {
         "City": " Xiashi"
      },
      {
         "City": " Zijinglu"
      },
      {
         "City": " Xiaoweizhai"
      },
      {
         "City": " Xiaoshan"
      },
      {
         "City": " Xiaolingwei"
      },
      {
         "City": " Xiaogan"
      },
      {
         "City": " Xianyang"
      },
      {
         "City": " Xiantao"
      },
      {
         "City": " Xianshuigu"
      },
      {
         "City": " Xiannü"
      },
      {
         "City": " Xianning"
      },
      {
         "City": " Xianju"
      },
      {
         "City": " Zhuhai"
      },
      {
         "City": " Wenxing"
      },
      {
         "City": " Xiangxiang"
      },
      {
         "City": " Xiangtan"
      },
      {
         "City": " Xiangyang"
      },
      {
         "City": " Xiangcheng Chengguanzhen"
      },
      {
         "City": " Xi’an"
      },
      {
         "City": " Xiamen"
      },
      {
         "City": " Wuzhou"
      },
      {
         "City": " Wuyang"
      },
      {
         "City": " Wuxue"
      },
      {
         "City": " Wuxi"
      },
      {
         "City": " Dongyang"
      },
      {
         "City": " Changde"
      },
      {
         "City": " Wuhu"
      },
      {
         "City": " Wuhan"
      },
      {
         "City": " Wuhai"
      },
      {
         "City": " Wuda"
      },
      {
         "City": " Wucheng"
      },
      {
         "City": " Wenzhou"
      },
      {
         "City": " Wenshang"
      },
      {
         "City": " Wenling"
      },
      {
         "City": " Tianfu"
      },
      {
         "City": " Weinan"
      },
      {
         "City": " Weihai"
      },
      {
         "City": " Weifang"
      },
      {
         "City": " Wanxian"
      },
      {
         "City": " Wanning"
      },
      {
         "City": " Yinzhu"
      },
      {
         "City": " Wafangdian"
      },
      {
         "City": " Huangshan"
      },
      {
         "City": " Loushanguan"
      },
      {
         "City": " Tongzhou"
      },
      {
         "City": " Fuding"
      },
      {
         "City": " Tongren"
      },
      {
         "City": " Wusong"
      },
      {
         "City": " Tongchuan"
      },
      {
         "City": " Tianshui"
      },
      {
         "City": " Tianpeng"
      },
      {
         "City": " Tianjin"
      },
      {
         "City": " Tengzhou"
      },
      {
         "City": " Taozhuang"
      },
      {
         "City": " Tantou"
      },
      {
         "City": " Tangzhai"
      },
      {
         "City": " Tangshan"
      },
      {
         "City": " Tangping"
      },
      {
         "City": " Tangjiazhuang"
      },
      {
         "City": " Binhe"
      },
      {
         "City": " Tanggu"
      },
      {
         "City": " Taizhou"
      },
      {
         "City": " Taiyuan"
      },
      {
         "City": " Taixing"
      },
      {
         "City": " Taishan"
      },
      {
         "City": " Tai’an"
      },
      {
         "City": " Suzhou"
      },
      {
         "City": " Suozhen"
      },
      {
         "City": " Suizhou"
      },
      {
         "City": " Suixi"
      },
      {
         "City": " Suicheng"
      },
      {
         "City": " Suining"
      },
      {
         "City": " Songjiang"
      },
      {
         "City": " Sishui"
      },
      {
         "City": " Laixi"
      },
      {
         "City": " Shouguang"
      },
      {
         "City": " Shizuishan"
      },
      {
         "City": " Shizilu"
      },
      {
         "City": " Shiyan"
      },
      {
         "City": " Shiyan"
      },
      {
         "City": " Shiwan"
      },
      {
         "City": " Shitanjing"
      },
      {
         "City": " Shiqiao"
      },
      {
         "City": " Shiqi"
      },
      {
         "City": " Shima"
      },
      {
         "City": " Shilong"
      },
      {
         "City": " Tongchuan"
      },
      {
         "City": " Shijiazhuang"
      },
      {
         "City": " Shenzhen"
      },
      {
         "City": " Yanta"
      },
      {
         "City": " Shenjiamen"
      },
      {
         "City": " Shashi"
      },
      {
         "City": " Shaping"
      },
      {
         "City": " Shaoxing"
      },
      {
         "City": " Shaowu"
      },
      {
         "City": " Shaoguan"
      },
      {
         "City": " Shancheng"
      },
      {
         "City": " Shanwei"
      },
      {
         "City": " Shantou"
      },
      {
         "City": " Shanting"
      },
      {
         "City": " Shanghai"
      },
      {
         "City": " Shahecheng"
      },
      {
         "City": " Sanya"
      },
      {
         "City": " Sanming"
      },
      {
         "City": " Runing"
      },
      {
         "City": " Fuqing"
      },
      {
         "City": " Jieyang"
      },
      {
         "City": " Rizhao"
      },
      {
         "City": " Renqiu"
      },
      {
         "City": " Quzhou"
      },
      {
         "City": " Qujing"
      },
      {
         "City": " Qufu"
      },
      {
         "City": " Quanzhou"
      },
      {
         "City": " Wuxi"
      },
      {
         "City": " Zhuangyuan"
      },
      {
         "City": " Qiongshan"
      },
      {
         "City": " Qionghu"
      },
      {
         "City": " Qinzhou"
      },
      {
         "City": " Qinnan"
      },
      {
         "City": " Qinhuangdao"
      },
      {
         "City": " Jinjiang"
      },
      {
         "City": " Qingquan"
      },
      {
         "City": " Huai'an"
      },
      {
         "City": " Qingdao"
      },
      {
         "City": " Qingyuan"
      },
      {
         "City": " Hongqiao"
      },
      {
         "City": " Puyang Chengguanzhen"
      },
      {
         "City": " Puyang"
      },
      {
         "City": " Putian"
      },
      {
         "City": " Puqi"
      },
      {
         "City": " Pumiao"
      },
      {
         "City": " Pulandian"
      },
      {
         "City": " Poyang"
      },
      {
         "City": " Pingyin"
      },
      {
         "City": " Pingyi"
      },
      {
         "City": " Gutao"
      },
      {
         "City": " Pingxiang"
      },
      {
         "City": " Pingshan"
      },
      {
         "City": " Pingnan"
      },
      {
         "City": " Pingliang"
      },
      {
         "City": " Pingdu"
      },
      {
         "City": " Pingdingshan"
      },
      {
         "City": " Pengcheng"
      },
      {
         "City": " Dadukou"
      },
      {
         "City": " Ningyang"
      },
      {
         "City": " Yutan"
      },
      {
         "City": " Ninghai"
      },
      {
         "City": " Ninghai"
      },
      {
         "City": " Ningbo"
      },
      {
         "City": " Neijiang"
      },
      {
         "City": " Nanzhou"
      },
      {
         "City": " Nanzhang Chengguanzhen"
      },
      {
         "City": " Nanyang"
      },
      {
         "City": " Nantong"
      },
      {
         "City": " Pucheng"
      },
      {
         "City": " Nanping"
      },
      {
         "City": " Nanning"
      },
      {
         "City": " Nanma"
      },
      {
         "City": " Nanlong"
      },
      {
         "City": " Nanjing"
      },
      {
         "City": " Nangong"
      },
      {
         "City": " Nanfeng"
      },
      {
         "City": " Nandu"
      },
      {
         "City": " Nanding"
      },
      {
         "City": " Nanchong"
      },
      {
         "City": " Nanchang"
      },
      {
         "City": " Miyang"
      },
      {
         "City": " Mingshui"
      },
      {
         "City": " Mingguang"
      },
      {
         "City": " Minggang"
      },
      {
         "City": " Mianyang"
      },
      {
         "City": " Mentougou"
      },
      {
         "City": " Mengyin"
      },
      {
         "City": " Mengcheng Chengguanzhen"
      },
      {
         "City": " Meizhou"
      },
      {
         "City": " Wuchuan"
      },
      {
         "City": " Majie"
      },
      {
         "City": " Zhijiang"
      },
      {
         "City": " Macheng"
      },
      {
         "City": " Maba"
      },
      {
         "City": " Lüshun"
      },
      {
         "City": " Luqiao"
      },
      {
         "City": " Luoyang"
      },
      {
         "City": " Luoyang"
      },
      {
         "City": " Luoyang"
      },
      {
         "City": " Luorong"
      },
      {
         "City": " Luohe"
      },
      {
         "City": " Luocheng"
      },
      {
         "City": " Lucheng"
      },
      {
         "City": " Kangding"
      },
      {
         "City": " Lubu"
      },
      {
         "City": " Luancheng"
      },
      {
         "City": " Loudi"
      },
      {
         "City": " Longquan"
      },
      {
         "City": " Longgang"
      },
      {
         "City": " Licheng"
      },
      {
         "City": " Guankou"
      },
      {
         "City": " Puning"
      },
      {
         "City": " Lishui"
      },
      {
         "City": " Lintong"
      },
      {
         "City": " Linyi"
      },
      {
         "City": " Linxia Chengguanzhen"
      },
      {
         "City": " Linxi"
      },
      {
         "City": " Linshui"
      },
      {
         "City": " Linqu"
      },
      {
         "City": " Linqiong"
      },
      {
         "City": " Qingnian"
      },
      {
         "City": " Linping"
      },
      {
         "City": " Linhai"
      },
      {
         "City": " Lingcheng"
      },
      {
         "City": " Lincheng"
      },
      {
         "City": " Linfen"
      },
      {
         "City": " Xishan"
      },
      {
         "City": " Lichuan"
      },
      {
         "City": " Licheng"
      },
      {
         "City": " Liaocheng"
      },
      {
         "City": " Lianzhou"
      },
      {
         "City": " Lianzhou"
      },
      {
         "City": " Lianran"
      },
      {
         "City": " Wuwei"
      },
      {
         "City": " Liangxiang"
      },
      {
         "City": " Lianjiang"
      },
      {
         "City": " Leshan"
      },
      {
         "City": " Lengshuitan"
      },
      {
         "City": " Lengshuijiang"
      },
      {
         "City": " Leiyang"
      },
      {
         "City": " Lecheng"
      },
      {
         "City": " Laohekou"
      },
      {
         "City": " Lanzhou"
      },
      {
         "City": " Lanxi"
      },
      {
         "City": " Lianyuan"
      },
      {
         "City": " Langfang"
      },
      {
         "City": " Weichanglu"
      },
      {
         "City": " Laiyang"
      },
      {
         "City": " Laiwu"
      },
      {
         "City": " Laibin"
      },
      {
         "City": " Kunyang"
      },
      {
         "City": " Kunming"
      },
      {
         "City": " Kaiyuan"
      },
      {
         "City": " Kaihua"
      },
      {
         "City": " Kaifeng"
      },
      {
         "City": " Juye"
      },
      {
         "City": " Juegang"
      },
      {
         "City": " Jiujiang"
      },
      {
         "City": " Jishui"
      },
      {
         "City": " Qianzhou"
      },
      {
         "City": " Jinzhou"
      },
      {
         "City": " Jinxiang"
      },
      {
         "City": " Jinshi"
      },
      {
         "City": " Jinsha"
      },
      {
         "City": " Jinjiang"
      },
      {
         "City": " Jinji"
      },
      {
         "City": " Jining"
      },
      {
         "City": " Jinhua"
      },
      {
         "City": " Jingzhou"
      },
      {
         "City": " Tianchang"
      },
      {
         "City": " Jingmen"
      },
      {
         "City": " Jingling"
      },
      {
         "City": " Jingdezhen"
      },
      {
         "City": " Jinchang"
      },
      {
         "City": " Jincheng"
      },
      {
         "City": " Jinan"
      },
      {
         "City": " Jimo"
      },
      {
         "City": " Jijiang"
      },
      {
         "City": " Jiexiu"
      },
      {
         "City": " Jieshou"
      },
      {
         "City": " Jieshi"
      },
      {
         "City": " Jiehu"
      },
      {
         "City": " Jiazi"
      },
      {
         "City": " Jiaxing"
      },
      {
         "City": " Jiaozuo"
      },
      {
         "City": " Jiaozhou"
      },
      {
         "City": " Ningde"
      },
      {
         "City": " Jian’ou"
      },
      {
         "City": " Jiangyan"
      },
      {
         "City": " Jianguang"
      },
      {
         "City": " Jiangmen"
      },
      {
         "City": " Jiangkou"
      },
      {
         "City": " Yangjiang"
      },
      {
         "City": " Ji’an"
      },
      {
         "City": " Guangyuan"
      },
      {
         "City": " Huzhou"
      },
      {
         "City": " Hutang"
      },
      {
         "City": " Huoqiu Chengguanzhen"
      },
      {
         "City": " Humen"
      },
      {
         "City": " Huizhou"
      },
      {
         "City": " Huilong"
      },
      {
         "City": " Huicheng"
      },
      {
         "City": " Xinhui"
      },
      {
         "City": " Huazhou"
      },
      {
         "City": " Huangzhou"
      },
      {
         "City": " Huangyan"
      },
      {
         "City": " Huangshi"
      },
      {
         "City": " Dasha"
      },
      {
         "City": " Huangpi"
      },
      {
         "City": " Huangmei"
      },
      {
         "City": " Huanggang"
      },
      {
         "City": " Daxing"
      },
      {
         "City": " Dingcheng"
      },
      {
         "City": " Huaiyuan Chengguanzhen"
      },
      {
         "City": " Huainan"
      },
      {
         "City": " Huaicheng"
      },
      {
         "City": " Huaihua"
      },
      {
         "City": " Huaidian"
      },
      {
         "City": " Huaibei"
      },
      {
         "City": " Hongjiang"
      },
      {
         "City": " Heze"
      },
      {
         "City": " Hechuan"
      },
      {
         "City": " Yiyang"
      },
      {
         "City": " Hepo"
      },
      {
         "City": " Hengyang"
      },
      {
         "City": " Hengshui"
      },
      {
         "City": " Hefei"
      },
      {
         "City": " Hede"
      },
      {
         "City": " Hecun"
      },
      {
         "City": " Hebi"
      },
      {
         "City": " Hanzhong"
      },
      {
         "City": " Chengyang"
      },
      {
         "City": " Hanting"
      },
      {
         "City": " Hangzhou"
      },
      {
         "City": " Hangu"
      },
      {
         "City": " Handan"
      },
      {
         "City": " Hanchuan"
      },
      {
         "City": " Hancheng"
      },
      {
         "City": " Haizhou"
      },
      {
         "City": " Jiaojiang"
      },
      {
         "City": " Haimen"
      },
      {
         "City": " Haikou"
      },
      {
         "City": " Haikou"
      },
      {
         "City": " Guye"
      },
      {
         "City": " Guozhen"
      },
      {
         "City": " Guli"
      },
      {
         "City": " Guiyang"
      },
      {
         "City": " Guiren"
      },
      {
         "City": " Guiping"
      },
      {
         "City": " Guilin"
      },
      {
         "City": " Guigang"
      },
      {
         "City": " Gucheng Chengguanzhen"
      },
      {
         "City": " Guangzhou"
      },
      {
         "City": " Guangshui"
      },
      {
         "City": " Gejiu"
      },
      {
         "City": " Gaozhou"
      },
      {
         "City": " Gaoyou"
      },
      {
         "City": " Gaoping"
      },
      {
         "City": " Gaomi"
      },
      {
         "City": " Gaogou"
      },
      {
         "City": " Fuzhou"
      },
      {
         "City": " Fuyang"
      },
      {
         "City": " Fuyang"
      },
      {
         "City": " Qingyang"
      },
      {
         "City": " Fuling"
      },
      {
         "City": " Foshan"
      },
      {
         "City": " Fenyi"
      },
      {
         "City": " Fengxian"
      },
      {
         "City": " Fengrun"
      },
      {
         "City": " Fengkou"
      },
      {
         "City": " Feicheng"
      },
      {
         "City": " Fangshan"
      },
      {
         "City": " Ezhou"
      },
      {
         "City": " Enshi"
      },
      {
         "City": " Encheng"
      },
      {
         "City": " Duyun"
      },
      {
         "City": " Duobao"
      },
      {
         "City": " Ducheng"
      },
      {
         "City": " Xinyi"
      },
      {
         "City": " Shengli"
      },
      {
         "City": " Dongtai"
      },
      {
         "City": " Dongsheng"
      },
      {
         "City": " Dongkan"
      },
      {
         "City": " Donghai"
      },
      {
         "City": " Dongguan"
      },
      {
         "City": " Dongdu"
      },
      {
         "City": " Dongcun"
      },
      {
         "City": " Dingzhou"
      },
      {
         "City": " Dingtao"
      },
      {
         "City": " Dezhou"
      },
      {
         "City": " Deyang"
      },
      {
         "City": " Deqing"
      },
      {
         "City": " Dengzhou"
      },
      {
         "City": " Huazhou"
      },
      {
         "City": " Songyang"
      },
      {
         "City": " Dazhong"
      },
      {
         "City": " Zhangjiajie"
      },
      {
         "City": " Daye"
      },
      {
         "City": " Lijiang"
      },
      {
         "City": " Dazhou"
      },
      {
         "City": " Dawukou"
      },
      {
         "City": " Datong"
      },
      {
         "City": " Fenghua"
      },
      {
         "City": " Daokou"
      },
      {
         "City": " Danshui"
      },
      {
         "City": " Danjiangkou"
      },
      {
         "City": " Gushu"
      },
      {
         "City": " Xincheng"
      },
      {
         "City": " Daliang"
      },
      {
         "City": " Dalian"
      },
      {
         "City": " Dali"
      },
      {
         "City": " Chuzhou"
      },
      {
         "City": " Yangchun"
      },
      {
         "City": " Yiwu"
      },
      {
         "City": " Chongqing"
      },
      {
         "City": " Chonglong"
      },
      {
         "City": " Chizhou"
      },
      {
         "City": " Chenzhou"
      },
      {
         "City": " Chengyang"
      },
      {
         "City": " Jiangyin"
      },
      {
         "City": " Chengdu"
      },
      {
         "City": " Chenghua"
      },
      {
         "City": " Chaozhou"
      },
      {
         "City": " Chaohu"
      },
      {
         "City": " Changzhou"
      },
      {
         "City": " Changzhi"
      },
      {
         "City": " Changsha"
      },
      {
         "City": " Changqing"
      },
      {
         "City": " Changli"
      },
      {
         "City": " Changleng"
      },
      {
         "City": " Caohe"
      },
      {
         "City": " Weining"
      },
      {
         "City": " Cangzhou"
      },
      {
         "City": " Caidian"
      },
      {
         "City": " Buhe"
      },
      {
         "City": " Bozhou"
      },
      {
         "City": " Botou"
      },
      {
         "City": " Boshan"
      },
      {
         "City": " Baise City"
      },
      {
         "City": " Binzhou"
      },
      {
         "City": " Luxu"
      },
      {
         "City": " Bijie"
      },
      {
         "City": " Bianzhuang"
      },
      {
         "City": " Bengbu"
      },
      {
         "City": " Beijing"
      },
      {
         "City": " Beihai"
      },
      {
         "City": " Beidao"
      },
      {
         "City": " Beidaihehaibin"
      },
      {
         "City": " Beibei"
      },
      {
         "City": " Baoying"
      },
      {
         "City": " Langzhong"
      },
      {
         "City": " Baoding"
      },
      {
         "City": " Baiyin"
      },
      {
         "City": " Baihe"
      },
      {
         "City": " Shangyu"
      },
      {
         "City": " Babu"
      },
      {
         "City": " Anxiang"
      },
      {
         "City": " Anshun"
      },
      {
         "City": " Anqiu"
      },
      {
         "City": " Anqing"
      },
      {
         "City": " Mabai"
      },
      {
         "City": " Anlu"
      },
      {
         "City": " Anjiang"
      },
      {
         "City": " Anbu"
      },
      {
         "City": " Jiangyou"
      },
      {
         "City": " Suzhou"
      },
      {
         "City": " Zhoushan"
      },
      {
         "City": " Mudu"
      },
      {
         "City": " Songling"
      },
      {
         "City": " Zhongshan"
      },
      {
         "City": " Lianghu"
      },
      {
         "City": " Zhoucheng"
      },
      {
         "City": " Dalianwan"
      },
      {
         "City": " Yueyang"
      },
      {
         "City": " Bojia"
      },
      {
         "City": " Zhenlai"
      },
      {
         "City": " Zhengjiatun"
      },
      {
         "City": " Zhaozhou"
      },
      {
         "City": " Zhaoyuan"
      },
      {
         "City": " Zhaodong"
      },
      {
         "City": " Zhangjiakou"
      },
      {
         "City": " Zalantun"
      },
      {
         "City": " Yushu"
      },
      {
         "City": " Youhao"
      },
      {
         "City": " Yingkou"
      },
      {
         "City": " Yilan"
      },
      {
         "City": " Yichun"
      },
      {
         "City": " Yebaishou"
      },
      {
         "City": " Yantongshan"
      },
      {
         "City": " Yanji"
      },
      {
         "City": " Yakeshi"
      },
      {
         "City": " Zhangjiakou Shi Xuanhua Qu"
      },
      {
         "City": " Xiuyan"
      },
      {
         "City": " Xinqing"
      },
      {
         "City": " Xinmin"
      },
      {
         "City": " Xinglongshan"
      },
      {
         "City": " Xingcheng"
      },
      {
         "City": " Xilin Hot"
      },
      {
         "City": " Xifeng"
      },
      {
         "City": " Xiaoshi"
      },
      {
         "City": " Wuchang"
      },
      {
         "City": " Wangqing"
      },
      {
         "City": " Hepingjie"
      },
      {
         "City": " Wangkui"
      },
      {
         "City": " Ulanhot"
      },
      {
         "City": " Tumen"
      },
      {
         "City": " Tongliao"
      },
      {
         "City": " Tieling"
      },
      {
         "City": " Tieli"
      },
      {
         "City": " Guangming"
      },
      {
         "City": " Tailai"
      },
      {
         "City": " Taikang"
      },
      {
         "City": " Tahe"
      },
      {
         "City": " Sujiatun"
      },
      {
         "City": " Suileng"
      },
      {
         "City": " Suihua"
      },
      {
         "City": " Suifenhe"
      },
      {
         "City": " Songjianghe"
      },
      {
         "City": " Siping"
      },
      {
         "City": " Shunyi"
      },
      {
         "City": " Shulan"
      },
      {
         "City": " Shuangyashan"
      },
      {
         "City": " Shuangyang"
      },
      {
         "City": " Shuangcheng"
      },
      {
         "City": " Shiguai"
      },
      {
         "City": " Shenyang"
      },
      {
         "City": " Shanhetun"
      },
      {
         "City": " Shanhaiguan"
      },
      {
         "City": " Shangzhi"
      },
      {
         "City": " Sanchazi"
      },
      {
         "City": " Salaqi"
      },
      {
         "City": " Fendou"
      },
      {
         "City": " Taihe"
      },
      {
         "City": " Qiqihar"
      },
      {
         "City": " Qinggang"
      },
      {
         "City": " Qianguo"
      },
      {
         "City": " Pingzhuang"
      },
      {
         "City": " Panshi"
      },
      {
         "City": " Panshan"
      },
      {
         "City": " Nianzishan"
      },
      {
         "City": " Nenjiang"
      },
      {
         "City": " Nehe"
      },
      {
         "City": " Nantai"
      },
      {
         "City": " Nanpiao"
      },
      {
         "City": " Lianhe"
      },
      {
         "City": " Mujiayingzi"
      },
      {
         "City": " Mudanjiang"
      },
      {
         "City": " Mishan"
      },
      {
         "City": " Mingyue"
      },
      {
         "City": " Mingshui"
      },
      {
         "City": " Meihekou"
      },
      {
         "City": " Manzhouli"
      },
      {
         "City": " Longjing"
      },
      {
         "City": " Longjiang"
      },
      {
         "City": " Longfeng"
      },
      {
         "City": " Liuhe"
      },
      {
         "City": " Lishu"
      },
      {
         "City": " Linkou"
      },
      {
         "City": " Linjiang"
      },
      {
         "City": " Lingyuan"
      },
      {
         "City": " Lingdong"
      },
      {
         "City": " Liaozhong"
      },
      {
         "City": " Liaoyuan"
      },
      {
         "City": " Liaoyang"
      },
      {
         "City": " Lanxi"
      },
      {
         "City": " Langxiang"
      },
      {
         "City": " Langtou"
      },
      {
         "City": " Kuandian"
      },
      {
         "City": " Kaiyuan"
      },
      {
         "City": " Kaitong"
      },
      {
         "City": " Jixi"
      },
      {
         "City": " Jiutai"
      },
      {
         "City": " Jiupu"
      },
      {
         "City": " Jishu"
      },
      {
         "City": " Jinzhou"
      },
      {
         "City": " Lianshan"
      },
      {
         "City": " Jining"
      },
      {
         "City": " Jilin"
      },
      {
         "City": " Jidong"
      },
      {
         "City": " Minzhu"
      },
      {
         "City": " Jiamusi"
      },
      {
         "City": " Jalai Nur"
      },
      {
         "City": " Jagdaqi"
      },
      {
         "City": " Hushitai"
      },
      {
         "City": " Hunchun"
      },
      {
         "City": " Hulan Ergi"
      },
      {
         "City": " Hulan"
      },
      {
         "City": " Huinan"
      },
      {
         "City": " Huanren"
      },
      {
         "City": " Huangnihe"
      },
      {
         "City": " Huanan"
      },
      {
         "City": " Huadian"
      },
      {
         "City": " Honggang"
      },
      {
         "City": " Hohhot"
      },
      {
         "City": " Fendou"
      },
      {
         "City": " Helong"
      },
      {
         "City": " Heishan"
      },
      {
         "City": " Heihe"
      },
      {
         "City": " Hegang"
      },
      {
         "City": " Harbin"
      },
      {
         "City": " Hailun"
      },
      {
         "City": " Hailin"
      },
      {
         "City": " Hailar"
      },
      {
         "City": " Haicheng"
      },
      {
         "City": " Gongzhuling"
      },
      {
         "City": " Gongchangling"
      },
      {
         "City": " Genhe"
      },
      {
         "City": " Gannan"
      },
      {
         "City": " Fuyuan"
      },
      {
         "City": " Fuyu"
      },
      {
         "City": " Fuyu"
      },
      {
         "City": " Fuxin"
      },
      {
         "City": " Fuxin"
      },
      {
         "City": " Fushun"
      },
      {
         "City": " Fuli"
      },
      {
         "City": " Fujin"
      },
      {
         "City": " Beichengqu"
      },
      {
         "City": " Fengxiang"
      },
      {
         "City": " Fengcheng"
      },
      {
         "City": " Erenhot"
      },
      {
         "City": " Erdaojiang"
      },
      {
         "City": " Dunhua"
      },
      {
         "City": " Dongning"
      },
      {
         "City": " Dongling"
      },
      {
         "City": " Dongfeng"
      },
      {
         "City": " Dongxing"
      },
      {
         "City": " Dehui"
      },
      {
         "City": " Datong"
      },
      {
         "City": " Dashitou"
      },
      {
         "City": " Dashiqiao"
      },
      {
         "City": " Daqing"
      },
      {
         "City": " Dandong"
      },
      {
         "City": " Linghai"
      },
      {
         "City": " Dalai"
      },
      {
         "City": " Chifeng"
      },
      {
         "City": " Chengzihe"
      },
      {
         "City": " Chengde"
      },
      {
         "City": " Chaoyang"
      },
      {
         "City": " Chaoyang"
      },
      {
         "City": " Changtu"
      },
      {
         "City": " Changping"
      },
      {
         "City": " Changling"
      },
      {
         "City": " Changchun"
      },
      {
         "City": " Chaihe"
      },
      {
         "City": " Boli"
      },
      {
         "City": " Binzhou"
      },
      {
         "City": " Benxi"
      },
      {
         "City": " Beipiao"
      },
      {
         "City": " Bei’an"
      },
      {
         "City": " Bayan"
      },
      {
         "City": " Baotou"
      },
      {
         "City": " Baoshan"
      },
      {
         "City": " Baoqing"
      },
      {
         "City": " Bamiantong"
      },
      {
         "City": " Baishishan"
      },
      {
         "City": " Baiquan"
      },
      {
         "City": " Baicheng"
      },
      {
         "City": " Baishan"
      },
      {
         "City": " Anshan"
      },
      {
         "City": " Anda"
      },
      {
         "City": " Oroqen Zizhiqi"
      },
      {
         "City": " Acheng"
      },
      {
         "City": " Songling"
      },
      {
         "City": " Shilin"
      },
      {
         "City": " Changshu City"
      },
      {
         "City": " Shixing"
      },
      {
         "City": " Jiashan"
      },
      {
         "City": " Fenghuang"
      },
      {
         "City": " Zhu Cheng City"
      },
      {
         "City": " Shangri-La"
      },
      {
         "City": " Ordos"
      },
      {
         "City": " Wenshan City"
      },
      {
         "City": " Liupanshui"
      }
   ],
   "Colombia": [
      {
         "City": " Zipaquirá"
      },
      {
         "City": " Zarzal"
      },
      {
         "City": " Zaragoza"
      },
      {
         "City": " Yumbo"
      },
      {
         "City": " Yopal"
      },
      {
         "City": " Yarumal"
      },
      {
         "City": " Viterbo"
      },
      {
         "City": " Villeta"
      },
      {
         "City": " Villavicencio"
      },
      {
         "City": " Villa del Rosario"
      },
      {
         "City": " Villanueva"
      },
      {
         "City": " Villanueva"
      },
      {
         "City": " Villamaría"
      },
      {
         "City": " Valledupar"
      },
      {
         "City": " Urrao"
      },
      {
         "City": " Ubaté"
      },
      {
         "City": " Turbo"
      },
      {
         "City": " Turbaco"
      },
      {
         "City": " Túquerres"
      },
      {
         "City": " Tunja"
      },
      {
         "City": " Tumaco"
      },
      {
         "City": " Tuluá"
      },
      {
         "City": " Tolú"
      },
      {
         "City": " Tierralta"
      },
      {
         "City": " Tame"
      },
      {
         "City": " Sucre"
      },
      {
         "City": " Sonsón"
      },
      {
         "City": " Soledad"
      },
      {
         "City": " Sogamoso"
      },
      {
         "City": " Socorro"
      },
      {
         "City": " Soacha"
      },
      {
         "City": " Sincelejo"
      },
      {
         "City": " Sincé"
      },
      {
         "City": " Sibaté"
      },
      {
         "City": " Sevilla"
      },
      {
         "City": " Segovia"
      },
      {
         "City": " Santuario"
      },
      {
         "City": " Santo Tomás"
      },
      {
         "City": " Santa Rosa de Cabal"
      },
      {
         "City": " Santander de Quilichao"
      },
      {
         "City": " Santa Marta"
      },
      {
         "City": " Santa Lucía"
      },
      {
         "City": " San Onofre"
      },
      {
         "City": " San Martín"
      },
      {
         "City": " San Marcos"
      },
      {
         "City": " San Juan Nepomuceno"
      },
      {
         "City": " San Juan del Cesar"
      },
      {
         "City": " San Jacinto"
      },
      {
         "City": " San Gil"
      },
      {
         "City": " San Carlos"
      },
      {
         "City": " San Carlos"
      },
      {
         "City": " San Benito Abad"
      },
      {
         "City": " San Andrés"
      },
      {
         "City": " Sampués"
      },
      {
         "City": " Salamina"
      },
      {
         "City": " Sahagún"
      },
      {
         "City": " Sabaneta"
      },
      {
         "City": " Sabanalarga"
      },
      {
         "City": " Sabanagrande"
      },
      {
         "City": " Roldanillo"
      },
      {
         "City": " Riosucio"
      },
      {
         "City": " Rionegro"
      },
      {
         "City": " Ríohacha"
      },
      {
         "City": " Repelón"
      },
      {
         "City": " Quimbaya"
      },
      {
         "City": " Quibdó"
      },
      {
         "City": " Puerto Tejada"
      },
      {
         "City": " Puerto Santander"
      },
      {
         "City": " Puerto López"
      },
      {
         "City": " Puerto Colombia"
      },
      {
         "City": " Puerto Boyacá"
      },
      {
         "City": " Puerto Berrío"
      },
      {
         "City": " Puerto Asís"
      },
      {
         "City": " Pradera"
      },
      {
         "City": " Popayán"
      },
      {
         "City": " Planeta Rica"
      },
      {
         "City": " Pivijay"
      },
      {
         "City": " Pitalito"
      },
      {
         "City": " Piedecuesta"
      },
      {
         "City": " Pereira"
      },
      {
         "City": " Patía"
      },
      {
         "City": " Pasto"
      },
      {
         "City": " Pamplona"
      },
      {
         "City": " Palmira"
      },
      {
         "City": " Palmar de Varela"
      },
      {
         "City": " Belalcazar"
      },
      {
         "City": " Pacho"
      },
      {
         "City": " Ocaña"
      },
      {
         "City": " Neiva"
      },
      {
         "City": " Mosquera"
      },
      {
         "City": " Morales"
      },
      {
         "City": " Montería"
      },
      {
         "City": " Montenegro"
      },
      {
         "City": " Montelíbano"
      },
      {
         "City": " Mompós"
      },
      {
         "City": " Mocoa"
      },
      {
         "City": " Melgar"
      },
      {
         "City": " Medellín"
      },
      {
         "City": " Mariquita"
      },
      {
         "City": " Marinilla"
      },
      {
         "City": " María la Baja"
      },
      {
         "City": " Manzanares"
      },
      {
         "City": " Manizales"
      },
      {
         "City": " Malambo"
      },
      {
         "City": " Málaga"
      },
      {
         "City": " Maicao"
      },
      {
         "City": " Magangué"
      },
      {
         "City": " Madrid"
      },
      {
         "City": " Los Patios"
      },
      {
         "City": " Lorica"
      },
      {
         "City": " Líbano"
      },
      {
         "City": " Leticia"
      },
      {
         "City": " Lérida"
      },
      {
         "City": " La Virginia"
      },
      {
         "City": " La Unión"
      },
      {
         "City": " La Unión"
      },
      {
         "City": " La Tebaida"
      },
      {
         "City": " La Plata"
      },
      {
         "City": " La Mesa"
      },
      {
         "City": " La Jagua de Ibirico"
      },
      {
         "City": " La Estrella"
      },
      {
         "City": " La Dorada"
      },
      {
         "City": " La Ceja"
      },
      {
         "City": " Jamundí"
      },
      {
         "City": " Itagüí"
      },
      {
         "City": " Ipiales"
      },
      {
         "City": " Ibagué"
      },
      {
         "City": " Honda"
      },
      {
         "City": " Guacarí"
      },
      {
         "City": " Granada"
      },
      {
         "City": " Girón"
      },
      {
         "City": " Girardot City"
      },
      {
         "City": " Garzón"
      },
      {
         "City": " Galapa"
      },
      {
         "City": " Fusagasuga"
      },
      {
         "City": " Funza"
      },
      {
         "City": " Fundación"
      },
      {
         "City": " Fresno"
      },
      {
         "City": " Fonseca"
      },
      {
         "City": " Floridablanca"
      },
      {
         "City": " Florida"
      },
      {
         "City": " Florencia"
      },
      {
         "City": " Flandes"
      },
      {
         "City": " Facatativá"
      },
      {
         "City": " Espinal"
      },
      {
         "City": " Envigado"
      },
      {
         "City": " El Retén"
      },
      {
         "City": " El Copey"
      },
      {
         "City": " El Charco"
      },
      {
         "City": " El Cerrito"
      },
      {
         "City": " El Carmen de Bolívar"
      },
      {
         "City": " El Banco"
      },
      {
         "City": " El Bagre"
      },
      {
         "City": " Duitama"
      },
      {
         "City": " Dos Quebradas"
      },
      {
         "City": " Curumaní"
      },
      {
         "City": " Cúcuta"
      },
      {
         "City": " Corozal"
      },
      {
         "City": " Corinto"
      },
      {
         "City": " Municipio de Copacabana"
      },
      {
         "City": " Circasia"
      },
      {
         "City": " Ciénaga de Oro"
      },
      {
         "City": " Ciénaga"
      },
      {
         "City": " Chiriguaná"
      },
      {
         "City": " Chiquinquirá"
      },
      {
         "City": " Chinú"
      },
      {
         "City": " Chinchiná"
      },
      {
         "City": " Chimichagua"
      },
      {
         "City": " Chigorodó"
      },
      {
         "City": " Chía"
      },
      {
         "City": " Chaparral"
      },
      {
         "City": " Cereté"
      },
      {
         "City": " Caucasia"
      },
      {
         "City": " Cartago"
      },
      {
         "City": " Cartagena"
      },
      {
         "City": " Carmen de Viboral"
      },
      {
         "City": " Candelaria"
      },
      {
         "City": " Campo de la Cruz"
      },
      {
         "City": " Campoalegre"
      },
      {
         "City": " Cali"
      },
      {
         "City": " Caldas"
      },
      {
         "City": " Calarcá"
      },
      {
         "City": " Cajicá"
      },
      {
         "City": " Caicedonia"
      },
      {
         "City": " Buga"
      },
      {
         "City": " Buenaventura"
      },
      {
         "City": " Buenaventura"
      },
      {
         "City": " Bucaramanga"
      },
      {
         "City": " Bogotá"
      },
      {
         "City": " Bello"
      },
      {
         "City": " Belén de Umbría"
      },
      {
         "City": " Barranquilla"
      },
      {
         "City": " Barrancas"
      },
      {
         "City": " Barrancabermeja"
      },
      {
         "City": " Barbosa"
      },
      {
         "City": " Barbosa"
      },
      {
         "City": " Baranoa"
      },
      {
         "City": " Ayapel"
      },
      {
         "City": " Armenia"
      },
      {
         "City": " Arjona"
      },
      {
         "City": " Ariguaní"
      },
      {
         "City": " Arauca"
      },
      {
         "City": " Aracataca"
      },
      {
         "City": " Apartadó"
      },
      {
         "City": " Anserma"
      },
      {
         "City": " Andes"
      },
      {
         "City": " Andalucía"
      },
      {
         "City": " Aguazul"
      },
      {
         "City": " Aguadas"
      },
      {
         "City": " Aguachica"
      },
      {
         "City": " Acacías"
      },
      {
         "City": " Morales"
      },
      {
         "City": " Carepa"
      },
      {
         "City": " Ciudad Bolívar"
      },
      {
         "City": " Agustín Codazzi"
      },
      {
         "City": " Plato"
      },
      {
         "City": " San José del Guaviare"
      }
   ],
   "Costa Rica": [
      {
         "City": " Turrialba"
      },
      {
         "City": " Tejar"
      },
      {
         "City": " Siquirres"
      },
      {
         "City": " San Vicente"
      },
      {
         "City": " San Rafael Arriba"
      },
      {
         "City": " San Rafael Abajo"
      },
      {
         "City": " San Rafael"
      },
      {
         "City": " San Rafael"
      },
      {
         "City": " San Pedro"
      },
      {
         "City": " San Pablo"
      },
      {
         "City": " San Miguel"
      },
      {
         "City": " San Juan de Dios"
      },
      {
         "City": " San Juan"
      },
      {
         "City": " San José"
      },
      {
         "City": " San José"
      },
      {
         "City": " San Isidro"
      },
      {
         "City": " San Francisco"
      },
      {
         "City": " San Felipe"
      },
      {
         "City": " San Diego"
      },
      {
         "City": " Quesada"
      },
      {
         "City": " Purral"
      },
      {
         "City": " Puntarenas"
      },
      {
         "City": " Limón"
      },
      {
         "City": " Patarrá"
      },
      {
         "City": " Paraíso"
      },
      {
         "City": " Nicoya"
      },
      {
         "City": " Mercedes"
      },
      {
         "City": " Liberia"
      },
      {
         "City": " Ipís"
      },
      {
         "City": " Heredia"
      },
      {
         "City": " Guápiles"
      },
      {
         "City": " Guadalupe"
      },
      {
         "City": " Esparza"
      },
      {
         "City": " Curridabat"
      },
      {
         "City": " Colima"
      },
      {
         "City": " Chacarita"
      },
      {
         "City": " Cartago"
      },
      {
         "City": " Cañas"
      },
      {
         "City": " Calle Blancos"
      },
      {
         "City": " Aserrí"
      },
      {
         "City": " Alajuela"
      },
      {
         "City": " San Vicente de Moravia"
      }
   ],
   "Cuba": [
      {
         "City": " Yara"
      },
      {
         "City": " Yaguajay"
      },
      {
         "City": " Viñales"
      },
      {
         "City": " Vertientes"
      },
      {
         "City": " Venezuela"
      },
      {
         "City": " Varadero"
      },
      {
         "City": " San Germán"
      },
      {
         "City": " Unión de Reyes"
      },
      {
         "City": " Trinidad"
      },
      {
         "City": " Sibanicú"
      },
      {
         "City": " Santo Domingo"
      },
      {
         "City": " Santiago de las Vegas"
      },
      {
         "City": " Santiago de Cuba"
      },
      {
         "City": " Santa Cruz del Sur"
      },
      {
         "City": " Santa Cruz del Norte"
      },
      {
         "City": " Santa Clara"
      },
      {
         "City": " San Miguel del Padrón"
      },
      {
         "City": " San Luis"
      },
      {
         "City": " San José de las Lajas"
      },
      {
         "City": " Sancti Spíritus"
      },
      {
         "City": " San Cristobal"
      },
      {
         "City": " San Antonio de los Baños"
      },
      {
         "City": " Sagua la Grande"
      },
      {
         "City": " Sagua de Tánamo"
      },
      {
         "City": " Rodas"
      },
      {
         "City": " Río Guayabal de Yateras"
      },
      {
         "City": " Río Cauto"
      },
      {
         "City": " Remedios"
      },
      {
         "City": " Regla"
      },
      {
         "City": " Ranchuelo"
      },
      {
         "City": " Puerto Padre"
      },
      {
         "City": " Primero de Enero"
      },
      {
         "City": " Placetas"
      },
      {
         "City": " Pinar del Río"
      },
      {
         "City": " Perico"
      },
      {
         "City": " Pedro Betancourt"
      },
      {
         "City": " Palmira"
      },
      {
         "City": " Palma Soriano"
      },
      {
         "City": " Nuevitas"
      },
      {
         "City": " Nueva Gerona"
      },
      {
         "City": " Niquero"
      },
      {
         "City": " Morón"
      },
      {
         "City": " Moa"
      },
      {
         "City": " Minas de Matahambre"
      },
      {
         "City": " Minas"
      },
      {
         "City": " Media Luna"
      },
      {
         "City": " Matanzas"
      },
      {
         "City": " Mariel"
      },
      {
         "City": " Manzanillo"
      },
      {
         "City": " Manicaragua"
      },
      {
         "City": " Maisí"
      },
      {
         "City": " Madruga"
      },
      {
         "City": " Los Palacios"
      },
      {
         "City": " Las Tunas"
      },
      {
         "City": " La Sierpe"
      },
      {
         "City": " La Salud"
      },
      {
         "City": " Havana"
      },
      {
         "City": " Jovellanos"
      },
      {
         "City": " Jobabo"
      },
      {
         "City": " Jobabo"
      },
      {
         "City": " Jiguaní"
      },
      {
         "City": " Jesús Menéndez"
      },
      {
         "City": " Jatibonico"
      },
      {
         "City": " Jaruco"
      },
      {
         "City": " Jagüey Grande"
      },
      {
         "City": " Holguín"
      },
      {
         "City": " Guisa"
      },
      {
         "City": " Güira de Melena"
      },
      {
         "City": " Güines"
      },
      {
         "City": " Guantánamo"
      },
      {
         "City": " Guane"
      },
      {
         "City": " Guanajay"
      },
      {
         "City": " Guanabacoa"
      },
      {
         "City": " Guáimaro"
      },
      {
         "City": " Gibara"
      },
      {
         "City": " Fomento"
      },
      {
         "City": " Florida"
      },
      {
         "City": " Florencia"
      },
      {
         "City": " Esmeralda"
      },
      {
         "City": " Encrucijada"
      },
      {
         "City": " Cumanayagua"
      },
      {
         "City": " Cueto"
      },
      {
         "City": " Cruces"
      },
      {
         "City": " Corralillo"
      },
      {
         "City": " Contramaestre"
      },
      {
         "City": " Consolación del Sur"
      },
      {
         "City": " Condado"
      },
      {
         "City": " Colón"
      },
      {
         "City": " Colombia"
      },
      {
         "City": " Ciro Redondo"
      },
      {
         "City": " Cifuentes"
      },
      {
         "City": " Cienfuegos"
      },
      {
         "City": " Ciego de Ávila"
      },
      {
         "City": " Chambas"
      },
      {
         "City": " Cerro"
      },
      {
         "City": " Cauto Cristo"
      },
      {
         "City": " Cárdenas"
      },
      {
         "City": " Campechuela"
      },
      {
         "City": " Camajuaní"
      },
      {
         "City": " Camagüey"
      },
      {
         "City": " Calimete"
      },
      {
         "City": " Caibarién"
      },
      {
         "City": " Cacocum"
      },
      {
         "City": " Cabaiguán"
      },
      {
         "City": " Bejucal"
      },
      {
         "City": " Bayamo"
      },
      {
         "City": " Bauta"
      },
      {
         "City": " Bartolomé Masó"
      },
      {
         "City": " Baraguá"
      },
      {
         "City": " Baracoa"
      },
      {
         "City": " Banes"
      },
      {
         "City": " Bahía Honda"
      },
      {
         "City": " Artemisa"
      },
      {
         "City": " Arroyo Naranjo"
      },
      {
         "City": " Amancio"
      },
      {
         "City": " Alquízar"
      },
      {
         "City": " Alamar"
      },
      {
         "City": " Aguada de Pasajeros"
      },
      {
         "City": " Abreus"
      },
      {
         "City": " Habana del Este"
      },
      {
         "City": " Centro Habana"
      },
      {
         "City": " La Habana Vieja"
      },
      {
         "City": " Báguanos"
      },
      {
         "City": " Jimaguayú"
      },
      {
         "City": " Arroyo Naranjo"
      },
      {
         "City": " Boyeros"
      },
      {
         "City": " Diez de Octubre"
      }
   ],
   "Cape Verde": [
      {
         "City": " Santa Maria"
      },
      {
         "City": " Praia"
      },
      {
         "City": " Mindelo"
      },
      {
         "City": " Cova Figueira"
      }
   ],
   "Curacao": [
      {
         "City": " Willemstad"
      }
   ],
   "Christmas Island": [
      {
         "City": " Flying Fish Cove"
      }
   ],
   "Cyprus": [
      {
         "City": " Protaras"
      },
      {
         "City": " Paphos"
      },
      {
         "City": " Nicosia"
      },
      {
         "City": " Limassol"
      },
      {
         "City": " Larnaca"
      },
      {
         "City": " Kyrenia"
      },
      {
         "City": " Famagusta"
      }
   ],
   "Czech Republic": [
      {
         "City": " Dvůr Králové nad Labem"
      },
      {
         "City": " Znojmo"
      },
      {
         "City": " Zlín"
      },
      {
         "City": " Žďár nad Sázavou Druhy"
      },
      {
         "City": " Žďár nad Sázavou"
      },
      {
         "City": " Žatec"
      },
      {
         "City": " Vyškov"
      },
      {
         "City": " Vsetín"
      },
      {
         "City": " Varnsdorf"
      },
      {
         "City": " Valašské Meziříčí"
      },
      {
         "City": " Ústí nad Orlicí"
      },
      {
         "City": " Ústí nad Labem"
      },
      {
         "City": " Uherský Brod"
      },
      {
         "City": " Uherské Hradiště"
      },
      {
         "City": " Trutnov"
      },
      {
         "City": " Třinec"
      },
      {
         "City": " Třebíč"
      },
      {
         "City": " Teplice"
      },
      {
         "City": " Tábor"
      },
      {
         "City": " Svitavy"
      },
      {
         "City": " Šumperk"
      },
      {
         "City": " Strakonice"
      },
      {
         "City": " Starý Bohumín"
      },
      {
         "City": " Sokolov"
      },
      {
         "City": " Slaný"
      },
      {
         "City": " Rožnov pod Radhoštěm"
      },
      {
         "City": " Rakovník"
      },
      {
         "City": " Prostějov"
      },
      {
         "City": " Prosek"
      },
      {
         "City": " Příbram"
      },
      {
         "City": " Přerov"
      },
      {
         "City": " Prague"
      },
      {
         "City": " Pilsen"
      },
      {
         "City": " Písek"
      },
      {
         "City": " Pelhřimov"
      },
      {
         "City": " Pardubice"
      },
      {
         "City": " Otrokovice"
      },
      {
         "City": " Otrokovice"
      },
      {
         "City": " Ostrov"
      },
      {
         "City": " Ostrava"
      },
      {
         "City": " Orlová"
      },
      {
         "City": " Opava"
      },
      {
         "City": " Olomouc"
      },
      {
         "City": " Nový Jičín"
      },
      {
         "City": " Neratovice"
      },
      {
         "City": " Náchod"
      },
      {
         "City": " Most"
      },
      {
         "City": " Modřany"
      },
      {
         "City": " Mladá Boleslav"
      },
      {
         "City": " Mělník"
      },
      {
         "City": " Louny"
      },
      {
         "City": " Litvínov"
      },
      {
         "City": " Litoměřice"
      },
      {
         "City": " Liberec"
      },
      {
         "City": " Libeň"
      },
      {
         "City": " Letňany"
      },
      {
         "City": " Kutná Hora"
      },
      {
         "City": " Kroměříž"
      },
      {
         "City": " Krnov"
      },
      {
         "City": " Kralupy nad Vltavou"
      },
      {
         "City": " Kopřivnice"
      },
      {
         "City": " Kolín"
      },
      {
         "City": " Klatovy"
      },
      {
         "City": " Klášterec nad Ohří"
      },
      {
         "City": " Kladno"
      },
      {
         "City": " Karviná"
      },
      {
         "City": " Karlovy Vary"
      },
      {
         "City": " Kadaň"
      },
      {
         "City": " Kadaň"
      },
      {
         "City": " Jirkov"
      },
      {
         "City": " Jindřichův Hradec"
      },
      {
         "City": " Jihlava"
      },
      {
         "City": " Jičín"
      },
      {
         "City": " Jablonec nad Nisou"
      },
      {
         "City": " Hranice"
      },
      {
         "City": " Hradec Králové"
      },
      {
         "City": " Hodonín"
      },
      {
         "City": " Havlíčkův Brod"
      },
      {
         "City": " Havířov"
      },
      {
         "City": " Frýdek-Místek"
      },
      {
         "City": " Děčín"
      },
      {
         "City": " Chrudim"
      },
      {
         "City": " Chomutov"
      },
      {
         "City": " Cheb"
      },
      {
         "City": " Český Těšín"
      },
      {
         "City": " České Budějovice"
      },
      {
         "City": " Česká Třebová"
      },
      {
         "City": " Česká Lípa"
      },
      {
         "City": " Bruntál"
      },
      {
         "City": " Brno"
      },
      {
         "City": " Břeclav"
      },
      {
         "City": " Braník"
      },
      {
         "City": " Brandýs nad Labem-Stará Boleslav"
      },
      {
         "City": " Bohumín"
      },
      {
         "City": " Blansko"
      },
      {
         "City": " Bílina Kyselka"
      },
      {
         "City": " Bílina"
      },
      {
         "City": " Beroun"
      },
      {
         "City": " Benešov"
      },
      {
         "City": " Černý Most"
      }
   ],
   "Germany": [
      {
         "City": " Zwickau"
      },
      {
         "City": " Zweibrücken"
      },
      {
         "City": " Zulpich"
      },
      {
         "City": " Zossen"
      },
      {
         "City": " Zittau"
      },
      {
         "City": " Zirndorf"
      },
      {
         "City": " Zerbst"
      },
      {
         "City": " Zeitz"
      },
      {
         "City": " Zehlendorf"
      },
      {
         "City": " Xanten"
      },
      {
         "City": " Wurzen"
      },
      {
         "City": " Würzburg"
      },
      {
         "City": " Würselen"
      },
      {
         "City": " Wuppertal"
      },
      {
         "City": " Wunstorf"
      },
      {
         "City": " Wülfrath"
      },
      {
         "City": " Wörth am Rhein"
      },
      {
         "City": " Worms"
      },
      {
         "City": " Wolfsburg"
      },
      {
         "City": " Wolfratshausen"
      },
      {
         "City": " Wolfenbüttel"
      },
      {
         "City": " Wolfen"
      },
      {
         "City": " Witzenhausen"
      },
      {
         "City": " Wittstock"
      },
      {
         "City": " Wittmund"
      },
      {
         "City": " Wittlich"
      },
      {
         "City": " Wittenberge"
      },
      {
         "City": " Wittenau"
      },
      {
         "City": " Witten"
      },
      {
         "City": " Wismar"
      },
      {
         "City": " Wipperfürth"
      },
      {
         "City": " Winterhude"
      },
      {
         "City": " Winsen"
      },
      {
         "City": " Winnenden"
      },
      {
         "City": " Wilnsdorf"
      },
      {
         "City": " Wilmersdorf"
      },
      {
         "City": " Willich"
      },
      {
         "City": " Wilhelmstadt"
      },
      {
         "City": " Wilhelmshaven"
      },
      {
         "City": " Wildeshausen"
      },
      {
         "City": " Wiesloch"
      },
      {
         "City": " Wiesbaden"
      },
      {
         "City": " Wiehl"
      },
      {
         "City": " Wetzlar"
      },
      {
         "City": " Wetter (Ruhr)"
      },
      {
         "City": " Westerstede"
      },
      {
         "City": " Westend"
      },
      {
         "City": " Wesseling"
      },
      {
         "City": " Wesel"
      },
      {
         "City": " Wertheim"
      },
      {
         "City": " Wernigerode"
      },
      {
         "City": " Werne"
      },
      {
         "City": " Wermelskirchen"
      },
      {
         "City": " Werl"
      },
      {
         "City": " Werdohl"
      },
      {
         "City": " Werder"
      },
      {
         "City": " Werdau"
      },
      {
         "City": " Wendlingen am Neckar"
      },
      {
         "City": " Wenden"
      },
      {
         "City": " Wendelstein"
      },
      {
         "City": " Weiterstadt"
      },
      {
         "City": " Weißwasser"
      },
      {
         "City": " Weißenfels"
      },
      {
         "City": " Weißenburg in Bayern"
      },
      {
         "City": " Weinstadt-Endersbach"
      },
      {
         "City": " Weinheim"
      },
      {
         "City": " Weingarten"
      },
      {
         "City": " Weimar"
      },
      {
         "City": " Weilheim"
      },
      {
         "City": " Weilerswist"
      },
      {
         "City": " Weil der Stadt"
      },
      {
         "City": " Weil am Rhein"
      },
      {
         "City": " Weiden"
      },
      {
         "City": " Weißensee"
      },
      {
         "City": " Wegberg"
      },
      {
         "City": " Weener"
      },
      {
         "City": " Wedel"
      },
      {
         "City": " Wedding"
      },
      {
         "City": " Wassenberg"
      },
      {
         "City": " Warstein"
      },
      {
         "City": " Warendorf"
      },
      {
         "City": " Waren"
      },
      {
         "City": " Wardenburg"
      },
      {
         "City": " Warburg"
      },
      {
         "City": " Wangen im Allgäu"
      },
      {
         "City": " Wandlitz"
      },
      {
         "City": " Waltrop"
      },
      {
         "City": " Walsrode"
      },
      {
         "City": " Wallenhorst"
      },
      {
         "City": " Waldshut-Tiengen"
      },
      {
         "City": " Waldkraiburg"
      },
      {
         "City": " Waldkirch"
      },
      {
         "City": " Waldbröl"
      },
      {
         "City": " Waiblingen"
      },
      {
         "City": " Waghäusel"
      },
      {
         "City": " Wadgassen"
      },
      {
         "City": " Wadern"
      },
      {
         "City": " Wachtberg"
      },
      {
         "City": " Vreden"
      },
      {
         "City": " Völklingen"
      },
      {
         "City": " Voerde"
      },
      {
         "City": " Vlotho"
      },
      {
         "City": " Vilshofen"
      },
      {
         "City": " Villingen-Schwenningen"
      },
      {
         "City": " Viersen"
      },
      {
         "City": " Viernheim"
      },
      {
         "City": " Versmold"
      },
      {
         "City": " Verl"
      },
      {
         "City": " Verden"
      },
      {
         "City": " Velbert"
      },
      {
         "City": " Vechta"
      },
      {
         "City": " Vechelde"
      },
      {
         "City": " Vaterstetten"
      },
      {
         "City": " Varel"
      },
      {
         "City": " Vaihingen an der Enz"
      },
      {
         "City": " Uetersen"
      },
      {
         "City": " Uslar"
      },
      {
         "City": " Unterschleißheim"
      },
      {
         "City": " Unterhaching"
      },
      {
         "City": " Unterkrozingen"
      },
      {
         "City": " Unna"
      },
      {
         "City": " Ulm"
      },
      {
         "City": " Uelzen"
      },
      {
         "City": " Überlingen"
      },
      {
         "City": " Übach-Palenberg"
      },
      {
         "City": " Tuttlingen"
      },
      {
         "City": " Tübingen"
      },
      {
         "City": " Trossingen"
      },
      {
         "City": " Troisdorf"
      },
      {
         "City": " Trier"
      },
      {
         "City": " Traunstein"
      },
      {
         "City": " Traunreut"
      },
      {
         "City": " Torgau"
      },
      {
         "City": " Tönisvorst"
      },
      {
         "City": " Tettnang"
      },
      {
         "City": " Templin"
      },
      {
         "City": " Tempelhof"
      },
      {
         "City": " Teltow"
      },
      {
         "City": " Telgte"
      },
      {
         "City": " Tegel"
      },
      {
         "City": " Taunusstein"
      },
      {
         "City": " Taufkirchen"
      },
      {
         "City": " Syke"
      },
      {
         "City": " Sundern"
      },
      {
         "City": " Sulzbach-Rosenberg"
      },
      {
         "City": " Sulzbach"
      },
      {
         "City": " Suhl"
      },
      {
         "City": " Stuttgart"
      },
      {
         "City": " Stuhr"
      },
      {
         "City": " Strausberg"
      },
      {
         "City": " Straubing"
      },
      {
         "City": " Stralsund"
      },
      {
         "City": " Straelen"
      },
      {
         "City": " Stolberg"
      },
      {
         "City": " Stockelsdorf"
      },
      {
         "City": " Stockach"
      },
      {
         "City": " Stendal"
      },
      {
         "City": " Stellingen"
      },
      {
         "City": " Steinhagen"
      },
      {
         "City": " Steinfurt"
      },
      {
         "City": " Steilshoop"
      },
      {
         "City": " Steglitz"
      },
      {
         "City": " Staßfurt"
      },
      {
         "City": " Starnberg"
      },
      {
         "City": " Stadtlohn"
      },
      {
         "City": " Stadthagen"
      },
      {
         "City": " Stadtallendorf"
      },
      {
         "City": " Stade"
      },
      {
         "City": " Staaken"
      },
      {
         "City": " Sprockhövel"
      },
      {
         "City": " Springe"
      },
      {
         "City": " Speyer"
      },
      {
         "City": " Spenge"
      },
      {
         "City": " Sonthofen"
      },
      {
         "City": " Sonneberg"
      },
      {
         "City": " Sondershausen"
      },
      {
         "City": " Sömmerda"
      },
      {
         "City": " Soltau"
      },
      {
         "City": " Solingen"
      },
      {
         "City": " Soest"
      },
      {
         "City": " Sinzig"
      },
      {
         "City": " Sinsheim"
      },
      {
         "City": " Singen"
      },
      {
         "City": " Sindelfingen"
      },
      {
         "City": " Simmerath"
      },
      {
         "City": " Sigmaringen"
      },
      {
         "City": " Siegen"
      },
      {
         "City": " Siegburg"
      },
      {
         "City": " Senftenberg"
      },
      {
         "City": " Senden"
      },
      {
         "City": " Senden"
      },
      {
         "City": " Selm"
      },
      {
         "City": " Seligenstadt"
      },
      {
         "City": " Selb"
      },
      {
         "City": " Sehnde"
      },
      {
         "City": " Seevetal"
      },
      {
         "City": " Seesen"
      },
      {
         "City": " Seelze"
      },
      {
         "City": " Schwetzingen"
      },
      {
         "City": " Schwerte"
      },
      {
         "City": " Schwerin"
      },
      {
         "City": " Schwelm"
      },
      {
         "City": " Schweinfurt"
      },
      {
         "City": " Schwedt (Oder)"
      },
      {
         "City": " Schwarzenberg"
      },
      {
         "City": " Schwanewede"
      },
      {
         "City": " Schwandorf in Bayern"
      },
      {
         "City": " Schwalmtal"
      },
      {
         "City": " Schwalmstadt"
      },
      {
         "City": " Schwalbach"
      },
      {
         "City": " Schwäbisch Hall"
      },
      {
         "City": " Schwäbisch Gmünd"
      },
      {
         "City": " Schwabach"
      },
      {
         "City": " Schrobenhausen"
      },
      {
         "City": " Schramberg"
      },
      {
         "City": " Schortens"
      },
      {
         "City": " Schorndorf"
      },
      {
         "City": " Schopfheim"
      },
      {
         "City": " Schöneberg"
      },
      {
         "City": " Schönebeck"
      },
      {
         "City": " Schneverdingen"
      },
      {
         "City": " Schneeberg"
      },
      {
         "City": " Schmelz"
      },
      {
         "City": " Schmargendorf"
      },
      {
         "City": " Schmallenberg"
      },
      {
         "City": " Schmalkalden"
      },
      {
         "City": " Schlüchtern"
      },
      {
         "City": " Schleswig"
      },
      {
         "City": " Schkeuditz"
      },
      {
         "City": " Schiffweiler"
      },
      {
         "City": " Schifferstadt"
      },
      {
         "City": " Saulgau"
      },
      {
         "City": " Sasel"
      },
      {
         "City": " Sarstedt"
      },
      {
         "City": " Sankt Wendel"
      },
      {
         "City": " Sankt Ingbert"
      },
      {
         "City": " Sankt Augustin"
      },
      {
         "City": " Sangerhausen"
      },
      {
         "City": " Salzwedel"
      },
      {
         "City": " Salzkotten"
      },
      {
         "City": " Saarlouis"
      },
      {
         "City": " Saarbrücken"
      },
      {
         "City": " Saalfeld"
      },
      {
         "City": " Rüsselsheim"
      },
      {
         "City": " Rummelsburg"
      },
      {
         "City": " Rudow"
      },
      {
         "City": " Rudolstadt"
      },
      {
         "City": " Rottweil"
      },
      {
         "City": " Rottenburg"
      },
      {
         "City": " Roth"
      },
      {
         "City": " Rotenburg"
      },
      {
         "City": " Rostock"
      },
      {
         "City": " Rösrath"
      },
      {
         "City": " Rosenheim"
      },
      {
         "City": " Ronnenberg"
      },
      {
         "City": " Rinteln"
      },
      {
         "City": " Rietberg"
      },
      {
         "City": " Riesa"
      },
      {
         "City": " Riegelsberg"
      },
      {
         "City": " Ribnitz-Damgarten"
      },
      {
         "City": " Rheinfelden (Baden)"
      },
      {
         "City": " Rheine"
      },
      {
         "City": " Rheinberg"
      },
      {
         "City": " Rheinbach"
      },
      {
         "City": " Rhede"
      },
      {
         "City": " Rheda-Wiedenbrück"
      },
      {
         "City": " Reutlingen"
      },
      {
         "City": " Renningen"
      },
      {
         "City": " Rendsburg"
      },
      {
         "City": " Remscheid"
      },
      {
         "City": " Remagen"
      },
      {
         "City": " Reinickendorf"
      },
      {
         "City": " Reinheim"
      },
      {
         "City": " Reinbek"
      },
      {
         "City": " Reichenbach/Vogtland"
      },
      {
         "City": " Regensburg"
      },
      {
         "City": " Rees"
      },
      {
         "City": " Recklinghausen"
      },
      {
         "City": " Ravensburg"
      },
      {
         "City": " Ratingen"
      },
      {
         "City": " Rathenow"
      },
      {
         "City": " Ratekau"
      },
      {
         "City": " Rastede"
      },
      {
         "City": " Rastatt"
      },
      {
         "City": " Rahden"
      },
      {
         "City": " Radolfzell am Bodensee"
      },
      {
         "City": " Radevormwald"
      },
      {
         "City": " Radebeul"
      },
      {
         "City": " Radeberg"
      },
      {
         "City": " Quickborn"
      },
      {
         "City": " Quedlinburg"
      },
      {
         "City": " Püttlingen"
      },
      {
         "City": " Pulheim"
      },
      {
         "City": " Puchheim"
      },
      {
         "City": " Prenzlauer Berg"
      },
      {
         "City": " Prenzlau"
      },
      {
         "City": " Preetz"
      },
      {
         "City": " Potsdam"
      },
      {
         "City": " Porta Westfalica"
      },
      {
         "City": " Poppenbüttel"
      },
      {
         "City": " Plettenberg"
      },
      {
         "City": " Plauen"
      },
      {
         "City": " Pirna"
      },
      {
         "City": " Pirmasens"
      },
      {
         "City": " Pinneberg"
      },
      {
         "City": " Pfungstadt"
      },
      {
         "City": " Pfullingen"
      },
      {
         "City": " Pforzheim"
      },
      {
         "City": " Pfaffenhofen an der Ilm"
      },
      {
         "City": " Petershagen"
      },
      {
         "City": " Penzberg"
      },
      {
         "City": " Peine"
      },
      {
         "City": " Passau"
      },
      {
         "City": " Pasing"
      },
      {
         "City": " Parchim"
      },
      {
         "City": " Papenburg"
      },
      {
         "City": " Pankow"
      },
      {
         "City": " Paderborn"
      },
      {
         "City": " Oyten"
      },
      {
         "City": " Overath"
      },
      {
         "City": " Ottweiler"
      },
      {
         "City": " Ottobrunn"
      },
      {
         "City": " Osterholz-Scharmbeck"
      },
      {
         "City": " Osnabrück"
      },
      {
         "City": " Oschersleben"
      },
      {
         "City": " Oschatz"
      },
      {
         "City": " Oranienburg"
      },
      {
         "City": " Opladen"
      },
      {
         "City": " Olsberg"
      },
      {
         "City": " Olpe"
      },
      {
         "City": " Oldenburg"
      },
      {
         "City": " Olching"
      },
      {
         "City": " Öhringen"
      },
      {
         "City": " Offenburg"
      },
      {
         "City": " Offenbach"
      },
      {
         "City": " Oerlinghausen"
      },
      {
         "City": " Oer-Erkenschwick"
      },
      {
         "City": " Oelde"
      },
      {
         "City": " Odenthal"
      },
      {
         "City": " Ochtrup"
      },
      {
         "City": " Oberursel"
      },
      {
         "City": " Obertshausen"
      },
      {
         "City": " Oberschöneweide"
      },
      {
         "City": " Ober-Ramstadt"
      },
      {
         "City": " Oberkirch"
      },
      {
         "City": " Oberhausen"
      },
      {
         "City": " Oberasbach"
      },
      {
         "City": " Nürtingen"
      },
      {
         "City": " Nürnberg"
      },
      {
         "City": " Nümbrecht"
      },
      {
         "City": " Nottuln"
      },
      {
         "City": " Northeim"
      },
      {
         "City": " Nördlingen"
      },
      {
         "City": " Nordhorn"
      },
      {
         "City": " Nordhausen"
      },
      {
         "City": " Norderstedt"
      },
      {
         "City": " Nordenham"
      },
      {
         "City": " Norden"
      },
      {
         "City": " Nippes"
      },
      {
         "City": " Nikolassee"
      },
      {
         "City": " Nienburg"
      },
      {
         "City": " Niederschönhausen"
      },
      {
         "City": " Niederkrüchten"
      },
      {
         "City": " Niederkassel"
      },
      {
         "City": " Nieder-Ingelheim"
      },
      {
         "City": " Nidderau"
      },
      {
         "City": " Nidda"
      },
      {
         "City": " Neu Wulmstorf"
      },
      {
         "City": " Neuwied"
      },
      {
         "City": " Neu-Ulm"
      },
      {
         "City": " Neustrelitz"
      },
      {
         "City": " Neustadt in Holstein"
      },
      {
         "City": " Neustadt bei Coburg"
      },
      {
         "City": " Neustadt"
      },
      {
         "City": " Neustadt am Rübenberge"
      },
      {
         "City": " Neue Neustadt"
      },
      {
         "City": " Neuss"
      },
      {
         "City": " Neuruppin"
      },
      {
         "City": " Neunkirchen"
      },
      {
         "City": " Neumünster"
      },
      {
         "City": " Neumarkt in der Oberpfalz"
      },
      {
         "City": " Neu Isenburg"
      },
      {
         "City": " Neufahrn bei Freising"
      },
      {
         "City": " Neuenhagen"
      },
      {
         "City": " Neuburg an der Donau"
      },
      {
         "City": " Neubrück"
      },
      {
         "City": " Neubrandenburg"
      },
      {
         "City": " Neu-Anspach"
      },
      {
         "City": " Nettetal"
      },
      {
         "City": " Netphen"
      },
      {
         "City": " Neckarsulm"
      },
      {
         "City": " Naumburg"
      },
      {
         "City": " Nauen"
      },
      {
         "City": " Nagold"
      },
      {
         "City": " Munster"
      },
      {
         "City": " Münster"
      },
      {
         "City": " Hannoversch Münden"
      },
      {
         "City": " Munich"
      },
      {
         "City": " Müllheim"
      },
      {
         "City": " Mülheim (Ruhr)"
      },
      {
         "City": " Mühlheim am Main"
      },
      {
         "City": " Stuttgart Mühlhausen"
      },
      {
         "City": " Mühlhausen"
      },
      {
         "City": " Mühldorf"
      },
      {
         "City": " Mühlacker"
      },
      {
         "City": " Much"
      },
      {
         "City": " Mössingen"
      },
      {
         "City": " Mosbach"
      },
      {
         "City": " Moosburg"
      },
      {
         "City": " Monheim am Rhein"
      },
      {
         "City": " Mönchengladbach"
      },
      {
         "City": " Mölln"
      },
      {
         "City": " Moers"
      },
      {
         "City": " Moabit"
      },
      {
         "City": " Mittweida"
      },
      {
         "City": " Minden"
      },
      {
         "City": " Michelstadt"
      },
      {
         "City": " Metzingen"
      },
      {
         "City": " Mettmann"
      },
      {
         "City": " Meschede"
      },
      {
         "City": " Merzig"
      },
      {
         "City": " Merseburg"
      },
      {
         "City": " Meppen"
      },
      {
         "City": " Menden"
      },
      {
         "City": " Memmingen"
      },
      {
         "City": " Melle"
      },
      {
         "City": " Meissen"
      },
      {
         "City": " Meiningen"
      },
      {
         "City": " Meinerzhagen"
      },
      {
         "City": " Meiderich"
      },
      {
         "City": " Meerbusch"
      },
      {
         "City": " Meerane"
      },
      {
         "City": " Meckenheim"
      },
      {
         "City": " Mechernich"
      },
      {
         "City": " Mayen"
      },
      {
         "City": " Marzahn"
      },
      {
         "City": " Marsberg"
      },
      {
         "City": " Marl"
      },
      {
         "City": " Marktredwitz"
      },
      {
         "City": " Marktoberdorf"
      },
      {
         "City": " Markkleeberg"
      },
      {
         "City": " Märkisches Viertel"
      },
      {
         "City": " Marienfelde"
      },
      {
         "City": " Mariendorf"
      },
      {
         "City": " Marburg an der Lahn"
      },
      {
         "City": " Marbach am Neckar"
      },
      {
         "City": " Mannheim"
      },
      {
         "City": " Mainz"
      },
      {
         "City": " Maintal"
      },
      {
         "City": " Mahlsdorf"
      },
      {
         "City": " Magdeburg"
      },
      {
         "City": " Lünen"
      },
      {
         "City": " Lüneburg"
      },
      {
         "City": " Ludwigshafen am Rhein"
      },
      {
         "City": " Ludwigsfelde"
      },
      {
         "City": " Ludwigsburg"
      },
      {
         "City": " Lüdinghausen"
      },
      {
         "City": " Lüdenscheid"
      },
      {
         "City": " Luckenwalde"
      },
      {
         "City": " Lübeck"
      },
      {
         "City": " Lübbenau"
      },
      {
         "City": " Lübbecke"
      },
      {
         "City": " Loxstedt"
      },
      {
         "City": " Losheim"
      },
      {
         "City": " Lörrach"
      },
      {
         "City": " Lohr am Main"
      },
      {
         "City": " Lohne"
      },
      {
         "City": " Löhne"
      },
      {
         "City": " Lohmar"
      },
      {
         "City": " Löbau"
      },
      {
         "City": " Lippstadt"
      },
      {
         "City": " Lingen"
      },
      {
         "City": " Lindlar"
      },
      {
         "City": " Lindau"
      },
      {
         "City": " Limburg an der Lahn"
      },
      {
         "City": " Limbach-Oberfrohna"
      },
      {
         "City": " Lilienthal"
      },
      {
         "City": " Lichterfelde"
      },
      {
         "City": " Lichtenrade"
      },
      {
         "City": " Lichtenfels"
      },
      {
         "City": " Lichtenberg"
      },
      {
         "City": " Leverkusen"
      },
      {
         "City": " Leutkirch im Allgäu"
      },
      {
         "City": " Leopoldshöhe"
      },
      {
         "City": " Leonberg"
      },
      {
         "City": " Lennestadt"
      },
      {
         "City": " Lengerich"
      },
      {
         "City": " Lemgo"
      },
      {
         "City": " Leipzig"
      },
      {
         "City": " Leinfelden-Echterdingen"
      },
      {
         "City": " Leimen"
      },
      {
         "City": " Leichlingen"
      },
      {
         "City": " Lehrte"
      },
      {
         "City": " Leer"
      },
      {
         "City": " Lebach"
      },
      {
         "City": " Laupheim"
      },
      {
         "City": " Lauf an der Pegnitz"
      },
      {
         "City": " Lauchhammer"
      },
      {
         "City": " Lankwitz"
      },
      {
         "City": " Langenhorn"
      },
      {
         "City": " Langenhagen"
      },
      {
         "City": " Langenfeld"
      },
      {
         "City": " Langen"
      },
      {
         "City": " Langen"
      },
      {
         "City": " Landshut"
      },
      {
         "City": " Landsberg am Lech"
      },
      {
         "City": " Landau in der Pfalz"
      },
      {
         "City": " Lampertheim"
      },
      {
         "City": " Lahr"
      },
      {
         "City": " Lahnstein"
      },
      {
         "City": " Lage"
      },
      {
         "City": " Laatzen"
      },
      {
         "City": " Bad Laasphe"
      },
      {
         "City": " Kürten"
      },
      {
         "City": " Künzelsau"
      },
      {
         "City": " Künzell"
      },
      {
         "City": " Kulmbach"
      },
      {
         "City": " Kronberg"
      },
      {
         "City": " Kronach"
      },
      {
         "City": " Kreuztal"
      },
      {
         "City": " Kreuzberg"
      },
      {
         "City": " Kreuzau"
      },
      {
         "City": " Krefeld"
      },
      {
         "City": " Köthen"
      },
      {
         "City": " Korschenbroich"
      },
      {
         "City": " Kornwestheim"
      },
      {
         "City": " Korntal"
      },
      {
         "City": " Korbach"
      },
      {
         "City": " Köpenick"
      },
      {
         "City": " Berlin Köpenick"
      },
      {
         "City": " Konz"
      },
      {
         "City": " Konstanz"
      },
      {
         "City": " Königs Wusterhausen"
      },
      {
         "City": " Königswinter"
      },
      {
         "City": " Königstein im Taunus"
      },
      {
         "City": " Königslutter am Elm"
      },
      {
         "City": " Königsbrunn"
      },
      {
         "City": " Köln"
      },
      {
         "City": " Kolbermoor"
      },
      {
         "City": " Koblenz"
      },
      {
         "City": " Kleve"
      },
      {
         "City": " Kleinmachnow"
      },
      {
         "City": " Kitzingen"
      },
      {
         "City": " Kirchlengern"
      },
      {
         "City": " Kirchheim unter Teck"
      },
      {
         "City": " Kirchhain"
      },
      {
         "City": " Kierspe"
      },
      {
         "City": " Kiel"
      },
      {
         "City": " Kevelaer"
      },
      {
         "City": " Kerpen"
      },
      {
         "City": " Kempten (Allgäu)"
      },
      {
         "City": " Kempen"
      },
      {
         "City": " Kelkheim (Taunus)"
      },
      {
         "City": " Kelheim"
      },
      {
         "City": " Kehl"
      },
      {
         "City": " Kaulsdorf"
      },
      {
         "City": " Kaufbeuren"
      },
      {
         "City": " Kassel"
      },
      {
         "City": " Karow"
      },
      {
         "City": " Karlstadt"
      },
      {
         "City": " Karlsruhe"
      },
      {
         "City": " Karlshorst"
      },
      {
         "City": " Karlsfeld"
      },
      {
         "City": " Karben"
      },
      {
         "City": " Kamp-Lintfort"
      },
      {
         "City": " Kamenz"
      },
      {
         "City": " Kamen"
      },
      {
         "City": " Kaltenkirchen"
      },
      {
         "City": " Kaiserslautern"
      },
      {
         "City": " Kaarst"
      },
      {
         "City": " Jülich"
      },
      {
         "City": " Jüchen"
      },
      {
         "City": " Johannisthal"
      },
      {
         "City": " Jena"
      },
      {
         "City": " Itzehoe"
      },
      {
         "City": " Isernhagen Farster Bauerschaft"
      },
      {
         "City": " Iserlohn"
      },
      {
         "City": " Ingolstadt"
      },
      {
         "City": " Ilmenau"
      },
      {
         "City": " Illingen"
      },
      {
         "City": " Illertissen"
      },
      {
         "City": " Idstein"
      },
      {
         "City": " Idar-Oberstein"
      },
      {
         "City": " Ibbenbüren"
      },
      {
         "City": " Husum"
      },
      {
         "City": " Hürth"
      },
      {
         "City": " Hünfeld"
      },
      {
         "City": " Hummelsbüttel"
      },
      {
         "City": " Humboldtkolonie"
      },
      {
         "City": " Hude"
      },
      {
         "City": " Hückeswagen"
      },
      {
         "City": " Hückelhoven"
      },
      {
         "City": " Hoyerswerda"
      },
      {
         "City": " Höxter"
      },
      {
         "City": " Hövelhof"
      },
      {
         "City": " Hörstel"
      },
      {
         "City": " Horb am Neckar"
      },
      {
         "City": " Homburg"
      },
      {
         "City": " Holzwickede"
      },
      {
         "City": " Holzminden"
      },
      {
         "City": " Holzkirchen"
      },
      {
         "City": " Hohenstein-Ernstthal"
      },
      {
         "City": " Hohen Neuendorf"
      },
      {
         "City": " Hofheim am Taunus"
      },
      {
         "City": " Hofgeismar"
      },
      {
         "City": " Hof"
      },
      {
         "City": " Hockenheim"
      },
      {
         "City": " Hochheim am Main"
      },
      {
         "City": " Hochfeld"
      },
      {
         "City": " Hille"
      },
      {
         "City": " Hildesheim"
      },
      {
         "City": " Hilden"
      },
      {
         "City": " Hilchenbach"
      },
      {
         "City": " Hiddenhausen"
      },
      {
         "City": " Heusweiler"
      },
      {
         "City": " Heusenstamm"
      },
      {
         "City": " Hettstedt"
      },
      {
         "City": " Hessisch Oldendorf"
      },
      {
         "City": " Herzogenrath"
      },
      {
         "City": " Herzogenaurach"
      },
      {
         "City": " Herten"
      },
      {
         "City": " Herrenberg"
      },
      {
         "City": " Herne"
      },
      {
         "City": " Hermsdorf"
      },
      {
         "City": " Herford"
      },
      {
         "City": " Herdecke"
      },
      {
         "City": " Herborn"
      },
      {
         "City": " Heppenheim an der Bergstrasse"
      },
      {
         "City": " Hennigsdorf"
      },
      {
         "City": " Hennef"
      },
      {
         "City": " Hemmingen"
      },
      {
         "City": " Hemer"
      },
      {
         "City": " Helmstedt"
      },
      {
         "City": " Hellersdorf"
      },
      {
         "City": " Heinsberg"
      },
      {
         "City": " Heilbad Heiligenstadt"
      },
      {
         "City": " Heiligensee"
      },
      {
         "City": " Heiligenhaus"
      },
      {
         "City": " Heilbronn"
      },
      {
         "City": " Heidenheim an der Brenz"
      },
      {
         "City": " Heidenau"
      },
      {
         "City": " Heidelberg"
      },
      {
         "City": " Heide"
      },
      {
         "City": " Hechingen"
      },
      {
         "City": " Hattingen"
      },
      {
         "City": " Hattersheim"
      },
      {
         "City": " Haßloch"
      },
      {
         "City": " Harsewinkel"
      },
      {
         "City": " Haren"
      },
      {
         "City": " Harburg"
      },
      {
         "City": " Hannover"
      },
      {
         "City": " Hanau am Main"
      },
      {
         "City": " Hamminkeln"
      },
      {
         "City": " Hamm"
      },
      {
         "City": " Hameln"
      },
      {
         "City": " Wandsbek"
      },
      {
         "City": " Marienthal"
      },
      {
         "City": " Hamburg-Mitte"
      },
      {
         "City": " Eimsbüttel"
      },
      {
         "City": " Altona"
      },
      {
         "City": " Hamburg"
      },
      {
         "City": " Halver"
      },
      {
         "City": " Haltern"
      },
      {
         "City": " Halstenbek"
      },
      {
         "City": " Halle"
      },
      {
         "City": " Halle (Saale)"
      },
      {
         "City": " Haldensleben I"
      },
      {
         "City": " Halberstadt"
      },
      {
         "City": " Hakenfelde"
      },
      {
         "City": " Haiger"
      },
      {
         "City": " Hagen"
      },
      {
         "City": " Haar"
      },
      {
         "City": " Haan"
      },
      {
         "City": " Gütersloh"
      },
      {
         "City": " Güstrow"
      },
      {
         "City": " Gunzenhausen"
      },
      {
         "City": " Günzburg"
      },
      {
         "City": " Gummersbach"
      },
      {
         "City": " Guben"
      },
      {
         "City": " Groß-Umstadt"
      },
      {
         "City": " Großostheim"
      },
      {
         "City": " Groß-Gerau"
      },
      {
         "City": " Großenhain"
      },
      {
         "City": " Gronau"
      },
      {
         "City": " Gröbenzell"
      },
      {
         "City": " Grimma"
      },
      {
         "City": " Griesheim"
      },
      {
         "City": " Grevenbroich"
      },
      {
         "City": " Greven"
      },
      {
         "City": " Greiz"
      },
      {
         "City": " Greifswald"
      },
      {
         "City": " Grefrath"
      },
      {
         "City": " Göttingen"
      },
      {
         "City": " Gotha"
      },
      {
         "City": " Goslar"
      },
      {
         "City": " Görlitz"
      },
      {
         "City": " Göppingen"
      },
      {
         "City": " Goch"
      },
      {
         "City": " Glinde"
      },
      {
         "City": " Glauchau"
      },
      {
         "City": " Gladbeck"
      },
      {
         "City": " Ginsheim-Gustavsburg"
      },
      {
         "City": " Gilching"
      },
      {
         "City": " Gifhorn"
      },
      {
         "City": " Gießen"
      },
      {
         "City": " Giengen an der Brenz"
      },
      {
         "City": " Gevelsberg"
      },
      {
         "City": " Gesundbrunnen"
      },
      {
         "City": " Geseke"
      },
      {
         "City": " Gescher"
      },
      {
         "City": " Gersthofen"
      },
      {
         "City": " Germersheim"
      },
      {
         "City": " Germering"
      },
      {
         "City": " Gerlingen"
      },
      {
         "City": " Geretsried"
      },
      {
         "City": " Gera"
      },
      {
         "City": " Georgsmarienhütte"
      },
      {
         "City": " Gelsenkirchen"
      },
      {
         "City": " Gelnhausen"
      },
      {
         "City": " Geldern"
      },
      {
         "City": " Geislingen an der Steige"
      },
      {
         "City": " Geilenkirchen"
      },
      {
         "City": " Geesthacht"
      },
      {
         "City": " Gauting"
      },
      {
         "City": " Garmisch-Partenkirchen"
      },
      {
         "City": " Garching bei München"
      },
      {
         "City": " Garbsen"
      },
      {
         "City": " Ganderkesee"
      },
      {
         "City": " Gaggenau"
      },
      {
         "City": " Fürth"
      },
      {
         "City": " Fürstenwalde"
      },
      {
         "City": " Fürstenfeldbruck"
      },
      {
         "City": " Fulda"
      },
      {
         "City": " Fröndenberg"
      },
      {
         "City": " Frohnau"
      },
      {
         "City": " Friesoythe"
      },
      {
         "City": " Friedrichshain"
      },
      {
         "City": " Friedrichshagen"
      },
      {
         "City": " Friedrichshafen"
      },
      {
         "City": " Friedrichsfelde"
      },
      {
         "City": " Friedrichsdorf"
      },
      {
         "City": " Friedenau"
      },
      {
         "City": " Friedberg"
      },
      {
         "City": " Friedberg"
      },
      {
         "City": " Freudenstadt"
      },
      {
         "City": " Freudenberg"
      },
      {
         "City": " Freital"
      },
      {
         "City": " Freising"
      },
      {
         "City": " Freilassing"
      },
      {
         "City": " Freiburg"
      },
      {
         "City": " Freiberg am Neckar"
      },
      {
         "City": " Freiberg"
      },
      {
         "City": " Frechen"
      },
      {
         "City": " Frankfurt am Main"
      },
      {
         "City": " Frankfurt (Oder)"
      },
      {
         "City": " Frankenthal"
      },
      {
         "City": " Frankenberg"
      },
      {
         "City": " Frankenberg"
      },
      {
         "City": " Forst"
      },
      {
         "City": " Forchheim"
      },
      {
         "City": " Flörsheim"
      },
      {
         "City": " Flensburg"
      },
      {
         "City": " Finsterwalde"
      },
      {
         "City": " Finnentrop"
      },
      {
         "City": " Stuttgart Feuerbach"
      },
      {
         "City": " Fellbach"
      },
      {
         "City": " Falkensee"
      },
      {
         "City": " Eutin"
      },
      {
         "City": " Euskirchen"
      },
      {
         "City": " Ettlingen"
      },
      {
         "City": " Esslingen"
      },
      {
         "City": " Essen"
      },
      {
         "City": " Espelkamp"
      },
      {
         "City": " Eschweiler"
      },
      {
         "City": " Eschwege"
      },
      {
         "City": " Eschborn"
      },
      {
         "City": " Erwitte"
      },
      {
         "City": " Erlangen"
      },
      {
         "City": " Erkrath"
      },
      {
         "City": " Erkelenz"
      },
      {
         "City": " Erfurt"
      },
      {
         "City": " Erftstadt"
      },
      {
         "City": " Erding"
      },
      {
         "City": " Eppingen"
      },
      {
         "City": " Eppelborn"
      },
      {
         "City": " Ennigerloh"
      },
      {
         "City": " Ennepetal"
      },
      {
         "City": " Enger"
      },
      {
         "City": " Engelskirchen"
      },
      {
         "City": " Emsdetten"
      },
      {
         "City": " Emmerich"
      },
      {
         "City": " Emmendingen"
      },
      {
         "City": " Emden"
      },
      {
         "City": " Eltville"
      },
      {
         "City": " Elsdorf"
      },
      {
         "City": " Elmshorn"
      },
      {
         "City": " Ellwangen"
      },
      {
         "City": " Eitorf"
      },
      {
         "City": " Eislingen"
      },
      {
         "City": " Eisenhüttenstadt"
      },
      {
         "City": " Eisenach"
      },
      {
         "City": " Einbeck"
      },
      {
         "City": " Eilenburg"
      },
      {
         "City": " Ehingen"
      },
      {
         "City": " Eggenstein-Leopoldshafen"
      },
      {
         "City": " Edewecht"
      },
      {
         "City": " Eckernförde"
      },
      {
         "City": " Eberswalde"
      },
      {
         "City": " Ebersbach an der Fils"
      },
      {
         "City": " Eberbach"
      },
      {
         "City": " Düsseldorf"
      },
      {
         "City": " Düren"
      },
      {
         "City": " Dülmen"
      },
      {
         "City": " Duisburg"
      },
      {
         "City": " Duderstadt"
      },
      {
         "City": " Dresden"
      },
      {
         "City": " Drensteinfurt"
      },
      {
         "City": " Dreieich"
      },
      {
         "City": " Dortmund"
      },
      {
         "City": " Dorsten"
      },
      {
         "City": " Dormagen"
      },
      {
         "City": " Donauwörth"
      },
      {
         "City": " Donaueschingen"
      },
      {
         "City": " Döbeln"
      },
      {
         "City": " Ditzingen"
      },
      {
         "City": " Dinslaken"
      },
      {
         "City": " Dingolfing"
      },
      {
         "City": " Dillingen an der Donau"
      },
      {
         "City": " Dillingen"
      },
      {
         "City": " Dillenburg"
      },
      {
         "City": " Dietzenbach"
      },
      {
         "City": " Diepholz"
      },
      {
         "City": " Dieburg"
      },
      {
         "City": " Deutz"
      },
      {
         "City": " Detmold"
      },
      {
         "City": " Dessau"
      },
      {
         "City": " Delmenhorst"
      },
      {
         "City": " Delitzsch"
      },
      {
         "City": " Delbrück"
      },
      {
         "City": " Deggendorf"
      },
      {
         "City": " Datteln"
      },
      {
         "City": " Darmstadt"
      },
      {
         "City": " Damme"
      },
      {
         "City": " Dahlem"
      },
      {
         "City": " Dachau"
      },
      {
         "City": " Cuxhaven"
      },
      {
         "City": " Crimmitschau"
      },
      {
         "City": " Crailsheim"
      },
      {
         "City": " Cottbus"
      },
      {
         "City": " Coswig"
      },
      {
         "City": " Coesfeld"
      },
      {
         "City": " Coburg"
      },
      {
         "City": " Cloppenburg"
      },
      {
         "City": " Clausthal-Zellerfeld"
      },
      {
         "City": " Chemnitz"
      },
      {
         "City": " Charlottenburg"
      },
      {
         "City": " Cham"
      },
      {
         "City": " Celle"
      },
      {
         "City": " Castrop-Rauxel"
      },
      {
         "City": " Calw"
      },
      {
         "City": " Buxtehude"
      },
      {
         "City": " Butzbach"
      },
      {
         "City": " Bürstadt"
      },
      {
         "City": " Burscheid"
      },
      {
         "City": " Burghausen"
      },
      {
         "City": " Burgdorf"
      },
      {
         "City": " Burg bei Magdeburg"
      },
      {
         "City": " Büren"
      },
      {
         "City": " Bünde"
      },
      {
         "City": " Bühl"
      },
      {
         "City": " Büdingen"
      },
      {
         "City": " Buckow"
      },
      {
         "City": " Bückeburg"
      },
      {
         "City": " Buchholz in der Nordheide"
      },
      {
         "City": " Französisch Buchholz"
      },
      {
         "City": " Buchen"
      },
      {
         "City": " Brühl"
      },
      {
         "City": " Brüggen"
      },
      {
         "City": " Bruckmühl"
      },
      {
         "City": " Bruchsal"
      },
      {
         "City": " Bruchköbel"
      },
      {
         "City": " Britz"
      },
      {
         "City": " Brilon"
      },
      {
         "City": " Bretten"
      },
      {
         "City": " Bremervörde"
      },
      {
         "City": " Bremerhaven"
      },
      {
         "City": " Bremen"
      },
      {
         "City": " Braunschweig"
      },
      {
         "City": " Brandenburg an der Havel"
      },
      {
         "City": " Bramsche"
      },
      {
         "City": " Brakel"
      },
      {
         "City": " Brake (Unterweser)"
      },
      {
         "City": " Brackenheim"
      },
      {
         "City": " Bottrop"
      },
      {
         "City": " Bornheim"
      },
      {
         "City": " Borna"
      },
      {
         "City": " Borken"
      },
      {
         "City": " Boppard"
      },
      {
         "City": " Bonn"
      },
      {
         "City": " Bönen"
      },
      {
         "City": " Bogenhausen"
      },
      {
         "City": " Bochum"
      },
      {
         "City": " Bocholt"
      },
      {
         "City": " Böblingen"
      },
      {
         "City": " Bobingen"
      },
      {
         "City": " Blomberg"
      },
      {
         "City": " Blieskastel"
      },
      {
         "City": " Blankenburg"
      },
      {
         "City": " Bitterfeld-Wolfen"
      },
      {
         "City": " Bingen am Rhein"
      },
      {
         "City": " Bietigheim-Bissingen"
      },
      {
         "City": " Biesdorf"
      },
      {
         "City": " Bielefeld"
      },
      {
         "City": " Biberach an der Riß"
      },
      {
         "City": " Bexbach"
      },
      {
         "City": " Beverungen"
      },
      {
         "City": " Bernburg"
      },
      {
         "City": " Bernau bei Berlin"
      },
      {
         "City": " Berlin"
      },
      {
         "City": " Bergneustadt"
      },
      {
         "City": " Bergkamen"
      },
      {
         "City": " Bergisch Gladbach"
      },
      {
         "City": " Bergheim"
      },
      {
         "City": " Bensheim"
      },
      {
         "City": " Bendorf"
      },
      {
         "City": " Bedburg"
      },
      {
         "City": " Beckum"
      },
      {
         "City": " Beckingen"
      },
      {
         "City": " Bayreuth"
      },
      {
         "City": " Bautzen"
      },
      {
         "City": " Baunatal"
      },
      {
         "City": " Baumschulenweg"
      },
      {
         "City": " Bassum"
      },
      {
         "City": " Bamberg"
      },
      {
         "City": " Balingen"
      },
      {
         "City": " Baiersbronn"
      },
      {
         "City": " Baesweiler"
      },
      {
         "City": " Bad Zwischenahn"
      },
      {
         "City": " Bad Wildungen"
      },
      {
         "City": " Bad Waldsee"
      },
      {
         "City": " Bad Vilbel"
      },
      {
         "City": " Bad Tölz"
      },
      {
         "City": " Bad Soden am Taunus"
      },
      {
         "City": " Bad Segeberg"
      },
      {
         "City": " Bad Schwartau"
      },
      {
         "City": " Bad Salzungen"
      },
      {
         "City": " Bad Salzuflen"
      },
      {
         "City": " Bad Säckingen"
      },
      {
         "City": " Bad Reichenhall"
      },
      {
         "City": " Bad Rappenau"
      },
      {
         "City": " Bad Pyrmont"
      },
      {
         "City": " Bad Oldesloe"
      },
      {
         "City": " Bad Oeynhausen"
      },
      {
         "City": " Bad Neustadt an der Saale"
      },
      {
         "City": " Bad Neuenahr-Ahrweiler"
      },
      {
         "City": " Bad Nauheim"
      },
      {
         "City": " Bad Münstereifel"
      },
      {
         "City": " Bad Münder am Deister"
      },
      {
         "City": " Bad Mergentheim"
      },
      {
         "City": " Bad Lippspringe"
      },
      {
         "City": " Bad Langensalza"
      },
      {
         "City": " Bad Kreuznach"
      },
      {
         "City": " Bad Kissingen"
      },
      {
         "City": " Bad Honnef"
      },
      {
         "City": " Bad Homburg vor der Höhe"
      },
      {
         "City": " Bad Hersfeld"
      },
      {
         "City": " Bad Harzburg"
      },
      {
         "City": " Bad Essen"
      },
      {
         "City": " Baden-Baden"
      },
      {
         "City": " Bad Dürkheim"
      },
      {
         "City": " Bad Driburg"
      },
      {
         "City": " Bad Berleburg"
      },
      {
         "City": " Bad Bentheim"
      },
      {
         "City": " Bad Aibling"
      },
      {
         "City": " Backnang"
      },
      {
         "City": " Babenhausen"
      },
      {
         "City": " Aurich"
      },
      {
         "City": " Augsburg"
      },
      {
         "City": " Auerbach"
      },
      {
         "City": " Aue"
      },
      {
         "City": " Attendorn"
      },
      {
         "City": " Aschersleben"
      },
      {
         "City": " Ascheberg"
      },
      {
         "City": " Aschaffenburg"
      },
      {
         "City": " Bad Arolsen"
      },
      {
         "City": " Arnstadt"
      },
      {
         "City": " Arnsberg"
      },
      {
         "City": " Apolda"
      },
      {
         "City": " Ansbach"
      },
      {
         "City": " Annaberg-Buchholz"
      },
      {
         "City": " Angermünde"
      },
      {
         "City": " Andernach"
      },
      {
         "City": " Amberg"
      },
      {
         "City": " Alzey"
      },
      {
         "City": " Alzenau in Unterfranken"
      },
      {
         "City": " Altglienicke"
      },
      {
         "City": " Altenburg"
      },
      {
         "City": " Altena"
      },
      {
         "City": " Altdorf"
      },
      {
         "City": " Alsfeld"
      },
      {
         "City": " Alsdorf"
      },
      {
         "City": " Alfter"
      },
      {
         "City": " Alfeld"
      },
      {
         "City": " Albstadt"
      },
      {
         "City": " Aichach"
      },
      {
         "City": " Ahrensburg"
      },
      {
         "City": " Ahlen"
      },
      {
         "City": " Ahaus"
      },
      {
         "City": " Adlershof"
      },
      {
         "City": " Achim"
      },
      {
         "City": " Achern"
      },
      {
         "City": " Aalen"
      },
      {
         "City": " Vellmar"
      },
      {
         "City": " Henstedt-Ulzburg"
      },
      {
         "City": " Aachen"
      },
      {
         "City": " Mörfelden-Walldorf"
      },
      {
         "City": " Riedstadt"
      },
      {
         "City": " Lauda-Königshofen"
      },
      {
         "City": " Filderstadt"
      },
      {
         "City": " Ostfildern"
      },
      {
         "City": " Rodgau"
      },
      {
         "City": " Gropiusstadt"
      },
      {
         "City": " Seeheim-Jugenheim"
      },
      {
         "City": " Charlottenburg-Nord"
      },
      {
         "City": " Mitte"
      },
      {
         "City": " Spremberg"
      },
      {
         "City": " Rheinstetten"
      },
      {
         "City": " Altstadt Sud"
      },
      {
         "City": " Altstadt Nord"
      },
      {
         "City": " Neuehrenfeld"
      },
      {
         "City": " Bilderstoeckchen"
      },
      {
         "City": " Stuttgart-Ost"
      },
      {
         "City": " Bochum-Hordel"
      },
      {
         "City": " St. Pauli"
      },
      {
         "City": " Eidelstedt"
      },
      {
         "City": " Halle Neustadt"
      },
      {
         "City": " Bergedorf"
      },
      {
         "City": " Spandau"
      },
      {
         "City": " Berlin Schöneberg"
      },
      {
         "City": " Berlin Treptow"
      },
      {
         "City": " Niederrad"
      },
      {
         "City": " Haselbachtal"
      },
      {
         "City": " Barmbek-Nord"
      },
      {
         "City": " Farmsen-Berne"
      },
      {
         "City": " Falkenhagener Feld"
      },
      {
         "City": " Neu-Hohenschönhausen"
      },
      {
         "City": " Alt-Hohenschönhausen"
      },
      {
         "City": " Fennpfuhl"
      },
      {
         "City": " Hamburg-Nord"
      },
      {
         "City": " Burg Unter-Falkenstein"
      },
      {
         "City": " Neustadt/Nord"
      },
      {
         "City": " Neustadt/Süd"
      },
      {
         "City": " Kalk"
      },
      {
         "City": " Mülheim"
      },
      {
         "City": " Gartenstadt"
      }
   ],
   "Djibouti": [
      {
         "City": " Tadjoura"
      },
      {
         "City": " Obock"
      },
      {
         "City": " Djibouti"
      },
      {
         "City": " Ḏânan"
      },
      {
         "City": " 'Ali Sabieh"
      }
   ],
   "Denmark": [
      {
         "City": " Viborg"
      },
      {
         "City": " Vejle"
      },
      {
         "City": " Vanløse"
      },
      {
         "City": " Taastrup"
      },
      {
         "City": " Svendborg"
      },
      {
         "City": " Stenløse"
      },
      {
         "City": " Sønderborg"
      },
      {
         "City": " Slagelse"
      },
      {
         "City": " Skive"
      },
      {
         "City": " Silkeborg"
      },
      {
         "City": " Roskilde"
      },
      {
         "City": " Rødovre"
      },
      {
         "City": " Ringsted"
      },
      {
         "City": " Randers"
      },
      {
         "City": " Odense"
      },
      {
         "City": " Nykøbing Falster"
      },
      {
         "City": " Nyborg"
      },
      {
         "City": " Næstved"
      },
      {
         "City": " Nørresundby"
      },
      {
         "City": " Lillerød"
      },
      {
         "City": " Korsør"
      },
      {
         "City": " Køge"
      },
      {
         "City": " Copenhagen"
      },
      {
         "City": " Kolding"
      },
      {
         "City": " Kalundborg"
      },
      {
         "City": " Ishøj"
      },
      {
         "City": " Hvidovre"
      },
      {
         "City": " Horsens"
      },
      {
         "City": " Hørsholm"
      },
      {
         "City": " Holstebro"
      },
      {
         "City": " Holbæk"
      },
      {
         "City": " Hjørring"
      },
      {
         "City": " Hillerød"
      },
      {
         "City": " Herning"
      },
      {
         "City": " Helsingør"
      },
      {
         "City": " Haderslev"
      },
      {
         "City": " Greve"
      },
      {
         "City": " Glostrup"
      },
      {
         "City": " Frederikshavn"
      },
      {
         "City": " Frederiksberg"
      },
      {
         "City": " Fredericia"
      },
      {
         "City": " Farum"
      },
      {
         "City": " Esbjerg"
      },
      {
         "City": " Charlottenlund"
      },
      {
         "City": " Birkerød"
      },
      {
         "City": " Ballerup"
      },
      {
         "City": " Århus"
      },
      {
         "City": " Aalborg"
      },
      {
         "City": " Albertslund"
      },
      {
         "City": " Aabenraa"
      }
   ],
   "Dominica": [
      {
         "City": " Roseau"
      }
   ],
   "Dominican Republic": [
      {
         "City": " Villa Francisca"
      },
      {
         "City": " Villa Consuelo"
      },
      {
         "City": " Villa Bisonó"
      },
      {
         "City": " Villa Altagracia"
      },
      {
         "City": " Tamboril"
      },
      {
         "City": " Santo Domingo"
      },
      {
         "City": " Santiago de los Caballeros"
      },
      {
         "City": " Santa Cruz de El Seibo"
      },
      {
         "City": " Santa Cruz de Barahona"
      },
      {
         "City": " San Pedro de Macorís"
      },
      {
         "City": " San Juan de la Maguana"
      },
      {
         "City": " San José de Ocoa"
      },
      {
         "City": " San Francisco de Macorís"
      },
      {
         "City": " San Fernando de Monte Cristi"
      },
      {
         "City": " Puerto Plata"
      },
      {
         "City": " Salvaleón de Higüey"
      },
      {
         "City": " Salcedo"
      },
      {
         "City": " Sabaneta"
      },
      {
         "City": " Sabana Grande de Boyá"
      },
      {
         "City": " Río Grande"
      },
      {
         "City": " Quisqueya"
      },
      {
         "City": " Punta Cana"
      },
      {
         "City": " Neiba"
      },
      {
         "City": " Nagua"
      },
      {
         "City": " Monte Plata"
      },
      {
         "City": " Moca"
      },
      {
         "City": " Mao"
      },
      {
         "City": " Las Matas de Farfán"
      },
      {
         "City": " La Romana"
      },
      {
         "City": " Jarabacoa"
      },
      {
         "City": " Hato Mayor del Rey"
      },
      {
         "City": " Esperanza"
      },
      {
         "City": " Dajabón"
      },
      {
         "City": " Cotuí"
      },
      {
         "City": " Constanza"
      },
      {
         "City": " Concepción de La Vega"
      },
      {
         "City": " Ciudad Nueva"
      },
      {
         "City": " Bonao"
      },
      {
         "City": " Boca Chica"
      },
      {
         "City": " San Cristóbal"
      },
      {
         "City": " Bella Vista"
      },
      {
         "City": " Bayaguana"
      },
      {
         "City": " Baní"
      },
      {
         "City": " Bajos de Haina"
      },
      {
         "City": " Azua"
      },
      {
         "City": " Santo Domingo Oeste"
      }
   ],
   "Algeria": [
      {
         "City": " Boumerdas"
      },
      {
         "City": " Zeribet el Oued"
      },
      {
         "City": " Zeralda"
      },
      {
         "City": " Zemoura"
      },
      {
         "City": " Touggourt"
      },
      {
         "City": " Tolga"
      },
      {
         "City": " Tlemcen"
      },
      {
         "City": " Tizi Rached"
      },
      {
         "City": " Tizi Ouzou"
      },
      {
         "City": " Tizi-n-Tleta"
      },
      {
         "City": " Tizi Gheniff"
      },
      {
         "City": " Tissemsilt"
      },
      {
         "City": " Tirmitine"
      },
      {
         "City": " Tipasa"
      },
      {
         "City": " Tindouf"
      },
      {
         "City": " Timizart"
      },
      {
         "City": " Timimoun"
      },
      {
         "City": " el hed"
      },
      {
         "City": " Tiaret"
      },
      {
         "City": " Theniet el Had"
      },
      {
         "City": " Thenia"
      },
      {
         "City": " Telerghma"
      },
      {
         "City": " Tébessa"
      },
      {
         "City": " Tebesbest"
      },
      {
         "City": " Tazoult-Lambese"
      },
      {
         "City": " Tamanrasset"
      },
      {
         "City": " Tamalous"
      },
      {
         "City": " Tadmaït"
      },
      {
         "City": " Sour el Ghozlane"
      },
      {
         "City": " Souma"
      },
      {
         "City": " Lardjem"
      },
      {
         "City": " Souk Ahras"
      },
      {
         "City": " Sougueur"
      },
      {
         "City": " Skikda"
      },
      {
         "City": " Sig"
      },
      {
         "City": " Sidi Okba"
      },
      {
         "City": " Sidi Moussa"
      },
      {
         "City": " Sidi Mérouane"
      },
      {
         "City": " Sidi Khaled"
      },
      {
         "City": " Sidi ech Chahmi"
      },
      {
         "City": " Sidi Bel Abbès"
      },
      {
         "City": " Sidi Amrane"
      },
      {
         "City": " Sidi Akkacha"
      },
      {
         "City": " Sidi Aïssa"
      },
      {
         "City": " Sidi Abdelli"
      },
      {
         "City": " Sfizef"
      },
      {
         "City": " Sétif"
      },
      {
         "City": " Sedrata"
      },
      {
         "City": " Seddouk"
      },
      {
         "City": " Sebdou"
      },
      {
         "City": " Saoula"
      },
      {
         "City": " Salah Bey"
      },
      {
         "City": " Saïda"
      },
      {
         "City": " Rouissat"
      },
      {
         "City": " Rouiba"
      },
      {
         "City": " Rouached"
      },
      {
         "City": " Robbah"
      },
      {
         "City": " Remchi"
      },
      {
         "City": " Relizane"
      },
      {
         "City": " Reguiba"
      },
      {
         "City": " Reghaïa"
      },
      {
         "City": " Reggane"
      },
      {
         "City": " Râs el Oued"
      },
      {
         "City": " Râs el Aïoun"
      },
      {
         "City": " Oum el Bouaghi"
      },
      {
         "City": " Ouled Mimoun"
      },
      {
         "City": " Oued Sly"
      },
      {
         "City": " Oued Rhiou"
      },
      {
         "City": " Oued Fodda"
      },
      {
         "City": " Oued el Alleug"
      },
      {
         "City": " Oued el Abtal"
      },
      {
         "City": " Ouargla"
      },
      {
         "City": " Oran"
      },
      {
         "City": " Nedroma"
      },
      {
         "City": " Naciria"
      },
      {
         "City": " M’Sila"
      },
      {
         "City": " Mouzaïa"
      },
      {
         "City": " Mostaganem"
      },
      {
         "City": " Mila"
      },
      {
         "City": " Metlili Chaamba"
      },
      {
         "City": " Messaad"
      },
      {
         "City": " Meskiana"
      },
      {
         "City": " Mers el Kebir"
      },
      {
         "City": " Merouana"
      },
      {
         "City": " Melouza"
      },
      {
         "City": " Mekla"
      },
      {
         "City": " Mehdia"
      },
      {
         "City": " Megarine"
      },
      {
         "City": " Meftah"
      },
      {
         "City": " Médéa"
      },
      {
         "City": " Mazouna"
      },
      {
         "City": " Mascara"
      },
      {
         "City": " Mansourah"
      },
      {
         "City": " Mansoûra"
      },
      {
         "City": " Makouda"
      },
      {
         "City": " L’Arbaa Naït Irathen"
      },
      {
         "City": " Larbaâ"
      },
      {
         "City": " Lakhdaria"
      },
      {
         "City": " Laghouat"
      },
      {
         "City": " Ksar el Boukhari"
      },
      {
         "City": " Ksar Chellala"
      },
      {
         "City": " Kolea"
      },
      {
         "City": " Khenchela"
      },
      {
         "City": " Khemis Miliana"
      },
      {
         "City": " Khemis el Khechna"
      },
      {
         "City": " Kerkera"
      },
      {
         "City": " Jijel"
      },
      {
         "City": " Djidiouia"
      },
      {
         "City": " Isser"
      },
      {
         "City": " I-n-Salah"
      },
      {
         "City": " Ighram"
      },
      {
         "City": " Hennaya"
      },
      {
         "City": " Héliopolis"
      },
      {
         "City": " Hassi Messaoud"
      },
      {
         "City": " Hammamet"
      },
      {
         "City": " Hammam Bou Hadjar"
      },
      {
         "City": " Hamma Bouziane"
      },
      {
         "City": " Hadjout"
      },
      {
         "City": " Guelma"
      },
      {
         "City": " Ghardaïa"
      },
      {
         "City": " Frenda"
      },
      {
         "City": " Freha"
      },
      {
         "City": " Feraoun"
      },
      {
         "City": " Es Senia"
      },
      {
         "City": " El Tarf"
      },
      {
         "City": " El Oued"
      },
      {
         "City": " El Malah"
      },
      {
         "City": " El Kseur"
      },
      {
         "City": " El Khroub"
      },
      {
         "City": " El Kala"
      },
      {
         "City": " El Idrissia"
      },
      {
         "City": " El Hadjira"
      },
      {
         "City": " El Hadjar"
      },
      {
         "City": " El Eulma"
      },
      {
         "City": " El Bayadh"
      },
      {
         "City": " El Attaf"
      },
      {
         "City": " Chlef"
      },
      {
         "City": " El Aouinet"
      },
      {
         "City": " El Amria"
      },
      {
         "City": " El Affroun"
      },
      {
         "City": " El Achir"
      },
      {
         "City": " El Abiodh Sidi Cheikh"
      },
      {
         "City": " El Abadia"
      },
      {
         "City": " Ech Chettia"
      },
      {
         "City": " Drean"
      },
      {
         "City": " Draa el Mizan"
      },
      {
         "City": " Draa Ben Khedda"
      },
      {
         "City": " Douera"
      },
      {
         "City": " Djelfa"
      },
      {
         "City": " Djamaa"
      },
      {
         "City": " Didouche Mourad"
      },
      {
         "City": " Dellys"
      },
      {
         "City": " Debila"
      },
      {
         "City": " Dar el Beïda"
      },
      {
         "City": " Dar Chioukh"
      },
      {
         "City": " Constantine"
      },
      {
         "City": " Chorfa"
      },
      {
         "City": " Chiffa"
      },
      {
         "City": " Chetouane"
      },
      {
         "City": " Cheria"
      },
      {
         "City": " Cheraga"
      },
      {
         "City": " Chemini"
      },
      {
         "City": " Chelghoum el Aïd"
      },
      {
         "City": " Chebli"
      },
      {
         "City": " Charef"
      },
      {
         "City": " Chabet el Ameur"
      },
      {
         "City": " Brezina"
      },
      {
         "City": " Bou Tlelis"
      },
      {
         "City": " Boumahra Ahmed"
      },
      {
         "City": " Boukadir"
      },
      {
         "City": " Bou Ismaïl"
      },
      {
         "City": " Bouïra"
      },
      {
         "City": " Bouinan"
      },
      {
         "City": " Bou Hanifia el Hamamat"
      },
      {
         "City": " Bougara"
      },
      {
         "City": " Bougaa"
      },
      {
         "City": " Boufarik"
      },
      {
         "City": " Boudouaou"
      },
      {
         "City": " Boudjima"
      },
      {
         "City": " Boû Arfa"
      },
      {
         "City": " Bordj Zemoura"
      },
      {
         "City": " Bordj Ghdir"
      },
      {
         "City": " Bordj el Kiffan"
      },
      {
         "City": " Bordj Bou Arreridj"
      },
      {
         "City": " Boghni"
      },
      {
         "City": " Blida"
      },
      {
         "City": " Biskra"
      },
      {
         "City": " Birkhadem"
      },
      {
         "City": " Birine"
      },
      {
         "City": " Bir el Djir"
      },
      {
         "City": " Bir el Ater"
      },
      {
         "City": " Besbes"
      },
      {
         "City": " Berrouaghia"
      },
      {
         "City": " Berriane"
      },
      {
         "City": " Berrahal"
      },
      {
         "City": " Bensekrane"
      },
      {
         "City": " Ben Mehidi"
      },
      {
         "City": " Beni Saf"
      },
      {
         "City": " Beni Mester"
      },
      {
         "City": " Beni Mered"
      },
      {
         "City": " Beni Douala"
      },
      {
         "City": " Beni Amrane"
      },
      {
         "City": " Bejaïa"
      },
      {
         "City": " Béchar"
      },
      {
         "City": " Batna"
      },
      {
         "City": " Barika"
      },
      {
         "City": " Barbacha"
      },
      {
         "City": " Baraki"
      },
      {
         "City": " Bab Ezzouar"
      },
      {
         "City": " Azzaba"
      },
      {
         "City": " Azazga"
      },
      {
         "City": " Arris"
      },
      {
         "City": " Arhribs"
      },
      {
         "City": " Arbatache"
      },
      {
         "City": " Aoulef"
      },
      {
         "City": " Annaba"
      },
      {
         "City": " Ammi Moussa"
      },
      {
         "City": " Amizour"
      },
      {
         "City": " Algiers"
      },
      {
         "City": " Akbou"
      },
      {
         "City": " Aïn Touta"
      },
      {
         "City": " Aïn Temouchent"
      },
      {
         "City": " Aïn Taya"
      },
      {
         "City": " Aïn Smara"
      },
      {
         "City": " Aïn Sefra"
      },
      {
         "City": " Aïn Oussera"
      },
      {
         "City": " ’Aïn Merane"
      },
      {
         "City": " Aïn Kercha"
      },
      {
         "City": " Aïn Fakroun"
      },
      {
         "City": " ’Aïn el Turk"
      },
      {
         "City": " ’Aïn el Melh"
      },
      {
         "City": " ’Aïn el Hammam"
      },
      {
         "City": " ‘Aïn el Hadjel"
      },
      {
         "City": " Aïn el Bya"
      },
      {
         "City": " ’Aïn el Berd"
      },
      {
         "City": " ’Aïn el Bell"
      },
      {
         "City": " ’Aïn Deheb"
      },
      {
         "City": " Aïn Defla"
      },
      {
         "City": " Aïn Bessem"
      },
      {
         "City": " ’Aïn Benian"
      },
      {
         "City": " Aïn Beïda"
      },
      {
         "City": " Aïn Arnat"
      },
      {
         "City": " ’Aïn Abid"
      },
      {
         "City": " Aflou"
      },
      {
         "City": " Adrar"
      },
      {
         "City": " Abou el Hassan"
      },
      {
         "City": " BABOR - VILLE"
      }
   ],
   "Ecuador": [
      {
         "City": " Zamora"
      },
      {
         "City": " Yaguachi Nuevo"
      },
      {
         "City": " Vinces"
      },
      {
         "City": " Ventanas"
      },
      {
         "City": " Velasco Ibarra"
      },
      {
         "City": " Tulcán"
      },
      {
         "City": " Tena"
      },
      {
         "City": " Sucre"
      },
      {
         "City": " Santo Domingo de los Colorados"
      },
      {
         "City": " Santa Rosa"
      },
      {
         "City": " Santa Elena"
      },
      {
         "City": " San Lorenzo de Esmeraldas"
      },
      {
         "City": " San Gabriel"
      },
      {
         "City": " Samborondón"
      },
      {
         "City": " Salinas"
      },
      {
         "City": " Rosa Zarate"
      },
      {
         "City": " Riobamba"
      },
      {
         "City": " Quito"
      },
      {
         "City": " Quevedo"
      },
      {
         "City": " Puyo"
      },
      {
         "City": " Pujilí"
      },
      {
         "City": " Puerto Francisco de Orellana"
      },
      {
         "City": " Portoviejo"
      },
      {
         "City": " Playas"
      },
      {
         "City": " Piñas"
      },
      {
         "City": " Pelileo"
      },
      {
         "City": " Pedro Carbo"
      },
      {
         "City": " Pasaje"
      },
      {
         "City": " Otavalo"
      },
      {
         "City": " Naranjito"
      },
      {
         "City": " Naranjal"
      },
      {
         "City": " Montecristi"
      },
      {
         "City": " Montalvo"
      },
      {
         "City": " Manta"
      },
      {
         "City": " Machala"
      },
      {
         "City": " Machachi"
      },
      {
         "City": " Macas"
      },
      {
         "City": " Loja"
      },
      {
         "City": " La Troncal"
      },
      {
         "City": " Latacunga"
      },
      {
         "City": " La Maná"
      },
      {
         "City": " La Libertad"
      },
      {
         "City": " Nueva Loja"
      },
      {
         "City": " Jipijapa"
      },
      {
         "City": " Ibarra"
      },
      {
         "City": " Huaquillas"
      },
      {
         "City": " Guayaquil"
      },
      {
         "City": " Guaranda"
      },
      {
         "City": " Gualaceo"
      },
      {
         "City": " Esmeraldas"
      },
      {
         "City": " El Triunfo"
      },
      {
         "City": " Eloy Alfaro"
      },
      {
         "City": " Cuenca"
      },
      {
         "City": " Chone"
      },
      {
         "City": " Cayambe"
      },
      {
         "City": " Catamayo"
      },
      {
         "City": " Cariamanga"
      },
      {
         "City": " Calceta"
      },
      {
         "City": " Boca Suno"
      },
      {
         "City": " Balzar"
      },
      {
         "City": " Bahía de Caráquez"
      },
      {
         "City": " Babahoyo"
      },
      {
         "City": " Azogues"
      },
      {
         "City": " Atuntaqui"
      },
      {
         "City": " Ambato"
      },
      {
         "City": " Tutamandahostel"
      }
   ],
   "Estonia": [
      {
         "City": " Viljandi"
      },
      {
         "City": " Tartu"
      },
      {
         "City": " Tallinn"
      },
      {
         "City": " Sillamäe"
      },
      {
         "City": " Rakvere"
      },
      {
         "City": " Pärnu"
      },
      {
         "City": " Narva"
      },
      {
         "City": " Maardu"
      },
      {
         "City": " Kohtla-Järve"
      }
   ],
   "Egypt": [
      {
         "City": " Ziftá"
      },
      {
         "City": " Toukh"
      },
      {
         "City": " Tanda"
      },
      {
         "City": " Ţāmiyah"
      },
      {
         "City": " Ţalkhā"
      },
      {
         "City": " Talā"
      },
      {
         "City": " Ţahţā"
      },
      {
         "City": " Sumusţā as Sulţānī"
      },
      {
         "City": " Sohag"
      },
      {
         "City": " Sīdī Sālim"
      },
      {
         "City": " Shirbīn"
      },
      {
         "City": " Shibīn al Qanāţir"
      },
      {
         "City": " Shibīn al Kawm"
      },
      {
         "City": " Samannūd"
      },
      {
         "City": " Samālūţ"
      },
      {
         "City": " Rosetta"
      },
      {
         "City": " Ras Gharib"
      },
      {
         "City": " Quwaysinā"
      },
      {
         "City": " Quţūr"
      },
      {
         "City": " Kousa"
      },
      {
         "City": " Qinā"
      },
      {
         "City": " Qalyūb"
      },
      {
         "City": " Naj‘ Ḩammādī"
      },
      {
         "City": " Minyat an Naşr"
      },
      {
         "City": " Minūf"
      },
      {
         "City": " Maţāy"
      },
      {
         "City": " Mashtūl as Sūq"
      },
      {
         "City": " Mersa Matruh"
      },
      {
         "City": " Manfalūţ"
      },
      {
         "City": " Mallawī"
      },
      {
         "City": " Madīnat Sittah Uktūbar"
      },
      {
         "City": " Kawm Umbū"
      },
      {
         "City": " Kawm Ḩamādah"
      },
      {
         "City": " Kafr Şaqr"
      },
      {
         "City": " Kafr az Zayyāt"
      },
      {
         "City": " Kafr ash Shaykh"
      },
      {
         "City": " Kafr ad Dawwār"
      },
      {
         "City": " Juhaynah"
      },
      {
         "City": " Jirjā"
      },
      {
         "City": " ‘Izbat al Burj"
      },
      {
         "City": " Iţsā"
      },
      {
         "City": " Isnā"
      },
      {
         "City": " Idkū"
      },
      {
         "City": " Idfū"
      },
      {
         "City": " Ibshawāy"
      },
      {
         "City": " Ḩalwān"
      },
      {
         "City": " Hihyā"
      },
      {
         "City": " Ḩawsh ‘Īsá"
      },
      {
         "City": " Fuwwah"
      },
      {
         "City": " Farshūţ"
      },
      {
         "City": " Fāraskūr"
      },
      {
         "City": " Fāqūs"
      },
      {
         "City": " Damietta"
      },
      {
         "City": " Diyarb Najm"
      },
      {
         "City": " Disūq"
      },
      {
         "City": " Dishnā"
      },
      {
         "City": " Dikirnis"
      },
      {
         "City": " Dayrūţ"
      },
      {
         "City": " Dayr Mawās"
      },
      {
         "City": " Damanhūr"
      },
      {
         "City": " Būsh"
      },
      {
         "City": " Port Said"
      },
      {
         "City": " Būr Safājah"
      },
      {
         "City": " Bilqās"
      },
      {
         "City": " Bilbays"
      },
      {
         "City": " Basyūn"
      },
      {
         "City": " Banī Suwayf"
      },
      {
         "City": " Banī Mazār"
      },
      {
         "City": " Banhā"
      },
      {
         "City": " Zagazig"
      },
      {
         "City": " Awsīm"
      },
      {
         "City": " At Tall al Kabīr"
      },
      {
         "City": " Asyūţ"
      },
      {
         "City": " Aswan"
      },
      {
         "City": " Suez"
      },
      {
         "City": " Aş Şaff"
      },
      {
         "City": " Ash Shuhadā’"
      },
      {
         "City": " Ashmūn"
      },
      {
         "City": " Al Wāsiţah"
      },
      {
         "City": " Luxor"
      },
      {
         "City": " Al Qūşīyah"
      },
      {
         "City": " Al Quşayr"
      },
      {
         "City": " Al Qurayn"
      },
      {
         "City": " Al Qanāyāt"
      },
      {
         "City": " Al Qanāţir al Khayrīyah"
      },
      {
         "City": " Cairo"
      },
      {
         "City": " Al Minyā"
      },
      {
         "City": " Al Maţarīyah"
      },
      {
         "City": " Al Manzilah"
      },
      {
         "City": " Al Manşūrah"
      },
      {
         "City": " Al Manshāh"
      },
      {
         "City": " Al Maḩallah al Kubrá"
      },
      {
         "City": " Al Khārijah"
      },
      {
         "City": " Al Khānkah"
      },
      {
         "City": " Al Jīzah"
      },
      {
         "City": " Al Jamālīyah"
      },
      {
         "City": " Ismailia"
      },
      {
         "City": " Alexandria"
      },
      {
         "City": " Al Ibrāhīmīyah"
      },
      {
         "City": " Al Ḩawāmidīyah"
      },
      {
         "City": " Al Ḩāmūl"
      },
      {
         "City": " Hurghada"
      },
      {
         "City": " Al Fayyūm"
      },
      {
         "City": " Al Fashn"
      },
      {
         "City": " Al Bawīţī"
      },
      {
         "City": " Al Balyanā"
      },
      {
         "City": " Al Bājūr"
      },
      {
         "City": " Al Badārī"
      },
      {
         "City": " Al ‘Ayyāţ"
      },
      {
         "City": " Arish"
      },
      {
         "City": " Akhmīm"
      },
      {
         "City": " Ajā"
      },
      {
         "City": " Ad Dilinjāt"
      },
      {
         "City": " Abū Tīj"
      },
      {
         "City": " Abū Qurqāş"
      },
      {
         "City": " Abū Kabīr"
      },
      {
         "City": " Abū al Maţāmīr"
      },
      {
         "City": " Abnūb"
      },
      {
         "City": " Az Zarqā"
      },
      {
         "City": " Ain Sukhna"
      }
   ],
   "Western Sahara": [
      {
         "City": " Smara"
      },
      {
         "City": " Laâyoune / El Aaiún"
      },
      {
         "City": " Dakhla"
      }
   ],
   "Eritrea": [
      {
         "City": " Massawa"
      },
      {
         "City": " Keren"
      },
      {
         "City": " Barentu"
      },
      {
         "City": " Asmara"
      },
      {
         "City": " Assab"
      },
      {
         "City": " Mendefera"
      }
   ],
   "Spain": [
      {
         "City": " Zubia"
      },
      {
         "City": " Zafra"
      },
      {
         "City": " Yecla"
      },
      {
         "City": " Villena"
      },
      {
         "City": " Villarrobledo"
      },
      {
         "City": " Vila-real"
      },
      {
         "City": " Villanueva de la Serena"
      },
      {
         "City": " Villajoyosa"
      },
      {
         "City": " Vícar"
      },
      {
         "City": " Vélez-Málaga"
      },
      {
         "City": " Valencia"
      },
      {
         "City": " Valdepeñas"
      },
      {
         "City": " Utrera"
      },
      {
         "City": " Ubrique"
      },
      {
         "City": " Úbeda"
      },
      {
         "City": " Totana"
      },
      {
         "City": " Torrox"
      },
      {
         "City": " Torrevieja"
      },
      {
         "City": " Torre-Pacheco"
      },
      {
         "City": " Torrent"
      },
      {
         "City": " Torremolinos"
      },
      {
         "City": " Tomelloso"
      },
      {
         "City": " Tomares"
      },
      {
         "City": " Toledo"
      },
      {
         "City": " Tías"
      },
      {
         "City": " Telde"
      },
      {
         "City": " Teguise"
      },
      {
         "City": " Tarifa"
      },
      {
         "City": " Talavera de la Reina"
      },
      {
         "City": " Tacoronte"
      },
      {
         "City": " Tavernes de la Valldigna"
      },
      {
         "City": " Sueca"
      },
      {
         "City": " Silla"
      },
      {
         "City": " Sevilla"
      },
      {
         "City": " San Vicent del Raspeig"
      },
      {
         "City": " Santomera"
      },
      {
         "City": " Santa Pola"
      },
      {
         "City": " Santa Lucía"
      },
      {
         "City": " Santafé"
      },
      {
         "City": " Santa Eulària des Riu"
      },
      {
         "City": " Santa Cruz de Tenerife"
      },
      {
         "City": " Santa Cruz de la Palma"
      },
      {
         "City": " Santa Brígida"
      },
      {
         "City": " San Roque"
      },
      {
         "City": " San Pedro del Pinatar"
      },
      {
         "City": " San Pedro de Alcántara"
      },
      {
         "City": " San Miguel De Abona"
      },
      {
         "City": " Sanlúcar de Barrameda"
      },
      {
         "City": " San Juan de Aznalfarache"
      },
      {
         "City": " San Juan de Alicante"
      },
      {
         "City": " San Javier"
      },
      {
         "City": " San Isidro"
      },
      {
         "City": " San Fernando"
      },
      {
         "City": " La Laguna"
      },
      {
         "City": " San Bartolomé de Tirajana"
      },
      {
         "City": " San Bartolomé"
      },
      {
         "City": " Sant Antoni de Portmany"
      },
      {
         "City": " Sagunto"
      },
      {
         "City": " Rota"
      },
      {
         "City": " Roquetas de Mar"
      },
      {
         "City": " Ronda"
      },
      {
         "City": " Rojales"
      },
      {
         "City": " Rincón de la Victoria"
      },
      {
         "City": " Ribarroja"
      },
      {
         "City": " Requena"
      },
      {
         "City": " Realejo Alto"
      },
      {
         "City": " Puçol"
      },
      {
         "City": " Puerto Real"
      },
      {
         "City": " Puertollano"
      },
      {
         "City": " Puerto del Rosario"
      },
      {
         "City": " Puerto de la Cruz"
      },
      {
         "City": " Puente-Genil"
      },
      {
         "City": " La Pobla de Vallbona"
      },
      {
         "City": " Priego de Córdoba"
      },
      {
         "City": " Pozoblanco"
      },
      {
         "City": " Pollença"
      },
      {
         "City": " Pilar de la Horadada"
      },
      {
         "City": " Picassent"
      },
      {
         "City": " Paterna"
      },
      {
         "City": " Palma"
      },
      {
         "City": " Palma del Río"
      },
      {
         "City": " Pájara"
      },
      {
         "City": " Paiporta"
      },
      {
         "City": " Osuna"
      },
      {
         "City": " Orihuela"
      },
      {
         "City": " Ontinyent"
      },
      {
         "City": " Onda"
      },
      {
         "City": " Oliva"
      },
      {
         "City": " Novelda"
      },
      {
         "City": " Níjar"
      },
      {
         "City": " Nerja"
      },
      {
         "City": " Navalmoral de la Mata"
      },
      {
         "City": " Murcia"
      },
      {
         "City": " Mula"
      },
      {
         "City": " Muchamiel"
      },
      {
         "City": " Motril"
      },
      {
         "City": " Morón de la Frontera"
      },
      {
         "City": " Montilla"
      },
      {
         "City": " Montijo"
      },
      {
         "City": " Moncada"
      },
      {
         "City": " Molina de Segura"
      },
      {
         "City": " Moguer"
      },
      {
         "City": " Mogán"
      },
      {
         "City": " Mislata"
      },
      {
         "City": " Mijas"
      },
      {
         "City": " Mérida"
      },
      {
         "City": " Melilla"
      },
      {
         "City": " Mazarrón"
      },
      {
         "City": " Maspalomas"
      },
      {
         "City": " Massamagrell"
      },
      {
         "City": " Martos"
      },
      {
         "City": " Marratxí"
      },
      {
         "City": " Marchena"
      },
      {
         "City": " Marbella"
      },
      {
         "City": " Maracena"
      },
      {
         "City": " Manzanares"
      },
      {
         "City": " Manises"
      },
      {
         "City": " Manacor"
      },
      {
         "City": " Málaga"
      },
      {
         "City": " Mairena del Aljarafe"
      },
      {
         "City": " Mairena del Alcor"
      },
      {
         "City": " Maó"
      },
      {
         "City": " Lucena"
      },
      {
         "City": " Los Palacios y Villafranca"
      },
      {
         "City": " Los Llanos de Aridane"
      },
      {
         "City": " Los Barrios"
      },
      {
         "City": " Los Alcázares"
      },
      {
         "City": " Lorca"
      },
      {
         "City": " Lora del Río"
      },
      {
         "City": " Loja"
      },
      {
         "City": " Llucmajor"
      },
      {
         "City": " Llíria"
      },
      {
         "City": " Linares"
      },
      {
         "City": " Lepe"
      },
      {
         "City": " Lebrija"
      },
      {
         "City": " La Unión"
      },
      {
         "City": " Las Torres de Cotillas"
      },
      {
         "City": " Las Palmas de Gran Canaria"
      },
      {
         "City": " La Solana"
      },
      {
         "City": " Las Cabezas de San Juan"
      },
      {
         "City": " La Roda"
      },
      {
         "City": " La Rinconada"
      },
      {
         "City": " La Orotava"
      },
      {
         "City": " La Oliva"
      },
      {
         "City": " la Nucia"
      },
      {
         "City": " La Línea de la Concepción"
      },
      {
         "City": " L'Eliana"
      },
      {
         "City": " La Carolina"
      },
      {
         "City": " Jumilla"
      },
      {
         "City": " Jerez de la Frontera"
      },
      {
         "City": " Javea"
      },
      {
         "City": " Xàtiva"
      },
      {
         "City": " Jaén"
      },
      {
         "City": " Isla Cristina"
      },
      {
         "City": " Ingenio"
      },
      {
         "City": " Inca"
      },
      {
         "City": " Icod de los Vinos"
      },
      {
         "City": " Ibiza"
      },
      {
         "City": " Ibi"
      },
      {
         "City": " Huércal-Overa"
      },
      {
         "City": " Huelva"
      },
      {
         "City": " Hellín"
      },
      {
         "City": " Güimar"
      },
      {
         "City": " Guía de Isora"
      },
      {
         "City": " Guardamar del Segura"
      },
      {
         "City": " Guadix"
      },
      {
         "City": " Granadilla de Abona"
      },
      {
         "City": " Granada"
      },
      {
         "City": " Gandia"
      },
      {
         "City": " Gáldar"
      },
      {
         "City": " Fuengirola"
      },
      {
         "City": " Felanitx"
      },
      {
         "City": " Estepona"
      },
      {
         "City": " El Viso del Alcor"
      },
      {
         "City": " El Puerto de Santa María"
      },
      {
         "City": " El Ejido"
      },
      {
         "City": " Elda"
      },
      {
         "City": " Elche"
      },
      {
         "City": " El Arahal"
      },
      {
         "City": " Écija"
      },
      {
         "City": " Dos Hermanas"
      },
      {
         "City": " Don Benito"
      },
      {
         "City": " Denia"
      },
      {
         "City": " Daimiel"
      },
      {
         "City": " Cullera"
      },
      {
         "City": " Quart de Poblet"
      },
      {
         "City": " Crevillente"
      },
      {
         "City": " Coria del Río"
      },
      {
         "City": " Córdoba"
      },
      {
         "City": " Conil de la Frontera"
      },
      {
         "City": " Coín"
      },
      {
         "City": " Ciudad Real"
      },
      {
         "City": " Cieza"
      },
      {
         "City": " Xirivella"
      },
      {
         "City": " Chipiona"
      },
      {
         "City": " Chiclana de la Frontera"
      },
      {
         "City": " Cehegín"
      },
      {
         "City": " Catarroja"
      },
      {
         "City": " Castilleja de la Cuesta"
      },
      {
         "City": " Castelló de la Plana"
      },
      {
         "City": " Cartaya"
      },
      {
         "City": " Cártama"
      },
      {
         "City": " Cartagena"
      },
      {
         "City": " Carmona"
      },
      {
         "City": " Carlet"
      },
      {
         "City": " Carcaixent"
      },
      {
         "City": " Caravaca"
      },
      {
         "City": " Candelaria"
      },
      {
         "City": " Campo de Criptana"
      },
      {
         "City": " Campiña"
      },
      {
         "City": " el Campello"
      },
      {
         "City": " Camas"
      },
      {
         "City": " Calvià"
      },
      {
         "City": " Calp"
      },
      {
         "City": " Callosa de Segura"
      },
      {
         "City": " Cadiz"
      },
      {
         "City": " Cáceres"
      },
      {
         "City": " Cabra"
      },
      {
         "City": " Burriana"
      },
      {
         "City": " Burjassot"
      },
      {
         "City": " Bormujos"
      },
      {
         "City": " Bétera"
      },
      {
         "City": " Berja"
      },
      {
         "City": " Benidorm"
      },
      {
         "City": " Benetússer"
      },
      {
         "City": " Benalmádena"
      },
      {
         "City": " Baza"
      },
      {
         "City": " Barbate de Franco"
      },
      {
         "City": " Bailén"
      },
      {
         "City": " Baeza"
      },
      {
         "City": " Baena"
      },
      {
         "City": " Badajoz"
      },
      {
         "City": " Ayamonte"
      },
      {
         "City": " Atarfe"
      },
      {
         "City": " Atamaría"
      },
      {
         "City": " Aspe"
      },
      {
         "City": " Arucas"
      },
      {
         "City": " Arrecife"
      },
      {
         "City": " Arona"
      },
      {
         "City": " Armilla"
      },
      {
         "City": " Arcos de la Frontera"
      },
      {
         "City": " Archena"
      },
      {
         "City": " Antequera"
      },
      {
         "City": " Andújar"
      },
      {
         "City": " Altea"
      },
      {
         "City": " Almuñécar"
      },
      {
         "City": " Almoradí"
      },
      {
         "City": " Almonte"
      },
      {
         "City": " Almería"
      },
      {
         "City": " Almendralejo"
      },
      {
         "City": " Almassora"
      },
      {
         "City": " Almansa"
      },
      {
         "City": " Aljaraque"
      },
      {
         "City": " Alicante"
      },
      {
         "City": " Alhaurín el Grande"
      },
      {
         "City": " Alhaurín de la Torre"
      },
      {
         "City": " Alhama de Murcia"
      },
      {
         "City": " Algemesí"
      },
      {
         "City": " Algeciras"
      },
      {
         "City": " Alfafar"
      },
      {
         "City": " Aldaia"
      },
      {
         "City": " Alcúdia"
      },
      {
         "City": " Alcoy"
      },
      {
         "City": " Alzira"
      },
      {
         "City": " Alcázar de San Juan"
      },
      {
         "City": " Alcantarilla"
      },
      {
         "City": " Alcalá la Real"
      },
      {
         "City": " Alcalá de Guadaira"
      },
      {
         "City": " Alboraya"
      },
      {
         "City": " Albolote"
      },
      {
         "City": " Albal"
      },
      {
         "City": " Albacete"
      },
      {
         "City": " Alaquàs"
      },
      {
         "City": " Agüimes"
      },
      {
         "City": " Águilas"
      },
      {
         "City": " Adra"
      },
      {
         "City": " Adeje"
      },
      {
         "City": " Groa de Murviedro"
      },
      {
         "City": " Zarautz"
      },
      {
         "City": " Zaragoza"
      },
      {
         "City": " Zamora"
      },
      {
         "City": " Viveiro"
      },
      {
         "City": " Gasteiz / Vitoria"
      },
      {
         "City": " Vinaròs"
      },
      {
         "City": " Villaviciosa de Odón"
      },
      {
         "City": " Villaverde"
      },
      {
         "City": " Villaquilambre"
      },
      {
         "City": " Vilanova i la Geltrú"
      },
      {
         "City": " Villanueva del Pardillo"
      },
      {
         "City": " Villanueva de la Cañada"
      },
      {
         "City": " Vilalba"
      },
      {
         "City": " Vilagarcía de Arousa"
      },
      {
         "City": " Vilafranca del Penedès"
      },
      {
         "City": " Vila-seca"
      },
      {
         "City": " Vilaseca"
      },
      {
         "City": " Viladecans"
      },
      {
         "City": " Vigo"
      },
      {
         "City": " Vic"
      },
      {
         "City": " Vicálvaro"
      },
      {
         "City": " El Vendrell"
      },
      {
         "City": " Valls"
      },
      {
         "City": " Valladolid"
      },
      {
         "City": " Valdemoro"
      },
      {
         "City": " Rivas-Vaciamadrid"
      },
      {
         "City": " Utebo"
      },
      {
         "City": " Tui"
      },
      {
         "City": " Tudela"
      },
      {
         "City": " Tortosa"
      },
      {
         "City": " Torrelodones"
      },
      {
         "City": " Torrelavega"
      },
      {
         "City": " Torrejón de Ardoz"
      },
      {
         "City": " Torredembarra"
      },
      {
         "City": " Tordera"
      },
      {
         "City": " Tolosa"
      },
      {
         "City": " Tetuán de las Victorias"
      },
      {
         "City": " Teruel"
      },
      {
         "City": " Teo"
      },
      {
         "City": " Tàrrega"
      },
      {
         "City": " Terrassa"
      },
      {
         "City": " Tarragona"
      },
      {
         "City": " Tarancón"
      },
      {
         "City": " Soria"
      },
      {
         "City": " Sitges"
      },
      {
         "City": " Sestao"
      },
      {
         "City": " Seseña"
      },
      {
         "City": " Segovia"
      },
      {
         "City": " Cerdanyola del Vallès"
      },
      {
         "City": " Sant Vicenç dels Horts"
      },
      {
         "City": " Barakaldo"
      },
      {
         "City": " Santurtzi"
      },
      {
         "City": " Sant Just Desvern"
      },
      {
         "City": " Santiago de Compostela"
      },
      {
         "City": " Santa Perpètua de Mogoda"
      },
      {
         "City": " Santander"
      },
      {
         "City": " Barberà del Vallès"
      },
      {
         "City": " Santa Coloma de Gramenet"
      },
      {
         "City": " San Sebastián de los Reyes"
      },
      {
         "City": " Donostia / San Sebastián"
      },
      {
         "City": " Sant Quirze del Vallès"
      },
      {
         "City": " Sant Pere de Ribes"
      },
      {
         "City": " San Martín de la Vega"
      },
      {
         "City": " San Lorenzo de El Escorial"
      },
      {
         "City": " Vilassar de Mar"
      },
      {
         "City": " Sant Joan Despí"
      },
      {
         "City": " Sanxenxo"
      },
      {
         "City": " San Fernando de Henares"
      },
      {
         "City": " Sant Feliu de Llobregat"
      },
      {
         "City": " Sant Feliu de Guíxols"
      },
      {
         "City": " Sant Cugat del Vallès"
      },
      {
         "City": " Sant Celoni"
      },
      {
         "City": " Sant Carles de la Ràpita"
      },
      {
         "City": " Sant Boi de Llobregat"
      },
      {
         "City": " Sant Andreu de Palomar"
      },
      {
         "City": " San Andrés del Rabanedo"
      },
      {
         "City": " Sant Andreu de la Barca"
      },
      {
         "City": " Sant Adrià de Besòs"
      },
      {
         "City": " Sama"
      },
      {
         "City": " Salt"
      },
      {
         "City": " Salou"
      },
      {
         "City": " Salamanca"
      },
      {
         "City": " Sabadell"
      },
      {
         "City": " Rubí"
      },
      {
         "City": " Roses"
      },
      {
         "City": " Ripollet"
      },
      {
         "City": " Ribeira"
      },
      {
         "City": " Reus"
      },
      {
         "City": " Errenteria"
      },
      {
         "City": " Redondela"
      },
      {
         "City": " Puente de Vallecas"
      },
      {
         "City": " Ponteareas"
      },
      {
         "City": " Premià de Mar"
      },
      {
         "City": " Pozuelo de Alarcón"
      },
      {
         "City": " Poio"
      },
      {
         "City": " Portugalete"
      },
      {
         "City": " Porriño"
      },
      {
         "City": " Pontevedra"
      },
      {
         "City": " Ponferrada"
      },
      {
         "City": " Plasencia"
      },
      {
         "City": " Pinto"
      },
      {
         "City": " Pineda de Mar"
      },
      {
         "City": " Parla"
      },
      {
         "City": " Parets del Vallès"
      },
      {
         "City": " Pamplona"
      },
      {
         "City": " Palencia"
      },
      {
         "City": " Palamós"
      },
      {
         "City": " Palafrugell"
      },
      {
         "City": " Oviedo"
      },
      {
         "City": " Oria"
      },
      {
         "City": " Ourense"
      },
      {
         "City": " Olot"
      },
      {
         "City": " Olesa de Montserrat"
      },
      {
         "City": " Oleiros"
      },
      {
         "City": " Nigrán"
      },
      {
         "City": " Navalcarnero"
      },
      {
         "City": " Narón"
      },
      {
         "City": " Mungia"
      },
      {
         "City": " Móstoles"
      },
      {
         "City": " Moratalaz"
      },
      {
         "City": " Monzón"
      },
      {
         "City": " Montornès del Vallès"
      },
      {
         "City": " Monforte de Lemos"
      },
      {
         "City": " Arrasate / Mondragón"
      },
      {
         "City": " Montcada i Reixac"
      },
      {
         "City": " Mollet del Vallès"
      },
      {
         "City": " Molins de Rei"
      },
      {
         "City": " Moaña"
      },
      {
         "City": " Miranda de Ebro"
      },
      {
         "City": " Mieres"
      },
      {
         "City": " Mejorada del Campo"
      },
      {
         "City": " Medina del Campo"
      },
      {
         "City": " Mataró"
      },
      {
         "City": " El Masnou"
      },
      {
         "City": " Martorell"
      },
      {
         "City": " Marín"
      },
      {
         "City": " Manresa"
      },
      {
         "City": " Manlleu"
      },
      {
         "City": " Malgrat de Mar"
      },
      {
         "City": " Majadahonda"
      },
      {
         "City": " Madrid"
      },
      {
         "City": " Lugo"
      },
      {
         "City": " Logroño"
      },
      {
         "City": " Lloret de Mar"
      },
      {
         "City": " Laudio / Llodio"
      },
      {
         "City": " Lleida"
      },
      {
         "City": " León"
      },
      {
         "City": " Leioa"
      },
      {
         "City": " Leganés"
      },
      {
         "City": " Las Rozas de Madrid"
      },
      {
         "City": " Lasarte"
      },
      {
         "City": " La Pineda"
      },
      {
         "City": " Lalín"
      },
      {
         "City": " Laguna de Duero"
      },
      {
         "City": " A Estrada"
      },
      {
         "City": " A Coruña"
      },
      {
         "City": " Irun"
      },
      {
         "City": " Illescas"
      },
      {
         "City": " Igualada"
      },
      {
         "City": " Humanes de Madrid"
      },
      {
         "City": " Huesca"
      },
      {
         "City": " L'Hospitalet de Llobregat"
      },
      {
         "City": " Hortaleza"
      },
      {
         "City": " Hernani"
      },
      {
         "City": " Gernika-Lumo"
      },
      {
         "City": " Getxo"
      },
      {
         "City": " Guadalajara"
      },
      {
         "City": " Granollers"
      },
      {
         "City": " Gràcia"
      },
      {
         "City": " Gijón"
      },
      {
         "City": " Getafe"
      },
      {
         "City": " Girona"
      },
      {
         "City": " Gavà"
      },
      {
         "City": " Galdakao"
      },
      {
         "City": " Galapagar"
      },
      {
         "City": " Hondarribia"
      },
      {
         "City": " Fuenlabrada"
      },
      {
         "City": " Figueras"
      },
      {
         "City": " Figueres"
      },
      {
         "City": " Esplugues de Llobregat"
      },
      {
         "City": " Esparreguera"
      },
      {
         "City": " Ermua"
      },
      {
         "City": " Erandio"
      },
      {
         "City": " El Prat de Llobregat"
      },
      {
         "City": " Ferrol"
      },
      {
         "City": " El Astillero"
      },
      {
         "City": " Ejea de los Caballeros"
      },
      {
         "City": " Eibar"
      },
      {
         "City": " Durango"
      },
      {
         "City": " Culleredo"
      },
      {
         "City": " Cuenca"
      },
      {
         "City": " Coslada"
      },
      {
         "City": " Cornellà de Llobregat"
      },
      {
         "City": " Colmenar Viejo"
      },
      {
         "City": " Collado-Villalba"
      },
      {
         "City": " Ciudad Lineal"
      },
      {
         "City": " Ciutadella"
      },
      {
         "City": " Ciempozuelos"
      },
      {
         "City": " Chamartín"
      },
      {
         "City": " Castro-Urdiales"
      },
      {
         "City": " Castelldefels"
      },
      {
         "City": " Castellar del Vallès"
      },
      {
         "City": " Cardedeu"
      },
      {
         "City": " Carballo"
      },
      {
         "City": " Canovelles"
      },
      {
         "City": " Cangas do Morrazo"
      },
      {
         "City": " Cambrils"
      },
      {
         "City": " Cambre"
      },
      {
         "City": " Camargo"
      },
      {
         "City": " Calella"
      },
      {
         "City": " Caldes de Montbui"
      },
      {
         "City": " Calatayud"
      },
      {
         "City": " Calahorra"
      },
      {
         "City": " Calafell"
      },
      {
         "City": " Burlata"
      },
      {
         "City": " Burgos"
      },
      {
         "City": " Boiro"
      },
      {
         "City": " Boadilla del Monte"
      },
      {
         "City": " Blanes"
      },
      {
         "City": " Bilbao"
      },
      {
         "City": " Bermeo"
      },
      {
         "City": " Berga"
      },
      {
         "City": " Benicàssim"
      },
      {
         "City": " Benicarló"
      },
      {
         "City": " Benavente"
      },
      {
         "City": " Béjar"
      },
      {
         "City": " Barcelona"
      },
      {
         "City": " Barbastro"
      },
      {
         "City": " Barañáin"
      },
      {
         "City": " Barajas de Madrid"
      },
      {
         "City": " Banyoles"
      },
      {
         "City": " Balaguer"
      },
      {
         "City": " Badalona"
      },
      {
         "City": " Azuqueca de Henares"
      },
      {
         "City": " Avilés"
      },
      {
         "City": " Ávila"
      },
      {
         "City": " Arteixo"
      },
      {
         "City": " Arganda"
      },
      {
         "City": " Aranjuez"
      },
      {
         "City": " Aranda de Duero"
      },
      {
         "City": " Amposta"
      },
      {
         "City": " Amorebieta"
      },
      {
         "City": " Amés"
      },
      {
         "City": " Algorta"
      },
      {
         "City": " Algete"
      },
      {
         "City": " Alcorcón"
      },
      {
         "City": " Alcobendas"
      },
      {
         "City": " Alcañiz"
      },
      {
         "City": " Alcalá de Henares"
      },
      {
         "City": " Nou Barris"
      },
      {
         "City": " Pinar de Chamartín"
      },
      {
         "City": " Playa del Ingles"
      },
      {
         "City": " Puerto del Carmen"
      },
      {
         "City": " Ceuta"
      },
      {
         "City": " Moncloa-Aravaca"
      },
      {
         "City": " Eixample"
      },
      {
         "City": " les Corts"
      },
      {
         "City": " Sarrià-Sant Gervasi"
      },
      {
         "City": " Horta-Guinardó"
      },
      {
         "City": " Sants-Montjuïc"
      },
      {
         "City": " Sant Martí"
      },
      {
         "City": " Ciutat Vella"
      },
      {
         "City": " Arganzuela"
      },
      {
         "City": " San Blas"
      },
      {
         "City": " Latina"
      },
      {
         "City": " Usera"
      },
      {
         "City": " Salamanca"
      },
      {
         "City": " Chamberí"
      },
      {
         "City": " Carabanchel"
      },
      {
         "City": " City Center"
      },
      {
         "City": " Retiro"
      },
      {
         "City": " l'Alfàs del Pi"
      },
      {
         "City": " Las Gabias"
      },
      {
         "City": " Delicias"
      },
      {
         "City": " Almozara"
      },
      {
         "City": " Montecanal"
      },
      {
         "City": " Oliver-Valdefierro"
      },
      {
         "City": " Santutxu"
      },
      {
         "City": " Los Realejos"
      },
      {
         "City": " Pasaia"
      },
      {
         "City": " Basauri"
      },
      {
         "City": " Llefià"
      },
      {
         "City": " Corvera de Asturias"
      },
      {
         "City": " Tres Cantos"
      },
      {
         "City": " Iturrama"
      },
      {
         "City": " Ermitagaña"
      },
      {
         "City": " Primer Ensanche"
      },
      {
         "City": " Segundo Ensanche"
      },
      {
         "City": " Fuencarral-El Pardo"
      },
      {
         "City": " Villa de Vallecas"
      },
      {
         "City": " Natahoyo"
      }
   ],
   "Ethiopia": [
      {
         "City": " Ziway"
      },
      {
         "City": " Yirga ‘Alem"
      },
      {
         "City": " Yabēlo"
      },
      {
         "City": " Werota"
      },
      {
         "City": " Wenjī"
      },
      {
         "City": " Tippi"
      },
      {
         "City": " Shashemenē"
      },
      {
         "City": " Shambu"
      },
      {
         "City": " Shakīso"
      },
      {
         "City": " Sebeta"
      },
      {
         "City": " Robīt"
      },
      {
         "City": " Nejo"
      },
      {
         "City": " Nazrēt"
      },
      {
         "City": " Mojo"
      },
      {
         "City": " Metu"
      },
      {
         "City": " Metahāra"
      },
      {
         "City": " Mendī"
      },
      {
         "City": " Mekele"
      },
      {
         "City": " Maych’ew"
      },
      {
         "City": " Korem"
      },
      {
         "City": " K’olīto"
      },
      {
         "City": " Kibre Mengist"
      },
      {
         "City": " Kemisē"
      },
      {
         "City": " Kombolcha"
      },
      {
         "City": " Jinka"
      },
      {
         "City": " Jīma"
      },
      {
         "City": " Jijiga"
      },
      {
         "City": " Inda Silasē"
      },
      {
         "City": " Harar"
      },
      {
         "City": " Hāgere Hiywet"
      },
      {
         "City": " Gondar"
      },
      {
         "City": " Goba"
      },
      {
         "City": " Waliso"
      },
      {
         "City": " Ginir"
      },
      {
         "City": " Gimbi"
      },
      {
         "City": " Genet"
      },
      {
         "City": " Gelemso"
      },
      {
         "City": " Gebre Guracha"
      },
      {
         "City": " Gambēla"
      },
      {
         "City": " Finote Selam"
      },
      {
         "City": " Fichē"
      },
      {
         "City": " Felege Neway"
      },
      {
         "City": " Dubti"
      },
      {
         "City": " Dodola"
      },
      {
         "City": " Dire Dawa"
      },
      {
         "City": " Dīla"
      },
      {
         "City": " Desē"
      },
      {
         "City": " Dembī Dolo"
      },
      {
         "City": " Bishoftu"
      },
      {
         "City": " Debre Tabor"
      },
      {
         "City": " Debre Mark’os"
      },
      {
         "City": " Debre Birhan"
      },
      {
         "City": " Debark’"
      },
      {
         "City": " Butajīra"
      },
      {
         "City": " Burē"
      },
      {
         "City": " Bonga"
      },
      {
         "City": " Bodītī"
      },
      {
         "City": " Bichena"
      },
      {
         "City": " Bedēsa"
      },
      {
         "City": " Bedelē"
      },
      {
         "City": " Batī"
      },
      {
         "City": " Bako"
      },
      {
         "City": " Bahir Dar"
      },
      {
         "City": " Hawassa"
      },
      {
         "City": " Āsosa"
      },
      {
         "City": " Āsbe Teferī"
      },
      {
         "City": " Asaita"
      },
      {
         "City": " Āsasa"
      },
      {
         "City": " Āreka"
      },
      {
         "City": " Ārba Minch’"
      },
      {
         "City": " Axum"
      },
      {
         "City": " Hagere Maryam"
      },
      {
         "City": " Āgaro"
      },
      {
         "City": " Ādīs Zemen"
      },
      {
         "City": " Addis Ababa"
      },
      {
         "City": " Ādīgrat"
      },
      {
         "City": " Addiet Canna"
      },
      {
         "City": " Abomsa"
      }
   ],
   "Finland": [
      {
         "City": " Ylöjärvi"
      },
      {
         "City": " Vihti"
      },
      {
         "City": " Varkaus"
      },
      {
         "City": " Vantaa"
      },
      {
         "City": " Valkeakoski"
      },
      {
         "City": " Vaasa"
      },
      {
         "City": " Uusikaupunki"
      },
      {
         "City": " Tuusula"
      },
      {
         "City": " Turku"
      },
      {
         "City": " Tornio"
      },
      {
         "City": " Tampere"
      },
      {
         "City": " Siilinjärvi"
      },
      {
         "City": " Sibbo"
      },
      {
         "City": " Seinäjoki"
      },
      {
         "City": " Savonlinna"
      },
      {
         "City": " Salo"
      },
      {
         "City": " Rovaniemi"
      },
      {
         "City": " Riihimäki"
      },
      {
         "City": " Rauma"
      },
      {
         "City": " Raisio"
      },
      {
         "City": " Raahe"
      },
      {
         "City": " Pori"
      },
      {
         "City": " Pirkkala"
      },
      {
         "City": " Oulu"
      },
      {
         "City": " Nurmijärvi"
      },
      {
         "City": " Nokia"
      },
      {
         "City": " Mikkeli"
      },
      {
         "City": " Mäntsälä"
      },
      {
         "City": " Lovisa"
      },
      {
         "City": " Lohja"
      },
      {
         "City": " Lieto"
      },
      {
         "City": " Lempäälä"
      },
      {
         "City": " Laukaa"
      },
      {
         "City": " Lappeenranta"
      },
      {
         "City": " Lahti"
      },
      {
         "City": " Kirkkonummi"
      },
      {
         "City": " Kuusamo"
      },
      {
         "City": " Kuopio"
      },
      {
         "City": " Kouvola"
      },
      {
         "City": " Kotka"
      },
      {
         "City": " Korsholm"
      },
      {
         "City": " Kokkola"
      },
      {
         "City": " Kerava"
      },
      {
         "City": " Kemi"
      },
      {
         "City": " Karhula"
      },
      {
         "City": " Kangasala"
      },
      {
         "City": " Kajaani"
      },
      {
         "City": " Kaarina"
      },
      {
         "City": " Jyväskylä"
      },
      {
         "City": " Joensuu"
      },
      {
         "City": " Järvenpää"
      },
      {
         "City": " Janakkala"
      },
      {
         "City": " Jämsä"
      },
      {
         "City": " Jakobstad"
      },
      {
         "City": " Imatra"
      },
      {
         "City": " Iisalmi"
      },
      {
         "City": " Hyvinge"
      },
      {
         "City": " Hollola"
      },
      {
         "City": " Helsinki"
      },
      {
         "City": " Heinola"
      },
      {
         "City": " Haukipudas"
      },
      {
         "City": " Hamina"
      },
      {
         "City": " Hämeenlinna"
      },
      {
         "City": " Forssa"
      },
      {
         "City": " Espoo"
      },
      {
         "City": " Porvoo"
      },
      {
         "City": " Anjala"
      },
      {
         "City": " Länsi-Turunmaa"
      }
   ],
   "Fiji": [
      {
         "City": " Suva"
      },
      {
         "City": " Nadi"
      },
      {
         "City": " Lautoka"
      },
      {
         "City": " Labasa"
      }
   ],
   "Falkland Islands": [
      {
         "City": " Stanley"
      }
   ],
   "Micronesia": [
      {
         "City": " Palikir - National Government Center"
      }
   ],
   "Faroe Islands": [
      {
         "City": " Tórshavn"
      }
   ],
   "France": [
      {
         "City": " Yerres"
      },
      {
         "City": " Wittenheim"
      },
      {
         "City": " Wattrelos"
      },
      {
         "City": " Wasquehal"
      },
      {
         "City": " Voiron"
      },
      {
         "City": " Vitry-sur-Seine"
      },
      {
         "City": " Vitry-le-François"
      },
      {
         "City": " Vitrolles"
      },
      {
         "City": " Vitré"
      },
      {
         "City": " Viry-Châtillon"
      },
      {
         "City": " Viroflay"
      },
      {
         "City": " Vincennes"
      },
      {
         "City": " Villiers-sur-Marne"
      },
      {
         "City": " Villiers-le-Bel"
      },
      {
         "City": " Villeurbanne"
      },
      {
         "City": " Villers-lès-Nancy"
      },
      {
         "City": " Villepinte"
      },
      {
         "City": " Villeparisis"
      },
      {
         "City": " Villeneuve-sur-Lot"
      },
      {
         "City": " Villeneuve-Saint-Georges"
      },
      {
         "City": " Villeneuve-le-Roi"
      },
      {
         "City": " Villeneuve-la-Garenne"
      },
      {
         "City": " Villenave-d’Ornon"
      },
      {
         "City": " Villemomble"
      },
      {
         "City": " Villejuif"
      },
      {
         "City": " Villefranche-sur-Saône"
      },
      {
         "City": " Villefontaine"
      },
      {
         "City": " Vigneux-sur-Seine"
      },
      {
         "City": " Vierzon"
      },
      {
         "City": " Vienne"
      },
      {
         "City": " Vichy"
      },
      {
         "City": " Vesoul"
      },
      {
         "City": " Vertou"
      },
      {
         "City": " Versailles"
      },
      {
         "City": " Verrières-le-Buisson"
      },
      {
         "City": " Vernon"
      },
      {
         "City": " Verneuil-sur-Seine"
      },
      {
         "City": " Verdun"
      },
      {
         "City": " Vénissieux"
      },
      {
         "City": " Vendôme"
      },
      {
         "City": " Vence"
      },
      {
         "City": " Vélizy-Villacoublay"
      },
      {
         "City": " Vauréal"
      },
      {
         "City": " Vaulx-en-Velin"
      },
      {
         "City": " Vanves"
      },
      {
         "City": " Vannes"
      },
      {
         "City": " Vandœuvre-lès-Nancy"
      },
      {
         "City": " Vallauris"
      },
      {
         "City": " Valenciennes"
      },
      {
         "City": " Valence"
      },
      {
         "City": " Tulle"
      },
      {
         "City": " Troyes"
      },
      {
         "City": " Tremblay-en-France"
      },
      {
         "City": " Trappes"
      },
      {
         "City": " Tours"
      },
      {
         "City": " Tournefeuille"
      },
      {
         "City": " Tourlaville"
      },
      {
         "City": " Tourcoing"
      },
      {
         "City": " Toulouse"
      },
      {
         "City": " Toulon"
      },
      {
         "City": " Toul"
      },
      {
         "City": " Torcy"
      },
      {
         "City": " Thonon-les-Bains"
      },
      {
         "City": " Thionville"
      },
      {
         "City": " Thiais"
      },
      {
         "City": " Tergnier"
      },
      {
         "City": " Taverny"
      },
      {
         "City": " Tassin-la-Demi-Lune"
      },
      {
         "City": " Tarbes"
      },
      {
         "City": " Talence"
      },
      {
         "City": " Suresnes"
      },
      {
         "City": " Sucy-en-Brie"
      },
      {
         "City": " Strasbourg"
      },
      {
         "City": " Stains"
      },
      {
         "City": " Sotteville-lès-Rouen"
      },
      {
         "City": " Sorgues"
      },
      {
         "City": " Soisy-sous-Montmorency"
      },
      {
         "City": " Soissons"
      },
      {
         "City": " Six-Fours-les-Plages"
      },
      {
         "City": " Sin-le-Noble"
      },
      {
         "City": " Seynod"
      },
      {
         "City": " Sèvres"
      },
      {
         "City": " Sevran"
      },
      {
         "City": " Sète"
      },
      {
         "City": " Sens"
      },
      {
         "City": " Senlis"
      },
      {
         "City": " Sélestat"
      },
      {
         "City": " Sedan"
      },
      {
         "City": " Schiltigheim"
      },
      {
         "City": " Sceaux"
      },
      {
         "City": " Savigny-sur-Orge"
      },
      {
         "City": " Savigny-le-Temple"
      },
      {
         "City": " Saumur"
      },
      {
         "City": " Sartrouville"
      },
      {
         "City": " Sarreguemines"
      },
      {
         "City": " Sarcelles"
      },
      {
         "City": " Saran"
      },
      {
         "City": " Sannois"
      },
      {
         "City": " Sanary-sur-Mer"
      },
      {
         "City": " Salon-de-Provence"
      },
      {
         "City": " Sallanches"
      },
      {
         "City": " Saint-Sébastien-sur-Loire"
      },
      {
         "City": " Saint-Raphaël"
      },
      {
         "City": " Saint-Quentin"
      },
      {
         "City": " Saint-Priest"
      },
      {
         "City": " Saint-Pol-sur-Mer"
      },
      {
         "City": " Saint-Pierre-des-Corps"
      },
      {
         "City": " Saint-Ouen-l’Aumône"
      },
      {
         "City": " Saint-Ouen"
      },
      {
         "City": " Saint-Omer"
      },
      {
         "City": " Saint-Nazaire"
      },
      {
         "City": " Saint-Michel-sur-Orge"
      },
      {
         "City": " Saint-Médard-en-Jalles"
      },
      {
         "City": " Saint-Maximin-la-Sainte-Baume"
      },
      {
         "City": " Saint-Maur-des-Fossés"
      },
      {
         "City": " Saint-Martin-d’Hères"
      },
      {
         "City": " Saint-Mandé"
      },
      {
         "City": " Saint-Malo"
      },
      {
         "City": " Saint-Louis"
      },
      {
         "City": " Saint-Lô"
      },
      {
         "City": " Saint-Leu-la-Forêt"
      },
      {
         "City": " Saint-Leu"
      },
      {
         "City": " Saint-Laurent-du-Var"
      },
      {
         "City": " Saint-Jean-de-la-Ruelle"
      },
      {
         "City": " Saint-Jean-de-Braye"
      },
      {
         "City": " Saint-Herblain"
      },
      {
         "City": " Saint-Gratien"
      },
      {
         "City": " Saint-Germain-en-Laye"
      },
      {
         "City": " Saint-Genis-Laval"
      },
      {
         "City": " Saint-Fons"
      },
      {
         "City": " Saint-Étienne-du-Rouvray"
      },
      {
         "City": " Saint-Étienne"
      },
      {
         "City": " Saintes"
      },
      {
         "City": " Sainte-Geneviève-des-Bois"
      },
      {
         "City": " Sainte-Foy-lès-Lyon"
      },
      {
         "City": " Saint-Égrève"
      },
      {
         "City": " Saint-Dizier"
      },
      {
         "City": " Saint-Dié-des-Vosges"
      },
      {
         "City": " Saint-Denis"
      },
      {
         "City": " Saint-Cyr-sur-Loire"
      },
      {
         "City": " Saint-Cyr-l’École"
      },
      {
         "City": " Saint-Cloud"
      },
      {
         "City": " Saint-Chamond"
      },
      {
         "City": " Saint-Brieuc"
      },
      {
         "City": " Saint-Avold"
      },
      {
         "City": " Saint-Avertin"
      },
      {
         "City": " Saint-Amand-les-Eaux"
      },
      {
         "City": " Rueil-Malmaison"
      },
      {
         "City": " Royan"
      },
      {
         "City": " Rouen"
      },
      {
         "City": " Roubaix"
      },
      {
         "City": " Rosny-sous-Bois"
      },
      {
         "City": " Ronchin"
      },
      {
         "City": " Romorantin-Lanthenay"
      },
      {
         "City": " Romans-sur-Isère"
      },
      {
         "City": " Romainville"
      },
      {
         "City": " Roissy-en-Brie"
      },
      {
         "City": " Rodez"
      },
      {
         "City": " Rochefort"
      },
      {
         "City": " Roanne"
      },
      {
         "City": " Ris-Orangis"
      },
      {
         "City": " Riom"
      },
      {
         "City": " Rillieux-la-Pape"
      },
      {
         "City": " Rezé"
      },
      {
         "City": " Rennes"
      },
      {
         "City": " Reims"
      },
      {
         "City": " Rambouillet"
      },
      {
         "City": " Quimper"
      },
      {
         "City": " Puteaux"
      },
      {
         "City": " Port-de-Bouc"
      },
      {
         "City": " Pontoise"
      },
      {
         "City": " Pontivy"
      },
      {
         "City": " Pontarlier"
      },
      {
         "City": " Pont-à-Mousson"
      },
      {
         "City": " Poitiers"
      },
      {
         "City": " Poissy"
      },
      {
         "City": " Ploemeur"
      },
      {
         "City": " Plaisir"
      },
      {
         "City": " Plaisance-du-Touch"
      },
      {
         "City": " Pierrefitte-sur-Seine"
      },
      {
         "City": " Pessac"
      },
      {
         "City": " Pertuis"
      },
      {
         "City": " Perpignan"
      },
      {
         "City": " Périgueux"
      },
      {
         "City": " Pau"
      },
      {
         "City": " Paris"
      },
      {
         "City": " Pantin"
      },
      {
         "City": " Pamiers"
      },
      {
         "City": " Palaiseau"
      },
      {
         "City": " Ozoir-la-Ferrière"
      },
      {
         "City": " Oyonnax"
      },
      {
         "City": " Outreau"
      },
      {
         "City": " Oullins"
      },
      {
         "City": " Osny"
      },
      {
         "City": " Orvault"
      },
      {
         "City": " Orsay"
      },
      {
         "City": " Orly"
      },
      {
         "City": " Orléans"
      },
      {
         "City": " Orange"
      },
      {
         "City": " Olivet"
      },
      {
         "City": " Octeville"
      },
      {
         "City": " Noyon"
      },
      {
         "City": " Noisy-le-Sec"
      },
      {
         "City": " Noisy-le-Grand"
      },
      {
         "City": " Noisiel"
      },
      {
         "City": " Nogent-sur-Oise"
      },
      {
         "City": " Nogent-sur-Marne"
      },
      {
         "City": " Niort"
      },
      {
         "City": " Nîmes"
      },
      {
         "City": " Nice"
      },
      {
         "City": " Nevers"
      },
      {
         "City": " Neuilly-sur-Seine"
      },
      {
         "City": " Neuilly-sur-Marne"
      },
      {
         "City": " Neuilly-Plaisance"
      },
      {
         "City": " Narbonne"
      },
      {
         "City": " Nantes"
      },
      {
         "City": " Nanterre"
      },
      {
         "City": " Nancy"
      },
      {
         "City": " Muret"
      },
      {
         "City": " Mulhouse"
      },
      {
         "City": " Moulins"
      },
      {
         "City": " Mougins"
      },
      {
         "City": " Morsang-sur-Orge"
      },
      {
         "City": " Morlaix"
      },
      {
         "City": " Mont-Saint-Aignan"
      },
      {
         "City": " Montrouge"
      },
      {
         "City": " Montreuil"
      },
      {
         "City": " Montpellier"
      },
      {
         "City": " Montmorency"
      },
      {
         "City": " Montluçon"
      },
      {
         "City": " Montivilliers"
      },
      {
         "City": " Montigny-lès-Metz"
      },
      {
         "City": " Montigny-lès-Cormeilles"
      },
      {
         "City": " Montigny-le-Bretonneux"
      },
      {
         "City": " Montgeron"
      },
      {
         "City": " Montfermeil"
      },
      {
         "City": " Montesson"
      },
      {
         "City": " Montereau-Fault-Yonne"
      },
      {
         "City": " Montélimar"
      },
      {
         "City": " Mont-de-Marsan"
      },
      {
         "City": " Montceau-les-Mines"
      },
      {
         "City": " Montbrison"
      },
      {
         "City": " Montbéliard"
      },
      {
         "City": " Montauban"
      },
      {
         "City": " Montargis"
      },
      {
         "City": " Mons-en-Barœul"
      },
      {
         "City": " Moissy-Cramayel"
      },
      {
         "City": " Mitry-Mory"
      },
      {
         "City": " Miramas"
      },
      {
         "City": " Millau"
      },
      {
         "City": " Meyzieu"
      },
      {
         "City": " Meylan"
      },
      {
         "City": " Meudon"
      },
      {
         "City": " Metz"
      },
      {
         "City": " Mérignac"
      },
      {
         "City": " Menton"
      },
      {
         "City": " Melun"
      },
      {
         "City": " Meaux"
      },
      {
         "City": " Mayenne"
      },
      {
         "City": " Maurepas"
      },
      {
         "City": " Mauguio"
      },
      {
         "City": " Maubeuge"
      },
      {
         "City": " Massy"
      },
      {
         "City": " Martigues"
      },
      {
         "City": " Marseille"
      },
      {
         "City": " Marmande"
      },
      {
         "City": " Marly-le-Roi"
      },
      {
         "City": " Marignane"
      },
      {
         "City": " Marcq-en-Barœul"
      },
      {
         "City": " Mantes-la-Ville"
      },
      {
         "City": " Mantes-la-Jolie"
      },
      {
         "City": " Manosque"
      },
      {
         "City": " Mandelieu-la-Napoule"
      },
      {
         "City": " Malakoff"
      },
      {
         "City": " Maisons-Laffitte"
      },
      {
         "City": " Maisons-Alfort"
      },
      {
         "City": " Mâcon"
      },
      {
         "City": " Lyon"
      },
      {
         "City": " Lunéville"
      },
      {
         "City": " Lunel"
      },
      {
         "City": " Lucé"
      },
      {
         "City": " Louviers"
      },
      {
         "City": " Lourdes"
      },
      {
         "City": " Lormont"
      },
      {
         "City": " Lorient"
      },
      {
         "City": " Loos"
      },
      {
         "City": " Lons-le-Saunier"
      },
      {
         "City": " Longjumeau"
      },
      {
         "City": " Lomme"
      },
      {
         "City": " Lognes"
      },
      {
         "City": " Livry-Gargan"
      },
      {
         "City": " L’Isle-sur-la-Sorgue"
      },
      {
         "City": " Lisieux"
      },
      {
         "City": " Lingolsheim"
      },
      {
         "City": " Limoges"
      },
      {
         "City": " Limeil-Brévannes"
      },
      {
         "City": " Limay"
      },
      {
         "City": " Lille"
      },
      {
         "City": " Liévin"
      },
      {
         "City": " Libourne"
      },
      {
         "City": " L'Haÿ-les-Roses"
      },
      {
         "City": " Le Vésinet"
      },
      {
         "City": " Levallois-Perret"
      },
      {
         "City": " Les Sables-d'Olonne"
      },
      {
         "City": " Les Pennes-Mirabeau"
      },
      {
         "City": " Les Pavillons-sous-Bois"
      },
      {
         "City": " Les Mureaux"
      },
      {
         "City": " Les Lilas"
      },
      {
         "City": " Les Herbiers"
      },
      {
         "City": " Les Clayes-sous-Bois"
      },
      {
         "City": " Le Puy-en-Velay"
      },
      {
         "City": " Le Pré-Saint-Gervais"
      },
      {
         "City": " Le Pontet"
      },
      {
         "City": " Le Plessis-Trévise"
      },
      {
         "City": " Le Plessis-Robinson"
      },
      {
         "City": " Le Petit-Quevilly"
      },
      {
         "City": " Le Perreux-sur-Marne"
      },
      {
         "City": " Le Pecq"
      },
      {
         "City": " Lens"
      },
      {
         "City": " Le Mée-sur-Seine"
      },
      {
         "City": " Le Mans"
      },
      {
         "City": " Le Kremlin-Bicêtre"
      },
      {
         "City": " Le Havre"
      },
      {
         "City": " Le Grand-Quevilly"
      },
      {
         "City": " Le Creusot"
      },
      {
         "City": " Le Chesnay"
      },
      {
         "City": " Le Cannet"
      },
      {
         "City": " Le Bouscat"
      },
      {
         "City": " Le Blanc-Mesnil"
      },
      {
         "City": " Laxou"
      },
      {
         "City": " La Valette-du-Var"
      },
      {
         "City": " Laval"
      },
      {
         "City": " Lattes"
      },
      {
         "City": " La Teste-de-Buch"
      },
      {
         "City": " La Seyne-sur-Mer"
      },
      {
         "City": " La Roche-sur-Yon"
      },
      {
         "City": " La Rochelle"
      },
      {
         "City": " Laon"
      },
      {
         "City": " Lannion"
      },
      {
         "City": " Lanester"
      },
      {
         "City": " Landerneau"
      },
      {
         "City": " Lambersart"
      },
      {
         "City": " La Madeleine"
      },
      {
         "City": " Lagny-sur-Marne"
      },
      {
         "City": " La Garenne-Colombes"
      },
      {
         "City": " La Garde"
      },
      {
         "City": " La Flèche"
      },
      {
         "City": " La Crau"
      },
      {
         "City": " La Courneuve"
      },
      {
         "City": " La Ciotat"
      },
      {
         "City": " La Chapelle-sur-Erdre"
      },
      {
         "City": " La Celle-Saint-Cloud"
      },
      {
         "City": " Jouy-le-Moutier"
      },
      {
         "City": " Joué-lés-Tours"
      },
      {
         "City": " Joinville-le-Pont"
      },
      {
         "City": " Ivry-sur-Seine"
      },
      {
         "City": " Istres"
      },
      {
         "City": " Issy-les-Moulineaux"
      },
      {
         "City": " Issoire"
      },
      {
         "City": " Illzach"
      },
      {
         "City": " Illkirch-Graffenstaden"
      },
      {
         "City": " Hyères"
      },
      {
         "City": " Houilles"
      },
      {
         "City": " Hérouville-Saint-Clair"
      },
      {
         "City": " Herblay"
      },
      {
         "City": " Hénin-Beaumont"
      },
      {
         "City": " Hem"
      },
      {
         "City": " Hazebrouck"
      },
      {
         "City": " Hayange"
      },
      {
         "City": " Hautmont"
      },
      {
         "City": " Yutz"
      },
      {
         "City": " Haubourdin"
      },
      {
         "City": " Halluin"
      },
      {
         "City": " Haguenau"
      },
      {
         "City": " Guyancourt"
      },
      {
         "City": " Gujan-Mestras"
      },
      {
         "City": " Guéret"
      },
      {
         "City": " Guérande"
      },
      {
         "City": " Grigny"
      },
      {
         "City": " Grenoble"
      },
      {
         "City": " Grasse"
      },
      {
         "City": " Grande-Synthe"
      },
      {
         "City": " Gradignan"
      },
      {
         "City": " Goussainville"
      },
      {
         "City": " Gonesse"
      },
      {
         "City": " Givors"
      },
      {
         "City": " Gif-sur-Yvette"
      },
      {
         "City": " Gien"
      },
      {
         "City": " Gentilly"
      },
      {
         "City": " Gennevilliers"
      },
      {
         "City": " Garges-lès-Gonesse"
      },
      {
         "City": " Gardanne"
      },
      {
         "City": " Garches"
      },
      {
         "City": " Gap"
      },
      {
         "City": " Gagny"
      },
      {
         "City": " Frontignan"
      },
      {
         "City": " Fresnes"
      },
      {
         "City": " Fréjus"
      },
      {
         "City": " Franconville"
      },
      {
         "City": " Fougères"
      },
      {
         "City": " Fos-sur-Mer"
      },
      {
         "City": " Forbach"
      },
      {
         "City": " Fontenay-sous-Bois"
      },
      {
         "City": " Fontenay-le-Comte"
      },
      {
         "City": " Fontenay-aux-Roses"
      },
      {
         "City": " Fontainebleau"
      },
      {
         "City": " Fontaine"
      },
      {
         "City": " Floirac"
      },
      {
         "City": " Fleury-les-Aubrais"
      },
      {
         "City": " Flers"
      },
      {
         "City": " Firminy"
      },
      {
         "City": " Fécamp"
      },
      {
         "City": " Faches-Thumesnil"
      },
      {
         "City": " Eysines"
      },
      {
         "City": " Évry"
      },
      {
         "City": " Évreux"
      },
      {
         "City": " Étampes"
      },
      {
         "City": " La Baule-Escoublac"
      },
      {
         "City": " Ermont"
      },
      {
         "City": " Éragny"
      },
      {
         "City": " Équeurdreville-Hainneville"
      },
      {
         "City": " Épinay-sur-Seine"
      },
      {
         "City": " Épinal"
      },
      {
         "City": " Épernay"
      },
      {
         "City": " Elbeuf"
      },
      {
         "City": " Élancourt"
      },
      {
         "City": " Écully"
      },
      {
         "City": " Échirolles"
      },
      {
         "City": " Eaubonne"
      },
      {
         "City": " Dunkerque"
      },
      {
         "City": " Dreux"
      },
      {
         "City": " Draveil"
      },
      {
         "City": " Drancy"
      },
      {
         "City": " Draguignan"
      },
      {
         "City": " Douarnenez"
      },
      {
         "City": " Douai"
      },
      {
         "City": " Domont"
      },
      {
         "City": " Dole"
      },
      {
         "City": " Dijon"
      },
      {
         "City": " Digne-les-Bains"
      },
      {
         "City": " Dieppe"
      },
      {
         "City": " Deuil-la-Barre"
      },
      {
         "City": " Denain"
      },
      {
         "City": " Décines-Charpieu"
      },
      {
         "City": " Dax"
      },
      {
         "City": " Dammarie-les-Lys"
      },
      {
         "City": " Cugnaux"
      },
      {
         "City": " Croix"
      },
      {
         "City": " Créteil"
      },
      {
         "City": " Crépy-en-Valois"
      },
      {
         "City": " Creil"
      },
      {
         "City": " Cran-Gevrier"
      },
      {
         "City": " Cournon-d’Auvergne"
      },
      {
         "City": " Courbevoie"
      },
      {
         "City": " Coulommiers"
      },
      {
         "City": " Couëron"
      },
      {
         "City": " Coudekerque-Branche"
      },
      {
         "City": " Cormeilles-en-Parisis"
      },
      {
         "City": " Corbeil-Essonnes"
      },
      {
         "City": " Conflans-Sainte-Honorine"
      },
      {
         "City": " Concarneau"
      },
      {
         "City": " Compiègne"
      },
      {
         "City": " Combs-la-Ville"
      },
      {
         "City": " Pontault-Combault"
      },
      {
         "City": " Colomiers"
      },
      {
         "City": " Colombes"
      },
      {
         "City": " Colmar"
      },
      {
         "City": " Cognac"
      },
      {
         "City": " Cluses"
      },
      {
         "City": " Clichy-sous-Bois"
      },
      {
         "City": " Clichy"
      },
      {
         "City": " Clermont-Ferrand"
      },
      {
         "City": " Clamart"
      },
      {
         "City": " Cholet"
      },
      {
         "City": " Choisy-le-Roi"
      },
      {
         "City": " Chilly-Mazarin"
      },
      {
         "City": " Chevilly-Larue"
      },
      {
         "City": " Cherbourg-Octeville"
      },
      {
         "City": " Chenôve"
      },
      {
         "City": " Chennevières-sur-Marne"
      },
      {
         "City": " Chelles"
      },
      {
         "City": " Chaville"
      },
      {
         "City": " Chaumont"
      },
      {
         "City": " Chatou"
      },
      {
         "City": " Châtillon"
      },
      {
         "City": " Châtenay-Malabry"
      },
      {
         "City": " Châtellerault"
      },
      {
         "City": " Château-Thierry"
      },
      {
         "City": " Châteauroux"
      },
      {
         "City": " Châteaudun"
      },
      {
         "City": " Chartres"
      },
      {
         "City": " Charleville-Mézières"
      },
      {
         "City": " Charenton-le-Pont"
      },
      {
         "City": " Champs-sur-Marne"
      },
      {
         "City": " Champigny-sur-Marne"
      },
      {
         "City": " Chambéry"
      },
      {
         "City": " Chamalières"
      },
      {
         "City": " Chalon-sur-Saône"
      },
      {
         "City": " Châlons-en-Champagne"
      },
      {
         "City": " Challans"
      },
      {
         "City": " Cestas"
      },
      {
         "City": " Cesson-Sévigné"
      },
      {
         "City": " Cergy"
      },
      {
         "City": " Cenon"
      },
      {
         "City": " Cavaillon"
      },
      {
         "City": " Castres"
      },
      {
         "City": " Castelnau-le-Lez"
      },
      {
         "City": " Carvin"
      },
      {
         "City": " Carrières-sous-Poissy"
      },
      {
         "City": " Carquefou"
      },
      {
         "City": " Carpentras"
      },
      {
         "City": " Carcassonne"
      },
      {
         "City": " Canteleu"
      },
      {
         "City": " Cannes"
      },
      {
         "City": " Cambrai"
      },
      {
         "City": " Caluire-et-Cuire"
      },
      {
         "City": " Calais"
      },
      {
         "City": " Cahors"
      },
      {
         "City": " Cagnes-sur-Mer"
      },
      {
         "City": " Caen"
      },
      {
         "City": " Cachan"
      },
      {
         "City": " Bry-sur-Marne"
      },
      {
         "City": " Brunoy"
      },
      {
         "City": " Bruay-la-Buissière"
      },
      {
         "City": " Bron"
      },
      {
         "City": " Brive-la-Gaillarde"
      },
      {
         "City": " Brignoles"
      },
      {
         "City": " Brie-Comte-Robert"
      },
      {
         "City": " Brétigny-sur-Orge"
      },
      {
         "City": " Brest"
      },
      {
         "City": " Bressuire"
      },
      {
         "City": " Bourgoin"
      },
      {
         "City": " Bourg-lès-Valence"
      },
      {
         "City": " Bourg-la-Reine"
      },
      {
         "City": " Bourges"
      },
      {
         "City": " Bourg-en-Bresse"
      },
      {
         "City": " Boulogne-sur-Mer"
      },
      {
         "City": " Boulogne-Billancourt"
      },
      {
         "City": " Bouguenais"
      },
      {
         "City": " Bordeaux"
      },
      {
         "City": " Bonneuil-sur-Marne"
      },
      {
         "City": " Bondy"
      },
      {
         "City": " Boissy-Saint-Léger"
      },
      {
         "City": " Bois-Colombes"
      },
      {
         "City": " Bobigny"
      },
      {
         "City": " Blois"
      },
      {
         "City": " Blanquefort"
      },
      {
         "City": " Blagnac"
      },
      {
         "City": " Bischheim"
      },
      {
         "City": " Biarritz"
      },
      {
         "City": " Bezons"
      },
      {
         "City": " Béziers"
      },
      {
         "City": " Béthune"
      },
      {
         "City": " Besançon"
      },
      {
         "City": " Bergerac"
      },
      {
         "City": " Berck"
      },
      {
         "City": " Berck-Plage"
      },
      {
         "City": " Belfort"
      },
      {
         "City": " Bègles"
      },
      {
         "City": " Beauvais"
      },
      {
         "City": " Beaune"
      },
      {
         "City": " Bayonne"
      },
      {
         "City": " Bayeux"
      },
      {
         "City": " Bastia"
      },
      {
         "City": " Bar-le-Duc"
      },
      {
         "City": " Balma"
      },
      {
         "City": " Bagnols-sur-Cèze"
      },
      {
         "City": " Bagnolet"
      },
      {
         "City": " Bagneux"
      },
      {
         "City": " Avon"
      },
      {
         "City": " Avion"
      },
      {
         "City": " Avignon"
      },
      {
         "City": " Auxerre"
      },
      {
         "City": " Autun"
      },
      {
         "City": " Aurillac"
      },
      {
         "City": " Aulnay-sous-Bois"
      },
      {
         "City": " Audincourt"
      },
      {
         "City": " Auch"
      },
      {
         "City": " Aubervilliers"
      },
      {
         "City": " Aubagne"
      },
      {
         "City": " Athis-Mons"
      },
      {
         "City": " Asnières-sur-Seine"
      },
      {
         "City": " Arras"
      },
      {
         "City": " Armentières"
      },
      {
         "City": " Arles"
      },
      {
         "City": " Argenteuil"
      },
      {
         "City": " Argentan"
      },
      {
         "City": " Arcueil"
      },
      {
         "City": " Antony"
      },
      {
         "City": " Antibes"
      },
      {
         "City": " Annonay"
      },
      {
         "City": " Annemasse"
      },
      {
         "City": " Annecy-le-Vieux"
      },
      {
         "City": " Annecy"
      },
      {
         "City": " Angoulême"
      },
      {
         "City": " Anglet"
      },
      {
         "City": " Angers"
      },
      {
         "City": " Amiens"
      },
      {
         "City": " Allauch"
      },
      {
         "City": " Alfortville"
      },
      {
         "City": " Alès"
      },
      {
         "City": " Alençon"
      },
      {
         "City": " Albi"
      },
      {
         "City": " Albertville"
      },
      {
         "City": " Ajaccio"
      },
      {
         "City": " Aix-les-Bains"
      },
      {
         "City": " Aix-en-Provence"
      },
      {
         "City": " Agen"
      },
      {
         "City": " Agde"
      },
      {
         "City": " Achères"
      },
      {
         "City": " Abbeville"
      },
      {
         "City": " Villeneuve-d'Ascq"
      },
      {
         "City": " Les Ulis"
      },
      {
         "City": " Bourgoin-Jallieu"
      },
      {
         "City": " Marseille 01"
      },
      {
         "City": " Marseille 02"
      },
      {
         "City": " Marseille 03"
      },
      {
         "City": " Marseille 04"
      },
      {
         "City": " Marseille 05"
      },
      {
         "City": " Marseille 06"
      },
      {
         "City": " Marseille 07"
      },
      {
         "City": " Marseille 08"
      },
      {
         "City": " Marseille 10"
      },
      {
         "City": " Marseille 09"
      },
      {
         "City": " Marseille 11"
      },
      {
         "City": " Marseille 12"
      },
      {
         "City": " Marseille 13"
      },
      {
         "City": " Marseille 14"
      },
      {
         "City": " Marseille 15"
      },
      {
         "City": " Marseille 16"
      },
      {
         "City": " La Defense"
      },
      {
         "City": " Saint-Quentin-en-Yvelines"
      },
      {
         "City": " Cergy-Pontoise"
      }
   ],
   "Gabon": [
      {
         "City": " Tchibanga"
      },
      {
         "City": " Port-Gentil"
      },
      {
         "City": " Oyem"
      },
      {
         "City": " Mouila"
      },
      {
         "City": " Moanda"
      },
      {
         "City": " Libreville"
      },
      {
         "City": " Lambaréné"
      },
      {
         "City": " Koulamoutou"
      },
      {
         "City": " Franceville"
      }
   ],
   "United Kingdom": [
      {
         "City": " York"
      },
      {
         "City": " Yeovil"
      },
      {
         "City": " Yeadon"
      },
      {
         "City": " Yate"
      },
      {
         "City": " Wrexham"
      },
      {
         "City": " Worthing"
      },
      {
         "City": " Worksop"
      },
      {
         "City": " Workington"
      },
      {
         "City": " Worcester"
      },
      {
         "City": " Woodford Green"
      },
      {
         "City": " Wombwell"
      },
      {
         "City": " Wolverhampton"
      },
      {
         "City": " Wokingham"
      },
      {
         "City": " Woking"
      },
      {
         "City": " Witney"
      },
      {
         "City": " Witham"
      },
      {
         "City": " Wishaw"
      },
      {
         "City": " Wisbech"
      },
      {
         "City": " Winsford"
      },
      {
         "City": " Windsor"
      },
      {
         "City": " Winchester"
      },
      {
         "City": " Wilmslow"
      },
      {
         "City": " Willenhall"
      },
      {
         "City": " Wigston Magna"
      },
      {
         "City": " Wigan"
      },
      {
         "City": " Widnes"
      },
      {
         "City": " Wickford"
      },
      {
         "City": " Whitstable"
      },
      {
         "City": " Whitley Bay"
      },
      {
         "City": " Whitehaven"
      },
      {
         "City": " Whitefield"
      },
      {
         "City": " Whickham"
      },
      {
         "City": " Weymouth"
      },
      {
         "City": " Weybridge"
      },
      {
         "City": " Weston-super-Mare"
      },
      {
         "City": " West Molesey"
      },
      {
         "City": " Westhoughton"
      },
      {
         "City": " West Bromwich"
      },
      {
         "City": " West Bridgford"
      },
      {
         "City": " Welwyn Garden City"
      },
      {
         "City": " Wellington"
      },
      {
         "City": " Wellingborough"
      },
      {
         "City": " Welling"
      },
      {
         "City": " Wednesfield"
      },
      {
         "City": " Wednesbury"
      },
      {
         "City": " Wath upon Dearne"
      },
      {
         "City": " Watford"
      },
      {
         "City": " Waterlooville"
      },
      {
         "City": " Washington"
      },
      {
         "City": " Warwick"
      },
      {
         "City": " Warrington"
      },
      {
         "City": " Warminster"
      },
      {
         "City": " Ware"
      },
      {
         "City": " Walton-on-Thames"
      },
      {
         "City": " Waltham Abbey"
      },
      {
         "City": " Walsall"
      },
      {
         "City": " Wallsend"
      },
      {
         "City": " Wallasey"
      },
      {
         "City": " Walkden"
      },
      {
         "City": " Wakefield"
      },
      {
         "City": " Urmston"
      },
      {
         "City": " Uckfield"
      },
      {
         "City": " Stowmarket"
      },
      {
         "City": " Stourport-on-Severn"
      },
      {
         "City": " Stourbridge"
      },
      {
         "City": " Stoke-on-Trent"
      },
      {
         "City": " Stockton-on-Tees"
      },
      {
         "City": " Stockport"
      },
      {
         "City": " Stirling"
      },
      {
         "City": " Stevenage"
      },
      {
         "City": " Staveley"
      },
      {
         "City": " Stamford"
      },
      {
         "City": " Stalybridge"
      },
      {
         "City": " Staines"
      },
      {
         "City": " Stafford"
      },
      {
         "City": " Spennymoor"
      },
      {
         "City": " Spalding"
      },
      {
         "City": " South Shields"
      },
      {
         "City": " Southsea"
      },
      {
         "City": " Southport"
      },
      {
         "City": " South Ockendon"
      },
      {
         "City": " Southend-on-Sea"
      },
      {
         "City": " South Elmsall"
      },
      {
         "City": " South Benfleet"
      },
      {
         "City": " Southampton"
      },
      {
         "City": " Southall"
      },
      {
         "City": " Solihull"
      },
      {
         "City": " Slough"
      },
      {
         "City": " Sleaford"
      },
      {
         "City": " Skelmersdale"
      },
      {
         "City": " Skegness"
      },
      {
         "City": " Sittingbourne"
      },
      {
         "City": " Shrewsbury"
      },
      {
         "City": " Shoreham-by-Sea"
      },
      {
         "City": " Shoreham"
      },
      {
         "City": " Shipley"
      },
      {
         "City": " Sheffield"
      },
      {
         "City": " Sevenoaks"
      },
      {
         "City": " Selby"
      },
      {
         "City": " Seaham"
      },
      {
         "City": " Seaford"
      },
      {
         "City": " Scunthorpe"
      },
      {
         "City": " Scarborough"
      },
      {
         "City": " Sandown"
      },
      {
         "City": " Sandbach"
      },
      {
         "City": " Salisbury"
      },
      {
         "City": " Salford"
      },
      {
         "City": " Sale"
      },
      {
         "City": " Saint Neots"
      },
      {
         "City": " St Helens"
      },
      {
         "City": " St Austell"
      },
      {
         "City": " Saint Andrews"
      },
      {
         "City": " St Albans"
      },
      {
         "City": " Ryton"
      },
      {
         "City": " Ryde"
      },
      {
         "City": " Rutherglen"
      },
      {
         "City": " Rushden"
      },
      {
         "City": " Runcorn"
      },
      {
         "City": " Ruislip"
      },
      {
         "City": " Rugeley"
      },
      {
         "City": " Rugby"
      },
      {
         "City": " Royton"
      },
      {
         "City": " Royal Tunbridge Wells"
      },
      {
         "City": " Rottingdean"
      },
      {
         "City": " Rotherham"
      },
      {
         "City": " Romsey"
      },
      {
         "City": " Rochford"
      },
      {
         "City": " Rochester"
      },
      {
         "City": " Rochdale"
      },
      {
         "City": " Risca"
      },
      {
         "City": " Ripon"
      },
      {
         "City": " Ripley"
      },
      {
         "City": " Rhyl"
      },
      {
         "City": " Rhondda"
      },
      {
         "City": " Renfrew"
      },
      {
         "City": " Reigate"
      },
      {
         "City": " Redhill"
      },
      {
         "City": " Redditch"
      },
      {
         "City": " Redcar"
      },
      {
         "City": " Reading"
      },
      {
         "City": " Rayleigh"
      },
      {
         "City": " Rawtenstall"
      },
      {
         "City": " Rawmarsh"
      },
      {
         "City": " Ramsgate"
      },
      {
         "City": " Ramsbottom"
      },
      {
         "City": " Purley"
      },
      {
         "City": " Pudsey"
      },
      {
         "City": " Prestwick"
      },
      {
         "City": " Prestwich"
      },
      {
         "City": " Preston"
      },
      {
         "City": " Prestatyn"
      },
      {
         "City": " Prescot"
      },
      {
         "City": " Poulton le Fylde"
      },
      {
         "City": " Potters Bar"
      },
      {
         "City": " Portsmouth"
      },
      {
         "City": " Portslade"
      },
      {
         "City": " Portishead"
      },
      {
         "City": " Porthcawl"
      },
      {
         "City": " Port Glasgow"
      },
      {
         "City": " Portadown"
      },
      {
         "City": " Poole"
      },
      {
         "City": " Pontypridd"
      },
      {
         "City": " Pontypool"
      },
      {
         "City": " Pontefract"
      },
      {
         "City": " Polmont"
      },
      {
         "City": " Plymstock"
      },
      {
         "City": " Plymouth"
      },
      {
         "City": " Pitsea"
      },
      {
         "City": " Pinner"
      },
      {
         "City": " Peterlee"
      },
      {
         "City": " Peterhead"
      },
      {
         "City": " Peterborough"
      },
      {
         "City": " Perth"
      },
      {
         "City": " Penzance"
      },
      {
         "City": " Penicuik"
      },
      {
         "City": " Penarth"
      },
      {
         "City": " Paisley"
      },
      {
         "City": " Paignton"
      },
      {
         "City": " Oxford"
      },
      {
         "City": " Oswestry"
      },
      {
         "City": " Ossett"
      },
      {
         "City": " Orpington"
      },
      {
         "City": " Ormskirk"
      },
      {
         "City": " Omagh"
      },
      {
         "City": " Oldham"
      },
      {
         "City": " Oadby"
      },
      {
         "City": " Nuneaton"
      },
      {
         "City": " Nottingham"
      },
      {
         "City": " Norwich"
      },
      {
         "City": " Northwich"
      },
      {
         "City": " North Shields"
      },
      {
         "City": " Northolt"
      },
      {
         "City": " Lancing"
      },
      {
         "City": " Northampton"
      },
      {
         "City": " Northallerton"
      },
      {
         "City": " Newtownards"
      },
      {
         "City": " Newtownabbey"
      },
      {
         "City": " Newton Mearns"
      },
      {
         "City": " Newton-le-Willows"
      },
      {
         "City": " Newton Aycliffe"
      },
      {
         "City": " Newton Abbot"
      },
      {
         "City": " Newry"
      },
      {
         "City": " Newquay"
      },
      {
         "City": " Newport Pagnell"
      },
      {
         "City": " Newport"
      },
      {
         "City": " Newport"
      },
      {
         "City": " New Milton"
      },
      {
         "City": " Newmarket"
      },
      {
         "City": " New Malden"
      },
      {
         "City": " Newcastle upon Tyne"
      },
      {
         "City": " Newcastle under Lyme"
      },
      {
         "City": " Newbury"
      },
      {
         "City": " Newburn"
      },
      {
         "City": " Newark on Trent"
      },
      {
         "City": " Nelson"
      },
      {
         "City": " Neath"
      },
      {
         "City": " Nailsea"
      },
      {
         "City": " Musselburgh"
      },
      {
         "City": " Motherwell"
      },
      {
         "City": " Morley"
      },
      {
         "City": " Moreton"
      },
      {
         "City": " Morecambe"
      },
      {
         "City": " Mitcham"
      },
      {
         "City": " Mirfield"
      },
      {
         "City": " Milton Keynes"
      },
      {
         "City": " Middleton"
      },
      {
         "City": " Middlesbrough"
      },
      {
         "City": " Mexborough"
      },
      {
         "City": " Merthyr Tydfil"
      },
      {
         "City": " Melton Mowbray"
      },
      {
         "City": " Marple"
      },
      {
         "City": " Marlow"
      },
      {
         "City": " Market Harborough"
      },
      {
         "City": " Margate"
      },
      {
         "City": " March"
      },
      {
         "City": " Mansfield Woodhouse"
      },
      {
         "City": " Mansfield"
      },
      {
         "City": " Mangotsfield"
      },
      {
         "City": " Manchester"
      },
      {
         "City": " Maltby"
      },
      {
         "City": " Maldon"
      },
      {
         "City": " Maidstone"
      },
      {
         "City": " Maidenhead"
      },
      {
         "City": " Maghull"
      },
      {
         "City": " Maesteg"
      },
      {
         "City": " Macclesfield"
      },
      {
         "City": " Luton"
      },
      {
         "City": " Lowestoft"
      },
      {
         "City": " Louth"
      },
      {
         "City": " Loughborough"
      },
      {
         "City": " Longfield"
      },
      {
         "City": " Long Eaton"
      },
      {
         "City": " Londonderry County Borough"
      },
      {
         "City": " Derry"
      },
      {
         "City": " City of London"
      },
      {
         "City": " London"
      },
      {
         "City": " Lofthouse"
      },
      {
         "City": " Llanelli"
      },
      {
         "City": " Llandudno"
      },
      {
         "City": " Livingston"
      },
      {
         "City": " Liverpool"
      },
      {
         "City": " Littlehampton"
      },
      {
         "City": " Litherland"
      },
      {
         "City": " Lisburn"
      },
      {
         "City": " Lincoln"
      },
      {
         "City": " Lichfield"
      },
      {
         "City": " Leyland"
      },
      {
         "City": " Lewes"
      },
      {
         "City": " Letchworth"
      },
      {
         "City": " Leighton Buzzard"
      },
      {
         "City": " Leigh"
      },
      {
         "City": " Leicester"
      },
      {
         "City": " Leek"
      },
      {
         "City": " Leeds"
      },
      {
         "City": " Leatherhead"
      },
      {
         "City": " Royal Leamington Spa"
      },
      {
         "City": " Larne"
      },
      {
         "City": " Larkhall"
      },
      {
         "City": " Lancaster"
      },
      {
         "City": " Kirkintilloch"
      },
      {
         "City": " Kirkcaldy"
      },
      {
         "City": " Kirkby in Ashfield"
      },
      {
         "City": " Kirkby"
      },
      {
         "City": " Kingswood"
      },
      {
         "City": " Kingswinford"
      },
      {
         "City": " Hull"
      },
      {
         "City": " King's Lynn"
      },
      {
         "City": " Kilwinning"
      },
      {
         "City": " Kilmarnock"
      },
      {
         "City": " Kidsgrove"
      },
      {
         "City": " Kidlington"
      },
      {
         "City": " Kidderminster"
      },
      {
         "City": " Keynsham"
      },
      {
         "City": " Kettering"
      },
      {
         "City": " Kenilworth"
      },
      {
         "City": " Kendal"
      },
      {
         "City": " Kempston"
      },
      {
         "City": " Keighley"
      },
      {
         "City": " Johnstone"
      },
      {
         "City": " Jarrow"
      },
      {
         "City": " Islington"
      },
      {
         "City": " Isleworth"
      },
      {
         "City": " Irvine"
      },
      {
         "City": " Coity"
      },
      {
         "City": " Cobham"
      },
      {
         "City": " Coatbridge"
      },
      {
         "City": " Coalville"
      },
      {
         "City": " Clydebank"
      },
      {
         "City": " Clydach"
      },
      {
         "City": " Clitheroe"
      },
      {
         "City": " Clevedon"
      },
      {
         "City": " Cleethorpes"
      },
      {
         "City": " Cleckheaton"
      },
      {
         "City": " Clacton-on-Sea"
      },
      {
         "City": " Cirencester"
      },
      {
         "City": " Christchurch"
      },
      {
         "City": " Chorley"
      },
      {
         "City": " Chislehurst"
      },
      {
         "City": " Chipping Sodbury"
      },
      {
         "City": " Chippenham"
      },
      {
         "City": " Chichester"
      },
      {
         "City": " Chester-le-Street"
      },
      {
         "City": " Chesterfield"
      },
      {
         "City": " Chester"
      },
      {
         "City": " Chessington"
      },
      {
         "City": " Cheshunt"
      },
      {
         "City": " Chesham"
      },
      {
         "City": " Cheltenham"
      },
      {
         "City": " Chelsea"
      },
      {
         "City": " Chelmsford"
      },
      {
         "City": " Cheadle Hulme"
      },
      {
         "City": " Chatham"
      },
      {
         "City": " Chapletown"
      },
      {
         "City": " Chalfont Saint Peter"
      },
      {
         "City": " Caterham"
      },
      {
         "City": " Castlereagh"
      },
      {
         "City": " Castleford"
      },
      {
         "City": " Carshalton"
      },
      {
         "City": " Carrickfergus"
      },
      {
         "City": " Carmarthen"
      },
      {
         "City": " Carlisle"
      },
      {
         "City": " Cardiff"
      },
      {
         "City": " Canterbury"
      },
      {
         "City": " Cannock"
      },
      {
         "City": " Cambridge"
      },
      {
         "City": " Camborne"
      },
      {
         "City": " Camberley"
      },
      {
         "City": " Caerphilly"
      },
      {
         "City": " Buxton"
      },
      {
         "City": " Bushey"
      },
      {
         "City": " Bury St Edmunds"
      },
      {
         "City": " Bury"
      },
      {
         "City": " Burton upon Trent"
      },
      {
         "City": " Burntwood"
      },
      {
         "City": " Burnley"
      },
      {
         "City": " Burnham-on-Sea"
      },
      {
         "City": " Burgess Hill"
      },
      {
         "City": " Buckley"
      },
      {
         "City": " Buckhaven"
      },
      {
         "City": " Brymbo"
      },
      {
         "City": " Brownhills"
      },
      {
         "City": " Bromsgrove"
      },
      {
         "City": " Broadstairs"
      },
      {
         "City": " Brixham"
      },
      {
         "City": " Briton Ferry"
      },
      {
         "City": " Bristol"
      },
      {
         "City": " Brighton"
      },
      {
         "City": " Brighouse"
      },
      {
         "City": " Brierley Hill"
      },
      {
         "City": " Bridlington"
      },
      {
         "City": " Bridgwater"
      },
      {
         "City": " Bridgend"
      },
      {
         "City": " Brentwood"
      },
      {
         "City": " Bredbury"
      },
      {
         "City": " Bramhall"
      },
      {
         "City": " Braintree"
      },
      {
         "City": " Bradford"
      },
      {
         "City": " Bracknell"
      },
      {
         "City": " Bournemouth"
      },
      {
         "City": " Boston"
      },
      {
         "City": " Borehamwood"
      },
      {
         "City": " Bootle"
      },
      {
         "City": " Bolton"
      },
      {
         "City": " Bognor Regis"
      },
      {
         "City": " Blyth"
      },
      {
         "City": " Bloxwich"
      },
      {
         "City": " Bletchley"
      },
      {
         "City": " Blackpool"
      },
      {
         "City": " Blackburn"
      },
      {
         "City": " Bishopstoke"
      },
      {
         "City": " Bishops Stortford"
      },
      {
         "City": " Bishopbriggs"
      },
      {
         "City": " Bishop Auckland"
      },
      {
         "City": " Birmingham"
      },
      {
         "City": " Birkenhead"
      },
      {
         "City": " Bingley"
      },
      {
         "City": " Billingham"
      },
      {
         "City": " Billericay"
      },
      {
         "City": " Biggleswade"
      },
      {
         "City": " Bideford"
      },
      {
         "City": " Biddulph"
      },
      {
         "City": " Bicester"
      },
      {
         "City": " Bexley"
      },
      {
         "City": " Bexhill-on-Sea"
      },
      {
         "City": " Beverley"
      },
      {
         "City": " Berwick-Upon-Tweed"
      },
      {
         "City": " Berkhamsted"
      },
      {
         "City": " Bentley"
      },
      {
         "City": " Belper"
      },
      {
         "City": " Bellshill"
      },
      {
         "City": " Belfast"
      },
      {
         "City": " Bedworth"
      },
      {
         "City": " Bedlington"
      },
      {
         "City": " Bedford"
      },
      {
         "City": " Beckenham"
      },
      {
         "City": " Bebington"
      },
      {
         "City": " Bearsden"
      },
      {
         "City": " Batley"
      },
      {
         "City": " Bathgate"
      },
      {
         "City": " Bath"
      },
      {
         "City": " Basingstoke"
      },
      {
         "City": " Basildon"
      },
      {
         "City": " Barry"
      },
      {
         "City": " Barrow in Furness"
      },
      {
         "City": " Barrhead"
      },
      {
         "City": " Barnstaple"
      },
      {
         "City": " Barnsley"
      },
      {
         "City": " Barnet"
      },
      {
         "City": " Barking"
      },
      {
         "City": " Banstead"
      },
      {
         "City": " Bangor"
      },
      {
         "City": " Bangor"
      },
      {
         "City": " Banbury"
      },
      {
         "City": " Banbridge"
      },
      {
         "City": " Ballymena"
      },
      {
         "City": " Baildon"
      },
      {
         "City": " Ayr"
      },
      {
         "City": " Aylesbury"
      },
      {
         "City": " Atherton"
      },
      {
         "City": " Ashton-under-Lyne"
      },
      {
         "City": " Ashton in Makerfield"
      },
      {
         "City": " Ashford"
      },
      {
         "City": " Ascot"
      },
      {
         "City": " Arnold"
      },
      {
         "City": " Arbroath"
      },
      {
         "City": " Antrim"
      },
      {
         "City": " Andover"
      },
      {
         "City": " Amersham"
      },
      {
         "City": " Altrincham"
      },
      {
         "City": " Alton"
      },
      {
         "City": " Alloa"
      },
      {
         "City": " Alfreton"
      },
      {
         "City": " Aldridge"
      },
      {
         "City": " Aldershot"
      },
      {
         "City": " Airdrie"
      },
      {
         "City": " Acton"
      },
      {
         "City": " Acocks Green"
      },
      {
         "City": " Accrington"
      },
      {
         "City": " Abingdon"
      },
      {
         "City": " Aberystwyth"
      },
      {
         "City": " Abergele"
      },
      {
         "City": " Aberdeen"
      },
      {
         "City": " Aberdare"
      },
      {
         "City": " Crosby"
      },
      {
         "City": " Blackwood"
      },
      {
         "City": " Neston"
      },
      {
         "City": " Camden Town"
      },
      {
         "City": " Telford"
      },
      {
         "City": " Craigavon"
      },
      {
         "City": " Bayswater"
      },
      {
         "City": " Yateley"
      },
      {
         "City": " Bowthorpe"
      },
      {
         "City": " Hedge End"
      },
      {
         "City": " Erskine"
      },
      {
         "City": " Hale"
      },
      {
         "City": " Amersham on the Hill"
      },
      {
         "City": " Battersea"
      },
      {
         "City": " South Croydon"
      },
      {
         "City": " Hornchurch"
      },
      {
         "City": " Surbiton"
      },
      {
         "City": " Ewell"
      },
      {
         "City": " Becontree"
      },
      {
         "City": " Brixton"
      },
      {
         "City": " Bethnal Green"
      },
      {
         "City": " Failsworth"
      },
      {
         "City": " Radcliffe"
      },
      {
         "City": " Heywood"
      },
      {
         "City": " Longsight"
      },
      {
         "City": " Heavitree"
      },
      {
         "City": " Ferndown"
      },
      {
         "City": " Canary Wharf"
      },
      {
         "City": " Lytham St Annes"
      },
      {
         "City": " Hadley Wood"
      },
      {
         "City": " Chapel Allerton"
      },
      {
         "City": " Blackheath"
      },
      {
         "City": " Kempston Hardwick"
      },
      {
         "City": " Mendip"
      },
      {
         "City": " Lower Earley"
      },
      {
         "City": " Bartley Green"
      },
      {
         "City": " Earlsfield"
      },
      {
         "City": " Letchworth Garden City"
      },
      {
         "City": " Shirley"
      },
      {
         "City": " Stanley"
      },
      {
         "City": " Rossendale"
      },
      {
         "City": " Thornton-Cleveleys"
      },
      {
         "City": " Deeside"
      },
      {
         "City": " High Peak"
      },
      {
         "City": " Hayling Island"
      },
      {
         "City": " Isle of Lewis"
      },
      {
         "City": " Shetland"
      },
      {
         "City": " Orkney"
      },
      {
         "City": " Holloway"
      },
      {
         "City": " Harringay"
      }
   ],
   "Grenada": [
      {
         "City": " Saint George's"
      }
   ],
   "Georgia": [
      {
         "City": " Zugdidi"
      },
      {
         "City": " Zestap’oni"
      },
      {
         "City": " Ts’khinvali"
      },
      {
         "City": " Tqvarch'eli"
      },
      {
         "City": " Telavi"
      },
      {
         "City": " Tbilisi"
      },
      {
         "City": " Sokhumi"
      },
      {
         "City": " Senak’i"
      },
      {
         "City": " Samtredia"
      },
      {
         "City": " Rust’avi"
      },
      {
         "City": " P’ot’i"
      },
      {
         "City": " Ozurgeti"
      },
      {
         "City": " Och’amch’ire"
      },
      {
         "City": " Marneuli"
      },
      {
         "City": " Kutaisi"
      },
      {
         "City": " Kobuleti"
      },
      {
         "City": " Khashuri"
      },
      {
         "City": " Gori"
      },
      {
         "City": " Batumi"
      },
      {
         "City": " Akhaltsikhe"
      },
      {
         "City": " Stantsiya Novyy Afon"
      },
      {
         "City": " Tsqaltubo"
      }
   ],
   "French Guiana": [
      {
         "City": " Saint-Laurent-du-Maroni"
      },
      {
         "City": " Rémire-Montjoly"
      },
      {
         "City": " Matoury"
      },
      {
         "City": " Kourou"
      },
      {
         "City": " Cayenne"
      }
   ],
   "Guernsey": [
      {
         "City": " Saint Peter Port"
      }
   ],
   "Ghana": [
      {
         "City": " Yendi"
      },
      {
         "City": " Winneba"
      },
      {
         "City": " Wenchi"
      },
      {
         "City": " Wa"
      },
      {
         "City": " Teshi Old Town"
      },
      {
         "City": " Tema"
      },
      {
         "City": " Techiman"
      },
      {
         "City": " Tarkwa"
      },
      {
         "City": " Tamale"
      },
      {
         "City": " Takoradi"
      },
      {
         "City": " Tafo"
      },
      {
         "City": " Swedru"
      },
      {
         "City": " Sunyani"
      },
      {
         "City": " Suhum"
      },
      {
         "City": " Shama Junction"
      },
      {
         "City": " Sekondi-Takoradi"
      },
      {
         "City": " Savelugu"
      },
      {
         "City": " Saltpond"
      },
      {
         "City": " Salaga"
      },
      {
         "City": " Prestea"
      },
      {
         "City": " Kasoa"
      },
      {
         "City": " Akim Oda"
      },
      {
         "City": " Obuasi"
      },
      {
         "City": " Nungua"
      },
      {
         "City": " Nsawam"
      },
      {
         "City": " Nkawkaw"
      },
      {
         "City": " Navrongo"
      },
      {
         "City": " Mampong"
      },
      {
         "City": " Medina Estates"
      },
      {
         "City": " Kumasi"
      },
      {
         "City": " Kpandu"
      },
      {
         "City": " Konongo"
      },
      {
         "City": " Koforidua"
      },
      {
         "City": " Kintampo"
      },
      {
         "City": " Keta"
      },
      {
         "City": " Hohoe"
      },
      {
         "City": " Ho"
      },
      {
         "City": " Gbawe"
      },
      {
         "City": " Foso"
      },
      {
         "City": " Elmina"
      },
      {
         "City": " Ejura"
      },
      {
         "City": " Dunkwa"
      },
      {
         "City": " Dome"
      },
      {
         "City": " Cape Coast"
      },
      {
         "City": " Bolgatanga"
      },
      {
         "City": " Bibiani"
      },
      {
         "City": " Berekum"
      },
      {
         "City": " Begoro"
      },
      {
         "City": " Bawku"
      },
      {
         "City": " Axim"
      },
      {
         "City": " Asamankese"
      },
      {
         "City": " Apam"
      },
      {
         "City": " Anloga"
      },
      {
         "City": " Akwatia"
      },
      {
         "City": " Agogo"
      },
      {
         "City": " Achiaman"
      },
      {
         "City": " Accra"
      },
      {
         "City": " Aburi"
      }
   ],
   "Gibraltar": [
      {
         "City": " Gibraltar"
      }
   ],
   "Greenland": [
      {
         "City": " Nuuk"
      }
   ],
   "Gambia": [
      {
         "City": " Sukuta"
      },
      {
         "City": " Lamin"
      },
      {
         "City": " Farafenni"
      },
      {
         "City": " Brikama"
      },
      {
         "City": " Banjul"
      },
      {
         "City": " Bakau"
      }
   ],
   "Guinea": [
      {
         "City": " Tougué"
      },
      {
         "City": " Télimélé"
      },
      {
         "City": " Siguiri"
      },
      {
         "City": " Pita"
      },
      {
         "City": " Nzérékoré"
      },
      {
         "City": " Mamou"
      },
      {
         "City": " Macenta"
      },
      {
         "City": " Labé"
      },
      {
         "City": " Kissidougou"
      },
      {
         "City": " Kindia"
      },
      {
         "City": " Kankan"
      },
      {
         "City": " Kamsar"
      },
      {
         "City": " Gueckedou"
      },
      {
         "City": " Fria"
      },
      {
         "City": " Coyah"
      },
      {
         "City": " Conakry"
      },
      {
         "City": " Camayenne"
      },
      {
         "City": " Boké"
      }
   ],
   "Guadeloupe": [
      {
         "City": " Sainte-Rose"
      },
      {
         "City": " Sainte-Anne"
      },
      {
         "City": " Pointe-à-Pitre"
      },
      {
         "City": " Petit-Bourg"
      },
      {
         "City": " Les Abymes"
      },
      {
         "City": " Le Moule"
      },
      {
         "City": " Le Gosier"
      },
      {
         "City": " Capesterre-Belle-Eau"
      },
      {
         "City": " Basse-Terre"
      },
      {
         "City": " Baie-Mahault"
      }
   ],
   "Equatorial Guinea": [
      {
         "City": " Ebebiyin"
      },
      {
         "City": " Malabo"
      },
      {
         "City": " Bata"
      }
   ],
   "Greece": [
      {
         "City": " Voúla"
      },
      {
         "City": " Vólos"
      },
      {
         "City": " Výronas"
      },
      {
         "City": " Vári"
      },
      {
         "City": " Trípoli"
      },
      {
         "City": " Tríkala"
      },
      {
         "City": " Thívai"
      },
      {
         "City": " Spárti"
      },
      {
         "City": " Salamína"
      },
      {
         "City": " Rethymno"
      },
      {
         "City": " Préveza"
      },
      {
         "City": " Pýrgos"
      },
      {
         "City": " Piraeus"
      },
      {
         "City": " Petroúpolis"
      },
      {
         "City": " Peristéri"
      },
      {
         "City": " Pérama"
      },
      {
         "City": " Pátra"
      },
      {
         "City": " Palaió Fáliro"
      },
      {
         "City": " Níkaia"
      },
      {
         "City": " Néa Smýrni"
      },
      {
         "City": " Néa Mákri"
      },
      {
         "City": " Ílion"
      },
      {
         "City": " Néa Ionía"
      },
      {
         "City": " Néa Filadélfeia"
      },
      {
         "City": " Néa Erythraía"
      },
      {
         "City": " Moskháton"
      },
      {
         "City": " Mytilíni"
      },
      {
         "City": " Melíssia"
      },
      {
         "City": " Mégara"
      },
      {
         "City": " Artémida"
      },
      {
         "City": " Livadeiá"
      },
      {
         "City": " Lárisa"
      },
      {
         "City": " Lamía"
      },
      {
         "City": " Metamórfosi"
      },
      {
         "City": " Kos"
      },
      {
         "City": " Koropí"
      },
      {
         "City": " Kórinthos"
      },
      {
         "City": " Kifisiá"
      },
      {
         "City": " Cholargós"
      },
      {
         "City": " Chios"
      },
      {
         "City": " Chaniá"
      },
      {
         "City": " Chalkída"
      },
      {
         "City": " Khalándrion"
      },
      {
         "City": " Chaïdári"
      },
      {
         "City": " Keratsíni"
      },
      {
         "City": " Kardítsa"
      },
      {
         "City": " Kamaterón"
      },
      {
         "City": " Kallithéa"
      },
      {
         "City": " Kalamáta"
      },
      {
         "City": " Álimos"
      },
      {
         "City": " Kaisarianí"
      },
      {
         "City": " Irákleio"
      },
      {
         "City": " Irákleion"
      },
      {
         "City": " Ioánnina"
      },
      {
         "City": " Glyfáda"
      },
      {
         "City": " Galátsi"
      },
      {
         "City": " Ellinikó"
      },
      {
         "City": " Elefsína"
      },
      {
         "City": " Dhafní"
      },
      {
         "City": " Agios Dimitrios"
      },
      {
         "City": " Agía Varvára"
      },
      {
         "City": " Agía Paraskeví"
      },
      {
         "City": " Athens"
      },
      {
         "City": " Asprópyrgos"
      },
      {
         "City": " Argyroúpoli"
      },
      {
         "City": " Árta"
      },
      {
         "City": " Árgos"
      },
      {
         "City": " Áno Liósia"
      },
      {
         "City": " Maroúsi"
      },
      {
         "City": " Amaliáda"
      },
      {
         "City": " Acharnés"
      },
      {
         "City": " Aígio"
      },
      {
         "City": " Aigáleo"
      },
      {
         "City": " Agrínio"
      },
      {
         "City": " Ródos"
      },
      {
         "City": " Giannitsá"
      },
      {
         "City": " Xánthi"
      },
      {
         "City": " Véroia"
      },
      {
         "City": " Thessaloníki"
      },
      {
         "City": " Sykiés"
      },
      {
         "City": " Sérres"
      },
      {
         "City": " Ptolemaḯda"
      },
      {
         "City": " Políchni"
      },
      {
         "City": " Pylaía"
      },
      {
         "City": " Peraía"
      },
      {
         "City": " Panórama"
      },
      {
         "City": " Orestiáda"
      },
      {
         "City": " Oraiókastro"
      },
      {
         "City": " Náousa"
      },
      {
         "City": " Meneméni"
      },
      {
         "City": " Kozáni"
      },
      {
         "City": " Komotiní"
      },
      {
         "City": " Kilkís"
      },
      {
         "City": " Kavála"
      },
      {
         "City": " Kateríni"
      },
      {
         "City": " Kalamariá"
      },
      {
         "City": " Flórina"
      },
      {
         "City": " Édessa"
      },
      {
         "City": " Dráma"
      },
      {
         "City": " Alexandroúpoli"
      },
      {
         "City": " Corfu"
      },
      {
         "City": " Vrilissia"
      },
      {
         "City": " Gérakas"
      },
      {
         "City": " Ilioúpoli"
      },
      {
         "City": " Korydallós"
      },
      {
         "City": " Zográfos"
      },
      {
         "City": " Péfki"
      },
      {
         "City": " Ágioi Anárgyroi"
      },
      {
         "City": " Agios Ioannis Rentis"
      },
      {
         "City": " Néa Ionía"
      }
   ],
   "South Georgia and the South Sandwich Islands": [
      {
         "City": " Grytviken"
      }
   ],
   "Guatemala": [
      {
         "City": " Zacapa"
      },
      {
         "City": " Villa Nueva"
      },
      {
         "City": " Villa Canales"
      },
      {
         "City": " Totonicapán"
      },
      {
         "City": " Tecpán Guatemala"
      },
      {
         "City": " Sumpango"
      },
      {
         "City": " Sololá"
      },
      {
         "City": " Santiago Sacatepéquez"
      },
      {
         "City": " Santiago Atitlán"
      },
      {
         "City": " Santa María de Jesús"
      },
      {
         "City": " Santa Lucía Cotzumalguapa"
      },
      {
         "City": " Santa Cruz del Quiché"
      },
      {
         "City": " Santa Catarina Pinula"
      },
      {
         "City": " San Pedro Sacatepéquez"
      },
      {
         "City": " San Pedro Ayampuc"
      },
      {
         "City": " San Pablo Jocopilas"
      },
      {
         "City": " San Marcos"
      },
      {
         "City": " San Lucas Sacatepéquez"
      },
      {
         "City": " San Juan Sacatepéquez"
      },
      {
         "City": " San José Pinula"
      },
      {
         "City": " San Francisco El Alto"
      },
      {
         "City": " San Cristóbal Verapaz"
      },
      {
         "City": " San Benito"
      },
      {
         "City": " Sanarate"
      },
      {
         "City": " San Andrés Itzapa"
      },
      {
         "City": " Salamá"
      },
      {
         "City": " Retalhuleu"
      },
      {
         "City": " Quetzaltenango"
      },
      {
         "City": " Puerto San José"
      },
      {
         "City": " Puerto Barrios"
      },
      {
         "City": " Tiquisate"
      },
      {
         "City": " Poptún"
      },
      {
         "City": " Petapa"
      },
      {
         "City": " Patzún"
      },
      {
         "City": " Patzicía"
      },
      {
         "City": " Panzós"
      },
      {
         "City": " Palín"
      },
      {
         "City": " Palencia"
      },
      {
         "City": " Ostuncalco"
      },
      {
         "City": " Nuevo San Carlos"
      },
      {
         "City": " Nebaj"
      },
      {
         "City": " Nahualá"
      },
      {
         "City": " Morales"
      },
      {
         "City": " Momostenango"
      },
      {
         "City": " Mixco"
      },
      {
         "City": " Mazatenango"
      },
      {
         "City": " La Gomera"
      },
      {
         "City": " La Esperanza"
      },
      {
         "City": " Jutiapa"
      },
      {
         "City": " Jocotenango"
      },
      {
         "City": " Jalapa"
      },
      {
         "City": " Jacaltenango"
      },
      {
         "City": " Huehuetenango"
      },
      {
         "City": " Gualán"
      },
      {
         "City": " Fraijanes"
      },
      {
         "City": " Flores"
      },
      {
         "City": " Esquipulas"
      },
      {
         "City": " Escuintla"
      },
      {
         "City": " El Tejar"
      },
      {
         "City": " El Palmar"
      },
      {
         "City": " El Estor"
      },
      {
         "City": " Cuilapa"
      },
      {
         "City": " Comitancillo"
      },
      {
         "City": " Comalapa"
      },
      {
         "City": " Colomba"
      },
      {
         "City": " Cobán"
      },
      {
         "City": " Coatepeque"
      },
      {
         "City": " Ciudad Vieja"
      },
      {
         "City": " Guatemala City"
      },
      {
         "City": " Chisec"
      },
      {
         "City": " Chiquimula"
      },
      {
         "City": " Chinautla"
      },
      {
         "City": " Chimaltenango"
      },
      {
         "City": " Chichicastenango"
      },
      {
         "City": " Chicacao"
      },
      {
         "City": " Cantel"
      },
      {
         "City": " Barberena"
      },
      {
         "City": " Asunción Mita"
      },
      {
         "City": " Antigua Guatemala"
      },
      {
         "City": " Amatitlán"
      },
      {
         "City": " Alotenango"
      }
   ],
   "Guam": [
      {
         "City": " Tamuning-Tumon-Harmon Village"
      },
      {
         "City": " Yigo Village"
      },
      {
         "City": " Guam Government House"
      },
      {
         "City": " Dededo Village"
      },
      {
         "City": " Hagåtña"
      },
      {
         "City": " Mangilao Village"
      }
   ],
   "Guinea-Bissau": [
      {
         "City": " Bissau"
      },
      {
         "City": " Bafatá"
      }
   ],
   "Guyana": [
      {
         "City": " New Amsterdam"
      },
      {
         "City": " Linden"
      },
      {
         "City": " Georgetown"
      }
   ],
   "Hong Kong": [
      {
         "City": " Tsuen Wan"
      },
      {
         "City": " Yuen Long Kau Hui"
      },
      {
         "City": " Tuen Mun"
      },
      {
         "City": " Tai Po"
      },
      {
         "City": " Sha Tin"
      },
      {
         "City": " Kowloon"
      },
      {
         "City": " Hong Kong"
      }
   ],
   "Honduras": [
      {
         "City": " Puerto Cortez"
      },
      {
         "City": " Yoro"
      },
      {
         "City": " Villanueva"
      },
      {
         "City": " Tocoa"
      },
      {
         "City": " Tela"
      },
      {
         "City": " Tegucigalpa"
      },
      {
         "City": " Siguatepeque"
      },
      {
         "City": " Santa Rosa de Copán"
      },
      {
         "City": " Santa Bárbara"
      },
      {
         "City": " San Pedro Sula"
      },
      {
         "City": " San Lorenzo"
      },
      {
         "City": " Potrerillos"
      },
      {
         "City": " Olanchito"
      },
      {
         "City": " La Paz"
      },
      {
         "City": " La Lima"
      },
      {
         "City": " La Ceiba"
      },
      {
         "City": " Juticalpa"
      },
      {
         "City": " El Progreso"
      },
      {
         "City": " El Paraíso"
      },
      {
         "City": " Danlí"
      },
      {
         "City": " Comayagua"
      },
      {
         "City": " Cofradía"
      },
      {
         "City": " Ciudad Choluteca"
      },
      {
         "City": " Choloma"
      }
   ],
   "Croatia": [
      {
         "City": " Zaprešić"
      },
      {
         "City": " Zagreb"
      },
      {
         "City": " Zadar"
      },
      {
         "City": " Vukovar"
      },
      {
         "City": " Virovitica"
      },
      {
         "City": " Vinkovci"
      },
      {
         "City": " Velika Gorica"
      },
      {
         "City": " Varaždin"
      },
      {
         "City": " Split"
      },
      {
         "City": " Solin"
      },
      {
         "City": " Slavonski Brod"
      },
      {
         "City": " Požega"
      },
      {
         "City": " Sisak"
      },
      {
         "City": " Šibenik"
      },
      {
         "City": " Sesvete"
      },
      {
         "City": " Samobor"
      },
      {
         "City": " Rijeka"
      },
      {
         "City": " Pula"
      },
      {
         "City": " Osijek"
      },
      {
         "City": " Koprivnica"
      },
      {
         "City": " Karlovac"
      },
      {
         "City": " Dubrovnik"
      },
      {
         "City": " Čakovec"
      },
      {
         "City": " Bjelovar"
      },
      {
         "City": " Zagreb- Stenjevec"
      },
      {
         "City": " Zagreb - Centar"
      }
   ],
   "Haiti": [
      {
         "City": " Verrettes"
      },
      {
         "City": " Thomazeau"
      },
      {
         "City": " Saint-Raphaël"
      },
      {
         "City": " Saint-Marc"
      },
      {
         "City": " Port-de-Paix"
      },
      {
         "City": " Port-au-Prince"
      },
      {
         "City": " Tigwav"
      },
      {
         "City": " Pétionville"
      },
      {
         "City": " Miragoâne"
      },
      {
         "City": " Lenbe"
      },
      {
         "City": " Léogâne"
      },
      {
         "City": " Kenscoff"
      },
      {
         "City": " Jérémie"
      },
      {
         "City": " Jacmel"
      },
      {
         "City": " Hinche"
      },
      {
         "City": " Gressier"
      },
      {
         "City": " Grangwav"
      },
      {
         "City": " Gonayiv"
      },
      {
         "City": " Fond Parisien"
      },
      {
         "City": " Désarmes"
      },
      {
         "City": " Delmas 73"
      },
      {
         "City": " Croix des Bouquets"
      },
      {
         "City": " Les Cayes"
      },
      {
         "City": " Carrefour"
      },
      {
         "City": " Okap"
      },
      {
         "City": " Ti Port-de-Paix"
      }
   ],
   "Hungary": [
      {
         "City": " Törökszentmiklós"
      },
      {
         "City": " Tiszaújváros"
      },
      {
         "City": " Szolnok"
      },
      {
         "City": " Szentes"
      },
      {
         "City": " Szeged"
      },
      {
         "City": " Szarvas"
      },
      {
         "City": " Sátoraljaújhely"
      },
      {
         "City": " Püspökladány"
      },
      {
         "City": " Ózd"
      },
      {
         "City": " Orosháza"
      },
      {
         "City": " Nyíregyháza"
      },
      {
         "City": " Miskolc"
      },
      {
         "City": " Mezőtúr"
      },
      {
         "City": " Mezőkövesd"
      },
      {
         "City": " Mátészalka"
      },
      {
         "City": " Makó"
      },
      {
         "City": " Kisvárda"
      },
      {
         "City": " Kazincbarcika"
      },
      {
         "City": " Karcag"
      },
      {
         "City": " Hódmezővásárhely"
      },
      {
         "City": " Hajdúszoboszló"
      },
      {
         "City": " Hajdúnánás"
      },
      {
         "City": " Hajdúböszörmény"
      },
      {
         "City": " Gyula"
      },
      {
         "City": " Gyomaendrőd"
      },
      {
         "City": " Eger"
      },
      {
         "City": " Debrecen"
      },
      {
         "City": " Csongrád"
      },
      {
         "City": " Berettyóújfalu"
      },
      {
         "City": " Békéscsaba"
      },
      {
         "City": " Békés"
      },
      {
         "City": " Balmazújváros"
      },
      {
         "City": " Abony"
      },
      {
         "City": " Zalaegerszeg"
      },
      {
         "City": " Veszprém"
      },
      {
         "City": " Vecsés"
      },
      {
         "City": " Várpalota"
      },
      {
         "City": " Vác"
      },
      {
         "City": " Tatabánya"
      },
      {
         "City": " Tata"
      },
      {
         "City": " Tapolca"
      },
      {
         "City": " Szombathely"
      },
      {
         "City": " Szigetszentmiklós"
      },
      {
         "City": " Szentendre"
      },
      {
         "City": " Szekszárd"
      },
      {
         "City": " Székesfehérvár"
      },
      {
         "City": " Százhalombatta"
      },
      {
         "City": " Sopron"
      },
      {
         "City": " Siófok"
      },
      {
         "City": " Sárvár"
      },
      {
         "City": " Salgótarján"
      },
      {
         "City": " Pécs"
      },
      {
         "City": " Parádsasvár"
      },
      {
         "City": " Pápa"
      },
      {
         "City": " Paks"
      },
      {
         "City": " Oroszlány"
      },
      {
         "City": " Nagykőrös"
      },
      {
         "City": " Nagykanizsa"
      },
      {
         "City": " Mosonmagyaróvár"
      },
      {
         "City": " Monor"
      },
      {
         "City": " Mohács"
      },
      {
         "City": " Komló"
      },
      {
         "City": " Komárom"
      },
      {
         "City": " Kiskunhalas"
      },
      {
         "City": " Kiskunfélegyháza"
      },
      {
         "City": " Kiskőrös"
      },
      {
         "City": " Keszthely"
      },
      {
         "City": " Kecskemét"
      },
      {
         "City": " Kaposvár"
      },
      {
         "City": " Kalocsa"
      },
      {
         "City": " Jászberény"
      },
      {
         "City": " Hatvan"
      },
      {
         "City": " Győr"
      },
      {
         "City": " Gyöngyös"
      },
      {
         "City": " Gyál"
      },
      {
         "City": " Gödöllő"
      },
      {
         "City": " Göd"
      },
      {
         "City": " Fót"
      },
      {
         "City": " Esztergom"
      },
      {
         "City": " Érd"
      },
      {
         "City": " Dunaújváros"
      },
      {
         "City": " Dunakeszi"
      },
      {
         "City": " Dunaharaszti"
      },
      {
         "City": " Dombóvár"
      },
      {
         "City": " Dabas"
      },
      {
         "City": " Cegléd"
      },
      {
         "City": " Budapest"
      },
      {
         "City": " Budaörs"
      },
      {
         "City": " Balassagyarmat"
      },
      {
         "City": " Baja"
      },
      {
         "City": " Ajka"
      },
      {
         "City": " Budapest XII. kerület"
      },
      {
         "City": " Budapest XI. kerület"
      },
      {
         "City": " Budapest IX. kerület"
      },
      {
         "City": " Budapest VIII. kerület"
      },
      {
         "City": " Budapest VII. kerület"
      },
      {
         "City": " Budapest VI. kerület"
      },
      {
         "City": " Budapest XIV. kerület"
      },
      {
         "City": " Budapest XIII. kerület"
      },
      {
         "City": " Budapest IV. kerület"
      },
      {
         "City": " Budapest XV. kerület"
      },
      {
         "City": " Budapest XVI. kerület"
      },
      {
         "City": " Budapest X. kerület"
      },
      {
         "City": " Budapest XIX. kerület"
      },
      {
         "City": " Budapest XVIII. kerület"
      },
      {
         "City": " Budapest XXIII. kerület"
      },
      {
         "City": " Budapest XXII. kerület"
      },
      {
         "City": " Budapest XXI. kerület"
      },
      {
         "City": " Budapest XX. kerület"
      },
      {
         "City": " Budapest XVII. kerület"
      },
      {
         "City": " Budapest III. kerület"
      },
      {
         "City": " Budapest II. kerület"
      },
      {
         "City": " Budapest I. kerület"
      }
   ],
   "Indonesia": [
      {
         "City": " Tongging"
      },
      {
         "City": " Teluk Nibung"
      },
      {
         "City": " Tebingtinggi"
      },
      {
         "City": " Tanjungtiram"
      },
      {
         "City": " Tanjungbalai"
      },
      {
         "City": " Sunggal"
      },
      {
         "City": " Stabat"
      },
      {
         "City": " Singkil"
      },
      {
         "City": " Sigli"
      },
      {
         "City": " Sibolga"
      },
      {
         "City": " Sabang"
      },
      {
         "City": " Reuleuet"
      },
      {
         "City": " Rantauprapat"
      },
      {
         "City": " Percut"
      },
      {
         "City": " Perbaungan"
      },
      {
         "City": " Pematangsiantar"
      },
      {
         "City": " Pangkalan Brandan"
      },
      {
         "City": " Padangsidempuan"
      },
      {
         "City": " Meulaboh"
      },
      {
         "City": " Medan"
      },
      {
         "City": " Lhokseumawe"
      },
      {
         "City": " Langsa"
      },
      {
         "City": " Labuhan Deli"
      },
      {
         "City": " Kisaran"
      },
      {
         "City": " Kabanjahe"
      },
      {
         "City": " Deli Tua"
      },
      {
         "City": " Bireun"
      },
      {
         "City": " Binjai"
      },
      {
         "City": " Berastagi"
      },
      {
         "City": " Belawan"
      },
      {
         "City": " Bandar"
      },
      {
         "City": " Banda Aceh"
      },
      {
         "City": " Yogyakarta"
      },
      {
         "City": " Wonosobo"
      },
      {
         "City": " Wonopringgo"
      },
      {
         "City": " Wongsorejo"
      },
      {
         "City": " Wiradesa"
      },
      {
         "City": " Weru"
      },
      {
         "City": " Weleri"
      },
      {
         "City": " Welahan"
      },
      {
         "City": " Wedi"
      },
      {
         "City": " Watampone"
      },
      {
         "City": " Wangon"
      },
      {
         "City": " Wanaraja"
      },
      {
         "City": " Waingapu"
      },
      {
         "City": " Ungaran"
      },
      {
         "City": " Makassar"
      },
      {
         "City": " Ubud"
      },
      {
         "City": " Tulungagung"
      },
      {
         "City": " Tulangan Utara"
      },
      {
         "City": " Tuban"
      },
      {
         "City": " Tual"
      },
      {
         "City": " Trucuk"
      },
      {
         "City": " Trenggalek"
      },
      {
         "City": " Tondano"
      },
      {
         "City": " Tomohon"
      },
      {
         "City": " Ternate"
      },
      {
         "City": " Terbanggi Besar"
      },
      {
         "City": " Tegal"
      },
      {
         "City": " Tayu"
      },
      {
         "City": " Tasikmalaya"
      },
      {
         "City": " Tarub"
      },
      {
         "City": " Tarakan"
      },
      {
         "City": " Tanjungpinang"
      },
      {
         "City": " Tanjung Pandan"
      },
      {
         "City": " Bandar Lampung"
      },
      {
         "City": " Tanjungagung"
      },
      {
         "City": " Tanggulangin"
      },
      {
         "City": " Tangerang"
      },
      {
         "City": " Tabanan"
      },
      {
         "City": " Surakarta"
      },
      {
         "City": " Surabaya"
      },
      {
         "City": " Sungai Raya"
      },
      {
         "City": " Sungai Penuh"
      },
      {
         "City": " Sungailiat"
      },
      {
         "City": " Sumenep"
      },
      {
         "City": " Sumedang Utara"
      },
      {
         "City": " Sumberpucung"
      },
      {
         "City": " Sumber"
      },
      {
         "City": " Sumbawa Besar"
      },
      {
         "City": " Sokaraja"
      },
      {
         "City": " Sukabumi"
      },
      {
         "City": " Srono"
      },
      {
         "City": " Srandakan"
      },
      {
         "City": " Sragen"
      },
      {
         "City": " Sorong"
      },
      {
         "City": " Soreang"
      },
      {
         "City": " Solok"
      },
      {
         "City": " Soko"
      },
      {
         "City": " Sofifi"
      },
      {
         "City": " Soe"
      },
      {
         "City": " Sleman"
      },
      {
         "City": " Slawi"
      },
      {
         "City": " Situbondo"
      },
      {
         "City": " Sinjai"
      },
      {
         "City": " Singosari"
      },
      {
         "City": " Singojuruh"
      },
      {
         "City": " Singkawang"
      },
      {
         "City": " Sengkang"
      },
      {
         "City": " Singaraja"
      },
      {
         "City": " Singaparna"
      },
      {
         "City": " Simpang"
      },
      {
         "City": " Sijunjung"
      },
      {
         "City": " Sidoarjo"
      },
      {
         "City": " Sidareja"
      },
      {
         "City": " Sewon"
      },
      {
         "City": " Serpong"
      },
      {
         "City": " Serang"
      },
      {
         "City": " Sepatan"
      },
      {
         "City": " Semarang"
      },
      {
         "City": " Selogiri"
      },
      {
         "City": " Sawangan"
      },
      {
         "City": " Sampit"
      },
      {
         "City": " Sampang"
      },
      {
         "City": " Samarinda"
      },
      {
         "City": " Salatiga"
      },
      {
         "City": " Ruteng"
      },
      {
         "City": " Rengasdengklok"
      },
      {
         "City": " Rembangan"
      },
      {
         "City": " Rantepao"
      },
      {
         "City": " Rangkasbitung"
      },
      {
         "City": " Randudongkal"
      },
      {
         "City": " Rajapolah"
      },
      {
         "City": " Purwokerto"
      },
      {
         "City": " Purwodadi"
      },
      {
         "City": " Purwakarta"
      },
      {
         "City": " Purbalingga"
      },
      {
         "City": " Pundong"
      },
      {
         "City": " Probolinggo"
      },
      {
         "City": " Prigen"
      },
      {
         "City": " Praya"
      },
      {
         "City": " Candi Prambanan"
      },
      {
         "City": " Poso"
      },
      {
         "City": " Pontianak"
      },
      {
         "City": " Ponorogo"
      },
      {
         "City": " Polewali"
      },
      {
         "City": " Plumbon"
      },
      {
         "City": " Petarukan"
      },
      {
         "City": " Prabumulih"
      },
      {
         "City": " Pemangkat"
      },
      {
         "City": " Pemalang"
      },
      {
         "City": " Pelabuhanratu"
      },
      {
         "City": " Pekanbaru"
      },
      {
         "City": " Pekalongan"
      },
      {
         "City": " Pecangaan"
      },
      {
         "City": " Payakumbuh"
      },
      {
         "City": " Pati"
      },
      {
         "City": " Pasuruan"
      },
      {
         "City": " Paseh"
      },
      {
         "City": " Pasarkemis"
      },
      {
         "City": " Parung"
      },
      {
         "City": " Pariaman"
      },
      {
         "City": " Parepare"
      },
      {
         "City": " Pare"
      },
      {
         "City": " Panji"
      },
      {
         "City": " Pangkalpinang"
      },
      {
         "City": " Pangkalanbuun"
      },
      {
         "City": " Pandeglang"
      },
      {
         "City": " Pandaan"
      },
      {
         "City": " Pandak"
      },
      {
         "City": " Panarukan"
      },
      {
         "City": " Pamulang"
      },
      {
         "City": " Pameungpeuk"
      },
      {
         "City": " Pamekasan"
      },
      {
         "City": " Pamanukan"
      },
      {
         "City": " Palu"
      },
      {
         "City": " Palopo"
      },
      {
         "City": " Palimanan"
      },
      {
         "City": " Palembang"
      },
      {
         "City": " Palangkaraya"
      },
      {
         "City": " Pakisaji"
      },
      {
         "City": " Pageralam"
      },
      {
         "City": " Padang"
      },
      {
         "City": " Paciran"
      },
      {
         "City": " Ngunut"
      },
      {
         "City": " Ngoro"
      },
      {
         "City": " Ngawi"
      },
      {
         "City": " Nganjuk"
      },
      {
         "City": " Negara"
      },
      {
         "City": " Nabire"
      },
      {
         "City": " Muntok"
      },
      {
         "City": " Muntilan"
      },
      {
         "City": " Muncar"
      },
      {
         "City": " Mranggen"
      },
      {
         "City": " Mojokerto"
      },
      {
         "City": " Mojoagung"
      },
      {
         "City": " Mlonggo"
      },
      {
         "City": " Metro"
      },
      {
         "City": " Mertoyudan"
      },
      {
         "City": " Melati"
      },
      {
         "City": " Maumere"
      },
      {
         "City": " Mataram"
      },
      {
         "City": " Martapura"
      },
      {
         "City": " Margasari"
      },
      {
         "City": " Margahayukencana"
      },
      {
         "City": " Manokwari"
      },
      {
         "City": " Manismata"
      },
      {
         "City": " Manggar"
      },
      {
         "City": " Mendaha"
      },
      {
         "City": " Manado"
      },
      {
         "City": " Malang"
      },
      {
         "City": " Majene"
      },
      {
         "City": " Majenang"
      },
      {
         "City": " Majalengka"
      },
      {
         "City": " Magelang"
      },
      {
         "City": " Madiun"
      },
      {
         "City": " Luwuk"
      },
      {
         "City": " Lumajang"
      },
      {
         "City": " Lubuklinggau"
      },
      {
         "City": " Loa Janan"
      },
      {
         "City": " Lembang"
      },
      {
         "City": " Lebaksiu"
      },
      {
         "City": " Lawang"
      },
      {
         "City": " Lasem"
      },
      {
         "City": " Lamongan"
      },
      {
         "City": " Lahat"
      },
      {
         "City": " Labuan Bajo"
      },
      {
         "City": " Labuan"
      },
      {
         "City": " Kutoarjo"
      },
      {
         "City": " Kuta"
      },
      {
         "City": " Kuningan"
      },
      {
         "City": " Kudus"
      },
      {
         "City": " Kuala Tungkal"
      },
      {
         "City": " Kualakapuas"
      },
      {
         "City": " Kroya"
      },
      {
         "City": " Krian"
      },
      {
         "City": " Kresek"
      },
      {
         "City": " Kraksaan"
      },
      {
         "City": " Kotabumi"
      },
      {
         "City": " Klungkung"
      },
      {
         "City": " Klaten"
      },
      {
         "City": " Klangenan"
      },
      {
         "City": " Kijang"
      },
      {
         "City": " Ketanggungan"
      },
      {
         "City": " Kertosono"
      },
      {
         "City": " Kepanjen"
      },
      {
         "City": " Kendari"
      },
      {
         "City": " Kencong"
      },
      {
         "City": " Kefamenanu"
      },
      {
         "City": " Kedungwuni"
      },
      {
         "City": " Kedungwaru"
      },
      {
         "City": " Kediri"
      },
      {
         "City": " Kebonarun"
      },
      {
         "City": " Kebomas"
      },
      {
         "City": " Kawalu"
      },
      {
         "City": " Katabu"
      },
      {
         "City": " Karangsembung"
      },
      {
         "City": " Karangasem"
      },
      {
         "City": " Karanganom"
      },
      {
         "City": " Karangampel"
      },
      {
         "City": " Kamal"
      },
      {
         "City": " Kalianget"
      },
      {
         "City": " Juwana"
      },
      {
         "City": " Jombang"
      },
      {
         "City": " Jogonalan"
      },
      {
         "City": " Jember"
      },
      {
         "City": " Jekulo"
      },
      {
         "City": " Jatiwangi"
      },
      {
         "City": " Jatiroto"
      },
      {
         "City": " Jatibarang"
      },
      {
         "City": " Jaten"
      },
      {
         "City": " Jambi City"
      },
      {
         "City": " Jakarta"
      },
      {
         "City": " Indramayu"
      },
      {
         "City": " Grogol"
      },
      {
         "City": " Gresik"
      },
      {
         "City": " Gorontalo"
      },
      {
         "City": " Gongdanglegi Kulon"
      },
      {
         "City": " Gombong"
      },
      {
         "City": " Godean"
      },
      {
         "City": " Genteng"
      },
      {
         "City": " Gedangan"
      },
      {
         "City": " Gebog"
      },
      {
         "City": " Gampengrejo"
      },
      {
         "City": " Gambiran Satu"
      },
      {
         "City": " Galesong"
      },
      {
         "City": " Ende"
      },
      {
         "City": " Dumai"
      },
      {
         "City": " Dukuhturi"
      },
      {
         "City": " Driyorejo"
      },
      {
         "City": " Dompu"
      },
      {
         "City": " Diwek"
      },
      {
         "City": " Depok"
      },
      {
         "City": " Depok"
      },
      {
         "City": " Denpasar"
      },
      {
         "City": " Demak"
      },
      {
         "City": " Delanggu"
      },
      {
         "City": " Dampit"
      },
      {
         "City": " Curup"
      },
      {
         "City": " Curug"
      },
      {
         "City": " Comal"
      },
      {
         "City": " Colomadu"
      },
      {
         "City": " Citeureup"
      },
      {
         "City": " Cirebon"
      },
      {
         "City": " Ciputat"
      },
      {
         "City": " Cimahi"
      },
      {
         "City": " Cileunyi"
      },
      {
         "City": " Cileungsir"
      },
      {
         "City": " Cikarang"
      },
      {
         "City": " Cikampek"
      },
      {
         "City": " Cicurug"
      },
      {
         "City": " Cibinong"
      },
      {
         "City": " Ciamis"
      },
      {
         "City": " Cepu"
      },
      {
         "City": " Ceper"
      },
      {
         "City": " Caringin"
      },
      {
         "City": " Ciampea"
      },
      {
         "City": " Bulakamba"
      },
      {
         "City": " Bukittinggi"
      },
      {
         "City": " Buduran"
      },
      {
         "City": " Buaran"
      },
      {
         "City": " Boyolangu"
      },
      {
         "City": " Boyolali"
      },
      {
         "City": " Bontang"
      },
      {
         "City": " Bondowoso"
      },
      {
         "City": " Bojonegoro"
      },
      {
         "City": " Bogor"
      },
      {
         "City": " Blora"
      },
      {
         "City": " Blitar"
      },
      {
         "City": " Bitung"
      },
      {
         "City": " Bima"
      },
      {
         "City": " Besuki"
      },
      {
         "City": " Bengkulu"
      },
      {
         "City": " Bekasi"
      },
      {
         "City": " Baturaja"
      },
      {
         "City": " Baturaden"
      },
      {
         "City": " Batu"
      },
      {
         "City": " Batang"
      },
      {
         "City": " Barabai"
      },
      {
         "City": " Banyuwangi"
      },
      {
         "City": " Banyumas"
      },
      {
         "City": " Bantul"
      },
      {
         "City": " Banjarmasin"
      },
      {
         "City": " Banjaran"
      },
      {
         "City": " Banjar"
      },
      {
         "City": " Banjar"
      },
      {
         "City": " Bangkalan"
      },
      {
         "City": " Bangil"
      },
      {
         "City": " Bandung"
      },
      {
         "City": " Bambanglipuro"
      },
      {
         "City": " Balung"
      },
      {
         "City": " Balikpapan"
      },
      {
         "City": " Balapulang"
      },
      {
         "City": " Balaipungut"
      },
      {
         "City": " Baki"
      },
      {
         "City": " Baekrajan"
      },
      {
         "City": " Babat"
      },
      {
         "City": " Atambua"
      },
      {
         "City": " Astanajapura"
      },
      {
         "City": " Arjawinangun"
      },
      {
         "City": " Amuntai"
      },
      {
         "City": " Ambon"
      },
      {
         "City": " Ambarawa"
      },
      {
         "City": " Amahai"
      },
      {
         "City": " Adiwerna"
      },
      {
         "City": " Padalarang"
      },
      {
         "City": " Ciranjang-hilir"
      },
      {
         "City": " Cikupa"
      },
      {
         "City": " Teluknaga"
      },
      {
         "City": " Wonosari"
      },
      {
         "City": " Gamping Lor"
      },
      {
         "City": " Kasihan"
      },
      {
         "City": " Ngemplak"
      },
      {
         "City": " Kartasura"
      },
      {
         "City": " Gatak"
      },
      {
         "City": " Kupang"
      },
      {
         "City": " Jayapura"
      },
      {
         "City": " Abepura"
      },
      {
         "City": " Seririt"
      },
      {
         "City": " City of Balikpapan"
      },
      {
         "City": " Pekan Bahapal"
      },
      {
         "City": " South Tangerang"
      }
   ],
   "Ireland": [
      {
         "City": " Loch Garman"
      },
      {
         "City": " Waterford"
      },
      {
         "City": " Tralee"
      },
      {
         "City": " Tallaght"
      },
      {
         "City": " Swords"
      },
      {
         "City": " Sligo"
      },
      {
         "City": " Droichead Nua"
      },
      {
         "City": " Navan"
      },
      {
         "City": " Naas"
      },
      {
         "City": " An Muileann gCearr"
      },
      {
         "City": " Malahide"
      },
      {
         "City": " Lucan"
      },
      {
         "City": " Luimneach"
      },
      {
         "City": " Letterkenny"
      },
      {
         "City": " Leixlip"
      },
      {
         "City": " Kilkenny"
      },
      {
         "City": " Gaillimh"
      },
      {
         "City": " Finglas"
      },
      {
         "City": " Ennis"
      },
      {
         "City": " Dún Laoghaire"
      },
      {
         "City": " Dundalk"
      },
      {
         "City": " Dublin"
      },
      {
         "City": " Drogheda"
      },
      {
         "City": " Cork"
      },
      {
         "City": " Cluain Meala"
      },
      {
         "City": " Celbridge"
      },
      {
         "City": " Carlow"
      },
      {
         "City": " Blanchardstown"
      },
      {
         "City": " Balbriggan"
      },
      {
         "City": " Athlone"
      },
      {
         "City": " Sandyford"
      },
      {
         "City": " Donaghmede"
      }
   ],
   "Israel": [
      {
         "City": " Jerusalem"
      },
      {
         "City": " Safed"
      },
      {
         "City": " Yehud"
      },
      {
         "City": " Yavné"
      },
      {
         "City": " Yafo"
      },
      {
         "City": " Umm el Faḥm"
      },
      {
         "City": " Tirat Karmel"
      },
      {
         "City": " Tiberias"
      },
      {
         "City": " Tel Aviv"
      },
      {
         "City": " maalot Tarshīhā"
      },
      {
         "City": " Tamra"
      },
      {
         "City": " Sederot"
      },
      {
         "City": " Sakhnīn"
      },
      {
         "City": " Rosh Ha‘Ayin"
      },
      {
         "City": " Rishon LeẔiyyon"
      },
      {
         "City": " Ramla"
      },
      {
         "City": " Ramat HaSharon"
      },
      {
         "City": " Ramat Gan"
      },
      {
         "City": " Ra'anana"
      },
      {
         "City": " Qiryat Yam"
      },
      {
         "City": " Qiryat Shemona"
      },
      {
         "City": " Qiryat Moẕqin"
      },
      {
         "City": " Qiryat Gat"
      },
      {
         "City": " Qiryat Bialik"
      },
      {
         "City": " Qiryat Ata"
      },
      {
         "City": " Qalansuwa"
      },
      {
         "City": " Petaẖ Tiqwa"
      },
      {
         "City": " Or Yehuda"
      },
      {
         "City": " Ofaqim"
      },
      {
         "City": " Netivot"
      },
      {
         "City": " Netanya"
      },
      {
         "City": " Ness Ziona"
      },
      {
         "City": " Nesher"
      },
      {
         "City": " Nazareth"
      },
      {
         "City": " Nahariya"
      },
      {
         "City": " Migdal Ha‘Emeq"
      },
      {
         "City": " Mevo Betar"
      },
      {
         "City": " Maghār"
      },
      {
         "City": " Lod"
      },
      {
         "City": " Kfar Saba"
      },
      {
         "City": " Karmi’el"
      },
      {
         "City": " Kafr Qāsim"
      },
      {
         "City": " Kafr Mandā"
      },
      {
         "City": " Kafr Kannā"
      },
      {
         "City": " Judeida Makr"
      },
      {
         "City": " H̱olon"
      },
      {
         "City": " Hod HaSharon"
      },
      {
         "City": " Herzliyya"
      },
      {
         "City": " Haifa"
      },
      {
         "City": " H̱adera"
      },
      {
         "City": " Giv‘at Shemu’él"
      },
      {
         "City": " Giv‘atayim"
      },
      {
         "City": " Tirah"
      },
      {
         "City": " Eṭ Ṭaiyiba"
      },
      {
         "City": " Er Reina"
      },
      {
         "City": " Eilat"
      },
      {
         "City": " Dimona"
      },
      {
         "City": " Dāliyat el Karmil"
      },
      {
         "City": " Bet Shemesh"
      },
      {
         "City": " Bet She’an"
      },
      {
         "City": " Bené Beraq"
      },
      {
         "City": " Beersheba"
      },
      {
         "City": " Bat Yam"
      },
      {
         "City": " Ashqelon"
      },
      {
         "City": " Ashdod"
      },
      {
         "City": " ‘Arad"
      },
      {
         "City": " ‘Akko"
      },
      {
         "City": " ‘Afula ‘Illit"
      },
      {
         "City": " Modiin"
      },
      {
         "City": " West Jerusalem"
      },
      {
         "City": " Modiin Ilit"
      },
      {
         "City": " Ariel"
      }
   ],
   "Isle of Man": [
      {
         "City": " Douglas"
      }
   ],
   "India": [
      {
         "City": " Pūnch"
      },
      {
         "City": " Keelakarai"
      },
      {
         "City": " Zunheboto"
      },
      {
         "City": " Zamānia"
      },
      {
         "City": " Zaidpur"
      },
      {
         "City": " Zahirābād"
      },
      {
         "City": " Yeola"
      },
      {
         "City": " Yellāpur"
      },
      {
         "City": " Yellandu"
      },
      {
         "City": " Yelahanka"
      },
      {
         "City": " Yavatmāl"
      },
      {
         "City": " Yāval"
      },
      {
         "City": " Yanam"
      },
      {
         "City": " Yamunānagar"
      },
      {
         "City": " Yādgīr"
      },
      {
         "City": " Wokha"
      },
      {
         "City": " Wer"
      },
      {
         "City": " Wellington"
      },
      {
         "City": " Wazīrganj"
      },
      {
         "City": " Wāshīm"
      },
      {
         "City": " Warud"
      },
      {
         "City": " Warora"
      },
      {
         "City": " Wāris Alīganj"
      },
      {
         "City": " Wardha"
      },
      {
         "City": " Wārāseonī"
      },
      {
         "City": " Warangal"
      },
      {
         "City": " Wanparti"
      },
      {
         "City": " Wānkāner"
      },
      {
         "City": " Wani"
      },
      {
         "City": " Walajapet"
      },
      {
         "City": " Wai"
      },
      {
         "City": " Wādi"
      },
      {
         "City": " Vyāra"
      },
      {
         "City": " Vuyyūru"
      },
      {
         "City": " Vrindāvan"
      },
      {
         "City": " Vriddhāchalam"
      },
      {
         "City": " Vizianagaram"
      },
      {
         "City": " Vite"
      },
      {
         "City": " Visnagar"
      },
      {
         "City": " Visakhapatnam"
      },
      {
         "City": " Vīsāvadar"
      },
      {
         "City": " Virudunagar"
      },
      {
         "City": " Viravanallūr"
      },
      {
         "City": " Vīrarājendrapet"
      },
      {
         "City": " Virār"
      },
      {
         "City": " Vinukonda"
      },
      {
         "City": " Villupuram"
      },
      {
         "City": " Vikārābād"
      },
      {
         "City": " Vijayawada"
      },
      {
         "City": " Vijāpur"
      },
      {
         "City": " Vidisha"
      },
      {
         "City": " Vettūr"
      },
      {
         "City": " Vettaikkaranpudur"
      },
      {
         "City": " Vetapālem"
      },
      {
         "City": " Verāval"
      },
      {
         "City": " Vepagunta"
      },
      {
         "City": " Venkatagiri"
      },
      {
         "City": " Vemalwāda"
      },
      {
         "City": " Velur"
      },
      {
         "City": " Vellore"
      },
      {
         "City": " Vejalpur"
      },
      {
         "City": " Vedaraniyam"
      },
      {
         "City": " Vayalār"
      },
      {
         "City": " Vattalkundu"
      },
      {
         "City": " Vāsudevanallūr"
      },
      {
         "City": " Vasind"
      },
      {
         "City": " Vāsco Da Gāma"
      },
      {
         "City": " Vasa"
      },
      {
         "City": " Varkala"
      },
      {
         "City": " Varangaon"
      },
      {
         "City": " Varanasi"
      },
      {
         "City": " Vaniyambadi"
      },
      {
         "City": " Vandavāsi"
      },
      {
         "City": " Valsād"
      },
      {
         "City": " Valparai"
      },
      {
         "City": " Vallabh Vidyanagar"
      },
      {
         "City": " Valabhīpur"
      },
      {
         "City": " Vaikam"
      },
      {
         "City": " Vaijāpur"
      },
      {
         "City": " Vadodara"
      },
      {
         "City": " Vadnagar"
      },
      {
         "City": " Vadlapūdi"
      },
      {
         "City": " Vādippatti"
      },
      {
         "City": " Vadamadurai"
      },
      {
         "City": " Vadakku Valliyūr"
      },
      {
         "City": " Vāda"
      },
      {
         "City": " Uttiramerūr"
      },
      {
         "City": " Uttarkāshi"
      },
      {
         "City": " Uttamapālaiyam"
      },
      {
         "City": " Utraula"
      },
      {
         "City": " Usilampatti"
      },
      {
         "City": " Usehat"
      },
      {
         "City": " Uravakonda"
      },
      {
         "City": " Uran"
      },
      {
         "City": " Upleta"
      },
      {
         "City": " Uppal Kalan"
      },
      {
         "City": " Unnāo"
      },
      {
         "City": " Unjha"
      },
      {
         "City": " Unhel"
      },
      {
         "City": " Una"
      },
      {
         "City": " Una"
      },
      {
         "City": " Ūn"
      },
      {
         "City": " Un"
      },
      {
         "City": " Umreth"
      },
      {
         "City": " Umred"
      },
      {
         "City": " Umarkot"
      },
      {
         "City": " Umarkhed"
      },
      {
         "City": " Umaria"
      },
      {
         "City": " Umarga"
      },
      {
         "City": " Ullal"
      },
      {
         "City": " Ulhasnagar"
      },
      {
         "City": " Ujjain"
      },
      {
         "City": " Ujhāni"
      },
      {
         "City": " Udumalaippettai"
      },
      {
         "City": " Udipi"
      },
      {
         "City": " Udhampur"
      },
      {
         "City": " Udgīr"
      },
      {
         "City": " Udankudi"
      },
      {
         "City": " Udalguri"
      },
      {
         "City": " Udaipura"
      },
      {
         "City": " Udaipur"
      },
      {
         "City": " Udaipur"
      },
      {
         "City": " Udaipur"
      },
      {
         "City": " Ooty"
      },
      {
         "City": " Bara Uchāna"
      },
      {
         "City": " Turaiyūr"
      },
      {
         "City": " Tura"
      },
      {
         "City": " Tuni"
      },
      {
         "City": " Tūndla"
      },
      {
         "City": " Tumsar"
      },
      {
         "City": " Tumkūr"
      },
      {
         "City": " Tulsīpur"
      },
      {
         "City": " Tuljāpur"
      },
      {
         "City": " Tufānganj"
      },
      {
         "City": " Tuensang"
      },
      {
         "City": " Thiruvananthapuram"
      },
      {
         "City": " Trichūr"
      },
      {
         "City": " Tonk"
      },
      {
         "City": " Tondi"
      },
      {
         "City": " Tohāna"
      },
      {
         "City": " Todaraisingh"
      },
      {
         "City": " Todabhim"
      },
      {
         "City": " Titlāgarh"
      },
      {
         "City": " Titāgarh"
      },
      {
         "City": " Tisaiyanvilai"
      },
      {
         "City": " Tiruvottiyūr"
      },
      {
         "City": " Cheyyar"
      },
      {
         "City": " Tiruvannāmalai"
      },
      {
         "City": " Tiruvallur"
      },
      {
         "City": " Tiruvalla"
      },
      {
         "City": " Thiruthani"
      },
      {
         "City": " Tiruttangal"
      },
      {
         "City": " Tirur"
      },
      {
         "City": " Tiruppuvanam"
      },
      {
         "City": " Tiruppur"
      },
      {
         "City": " Tirupparangunram"
      },
      {
         "City": " Tirupati"
      },
      {
         "City": " Tirunelveli"
      },
      {
         "City": " Tirumala"
      },
      {
         "City": " Tirukkoyilur"
      },
      {
         "City": " Tiruchengode"
      },
      {
         "City": " Tiruchirappalli"
      },
      {
         "City": " Tiruchchendur"
      },
      {
         "City": " Tīrthahalli"
      },
      {
         "City": " Tiptūr"
      },
      {
         "City": " Tinsukia"
      },
      {
         "City": " Tinnanūr"
      },
      {
         "City": " Tindivanam"
      },
      {
         "City": " Tilhar"
      },
      {
         "City": " Tīkamgarh"
      },
      {
         "City": " Tijāra"
      },
      {
         "City": " Thoubāl"
      },
      {
         "City": " Thiruvarur"
      },
      {
         "City": " Thāsra"
      },
      {
         "City": " Tharād"
      },
      {
         "City": " Thanjāvūr"
      },
      {
         "City": " Thānesar"
      },
      {
         "City": " Thāne"
      },
      {
         "City": " Thāna Bhawan"
      },
      {
         "City": " Thān"
      },
      {
         "City": " Thākurganj"
      },
      {
         "City": " Thakurdwara"
      },
      {
         "City": " Tezpur"
      },
      {
         "City": " Terdāl"
      },
      {
         "City": " Teonthar"
      },
      {
         "City": " Thenkasi"
      },
      {
         "City": " Teni"
      },
      {
         "City": " Tellicherry"
      },
      {
         "City": " Telhāra"
      },
      {
         "City": " Tekkali"
      },
      {
         "City": " Tekkalakote"
      },
      {
         "City": " Tekāri"
      },
      {
         "City": " Tehri"
      },
      {
         "City": " Teghra"
      },
      {
         "City": " Tāsgaon"
      },
      {
         "City": " Tarn Tāran"
      },
      {
         "City": " Tarikere"
      },
      {
         "City": " Tharangambadi"
      },
      {
         "City": " Tārānagar"
      },
      {
         "City": " Tarāna"
      },
      {
         "City": " Tāramangalam"
      },
      {
         "City": " Tarakeswar"
      },
      {
         "City": " Tāoru"
      },
      {
         "City": " Tanuku"
      },
      {
         "City": " Tāndūr"
      },
      {
         "City": " Tānda"
      },
      {
         "City": " Tāndā"
      },
      {
         "City": " Tanakpur"
      },
      {
         "City": " Tamlūk"
      },
      {
         "City": " Talwāra"
      },
      {
         "City": " Talwandi Bhai"
      },
      {
         "City": " Taloda"
      },
      {
         "City": " Talipparamba"
      },
      {
         "City": " Tālīkota"
      },
      {
         "City": " Taleigao"
      },
      {
         "City": " Talegaon Dābhāde"
      },
      {
         "City": " Tālcher"
      },
      {
         "City": " Talāja"
      },
      {
         "City": " Tāki"
      },
      {
         "City": " Takhatpur"
      },
      {
         "City": " Takhatgarh"
      },
      {
         "City": " Tājpur"
      },
      {
         "City": " Tādpatri"
      },
      {
         "City": " Tādepallegūdem"
      },
      {
         "City": " Tādepalle"
      },
      {
         "City": " Suriāpet"
      },
      {
         "City": " Suriānwān"
      },
      {
         "City": " Surendranagar"
      },
      {
         "City": " Sūratgarh"
      },
      {
         "City": " Sūrat"
      },
      {
         "City": " Sūrandai"
      },
      {
         "City": " Sūrajgarh"
      },
      {
         "City": " Supaul"
      },
      {
         "City": " Sunel"
      },
      {
         "City": " Sundarnagar"
      },
      {
         "City": " Sundargarh"
      },
      {
         "City": " Sunām"
      },
      {
         "City": " Sulya"
      },
      {
         "City": " Sūlūru"
      },
      {
         "City": " Sulur"
      },
      {
         "City": " Sultanpur"
      },
      {
         "City": " Sultānpur"
      },
      {
         "City": " Suket"
      },
      {
         "City": " Sūjāngarh"
      },
      {
         "City": " Suār"
      },
      {
         "City": " Srivilliputhur"
      },
      {
         "City": " Srīvardhan"
      },
      {
         "City": " Srivaikuntam"
      },
      {
         "City": " Srīsailain"
      },
      {
         "City": " Srīrāmnagar"
      },
      {
         "City": " Srīperumbūdūr"
      },
      {
         "City": " Srīnivāspur"
      },
      {
         "City": " Srinagar"
      },
      {
         "City": " Srīnagar"
      },
      {
         "City": " Sri Mādhopur"
      },
      {
         "City": " Karanpur"
      },
      {
         "City": " Chicacole"
      },
      {
         "City": " Sri Dūngargarh"
      },
      {
         "City": " Soygaon"
      },
      {
         "City": " Soron"
      },
      {
         "City": " Soro"
      },
      {
         "City": " Sorada"
      },
      {
         "City": " Sopur"
      },
      {
         "City": " Sonīpat"
      },
      {
         "City": " Songadh"
      },
      {
         "City": " Sonepur"
      },
      {
         "City": " Sonāri"
      },
      {
         "City": " Sonāmukhi"
      },
      {
         "City": " Sompeta"
      },
      {
         "City": " Someshwar"
      },
      {
         "City": " Solan"
      },
      {
         "City": " Sojītra"
      },
      {
         "City": " Sojat"
      },
      {
         "City": " Sohna"
      },
      {
         "City": " Sohāgpur"
      },
      {
         "City": " Siwāna"
      },
      {
         "City": " Siwān"
      },
      {
         "City": " Sivakasi"
      },
      {
         "City": " Sivagiri"
      },
      {
         "City": " Sivagiri"
      },
      {
         "City": " Sivaganga"
      },
      {
         "City": " Siuri"
      },
      {
         "City": " Sitārganj"
      },
      {
         "City": " Sītāpur"
      },
      {
         "City": " Sītāmarhi"
      },
      {
         "City": " Siswā Bāzār"
      },
      {
         "City": " Sisauli"
      },
      {
         "City": " Sirūr"
      },
      {
         "City": " Sirumugai"
      },
      {
         "City": " Siruguppa"
      },
      {
         "City": " Sirsilla"
      },
      {
         "City": " Sirsi"
      },
      {
         "City": " Sirsi"
      },
      {
         "City": " Sirsāganj"
      },
      {
         "City": " Sirsa"
      },
      {
         "City": " Sironj"
      },
      {
         "City": " Sirohi"
      },
      {
         "City": " Sīrkāzhi"
      },
      {
         "City": " Sirhind"
      },
      {
         "City": " Sīra"
      },
      {
         "City": " Sinnar"
      },
      {
         "City": " Singur"
      },
      {
         "City": " Singarāyakonda"
      },
      {
         "City": " Singānallūr"
      },
      {
         "City": " Sindhnūr"
      },
      {
         "City": " Sindgi"
      },
      {
         "City": " Shimla"
      },
      {
         "City": " Simdega"
      },
      {
         "City": " Silvassa"
      },
      {
         "City": " Sillod"
      },
      {
         "City": " Silchar"
      },
      {
         "City": " Silao"
      },
      {
         "City": " Sīkar"
      },
      {
         "City": " Sikandra Rao"
      },
      {
         "City": " Sikandarpur"
      },
      {
         "City": " Sikandarābād"
      },
      {
         "City": " Sikka"
      },
      {
         "City": " Sijua"
      },
      {
         "City": " Sihorā"
      },
      {
         "City": " Sihor"
      },
      {
         "City": " Sidlaghatta"
      },
      {
         "City": " Sidhi"
      },
      {
         "City": " Sidhaulī"
      },
      {
         "City": " Siddipet"
      },
      {
         "City": " Siddhapur"
      },
      {
         "City": " Sibsāgar"
      },
      {
         "City": " Shyamnagar"
      },
      {
         "City": " Shujālpur"
      },
      {
         "City": " Shrīrangapattana"
      },
      {
         "City": " Shrīrāmpur"
      },
      {
         "City": " Shrīgonda"
      },
      {
         "City": " Shorāpur"
      },
      {
         "City": " Shoranūr"
      },
      {
         "City": " Sholinghur"
      },
      {
         "City": " Solāpur"
      },
      {
         "City": " Shivpuri"
      },
      {
         "City": " Shīshgarh"
      },
      {
         "City": " Shirpur"
      },
      {
         "City": " Shirhatti"
      },
      {
         "City": " Shirdi"
      },
      {
         "City": " Shimoga"
      },
      {
         "City": " Shillong"
      },
      {
         "City": " Shiliguri"
      },
      {
         "City": " Shikohābād"
      },
      {
         "City": " Shikārpūr"
      },
      {
         "City": " Shikārpur"
      },
      {
         "City": " Shiggaon"
      },
      {
         "City": " Shertallai"
      },
      {
         "City": " Sherkot"
      },
      {
         "City": " Sherghāti"
      },
      {
         "City": " Sheopur"
      },
      {
         "City": " Sheohar"
      },
      {
         "City": " Sheoganj"
      },
      {
         "City": " Shegaon"
      },
      {
         "City": " Shāntipur"
      },
      {
         "City": " Shamsābād"
      },
      {
         "City": " Shamsābād"
      },
      {
         "City": " Shāmli"
      },
      {
         "City": " Shāmgarh"
      },
      {
         "City": " Shājāpur"
      },
      {
         "City": " Sheikhpura"
      },
      {
         "City": " Shāhpura"
      },
      {
         "City": " Shāhpura"
      },
      {
         "City": " Shāhpur"
      },
      {
         "City": " Shāhpur"
      },
      {
         "City": " Shāhpur"
      },
      {
         "City": " Shāhpur"
      },
      {
         "City": " Shāhjānpur"
      },
      {
         "City": " Shāhi"
      },
      {
         "City": " Shāhganj"
      },
      {
         "City": " Shahdol"
      },
      {
         "City": " Shāhāda"
      },
      {
         "City": " Shāhābād"
      },
      {
         "City": " Shāhābād"
      },
      {
         "City": " Shāhābād"
      },
      {
         "City": " Shāhābād"
      },
      {
         "City": " Serchhīp"
      },
      {
         "City": " Seram"
      },
      {
         "City": " Seoni Mālwa"
      },
      {
         "City": " Seoni"
      },
      {
         "City": " Seondha"
      },
      {
         "City": " Seohāra"
      },
      {
         "City": " Sendhwa"
      },
      {
         "City": " Sehore"
      },
      {
         "City": " Secunderabad"
      },
      {
         "City": " Sāyla"
      },
      {
         "City": " Sawāi Mādhopur"
      },
      {
         "City": " Sāvda"
      },
      {
         "City": " Savanūr"
      },
      {
         "City": " Sāvantvādi"
      },
      {
         "City": " Sausar"
      },
      {
         "City": " Saundatti"
      },
      {
         "City": " Sathyamangalam"
      },
      {
         "City": " Sattur"
      },
      {
         "City": " Sattenapalle"
      },
      {
         "City": " Satna"
      },
      {
         "City": " Sātāra"
      },
      {
         "City": " Satānā"
      },
      {
         "City": " Sāsvad"
      },
      {
         "City": " Sarwār"
      },
      {
         "City": " Sarkhej"
      },
      {
         "City": " Sardulgarh"
      },
      {
         "City": " Sardhana"
      },
      {
         "City": " Sardārshahr"
      },
      {
         "City": " Sarauli"
      },
      {
         "City": " Sārangpur"
      },
      {
         "City": " Saraipali"
      },
      {
         "City": " Sarāi Mīr"
      },
      {
         "City": " Sarāi Ākil"
      },
      {
         "City": " Saoner"
      },
      {
         "City": " Sānkrāil"
      },
      {
         "City": " Sankeshwar"
      },
      {
         "City": " Sangrūr"
      },
      {
         "City": " Sāngola"
      },
      {
         "City": " Sangod"
      },
      {
         "City": " Sāngli"
      },
      {
         "City": " Sangariā"
      },
      {
         "City": " Sangāreddi"
      },
      {
         "City": " Sangamner"
      },
      {
         "City": " Sandūr"
      },
      {
         "City": " Sandīla"
      },
      {
         "City": " Sāndi"
      },
      {
         "City": " Sancoale"
      },
      {
         "City": " Sānchor"
      },
      {
         "City": " Sanāwad"
      },
      {
         "City": " Sanaur"
      },
      {
         "City": " Sānand"
      },
      {
         "City": " Samthar"
      },
      {
         "City": " Samrāla"
      },
      {
         "City": " Samdari"
      },
      {
         "City": " Sāmbhar"
      },
      {
         "City": " Sambhal"
      },
      {
         "City": " Sambalpur"
      },
      {
         "City": " Sāmba"
      },
      {
         "City": " Samāstipur"
      },
      {
         "City": " Sāmalkot"
      },
      {
         "City": " Samālkha"
      },
      {
         "City": " Sālūr"
      },
      {
         "City": " Sālūmbar"
      },
      {
         "City": " Salem"
      },
      {
         "City": " Salāya"
      },
      {
         "City": " Saktī"
      },
      {
         "City": " Sakleshpur"
      },
      {
         "City": " Saint Thomas Mount"
      },
      {
         "City": " Sainthia"
      },
      {
         "City": " Selu"
      },
      {
         "City": " Saiha"
      },
      {
         "City": " Saidpur"
      },
      {
         "City": " Sāhibganj"
      },
      {
         "City": " Sahāwar"
      },
      {
         "City": " Sahaswān"
      },
      {
         "City": " Sahaspur"
      },
      {
         "City": " Saharsa"
      },
      {
         "City": " Sahāranpur"
      },
      {
         "City": " Sagauli"
      },
      {
         "City": " Saugor"
      },
      {
         "City": " Sāgar"
      },
      {
         "City": " Safīpur"
      },
      {
         "City": " Safidon"
      },
      {
         "City": " Sādri"
      },
      {
         "City": " Sadāseopet"
      },
      {
         "City": " Sadalgi"
      },
      {
         "City": " Sadābād"
      },
      {
         "City": " Sabalgarh"
      },
      {
         "City": " Rusera"
      },
      {
         "City": " Rura"
      },
      {
         "City": " Ropar"
      },
      {
         "City": " Rūdarpur"
      },
      {
         "City": " Roorkee"
      },
      {
         "City": " Ron"
      },
      {
         "City": " Rohtak"
      },
      {
         "City": " Roha"
      },
      {
         "City": " Robertsonpet"
      },
      {
         "City": " Robertsganj"
      },
      {
         "City": " Risod"
      },
      {
         "City": " Rishra"
      },
      {
         "City": " Rishīkesh"
      },
      {
         "City": " Rīngas"
      },
      {
         "City": " Richha"
      },
      {
         "City": " Rewāri"
      },
      {
         "City": " Rewa"
      },
      {
         "City": " Revelganj"
      },
      {
         "City": " Repalle"
      },
      {
         "City": " Reoti"
      },
      {
         "City": " Renukūt"
      },
      {
         "City": " Renigunta"
      },
      {
         "City": " Remuna"
      },
      {
         "City": " Rehli"
      },
      {
         "City": " Rāzām"
      },
      {
         "City": " Rāybāg"
      },
      {
         "City": " Rāyadrug"
      },
      {
         "City": " Rāyachoti"
      },
      {
         "City": " Rāya"
      },
      {
         "City": " Raxaul"
      },
      {
         "City": " Rāwatsār"
      },
      {
         "City": " Rāwatbhāta"
      },
      {
         "City": " Rāver"
      },
      {
         "City": " Ratnagiri"
      },
      {
         "City": " Ratlām"
      },
      {
         "City": " Ratia"
      },
      {
         "City": " Rāth"
      },
      {
         "City": " Ratanpur"
      },
      {
         "City": " Ratangarh"
      },
      {
         "City": " Rasrā"
      },
      {
         "City": " Rasipuram"
      },
      {
         "City": " Rāpar"
      },
      {
         "City": " Rānīpur"
      },
      {
         "City": " Rānikhet"
      },
      {
         "City": " Rānīganj"
      },
      {
         "City": " Rānībennur"
      },
      {
         "City": " Rānia"
      },
      {
         "City": " Rangia"
      },
      {
         "City": " Rangāpāra"
      },
      {
         "City": " Ranchi"
      },
      {
         "City": " Rānāvāv"
      },
      {
         "City": " Rānāghāt"
      },
      {
         "City": " Rāmtek"
      },
      {
         "City": " Rampur Hat"
      },
      {
         "City": " Rāmpura"
      },
      {
         "City": " Rāmpura"
      },
      {
         "City": " Rāmpur"
      },
      {
         "City": " Rāmpur"
      },
      {
         "City": " Rāmnagar"
      },
      {
         "City": " Rāmnagar"
      },
      {
         "City": " Rāmnagar"
      },
      {
         "City": " Rāmjībanpur"
      },
      {
         "City": " Rāmgundam"
      },
      {
         "City": " Rāmgarh"
      },
      {
         "City": " Rāmgarh"
      },
      {
         "City": " Rāmganj Mandi"
      },
      {
         "City": " Rameswaram"
      },
      {
         "City": " Rāmāpuram"
      },
      {
         "City": " Ramanathapuram"
      },
      {
         "City": " Rāmanagaram"
      },
      {
         "City": " Rāmachandrapuram"
      },
      {
         "City": " Rājūra"
      },
      {
         "City": " Rājula"
      },
      {
         "City": " Rājsamand"
      },
      {
         "City": " Rājpura"
      },
      {
         "City": " Rajpur"
      },
      {
         "City": " Rajpur"
      },
      {
         "City": " Rājpīpla"
      },
      {
         "City": " Rāj-Nāndgaon"
      },
      {
         "City": " Rājmahal"
      },
      {
         "City": " Rājkot"
      },
      {
         "City": " Rājgurunagar"
      },
      {
         "City": " Rājgīr"
      },
      {
         "City": " Rājgarh"
      },
      {
         "City": " Rājgarh"
      },
      {
         "City": " Rājgarh"
      },
      {
         "City": " Rājgarh"
      },
      {
         "City": " Rajaori"
      },
      {
         "City": " Rajapalaiyam"
      },
      {
         "City": " Rājampet"
      },
      {
         "City": " Rājaldesar"
      },
      {
         "City": " Rājākhera"
      },
      {
         "City": " Rājahmundry"
      },
      {
         "City": " Rāisinghnagar"
      },
      {
         "City": " Raisen"
      },
      {
         "City": " Rāipur"
      },
      {
         "City": " Raipur"
      },
      {
         "City": " Raipur"
      },
      {
         "City": " Rāikot"
      },
      {
         "City": " Raigarh"
      },
      {
         "City": " Rāiganj"
      },
      {
         "City": " Rāichūr"
      },
      {
         "City": " Rāhuri"
      },
      {
         "City": " Rahimatpur"
      },
      {
         "City": " Rāhatgarh"
      },
      {
         "City": " Raghunathpur"
      },
      {
         "City": " Rāghogarh"
      },
      {
         "City": " Rafiganj"
      },
      {
         "City": " Raebareli"
      },
      {
         "City": " Rādhanpur"
      },
      {
         "City": " Rabkavi"
      },
      {
         "City": " Kollam"
      },
      {
         "City": " Kasba"
      },
      {
         "City": " Qādiān"
      },
      {
         "City": " Puttūr"
      },
      {
         "City": " Puttūr"
      },
      {
         "City": " Pushkar"
      },
      {
         "City": " Pusad"
      },
      {
         "City": " Purwā"
      },
      {
         "City": " Puruliya"
      },
      {
         "City": " Purnia"
      },
      {
         "City": " Pūrna"
      },
      {
         "City": " Puri"
      },
      {
         "City": " Pūranpur"
      },
      {
         "City": " Pupri"
      },
      {
         "City": " Punjai Puliyampatti"
      },
      {
         "City": " Punganūru"
      },
      {
         "City": " Pune"
      },
      {
         "City": " Pūndri"
      },
      {
         "City": " Punāsa"
      },
      {
         "City": " Punalūr"
      },
      {
         "City": " Pūnāhāna"
      },
      {
         "City": " Pulwama"
      },
      {
         "City": " Puliyangudi"
      },
      {
         "City": " Pulivendla"
      },
      {
         "City": " Pulgaon"
      },
      {
         "City": " Pukhrāyān"
      },
      {
         "City": " Pudukkottai"
      },
      {
         "City": " Proddatūr"
      },
      {
         "City": " Pratāpgarh"
      },
      {
         "City": " Port Blair"
      },
      {
         "City": " Porsa"
      },
      {
         "City": " Porbandar"
      },
      {
         "City": " Poonamalle"
      },
      {
         "City": " Ponnūru"
      },
      {
         "City": " Ponneri"
      },
      {
         "City": " Ponnāni"
      },
      {
         "City": " Puducherry"
      },
      {
         "City": " Ponda"
      },
      {
         "City": " Polūr"
      },
      {
         "City": " Pollachi"
      },
      {
         "City": " Polavaram"
      },
      {
         "City": " Polasara"
      },
      {
         "City": " Pokaran"
      },
      {
         "City": " Pithorāgarh"
      },
      {
         "City": " Pithāpuram"
      },
      {
         "City": " Piro"
      },
      {
         "City": " Piriyāpatna"
      },
      {
         "City": " Piravam"
      },
      {
         "City": " Pīpri"
      },
      {
         "City": " Pipraich"
      },
      {
         "City": " Pipili"
      },
      {
         "City": " Pīpār"
      },
      {
         "City": " Pinjaur"
      },
      {
         "City": " Pindwāra"
      },
      {
         "City": " Pināhat"
      },
      {
         "City": " Pimpri"
      },
      {
         "City": " Pilkhua"
      },
      {
         "City": " Pīlibhīt"
      },
      {
         "City": " Pilibangan"
      },
      {
         "City": " Pilāni"
      },
      {
         "City": " Pihānī"
      },
      {
         "City": " Phulpur"
      },
      {
         "City": " Phulera"
      },
      {
         "City": " Phulabāni"
      },
      {
         "City": " Phirangipuram"
      },
      {
         "City": " Phillaur"
      },
      {
         "City": " Phek"
      },
      {
         "City": " Phaphūnd"
      },
      {
         "City": " Phaltan"
      },
      {
         "City": " Phalodi"
      },
      {
         "City": " Phalauda"
      },
      {
         "City": " Phagwāra"
      },
      {
         "City": " Petlād"
      },
      {
         "City": " Perundurai"
      },
      {
         "City": " Perumpāvūr"
      },
      {
         "City": " Periyanayakkanpalaiyam"
      },
      {
         "City": " Periyakulam"
      },
      {
         "City": " Peravurani"
      },
      {
         "City": " Peranāmpattu"
      },
      {
         "City": " Perambalur"
      },
      {
         "City": " Penukonda"
      },
      {
         "City": " Penugonda"
      },
      {
         "City": " Pennāgaram"
      },
      {
         "City": " Pennādam"
      },
      {
         "City": " Pen"
      },
      {
         "City": " Pehowa"
      },
      {
         "City": " Peddāpuram"
      },
      {
         "City": " Peddapalli"
      },
      {
         "City": " Pedana"
      },
      {
         "City": " Payyannūr"
      },
      {
         "City": " Pawāyan"
      },
      {
         "City": " Pāvugada"
      },
      {
         "City": " Pauri"
      },
      {
         "City": " Pawni"
      },
      {
         "City": " Pātūr"
      },
      {
         "City": " Pattukkottai"
      },
      {
         "City": " Patti"
      },
      {
         "City": " Patnāgarh"
      },
      {
         "City": " Patna"
      },
      {
         "City": " Patiāla"
      },
      {
         "City": " Pāthri"
      },
      {
         "City": " Patharia"
      },
      {
         "City": " Pāthardih"
      },
      {
         "City": " Pāthardi"
      },
      {
         "City": " Pathānkot"
      },
      {
         "City": " Pathanāmthitta"
      },
      {
         "City": " Pathalgaon"
      },
      {
         "City": " Pataudi"
      },
      {
         "City": " Patancheru"
      },
      {
         "City": " Pātan"
      },
      {
         "City": " Patāmundai"
      },
      {
         "City": " Pāsighāt"
      },
      {
         "City": " Pasān"
      },
      {
         "City": " Parvatsar"
      },
      {
         "City": " Pārvatipuram"
      },
      {
         "City": " Partūr"
      },
      {
         "City": " Parola"
      },
      {
         "City": " Parli Vaijnāth"
      },
      {
         "City": " Parlākimidi"
      },
      {
         "City": " Pariyāpuram"
      },
      {
         "City": " Parīchhatgarh"
      },
      {
         "City": " Pārdi"
      },
      {
         "City": " Parbhani"
      },
      {
         "City": " Paravūr"
      },
      {
         "City": " Parāsia"
      },
      {
         "City": " Paramagudi"
      },
      {
         "City": " Parādīp Garh"
      },
      {
         "City": " Pāppinisshēri"
      },
      {
         "City": " Papanasam"
      },
      {
         "City": " Pāonta Sāhib"
      },
      {
         "City": " Panvel"
      },
      {
         "City": " Panruti"
      },
      {
         "City": " Panna"
      },
      {
         "City": " Panmana"
      },
      {
         "City": " Pānīpat"
      },
      {
         "City": " Pānihāti"
      },
      {
         "City": " Pandua"
      },
      {
         "City": " Pāndhurnā"
      },
      {
         "City": " Pandharpur"
      },
      {
         "City": " French Rocks"
      },
      {
         "City": " Panaji"
      },
      {
         "City": " Panāgar"
      },
      {
         "City": " Palwal"
      },
      {
         "City": " Pāloncha"
      },
      {
         "City": " Palani"
      },
      {
         "City": " Palmaner"
      },
      {
         "City": " Pallippatti"
      },
      {
         "City": " Pallikondai"
      },
      {
         "City": " Pallāvaram"
      },
      {
         "City": " Pallappatti"
      },
      {
         "City": " Palladam"
      },
      {
         "City": " Pālkonda"
      },
      {
         "City": " Pālitāna"
      },
      {
         "City": " Paliā Kalān"
      },
      {
         "City": " Pāli"
      },
      {
         "City": " Pāli"
      },
      {
         "City": " Palakkad"
      },
      {
         "City": " Pālghar"
      },
      {
         "City": " Palera"
      },
      {
         "City": " Palāsa"
      },
      {
         "City": " Pālanpur"
      },
      {
         "City": " Pālakollu"
      },
      {
         "City": " Pālakkodu"
      },
      {
         "City": " Pākaur"
      },
      {
         "City": " Pākāla"
      },
      {
         "City": " Paithan"
      },
      {
         "City": " Pahāsu"
      },
      {
         "City": " Padrauna"
      },
      {
         "City": " Padra"
      },
      {
         "City": " Padmanābhapuram"
      },
      {
         "City": " Padampur"
      },
      {
         "City": " Padampur"
      },
      {
         "City": " Padam"
      },
      {
         "City": " Pachperwa"
      },
      {
         "City": " Pāchora"
      },
      {
         "City": " Ottappālam"
      },
      {
         "City": " Osmanabad"
      },
      {
         "City": " Orai"
      },
      {
         "City": " Ongole"
      },
      {
         "City": " Okha"
      },
      {
         "City": " Ozar"
      },
      {
         "City": " Obra"
      },
      {
         "City": " Nūzvīd"
      },
      {
         "City": " Nūrpur"
      },
      {
         "City": " Nowrangapur"
      },
      {
         "City": " North Lakhimpur"
      },
      {
         "City": " North Guwāhāti"
      },
      {
         "City": " Nongstoin"
      },
      {
         "City": " Nokha"
      },
      {
         "City": " Nohar"
      },
      {
         "City": " Noāmundi"
      },
      {
         "City": " Nizāmābād"
      },
      {
         "City": " Nirmāli"
      },
      {
         "City": " Nirmal"
      },
      {
         "City": " Nipāni"
      },
      {
         "City": " Neem ka Thana"
      },
      {
         "City": " Nīmbāhera"
      },
      {
         "City": " Nimāparha"
      },
      {
         "City": " Nīmāj"
      },
      {
         "City": " Nīlokheri"
      },
      {
         "City": " Nīlēshwar"
      },
      {
         "City": " Nilanga"
      },
      {
         "City": " Nilakottai"
      },
      {
         "City": " Nīlgiri"
      },
      {
         "City": " Nihtaur"
      },
      {
         "City": " Nidadavole"
      },
      {
         "City": " Nichlaul"
      },
      {
         "City": " Neyyāttinkara"
      },
      {
         "City": " New Delhi"
      },
      {
         "City": " Neral"
      },
      {
         "City": " Nepānagar"
      },
      {
         "City": " Nellore"
      },
      {
         "City": " Nellikkuppam"
      },
      {
         "City": " Nelamangala"
      },
      {
         "City": " Nedumangād"
      },
      {
         "City": " Nāyudupeta"
      },
      {
         "City": " Nayāgarh"
      },
      {
         "City": " Nawāshahr"
      },
      {
         "City": " Nawalgarh"
      },
      {
         "City": " Niwai"
      },
      {
         "City": " Nawāda"
      },
      {
         "City": " Nawābganj"
      },
      {
         "City": " Nawābganj"
      },
      {
         "City": " Nawābganj"
      },
      {
         "City": " Nāwa"
      },
      {
         "City": " Navalgund"
      },
      {
         "City": " Navadwīp"
      },
      {
         "City": " Nautanwa"
      },
      {
         "City": " Naugachhia"
      },
      {
         "City": " Nattam"
      },
      {
         "City": " Nāthdwāra"
      },
      {
         "City": " Nasrullāhganj"
      },
      {
         "City": " Nāsriganj"
      },
      {
         "City": " Nāspur"
      },
      {
         "City": " Nasīrābād"
      },
      {
         "City": " Nashik"
      },
      {
         "City": " Narwar"
      },
      {
         "City": " Narwāna"
      },
      {
         "City": " Narsīpatnam"
      },
      {
         "City": " Narsinghgarh"
      },
      {
         "City": " Narsimhapur"
      },
      {
         "City": " Nārnaund"
      },
      {
         "City": " Nārnaul"
      },
      {
         "City": " Nargund"
      },
      {
         "City": " Naregal"
      },
      {
         "City": " Nārāyanpet"
      },
      {
         "City": " Narāyangarh"
      },
      {
         "City": " Nāravārikuppam"
      },
      {
         "City": " Naraura"
      },
      {
         "City": " Narauli"
      },
      {
         "City": " Narasaraopet"
      },
      {
         "City": " Narasapur"
      },
      {
         "City": " Narasannapeta"
      },
      {
         "City": " Naraini"
      },
      {
         "City": " Naraina"
      },
      {
         "City": " Napāsar"
      },
      {
         "City": " Nānpāra"
      },
      {
         "City": " Nanjangūd"
      },
      {
         "City": " Nāngloi Jāt"
      },
      {
         "City": " Nāngal Township"
      },
      {
         "City": " Nandyāl"
      },
      {
         "City": " Nandurbar"
      },
      {
         "City": " Nāndūra Buzurg"
      },
      {
         "City": " Nandikotkūr"
      },
      {
         "City": " Nandigāma"
      },
      {
         "City": " Nāndgaon"
      },
      {
         "City": " Nanded"
      },
      {
         "City": " Nanauta"
      },
      {
         "City": " Nāmrup"
      },
      {
         "City": " Nambiyūr"
      },
      {
         "City": " Nāmakkal"
      },
      {
         "City": " Nāmagiripettai"
      },
      {
         "City": " Nalhāti"
      },
      {
         "City": " Nalgonda"
      },
      {
         "City": " Naldurg"
      },
      {
         "City": " Nakūr"
      },
      {
         "City": " Naksalbāri"
      },
      {
         "City": " Nakodar"
      },
      {
         "City": " Najībābād"
      },
      {
         "City": " Nainwa"
      },
      {
         "City": " Nainpur"
      },
      {
         "City": " Naini Tāl"
      },
      {
         "City": " Naihāti"
      },
      {
         "City": " Nahorkatiya"
      },
      {
         "City": " Nāhan"
      },
      {
         "City": " Nagpur"
      },
      {
         "City": " Nāgod"
      },
      {
         "City": " Nagīna"
      },
      {
         "City": " Nāgercoil"
      },
      {
         "City": " Nagda"
      },
      {
         "City": " Nāgaur"
      },
      {
         "City": " Nāgar Karnūl"
      },
      {
         "City": " Nagari"
      },
      {
         "City": " Nagar"
      },
      {
         "City": " Nāgappattinam"
      },
      {
         "City": " Nāgamangala"
      },
      {
         "City": " Naduvannūr"
      },
      {
         "City": " Nadiād"
      },
      {
         "City": " Nādbai"
      },
      {
         "City": " Nādāpuram"
      },
      {
         "City": " Nabīnagar"
      },
      {
         "City": " Nābha"
      },
      {
         "City": " Mysore"
      },
      {
         "City": " Muzaffarpur"
      },
      {
         "City": " Muzaffarnagar"
      },
      {
         "City": " Mūvattupula"
      },
      {
         "City": " Muttupet"
      },
      {
         "City": " Mussoorie"
      },
      {
         "City": " Musiri"
      },
      {
         "City": " Mushābani"
      },
      {
         "City": " Murwāra"
      },
      {
         "City": " Murtajāpur"
      },
      {
         "City": " Murshidābād"
      },
      {
         "City": " Murlīganj"
      },
      {
         "City": " Morinda"
      },
      {
         "City": " Murbād"
      },
      {
         "City": " Murādnagar"
      },
      {
         "City": " Munnar"
      },
      {
         "City": " Monghyr"
      },
      {
         "City": " Mungeli"
      },
      {
         "City": " Mungaoli"
      },
      {
         "City": " Mūndwa"
      },
      {
         "City": " Mundra"
      },
      {
         "City": " Mundgod"
      },
      {
         "City": " Mundargi"
      },
      {
         "City": " Multai"
      },
      {
         "City": " Mūlki"
      },
      {
         "City": " Mulgund"
      },
      {
         "City": " Mulbāgal"
      },
      {
         "City": " Muluppilagadu"
      },
      {
         "City": " Mūl"
      },
      {
         "City": " Muktsar"
      },
      {
         "City": " Mukher"
      },
      {
         "City": " Mukeriān"
      },
      {
         "City": " Muhammadābād"
      },
      {
         "City": " Muhammadābād"
      },
      {
         "City": " Muhammadābād"
      },
      {
         "City": " Mughal Sarāi"
      },
      {
         "City": " Mudkhed"
      },
      {
         "City": " Mudhol"
      },
      {
         "City": " Mudgal"
      },
      {
         "City": " Muddebihāl"
      },
      {
         "City": " Mūdbidri"
      },
      {
         "City": " Mubārakpur"
      },
      {
         "City": " Mothīhāri"
      },
      {
         "City": " Morwa"
      },
      {
         "City": " Morsi"
      },
      {
         "City": " Morena"
      },
      {
         "City": " Morbi"
      },
      {
         "City": " Morār"
      },
      {
         "City": " Moram"
      },
      {
         "City": " Morādābād"
      },
      {
         "City": " Mon"
      },
      {
         "City": " Mokokchūng"
      },
      {
         "City": " Mokameh"
      },
      {
         "City": " Moirāng"
      },
      {
         "City": " Moga"
      },
      {
         "City": " Modāsa"
      },
      {
         "City": " Misrikh"
      },
      {
         "City": " Mirzāpur"
      },
      {
         "City": " Miriālgūda"
      },
      {
         "City": " Mīrganj"
      },
      {
         "City": " Mīrānpur Katra"
      },
      {
         "City": " Mīrānpur"
      },
      {
         "City": " Mīnjūr"
      },
      {
         "City": " Milak"
      },
      {
         "City": " Mihona"
      },
      {
         "City": " Mhāsvād"
      },
      {
         "City": " Mettur"
      },
      {
         "City": " Mettupalayam"
      },
      {
         "City": " Merta"
      },
      {
         "City": " Mendarda"
      },
      {
         "City": " Memāri"
      },
      {
         "City": " Melur"
      },
      {
         "City": " Mehndāwal"
      },
      {
         "City": " Mehekar"
      },
      {
         "City": " Meerut"
      },
      {
         "City": " Medinīpur"
      },
      {
         "City": " Medak"
      },
      {
         "City": " Mayiladuthurai"
      },
      {
         "City": " Mayāng Imphāl"
      },
      {
         "City": " Mawāna"
      },
      {
         "City": " Mavoor"
      },
      {
         "City": " Māvelikara"
      },
      {
         "City": " Maur"
      },
      {
         "City": " Mauganj"
      },
      {
         "City": " Maudaha"
      },
      {
         "City": " Mau Aimma"
      },
      {
         "City": " Mau"
      },
      {
         "City": " Mau"
      },
      {
         "City": " Mattanūr"
      },
      {
         "City": " Mathura"
      },
      {
         "City": " Mātābhānga"
      },
      {
         "City": " Masaurhi Buzurg"
      },
      {
         "City": " Marmagao"
      },
      {
         "City": " Mārkāpur"
      },
      {
         "City": " Mariāni"
      },
      {
         "City": " Mariāhu"
      },
      {
         "City": " Marhaura"
      },
      {
         "City": " Margherita"
      },
      {
         "City": " Marakkanam"
      },
      {
         "City": " Mārahra"
      },
      {
         "City": " Māpuca"
      },
      {
         "City": " Mānwat"
      },
      {
         "City": " Mānvi"
      },
      {
         "City": " Manthani"
      },
      {
         "City": " Mānsa"
      },
      {
         "City": " Mānsa"
      },
      {
         "City": " Manoharpur"
      },
      {
         "City": " Mannargudi"
      },
      {
         "City": " Mannārakkāt"
      },
      {
         "City": " Manmād"
      },
      {
         "City": " Mankāchar"
      },
      {
         "City": " Mājalgaon"
      },
      {
         "City": " Manjhanpur"
      },
      {
         "City": " Manjeri"
      },
      {
         "City": " Manihāri"
      },
      {
         "City": " Maniar"
      },
      {
         "City": " Mangrūl Pīr"
      },
      {
         "City": " Māngrol"
      },
      {
         "City": " Māngrol"
      },
      {
         "City": " Manglaur"
      },
      {
         "City": " Mangalore"
      },
      {
         "City": " Mangaldai"
      },
      {
         "City": " Mangalagiri"
      },
      {
         "City": " Maner"
      },
      {
         "City": " Mandya"
      },
      {
         "City": " Māndvi"
      },
      {
         "City": " Māndvi"
      },
      {
         "City": " Māndu"
      },
      {
         "City": " Mandsaur"
      },
      {
         "City": " Mandlā"
      },
      {
         "City": " Mandi"
      },
      {
         "City": " Mandāwar"
      },
      {
         "City": " Mandapeta"
      },
      {
         "City": " Mandapam"
      },
      {
         "City": " Māndalgarh"
      },
      {
         "City": " Māndal"
      },
      {
         "City": " Mancherāl"
      },
      {
         "City": " Manāwar"
      },
      {
         "City": " Mānāvadar"
      },
      {
         "City": " Manāsa"
      },
      {
         "City": " Manapparai"
      },
      {
         "City": " Manamadurai"
      },
      {
         "City": " Manali"
      },
      {
         "City": " Mālvan"
      },
      {
         "City": " Mālūr"
      },
      {
         "City": " Mālpura"
      },
      {
         "City": " Malpe"
      },
      {
         "City": " Mallasamudram"
      },
      {
         "City": " Malkāpur"
      },
      {
         "City": " Malakanagiri"
      },
      {
         "City": " Malīhābād"
      },
      {
         "City": " Māler Kotla"
      },
      {
         "City": " Mālegaon"
      },
      {
         "City": " Malavalli"
      },
      {
         "City": " Malaut"
      },
      {
         "City": " Malappuram"
      },
      {
         "City": " Mākum"
      },
      {
         "City": " Maksi"
      },
      {
         "City": " Makrāna"
      },
      {
         "City": " Mairwa"
      },
      {
         "City": " Mainpuri"
      },
      {
         "City": " Maināguri"
      },
      {
         "City": " Maihar"
      },
      {
         "City": " Mahwah"
      },
      {
         "City": " Mahudha"
      },
      {
         "City": " Maholi"
      },
      {
         "City": " Mahobā"
      },
      {
         "City": " Mahmudābād"
      },
      {
         "City": " Mahīshādal"
      },
      {
         "City": " Mahgawān"
      },
      {
         "City": " Maheshwar"
      },
      {
         "City": " Mahendragarh"
      },
      {
         "City": " Mahemdāvād"
      },
      {
         "City": " Mahē"
      },
      {
         "City": " Mahbūbnagar"
      },
      {
         "City": " Mahbūbābād"
      },
      {
         "City": " Mahāsamund"
      },
      {
         "City": " Mahārāganj"
      },
      {
         "City": " Mahārājgani"
      },
      {
         "City": " Maham"
      },
      {
         "City": " Mahālingpur"
      },
      {
         "City": " Mahād"
      },
      {
         "City": " Maghar"
      },
      {
         "City": " Māgadi"
      },
      {
         "City": " Madurāntakam"
      },
      {
         "City": " Madurai"
      },
      {
         "City": " Madukkūr"
      },
      {
         "City": " Madukkarai"
      },
      {
         "City": " Chennai"
      },
      {
         "City": " Madikeri"
      },
      {
         "City": " Madhyamgram"
      },
      {
         "City": " Madhupur"
      },
      {
         "City": " Maddagiri"
      },
      {
         "City": " Madhubani"
      },
      {
         "City": " Madhipura"
      },
      {
         "City": " Madgaon"
      },
      {
         "City": " Maddūr"
      },
      {
         "City": " Madanapalle"
      },
      {
         "City": " Machilīpatnam"
      },
      {
         "City": " Machhlīshahr"
      },
      {
         "City": " Māchhīwāra"
      },
      {
         "City": " Mācherla"
      },
      {
         "City": " Lunglei"
      },
      {
         "City": " Lūnāvāda"
      },
      {
         "City": " Ludhiāna"
      },
      {
         "City": " Lucknow"
      },
      {
         "City": " Luckeesarai"
      },
      {
         "City": " Losal"
      },
      {
         "City": " Loni"
      },
      {
         "City": " Lonavla"
      },
      {
         "City": " Lonār"
      },
      {
         "City": " Lohārdaga"
      },
      {
         "City": " Lingsugūr"
      },
      {
         "City": " Limbdi"
      },
      {
         "City": " Leteri"
      },
      {
         "City": " Leh"
      },
      {
         "City": " Lāwar Khās"
      },
      {
         "City": " Laungowāl"
      },
      {
         "City": " Latur"
      },
      {
         "City": " Lāthi"
      },
      {
         "City": " Lātehār"
      },
      {
         "City": " Lar"
      },
      {
         "City": " Lālsot"
      },
      {
         "City": " Lālpur"
      },
      {
         "City": " Lalitpur"
      },
      {
         "City": " Lalgudi"
      },
      {
         "City": " Lālgola"
      },
      {
         "City": " Lālganj"
      },
      {
         "City": " Lālganj"
      },
      {
         "City": " Lakshmeshwar"
      },
      {
         "City": " Laksar"
      },
      {
         "City": " Lakhyabad"
      },
      {
         "City": " Lakhnādon"
      },
      {
         "City": " Lakhīmpur"
      },
      {
         "City": " Lākheri"
      },
      {
         "City": " Lāharpur"
      },
      {
         "City": " Lahār"
      },
      {
         "City": " Lādwa"
      },
      {
         "City": " Lādnūn"
      },
      {
         "City": " Lachhmangarh Sīkar"
      },
      {
         "City": " Kuzhithurai"
      },
      {
         "City": " Koothanallur"
      },
      {
         "City": " Kuttampuzha"
      },
      {
         "City": " Kutiyāna"
      },
      {
         "City": " Kutiatodu"
      },
      {
         "City": " Kushtagi"
      },
      {
         "City": " Kurinjippādi"
      },
      {
         "City": " Kurduvādi"
      },
      {
         "City": " Kurandvād"
      },
      {
         "City": " Kuppam"
      },
      {
         "City": " Kunnamkulam"
      },
      {
         "City": " Kunnamangalam"
      },
      {
         "City": " Kunigal"
      },
      {
         "City": " Kundla"
      },
      {
         "City": " Kundgol"
      },
      {
         "City": " Kundarkhi"
      },
      {
         "City": " Kunda"
      },
      {
         "City": " Kumta"
      },
      {
         "City": " Kūmher"
      },
      {
         "City": " Kumhāri"
      },
      {
         "City": " Kumbhrāj"
      },
      {
         "City": " Kumbakonam"
      },
      {
         "City": " Kulu"
      },
      {
         "City": " Kulti"
      },
      {
         "City": " Kulpahār"
      },
      {
         "City": " Kulittalai"
      },
      {
         "City": " Kulgam"
      },
      {
         "City": " Kukshi"
      },
      {
         "City": " Kūkatpalli"
      },
      {
         "City": " Kuju"
      },
      {
         "City": " Kūdligi"
      },
      {
         "City": " Kudachi"
      },
      {
         "City": " Kuchera"
      },
      {
         "City": " Kuchāman"
      },
      {
         "City": " Kuchaiburi"
      },
      {
         "City": " Krishnarājpet"
      },
      {
         "City": " Krishnanagar"
      },
      {
         "City": " Krishnagiri"
      },
      {
         "City": " Kozhikode"
      },
      {
         "City": " Koynanagar"
      },
      {
         "City": " Kovvūr"
      },
      {
         "City": " Kovūr"
      },
      {
         "City": " Kovilpatti"
      },
      {
         "City": " Kottūru"
      },
      {
         "City": " Kottayam"
      },
      {
         "City": " Kottagūdem"
      },
      {
         "City": " Kotputli"
      },
      {
         "City": " Kotma"
      },
      {
         "City": " Kotdwāra"
      },
      {
         "City": " Kotapārh"
      },
      {
         "City": " Kotamangalam"
      },
      {
         "City": " Kotagiri"
      },
      {
         "City": " Kota"
      },
      {
         "City": " Kotā"
      },
      {
         "City": " Kosigi"
      },
      {
         "City": " Kosi"
      },
      {
         "City": " Kosamba"
      },
      {
         "City": " Korwai"
      },
      {
         "City": " Koregaon"
      },
      {
         "City": " Korba"
      },
      {
         "City": " Koratla"
      },
      {
         "City": " Korāput"
      },
      {
         "City": " Koppal"
      },
      {
         "City": " Kopargaon"
      },
      {
         "City": " Kopāganj"
      },
      {
         "City": " Konnūr"
      },
      {
         "City": " Konnagar"
      },
      {
         "City": " Kondapalle"
      },
      {
         "City": " Kondagaon"
      },
      {
         "City": " Konch"
      },
      {
         "City": " Konārka"
      },
      {
         "City": " Kolasib"
      },
      {
         "City": " Kollegāl"
      },
      {
         "City": " Kolhāpur"
      },
      {
         "City": " Kolāras"
      },
      {
         "City": " Kolār"
      },
      {
         "City": " Colachel"
      },
      {
         "City": " Kokrajhar"
      },
      {
         "City": " Kohima"
      },
      {
         "City": " Koelwār"
      },
      {
         "City": " Kodungallūr"
      },
      {
         "City": " Kodoli"
      },
      {
         "City": " Kodīnar"
      },
      {
         "City": " Kodarmā"
      },
      {
         "City": " Kodār"
      },
      {
         "City": " Kodaikānāl"
      },
      {
         "City": " Koch Bihār"
      },
      {
         "City": " Koāth"
      },
      {
         "City": " Kizhake Chālakudi"
      },
      {
         "City": " Kithor"
      },
      {
         "City": " Kishtwār"
      },
      {
         "City": " Kishangarh"
      },
      {
         "City": " Kishanganj"
      },
      {
         "City": " Kīratpur"
      },
      {
         "City": " Kiraoli"
      },
      {
         "City": " Kinwat"
      },
      {
         "City": " Kichha"
      },
      {
         "City": " Khūtār"
      },
      {
         "City": " Khurja"
      },
      {
         "City": " Khurda"
      },
      {
         "City": " Khurai"
      },
      {
         "City": " Khunti"
      },
      {
         "City": " Khuldābād"
      },
      {
         "City": " Khowai"
      },
      {
         "City": " Khopoli"
      },
      {
         "City": " Khirkiyān"
      },
      {
         "City": " Khilchipur"
      },
      {
         "City": " Khetri"
      },
      {
         "City": " Khetia"
      },
      {
         "City": " Kheri"
      },
      {
         "City": " Kherālu"
      },
      {
         "City": " Khekra"
      },
      {
         "City": " Khed Brahma"
      },
      {
         "City": " Kheda"
      },
      {
         "City": " Khātra"
      },
      {
         "City": " Khatīma"
      },
      {
         "City": " Khātegaon"
      },
      {
         "City": " Khatauli"
      },
      {
         "City": " Khārupatia"
      },
      {
         "City": " Kharsia"
      },
      {
         "City": " Kharkhauda"
      },
      {
         "City": " Khargone"
      },
      {
         "City": " Khardah"
      },
      {
         "City": " Kharar"
      },
      {
         "City": " Kharakvasla"
      },
      {
         "City": " Kharagpur"
      },
      {
         "City": " Kharagpur"
      },
      {
         "City": " Khāpa"
      },
      {
         "City": " Khanna"
      },
      {
         "City": " Khandwa"
      },
      {
         "City": " Khandela"
      },
      {
         "City": " Khānāpur"
      },
      {
         "City": " Khammam"
      },
      {
         "City": " Khāmgaon"
      },
      {
         "City": " Khambhāt"
      },
      {
         "City": " Khambhāliya"
      },
      {
         "City": " Khamaria"
      },
      {
         "City": " Khalīlābād"
      },
      {
         "City": " Khajurāho"
      },
      {
         "City": " Khairāgarh"
      },
      {
         "City": " Khairāgarh"
      },
      {
         "City": " Khairābād"
      },
      {
         "City": " Khair"
      },
      {
         "City": " Khagaul"
      },
      {
         "City": " Khagaria"
      },
      {
         "City": " Khadki"
      },
      {
         "City": " Khada"
      },
      {
         "City": " Khāchrod"
      },
      {
         "City": " Kesinga"
      },
      {
         "City": " Keshorai Pātan"
      },
      {
         "City": " Keshod"
      },
      {
         "City": " Kerūr"
      },
      {
         "City": " Kendrāparha"
      },
      {
         "City": " Kenda"
      },
      {
         "City": " Kemrī"
      },
      {
         "City": " Kekri"
      },
      {
         "City": " Kāyankulam"
      },
      {
         "City": " Kayalpattinam"
      },
      {
         "City": " Kawardha"
      },
      {
         "City": " Kāvali"
      },
      {
         "City": " Kattivākkam"
      },
      {
         "City": " Kattanam"
      },
      {
         "City": " Kātrās"
      },
      {
         "City": " Kātpādi"
      },
      {
         "City": " Kātoya"
      },
      {
         "City": " Kātol"
      },
      {
         "City": " Katihar"
      },
      {
         "City": " Kathua"
      },
      {
         "City": " Kāthor"
      },
      {
         "City": " Katghora"
      },
      {
         "City": " Katangi"
      },
      {
         "City": " Katangi"
      },
      {
         "City": " Kasrāwad"
      },
      {
         "City": " Kashipur"
      },
      {
         "City": " Kāsganj"
      },
      {
         "City": " Kāsaragod"
      },
      {
         "City": " Karwar"
      },
      {
         "City": " Karur"
      },
      {
         "City": " Kartārpur"
      },
      {
         "City": " Kārsiyāng"
      },
      {
         "City": " Karol Bāgh"
      },
      {
         "City": " Karnāl"
      },
      {
         "City": " Karmāla"
      },
      {
         "City": " Kārkala"
      },
      {
         "City": " Karjat"
      },
      {
         "City": " Karīmnagar"
      },
      {
         "City": " Karīmganj"
      },
      {
         "City": " Karhal"
      },
      {
         "City": " Karera"
      },
      {
         "City": " Kareli"
      },
      {
         "City": " Karauli"
      },
      {
         "City": " Kāranja"
      },
      {
         "City": " Karamsad"
      },
      {
         "City": " Kāramadai"
      },
      {
         "City": " Kāraikkudi"
      },
      {
         "City": " Kāraikāl"
      },
      {
         "City": " Karād"
      },
      {
         "City": " Kapūrthala"
      },
      {
         "City": " Kāpren"
      },
      {
         "City": " Kapadvanj"
      },
      {
         "City": " Kānth"
      },
      {
         "City": " Kantābānji"
      },
      {
         "City": " Kānt"
      },
      {
         "City": " Kanpur"
      },
      {
         "City": " Kannod"
      },
      {
         "City": " Kanniyākumāri"
      },
      {
         "City": " Kannauj"
      },
      {
         "City": " Kānnangād"
      },
      {
         "City": " Kannad"
      },
      {
         "City": " Kānker"
      },
      {
         "City": " Kānke"
      },
      {
         "City": " Kankauli"
      },
      {
         "City": " Kanigiri"
      },
      {
         "City": " Kangayam"
      },
      {
         "City": " Kandukūr"
      },
      {
         "City": " Kāndla"
      },
      {
         "City": " Kāndi"
      },
      {
         "City": " Kāndhla"
      },
      {
         "City": " Kānchipuram"
      },
      {
         "City": " Kanakapura"
      },
      {
         "City": " Kāmthi"
      },
      {
         "City": " Kampli"
      },
      {
         "City": " Cumbum"
      },
      {
         "City": " Kāmārhāti"
      },
      {
         "City": " Kāmāreddi"
      },
      {
         "City": " Kāman"
      },
      {
         "City": " Kamalganj"
      },
      {
         "City": " Kāmākhyānagar"
      },
      {
         "City": " Kalyani"
      },
      {
         "City": " Kalyān"
      },
      {
         "City": " Kalugumalai"
      },
      {
         "City": " Kālpi"
      },
      {
         "City": " Kalpetta"
      },
      {
         "City": " Kālol"
      },
      {
         "City": " Kālna"
      },
      {
         "City": " Kalmeshwar"
      },
      {
         "City": " Kallidaikurichchi"
      },
      {
         "City": " Kallakkurichchi"
      },
      {
         "City": " Kālka"
      },
      {
         "City": " Kāliyāganj"
      },
      {
         "City": " Kālimpong"
      },
      {
         "City": " Kalghatgi"
      },
      {
         "City": " Kālāvad"
      },
      {
         "City": " Kālānwāli"
      },
      {
         "City": " Kalānaur"
      },
      {
         "City": " Kalamnūri"
      },
      {
         "City": " Kalamb"
      },
      {
         "City": " Kalakkādu"
      },
      {
         "City": " Kakrāla"
      },
      {
         "City": " Kākori"
      },
      {
         "City": " Kākināda"
      },
      {
         "City": " Kakching"
      },
      {
         "City": " Kaithal"
      },
      {
         "City": " Kairāna"
      },
      {
         "City": " Kaimori"
      },
      {
         "City": " Kaimganj"
      },
      {
         "City": " Kailāshahar"
      },
      {
         "City": " Kailāras"
      },
      {
         "City": " Kaikalūr"
      },
      {
         "City": " Kāgal"
      },
      {
         "City": " Kadūr"
      },
      {
         "City": " Kadod"
      },
      {
         "City": " Kadiri"
      },
      {
         "City": " Kadi"
      },
      {
         "City": " Kadayanallur"
      },
      {
         "City": " Kānchrāpāra"
      },
      {
         "City": " Kachhwa"
      },
      {
         "City": " Kabrāi"
      },
      {
         "City": " Junnar"
      },
      {
         "City": " Jūnāgarh"
      },
      {
         "City": " Jūnāgadh"
      },
      {
         "City": " Jumri Tilaiyā"
      },
      {
         "City": " Jalandhar"
      },
      {
         "City": " Jugsālai"
      },
      {
         "City": " Jorhāt"
      },
      {
         "City": " Jora"
      },
      {
         "City": " Jolārpettai"
      },
      {
         "City": " Jogbani"
      },
      {
         "City": " Jodiya Bandar"
      },
      {
         "City": " Jodhpur"
      },
      {
         "City": " Jodhpur"
      },
      {
         "City": " Jintūr"
      },
      {
         "City": " Jīnd"
      },
      {
         "City": " Jhūsi"
      },
      {
         "City": " Jhunjhunūn"
      },
      {
         "City": " Jhinjhāna"
      },
      {
         "City": " Jhīnjhak"
      },
      {
         "City": " Jhārsuguda"
      },
      {
         "City": " Jharia"
      },
      {
         "City": " Jhārgrām"
      },
      {
         "City": " Jhānsi"
      },
      {
         "City": " Jhanjhārpur"
      },
      {
         "City": " Jhālu"
      },
      {
         "City": " Jhālrapātan"
      },
      {
         "City": " Jhalida"
      },
      {
         "City": " Jhālāwār"
      },
      {
         "City": " Jhajjar"
      },
      {
         "City": " Jhā Jhā"
      },
      {
         "City": " Jhābua"
      },
      {
         "City": " Jewar"
      },
      {
         "City": " Jevargi"
      },
      {
         "City": " Jetpur"
      },
      {
         "City": " Jeypore"
      },
      {
         "City": " Jaynagar"
      },
      {
         "City": " Jaynagar-Majilpur"
      },
      {
         "City": " Jayamkondacholapuram"
      },
      {
         "City": " Jāwad"
      },
      {
         "City": " Jaunpur"
      },
      {
         "City": " Jatāra"
      },
      {
         "City": " Jatani"
      },
      {
         "City": " Jaswantnagar"
      },
      {
         "City": " Jaspur"
      },
      {
         "City": " Jasidih"
      },
      {
         "City": " Jashpurnagar"
      },
      {
         "City": " Jasdan"
      },
      {
         "City": " Jarwal"
      },
      {
         "City": " Jaorā"
      },
      {
         "City": " Jānsath"
      },
      {
         "City": " Jānjgīr"
      },
      {
         "City": " Jangipur"
      },
      {
         "City": " Jangaon"
      },
      {
         "City": " Jandiāla"
      },
      {
         "City": " Jāmuria"
      },
      {
         "City": " Jamūī"
      },
      {
         "City": " Jāmtāra"
      },
      {
         "City": " Jamshedpur"
      },
      {
         "City": " Jāmnagar"
      },
      {
         "City": " Jammu"
      },
      {
         "City": " Jammalamadugu"
      },
      {
         "City": " Jamkhandi"
      },
      {
         "City": " Jambusar"
      },
      {
         "City": " Jamālpur"
      },
      {
         "City": " Jāmai"
      },
      {
         "City": " Jāmadoba"
      },
      {
         "City": " Jalpāiguri"
      },
      {
         "City": " Jalor"
      },
      {
         "City": " Jālna"
      },
      {
         "City": " Jalgaon Jamod"
      },
      {
         "City": " Jalgaon"
      },
      {
         "City": " Jaleshwar"
      },
      {
         "City": " Jalesar"
      },
      {
         "City": " Jālaun"
      },
      {
         "City": " Jalālpur"
      },
      {
         "City": " Jalālpur"
      },
      {
         "City": " Jalālī"
      },
      {
         "City": " Jalālābād"
      },
      {
         "City": " Jalālābad"
      },
      {
         "City": " Jalālābād"
      },
      {
         "City": " Jājpur"
      },
      {
         "City": " Jaito"
      },
      {
         "City": " Jaitāran"
      },
      {
         "City": " Jaisingpur"
      },
      {
         "City": " Jaisalmer"
      },
      {
         "City": " Jais"
      },
      {
         "City": " Jaipur"
      },
      {
         "City": " Jahāzpur"
      },
      {
         "City": " Jahāngīrābād"
      },
      {
         "City": " Jahānābād"
      },
      {
         "City": " Jagtiāl"
      },
      {
         "City": " Jagraon"
      },
      {
         "City": " Jaggayyapeta"
      },
      {
         "City": " Jagdīspur"
      },
      {
         "City": " Jagdīshpur"
      },
      {
         "City": " Jagdalpur"
      },
      {
         "City": " Jagatsinghapur"
      },
      {
         "City": " Jagalūr"
      },
      {
         "City": " Jagādhri"
      },
      {
         "City": " Jabalpur"
      },
      {
         "City": " Itimādpur"
      },
      {
         "City": " Itārsi"
      },
      {
         "City": " Itānagar"
      },
      {
         "City": " Islāmpur"
      },
      {
         "City": " Islāmpur"
      },
      {
         "City": " Islāmnagar"
      },
      {
         "City": " Irugūr"
      },
      {
         "City": " Irinjālakuda"
      },
      {
         "City": " Iringal"
      },
      {
         "City": " Ingrāj Bāzār"
      },
      {
         "City": " Indri"
      },
      {
         "City": " Indore"
      },
      {
         "City": " Indi"
      },
      {
         "City": " Indergarh"
      },
      {
         "City": " Indāpur"
      },
      {
         "City": " Imphal"
      },
      {
         "City": " Ilkal"
      },
      {
         "City": " Igatpuri"
      },
      {
         "City": " Idappadi"
      },
      {
         "City": " Ichchāpuram"
      },
      {
         "City": " Ichalkaranji"
      },
      {
         "City": " Hyderabad"
      },
      {
         "City": " Hadagalli"
      },
      {
         "City": " Husainābād"
      },
      {
         "City": " Hunsūr"
      },
      {
         "City": " Hungund"
      },
      {
         "City": " Hukeri"
      },
      {
         "City": " Hugli"
      },
      {
         "City": " Hubli"
      },
      {
         "City": " Howli"
      },
      {
         "City": " Hosūr"
      },
      {
         "City": " Hospet"
      },
      {
         "City": " Hoskote"
      },
      {
         "City": " Hoshangābād"
      },
      {
         "City": " Hosdurga"
      },
      {
         "City": " Honnāli"
      },
      {
         "City": " Honāvar"
      },
      {
         "City": " Homnābād"
      },
      {
         "City": " Hole Narsipur"
      },
      {
         "City": " Holalkere"
      },
      {
         "City": " Hojāi"
      },
      {
         "City": " Hodal"
      },
      {
         "City": " Hisuā"
      },
      {
         "City": " Hisar"
      },
      {
         "City": " Hiriyūr"
      },
      {
         "City": " Hirekerūr"
      },
      {
         "City": " Hīrākud"
      },
      {
         "City": " Hinjilikatu"
      },
      {
         "City": " Hingoli"
      },
      {
         "City": " Hinganghāt"
      },
      {
         "City": " Hindupur"
      },
      {
         "City": " Hindoria"
      },
      {
         "City": " Hindaun"
      },
      {
         "City": " Himatnagar"
      },
      {
         "City": " Hilsa"
      },
      {
         "City": " Hazārībāg"
      },
      {
         "City": " Hāveri"
      },
      {
         "City": " Hatta"
      },
      {
         "City": " Hāthras"
      },
      {
         "City": " Hastināpur"
      },
      {
         "City": " Hassan"
      },
      {
         "City": " Hāsimāra"
      },
      {
         "City": " Hasanpur"
      },
      {
         "City": " Harūr"
      },
      {
         "City": " Harsūd"
      },
      {
         "City": " Harpanahalli"
      },
      {
         "City": " Harpālpur"
      },
      {
         "City": " Hārij"
      },
      {
         "City": " Harihar"
      },
      {
         "City": " Haridwar"
      },
      {
         "City": " Hardoī"
      },
      {
         "City": " Harda Khās"
      },
      {
         "City": " Hāpur"
      },
      {
         "City": " Hāora"
      },
      {
         "City": " Hanumāngarh"
      },
      {
         "City": " Hānsi"
      },
      {
         "City": " Hāngal"
      },
      {
         "City": " Handiā"
      },
      {
         "City": " Hamīrpur"
      },
      {
         "City": " Hamīrpur"
      },
      {
         "City": " Halvad"
      },
      {
         "City": " Hālol"
      },
      {
         "City": " Haliyal"
      },
      {
         "City": " Hālīsahar"
      },
      {
         "City": " Haldwani"
      },
      {
         "City": " Haldaur"
      },
      {
         "City": " Hājo"
      },
      {
         "City": " Hājīpur"
      },
      {
         "City": " Hailākāndi"
      },
      {
         "City": " Hāflong"
      },
      {
         "City": " Hadgāon"
      },
      {
         "City": " Hābra"
      },
      {
         "City": " Gwalior"
      },
      {
         "City": " Guskhara"
      },
      {
         "City": " Guruvāyūr"
      },
      {
         "City": " Guru Har Sahāi"
      },
      {
         "City": " Gursarāi"
      },
      {
         "City": " Gursahāiganj"
      },
      {
         "City": " Gurmatkāl"
      },
      {
         "City": " Gurgaon"
      },
      {
         "City": " Gunupur"
      },
      {
         "City": " Guntūr"
      },
      {
         "City": " Guntakal Junction"
      },
      {
         "City": " Gunnaur"
      },
      {
         "City": " Gundlupet"
      },
      {
         "City": " Guna"
      },
      {
         "City": " Gummidipundi"
      },
      {
         "City": " Gumla"
      },
      {
         "City": " Gumia"
      },
      {
         "City": " Guledagudda"
      },
      {
         "City": " Gulbarga"
      },
      {
         "City": " Gulāothi"
      },
      {
         "City": " Gulābpura"
      },
      {
         "City": " Gūduvāncheri"
      },
      {
         "City": " Gūdūr"
      },
      {
         "City": " Gudiyatham"
      },
      {
         "City": " Gudivāda"
      },
      {
         "City": " Gudalur"
      },
      {
         "City": " Gubbi"
      },
      {
         "City": " Goyerkāta"
      },
      {
         "City": " Govardhan"
      },
      {
         "City": " Gosāba"
      },
      {
         "City": " Gorakhpur"
      },
      {
         "City": " Gorakhpur"
      },
      {
         "City": " Gobichettipalayam"
      },
      {
         "City": " Gopālganj"
      },
      {
         "City": " Gondiā"
      },
      {
         "City": " Gondal"
      },
      {
         "City": " Gondā City"
      },
      {
         "City": " Gomoh"
      },
      {
         "City": " Gola Gokarannāth"
      },
      {
         "City": " Golāghāt"
      },
      {
         "City": " Gokarna"
      },
      {
         "City": " Gokak"
      },
      {
         "City": " Gohāna"
      },
      {
         "City": " Gohadi"
      },
      {
         "City": " Godhra"
      },
      {
         "City": " Godda"
      },
      {
         "City": " Gobindpur"
      },
      {
         "City": " Gobārdānga"
      },
      {
         "City": " Goālpāra"
      },
      {
         "City": " Girīdīh"
      },
      {
         "City": " Gingee"
      },
      {
         "City": " Giddarbāha"
      },
      {
         "City": " Giddalūr"
      },
      {
         "City": " Ghugus"
      },
      {
         "City": " Ghoti Budrukh"
      },
      {
         "City": " Ghosī"
      },
      {
         "City": " Ghazīpur"
      },
      {
         "City": " Ghāziābād"
      },
      {
         "City": " Ghātsīla"
      },
      {
         "City": " Ghātanji"
      },
      {
         "City": " Ghātampur"
      },
      {
         "City": " Ghātāl"
      },
      {
         "City": " Gharaunda"
      },
      {
         "City": " Gevrai"
      },
      {
         "City": " Gaya"
      },
      {
         "City": " Gauripur"
      },
      {
         "City": " Goribidnūr"
      },
      {
         "City": " Guwahati"
      },
      {
         "City": " Garhwa"
      },
      {
         "City": " Garui"
      },
      {
         "City": " Gariadhar"
      },
      {
         "City": " Garhshankar"
      },
      {
         "City": " Garhmuktesar"
      },
      {
         "City": " Garhākota"
      },
      {
         "City": " Gannavaram"
      },
      {
         "City": " Gangtok"
      },
      {
         "City": " Gangolli"
      },
      {
         "City": " Gangoh"
      },
      {
         "City": " Gangāwati"
      },
      {
         "City": " Gangārāmpur"
      },
      {
         "City": " Gangāpur"
      },
      {
         "City": " Gangāpur"
      },
      {
         "City": " Gangāpur"
      },
      {
         "City": " Gangānagar"
      },
      {
         "City": " Gangākher"
      },
      {
         "City": " Ghandinagar"
      },
      {
         "City": " Gāndhīdhām"
      },
      {
         "City": " Gandevi"
      },
      {
         "City": " Gāndarbal"
      },
      {
         "City": " Gajraula"
      },
      {
         "City": " Gajendragarh"
      },
      {
         "City": " Gadwāl"
      },
      {
         "City": " Gadhinglaj"
      },
      {
         "City": " Gadhada"
      },
      {
         "City": " Gādarwāra"
      },
      {
         "City": " Gadag"
      },
      {
         "City": " Fort Gloster"
      },
      {
         "City": " Forbesganj"
      },
      {
         "City": " Fīrozpur Jhirka"
      },
      {
         "City": " Ferozepore"
      },
      {
         "City": " Fīrozābād"
      },
      {
         "City": " Ferokh"
      },
      {
         "City": " Fāzilka"
      },
      {
         "City": " Fatwa"
      },
      {
         "City": " Fatehpur Sīkri"
      },
      {
         "City": " Fatehpur"
      },
      {
         "City": " Fatehpur"
      },
      {
         "City": " Fatehpur"
      },
      {
         "City": " Fatehgarh Chūriān"
      },
      {
         "City": " Fatehganj West"
      },
      {
         "City": " Fatehābād"
      },
      {
         "City": " Fatehābād"
      },
      {
         "City": " Farrukhnagar"
      },
      {
         "City": " Farrukhābād"
      },
      {
         "City": " Farīdpur"
      },
      {
         "City": " Farīdkot"
      },
      {
         "City": " Farīdābād"
      },
      {
         "City": " Farakka"
      },
      {
         "City": " Fālākāta"
      },
      {
         "City": " Faizpur"
      },
      {
         "City": " Fyzābād"
      },
      {
         "City": " Etāwah"
      },
      {
         "City": " Erraguntla"
      },
      {
         "City": " Erode"
      },
      {
         "City": " Erāttupetta"
      },
      {
         "City": " Erandol"
      },
      {
         "City": " Emmiganūr"
      },
      {
         "City": " Ellore"
      },
      {
         "City": " Elūr"
      },
      {
         "City": " Ellenabad"
      },
      {
         "City": " Elamanchili"
      },
      {
         "City": " Egra"
      },
      {
         "City": " Dwārka"
      },
      {
         "City": " Durgapur"
      },
      {
         "City": " Durgāpur"
      },
      {
         "City": " Durg"
      },
      {
         "City": " Dūngarpur"
      },
      {
         "City": " Ganj Dundwāra"
      },
      {
         "City": " Dumraon"
      },
      {
         "City": " Dumra"
      },
      {
         "City": " Dumka"
      },
      {
         "City": " Dum Duma"
      },
      {
         "City": " Dam Dam"
      },
      {
         "City": " Duliāgaon"
      },
      {
         "City": " Dugda"
      },
      {
         "City": " Dubrājpur"
      },
      {
         "City": " Dornakal"
      },
      {
         "City": " Dorāha"
      },
      {
         "City": " Dongargarh"
      },
      {
         "City": " Dondaicha"
      },
      {
         "City": " Dombivli"
      },
      {
         "City": " Dod Ballāpur"
      },
      {
         "City": " Doda"
      },
      {
         "City": " Diu"
      },
      {
         "City": " Dīsa"
      },
      {
         "City": " Diphu"
      },
      {
         "City": " Dīnhāta"
      },
      {
         "City": " Dindori"
      },
      {
         "City": " Dindigul"
      },
      {
         "City": " Dīnānagar"
      },
      {
         "City": " Dimāpur"
      },
      {
         "City": " Digras"
      },
      {
         "City": " Dīglūr"
      },
      {
         "City": " Dighwāra"
      },
      {
         "City": " Digboi"
      },
      {
         "City": " Dīg"
      },
      {
         "City": " Dīdwāna"
      },
      {
         "City": " Dicholi"
      },
      {
         "City": " Dibrugarh"
      },
      {
         "City": " Dibai"
      },
      {
         "City": " Diamond Harbour"
      },
      {
         "City": " Dhūri"
      },
      {
         "City": " Dhupgāri"
      },
      {
         "City": " Dhuliān"
      },
      {
         "City": " Dhūlia"
      },
      {
         "City": " Dhuburi"
      },
      {
         "City": " Dhrol"
      },
      {
         "City": " Dhrāngadhra"
      },
      {
         "City": " Dhorāji"
      },
      {
         "City": " Dhone"
      },
      {
         "City": " Dholka"
      },
      {
         "City": " Dhing"
      },
      {
         "City": " Dhenkānāl"
      },
      {
         "City": " Dhekiajuli"
      },
      {
         "City": " Dhaurahra"
      },
      {
         "City": " Dhaulpur"
      },
      {
         "City": " Dhārūr"
      },
      {
         "City": " Dhāruhera"
      },
      {
         "City": " Dharmsāla"
      },
      {
         "City": " Dharmavaram"
      },
      {
         "City": " Dharmapuri"
      },
      {
         "City": " Dharmanagar"
      },
      {
         "City": " Dharmadam"
      },
      {
         "City": " Dharmābād"
      },
      {
         "City": " Dhāriwāl"
      },
      {
         "City": " Dhāri"
      },
      {
         "City": " Dharapuram"
      },
      {
         "City": " Dharangaon"
      },
      {
         "City": " Dharampur"
      },
      {
         "City": " Dhār"
      },
      {
         "City": " Dhanera"
      },
      {
         "City": " Dhandhuka"
      },
      {
         "City": " Dhanbād"
      },
      {
         "City": " Dhanaura"
      },
      {
         "City": " Dhanaula"
      },
      {
         "City": " Dhamtari"
      },
      {
         "City": " Dhāmpur"
      },
      {
         "City": " Dhāmnod"
      },
      {
         "City": " Dhāka"
      },
      {
         "City": " Dewas"
      },
      {
         "City": " Deoli"
      },
      {
         "City": " Devgarh"
      },
      {
         "City": " Devgadh Bāriya"
      },
      {
         "City": " Devarkonda"
      },
      {
         "City": " Devanhalli"
      },
      {
         "City": " Devakottai"
      },
      {
         "City": " Deūlgaon Rāja"
      },
      {
         "City": " Deshnoke"
      },
      {
         "City": " Depālpur"
      },
      {
         "City": " Deori Khās"
      },
      {
         "City": " Deoria"
      },
      {
         "City": " Deoraniān"
      },
      {
         "City": " Deoli"
      },
      {
         "City": " Deolāli"
      },
      {
         "City": " Deogarh"
      },
      {
         "City": " Deoband"
      },
      {
         "City": " Denkanikota"
      },
      {
         "City": " Delhi"
      },
      {
         "City": " Dehri"
      },
      {
         "City": " Dehra Dūn"
      },
      {
         "City": " Dausa"
      },
      {
         "City": " Daund"
      },
      {
         "City": " Daudnagar"
      },
      {
         "City": " Dattāpur"
      },
      {
         "City": " Datia"
      },
      {
         "City": " Dātāganj"
      },
      {
         "City": " Dasūya"
      },
      {
         "City": " Dāsna"
      },
      {
         "City": " Daryāpur"
      },
      {
         "City": " Dārwha"
      },
      {
         "City": " Dārjiling"
      },
      {
         "City": " Darbhanga"
      },
      {
         "City": " Dandeli"
      },
      {
         "City": " Dinapore"
      },
      {
         "City": " Damoh"
      },
      {
         "City": " Dāmnagar"
      },
      {
         "City": " Daman"
      },
      {
         "City": " Daltonganj"
      },
      {
         "City": " Dalsingh Sarai"
      },
      {
         "City": " Dalkola"
      },
      {
         "City": " Dākor"
      },
      {
         "City": " Dohad"
      },
      {
         "City": " Dahegām"
      },
      {
         "City": " Dāhānu"
      },
      {
         "City": " Dādri"
      },
      {
         "City": " Dabwāli"
      },
      {
         "City": " Dabra"
      },
      {
         "City": " Daboh"
      },
      {
         "City": " Dabhoi"
      },
      {
         "City": " Cuttack"
      },
      {
         "City": " Curchorem"
      },
      {
         "City": " Cuncolim"
      },
      {
         "City": " Cumbum"
      },
      {
         "City": " Cuddapah"
      },
      {
         "City": " Cuddalore"
      },
      {
         "City": " Coondapoor"
      },
      {
         "City": " Colonelganj"
      },
      {
         "City": " Colgong"
      },
      {
         "City": " Calangute"
      },
      {
         "City": " Coimbatore"
      },
      {
         "City": " Cochin"
      },
      {
         "City": " Clement Town"
      },
      {
         "City": " Chūru"
      },
      {
         "City": " Churāchāndpur"
      },
      {
         "City": " Chunār"
      },
      {
         "City": " Chotila"
      },
      {
         "City": " Chopda"
      },
      {
         "City": " Chodavaram"
      },
      {
         "City": " Rampachodavaram"
      },
      {
         "City": " Chittūr"
      },
      {
         "City": " Chittaurgarh"
      },
      {
         "City": " Chittaranjan"
      },
      {
         "City": " Chitradurga"
      },
      {
         "City": " Chītāpur"
      },
      {
         "City": " Chidawa"
      },
      {
         "City": " Chīrāla"
      },
      {
         "City": " Chīpurupalle"
      },
      {
         "City": " Chiplūn"
      },
      {
         "City": " Chintāmani"
      },
      {
         "City": " Chinna Salem"
      },
      {
         "City": " Chinnamanūr"
      },
      {
         "City": " Chincholi"
      },
      {
         "City": " Chillupār"
      },
      {
         "City": " Chilakalūrupet"
      },
      {
         "City": " Chikodi"
      },
      {
         "City": " Chiknāyakanhalli"
      },
      {
         "City": " Chikmagalūr"
      },
      {
         "City": " Chikhli"
      },
      {
         "City": " Chik Ballāpur"
      },
      {
         "City": " Chidambaram"
      },
      {
         "City": " Chicholi"
      },
      {
         "City": " Chhoti Sādri"
      },
      {
         "City": " Chhota Udepur"
      },
      {
         "City": " Chhindwāra"
      },
      {
         "City": " Chhibrāmau"
      },
      {
         "City": " Chhatarpur"
      },
      {
         "City": " Chhātāpur"
      },
      {
         "City": " Chhāta"
      },
      {
         "City": " Chharra"
      },
      {
         "City": " Chhaprauli"
      },
      {
         "City": " Chāpra"
      },
      {
         "City": " Chhāpar"
      },
      {
         "City": " Chhala"
      },
      {
         "City": " Chhabra"
      },
      {
         "City": " Chettipālaiyam"
      },
      {
         "City": " Chetput"
      },
      {
         "City": " Chennimalai"
      },
      {
         "City": " Chengannūr"
      },
      {
         "City": " Chengam"
      },
      {
         "City": " Chengalpattu"
      },
      {
         "City": " Chāvakkād"
      },
      {
         "City": " Chaksu"
      },
      {
         "City": " Chatrapur"
      },
      {
         "City": " Chatra"
      },
      {
         "City": " Chās"
      },
      {
         "City": " Charthāwal"
      },
      {
         "City": " Charkhi Dādri"
      },
      {
         "City": " Charkhāri"
      },
      {
         "City": " Chāpar"
      },
      {
         "City": " Channarāyapatna"
      },
      {
         "City": " Channapatna"
      },
      {
         "City": " Channagiri"
      },
      {
         "City": " Changanācheri"
      },
      {
         "City": " Chāndor"
      },
      {
         "City": " Chāndūr Bāzār"
      },
      {
         "City": " Chāndūr"
      },
      {
         "City": " Chāndur"
      },
      {
         "City": " Chānda"
      },
      {
         "City": " Chandrakona"
      },
      {
         "City": " Chāndpur"
      },
      {
         "City": " Chandigarh"
      },
      {
         "City": " Chanderi"
      },
      {
         "City": " Chanduasi"
      },
      {
         "City": " Chandauli"
      },
      {
         "City": " Chandannagar"
      },
      {
         "City": " Chānasma"
      },
      {
         "City": " Chamrajnagar"
      },
      {
         "City": " Chāmpa"
      },
      {
         "City": " Chamba"
      },
      {
         "City": " Challapalle"
      },
      {
         "City": " Challakere"
      },
      {
         "City": " Chālisgaon"
      },
      {
         "City": " Chalāla"
      },
      {
         "City": " Chakradharpur"
      },
      {
         "City": " Chaklāsi"
      },
      {
         "City": " Chākia"
      },
      {
         "City": " Chākan"
      },
      {
         "City": " Chāībāsa"
      },
      {
         "City": " Canning"
      },
      {
         "City": " Cannanore"
      },
      {
         "City": " Kolkata"
      },
      {
         "City": " Byādgi"
      },
      {
         "City": " Buxar"
      },
      {
         "City": " Burla"
      },
      {
         "City": " Burhar"
      },
      {
         "City": " Burhānpur"
      },
      {
         "City": " Būndu"
      },
      {
         "City": " Būndi"
      },
      {
         "City": " Buldāna"
      },
      {
         "City": " Bulandshahr"
      },
      {
         "City": " Budhlāda"
      },
      {
         "City": " Budhāna"
      },
      {
         "City": " Budaun"
      },
      {
         "City": " Brājarājnagar"
      },
      {
         "City": " Brahmapur"
      },
      {
         "City": " Botād"
      },
      {
         "City": " Borsad"
      },
      {
         "City": " Borivli"
      },
      {
         "City": " Bongaigaon"
      },
      {
         "City": " Mumbai"
      },
      {
         "City": " Bolpur"
      },
      {
         "City": " Bokāro"
      },
      {
         "City": " Bokajān"
      },
      {
         "City": " Boisar"
      },
      {
         "City": " Bodināyakkanūr"
      },
      {
         "City": " Buddh Gaya"
      },
      {
         "City": " Bodhan"
      },
      {
         "City": " Bobbili"
      },
      {
         "City": " Biswān"
      },
      {
         "City": " Bissāu"
      },
      {
         "City": " Bishnupur"
      },
      {
         "City": " Bisauli"
      },
      {
         "City": " Bīsalpur"
      },
      {
         "City": " Birūr"
      },
      {
         "City": " Bīrpur"
      },
      {
         "City": " Birmitrapur"
      },
      {
         "City": " Binka"
      },
      {
         "City": " Bindki"
      },
      {
         "City": " Etāwa"
      },
      {
         "City": " Bilthra"
      },
      {
         "City": " Bilsi"
      },
      {
         "City": " Bilsanda"
      },
      {
         "City": " Bilimora"
      },
      {
         "City": " Bilhaur"
      },
      {
         "City": " Bilgrām"
      },
      {
         "City": " Bilgi"
      },
      {
         "City": " Bīlāspur"
      },
      {
         "City": " Bilāspur"
      },
      {
         "City": " Bilāsipāra"
      },
      {
         "City": " Bilāri"
      },
      {
         "City": " Bilāra"
      },
      {
         "City": " Bikramganj"
      },
      {
         "City": " Bīkaner"
      },
      {
         "City": " Bijnor"
      },
      {
         "City": " Bijbiāra"
      },
      {
         "City": " Bijāwar"
      },
      {
         "City": " Bijapur"
      },
      {
         "City": " Bihār"
      },
      {
         "City": " Bihārīganj"
      },
      {
         "City": " Bidhūna"
      },
      {
         "City": " Bīdar"
      },
      {
         "City": " Biaora"
      },
      {
         "City": " Bhuvanagiri"
      },
      {
         "City": " Bhusāval"
      },
      {
         "City": " Bhūm"
      },
      {
         "City": " Bhuj"
      },
      {
         "City": " Bhudgaon"
      },
      {
         "City": " Bhubaneshwar"
      },
      {
         "City": " Bhuban"
      },
      {
         "City": " Bhor"
      },
      {
         "City": " Bhopal"
      },
      {
         "City": " Bhongīr"
      },
      {
         "City": " Bhongaon"
      },
      {
         "City": " Bhogpur"
      },
      {
         "City": " Bhiwāni"
      },
      {
         "City": " Bhiwandi"
      },
      {
         "City": " Bhitarwār"
      },
      {
         "City": " Bhīnmāl"
      },
      {
         "City": " Bhinga"
      },
      {
         "City": " Bhindār"
      },
      {
         "City": " Bhind"
      },
      {
         "City": " Bhīmunipatnam"
      },
      {
         "City": " Bhīmavaram"
      },
      {
         "City": " Bhīlwāra"
      },
      {
         "City": " Bhilai"
      },
      {
         "City": " Bhīkhi"
      },
      {
         "City": " Bhikangaon"
      },
      {
         "City": " Bhāyāvadar"
      },
      {
         "City": " Bhayandar"
      },
      {
         "City": " Bhawānipatna"
      },
      {
         "City": " Bhawānīgarh"
      },
      {
         "City": " Bhawāniganj"
      },
      {
         "City": " Bhāvnagar"
      },
      {
         "City": " Bhavāni"
      },
      {
         "City": " Bhattiprolu"
      },
      {
         "City": " Bhātpāra"
      },
      {
         "City": " Bhatkal"
      },
      {
         "City": " Bhatinda"
      },
      {
         "City": " Bhātāpāra"
      },
      {
         "City": " Bhasāwar"
      },
      {
         "City": " Bharwāri"
      },
      {
         "City": " Bharūch"
      },
      {
         "City": " Bharthana"
      },
      {
         "City": " Bharatpur"
      },
      {
         "City": " Bhānvad"
      },
      {
         "City": " Bhānpurī"
      },
      {
         "City": " Bhānpura"
      },
      {
         "City": " Bhanjanagar"
      },
      {
         "City": " Bhānder"
      },
      {
         "City": " Bhandāra"
      },
      {
         "City": " Bhālki"
      },
      {
         "City": " Bhaisa"
      },
      {
         "City": " Bhainsdehi"
      },
      {
         "City": " Bhāgalpur"
      },
      {
         "City": " Bhadreswar"
      },
      {
         "City": " Bhadrāvati"
      },
      {
         "City": " Bhadrakh"
      },
      {
         "City": " Bhadrāchalam"
      },
      {
         "City": " Bhādra"
      },
      {
         "City": " Bhadohi"
      },
      {
         "City": " Bhadaur"
      },
      {
         "City": " Bhādāsar"
      },
      {
         "City": " Bhachāu"
      },
      {
         "City": " Bhabhua"
      },
      {
         "City": " Beypore"
      },
      {
         "City": " Bewar"
      },
      {
         "City": " Betūl"
      },
      {
         "City": " Bettiah"
      },
      {
         "City": " Betamcherla"
      },
      {
         "City": " Beri Khās"
      },
      {
         "City": " Berasia"
      },
      {
         "City": " Beohāri"
      },
      {
         "City": " Bemetāra"
      },
      {
         "City": " Belūr"
      },
      {
         "City": " Belsand"
      },
      {
         "City": " Belonia"
      },
      {
         "City": " Bellary"
      },
      {
         "City": " Belgaum"
      },
      {
         "City": " Beldānga"
      },
      {
         "City": " Bela"
      },
      {
         "City": " Behror"
      },
      {
         "City": " Behat"
      },
      {
         "City": " Begusarai"
      },
      {
         "City": " Begūn"
      },
      {
         "City": " Begamganj"
      },
      {
         "City": " Bedi"
      },
      {
         "City": " Beāwar"
      },
      {
         "City": " Bāzpur"
      },
      {
         "City": " Bayāna"
      },
      {
         "City": " Bawāna"
      },
      {
         "City": " Bauda"
      },
      {
         "City": " Batāla"
      },
      {
         "City": " Baswa"
      },
      {
         "City": " Bāsudebpur"
      },
      {
         "City": " Bastī"
      },
      {
         "City": " Bāsoda"
      },
      {
         "City": " Basni"
      },
      {
         "City": " Basmat"
      },
      {
         "City": " Basi"
      },
      {
         "City": " Basi"
      },
      {
         "City": " Basi"
      },
      {
         "City": " Basavana Bāgevādi"
      },
      {
         "City": " Basavakalyān"
      },
      {
         "City": " Barwāni"
      },
      {
         "City": " Barwāla"
      },
      {
         "City": " Bāruni"
      },
      {
         "City": " Bāruipur"
      },
      {
         "City": " Bārsi"
      },
      {
         "City": " Barpeta"
      },
      {
         "City": " Barpāli"
      },
      {
         "City": " Barnāla"
      },
      {
         "City": " Bārmer"
      },
      {
         "City": " Barki Saria"
      },
      {
         "City": " Barka Kāna"
      },
      {
         "City": " Barjala"
      },
      {
         "City": " Bari Sādri"
      },
      {
         "City": " Bāri"
      },
      {
         "City": " Barhiya"
      },
      {
         "City": " Bārh"
      },
      {
         "City": " Bargi"
      },
      {
         "City": " Bargarh"
      },
      {
         "City": " Bareilly"
      },
      {
         "City": " Bārdoli"
      },
      {
         "City": " Barddhamān"
      },
      {
         "City": " Bar Bigha"
      },
      {
         "City": " Baraut"
      },
      {
         "City": " Barauli"
      },
      {
         "City": " Bārāsat"
      },
      {
         "City": " Bārāsat"
      },
      {
         "City": " Baranagar"
      },
      {
         "City": " Bārān"
      },
      {
         "City": " Bāramūla"
      },
      {
         "City": " Bārāmati"
      },
      {
         "City": " Bārākpur"
      },
      {
         "City": " Bāpatla"
      },
      {
         "City": " Banūr"
      },
      {
         "City": " Bantvāl"
      },
      {
         "City": " Bāntva"
      },
      {
         "City": " Bānswāra"
      },
      {
         "City": " Bānswāda"
      },
      {
         "City": " Bānsi"
      },
      {
         "City": " Bānsdīh"
      },
      {
         "City": " Bānsbāria"
      },
      {
         "City": " Bannūr"
      },
      {
         "City": " Banmankhi"
      },
      {
         "City": " Bānkura"
      },
      {
         "City": " Bānki"
      },
      {
         "City": " Bānka"
      },
      {
         "City": " Bāngarmau"
      },
      {
         "City": " Bangārapet"
      },
      {
         "City": " Bangaon"
      },
      {
         "City": " Bangaon"
      },
      {
         "City": " Banganapalle"
      },
      {
         "City": " Bengaluru"
      },
      {
         "City": " Banga"
      },
      {
         "City": " Bandipura"
      },
      {
         "City": " Bāndīkūi"
      },
      {
         "City": " Bānda"
      },
      {
         "City": " Banda"
      },
      {
         "City": " Banat"
      },
      {
         "City": " Bānapur"
      },
      {
         "City": " Bāmor Kalān"
      },
      {
         "City": " Bālurghāt"
      },
      {
         "City": " Bālugaon"
      },
      {
         "City": " Balrāmpur"
      },
      {
         "City": " Bālotra"
      },
      {
         "City": " Baloda Bāzār"
      },
      {
         "City": " Balod"
      },
      {
         "City": " Bāli"
      },
      {
         "City": " Ballālpur"
      },
      {
         "City": " Bāli"
      },
      {
         "City": " Balasore"
      },
      {
         "City": " Balarāmpur"
      },
      {
         "City": " Bālāpur"
      },
      {
         "City": " Balāngīr"
      },
      {
         "City": " Bālāghāt"
      },
      {
         "City": " Bālāchor"
      },
      {
         "City": " Bakhtiyārpur"
      },
      {
         "City": " Baj Baj"
      },
      {
         "City": " Bairāgnia"
      },
      {
         "City": " Byndoor"
      },
      {
         "City": " Bail-Hongal"
      },
      {
         "City": " Baihar"
      },
      {
         "City": " Baidyabāti"
      },
      {
         "City": " Bahraigh"
      },
      {
         "City": " Bahjoi"
      },
      {
         "City": " Baheri"
      },
      {
         "City": " Baharampur"
      },
      {
         "City": " Bahādurgarh"
      },
      {
         "City": " Bahādurganj"
      },
      {
         "City": " Bāh"
      },
      {
         "City": " Bagulā"
      },
      {
         "City": " Bāghpat"
      },
      {
         "City": " Bāghdogra"
      },
      {
         "City": " Bāgha Purāna"
      },
      {
         "City": " Bāgepalli"
      },
      {
         "City": " Bagasra"
      },
      {
         "City": " Bagar"
      },
      {
         "City": " Bagalkot"
      },
      {
         "City": " Bagaha"
      },
      {
         "City": " Bagaha"
      },
      {
         "City": " Badvel"
      },
      {
         "City": " Badūria"
      },
      {
         "City": " Badnāwar"
      },
      {
         "City": " Badlapur"
      },
      {
         "City": " Bādāmi"
      },
      {
         "City": " Badagara"
      },
      {
         "City": " Bada Barabīl"
      },
      {
         "City": " Bachhraon"
      },
      {
         "City": " Babrāla"
      },
      {
         "City": " Bābra"
      },
      {
         "City": " Babīna"
      },
      {
         "City": " Baberu"
      },
      {
         "City": " Bābai"
      },
      {
         "City": " Azamgarh"
      },
      {
         "City": " Ajodhya"
      },
      {
         "City": " Ayakudi"
      },
      {
         "City": " Avanigadda"
      },
      {
         "City": " Avinashi"
      },
      {
         "City": " Āvadi"
      },
      {
         "City": " Ausa"
      },
      {
         "City": " Aurangābād"
      },
      {
         "City": " Aurangabad"
      },
      {
         "City": " Auraiya"
      },
      {
         "City": " Aurād"
      },
      {
         "City": " Attur"
      },
      {
         "City": " Attingal"
      },
      {
         "City": " Attili"
      },
      {
         "City": " Atraulī"
      },
      {
         "City": " Atmakūr"
      },
      {
         "City": " Adirampattinam"
      },
      {
         "City": " Athni"
      },
      {
         "City": " Āthagarh"
      },
      {
         "City": " Atarra"
      },
      {
         "City": " Āsind"
      },
      {
         "City": " Āsika"
      },
      {
         "City": " Asifābād"
      },
      {
         "City": " Ashta"
      },
      {
         "City": " Ashta"
      },
      {
         "City": " Ashoknagar"
      },
      {
         "City": " Āsansol"
      },
      {
         "City": " Āsandh"
      },
      {
         "City": " Ārvi"
      },
      {
         "City": " Aruppukkottai"
      },
      {
         "City": " Arumuganeri"
      },
      {
         "City": " Arukutti"
      },
      {
         "City": " Arsikere"
      },
      {
         "City": " Āron"
      },
      {
         "City": " Arkalgūd"
      },
      {
         "City": " Ariyalūr"
      },
      {
         "City": " Arcot"
      },
      {
         "City": " Arāria"
      },
      {
         "City": " Arantāngi"
      },
      {
         "City": " Ārani"
      },
      {
         "City": " Ārangaon"
      },
      {
         "City": " Arang"
      },
      {
         "City": " Arāmbāgh"
      },
      {
         "City": " Arakkonam"
      },
      {
         "City": " Arrah"
      },
      {
         "City": " Aonla"
      },
      {
         "City": " Anūpshahr"
      },
      {
         "City": " Anūppur"
      },
      {
         "City": " Anūpgarh"
      },
      {
         "City": " Anta"
      },
      {
         "City": " Anshing"
      },
      {
         "City": " Annur"
      },
      {
         "City": " Annigeri"
      },
      {
         "City": " Ankleshwar"
      },
      {
         "City": " Anjār"
      },
      {
         "City": " Anjangaon"
      },
      {
         "City": " Anjad"
      },
      {
         "City": " Angul"
      },
      {
         "City": " Angamāli"
      },
      {
         "City": " Anekal"
      },
      {
         "City": " Andol"
      },
      {
         "City": " Anthiyur"
      },
      {
         "City": " Āndippatti"
      },
      {
         "City": " Anantnag"
      },
      {
         "City": " Anantapur"
      },
      {
         "City": " Anandpur"
      },
      {
         "City": " Ānand"
      },
      {
         "City": " Anakāpalle"
      },
      {
         "City": " Anaimalai"
      },
      {
         "City": " Amudālavalasa"
      },
      {
         "City": " Āmta"
      },
      {
         "City": " Amroli"
      },
      {
         "City": " Amroha"
      },
      {
         "City": " Amritsar"
      },
      {
         "City": " Amreli"
      },
      {
         "City": " Amrāvati"
      },
      {
         "City": " Amod"
      },
      {
         "City": " Āmli"
      },
      {
         "City": " Āmlāgora"
      },
      {
         "City": " Amla"
      },
      {
         "City": " Amet"
      },
      {
         "City": " Ambur"
      },
      {
         "City": " Ambikāpur"
      },
      {
         "City": " Ambattūr"
      },
      {
         "City": " Ambasamudram"
      },
      {
         "City": " Ambāla"
      },
      {
         "City": " Ambājogāi"
      },
      {
         "City": " Ambāh"
      },
      {
         "City": " Ambad"
      },
      {
         "City": " Amarpur"
      },
      {
         "City": " Amarpātan"
      },
      {
         "City": " Amarnāth"
      },
      {
         "City": " Amalner"
      },
      {
         "City": " Amalāpuram"
      },
      {
         "City": " Aluva"
      },
      {
         "City": " Alwar"
      },
      {
         "City": " Alot"
      },
      {
         "City": " Along"
      },
      {
         "City": " Alnāvar"
      },
      {
         "City": " Almora"
      },
      {
         "City": " Alleppey"
      },
      {
         "City": " Allahābād"
      },
      {
         "City": " Alīpur"
      },
      {
         "City": " Alīgarh"
      },
      {
         "City": " Alīganj"
      },
      {
         "City": " Alībāg"
      },
      {
         "City": " Ālangulam"
      },
      {
         "City": " Ālangāyam"
      },
      {
         "City": " Alandur"
      },
      {
         "City": " Alandi"
      },
      {
         "City": " Aland"
      },
      {
         "City": " Akot"
      },
      {
         "City": " Akola"
      },
      {
         "City": " Aklera"
      },
      {
         "City": " Akivīdu"
      },
      {
         "City": " Akbarpur"
      },
      {
         "City": " Akbarpur"
      },
      {
         "City": " Akaltara"
      },
      {
         "City": " Akalkot"
      },
      {
         "City": " Ajra"
      },
      {
         "City": " Ajnāla"
      },
      {
         "City": " Ajmer"
      },
      {
         "City": " Aizawl"
      },
      {
         "City": " Ahraura"
      },
      {
         "City": " Ahmadpur"
      },
      {
         "City": " Ahmadnagar"
      },
      {
         "City": " Ahmedabad"
      },
      {
         "City": " Āgra"
      },
      {
         "City": " Agartala"
      },
      {
         "City": " Agar"
      },
      {
         "City": " Afzalpur"
      },
      {
         "City": " Afzalgarh"
      },
      {
         "City": " Adūr"
      },
      {
         "City": " Adra"
      },
      {
         "City": " Ādoni"
      },
      {
         "City": " Ādilābād"
      },
      {
         "City": " Addanki"
      },
      {
         "City": " Achhnera"
      },
      {
         "City": " Achalpur"
      },
      {
         "City": " Ābu Road"
      },
      {
         "City": " Ābu"
      },
      {
         "City": " Abohar"
      },
      {
         "City": " Abhayāpuri"
      },
      {
         "City": " Contai"
      },
      {
         "City": " Haldia"
      },
      {
         "City": " Srirāmpur"
      },
      {
         "City": " Dumjor"
      },
      {
         "City": " Bankra"
      },
      {
         "City": " Chakapara"
      },
      {
         "City": " Mahiari"
      },
      {
         "City": " Dhulagari"
      },
      {
         "City": " Pānchla"
      },
      {
         "City": " Nangi"
      },
      {
         "City": " Pujali"
      },
      {
         "City": " Monoharpur"
      },
      {
         "City": " Nabagrām"
      },
      {
         "City": " Soyībug"
      },
      {
         "City": " Singāpur"
      },
      {
         "City": " Ghatkesar"
      },
      {
         "City": " Vijayapura"
      },
      {
         "City": " Ādampur"
      },
      {
         "City": " Porur"
      },
      {
         "City": " Madipakkam"
      },
      {
         "City": " Perungudi"
      },
      {
         "City": " Madambakkam"
      },
      {
         "City": " Powai"
      },
      {
         "City": " Navi Mumbai"
      },
      {
         "City": " Murudeshwara"
      },
      {
         "City": " Shivaji Nagar"
      },
      {
         "City": " Greater Noida"
      },
      {
         "City": " Mohali"
      },
      {
         "City": " Pithampur"
      },
      {
         "City": " Barbil"
      },
      {
         "City": " Airoli"
      },
      {
         "City": " Aluva"
      },
      {
         "City": " Kotkapura"
      },
      {
         "City": " Muvattupuzha"
      },
      {
         "City": " Perumbavoor"
      },
      {
         "City": " Vapi"
      },
      {
         "City": " Baddi"
      },
      {
         "City": " Noida"
      },
      {
         "City": " Bhiwadi"
      },
      {
         "City": " Mandideep"
      },
      {
         "City": " Singrauli"
      },
      {
         "City": " Birpara"
      },
      {
         "City": " Jaigaon"
      },
      {
         "City": " Akkarampalle"
      },
      {
         "City": " Bellampalli"
      },
      {
         "City": " Chemmumiahpet"
      },
      {
         "City": " Gaddi Annaram"
      },
      {
         "City": " Dasnapur"
      },
      {
         "City": " Kanuru"
      },
      {
         "City": " Lal Bahadur Nagar"
      },
      {
         "City": " Malkajgiri"
      },
      {
         "City": " Mandamarri"
      },
      {
         "City": " Chinnachowk"
      },
      {
         "City": " Kyathampalle"
      },
      {
         "City": " Gajuwaka"
      },
      {
         "City": " Manuguru"
      },
      {
         "City": " Kalyandurg"
      },
      {
         "City": " Ponnur"
      },
      {
         "City": " Quthbullapur"
      },
      {
         "City": " Ramanayyapeta"
      },
      {
         "City": " Palwancha"
      },
      {
         "City": " Barpeta Road"
      },
      {
         "City": " Sathupalli"
      },
      {
         "City": " Yanamalakuduru"
      },
      {
         "City": " Marigaon"
      },
      {
         "City": " Naharlagun"
      },
      {
         "City": " Serilingampalle"
      },
      {
         "City": " Silapathar"
      },
      {
         "City": " Lumding Railway Colony"
      },
      {
         "City": " Aistala"
      },
      {
         "City": " Ashoknagar Kalyangarh"
      },
      {
         "City": " Bahula"
      },
      {
         "City": " Bhawanipur"
      },
      {
         "City": " Zira"
      },
      {
         "City": " Ramagundam"
      },
      {
         "City": " Cherpulassery"
      },
      {
         "City": " Kirandul"
      },
      {
         "City": " Shiraguppi"
      },
      {
         "City": " V.S.K.Valasai (Dindigul-Dist.)"
      },
      {
         "City": " Neelankarai"
      },
      {
         "City": " Injambakkam"
      },
      {
         "City": " Kultali"
      },
      {
         "City": " Shahbazpur"
      },
      {
         "City": " Kumbalam"
      },
      {
         "City": " Aroor"
      },
      {
         "City": " Kadakkavoor"
      },
      {
         "City": " Kalavoor"
      },
      {
         "City": " Kalamassery"
      },
      {
         "City": " Cherthala"
      }
   ],
   "Iraq": [
      {
         "City": " Zaxo"
      },
      {
         "City": " Umm Qaşr"
      },
      {
         "City": " Tozkhurmato"
      },
      {
         "City": " Tikrīt"
      },
      {
         "City": " Tallkayf"
      },
      {
         "City": " Sīnah"
      },
      {
         "City": " Sāmarrā’"
      },
      {
         "City": " Nāḩīyat Saddat al Hindīyah"
      },
      {
         "City": " Ruwāndiz"
      },
      {
         "City": " Rāwah"
      },
      {
         "City": " Al-Hamdaniya"
      },
      {
         "City": " Mandalī"
      },
      {
         "City": " Koysinceq"
      },
      {
         "City": " Kifrī"
      },
      {
         "City": " Kirkuk"
      },
      {
         "City": " Karbala"
      },
      {
         "City": " Erbil"
      },
      {
         "City": " Hīt"
      },
      {
         "City": " Ḩalabjah"
      },
      {
         "City": " Ḩadīthah"
      },
      {
         "City": " Dihok"
      },
      {
         "City": " Jamjamāl"
      },
      {
         "City": " Bayjī"
      },
      {
         "City": " Baqubah"
      },
      {
         "City": " Baynjiwayn"
      },
      {
         "City": " Balad"
      },
      {
         "City": " Baghdad"
      },
      {
         "City": " Az Zubayr"
      },
      {
         "City": " Aş Şuwayrah"
      },
      {
         "City": " As Sulaymānīyah"
      },
      {
         "City": " As Samawah"
      },
      {
         "City": " Nāḩiyat ash Shināfīyah"
      },
      {
         "City": " Ash Shaţrah"
      },
      {
         "City": " Ash Shāmīyah"
      },
      {
         "City": " Ar Ruţbah"
      },
      {
         "City": " Ar Rumaythah"
      },
      {
         "City": " Ramadi"
      },
      {
         "City": " ‘Aqrah"
      },
      {
         "City": " An Nāşirīyah"
      },
      {
         "City": " Najaf"
      },
      {
         "City": " ‘Anat al Qadīmah"
      },
      {
         "City": " Imam Qasim"
      },
      {
         "City": " Al Musayyib"
      },
      {
         "City": " Al Mishkhāb"
      },
      {
         "City": " Al Miqdādīyah"
      },
      {
         "City": " Al Mawşil al Jadīdah"
      },
      {
         "City": " Mosul"
      },
      {
         "City": " Al Kūt"
      },
      {
         "City": " Kufa"
      },
      {
         "City": " Khāliş"
      },
      {
         "City": " ‘Alī al Gharbī"
      },
      {
         "City": " Al Hindīyah"
      },
      {
         "City": " Al Ḩillah"
      },
      {
         "City": " Al Ḩayy"
      },
      {
         "City": " Al Hārithah"
      },
      {
         "City": " Nahiyat Ghammas"
      },
      {
         "City": " Nāḩiyat al Fuhūd"
      },
      {
         "City": " Al Fāw"
      },
      {
         "City": " Al Fallūjah"
      },
      {
         "City": " Basrah"
      },
      {
         "City": " Al ‘Azīzīyah"
      },
      {
         "City": " Al ‘Amārah"
      },
      {
         "City": " ‘Afak"
      },
      {
         "City": " Ad Dujayl"
      },
      {
         "City": " Ad Dīwānīyah"
      },
      {
         "City": " Abū Ghurayb"
      },
      {
         "City": " Al Başrah al Qadīmah"
      },
      {
         "City": " Sinjār"
      }
   ],
   "Iran": [
      {
         "City": " Āzādshahr"
      },
      {
         "City": " Kahrīz"
      },
      {
         "City": " Nūrābād"
      },
      {
         "City": " Īstgāh-e Rāh Āhan-e Garmsār"
      },
      {
         "City": " Qarchak"
      },
      {
         "City": " Shahre Jadide Andisheh"
      },
      {
         "City": " Khorramdarreh"
      },
      {
         "City": " Yasuj"
      },
      {
         "City": " Āzādshahr"
      },
      {
         "City": " Zarand"
      },
      {
         "City": " Zanjān"
      },
      {
         "City": " Yazd"
      },
      {
         "City": " Varāmīn"
      },
      {
         "City": " Torbat-e Ḩeydarīyeh"
      },
      {
         "City": " Tonekābon"
      },
      {
         "City": " Tehran"
      },
      {
         "City": " Hashtpar"
      },
      {
         "City": " Tākestān"
      },
      {
         "City": " Takāb"
      },
      {
         "City": " Taft"
      },
      {
         "City": " Tabriz"
      },
      {
         "City": " Tabas"
      },
      {
         "City": " Sonqor"
      },
      {
         "City": " Sirjan"
      },
      {
         "City": " Shūshtar"
      },
      {
         "City": " Shūsh"
      },
      {
         "City": " Shīrvān"
      },
      {
         "City": " Shiraz"
      },
      {
         "City": " Shahr-e Kord"
      },
      {
         "City": " Shahr-e Bābak"
      },
      {
         "City": " Shādegān"
      },
      {
         "City": " Semnān"
      },
      {
         "City": " Semīrom"
      },
      {
         "City": " Sāveh"
      },
      {
         "City": " Sari"
      },
      {
         "City": " Saqqez"
      },
      {
         "City": " Sanandaj"
      },
      {
         "City": " Salmās"
      },
      {
         "City": " Shāhīn Dezh"
      },
      {
         "City": " Sabzevar"
      },
      {
         "City": " Rūdsar"
      },
      {
         "City": " Robāţ Karīm"
      },
      {
         "City": " Rāvar"
      },
      {
         "City": " Rasht"
      },
      {
         "City": " Rāmshīr"
      },
      {
         "City": " Rāmhormoz"
      },
      {
         "City": " Rafsanjān"
      },
      {
         "City": " Qūchān"
      },
      {
         "City": " Qorveh"
      },
      {
         "City": " Qom"
      },
      {
         "City": " Qeshm"
      },
      {
         "City": " Qazvin"
      },
      {
         "City": " Qarah Ẕīā’ od Dīn"
      },
      {
         "City": " Farrokh Shahr"
      },
      {
         "City": " Qā’en"
      },
      {
         "City": " Sarpol-e Z̄ahāb"
      },
      {
         "City": " Pīshvā"
      },
      {
         "City": " Piranshahr"
      },
      {
         "City": " Pāveh"
      },
      {
         "City": " Pārsābād"
      },
      {
         "City": " Oshnavīyeh"
      },
      {
         "City": " Orūmīyeh"
      },
      {
         "City": " Omīdīyeh"
      },
      {
         "City": " Nūrābād"
      },
      {
         "City": " Nowshahr"
      },
      {
         "City": " Nīshābūr"
      },
      {
         "City": " Neyrīz"
      },
      {
         "City": " Nekā"
      },
      {
         "City": " Naz̧arābād"
      },
      {
         "City": " Naqadeh"
      },
      {
         "City": " Nahāvand"
      },
      {
         "City": " Mīnāb"
      },
      {
         "City": " Mīāndoāb"
      },
      {
         "City": " Meybod"
      },
      {
         "City": " Mahrīz"
      },
      {
         "City": " Masjed Soleymān"
      },
      {
         "City": " Bardsīr"
      },
      {
         "City": " Mashhad"
      },
      {
         "City": " Marand"
      },
      {
         "City": " Malāyer"
      },
      {
         "City": " Malārd"
      },
      {
         "City": " Mahābād"
      },
      {
         "City": " Langarūd"
      },
      {
         "City": " Kūhdasht"
      },
      {
         "City": " Kīsh"
      },
      {
         "City": " Khvoy"
      },
      {
         "City": " Khvānsār"
      },
      {
         "City": " Khorramshahr"
      },
      {
         "City": " Khorramabad"
      },
      {
         "City": " Khomeyn"
      },
      {
         "City": " Khalkhāl"
      },
      {
         "City": " Kermānshāh"
      },
      {
         "City": " Kerman"
      },
      {
         "City": " Kāzerūn"
      },
      {
         "City": " Kāshmar"
      },
      {
         "City": " Kāshān"
      },
      {
         "City": " Karaj"
      },
      {
         "City": " Kangāvar"
      },
      {
         "City": " Kāmyārān"
      },
      {
         "City": " Kalāleh"
      },
      {
         "City": " Jūybār"
      },
      {
         "City": " Javānrūd"
      },
      {
         "City": " Īlām"
      },
      {
         "City": " Harsīn"
      },
      {
         "City": " Hamadān"
      },
      {
         "City": " Gorgān"
      },
      {
         "City": " Gonbad-e Kāvūs"
      },
      {
         "City": " Gonābād"
      },
      {
         "City": " Golpāyegān"
      },
      {
         "City": " Gerāsh"
      },
      {
         "City": " Bandar-e Ganāveh"
      },
      {
         "City": " Fūman"
      },
      {
         "City": " Fīrūzābād"
      },
      {
         "City": " Fereydūnkenār"
      },
      {
         "City": " Fasā"
      },
      {
         "City": " Fārsān"
      },
      {
         "City": " Esfarāyen"
      },
      {
         "City": " Shahrud"
      },
      {
         "City": " Dogonbadan"
      },
      {
         "City": " Delījān"
      },
      {
         "City": " Dehlorān"
      },
      {
         "City": " Dehdasht"
      },
      {
         "City": " Sūsangerd"
      },
      {
         "City": " Darreh Shahr"
      },
      {
         "City": " Dārāb"
      },
      {
         "City": " Dāmghān"
      },
      {
         "City": " Damāvand"
      },
      {
         "City": " Chenārān"
      },
      {
         "City": " Chālūs"
      },
      {
         "City": " Bandar-e Būshehr"
      },
      {
         "City": " Būkān"
      },
      {
         "City": " Borūjerd"
      },
      {
         "City": " Borūjen"
      },
      {
         "City": " Borāzjān"
      },
      {
         "City": " Bojnūrd"
      },
      {
         "City": " Bīrjand"
      },
      {
         "City": " Bījār"
      },
      {
         "City": " Bonāb"
      },
      {
         "City": " Behshahr"
      },
      {
         "City": " Behbahān"
      },
      {
         "City": " Bāneh"
      },
      {
         "City": " Bandar-e Lengeh"
      },
      {
         "City": " Bandar-e Anzalī"
      },
      {
         "City": " Bandar ‘Abbās"
      },
      {
         "City": " Bam"
      },
      {
         "City": " Bahār"
      },
      {
         "City": " Bāfq"
      },
      {
         "City": " Bābolsar"
      },
      {
         "City": " Bābol"
      },
      {
         "City": " Aznā"
      },
      {
         "City": " Hashtrūd"
      },
      {
         "City": " Āstārā"
      },
      {
         "City": " Āstāneh-ye Ashrafīyeh"
      },
      {
         "City": " Asadābād"
      },
      {
         "City": " Ardestān"
      },
      {
         "City": " Ardakān"
      },
      {
         "City": " Ardabīl"
      },
      {
         "City": " Arāk"
      },
      {
         "City": " Āmol"
      },
      {
         "City": " Alvand"
      },
      {
         "City": " Shahrīār"
      },
      {
         "City": " Alīgūdarz"
      },
      {
         "City": " Aleshtar"
      },
      {
         "City": " Akbarābād"
      },
      {
         "City": " ‘Ajab Shīr"
      },
      {
         "City": " Ahvaz"
      },
      {
         "City": " Ahar"
      },
      {
         "City": " Aghajari"
      },
      {
         "City": " Ābyek"
      },
      {
         "City": " Abhar"
      },
      {
         "City": " Ābdānān"
      },
      {
         "City": " Ābādeh"
      },
      {
         "City": " Abadan"
      },
      {
         "City": " Eqbālīyeh"
      },
      {
         "City": " Shāhreẕā"
      },
      {
         "City": " Rehnān"
      },
      {
         "City": " Qahderījān"
      },
      {
         "City": " Najafābād"
      },
      {
         "City": " Khomeynī Shahr"
      },
      {
         "City": " Kelīshād va Sūdarjān"
      },
      {
         "City": " Falāvarjān"
      },
      {
         "City": " Isfahan"
      },
      {
         "City": " Dowlatābād"
      },
      {
         "City": " Dorcheh Pīāz"
      },
      {
         "City": " Zābol"
      },
      {
         "City": " Zahedan"
      },
      {
         "City": " Torbat-e Jām"
      },
      {
         "City": " Tāybād"
      },
      {
         "City": " Sarakhs"
      },
      {
         "City": " Qaşr-e Qand"
      },
      {
         "City": " Khāsh"
      },
      {
         "City": " Īrānshahr"
      },
      {
         "City": " Chabahar"
      },
      {
         "City": " Mahdishahr"
      },
      {
         "City": " Pasragad Branch"
      }
   ],
   "Iceland": [
      {
         "City": " Akureyri"
      },
      {
         "City": " Reykjavík"
      },
      {
         "City": " Kópavogur"
      },
      {
         "City": " Hafnarfjörður"
      }
   ],
   "Italy": [
      {
         "City": " Vittoria"
      },
      {
         "City": " Villabate"
      },
      {
         "City": " Vibo Valentia"
      },
      {
         "City": " Trapani"
      },
      {
         "City": " Termini Imerese"
      },
      {
         "City": " Siracusa"
      },
      {
         "City": " Sinnai"
      },
      {
         "City": " Siderno"
      },
      {
         "City": " Sestu"
      },
      {
         "City": " Selargius"
      },
      {
         "City": " Scordia"
      },
      {
         "City": " Scicli"
      },
      {
         "City": " Sciacca"
      },
      {
         "City": " San Giovanni la Punta"
      },
      {
         "City": " San Giovanni in Fiore"
      },
      {
         "City": " San Cataldo"
      },
      {
         "City": " Rossano Stazione"
      },
      {
         "City": " Rosolini"
      },
      {
         "City": " Ribera"
      },
      {
         "City": " Reggio Calabria"
      },
      {
         "City": " Ragusa"
      },
      {
         "City": " Quattromiglia"
      },
      {
         "City": " Quartu Sant'Elena"
      },
      {
         "City": " Pozzallo"
      },
      {
         "City": " Porto Empedocle"
      },
      {
         "City": " Piazza Armerina"
      },
      {
         "City": " Paternò"
      },
      {
         "City": " Partinico"
      },
      {
         "City": " Palmi"
      },
      {
         "City": " Palma di Montechiaro"
      },
      {
         "City": " Palermo"
      },
      {
         "City": " Palagonia"
      },
      {
         "City": " Pachino"
      },
      {
         "City": " Oristano"
      },
      {
         "City": " Noto"
      },
      {
         "City": " Niscemi"
      },
      {
         "City": " Nicastro-Sambiase"
      },
      {
         "City": " Monserrato"
      },
      {
         "City": " Monreale"
      },
      {
         "City": " Modica"
      },
      {
         "City": " Misterbianco"
      },
      {
         "City": " Misilmeri"
      },
      {
         "City": " Milazzo"
      },
      {
         "City": " Messina"
      },
      {
         "City": " Mazara del Vallo"
      },
      {
         "City": " Mascalucia"
      },
      {
         "City": " Marsala"
      },
      {
         "City": " Licata"
      },
      {
         "City": " Lentini"
      },
      {
         "City": " Iglesias"
      },
      {
         "City": " Gioia Tauro"
      },
      {
         "City": " Giarre"
      },
      {
         "City": " Gela"
      },
      {
         "City": " Floridia"
      },
      {
         "City": " Favara"
      },
      {
         "City": " Enna"
      },
      {
         "City": " Crotone"
      },
      {
         "City": " Cosenza"
      },
      {
         "City": " Comiso"
      },
      {
         "City": " Catanzaro"
      },
      {
         "City": " Catania"
      },
      {
         "City": " Castrovillari"
      },
      {
         "City": " Castelvetrano"
      },
      {
         "City": " Casarano"
      },
      {
         "City": " Carini"
      },
      {
         "City": " Carbonia"
      },
      {
         "City": " Canicattì"
      },
      {
         "City": " Caltanissetta"
      },
      {
         "City": " Caltagirone"
      },
      {
         "City": " Cagliari"
      },
      {
         "City": " Bronte"
      },
      {
         "City": " Biancavilla"
      },
      {
         "City": " Belpasso"
      },
      {
         "City": " Barcellona Pozzo di Gotto"
      },
      {
         "City": " Bagheria"
      },
      {
         "City": " Avola"
      },
      {
         "City": " Augusta"
      },
      {
         "City": " Assemini"
      },
      {
         "City": " Amato"
      },
      {
         "City": " Alcamo"
      },
      {
         "City": " Agrigento"
      },
      {
         "City": " Adrano"
      },
      {
         "City": " Acireale"
      },
      {
         "City": " Aci Catena"
      },
      {
         "City": " Aci Castello"
      },
      {
         "City": " Zola Predosa"
      },
      {
         "City": " Voghera"
      },
      {
         "City": " Vittorio Veneto"
      },
      {
         "City": " Viterbo"
      },
      {
         "City": " Vimodrone"
      },
      {
         "City": " Vimercate"
      },
      {
         "City": " Lancenigo-Villorba"
      },
      {
         "City": " Villaricca"
      },
      {
         "City": " Villafranca di Verona"
      },
      {
         "City": " Vignola"
      },
      {
         "City": " Vigevano"
      },
      {
         "City": " Vicenza"
      },
      {
         "City": " Viareggio"
      },
      {
         "City": " Verona"
      },
      {
         "City": " Vercelli"
      },
      {
         "City": " Ventimiglia"
      },
      {
         "City": " Venice"
      },
      {
         "City": " Venaria Reale"
      },
      {
         "City": " Velletri"
      },
      {
         "City": " Vasto"
      },
      {
         "City": " Varese"
      },
      {
         "City": " Valenzano"
      },
      {
         "City": " Valenza"
      },
      {
         "City": " Valdagno"
      },
      {
         "City": " Udine"
      },
      {
         "City": " Triggiano"
      },
      {
         "City": " Trieste"
      },
      {
         "City": " Trezzano sul Naviglio"
      },
      {
         "City": " Treviso"
      },
      {
         "City": " Treviglio"
      },
      {
         "City": " Trentola-Ducenta"
      },
      {
         "City": " Trento"
      },
      {
         "City": " Trecate"
      },
      {
         "City": " Trani"
      },
      {
         "City": " Tradate"
      },
      {
         "City": " Tortona"
      },
      {
         "City": " Torremaggiore"
      },
      {
         "City": " Torre del Greco"
      },
      {
         "City": " Torre Annunziata"
      },
      {
         "City": " Turin"
      },
      {
         "City": " Tolentino"
      },
      {
         "City": " Tivoli"
      },
      {
         "City": " Thiene"
      },
      {
         "City": " Terzigno"
      },
      {
         "City": " Terracina"
      },
      {
         "City": " Terni"
      },
      {
         "City": " Termoli"
      },
      {
         "City": " Terlizzi"
      },
      {
         "City": " Teramo"
      },
      {
         "City": " Taranto"
      },
      {
         "City": " Suzzara"
      },
      {
         "City": " Sulmona"
      },
      {
         "City": " Spoleto"
      },
      {
         "City": " Sora"
      },
      {
         "City": " Sondrio"
      },
      {
         "City": " Somma Vesuviana"
      },
      {
         "City": " Siena"
      },
      {
         "City": " Sezze"
      },
      {
         "City": " Seveso"
      },
      {
         "City": " Settimo Torinese"
      },
      {
         "City": " Sestri Levante"
      },
      {
         "City": " Sesto San Giovanni"
      },
      {
         "City": " Sesto Fiorentino"
      },
      {
         "City": " Seriate"
      },
      {
         "City": " Seregno"
      },
      {
         "City": " Senigallia"
      },
      {
         "City": " Senago"
      },
      {
         "City": " Segrate"
      },
      {
         "City": " Schio"
      },
      {
         "City": " Scandicci"
      },
      {
         "City": " Scafati"
      },
      {
         "City": " Savona"
      },
      {
         "City": " Savigliano"
      },
      {
         "City": " Sava"
      },
      {
         "City": " Sassuolo"
      },
      {
         "City": " Sassari"
      },
      {
         "City": " Sarzana"
      },
      {
         "City": " Saronno"
      },
      {
         "City": " Sarno"
      },
      {
         "City": " San Vito dei Normanni"
      },
      {
         "City": " Santeramo in Colle"
      },
      {
         "City": " Sant'Antonio Abate"
      },
      {
         "City": " Sant'Antimo"
      },
      {
         "City": " Sant'Anastasia"
      },
      {
         "City": " Santa Maria Capua Vetere"
      },
      {
         "City": " San Severo"
      },
      {
         "City": " San Sebastiano"
      },
      {
         "City": " San Salvo"
      },
      {
         "City": " San Remo"
      },
      {
         "City": " Sannicandro Garganico"
      },
      {
         "City": " San Miniato"
      },
      {
         "City": " San Miniato Basso"
      },
      {
         "City": " San Mauro Torinese"
      },
      {
         "City": " San Lazzaro"
      },
      {
         "City": " San Giuseppe Vesuviano"
      },
      {
         "City": " San Giuliano Milanese"
      },
      {
         "City": " San Giovanni Valdarno"
      },
      {
         "City": " San Giovanni Rotondo"
      },
      {
         "City": " San Giovanni Lupatoto"
      },
      {
         "City": " San Giovanni in Persiceto"
      },
      {
         "City": " San Giorgio a Cremano"
      },
      {
         "City": " San Donato Milanese"
      },
      {
         "City": " San Donà di Piave"
      },
      {
         "City": " San Bonifacio"
      },
      {
         "City": " San Benedetto del Tronto"
      },
      {
         "City": " Salsomaggiore Terme"
      },
      {
         "City": " Salerno"
      },
      {
         "City": " Sacile"
      },
      {
         "City": " Ruvo di Puglia"
      },
      {
         "City": " Rutigliano"
      },
      {
         "City": " Rozzano"
      },
      {
         "City": " Rovigo"
      },
      {
         "City": " Rovereto"
      },
      {
         "City": " Rosignano Solvay-Castiglioncello"
      },
      {
         "City": " Roseto degli Abruzzi"
      },
      {
         "City": " Romano di Lombardia"
      },
      {
         "City": " Rome"
      },
      {
         "City": " Rocca di Papa"
      },
      {
         "City": " Rivoli"
      },
      {
         "City": " Rimini"
      },
      {
         "City": " Rieti"
      },
      {
         "City": " Riccione"
      },
      {
         "City": " Rho"
      },
      {
         "City": " Reggio nell'Emilia"
      },
      {
         "City": " Ravenna"
      },
      {
         "City": " Rapallo"
      },
      {
         "City": " Qualiano"
      },
      {
         "City": " Putignano"
      },
      {
         "City": " Prato"
      },
      {
         "City": " Pozzuoli"
      },
      {
         "City": " Potenza"
      },
      {
         "City": " Porto Torres"
      },
      {
         "City": " Porto Sant'Elpidio"
      },
      {
         "City": " Porto San Giorgio"
      },
      {
         "City": " Portogruaro"
      },
      {
         "City": " Civitanova Marche"
      },
      {
         "City": " Portici"
      },
      {
         "City": " Pordenone"
      },
      {
         "City": " Pontedera"
      },
      {
         "City": " Pompei"
      },
      {
         "City": " Pomigliano d'Arco"
      },
      {
         "City": " Pomezia"
      },
      {
         "City": " Poggiomarino"
      },
      {
         "City": " Poggibonsi"
      },
      {
         "City": " Pistoia"
      },
      {
         "City": " Pisa"
      },
      {
         "City": " Piossasco"
      },
      {
         "City": " Piombino"
      },
      {
         "City": " Pioltello"
      },
      {
         "City": " Pinerolo"
      },
      {
         "City": " Pietrasanta"
      },
      {
         "City": " Piacenza"
      },
      {
         "City": " Pescara"
      },
      {
         "City": " Pesaro"
      },
      {
         "City": " Perugia"
      },
      {
         "City": " Pavia"
      },
      {
         "City": " Parma"
      },
      {
         "City": " Parabiago"
      },
      {
         "City": " Palo del Colle"
      },
      {
         "City": " Palazzolo sull'Oglio"
      },
      {
         "City": " Palagiano"
      },
      {
         "City": " Pagani"
      },
      {
         "City": " Padova"
      },
      {
         "City": " Paderno Dugnano"
      },
      {
         "City": " Ottaviano"
      },
      {
         "City": " Ostuni"
      },
      {
         "City": " Osimo"
      },
      {
         "City": " Orta Nova"
      },
      {
         "City": " Orbassano"
      },
      {
         "City": " Olbia"
      },
      {
         "City": " Oderzo"
      },
      {
         "City": " Nuoro"
      },
      {
         "City": " Novi Ligure"
      },
      {
         "City": " Novate Milanese"
      },
      {
         "City": " Novara"
      },
      {
         "City": " Nova Milanese"
      },
      {
         "City": " Nola"
      },
      {
         "City": " Noicattaro"
      },
      {
         "City": " Noci"
      },
      {
         "City": " Nocera Superiore"
      },
      {
         "City": " Nocera Inferiore"
      },
      {
         "City": " Nichelino"
      },
      {
         "City": " Nettuno"
      },
      {
         "City": " Nerviano"
      },
      {
         "City": " Nardò"
      },
      {
         "City": " Napoli"
      },
      {
         "City": " Mugnano di Napoli"
      },
      {
         "City": " Muggiò"
      },
      {
         "City": " Monza"
      },
      {
         "City": " Montichiari"
      },
      {
         "City": " Montevarchi"
      },
      {
         "City": " Montesilvano Marina"
      },
      {
         "City": " Monterotondo"
      },
      {
         "City": " Montemurlo"
      },
      {
         "City": " Montecchio Maggiore-Alte Ceccato"
      },
      {
         "City": " Montecatini-Terme"
      },
      {
         "City": " Montebelluna"
      },
      {
         "City": " Monopoli"
      },
      {
         "City": " Monfalcone"
      },
      {
         "City": " Mondragone"
      },
      {
         "City": " Mondovì"
      },
      {
         "City": " Moncalieri"
      },
      {
         "City": " Molfetta"
      },
      {
         "City": " Mola di Bari"
      },
      {
         "City": " Mogliano Veneto"
      },
      {
         "City": " Modugno"
      },
      {
         "City": " Modena"
      },
      {
         "City": " Mirano"
      },
      {
         "City": " Mirandola"
      },
      {
         "City": " Mira Taglio"
      },
      {
         "City": " Minturno"
      },
      {
         "City": " Milano"
      },
      {
         "City": " Mestre"
      },
      {
         "City": " Mesagne"
      },
      {
         "City": " Merano"
      },
      {
         "City": " Mentana"
      },
      {
         "City": " Melzo"
      },
      {
         "City": " Melito di Napoli"
      },
      {
         "City": " Melegnano"
      },
      {
         "City": " Meda"
      },
      {
         "City": " Matera"
      },
      {
         "City": " Massafra"
      },
      {
         "City": " Massa"
      },
      {
         "City": " Martina Franca"
      },
      {
         "City": " Marino"
      },
      {
         "City": " Marina di Carrara"
      },
      {
         "City": " Marigliano"
      },
      {
         "City": " Mariano Comense"
      },
      {
         "City": " Marcianise"
      },
      {
         "City": " Marano di Napoli"
      },
      {
         "City": " Mantova"
      },
      {
         "City": " Manfredonia"
      },
      {
         "City": " Manduria"
      },
      {
         "City": " Malnate"
      },
      {
         "City": " Magenta"
      },
      {
         "City": " Maddaloni"
      },
      {
         "City": " Macerata"
      },
      {
         "City": " Lugo"
      },
      {
         "City": " Lucera"
      },
      {
         "City": " Lucca"
      },
      {
         "City": " Lodi"
      },
      {
         "City": " Livorno"
      },
      {
         "City": " Lissone"
      },
      {
         "City": " Limbiate"
      },
      {
         "City": " Lido di Ostia"
      },
      {
         "City": " Lido"
      },
      {
         "City": " Legnano"
      },
      {
         "City": " Legnago"
      },
      {
         "City": " Lecco"
      },
      {
         "City": " Lecce"
      },
      {
         "City": " Latina"
      },
      {
         "City": " La Spezia"
      },
      {
         "City": " L'Aquila"
      },
      {
         "City": " Lanciano"
      },
      {
         "City": " Lainate"
      },
      {
         "City": " Ladispoli"
      },
      {
         "City": " Ivrea"
      },
      {
         "City": " Isernia"
      },
      {
         "City": " Ischia Porto"
      },
      {
         "City": " Ischia"
      },
      {
         "City": " Pallanza-Intra-Suna"
      },
      {
         "City": " Imperia"
      },
      {
         "City": " Imola"
      },
      {
         "City": " Jesi"
      },
      {
         "City": " Guidonia"
      },
      {
         "City": " Grumo Nevano"
      },
      {
         "City": " Grugliasco"
      },
      {
         "City": " Grottaglie"
      },
      {
         "City": " Grottaferrata"
      },
      {
         "City": " Grosseto"
      },
      {
         "City": " Gravina in Puglia"
      },
      {
         "City": " Gragnano"
      },
      {
         "City": " Gorizia"
      },
      {
         "City": " Gorgonzola"
      },
      {
         "City": " Giussano"
      },
      {
         "City": " Giulianova"
      },
      {
         "City": " Giugliano in Campania"
      },
      {
         "City": " Giovinazzo"
      },
      {
         "City": " Gioia del Colle"
      },
      {
         "City": " Ginosa"
      },
      {
         "City": " Ghedi"
      },
      {
         "City": " Genzano di Roma"
      },
      {
         "City": " Genoa"
      },
      {
         "City": " Garbagnate Milanese"
      },
      {
         "City": " Gallipoli"
      },
      {
         "City": " Gallarate"
      },
      {
         "City": " Galatina"
      },
      {
         "City": " Gaeta"
      },
      {
         "City": " Frosinone"
      },
      {
         "City": " Frattaminore"
      },
      {
         "City": " Frattamaggiore"
      },
      {
         "City": " Frascati"
      },
      {
         "City": " Francavilla Fontana"
      },
      {
         "City": " Francavilla al Mare"
      },
      {
         "City": " Fossano"
      },
      {
         "City": " Fornacelle"
      },
      {
         "City": " Formigine"
      },
      {
         "City": " Formia"
      },
      {
         "City": " Forlì"
      },
      {
         "City": " Forio"
      },
      {
         "City": " Fondi"
      },
      {
         "City": " Follonica"
      },
      {
         "City": " Foligno"
      },
      {
         "City": " Foggia"
      },
      {
         "City": " Fiumicino-Isola Sacra"
      },
      {
         "City": " Florence"
      },
      {
         "City": " Fiorano"
      },
      {
         "City": " Fidenza"
      },
      {
         "City": " Ferrara"
      },
      {
         "City": " Fermo"
      },
      {
         "City": " Fasano"
      },
      {
         "City": " Fano"
      },
      {
         "City": " Falconara Marittima"
      },
      {
         "City": " Faenza"
      },
      {
         "City": " Fabriano"
      },
      {
         "City": " Ercolano"
      },
      {
         "City": " Erba"
      },
      {
         "City": " Empoli"
      },
      {
         "City": " Eboli"
      },
      {
         "City": " Domodossola"
      },
      {
         "City": " Desio"
      },
      {
         "City": " Desenzano del Garda"
      },
      {
         "City": " Dalmine"
      },
      {
         "City": " Cusano Milanino"
      },
      {
         "City": " Cuneo"
      },
      {
         "City": " Cremona"
      },
      {
         "City": " Crema"
      },
      {
         "City": " Corsico"
      },
      {
         "City": " Correggio"
      },
      {
         "City": " Cornaredo"
      },
      {
         "City": " Cormano"
      },
      {
         "City": " Cordenons"
      },
      {
         "City": " Corato"
      },
      {
         "City": " Copertino"
      },
      {
         "City": " Conversano"
      },
      {
         "City": " Conegliano"
      },
      {
         "City": " Como"
      },
      {
         "City": " Cologno Monzese"
      },
      {
         "City": " Collegno"
      },
      {
         "City": " Colleferro"
      },
      {
         "City": " Colle di Val d'Elsa"
      },
      {
         "City": " Civitavecchia"
      },
      {
         "City": " Città di Castello"
      },
      {
         "City": " Cisterna di Latina"
      },
      {
         "City": " Ciriè"
      },
      {
         "City": " Cinisello Balsamo"
      },
      {
         "City": " Ciampino"
      },
      {
         "City": " Chivasso"
      },
      {
         "City": " Chioggia"
      },
      {
         "City": " Chieti"
      },
      {
         "City": " Chieri"
      },
      {
         "City": " Chiavari"
      },
      {
         "City": " Chiari"
      },
      {
         "City": " Cesenatico"
      },
      {
         "City": " Cesena"
      },
      {
         "City": " Cesano Maderno"
      },
      {
         "City": " Cervia"
      },
      {
         "City": " Cerveteri"
      },
      {
         "City": " Cernusco sul Naviglio"
      },
      {
         "City": " Cerignola"
      },
      {
         "City": " Cercola"
      },
      {
         "City": " Cento"
      },
      {
         "City": " Ceglie Messapica"
      },
      {
         "City": " Cecina"
      },
      {
         "City": " Cava Dè Tirreni"
      },
      {
         "City": " Cattolica"
      },
      {
         "City": " Castiglione delle Stiviere"
      },
      {
         "City": " Castel Volturno"
      },
      {
         "City": " Castel Maggiore"
      },
      {
         "City": " Castellammare di Stabia"
      },
      {
         "City": " Castelfranco Veneto"
      },
      {
         "City": " Castelfranco Emilia"
      },
      {
         "City": " Cassino"
      },
      {
         "City": " Cassano d'Adda"
      },
      {
         "City": " Casoria"
      },
      {
         "City": " Caserta"
      },
      {
         "City": " Cascina"
      },
      {
         "City": " Casamassima"
      },
      {
         "City": " Casalnuovo di Napoli"
      },
      {
         "City": " Casale Monferrato"
      },
      {
         "City": " Casalecchio di Reno"
      },
      {
         "City": " Casal di Principe"
      },
      {
         "City": " Carrara"
      },
      {
         "City": " Carpi Centro"
      },
      {
         "City": " Carmagnola"
      },
      {
         "City": " Cardito"
      },
      {
         "City": " Carate Brianza"
      },
      {
         "City": " Capua"
      },
      {
         "City": " Capannori"
      },
      {
         "City": " Cantù"
      },
      {
         "City": " Canosa di Puglia"
      },
      {
         "City": " Campobasso"
      },
      {
         "City": " Campi Bisenzio"
      },
      {
         "City": " Camaiore"
      },
      {
         "City": " Caivano"
      },
      {
         "City": " Busto Arsizio"
      },
      {
         "City": " Bussolengo"
      },
      {
         "City": " Brusciano"
      },
      {
         "City": " Brugherio"
      },
      {
         "City": " Brindisi"
      },
      {
         "City": " Bresso"
      },
      {
         "City": " Bressanone"
      },
      {
         "City": " Brescia"
      },
      {
         "City": " Bra"
      },
      {
         "City": " Bovisio-Masciago"
      },
      {
         "City": " Boscoreale"
      },
      {
         "City": " Borgomanero"
      },
      {
         "City": " Bolzano"
      },
      {
         "City": " Bologna"
      },
      {
         "City": " Bollate"
      },
      {
         "City": " Bitonto"
      },
      {
         "City": " Bisceglie"
      },
      {
         "City": " Biella"
      },
      {
         "City": " Bergamo"
      },
      {
         "City": " Benevento"
      },
      {
         "City": " Belluno"
      },
      {
         "City": " Battipaglia"
      },
      {
         "City": " Bastia umbra"
      },
      {
         "City": " Bassano del Grappa"
      },
      {
         "City": " Barletta"
      },
      {
         "City": " Bari"
      },
      {
         "City": " Bareggio"
      },
      {
         "City": " Bagnoli"
      },
      {
         "City": " Bacoli"
      },
      {
         "City": " Avezzano"
      },
      {
         "City": " Aversa"
      },
      {
         "City": " Avellino"
      },
      {
         "City": " Asti"
      },
      {
         "City": " Ascoli Piceno"
      },
      {
         "City": " Arzignano"
      },
      {
         "City": " Arzano"
      },
      {
         "City": " Ariccia"
      },
      {
         "City": " Arezzo"
      },
      {
         "City": " Arese"
      },
      {
         "City": " Ardea"
      },
      {
         "City": " Arcore"
      },
      {
         "City": " Aprilia"
      },
      {
         "City": " Aosta"
      },
      {
         "City": " Anzio"
      },
      {
         "City": " Angri"
      },
      {
         "City": " Andria"
      },
      {
         "City": " Ancona"
      },
      {
         "City": " Altamura"
      },
      {
         "City": " Alpignano"
      },
      {
         "City": " Alghero"
      },
      {
         "City": " Alessandria"
      },
      {
         "City": " Albignasego"
      },
      {
         "City": " Albenga"
      },
      {
         "City": " Albano Laziale"
      },
      {
         "City": " Alba"
      },
      {
         "City": " Agropoli"
      },
      {
         "City": " Afragola"
      },
      {
         "City": " Adelfia"
      },
      {
         "City": " Acqui Terme"
      },
      {
         "City": " Acquaviva delle Fonti"
      },
      {
         "City": " Acilia-Castel Fusano-Ostia Antica"
      },
      {
         "City": " Acerra"
      },
      {
         "City": " Abbiategrasso"
      },
      {
         "City": " Abano Terme"
      },
      {
         "City": " Spinea-Orgnano"
      },
      {
         "City": " Verbania"
      },
      {
         "City": " Lumezzane"
      },
      {
         "City": " Guidonia Montecelio"
      },
      {
         "City": " Lamezia Terme"
      },
      {
         "City": " Caronno Pertusella"
      },
      {
         "City": " Cassano Magnago"
      },
      {
         "City": " San Felice A Cancello"
      },
      {
         "City": " San Nicola la Strada"
      },
      {
         "City": " Quarto"
      },
      {
         "City": " Orta di Atella"
      },
      {
         "City": " Casavatore"
      },
      {
         "City": " Volla"
      },
      {
         "City": " Gravina di Catania"
      },
      {
         "City": " Cesano Boscone"
      },
      {
         "City": " Tor Lupara"
      },
      {
         "City": " Torvaianica"
      },
      {
         "City": " Bellaria-Igea Marina"
      },
      {
         "City": " Villanova"
      },
      {
         "City": " Marina di Ardea-Tor San Lorenzo"
      },
      {
         "City": " San Paolo"
      },
      {
         "City": " Monterusciello"
      },
      {
         "City": " Romano Banco"
      },
      {
         "City": " Casa Santa"
      },
      {
         "City": " Arpino"
      },
      {
         "City": " Paolo VI"
      },
      {
         "City": " Corigliano Scalo"
      }
   ],
   "Jersey": [
      {
         "City": " Saint Helier"
      }
   ],
   "Jamaica": [
      {
         "City": " Spanish Town"
      },
      {
         "City": " Savanna-la-Mar"
      },
      {
         "City": " Portmore"
      },
      {
         "City": " Old Harbour"
      },
      {
         "City": " New Kingston"
      },
      {
         "City": " Montego Bay"
      },
      {
         "City": " May Pen"
      },
      {
         "City": " Mandeville"
      },
      {
         "City": " Linstead"
      },
      {
         "City": " Kingston"
      },
      {
         "City": " Half Way Tree"
      }
   ],
   "Jordan": [
      {
         "City": " Wādī as Sīr"
      },
      {
         "City": " Umm as Summāq"
      },
      {
         "City": " Saḩāb"
      },
      {
         "City": " Mādabā"
      },
      {
         "City": " Ma'an"
      },
      {
         "City": " Kurayyimah"
      },
      {
         "City": " Judita"
      },
      {
         "City": " Jarash"
      },
      {
         "City": " ‘Izrā"
      },
      {
         "City": " Irbid"
      },
      {
         "City": " Zarqa"
      },
      {
         "City": " Aydūn"
      },
      {
         "City": " Aţ Ţafīlah"
      },
      {
         "City": " As Salţ"
      },
      {
         "City": " Safi"
      },
      {
         "City": " Ar Ramthā"
      },
      {
         "City": " ‘Anjarah"
      },
      {
         "City": " Amman"
      },
      {
         "City": " Al Quwaysimah"
      },
      {
         "City": " Mafraq"
      },
      {
         "City": " Qīr Moāv"
      },
      {
         "City": " Al Jubayhah"
      },
      {
         "City": " Aqaba"
      },
      {
         "City": " ‘Ajlūn"
      },
      {
         "City": " Karak City"
      },
      {
         "City": " Russeifa"
      }
   ],
   "Japan": [
      {
         "City": " Shingū"
      },
      {
         "City": " Atsugi"
      },
      {
         "City": " Akashi"
      },
      {
         "City": " Zushi"
      },
      {
         "City": " Zama"
      },
      {
         "City": " Yuza"
      },
      {
         "City": " Gero"
      },
      {
         "City": " Yukuhashi"
      },
      {
         "City": " Yūki"
      },
      {
         "City": " Yugawara"
      },
      {
         "City": " Yoshikawa"
      },
      {
         "City": " Yoshii"
      },
      {
         "City": " Yoshida-kasugachō"
      },
      {
         "City": " Yorii"
      },
      {
         "City": " Yono"
      },
      {
         "City": " Yonago"
      },
      {
         "City": " Yokosuka"
      },
      {
         "City": " Yokohama"
      },
      {
         "City": " Yokkaichi"
      },
      {
         "City": " Youkaichi"
      },
      {
         "City": " Yawata"
      },
      {
         "City": " Yatsushiro"
      },
      {
         "City": " Yatsuomachi-higashikumisaka"
      },
      {
         "City": " Yasugichō"
      },
      {
         "City": " Yashiro"
      },
      {
         "City": " Yashio-shi"
      },
      {
         "City": " Yao"
      },
      {
         "City": " Yanai"
      },
      {
         "City": " Yanagawa"
      },
      {
         "City": " Yamazakichō-nakabirose"
      },
      {
         "City": " Yamaguchi"
      },
      {
         "City": " Yamaga"
      },
      {
         "City": " Yaizu"
      },
      {
         "City": " Yaita"
      },
      {
         "City": " Wakimachi"
      },
      {
         "City": " Utsunomiya"
      },
      {
         "City": " Uto"
      },
      {
         "City": " Usuki"
      },
      {
         "City": " Ushibuka"
      },
      {
         "City": " Ureshinomachi-shimojuku"
      },
      {
         "City": " Urayasu"
      },
      {
         "City": " Uozu"
      },
      {
         "City": " Umi"
      },
      {
         "City": " Ujiie"
      },
      {
         "City": " Uji"
      },
      {
         "City": " Uenohara"
      },
      {
         "City": " Ueno-ebisumachi"
      },
      {
         "City": " Ueki"
      },
      {
         "City": " Ueda"
      },
      {
         "City": " Ube"
      },
      {
         "City": " Tsuyama"
      },
      {
         "City": " Tsushima"
      },
      {
         "City": " Tsurusaki"
      },
      {
         "City": " Tsuruoka"
      },
      {
         "City": " Tsurugi-asahimachi"
      },
      {
         "City": " Tsuruga"
      },
      {
         "City": " Tsuma"
      },
      {
         "City": " Tsukumiura"
      },
      {
         "City": " Tsukawaki"
      },
      {
         "City": " Tsubata"
      },
      {
         "City": " Tsubame"
      },
      {
         "City": " Tsu"
      },
      {
         "City": " Toyota"
      },
      {
         "City": " Toyoshina"
      },
      {
         "City": " Toyooka"
      },
      {
         "City": " Toyonaka"
      },
      {
         "City": " Toyokawa"
      },
      {
         "City": " Toyohashi"
      },
      {
         "City": " Toyohama"
      },
      {
         "City": " Toyama"
      },
      {
         "City": " Tottori"
      },
      {
         "City": " Tosu"
      },
      {
         "City": " Tonoshō"
      },
      {
         "City": " Tondabayashichō"
      },
      {
         "City": " Tomioka"
      },
      {
         "City": " Tomigusuku"
      },
      {
         "City": " Tokyo"
      },
      {
         "City": " Tokuyama"
      },
      {
         "City": " Tokushima"
      },
      {
         "City": " Tokorozawa"
      },
      {
         "City": " Tokoname"
      },
      {
         "City": " Toki"
      },
      {
         "City": " Tōkamachi"
      },
      {
         "City": " Togitsu"
      },
      {
         "City": " Tochio-honchō"
      },
      {
         "City": " Tochigi"
      },
      {
         "City": " Toba"
      },
      {
         "City": " Tenri"
      },
      {
         "City": " Tennō"
      },
      {
         "City": " Tawaramoto"
      },
      {
         "City": " Tatsuno"
      },
      {
         "City": " Tatsunochō-tominaga"
      },
      {
         "City": " Tateyama"
      },
      {
         "City": " Tatebayashi"
      },
      {
         "City": " Tarumizu"
      },
      {
         "City": " Tarui"
      },
      {
         "City": " Tanushimarumachi-toyoki"
      },
      {
         "City": " Tanuma"
      },
      {
         "City": " Nishi-Tokyo-shi"
      },
      {
         "City": " Tanashichō"
      },
      {
         "City": " Tanabe"
      },
      {
         "City": " Tanabe"
      },
      {
         "City": " Tamano"
      },
      {
         "City": " Tamana"
      },
      {
         "City": " Tamamura"
      },
      {
         "City": " Taketoyo"
      },
      {
         "City": " Takeochō-takeo"
      },
      {
         "City": " Takehara"
      },
      {
         "City": " Takefu"
      },
      {
         "City": " Takedamachi"
      },
      {
         "City": " Takayama"
      },
      {
         "City": " Takatsuki"
      },
      {
         "City": " Takasaki"
      },
      {
         "City": " Takarazuka"
      },
      {
         "City": " Takaoka"
      },
      {
         "City": " Takanabe"
      },
      {
         "City": " Takamatsu"
      },
      {
         "City": " Takaishi"
      },
      {
         "City": " Takahashi"
      },
      {
         "City": " Takahama"
      },
      {
         "City": " Bungo-Takada-shi"
      },
      {
         "City": " Tajimi"
      },
      {
         "City": " Tahara"
      },
      {
         "City": " Tagawa"
      },
      {
         "City": " Tadotsu"
      },
      {
         "City": " Suzuka"
      },
      {
         "City": " Suzaka"
      },
      {
         "City": " Suwa"
      },
      {
         "City": " Susaki"
      },
      {
         "City": " Sumoto"
      },
      {
         "City": " Sukumo"
      },
      {
         "City": " Suita"
      },
      {
         "City": " Suibara"
      },
      {
         "City": " Sugito"
      },
      {
         "City": " Sueyoshichō-ninokata"
      },
      {
         "City": " Sōka"
      },
      {
         "City": " Sōja"
      },
      {
         "City": " Sobue"
      },
      {
         "City": " Shōbu"
      },
      {
         "City": " Shōbara"
      },
      {
         "City": " Shizuoka"
      },
      {
         "City": " Shirone"
      },
      {
         "City": " Shiraoka"
      },
      {
         "City": " Shirahamachō-usazakiminami"
      },
      {
         "City": " Shiozawa"
      },
      {
         "City": " Shiojiri"
      },
      {
         "City": " Shinshiro"
      },
      {
         "City": " Shin’ichi"
      },
      {
         "City": " Shingū"
      },
      {
         "City": " Shimonoseki"
      },
      {
         "City": " Shimodate"
      },
      {
         "City": " Shimoda"
      },
      {
         "City": " Minato"
      },
      {
         "City": " Nishishinminato"
      },
      {
         "City": " Shimada"
      },
      {
         "City": " Shimabara"
      },
      {
         "City": " Shiki"
      },
      {
         "City": " Shido"
      },
      {
         "City": " Shibushi"
      },
      {
         "City": " Shibukawa"
      },
      {
         "City": " Shibata"
      },
      {
         "City": " Seto"
      },
      {
         "City": " Setakamachi-takayanagi"
      },
      {
         "City": " Satsumasendai"
      },
      {
         "City": " Satte"
      },
      {
         "City": " Sasebo"
      },
      {
         "City": " Sasayama"
      },
      {
         "City": " Sasaguri"
      },
      {
         "City": " Sano"
      },
      {
         "City": " Sanjō"
      },
      {
         "City": " Sandachō"
      },
      {
         "City": " Sakurai"
      },
      {
         "City": " Saku"
      },
      {
         "City": " Sakata"
      },
      {
         "City": " Sakaiminato"
      },
      {
         "City": " Sakaidechō"
      },
      {
         "City": " Sakai-nakajima"
      },
      {
         "City": " Sakai"
      },
      {
         "City": " Sakai"
      },
      {
         "City": " Sakado"
      },
      {
         "City": " Saiki"
      },
      {
         "City": " Sagara"
      },
      {
         "City": " Saga"
      },
      {
         "City": " Sabae"
      },
      {
         "City": " Ryūō"
      },
      {
         "City": " Ryōtsu-minato"
      },
      {
         "City": " Ōzu"
      },
      {
         "City": " Oyama"
      },
      {
         "City": " Ōyama"
      },
      {
         "City": " Owase"
      },
      {
         "City": " Ōtsuki"
      },
      {
         "City": " Ōtsu"
      },
      {
         "City": " Ōtake"
      },
      {
         "City": " Ōta"
      },
      {
         "City": " Osaka"
      },
      {
         "City": " Onomichi"
      },
      {
         "City": " Onoda"
      },
      {
         "City": " Ono"
      },
      {
         "City": " Ono"
      },
      {
         "City": " Ōno-hara"
      },
      {
         "City": " Ōmuta"
      },
      {
         "City": " Ōmura"
      },
      {
         "City": " Ōme"
      },
      {
         "City": " Ōmamachō-ōmama"
      },
      {
         "City": " Ōmachi"
      },
      {
         "City": " Ōkuchi-shinohara"
      },
      {
         "City": " Okegawa"
      },
      {
         "City": " Okazaki"
      },
      {
         "City": " Okayama"
      },
      {
         "City": " Okaya"
      },
      {
         "City": " Ōkawa"
      },
      {
         "City": " Ojiya"
      },
      {
         "City": " Ōita"
      },
      {
         "City": " Ōiso"
      },
      {
         "City": " Ōi"
      },
      {
         "City": " Ogōri-shimogō"
      },
      {
         "City": " Ogawa"
      },
      {
         "City": " Ōgaki"
      },
      {
         "City": " Odawara"
      },
      {
         "City": " Ōdachō-ōda"
      },
      {
         "City": " Ōbu"
      },
      {
         "City": " Obita"
      },
      {
         "City": " Obama"
      },
      {
         "City": " Nyūzen"
      },
      {
         "City": " Numazu"
      },
      {
         "City": " Numata"
      },
      {
         "City": " Nonoichi"
      },
      {
         "City": " Nōgata"
      },
      {
         "City": " Noda"
      },
      {
         "City": " Nobeoka"
      },
      {
         "City": " Nishiwaki"
      },
      {
         "City": " Nishio"
      },
      {
         "City": " Nishinoomote"
      },
      {
         "City": " Nishinomiya-hama"
      },
      {
         "City": " Nirasaki"
      },
      {
         "City": " Ninomiya"
      },
      {
         "City": " Nikkō"
      },
      {
         "City": " Niitsu-honchō"
      },
      {
         "City": " Niimi"
      },
      {
         "City": " Niihama"
      },
      {
         "City": " Niigata"
      },
      {
         "City": " Nichinan"
      },
      {
         "City": " Naze"
      },
      {
         "City": " Narutochō-mitsuishi"
      },
      {
         "City": " Nara-shi"
      },
      {
         "City": " Nanao"
      },
      {
         "City": " Namerikawa"
      },
      {
         "City": " Nakatsugawa"
      },
      {
         "City": " Nakatsu"
      },
      {
         "City": " Nakanojōmachi"
      },
      {
         "City": " Nakano"
      },
      {
         "City": " Nakamura"
      },
      {
         "City": " Nakama"
      },
      {
         "City": " Naha"
      },
      {
         "City": " Nagoya"
      },
      {
         "City": " Nago"
      },
      {
         "City": " Nagasaki"
      },
      {
         "City": " Nagareyama"
      },
      {
         "City": " Nagaoka"
      },
      {
         "City": " Nagano"
      },
      {
         "City": " Nagahama"
      },
      {
         "City": " Nabari"
      },
      {
         "City": " Musashino"
      },
      {
         "City": " Muroto-misakicho"
      },
      {
         "City": " Muramatsu"
      },
      {
         "City": " Murakami"
      },
      {
         "City": " Mukō"
      },
      {
         "City": " Muikamachi"
      },
      {
         "City": " Morohongō"
      },
      {
         "City": " Moriyama"
      },
      {
         "City": " Moriguchi"
      },
      {
         "City": " Mori"
      },
      {
         "City": " Mizunami"
      },
      {
         "City": " Miyoshi"
      },
      {
         "City": " Miyazu"
      },
      {
         "City": " Miyazaki"
      },
      {
         "City": " Miyakonojō"
      },
      {
         "City": " Miyata"
      },
      {
         "City": " Mitsuke"
      },
      {
         "City": " Mitsukaidō"
      },
      {
         "City": " Mitake"
      },
      {
         "City": " Mitaka-shi"
      },
      {
         "City": " Mishima"
      },
      {
         "City": " Mino"
      },
      {
         "City": " Mino"
      },
      {
         "City": " Minamirinkan"
      },
      {
         "City": " Minamata"
      },
      {
         "City": " Minakuchichō-matoba"
      },
      {
         "City": " Mikuni"
      },
      {
         "City": " Miki"
      },
      {
         "City": " Mihara"
      },
      {
         "City": " Mibu"
      },
      {
         "City": " Menuma"
      },
      {
         "City": " Matsutō"
      },
      {
         "City": " Matsumoto"
      },
      {
         "City": " Matsue"
      },
      {
         "City": " Matsudo"
      },
      {
         "City": " Matsubase"
      },
      {
         "City": " Matsubara"
      },
      {
         "City": " Masuda"
      },
      {
         "City": " Maruoka"
      },
      {
         "City": " Kamimaruko"
      },
      {
         "City": " Marugame"
      },
      {
         "City": " Makurazaki"
      },
      {
         "City": " Maki"
      },
      {
         "City": " Maizuru"
      },
      {
         "City": " Maebashi"
      },
      {
         "City": " Maebaru-chūō"
      },
      {
         "City": " Machida"
      },
      {
         "City": " Kyoto"
      },
      {
         "City": " Kushikino"
      },
      {
         "City": " Kusatsu"
      },
      {
         "City": " Kurume"
      },
      {
         "City": " Kuroda"
      },
      {
         "City": " Kurihashi"
      },
      {
         "City": " Kure"
      },
      {
         "City": " Kurayoshi"
      },
      {
         "City": " Kurashiki"
      },
      {
         "City": " Kumamoto"
      },
      {
         "City": " Kumagaya"
      },
      {
         "City": " Kukichūō"
      },
      {
         "City": " Kudamatsu"
      },
      {
         "City": " Kozakai-chō"
      },
      {
         "City": " Koshigaya"
      },
      {
         "City": " Kosai-shi"
      },
      {
         "City": " Kōnosu"
      },
      {
         "City": " Kōnan"
      },
      {
         "City": " Komoro"
      },
      {
         "City": " Komono"
      },
      {
         "City": " Komatsushimachō"
      },
      {
         "City": " Komatsu"
      },
      {
         "City": " Komaki"
      },
      {
         "City": " Kokubunji"
      },
      {
         "City": " Kokubu-matsuki"
      },
      {
         "City": " Koga"
      },
      {
         "City": " Koga"
      },
      {
         "City": " Kōfu"
      },
      {
         "City": " Kodamachō-kodamaminami"
      },
      {
         "City": " Kochi"
      },
      {
         "City": " Kobe"
      },
      {
         "City": " Kobayashi"
      },
      {
         "City": " Kitsuki"
      },
      {
         "City": " Kitakyushu"
      },
      {
         "City": " Kitakata"
      },
      {
         "City": " Kitahama"
      },
      {
         "City": " Kishiwada"
      },
      {
         "City": " Kisarazu"
      },
      {
         "City": " Kisai"
      },
      {
         "City": " Kiryū"
      },
      {
         "City": " Kikuchi"
      },
      {
         "City": " Kazo"
      },
      {
         "City": " Kawasaki"
      },
      {
         "City": " Kawasaki"
      },
      {
         "City": " Kawanishi"
      },
      {
         "City": " Kawaguchi"
      },
      {
         "City": " Kawagoe"
      },
      {
         "City": " Katsuyama"
      },
      {
         "City": " Kasukabe"
      },
      {
         "City": " Kasugai"
      },
      {
         "City": " Kashiwazaki"
      },
      {
         "City": " Kashiwa"
      },
      {
         "City": " Kashima"
      },
      {
         "City": " Kashihara-shi"
      },
      {
         "City": " Kashihara"
      },
      {
         "City": " Kaseda-shirakame"
      },
      {
         "City": " Kasaoka"
      },
      {
         "City": " Kasamatsuchō"
      },
      {
         "City": " Kariya"
      },
      {
         "City": " Karatsu"
      },
      {
         "City": " Kanzakimachi-kanzaki"
      },
      {
         "City": " Kanuma"
      },
      {
         "City": " Kanoya"
      },
      {
         "City": " Kan’onjichō"
      },
      {
         "City": " Kannabechō-yahiro"
      },
      {
         "City": " Kanie"
      },
      {
         "City": " Kanekomachi"
      },
      {
         "City": " Kanda"
      },
      {
         "City": " Kanazawa"
      },
      {
         "City": " Kanaya"
      },
      {
         "City": " Kamojimachō-jōgejima"
      },
      {
         "City": " Kamogatachō-kamogata"
      },
      {
         "City": " Kamo"
      },
      {
         "City": " Kamirenjaku"
      },
      {
         "City": " Kaminokawa"
      },
      {
         "City": " Kamiichi"
      },
      {
         "City": " Kameyama"
      },
      {
         "City": " Kameoka"
      },
      {
         "City": " Kameda-honchō"
      },
      {
         "City": " Kamakura"
      },
      {
         "City": " Kakogawachō-honmachi"
      },
      {
         "City": " Kakegawa"
      },
      {
         "City": " Kakamigahara"
      },
      {
         "City": " Kashima-shi"
      },
      {
         "City": " Kajiki"
      },
      {
         "City": " Kaizuka"
      },
      {
         "City": " Kainan"
      },
      {
         "City": " Kagoshima"
      },
      {
         "City": " Kadoma"
      },
      {
         "City": " Izumo"
      },
      {
         "City": " Izumiōtsu"
      },
      {
         "City": " Izumi"
      },
      {
         "City": " Izumi"
      },
      {
         "City": " Iwatsuki"
      },
      {
         "City": " Iwata"
      },
      {
         "City": " Iwakura"
      },
      {
         "City": " Iwakuni"
      },
      {
         "City": " Iwai"
      },
      {
         "City": " Iwade"
      },
      {
         "City": " Itsukaichi"
      },
      {
         "City": " Itoman"
      },
      {
         "City": " Itoigawa"
      },
      {
         "City": " Itō"
      },
      {
         "City": " Itami"
      },
      {
         "City": " Ishiki"
      },
      {
         "City": " Ishikawa"
      },
      {
         "City": " Ishii"
      },
      {
         "City": " Ishige"
      },
      {
         "City": " Ishigaki"
      },
      {
         "City": " Isesaki"
      },
      {
         "City": " Isehara"
      },
      {
         "City": " Ise"
      },
      {
         "City": " Isawa"
      },
      {
         "City": " Isahaya"
      },
      {
         "City": " Inuyama"
      },
      {
         "City": " Ino"
      },
      {
         "City": " Innoshima"
      },
      {
         "City": " Inazawa"
      },
      {
         "City": " Ina"
      },
      {
         "City": " Imarichō-kō"
      },
      {
         "City": " Imaichi"
      },
      {
         "City": " Ikoma"
      },
      {
         "City": " Ikeda"
      },
      {
         "City": " Ikedachō"
      },
      {
         "City": " Ijūin"
      },
      {
         "City": " Iizuka"
      },
      {
         "City": " Iiyama"
      },
      {
         "City": " Iida"
      },
      {
         "City": " Ichinomiya"
      },
      {
         "City": " Ibusuki"
      },
      {
         "City": " Ibaraki"
      },
      {
         "City": " Ibara"
      },
      {
         "City": " Hotaka"
      },
      {
         "City": " Honjō"
      },
      {
         "City": " Hondo"
      },
      {
         "City": " Hōfu"
      },
      {
         "City": " Hitoyoshi"
      },
      {
         "City": " Hita"
      },
      {
         "City": " Hisai-motomachi"
      },
      {
         "City": " Hiroshima"
      },
      {
         "City": " Hiratsuka"
      },
      {
         "City": " Hiratachō"
      },
      {
         "City": " Hirara"
      },
      {
         "City": " Hirakata"
      },
      {
         "City": " Hirado"
      },
      {
         "City": " Hino"
      },
      {
         "City": " Hino"
      },
      {
         "City": " Himimachi"
      },
      {
         "City": " Himeji"
      },
      {
         "City": " Hikone"
      },
      {
         "City": " Hiji"
      },
      {
         "City": " Hekinan"
      },
      {
         "City": " Hayama"
      },
      {
         "City": " Hatsukaichi"
      },
      {
         "City": " Hatogaya-honchō"
      },
      {
         "City": " Hashimoto"
      },
      {
         "City": " Hanyū"
      },
      {
         "City": " Hannō"
      },
      {
         "City": " Handa"
      },
      {
         "City": " Hamanoichi"
      },
      {
         "City": " Hamamatsu"
      },
      {
         "City": " Hamakita"
      },
      {
         "City": " Hamada"
      },
      {
         "City": " Hakui"
      },
      {
         "City": " Haibara-akanedai"
      },
      {
         "City": " Hagi"
      },
      {
         "City": " Katsuren-haebaru"
      },
      {
         "City": " Hadano"
      },
      {
         "City": " Hachiōji"
      },
      {
         "City": " Ōmihachiman"
      },
      {
         "City": " Gyōda"
      },
      {
         "City": " Gushikawa"
      },
      {
         "City": " Gōtsuchō"
      },
      {
         "City": " Gotenba"
      },
      {
         "City": " Gosen"
      },
      {
         "City": " Gose"
      },
      {
         "City": " Gojō"
      },
      {
         "City": " Gōdo"
      },
      {
         "City": " Gobō"
      },
      {
         "City": " Ginowan"
      },
      {
         "City": " Gifu-shi"
      },
      {
         "City": " Gamagōri"
      },
      {
         "City": " Futtsu"
      },
      {
         "City": " Honchō"
      },
      {
         "City": " Fukuyama"
      },
      {
         "City": " Fukuroi"
      },
      {
         "City": " Fukura"
      },
      {
         "City": " Fukuoka"
      },
      {
         "City": " Fukumitsu"
      },
      {
         "City": " Nishifukuma"
      },
      {
         "City": " Fukui-shi"
      },
      {
         "City": " Fukuechō"
      },
      {
         "City": " Fukuchiyama"
      },
      {
         "City": " Fukiage-fujimi"
      },
      {
         "City": " Fukayachō"
      },
      {
         "City": " Fujisawa"
      },
      {
         "City": " Fujioka"
      },
      {
         "City": " Fujioka"
      },
      {
         "City": " Fujinomiya"
      },
      {
         "City": " Fujieda"
      },
      {
         "City": " Fuji"
      },
      {
         "City": " Fuchūchō"
      },
      {
         "City": " Enzan"
      },
      {
         "City": " Daitōchō"
      },
      {
         "City": " Chōfugaoka"
      },
      {
         "City": " Chiryū"
      },
      {
         "City": " Chino"
      },
      {
         "City": " Chikushino-shi"
      },
      {
         "City": " Chigasaki"
      },
      {
         "City": " Chichibu"
      },
      {
         "City": " Chatan"
      },
      {
         "City": " Beppu"
      },
      {
         "City": " Ayabe"
      },
      {
         "City": " Atami"
      },
      {
         "City": " Ashiya"
      },
      {
         "City": " Ashikaga"
      },
      {
         "City": " Arai"
      },
      {
         "City": " Annaka"
      },
      {
         "City": " Anjō"
      },
      {
         "City": " Anan"
      },
      {
         "City": " Amagi"
      },
      {
         "City": " Amagasaki"
      },
      {
         "City": " Akune"
      },
      {
         "City": " Kariya"
      },
      {
         "City": " Aki"
      },
      {
         "City": " Aioi"
      },
      {
         "City": " Ageoshimo"
      },
      {
         "City": " Okinawa"
      },
      {
         "City": " Kushima"
      },
      {
         "City": " Hikari"
      },
      {
         "City": " Nagato"
      },
      {
         "City": " Hasuda"
      },
      {
         "City": " Kamifukuoka"
      },
      {
         "City": " Sayama"
      },
      {
         "City": " Fussa"
      },
      {
         "City": " Asaka"
      },
      {
         "City": " Wako"
      },
      {
         "City": " Shimotoda"
      },
      {
         "City": " Kimitsu"
      },
      {
         "City": " Miura"
      },
      {
         "City": " Wakayama"
      },
      {
         "City": " Iyo"
      },
      {
         "City": " Uwajima"
      },
      {
         "City": " Saijō"
      },
      {
         "City": " Ōzu"
      },
      {
         "City": " Matsuyama"
      },
      {
         "City": " Masaki-chō"
      },
      {
         "City": " Kawanoechō"
      },
      {
         "City": " Hōjō"
      },
      {
         "City": " Yuzawa"
      },
      {
         "City": " Yotsukaidō"
      },
      {
         "City": " Yonezawa"
      },
      {
         "City": " Yokotemachi"
      },
      {
         "City": " Yōkaichiba"
      },
      {
         "City": " Yanagawamachi-saiwaichō"
      },
      {
         "City": " Yamoto"
      },
      {
         "City": " Yamagata"
      },
      {
         "City": " Yamada"
      },
      {
         "City": " Yachimata"
      },
      {
         "City": " Watari"
      },
      {
         "City": " Wakuya"
      },
      {
         "City": " Ushiku"
      },
      {
         "City": " Tsukuba"
      },
      {
         "City": " Toride"
      },
      {
         "City": " Tōno"
      },
      {
         "City": " Tomobe"
      },
      {
         "City": " Tomiya"
      },
      {
         "City": " Tōgane"
      },
      {
         "City": " Tendō"
      },
      {
         "City": " Takahata"
      },
      {
         "City": " Takahagi"
      },
      {
         "City": " Sukagawa"
      },
      {
         "City": " Shizukuishi"
      },
      {
         "City": " Shisui"
      },
      {
         "City": " Shiroishi"
      },
      {
         "City": " Shiroi"
      },
      {
         "City": " Shiogama"
      },
      {
         "City": " Shinjō"
      },
      {
         "City": " Sendai"
      },
      {
         "City": " Sawara"
      },
      {
         "City": " Sakura"
      },
      {
         "City": " Sagae"
      },
      {
         "City": " Ryūgasaki"
      },
      {
         "City": " Rifu"
      },
      {
         "City": " Ōtsuchi"
      },
      {
         "City": " Ōtawara"
      },
      {
         "City": " Ōmiya"
      },
      {
         "City": " Omigawa"
      },
      {
         "City": " Ōmagari"
      },
      {
         "City": " Okunoya"
      },
      {
         "City": " Ōkawara"
      },
      {
         "City": " Ōhara"
      },
      {
         "City": " Ōfunato"
      },
      {
         "City": " Obanazawa"
      },
      {
         "City": " Ōarai"
      },
      {
         "City": " Ōami"
      },
      {
         "City": " Nihommatsu"
      },
      {
         "City": " Narutō"
      },
      {
         "City": " Narita"
      },
      {
         "City": " Namie"
      },
      {
         "City": " Naka"
      },
      {
         "City": " Nagai"
      },
      {
         "City": " Motomiya"
      },
      {
         "City": " Motegi"
      },
      {
         "City": " Moriya"
      },
      {
         "City": " Morioka"
      },
      {
         "City": " Mooka"
      },
      {
         "City": " Mobara"
      },
      {
         "City": " Mizusawa"
      },
      {
         "City": " Miyako"
      },
      {
         "City": " Mito"
      },
      {
         "City": " Miharu"
      },
      {
         "City": " Matsushima"
      },
      {
         "City": " Mashiko"
      },
      {
         "City": " Marumori"
      },
      {
         "City": " Makabe"
      },
      {
         "City": " Kuroiso"
      },
      {
         "City": " Kōriyama"
      },
      {
         "City": " Kogota"
      },
      {
         "City": " Kitakami"
      },
      {
         "City": " Kitaibaraki"
      },
      {
         "City": " Kamogawa"
      },
      {
         "City": " Katsuura"
      },
      {
         "City": " Katsuta"
      },
      {
         "City": " Katori-shi"
      },
      {
         "City": " Kasama"
      },
      {
         "City": " Karasuyama"
      },
      {
         "City": " Kaminoyama"
      },
      {
         "City": " Kamaishi"
      },
      {
         "City": " Kakuda"
      },
      {
         "City": " Iwase"
      },
      {
         "City": " Iwanuma"
      },
      {
         "City": " Iwaki"
      },
      {
         "City": " Itako"
      },
      {
         "City": " Ishioka"
      },
      {
         "City": " Ishinomaki"
      },
      {
         "City": " Ishikawa"
      },
      {
         "City": " Inawashiro"
      },
      {
         "City": " Ichinoseki"
      },
      {
         "City": " Ichihara"
      },
      {
         "City": " Hobaramachi"
      },
      {
         "City": " Hitachi"
      },
      {
         "City": " Higashine"
      },
      {
         "City": " Hasaki"
      },
      {
         "City": " Hanamaki"
      },
      {
         "City": " Furukawa"
      },
      {
         "City": " Funehikimachi-funehiki"
      },
      {
         "City": " Funaishikawa"
      },
      {
         "City": " Fukushima"
      },
      {
         "City": " Fujishiro"
      },
      {
         "City": " Edosaki"
      },
      {
         "City": " Daigo"
      },
      {
         "City": " Chiba"
      },
      {
         "City": " Asahi"
      },
      {
         "City": " Ami"
      },
      {
         "City": " Akita"
      },
      {
         "City": " Abiko"
      },
      {
         "City": " Akitashi"
      },
      {
         "City": " Bihoro"
      },
      {
         "City": " Wakkanai"
      },
      {
         "City": " Tomakomai"
      },
      {
         "City": " Tōbetsu"
      },
      {
         "City": " Mutsu"
      },
      {
         "City": " Takikawa"
      },
      {
         "City": " Takanosu"
      },
      {
         "City": " Sunagawa"
      },
      {
         "City": " Shizunai-furukawachō"
      },
      {
         "City": " Shiraoi"
      },
      {
         "City": " Shimo-furano"
      },
      {
         "City": " Shibetsu"
      },
      {
         "City": " Sapporo"
      },
      {
         "City": " Rumoi"
      },
      {
         "City": " Otofuke"
      },
      {
         "City": " Otaru"
      },
      {
         "City": " Ōdate"
      },
      {
         "City": " Obihiro"
      },
      {
         "City": " Noshiro"
      },
      {
         "City": " Nemuro"
      },
      {
         "City": " Nayoro"
      },
      {
         "City": " Nanae"
      },
      {
         "City": " Namioka"
      },
      {
         "City": " Muroran"
      },
      {
         "City": " Mombetsu"
      },
      {
         "City": " Misawa"
      },
      {
         "City": " Yoichi"
      },
      {
         "City": " Makubetsu"
      },
      {
         "City": " Kushiro"
      },
      {
         "City": " Kuroishi"
      },
      {
         "City": " Shimokizukuri"
      },
      {
         "City": " Kitami"
      },
      {
         "City": " Kamiiso"
      },
      {
         "City": " Iwanai"
      },
      {
         "City": " Iwamizawa"
      },
      {
         "City": " Ishikari"
      },
      {
         "City": " Ichinohe"
      },
      {
         "City": " Kitahiroshima"
      },
      {
         "City": " Hirosaki"
      },
      {
         "City": " Hanawa"
      },
      {
         "City": " Hakodate"
      },
      {
         "City": " Hachinohe"
      },
      {
         "City": " Fukagawa"
      },
      {
         "City": " Ebetsu"
      },
      {
         "City": " Date"
      },
      {
         "City": " Chitose"
      },
      {
         "City": " Bibai"
      },
      {
         "City": " Ashibetsu"
      },
      {
         "City": " Asahikawa"
      },
      {
         "City": " Aomorishi"
      },
      {
         "City": " Abashiri"
      },
      {
         "City": " Goshogawara"
      },
      {
         "City": " Aso"
      },
      {
         "City": " Nanto-shi"
      },
      {
         "City": " Kawage"
      },
      {
         "City": " Neyagawa"
      },
      {
         "City": " Hitachi-Naka"
      },
      {
         "City": " Inashiki"
      },
      {
         "City": " Ōnojō"
      },
      {
         "City": " Minokamo"
      },
      {
         "City": " Gujō"
      },
      {
         "City": " Jōetsu"
      },
      {
         "City": " Saitama"
      },
      {
         "City": " Higashimurayama-shi"
      },
      {
         "City": " Fujikawaguchiko"
      },
      {
         "City": " Dazaifu"
      },
      {
         "City": " Kamigyō-ku"
      },
      {
         "City": " Buzen"
      },
      {
         "City": " Sendai"
      }
   ],
   "Kenya": [
      {
         "City": " Webuye"
      },
      {
         "City": " Wajir"
      },
      {
         "City": " Voi"
      },
      {
         "City": " Thika"
      },
      {
         "City": " Rongai"
      },
      {
         "City": " Pumwani"
      },
      {
         "City": " Nyeri"
      },
      {
         "City": " Nyahururu"
      },
      {
         "City": " Narok"
      },
      {
         "City": " Nanyuki"
      },
      {
         "City": " Nakuru"
      },
      {
         "City": " Naivasha"
      },
      {
         "City": " Nairobi"
      },
      {
         "City": " Mumias"
      },
      {
         "City": " Muhoroni"
      },
      {
         "City": " Moyale"
      },
      {
         "City": " Mombasa"
      },
      {
         "City": " Molo"
      },
      {
         "City": " Migori"
      },
      {
         "City": " Meru"
      },
      {
         "City": " Mbale"
      },
      {
         "City": " Marsabit"
      },
      {
         "City": " Maralal"
      },
      {
         "City": " Mandera"
      },
      {
         "City": " Malindi"
      },
      {
         "City": " Makueni"
      },
      {
         "City": " Machakos"
      },
      {
         "City": " Lugulu"
      },
      {
         "City": " Lodwar"
      },
      {
         "City": " Lamu"
      },
      {
         "City": " Kitui"
      },
      {
         "City": " Kitale"
      },
      {
         "City": " Kisumu"
      },
      {
         "City": " Kisii"
      },
      {
         "City": " Kilifi"
      },
      {
         "City": " Kiambu"
      },
      {
         "City": " Keruguya"
      },
      {
         "City": " Kericho"
      },
      {
         "City": " Karuri"
      },
      {
         "City": " Kapenguria"
      },
      {
         "City": " Kakamega"
      },
      {
         "City": " Kabarnet"
      },
      {
         "City": " Isiolo"
      },
      {
         "City": " Homa Bay"
      },
      {
         "City": " Garissa"
      },
      {
         "City": " Embu"
      },
      {
         "City": " Eldoret"
      },
      {
         "City": " Busia"
      },
      {
         "City": " Bungoma"
      },
      {
         "City": " Athi River"
      },
      {
         "City": " Siaya"
      },
      {
         "City": " Ol Kalou"
      }
   ],
   "Kyrgyzstan": [
      {
         "City": " Suluktu"
      },
      {
         "City": " Isfana"
      },
      {
         "City": " Balykchy"
      },
      {
         "City": " Tokmok"
      },
      {
         "City": " Tash-Kumyr"
      },
      {
         "City": " Talas"
      },
      {
         "City": " Kyzyl-Suu"
      },
      {
         "City": " Uzgen"
      },
      {
         "City": " Osh"
      },
      {
         "City": " Naryn"
      },
      {
         "City": " Kyzyl-Kyya"
      },
      {
         "City": " Kara Suu"
      },
      {
         "City": " Karakol"
      },
      {
         "City": " Kara-Balta"
      },
      {
         "City": " Kant"
      },
      {
         "City": " Jalal-Abad"
      },
      {
         "City": " Iradan"
      },
      {
         "City": " Cholpon-Ata"
      },
      {
         "City": " Bishkek"
      },
      {
         "City": " Bazar-Korgon"
      },
      {
         "City": " At-Bashi"
      },
      {
         "City": " Toktogul"
      },
      {
         "City": " Osh City"
      }
   ],
   "Cambodia": [
      {
         "City": " Phnom Penh"
      },
      {
         "City": " Ta Khmau"
      },
      {
         "City": " Takeo"
      },
      {
         "City": " Svay Rieng"
      },
      {
         "City": " Stung Treng"
      },
      {
         "City": " Sisŏphŏn"
      },
      {
         "City": " Siem Reap"
      },
      {
         "City": " Prey Veng"
      },
      {
         "City": " Pursat"
      },
      {
         "City": " Phumĭ Véal Srê"
      },
      {
         "City": " Sâmraông"
      },
      {
         "City": " Tbêng Méanchey"
      },
      {
         "City": " Paôy Pêt"
      },
      {
         "City": " Pailin"
      },
      {
         "City": " Lumphăt"
      },
      {
         "City": " Koh Kong"
      },
      {
         "City": " Kratié"
      },
      {
         "City": " Kampot"
      },
      {
         "City": " Kampong Thom"
      },
      {
         "City": " Kampong Speu"
      },
      {
         "City": " Sihanoukville"
      },
      {
         "City": " Kampong Chhnang"
      },
      {
         "City": " Kampong Cham"
      },
      {
         "City": " Ban Lŭng"
      },
      {
         "City": " Battambang"
      },
      {
         "City": " Smach Mean Chey"
      }
   ],
   "Kiribati": [
      {
         "City": " Tarawa"
      }
   ],
   "Comoros": [
      {
         "City": " Moutsamoudou"
      },
      {
         "City": " Moroni"
      }
   ],
   "Saint Kitts and Nevis": [
      {
         "City": " Basseterre"
      }
   ],
   "North Korea": [
      {
         "City": " Yŏnan-ŭp"
      },
      {
         "City": " Wŏnsan"
      },
      {
         "City": " T’ongch’ŏn-ŭp"
      },
      {
         "City": " Sŭngho 1-tong"
      },
      {
         "City": " Sunan"
      },
      {
         "City": " Songnim"
      },
      {
         "City": " Sil-li"
      },
      {
         "City": " Sinmak"
      },
      {
         "City": " Sinanju"
      },
      {
         "City": " Sariwŏn"
      },
      {
         "City": " Samho-rodongjagu"
      },
      {
         "City": " Pyongyang"
      },
      {
         "City": " P’yŏngsŏng"
      },
      {
         "City": " Ongjin"
      },
      {
         "City": " Namp’o"
      },
      {
         "City": " Kusŏng"
      },
      {
         "City": " Kujang-ŭp"
      },
      {
         "City": " Kowŏn-ŭp"
      },
      {
         "City": " Kosan"
      },
      {
         "City": " Kangdong-ŭp"
      },
      {
         "City": " Kaesŏng"
      },
      {
         "City": " Hwangju-ŭp"
      },
      {
         "City": " Hŭngnam"
      },
      {
         "City": " Hŭkkyo-ri"
      },
      {
         "City": " Hoeyang"
      },
      {
         "City": " Hamhŭng"
      },
      {
         "City": " Haeju"
      },
      {
         "City": " Chunghwa"
      },
      {
         "City": " Chŏngju"
      },
      {
         "City": " Changyŏn"
      },
      {
         "City": " Chaeryŏng-ŭp"
      },
      {
         "City": " Ayang-ni"
      },
      {
         "City": " Anju"
      },
      {
         "City": " Anbyŏn-ŭp"
      },
      {
         "City": " Anak"
      },
      {
         "City": " Yuktae-dong"
      },
      {
         "City": " Ŭiju"
      },
      {
         "City": " Sŏnbong"
      },
      {
         "City": " Sinŭiju"
      },
      {
         "City": " Sakchu-ŭp"
      },
      {
         "City": " Yŏnggwang-ŭp"
      },
      {
         "City": " Onsŏng"
      },
      {
         "City": " Nanam"
      },
      {
         "City": " Namyang-dong"
      },
      {
         "City": " Najin"
      },
      {
         "City": " Musan-ŭp"
      },
      {
         "City": " Kyŏngsŏng"
      },
      {
         "City": " Kilju"
      },
      {
         "City": " Kapsan-ŭp"
      },
      {
         "City": " Kanggye-si"
      },
      {
         "City": " Iwŏn-ŭp"
      },
      {
         "City": " Hyesan-dong"
      },
      {
         "City": " Hyesan-si"
      },
      {
         "City": " Hongwŏn"
      },
      {
         "City": " Hoeryŏng"
      },
      {
         "City": " Chongjin"
      },
      {
         "City": " Aoji-ri"
      }
   ],
   "South Korea": [
      {
         "City": " Heung-hai"
      },
      {
         "City": " Enjitsu"
      },
      {
         "City": " Neietsu"
      },
      {
         "City": " Eisen"
      },
      {
         "City": " Reiko"
      },
      {
         "City": " Yŏng-dong"
      },
      {
         "City": " Eisen"
      },
      {
         "City": " Yeoju"
      },
      {
         "City": " Yesan"
      },
      {
         "City": " Yangsan"
      },
      {
         "City": " Yangp'yŏng"
      },
      {
         "City": " Yangju"
      },
      {
         "City": " Yanggu"
      },
      {
         "City": " Wŏnju"
      },
      {
         "City": " Wanju"
      },
      {
         "City": " Waegwan"
      },
      {
         "City": " Ulsan"
      },
      {
         "City": " Uijeongbu-si"
      },
      {
         "City": " Tangjin"
      },
      {
         "City": " Taesal-li"
      },
      {
         "City": " Daejeon"
      },
      {
         "City": " Daegu"
      },
      {
         "City": " Taisen-ri"
      },
      {
         "City": " T’aebaek"
      },
      {
         "City": " Suwon-si"
      },
      {
         "City": " Suncheon"
      },
      {
         "City": " Seoul"
      },
      {
         "City": " Suisan"
      },
      {
         "City": " Jenzan"
      },
      {
         "City": " Seonghwan"
      },
      {
         "City": " Sokcho"
      },
      {
         "City": " Sangju"
      },
      {
         "City": " Santyoku"
      },
      {
         "City": " Fuyo"
      },
      {
         "City": " Busan"
      },
      {
         "City": " Bucheon-si"
      },
      {
         "City": " Puan"
      },
      {
         "City": " Beolgyo"
      },
      {
         "City": " Pohang"
      },
      {
         "City": " Osan"
      },
      {
         "City": " Asan"
      },
      {
         "City": " Okcheon"
      },
      {
         "City": " Kosong"
      },
      {
         "City": " Nonsan"
      },
      {
         "City": " Nangen"
      },
      {
         "City": " Naju"
      },
      {
         "City": " Munsan"
      },
      {
         "City": " Mungyeong"
      },
      {
         "City": " Muan"
      },
      {
         "City": " Moppo"
      },
      {
         "City": " Miryang"
      },
      {
         "City": " Gyeongsan-si"
      },
      {
         "City": " Kyonju"
      },
      {
         "City": " Kwangyang"
      },
      {
         "City": " Gwangju"
      },
      {
         "City": " Gwangju"
      },
      {
         "City": " Kurye"
      },
      {
         "City": " Guri-si"
      },
      {
         "City": " Kunwi"
      },
      {
         "City": " Kunsan"
      },
      {
         "City": " Kinzan"
      },
      {
         "City": " Gumi"
      },
      {
         "City": " Goyang-si"
      },
      {
         "City": " Goseong"
      },
      {
         "City": " Gongju"
      },
      {
         "City": " Kyosai"
      },
      {
         "City": " Koesan"
      },
      {
         "City": " Koch'ang"
      },
      {
         "City": " Kimje"
      },
      {
         "City": " Kimhae"
      },
      {
         "City": " Gimcheon"
      },
      {
         "City": " Gijang"
      },
      {
         "City": " Gapyeong"
      },
      {
         "City": " Kang-neung"
      },
      {
         "City": " Ganghwa-gun"
      },
      {
         "City": " Iksan"
      },
      {
         "City": " Incheon"
      },
      {
         "City": " Imsil"
      },
      {
         "City": " Icheon-si"
      },
      {
         "City": " Hwasun"
      },
      {
         "City": " Hwaseong-si"
      },
      {
         "City": " Hwacheon"
      },
      {
         "City": " Hongsung"
      },
      {
         "City": " Hongch’ŏn"
      },
      {
         "City": " Hayang"
      },
      {
         "City": " Haenam"
      },
      {
         "City": " Chuncheon"
      },
      {
         "City": " Jeonju"
      },
      {
         "City": " Cheongsong gun"
      },
      {
         "City": " Cheongju-si"
      },
      {
         "City": " Cheonan"
      },
      {
         "City": " Chinju"
      },
      {
         "City": " Chinch'ŏn"
      },
      {
         "City": " Jinan-gun"
      },
      {
         "City": " Jeju City"
      },
      {
         "City": " Changwon"
      },
      {
         "City": " Changsu"
      },
      {
         "City": " Anyang-si"
      },
      {
         "City": " Anseong"
      },
      {
         "City": " Ansan-si"
      },
      {
         "City": " Andong"
      },
      {
         "City": " Gaigeturi"
      },
      {
         "City": " Sinhyeon"
      },
      {
         "City": " Yeosu"
      },
      {
         "City": " Yŏnmu"
      },
      {
         "City": " Tonghae"
      },
      {
         "City": " Pubal"
      },
      {
         "City": " Seongnam-si"
      },
      {
         "City": " Hanam"
      },
      {
         "City": " Hwado"
      },
      {
         "City": " Namyangju"
      },
      {
         "City": " Ungsang"
      },
      {
         "City": " Wabu"
      },
      {
         "City": " Naesŏ"
      },
      {
         "City": " Hwawŏn"
      },
      {
         "City": " Kwangmyŏng"
      },
      {
         "City": " Sinan"
      },
      {
         "City": " Seogwipo"
      },
      {
         "City": " Changnyeong"
      }
   ],
   "Kuwait": [
      {
         "City": " Janūb as Surrah"
      },
      {
         "City": " Ḩawallī"
      },
      {
         "City": " Bayān"
      },
      {
         "City": " As Sālimīyah"
      },
      {
         "City": " Ar Rumaythīyah"
      },
      {
         "City": " Ar Riqqah"
      },
      {
         "City": " Al Manqaf"
      },
      {
         "City": " Al Mahbūlah"
      },
      {
         "City": " Kuwait City"
      },
      {
         "City": " Al Jahrā’"
      },
      {
         "City": " Al Faḩāḩīl"
      },
      {
         "City": " Al Finţās"
      },
      {
         "City": " Al Farwānīyah"
      },
      {
         "City": " Al Aḩmadī"
      },
      {
         "City": " Ad Dasmah"
      },
      {
         "City": " Salwá"
      },
      {
         "City": " Ar Rābiyah"
      },
      {
         "City": " Şabāḩ as Sālim"
      }
   ],
   "Cayman Islands": [
      {
         "City": " George Town"
      }
   ],
   "Kazakhstan": [
      {
         "City": " Zhanaozen"
      },
      {
         "City": " Shalqar"
      },
      {
         "City": " Shalkar"
      },
      {
         "City": " Oral"
      },
      {
         "City": " Kandyagash"
      },
      {
         "City": " Qulsary"
      },
      {
         "City": " Khromtau"
      },
      {
         "City": " Karagandy"
      },
      {
         "City": " Embi"
      },
      {
         "City": " Balyqshy"
      },
      {
         "City": " Atyrau"
      },
      {
         "City": " Aqtöbe"
      },
      {
         "City": " Aktau"
      },
      {
         "City": " Aqsay"
      },
      {
         "City": " Zyryanovsk"
      },
      {
         "City": " Zhosaly"
      },
      {
         "City": " Zhezqazghan"
      },
      {
         "City": " Dzhetygara"
      },
      {
         "City": " Zhangatas"
      },
      {
         "City": " Ayteke Bi"
      },
      {
         "City": " Taraz"
      },
      {
         "City": " Zaysan"
      },
      {
         "City": " Yanykurgan"
      },
      {
         "City": " Vannovka"
      },
      {
         "City": " Ush-Tyube"
      },
      {
         "City": " Turkestan"
      },
      {
         "City": " Temirtau"
      },
      {
         "City": " Tekeli"
      },
      {
         "City": " Tasböget"
      },
      {
         "City": " Talghar"
      },
      {
         "City": " Taldykorgan"
      },
      {
         "City": " Taldyqorghan"
      },
      {
         "City": " Shymkent"
      },
      {
         "City": " Chu"
      },
      {
         "City": " Shemonaīkha"
      },
      {
         "City": " Shchūchīnsk"
      },
      {
         "City": " Semey"
      },
      {
         "City": " Saryaghash"
      },
      {
         "City": " Sarkand"
      },
      {
         "City": " Sorang"
      },
      {
         "City": " Rudnyy"
      },
      {
         "City": " Kyzylorda"
      },
      {
         "City": " Kostanay"
      },
      {
         "City": " Karatau"
      },
      {
         "City": " Kapshagay"
      },
      {
         "City": " Petropavl"
      },
      {
         "City": " Pavlodar"
      },
      {
         "City": " Zharkent"
      },
      {
         "City": " Ust-Kamenogorsk"
      },
      {
         "City": " Sarykemer"
      },
      {
         "City": " Merke"
      },
      {
         "City": " Makīnsk"
      },
      {
         "City": " Lisakovsk"
      },
      {
         "City": " Baykonyr"
      },
      {
         "City": " Ridder"
      },
      {
         "City": " Lenger"
      },
      {
         "City": " Kokshetau"
      },
      {
         "City": " Kentau"
      },
      {
         "City": " Esik"
      },
      {
         "City": " Georgīevka"
      },
      {
         "City": " Aksu"
      },
      {
         "City": " Otegen Batyra"
      },
      {
         "City": " Ekibastuz"
      },
      {
         "City": " Shīeli"
      },
      {
         "City": " Shardara"
      },
      {
         "City": " Burunday"
      },
      {
         "City": " Aksu"
      },
      {
         "City": " Balqash"
      },
      {
         "City": " Ayagoz"
      },
      {
         "City": " Atbasar"
      },
      {
         "City": " Arys"
      },
      {
         "City": " Arkalyk"
      },
      {
         "City": " Aral"
      },
      {
         "City": " Astana"
      },
      {
         "City": " Almaty"
      },
      {
         "City": " Akkol’"
      },
      {
         "City": " Abay"
      },
      {
         "City": " Stepnogorsk"
      },
      {
         "City": " Kyzyl-Orda"
      }
   ],
   "Laos": [
      {
         "City": " Vientiane"
      },
      {
         "City": " Xam Nua"
      },
      {
         "City": " Savannakhét"
      },
      {
         "City": " Pakxé"
      },
      {
         "City": " Muang Xay"
      },
      {
         "City": " Vangviang"
      },
      {
         "City": " Muang Phônsavan"
      },
      {
         "City": " Muang Pakxan"
      },
      {
         "City": " Thakhèk"
      },
      {
         "City": " Luang Prabang"
      },
      {
         "City": " Ban Houakhoua"
      },
      {
         "City": " Phonsavan"
      }
   ],
   "Lebanon": [
      {
         "City": " Zahlé"
      },
      {
         "City": " Tripoli"
      },
      {
         "City": " Tyre"
      },
      {
         "City": " Sidon"
      },
      {
         "City": " Ra’s Bayrūt"
      },
      {
         "City": " Djounie"
      },
      {
         "City": " Jbaïl"
      },
      {
         "City": " Habboûch"
      },
      {
         "City": " Bcharré"
      },
      {
         "City": " Beirut"
      },
      {
         "City": " Baalbek"
      },
      {
         "City": " En Nâqoûra"
      },
      {
         "City": " Nabatîyé et Tahta"
      }
   ],
   "Saint Lucia": [
      {
         "City": " Castries"
      }
   ],
   "Liechtenstein": [
      {
         "City": " Vaduz"
      }
   ],
   "Sri Lanka": [
      {
         "City": " Welisara"
      },
      {
         "City": " Weligama"
      },
      {
         "City": " Wattala"
      },
      {
         "City": " Vavuniya"
      },
      {
         "City": " Valvedditturai"
      },
      {
         "City": " Trincomalee"
      },
      {
         "City": " Ratnapura"
      },
      {
         "City": " Puttalam"
      },
      {
         "City": " Point Pedro"
      },
      {
         "City": " Pita Kotte"
      },
      {
         "City": " Peliyagoda"
      },
      {
         "City": " Panadura"
      },
      {
         "City": " Nuwara Eliya"
      },
      {
         "City": " Negombo"
      },
      {
         "City": " Mulleriyawa"
      },
      {
         "City": " Dehiwala-Mount Lavinia"
      },
      {
         "City": " Moratuwa"
      },
      {
         "City": " Matara"
      },
      {
         "City": " Maharagama"
      },
      {
         "City": " Kurunegala"
      },
      {
         "City": " Sri Jayewardenepura Kotte"
      },
      {
         "City": " Kotikawatta"
      },
      {
         "City": " Kolonnawa"
      },
      {
         "City": " Kelaniya"
      },
      {
         "City": " Katunayaka"
      },
      {
         "City": " Kandy"
      },
      {
         "City": " Kandana"
      },
      {
         "City": " Kalutara"
      },
      {
         "City": " Kalmunai"
      },
      {
         "City": " Jaffna"
      },
      {
         "City": " Ja Ela"
      },
      {
         "City": " Homagama"
      },
      {
         "City": " Hendala"
      },
      {
         "City": " Hatton"
      },
      {
         "City": " Hanwella Ihala"
      },
      {
         "City": " Gampola"
      },
      {
         "City": " Galle"
      },
      {
         "City": " Galkissa"
      },
      {
         "City": " Eravur Town"
      },
      {
         "City": " Dambulla"
      },
      {
         "City": " Colombo"
      },
      {
         "City": " Chilaw"
      },
      {
         "City": " Beruwala"
      },
      {
         "City": " Bentota"
      },
      {
         "City": " Batticaloa"
      },
      {
         "City": " Battaramulla South"
      },
      {
         "City": " Badulla"
      },
      {
         "City": " Anuradhapura"
      },
      {
         "City": " Ampara"
      },
      {
         "City": " Ambalangoda"
      },
      {
         "City": " Shanjeev Home"
      },
      {
         "City": " Mount Lavinia"
      }
   ],
   "Liberia": [
      {
         "City": " Zwedru"
      },
      {
         "City": " New Yekepa"
      },
      {
         "City": " Voinjama"
      },
      {
         "City": " Monrovia"
      },
      {
         "City": " Kakata"
      },
      {
         "City": " Harper"
      },
      {
         "City": " Greenville"
      },
      {
         "City": " Gbarnga"
      },
      {
         "City": " Buchanan"
      },
      {
         "City": " Bensonville"
      }
   ],
   "Lesotho": [
      {
         "City": " Quthing"
      },
      {
         "City": " Qacha’s Nek"
      },
      {
         "City": " Mohale’s Hoek"
      },
      {
         "City": " Maseru"
      },
      {
         "City": " Maputsoe"
      },
      {
         "City": " Mafeteng"
      },
      {
         "City": " Leribe"
      },
      {
         "City": " Butha-Buthe"
      }
   ],
   "Lithuania": [
      {
         "City": " Visaginas"
      },
      {
         "City": " Vilnius"
      },
      {
         "City": " Utena"
      },
      {
         "City": " Ukmerge"
      },
      {
         "City": " Telsiai"
      },
      {
         "City": " Taurage"
      },
      {
         "City": " Silute"
      },
      {
         "City": " Šiauliai"
      },
      {
         "City": " Rokiškis"
      },
      {
         "City": " Radviliskis"
      },
      {
         "City": " Plunge"
      },
      {
         "City": " Panevėžys"
      },
      {
         "City": " Palanga"
      },
      {
         "City": " Fabijoniškės"
      },
      {
         "City": " Mazeikiai"
      },
      {
         "City": " Marijampolė"
      },
      {
         "City": " Kretinga"
      },
      {
         "City": " Klaipėda"
      },
      {
         "City": " Kėdainiai"
      },
      {
         "City": " Kaunas"
      },
      {
         "City": " Jonava"
      },
      {
         "City": " Gargždai"
      },
      {
         "City": " Druskininkai"
      },
      {
         "City": " Alytus"
      },
      {
         "City": " Aleksotas"
      },
      {
         "City": " Dainava (Kaunas)"
      },
      {
         "City": " Šilainiai"
      },
      {
         "City": " Eiguliai"
      },
      {
         "City": " Pašilaičiai"
      },
      {
         "City": " Pilaitė"
      },
      {
         "City": " Justiniškės"
      },
      {
         "City": " Šeškinė"
      },
      {
         "City": " Lazdynai"
      },
      {
         "City": " Vilkpėdė"
      },
      {
         "City": " Naujamiestis"
      }
   ],
   "Luxembourg": [
      {
         "City": " Luxembourg"
      },
      {
         "City": " Esch-sur-Alzette"
      },
      {
         "City": " Dudelange"
      }
   ],
   "Latvia": [
      {
         "City": " Valmiera"
      },
      {
         "City": " Ventspils"
      },
      {
         "City": " Vec-Liepāja"
      },
      {
         "City": " Tukums"
      },
      {
         "City": " Salaspils"
      },
      {
         "City": " Riga"
      },
      {
         "City": " Rēzekne"
      },
      {
         "City": " Ogre"
      },
      {
         "City": " Liepāja"
      },
      {
         "City": " Jūrmala"
      },
      {
         "City": " Jelgava"
      },
      {
         "City": " Jēkabpils"
      },
      {
         "City": " Daugavpils"
      },
      {
         "City": " Cēsis"
      }
   ],
   "Libya": [
      {
         "City": " Tobruk"
      },
      {
         "City": " Sulūq"
      },
      {
         "City": " Darnah"
      },
      {
         "City": " Benghazi"
      },
      {
         "City": " Az Zuwaytīnah"
      },
      {
         "City": " At Tāj"
      },
      {
         "City": " Tūkrah"
      },
      {
         "City": " Al Qubbah"
      },
      {
         "City": " Al Marj"
      },
      {
         "City": " Al Jawf"
      },
      {
         "City": " Al Bayḑā’"
      },
      {
         "City": " Al Abyār"
      },
      {
         "City": " Ajdabiya"
      },
      {
         "City": " Zuwārah"
      },
      {
         "City": " Zliten"
      },
      {
         "City": " Zalţan"
      },
      {
         "City": " Yafran"
      },
      {
         "City": " Waddān"
      },
      {
         "City": " Tarhuna"
      },
      {
         "City": " Tripoli"
      },
      {
         "City": " Tagiura"
      },
      {
         "City": " Sirte"
      },
      {
         "City": " Şurmān"
      },
      {
         "City": " Şabrātah"
      },
      {
         "City": " Sabhā"
      },
      {
         "City": " Nālūt"
      },
      {
         "City": " Murzuq"
      },
      {
         "City": " Mizdah"
      },
      {
         "City": " Mişrātah"
      },
      {
         "City": " Masallātah"
      },
      {
         "City": " Hūn"
      },
      {
         "City": " Zawiya"
      },
      {
         "City": " Ghat"
      },
      {
         "City": " Gharyan"
      },
      {
         "City": " Brak"
      },
      {
         "City": " Banī Walīd"
      },
      {
         "City": " Az Zintān"
      },
      {
         "City": " Az Zāwīyah"
      },
      {
         "City": " Awbārī"
      },
      {
         "City": " Al Khums"
      },
      {
         "City": " Al Jadīd"
      }
   ],
   "Morocco": [
      {
         "City": " Zaïo"
      },
      {
         "City": " Zagora"
      },
      {
         "City": " Youssoufia"
      },
      {
         "City": " Tiznit"
      },
      {
         "City": " Tirhanimîne"
      },
      {
         "City": " Tinghir"
      },
      {
         "City": " Tiflet"
      },
      {
         "City": " Tétouan"
      },
      {
         "City": " Taza"
      },
      {
         "City": " Taroudant"
      },
      {
         "City": " Taourirt"
      },
      {
         "City": " Taounate"
      },
      {
         "City": " Tan-Tan"
      },
      {
         "City": " Tangier"
      },
      {
         "City": " Tahla"
      },
      {
         "City": " Souq Larb’a al Gharb"
      },
      {
         "City": " Sidi Yahia El Gharb"
      },
      {
         "City": " Sidi Slimane"
      },
      {
         "City": " Sidi Qacem"
      },
      {
         "City": " Sidi Ifni"
      },
      {
         "City": " Sidi Bennour"
      },
      {
         "City": " Settat"
      },
      {
         "City": " Sefrou"
      },
      {
         "City": " Sale"
      },
      {
         "City": " Safi"
      },
      {
         "City": " Rabat"
      },
      {
         "City": " Oulad Teïma"
      },
      {
         "City": " Oujda"
      },
      {
         "City": " Oued Zem"
      },
      {
         "City": " Ouezzane"
      },
      {
         "City": " Ouarzazat"
      },
      {
         "City": " Nador"
      },
      {
         "City": " Mohammedia"
      },
      {
         "City": " Midelt"
      },
      {
         "City": " Meknès"
      },
      {
         "City": " Mechraa Bel Ksiri"
      },
      {
         "City": " Martil"
      },
      {
         "City": " Marrakesh"
      },
      {
         "City": " Larache"
      },
      {
         "City": " Ksar El Kebir"
      },
      {
         "City": " Khouribga"
      },
      {
         "City": " Khenifra"
      },
      {
         "City": " Kenitra"
      },
      {
         "City": " Kasba Tadla"
      },
      {
         "City": " Jerada"
      },
      {
         "City": " Imzoûrene"
      },
      {
         "City": " Guercif"
      },
      {
         "City": " Guelmim"
      },
      {
         "City": " Fkih Ben Salah"
      },
      {
         "City": " Fès al Bali"
      },
      {
         "City": " Fes"
      },
      {
         "City": " Essaouira"
      },
      {
         "City": " El Jadida"
      },
      {
         "City": " El Hajeb"
      },
      {
         "City": " El Aïoun"
      },
      {
         "City": " Chefchaouene"
      },
      {
         "City": " Casablanca"
      },
      {
         "City": " Bouznika"
      },
      {
         "City": " Berkane"
      },
      {
         "City": " Beni Mellal"
      },
      {
         "City": " Berrechid"
      },
      {
         "City": " Azrou"
      },
      {
         "City": " Azemmour"
      },
      {
         "City": " Asilah"
      },
      {
         "City": " Khemisset"
      },
      {
         "City": " Al Hoceïma"
      },
      {
         "City": " Ahfir"
      },
      {
         "City": " Agadir"
      },
      {
         "City": " Skhirate"
      },
      {
         "City": " Boujniba"
      },
      {
         "City": " Dakhla"
      }
   ],
   "Monaco": [
      {
         "City": " Monte-Carlo"
      },
      {
         "City": " Monaco"
      }
   ],
   "Moldova": [
      {
         "City": " Edineţ"
      },
      {
         "City": " Ungheni"
      },
      {
         "City": " Tiraspolul"
      },
      {
         "City": " Straşeni"
      },
      {
         "City": " Bilicenii Vechi"
      },
      {
         "City": " Soroca"
      },
      {
         "City": " Slobozia"
      },
      {
         "City": " Rîbniţa"
      },
      {
         "City": " Orhei"
      },
      {
         "City": " Hînceşti"
      },
      {
         "City": " Căuşeni"
      },
      {
         "City": " Floreşti"
      },
      {
         "City": " Dubăsari"
      },
      {
         "City": " Drochia"
      },
      {
         "City": " Comrat"
      },
      {
         "City": " Chişinău"
      },
      {
         "City": " Ceadîr-Lunga"
      },
      {
         "City": " Cahul"
      },
      {
         "City": " Bender"
      },
      {
         "City": " Bălţi"
      }
   ],
   "Montenegro": [
      {
         "City": " Podgorica"
      },
      {
         "City": " Pljevlja"
      },
      {
         "City": " Nikšić"
      },
      {
         "City": " Herceg-Novi"
      },
      {
         "City": " Cetinje"
      },
      {
         "City": " Budva"
      },
      {
         "City": " Bijelo Polje"
      },
      {
         "City": " Bar"
      }
   ],
   "Saint Martin": [
      {
         "City": " Marigot"
      }
   ],
   "Madagascar": [
      {
         "City": " Toamasina"
      },
      {
         "City": " Vondrozo"
      },
      {
         "City": " Vohipaho"
      },
      {
         "City": " Vohibinany"
      },
      {
         "City": " Vavatenina"
      },
      {
         "City": " Vangaindrano"
      },
      {
         "City": " Tsiroanomandidy"
      },
      {
         "City": " Tsiombe"
      },
      {
         "City": " Tsaratanana"
      },
      {
         "City": " Toliara"
      },
      {
         "City": " Fort Dauphin"
      },
      {
         "City": " Soavinandriana"
      },
      {
         "City": " Soanindrariny"
      },
      {
         "City": " Soanierana Ivongo"
      },
      {
         "City": " Sitampiky"
      },
      {
         "City": " Sambava"
      },
      {
         "City": " Sakaraha"
      },
      {
         "City": " Sahavato"
      },
      {
         "City": " Sadabe"
      },
      {
         "City": " Nosy Varika"
      },
      {
         "City": " Morondava"
      },
      {
         "City": " Moramanga"
      },
      {
         "City": " Miandrivazo"
      },
      {
         "City": " Miandrarivo"
      },
      {
         "City": " Marovoay"
      },
      {
         "City": " Marolambo"
      },
      {
         "City": " Maroantsetra"
      },
      {
         "City": " Manjakandriana"
      },
      {
         "City": " Mananjary"
      },
      {
         "City": " Mananara"
      },
      {
         "City": " Manakara"
      },
      {
         "City": " Maintirano"
      },
      {
         "City": " Mahanoro"
      },
      {
         "City": " Mahajanga"
      },
      {
         "City": " Maevatanana"
      },
      {
         "City": " Ikongo"
      },
      {
         "City": " Ikalamavony"
      },
      {
         "City": " Ihosy"
      },
      {
         "City": " Ifanadiana"
      },
      {
         "City": " Fianarantsoa"
      },
      {
         "City": " Fenoarivo Be"
      },
      {
         "City": " Fenoarivo Atsinanana"
      },
      {
         "City": " Faratsiho"
      },
      {
         "City": " Farafangana"
      },
      {
         "City": " Fandriana"
      },
      {
         "City": " Betioky"
      },
      {
         "City": " Betafo"
      },
      {
         "City": " Beroroha"
      },
      {
         "City": " Belo sur Tsiribihina"
      },
      {
         "City": " Beloha"
      },
      {
         "City": " Bealanana"
      },
      {
         "City": " Arivonimamo"
      },
      {
         "City": " Antsohimbondrona"
      },
      {
         "City": " Antsohihy"
      },
      {
         "City": " Antsiranana"
      },
      {
         "City": " Antsirabe"
      },
      {
         "City": " Antanifotsy"
      },
      {
         "City": " Antananarivo"
      },
      {
         "City": " Antalaha"
      },
      {
         "City": " Ankazondandy"
      },
      {
         "City": " Ankazobe"
      },
      {
         "City": " Ankazoabo"
      },
      {
         "City": " Anjozorobe"
      },
      {
         "City": " Hell-Ville"
      },
      {
         "City": " Andilamena"
      },
      {
         "City": " Andapa"
      },
      {
         "City": " Ampasimanolotra"
      },
      {
         "City": " Amparafaravola"
      },
      {
         "City": " Ampanihy"
      },
      {
         "City": " Ampahana"
      },
      {
         "City": " Ambovombe"
      },
      {
         "City": " Ambositra"
      },
      {
         "City": " Ambohitrolomahitsy"
      },
      {
         "City": " Amboasary"
      },
      {
         "City": " Amboanjo"
      },
      {
         "City": " Ambilobe"
      },
      {
         "City": " Ambatondrazaka"
      },
      {
         "City": " Ambatolampy"
      },
      {
         "City": " Ambatofinandrahana"
      },
      {
         "City": " Ambato Boeny"
      },
      {
         "City": " Ambarakaraka"
      },
      {
         "City": " Ambanja"
      },
      {
         "City": " Ambalavao"
      },
      {
         "City": " Alarobia"
      }
   ],
   "Marshall Islands": [
      {
         "City": " Majuro"
      },
      {
         "City": " RMI Capitol"
      }
   ],
   "Macedonia": [
      {
         "City": " Желино"
      },
      {
         "City": " Vinica"
      },
      {
         "City": " Veles"
      },
      {
         "City": " Tetovo"
      },
      {
         "City": " Теарце"
      },
      {
         "City": " Студеничани"
      },
      {
         "City": " Strumica"
      },
      {
         "City": " Struga"
      },
      {
         "City": " Shtip"
      },
      {
         "City": " Skopje"
      },
      {
         "City": " Сарај"
      },
      {
         "City": " Ресен"
      },
      {
         "City": " Радовиш"
      },
      {
         "City": " Prilep"
      },
      {
         "City": " Ohrid"
      },
      {
         "City": " Неготино"
      },
      {
         "City": " Negotino"
      },
      {
         "City": " Липково"
      },
      {
         "City": " Kumanovo"
      },
      {
         "City": " Крива Паланка"
      },
      {
         "City": " Kochani"
      },
      {
         "City": " Kičevo"
      },
      {
         "City": " Kavadarci"
      },
      {
         "City": " Kamenjane"
      },
      {
         "City": " Gostivar"
      },
      {
         "City": " Gevgelija"
      },
      {
         "City": " Delcevo"
      },
      {
         "City": " Debar"
      },
      {
         "City": " Brvenica"
      },
      {
         "City": " Bogovinje"
      },
      {
         "City": " Bitola"
      },
      {
         "City": " Šuto Orizare"
      },
      {
         "City": " Butel"
      },
      {
         "City": " Čair"
      },
      {
         "City": " Ilinden"
      },
      {
         "City": " Kisela Voda"
      },
      {
         "City": " Centar Župa"
      }
   ],
   "Mali": [
      {
         "City": " Yorosso"
      },
      {
         "City": " Timbuktu"
      },
      {
         "City": " Sikasso"
      },
      {
         "City": " Ségou"
      },
      {
         "City": " San"
      },
      {
         "City": " Sagalo"
      },
      {
         "City": " Mopti"
      },
      {
         "City": " Markala"
      },
      {
         "City": " Koutiala"
      },
      {
         "City": " Koulikoro"
      },
      {
         "City": " Kolokani"
      },
      {
         "City": " Kayes"
      },
      {
         "City": " Kati"
      },
      {
         "City": " Kangaba"
      },
      {
         "City": " Gao"
      },
      {
         "City": " Djénné"
      },
      {
         "City": " Bougouni"
      },
      {
         "City": " Banamba"
      },
      {
         "City": " Bamako"
      },
      {
         "City": " Bafoulabé"
      }
   ],
   "Myanmar": [
      {
         "City": " Yenangyaung"
      },
      {
         "City": " Nyaungdon"
      },
      {
         "City": " Yamethin"
      },
      {
         "City": " Wakema"
      },
      {
         "City": " Twante"
      },
      {
         "City": " Taungoo"
      },
      {
         "City": " Thongwa"
      },
      {
         "City": " Thayetmyo"
      },
      {
         "City": " Thaton"
      },
      {
         "City": " Tharyarwady"
      },
      {
         "City": " Thanatpin"
      },
      {
         "City": " Thanatpin"
      },
      {
         "City": " Dawei"
      },
      {
         "City": " Taunggyi"
      },
      {
         "City": " Taungdwingyi"
      },
      {
         "City": " Syriam"
      },
      {
         "City": " Sittwe"
      },
      {
         "City": " Shwebo"
      },
      {
         "City": " Sagaing"
      },
      {
         "City": " Yangon"
      },
      {
         "City": " Pyu"
      },
      {
         "City": " Pyinmana"
      },
      {
         "City": " Pyay"
      },
      {
         "City": " Pyapon"
      },
      {
         "City": " Bago"
      },
      {
         "City": " Paungde"
      },
      {
         "City": " Pakokku"
      },
      {
         "City": " Hpa-an"
      },
      {
         "City": " Nyaunglebin"
      },
      {
         "City": " Myitkyina"
      },
      {
         "City": " Myingyan"
      },
      {
         "City": " Myawadi"
      },
      {
         "City": " Myanaung"
      },
      {
         "City": " Mudon"
      },
      {
         "City": " Mawlamyinegyunn"
      },
      {
         "City": " Mawlamyine"
      },
      {
         "City": " Monywa"
      },
      {
         "City": " Mogok"
      },
      {
         "City": " Minbu"
      },
      {
         "City": " Myeik"
      },
      {
         "City": " Meiktila"
      },
      {
         "City": " Pyin Oo Lwin"
      },
      {
         "City": " Mawlaik"
      },
      {
         "City": " Maubin"
      },
      {
         "City": " Martaban"
      },
      {
         "City": " Mandalay"
      },
      {
         "City": " Magway"
      },
      {
         "City": " Loikaw"
      },
      {
         "City": " Letpandan"
      },
      {
         "City": " Lashio"
      },
      {
         "City": " Kyaukse"
      },
      {
         "City": " Kyaikto"
      },
      {
         "City": " Kyaiklat"
      },
      {
         "City": " Kyaikkami"
      },
      {
         "City": " Kayan"
      },
      {
         "City": " Kanbe"
      },
      {
         "City": " Hinthada"
      },
      {
         "City": " Hakha"
      },
      {
         "City": " Chauk"
      },
      {
         "City": " Bogale"
      },
      {
         "City": " Bhamo"
      },
      {
         "City": " Pathein"
      },
      {
         "City": " Myaydo"
      },
      {
         "City": " Nay Pyi Taw"
      }
   ],
   "Mongolia": [
      {
         "City": " Uliastay"
      },
      {
         "City": " Ulaangom"
      },
      {
         "City": " Ölgiy"
      },
      {
         "City": " Khovd"
      },
      {
         "City": " Altai"
      },
      {
         "City": " Ulan Bator"
      },
      {
         "City": " Sühbaatar"
      },
      {
         "City": " Murun-kuren"
      },
      {
         "City": " Mandalgovi"
      },
      {
         "City": " Hovd"
      },
      {
         "City": " Erdenet"
      },
      {
         "City": " Dzüünharaa"
      },
      {
         "City": " Darhan"
      },
      {
         "City": " Dalandzadgad"
      },
      {
         "City": " Saynshand"
      },
      {
         "City": " Bulgan"
      },
      {
         "City": " Bayanhongor"
      },
      {
         "City": " Bayanhongor"
      },
      {
         "City": " Baruun-Urt"
      },
      {
         "City": " Arvayheer"
      },
      {
         "City": " Зуунмод"
      }
   ],
   "Macao": [
      {
         "City": " Macau"
      }
   ],
   "Northern Mariana Islands": [
      {
         "City": " Saipan"
      }
   ],
   "Martinique": [
      {
         "City": " Saint-Joseph"
      },
      {
         "City": " Sainte-Marie"
      },
      {
         "City": " Petite Rivière Salée"
      },
      {
         "City": " Le Robert"
      },
      {
         "City": " Le Lamentin"
      },
      {
         "City": " Le François"
      },
      {
         "City": " La Trinité"
      },
      {
         "City": " Fort-de-France"
      },
      {
         "City": " Ducos"
      }
   ],
   "Mauritania": [
      {
         "City": " Zouerate"
      },
      {
         "City": " Tékane"
      },
      {
         "City": " Sélibaby"
      },
      {
         "City": " Rosso"
      },
      {
         "City": " Nouakchott"
      },
      {
         "City": " Nouâdhibou"
      },
      {
         "City": " Néma"
      },
      {
         "City": " Kiffa"
      },
      {
         "City": " Kaédi"
      },
      {
         "City": " Atar"
      },
      {
         "City": " Aleg"
      }
   ],
   "Montserrat": [
      {
         "City": " Plymouth"
      },
      {
         "City": " Brades"
      }
   ],
   "Malta": [
      {
         "City": " Żabbar"
      },
      {
         "City": " Valletta"
      },
      {
         "City": " Qormi"
      },
      {
         "City": " Mosta"
      },
      {
         "City": " Birkirkara"
      }
   ],
   "Mauritius": [
      {
         "City": " Vacoas"
      },
      {
         "City": " Triolet"
      },
      {
         "City": " Saint Pierre"
      },
      {
         "City": " Quatre Bornes"
      },
      {
         "City": " Port Louis"
      },
      {
         "City": " Mahébourg"
      },
      {
         "City": " Goodlands"
      },
      {
         "City": " Curepipe"
      },
      {
         "City": " Centre de Flacq"
      },
      {
         "City": " Bel Air Rivière Sèche"
      },
      {
         "City": " Le Hochet"
      }
   ],
   "Maldives": [
      {
         "City": " Male"
      }
   ],
   "Malawi": [
      {
         "City": " Karonga"
      },
      {
         "City": " Zomba"
      },
      {
         "City": " Salima"
      },
      {
         "City": " Rumphi"
      },
      {
         "City": " Nsanje"
      },
      {
         "City": " Nkhotakota"
      },
      {
         "City": " Mzuzu"
      },
      {
         "City": " Mzimba"
      },
      {
         "City": " Mulanje"
      },
      {
         "City": " Mchinji"
      },
      {
         "City": " Mangochi"
      },
      {
         "City": " Liwonde"
      },
      {
         "City": " Lilongwe"
      },
      {
         "City": " Kasungu"
      },
      {
         "City": " Dedza"
      },
      {
         "City": " Blantyre"
      },
      {
         "City": " Balaka"
      }
   ],
   "Mexico": [
      {
         "City": " Gustavo A. Madero"
      },
      {
         "City": " San Fernando"
      },
      {
         "City": " Zumpango"
      },
      {
         "City": " Zumpango del Río"
      },
      {
         "City": " Zacualtipán"
      },
      {
         "City": " Zacatlán"
      },
      {
         "City": " Zacatepec"
      },
      {
         "City": " Yecapixtla"
      },
      {
         "City": " Yautepec"
      },
      {
         "City": " Xoxocotla"
      },
      {
         "City": " Xonacatlán"
      },
      {
         "City": " Xochitepec"
      },
      {
         "City": " Xochimilco"
      },
      {
         "City": " Xicotepec de Juárez"
      },
      {
         "City": " Xico"
      },
      {
         "City": " San Miguel Xico Viejo"
      },
      {
         "City": " Álvaro Obregón"
      },
      {
         "City": " Villahermosa"
      },
      {
         "City": " Gustavo A. Madero"
      },
      {
         "City": " Villa Cuauhtémoc Otzolotepec"
      },
      {
         "City": " Veracruz"
      },
      {
         "City": " Venustiano Carranza"
      },
      {
         "City": " Valle Hermoso"
      },
      {
         "City": " Valladolid"
      },
      {
         "City": " Uman"
      },
      {
         "City": " Tuxtla Gutiérrez"
      },
      {
         "City": " Tuxpan de Rodríguez Cano"
      },
      {
         "City": " Tultitlán"
      },
      {
         "City": " Tultepec"
      },
      {
         "City": " Tulancingo"
      },
      {
         "City": " Tula de Allende"
      },
      {
         "City": " Toluca"
      },
      {
         "City": " Tlazcalancingo"
      },
      {
         "City": " Tlaquiltenango"
      },
      {
         "City": " Tlapa de Comonfort"
      },
      {
         "City": " Tlapacoyan"
      },
      {
         "City": " Tlalpan"
      },
      {
         "City": " Tlalnepantla"
      },
      {
         "City": " Tlahuac"
      },
      {
         "City": " Tizimín"
      },
      {
         "City": " Tizayuca"
      },
      {
         "City": " Tixtla de Guerrero"
      },
      {
         "City": " Ticul"
      },
      {
         "City": " Santiago Tíanguistenco"
      },
      {
         "City": " Tezontepec de Aldama"
      },
      {
         "City": " Teziutlan"
      },
      {
         "City": " Texcoco de Mora"
      },
      {
         "City": " Tequixquiac"
      },
      {
         "City": " Tequisquiapan"
      },
      {
         "City": " Cuautitlán Izcalli"
      },
      {
         "City": " Tepoztlán"
      },
      {
         "City": " Tepotzotlán"
      },
      {
         "City": " Tepeji de Ocampo"
      },
      {
         "City": " Tepeaca"
      },
      {
         "City": " Tepatlaxco de Hidalgo"
      },
      {
         "City": " Teoloyucan"
      },
      {
         "City": " Tenosique de Pino Suárez"
      },
      {
         "City": " Tenango de Arista"
      },
      {
         "City": " Temixco"
      },
      {
         "City": " Temapache"
      },
      {
         "City": " Teloloapan"
      },
      {
         "City": " Tecax"
      },
      {
         "City": " Tehuacán"
      },
      {
         "City": " Tecamachalco"
      },
      {
         "City": " Teapa"
      },
      {
         "City": " Taxco de Alarcón"
      },
      {
         "City": " Tapachula"
      },
      {
         "City": " Tantoyuca"
      },
      {
         "City": " Tampico"
      },
      {
         "City": " Tamazunchale"
      },
      {
         "City": " Santo Domingo Tehuantepec"
      },
      {
         "City": " Santiago Tuxtla"
      },
      {
         "City": " Santiago Pinotepa Nacional"
      },
      {
         "City": " Santiago Tulantepec"
      },
      {
         "City": " Moyotzingo"
      },
      {
         "City": " Santa María Chimalhuacán"
      },
      {
         "City": " Santa Cruz Xoxocotlán"
      },
      {
         "City": " Tecamac de Felipe Villanueva"
      },
      {
         "City": " Chiautempan"
      },
      {
         "City": " San Salvador El Seco"
      },
      {
         "City": " San Salvador Atenco"
      },
      {
         "City": " San Pablo de las Salinas"
      },
      {
         "City": " San Pablo Autopan"
      },
      {
         "City": " San Miguel Zinacantepec"
      },
      {
         "City": " Coatlinchán"
      },
      {
         "City": " San Mateo Atenco"
      },
      {
         "City": " San Martin Texmelucan de Labastida"
      },
      {
         "City": " Teolocholco"
      },
      {
         "City": " Teotihuacán de Arista"
      },
      {
         "City": " San Juan del Río"
      },
      {
         "City": " Tuxtepec"
      },
      {
         "City": " San Francisco Acuautla"
      },
      {
         "City": " Sanctorum"
      },
      {
         "City": " San Cristóbal de las Casas"
      },
      {
         "City": " San Andres Tuxtla"
      },
      {
         "City": " Salina Cruz"
      },
      {
         "City": " Río Verde"
      },
      {
         "City": " Río Bravo"
      },
      {
         "City": " Río Blanco"
      },
      {
         "City": " Reynosa"
      },
      {
         "City": " Puerto Escondido"
      },
      {
         "City": " Puente de Ixtla"
      },
      {
         "City": " Puebla"
      },
      {
         "City": " Progreso de Alvaro Obregon"
      },
      {
         "City": " Progreso de Castro"
      },
      {
         "City": " Poza Rica de Hidalgo"
      },
      {
         "City": " Polanco"
      },
      {
         "City": " Playa del Carmen"
      },
      {
         "City": " Pijijiapan"
      },
      {
         "City": " Peto"
      },
      {
         "City": " Perote"
      },
      {
         "City": " Paraiso"
      },
      {
         "City": " Papantla de Olarte"
      },
      {
         "City": " Pánuco"
      },
      {
         "City": " Palmarito Tochapán"
      },
      {
         "City": " Palenque"
      },
      {
         "City": " Pachuca de Soto"
      },
      {
         "City": " Ozumba de Alzate"
      },
      {
         "City": " Oxkutzkab"
      },
      {
         "City": " Orizaba"
      },
      {
         "City": " Ometepec"
      },
      {
         "City": " Ocozocoautla de Espinosa"
      },
      {
         "City": " Ocoyoacac"
      },
      {
         "City": " Ocosingo"
      },
      {
         "City": " Oaxaca de Juárez"
      },
      {
         "City": " Nuevo Laredo"
      },
      {
         "City": " Nogales"
      },
      {
         "City": " Nicolás Romero"
      },
      {
         "City": " Naucalpan de Juárez"
      },
      {
         "City": " Naranjos"
      },
      {
         "City": " Villa Nanchital"
      },
      {
         "City": " Motul"
      },
      {
         "City": " Motozintla"
      },
      {
         "City": " Montemorelos"
      },
      {
         "City": " Santiago Momoxpan"
      },
      {
         "City": " Mixquiahuala de Juarez"
      },
      {
         "City": " Misantla"
      },
      {
         "City": " Miramar"
      },
      {
         "City": " Minatitlan"
      },
      {
         "City": " Milpa Alta"
      },
      {
         "City": " Miahuatlán de Porfirio Díaz"
      },
      {
         "City": " Metepec"
      },
      {
         "City": " Mérida"
      },
      {
         "City": " Matías Romero"
      },
      {
         "City": " Heroica Matamoros"
      },
      {
         "City": " Martínez de la Torre"
      },
      {
         "City": " Mapastepec"
      },
      {
         "City": " Malinaltepec"
      },
      {
         "City": " Magdalena Contreras"
      },
      {
         "City": " Macuspana"
      },
      {
         "City": " Reyes Acozac"
      },
      {
         "City": " Los Reyes La Paz"
      },
      {
         "City": " Linares"
      },
      {
         "City": " Lerma de Villada"
      },
      {
         "City": " Lerdo de Tejada"
      },
      {
         "City": " Las Margaritas"
      },
      {
         "City": " Las Choapas"
      },
      {
         "City": " La Isla"
      },
      {
         "City": " Kanasín"
      },
      {
         "City": " Juchitán de Zaragoza"
      },
      {
         "City": " Jojutla"
      },
      {
         "City": " Jiutepec"
      },
      {
         "City": " Jalpa de Méndez"
      },
      {
         "City": " Xalapa de Enríquez"
      },
      {
         "City": " Izúcar de Matamoros"
      },
      {
         "City": " San Jerónimo Ixtepec"
      },
      {
         "City": " Ixtapan de la Sal"
      },
      {
         "City": " Ixtapaluca"
      },
      {
         "City": " Iztapalapa"
      },
      {
         "City": " Ixtac Zoquitlán"
      },
      {
         "City": " Iztacalco"
      },
      {
         "City": " Ixmiquilpan"
      },
      {
         "City": " Iguala de la Independencia"
      },
      {
         "City": " Hunucmá"
      },
      {
         "City": " Huixtla"
      },
      {
         "City": " Huitzuco de los Figueroa"
      },
      {
         "City": " Huimanguillo"
      },
      {
         "City": " Huejutla de Reyes"
      },
      {
         "City": " Huejotzingo"
      },
      {
         "City": " Huauchinango"
      },
      {
         "City": " Huatusco de Chicuellar"
      },
      {
         "City": " Ciudad de Huajuapan de León"
      },
      {
         "City": " Frontera Comalapa"
      },
      {
         "City": " Frontera"
      },
      {
         "City": " Fortín de las Flores"
      },
      {
         "City": " Felipe Carrillo Puerto"
      },
      {
         "City": " Escárcega"
      },
      {
         "City": " Emiliano Zapata"
      },
      {
         "City": " Emiliano Zapata"
      },
      {
         "City": " Ciudad Mante"
      },
      {
         "City": " Ecatepec"
      },
      {
         "City": " Cunduacán"
      },
      {
         "City": " Cuernavaca"
      },
      {
         "City": " Cuautlancingo"
      },
      {
         "City": " Cuautla Morelos"
      },
      {
         "City": " Cuautitlán"
      },
      {
         "City": " Cuautepec de Hinojosa"
      },
      {
         "City": " Cuajimalpa"
      },
      {
         "City": " San Miguel de Cozumel"
      },
      {
         "City": " Coyotepec"
      },
      {
         "City": " Coyoacán"
      },
      {
         "City": " Cosoleacaque"
      },
      {
         "City": " Cosamaloapan de Carpio"
      },
      {
         "City": " Córdoba"
      },
      {
         "City": " San Bernardino Contla"
      },
      {
         "City": " Comitán"
      },
      {
         "City": " Comalcalco"
      },
      {
         "City": " Coatzintla"
      },
      {
         "City": " Coatzacoalcos"
      },
      {
         "City": " Coatepec"
      },
      {
         "City": " Coacalco"
      },
      {
         "City": " Ciudad Victoria"
      },
      {
         "City": " Ciudad Valles"
      },
      {
         "City": " Ciudad Serdán"
      },
      {
         "City": " Ciudad Sahagun"
      },
      {
         "City": " Ciudad Nezahualcoyotl"
      },
      {
         "City": " Ciudad Miguel Alemán"
      },
      {
         "City": " Ciudad Mendoza"
      },
      {
         "City": " Ciudad Madero"
      },
      {
         "City": " Ciudad Fernández"
      },
      {
         "City": " Mexico City"
      },
      {
         "City": " Ciudad del Carmen"
      },
      {
         "City": " Cintalapa de Figueroa"
      },
      {
         "City": " Cholula"
      },
      {
         "City": " Chilpancingo de los Bravos"
      },
      {
         "City": " Chilapa de Alvarez"
      },
      {
         "City": " Chignahuapan"
      },
      {
         "City": " Chiconcuac"
      },
      {
         "City": " San Vicente Chicoloapan"
      },
      {
         "City": " Chichén-Itzá"
      },
      {
         "City": " Chiautla"
      },
      {
         "City": " Chiapa de Corzo"
      },
      {
         "City": " Chetumal"
      },
      {
         "City": " Champotón"
      },
      {
         "City": " Chalco de Díaz Covarrubias"
      },
      {
         "City": " Cerro Azul"
      },
      {
         "City": " Catemaco"
      },
      {
         "City": " Carlos A. Carrillo"
      },
      {
         "City": " Cardenas"
      },
      {
         "City": " Cárdenas"
      },
      {
         "City": " Capulhuac"
      },
      {
         "City": " Cancún"
      },
      {
         "City": " Campeche"
      },
      {
         "City": " Calpulalpan"
      },
      {
         "City": " Cadereyta"
      },
      {
         "City": " Berriozábal"
      },
      {
         "City": " Banderilla"
      },
      {
         "City": " Azcapotzalco"
      },
      {
         "City": " Axochiapan"
      },
      {
         "City": " Atlixco"
      },
      {
         "City": " Atlacomulco"
      },
      {
         "City": " Ciudad López Mateos"
      },
      {
         "City": " Apizaco"
      },
      {
         "City": " Apan"
      },
      {
         "City": " Amozoc de Mota"
      },
      {
         "City": " Amecameca"
      },
      {
         "City": " Heroica Alvarado"
      },
      {
         "City": " Altotonga"
      },
      {
         "City": " Altepexi"
      },
      {
         "City": " Altamira"
      },
      {
         "City": " Allende"
      },
      {
         "City": " Álamo"
      },
      {
         "City": " Ajalpan"
      },
      {
         "City": " Agua Dulce"
      },
      {
         "City": " Actopan"
      },
      {
         "City": " Acayucan"
      },
      {
         "City": " Acatzingo de Hidalgo"
      },
      {
         "City": " Acatlán de Osorio"
      },
      {
         "City": " Acapulco de Juárez"
      },
      {
         "City": " Acajete"
      },
      {
         "City": " San Antonio de la Cal"
      },
      {
         "City": " Hidalgo"
      },
      {
         "City": " Río de Teapa"
      },
      {
         "City": " Huamantla"
      },
      {
         "City": " Zacatelco"
      },
      {
         "City": " Tlaxcala de Xicohtencatl"
      },
      {
         "City": " Papalotla"
      },
      {
         "City": " Vicente Guerrero"
      },
      {
         "City": " Tonalá"
      },
      {
         "City": " Arriaga"
      },
      {
         "City": " San Andrés Cholula"
      },
      {
         "City": " Tampico"
      },
      {
         "City": " Alto Lucero"
      },
      {
         "City": " San Mateo Otzacatipan"
      },
      {
         "City": " Santa María Totoltepec"
      },
      {
         "City": " San Lorenzo Acopilco"
      },
      {
         "City": " Benito Juarez"
      },
      {
         "City": " Venustiano Carranza"
      },
      {
         "City": " Miguel Hidalgo"
      },
      {
         "City": " Cuauhtémoc"
      },
      {
         "City": " Huixquilucan"
      },
      {
         "City": " Melchor Ocampo"
      },
      {
         "City": " Huilango"
      },
      {
         "City": " Santiago Teyahualco"
      },
      {
         "City": " Ojo de Agua"
      },
      {
         "City": " Buenavista"
      },
      {
         "City": " Miguel Alemán (La Doce)"
      },
      {
         "City": " Leyva Solano"
      },
      {
         "City": " Cihuatlán"
      },
      {
         "City": " Guadalupe Victoria"
      },
      {
         "City": " Ixtapa-Zihuatanejo"
      },
      {
         "City": " Zapotlanejo"
      },
      {
         "City": " Zapotiltic"
      },
      {
         "City": " Zapopan"
      },
      {
         "City": " Zamora"
      },
      {
         "City": " Zacoalco de Torres"
      },
      {
         "City": " Zacatecas"
      },
      {
         "City": " Zacapú"
      },
      {
         "City": " Yuriria"
      },
      {
         "City": " Yurécuaro"
      },
      {
         "City": " Villagrán"
      },
      {
         "City": " Ciudad Frontera"
      },
      {
         "City": " García"
      },
      {
         "City": " Ciudad de Villa de Álvarez"
      },
      {
         "City": " Valle de Santiago"
      },
      {
         "City": " Valle de Bravo"
      },
      {
         "City": " Uruapan"
      },
      {
         "City": " Uriangato"
      },
      {
         "City": " Tuxpan"
      },
      {
         "City": " Torreon"
      },
      {
         "City": " Tonalá"
      },
      {
         "City": " Tlaquepaque"
      },
      {
         "City": " Tlajomulco de Zúñiga"
      },
      {
         "City": " Tijuana"
      },
      {
         "City": " Tesistán"
      },
      {
         "City": " Tequila"
      },
      {
         "City": " Tepic"
      },
      {
         "City": " Tepatitlán de Morelos"
      },
      {
         "City": " Tepalcatepec"
      },
      {
         "City": " Teocaltiche"
      },
      {
         "City": " Tejupilco de Hidalgo"
      },
      {
         "City": " Tecoman"
      },
      {
         "City": " Tecate"
      },
      {
         "City": " Tangancícuaro de Arista"
      },
      {
         "City": " Tamazula de Gordiano"
      },
      {
         "City": " Tala"
      },
      {
         "City": " Tacámbaro de Codallos"
      },
      {
         "City": " Sombrerete"
      },
      {
         "City": " Soledad Díez Gutiérrez"
      },
      {
         "City": " Silao"
      },
      {
         "City": " Sayula"
      },
      {
         "City": " Santiago Papasquiaro"
      },
      {
         "City": " Santiago Ixcuintla"
      },
      {
         "City": " Santiago"
      },
      {
         "City": " Santa Rosa Jauregui"
      },
      {
         "City": " Santa Catarina"
      },
      {
         "City": " Santa Anita"
      },
      {
         "City": " San Sebastián el Grande"
      },
      {
         "City": " San Pedro"
      },
      {
         "City": " San Nicolás de los Garza"
      },
      {
         "City": " San Miguel el Alto"
      },
      {
         "City": " San Miguel de Papasquiaro"
      },
      {
         "City": " San Miguel de Allende"
      },
      {
         "City": " San Luis Río Colorado"
      },
      {
         "City": " San Luis Potosí"
      },
      {
         "City": " San Luis de la Paz"
      },
      {
         "City": " San Luis de la Paz"
      },
      {
         "City": " Cabo San Lucas"
      },
      {
         "City": " San Juan de los Lagos"
      },
      {
         "City": " San José Iturbide"
      },
      {
         "City": " San José del Cabo"
      },
      {
         "City": " San Francisco del Rincón"
      },
      {
         "City": " San Felipe"
      },
      {
         "City": " San Felipe"
      },
      {
         "City": " San Buenaventura"
      },
      {
         "City": " Nicolás R Casillas"
      },
      {
         "City": " Salvatierra"
      },
      {
         "City": " Saltillo"
      },
      {
         "City": " Salamanca"
      },
      {
         "City": " Sahuayo de Morelos"
      },
      {
         "City": " Sabinas Hidalgo"
      },
      {
         "City": " Ciudad Sabinas"
      },
      {
         "City": " Rosarito"
      },
      {
         "City": " Romita"
      },
      {
         "City": " Río Grande"
      },
      {
         "City": " Rincón de Romos"
      },
      {
         "City": " Ramos Arizpe"
      },
      {
         "City": " Santiago de Querétaro"
      },
      {
         "City": " Puruándiro"
      },
      {
         "City": " Puerto Vallarta"
      },
      {
         "City": " Puerto Peñasco"
      },
      {
         "City": " Piedras Negras"
      },
      {
         "City": " Petatlán"
      },
      {
         "City": " Pénjamo"
      },
      {
         "City": " Pátzcuaro"
      },
      {
         "City": " Parras de la Fuente"
      },
      {
         "City": " Paracho de Verduzco"
      },
      {
         "City": " Palau"
      },
      {
         "City": " Ojinaga"
      },
      {
         "City": " Ocotlán"
      },
      {
         "City": " Nuevo México"
      },
      {
         "City": " Nuevo Casas Grandes"
      },
      {
         "City": " Nueva Rosita"
      },
      {
         "City": " Nueva Italia de Ruiz"
      },
      {
         "City": " Nochistlán"
      },
      {
         "City": " Navolato"
      },
      {
         "City": " Navojoa"
      },
      {
         "City": " Nava"
      },
      {
         "City": " Moroleón"
      },
      {
         "City": " Morelia"
      },
      {
         "City": " Monterrey"
      },
      {
         "City": " Monclova"
      },
      {
         "City": " Mexicali"
      },
      {
         "City": " Pedro Meoqui"
      },
      {
         "City": " Melchor Múzquiz"
      },
      {
         "City": " Medina"
      },
      {
         "City": " Mazatlán"
      },
      {
         "City": " Matehuala"
      },
      {
         "City": " Matamoros"
      },
      {
         "City": " Marfil"
      },
      {
         "City": " Maravatío"
      },
      {
         "City": " Manzanillo"
      },
      {
         "City": " Rodolfo Sánchez Taboada"
      },
      {
         "City": " Magdalena de Kino"
      },
      {
         "City": " San Pedro Madera"
      },
      {
         "City": " Los Mochis"
      },
      {
         "City": " Loreto"
      },
      {
         "City": " León"
      },
      {
         "City": " Las Pintas de Arriba"
      },
      {
         "City": " La Piedad Cavadas"
      },
      {
         "City": " La Paz"
      },
      {
         "City": " La Orilla"
      },
      {
         "City": " Lagos de Moreno"
      },
      {
         "City": " La Cruz"
      },
      {
         "City": " La Barca"
      },
      {
         "City": " Santa Cruz de Juventino Rosas"
      },
      {
         "City": " Jocotepec"
      },
      {
         "City": " Jiquílpan de Juárez"
      },
      {
         "City": " Jiménez"
      },
      {
         "City": " Jesús María"
      },
      {
         "City": " Jerez de García Salinas"
      },
      {
         "City": " Jaral del Progreso"
      },
      {
         "City": " Jamay"
      },
      {
         "City": " Jalostotitlán"
      },
      {
         "City": " Ixtlán del Río"
      },
      {
         "City": " Ixtapa"
      },
      {
         "City": " Irapuato"
      },
      {
         "City": " Huetamo de Núñez"
      },
      {
         "City": " Huatabampo"
      },
      {
         "City": " Hidalgo del Parral"
      },
      {
         "City": " Heróica Zitácuaro"
      },
      {
         "City": " Nogales"
      },
      {
         "City": " Heroica Caborca"
      },
      {
         "City": " Hermosillo"
      },
      {
         "City": " Heroica Guaymas"
      },
      {
         "City": " Guasave"
      },
      {
         "City": " Guanajuato"
      },
      {
         "City": " Guamúchil"
      },
      {
         "City": " Guadalupe"
      },
      {
         "City": " Guadalupe"
      },
      {
         "City": " Guadalajara"
      },
      {
         "City": " Gomez Palacio"
      },
      {
         "City": " Juan Jose Rios"
      },
      {
         "City": " General Escobedo"
      },
      {
         "City": " Garza García"
      },
      {
         "City": " Fresnillo"
      },
      {
         "City": " Escuinapa de Hidalgo"
      },
      {
         "City": " Ensenada"
      },
      {
         "City": " Encarnación de Díaz"
      },
      {
         "City": " Empalme"
      },
      {
         "City": " Pueblo Nuevo"
      },
      {
         "City": " El Salto"
      },
      {
         "City": " El Pueblito"
      },
      {
         "City": " El Grullo"
      },
      {
         "City": " Victoria de Durango"
      },
      {
         "City": " Culiacán"
      },
      {
         "City": " Cuauhtémoc"
      },
      {
         "City": " Villa de Costa Rica"
      },
      {
         "City": " Cortazar"
      },
      {
         "City": " Compostela"
      },
      {
         "City": " Comonfort"
      },
      {
         "City": " Colima"
      },
      {
         "City": " Ciudad Obregón"
      },
      {
         "City": " Ciudad Lerdo"
      },
      {
         "City": " Ciudad Juárez"
      },
      {
         "City": " Ciudad Hidalgo"
      },
      {
         "City": " Ciudad Guzmán"
      },
      {
         "City": " Ciudad Delicias"
      },
      {
         "City": " Ciudad Constitución"
      },
      {
         "City": " Ciudad Camargo"
      },
      {
         "City": " Ciudad Anáhuac"
      },
      {
         "City": " Ciudad Altamirano"
      },
      {
         "City": " Ciudad Acuña"
      },
      {
         "City": " Chihuahua"
      },
      {
         "City": " Chapala"
      },
      {
         "City": " Celaya"
      },
      {
         "City": " Castaños"
      },
      {
         "City": " Cananea"
      },
      {
         "City": " Villa Juárez"
      },
      {
         "City": " Calvillo"
      },
      {
         "City": " Víctor Rosales"
      },
      {
         "City": " Autlán de Navarro"
      },
      {
         "City": " Atoyac de Álvarez"
      },
      {
         "City": " Atotonilco el Alto"
      },
      {
         "City": " Armeria"
      },
      {
         "City": " Arcelia"
      },
      {
         "City": " Arandas"
      },
      {
         "City": " Apodaca"
      },
      {
         "City": " Apatzingán"
      },
      {
         "City": " Apaseo el Grande"
      },
      {
         "City": " Apaseo el Alto"
      },
      {
         "City": " Ameca"
      },
      {
         "City": " Allende"
      },
      {
         "City": " Allende"
      },
      {
         "City": " Aguascalientes"
      },
      {
         "City": " Agua Prieta"
      },
      {
         "City": " Acaponeta"
      },
      {
         "City": " Acámbaro"
      },
      {
         "City": " Abasolo"
      },
      {
         "City": " Anáhuac"
      },
      {
         "City": " Dolores Hidalgo Cuna de la Independencia Nacional"
      },
      {
         "City": " Guacamayas"
      },
      {
         "City": " Ciudad Lázaro Cárdenas"
      },
      {
         "City": " Colonia del Valle"
      },
      {
         "City": " Colonia Lindavista"
      },
      {
         "City": " Colonia Nativitas"
      },
      {
         "City": " Las Delicias"
      },
      {
         "City": " San Pedro Garza Garcia"
      },
      {
         "City": " Soledad de Graciano Sánchez"
      },
      {
         "City": " Manzanillo"
      },
      {
         "City": " Naucalpan de Juárez"
      },
      {
         "City": " Hacienda Santa Fe"
      },
      {
         "City": " Fuentes del Valle"
      },
      {
         "City": " San Salvador Tizatlalli"
      },
      {
         "City": " Jardines de la Silla (Jardines)"
      },
      {
         "City": " San Buenaventura"
      },
      {
         "City": " Colonia Santa Teresa"
      },
      {
         "City": " San Jerónimo Cuatro Vientos"
      },
      {
         "City": " San Martín Azcatepec"
      },
      {
         "City": " Fraccionamiento Real Palmas"
      },
      {
         "City": " Pórticos de San Antonio"
      },
      {
         "City": " San Isidro"
      },
      {
         "City": " Centro Familiar la Soledad"
      },
      {
         "City": " San José Guadalupe Otzacatipan"
      },
      {
         "City": " Las Pintitas"
      },
      {
         "City": " Emiliano Zapata"
      },
      {
         "City": " San Antonio Tecómitl"
      },
      {
         "City": " Licenciado Benito Juárez (Campo Gobierno)"
      },
      {
         "City": " Teotihuacán de Arista"
      },
      {
         "City": " Jesús del Monte"
      },
      {
         "City": " San Jorge Pueblo Nuevo"
      },
      {
         "City": " Manuel Ojinaga"
      },
      {
         "City": " Terrazas del Valle"
      },
      {
         "City": " La Ermita"
      },
      {
         "City": " Lomas del Sur"
      },
      {
         "City": " Parque Industrial Ciudad Mitras"
      },
      {
         "City": " Mitras Poniente"
      },
      {
         "City": " Villa del Prado 2da Sección"
      },
      {
         "City": " Tres de Mayo"
      },
      {
         "City": " Don Antonio"
      },
      {
         "City": " Heroica Ciudad de Tlaxiaco"
      },
      {
         "City": " Ciudad de Huitzuco"
      },
      {
         "City": " Casa Blanca"
      },
      {
         "City": " La Providencia Siglo XXI"
      },
      {
         "City": " Ampliación San Mateo (Colonia Solidaridad)"
      },
      {
         "City": " Fraccionamiento Ciudad Olmeca"
      },
      {
         "City": " San Rafael Tlanalapan"
      },
      {
         "City": " Tecámac de Felipe Villanueva"
      },
      {
         "City": " Venceremos"
      },
      {
         "City": " Alborada Jaltenco"
      },
      {
         "City": " Crucecita"
      }
   ],
   "Malaysia": [
      {
         "City": " Padang Mat Sirat"
      },
      {
         "City": " Kuah"
      },
      {
         "City": " Jerantut"
      },
      {
         "City": " Raub"
      },
      {
         "City": " Batu Pahat"
      },
      {
         "City": " Parit Raja"
      },
      {
         "City": " Pekan Nenas"
      },
      {
         "City": " Pontian Kechil"
      },
      {
         "City": " Kampung Pasir Gudang Baru"
      },
      {
         "City": " Kota Tinggi"
      },
      {
         "City": " Taman Senai"
      },
      {
         "City": " Kulai"
      },
      {
         "City": " Skudai"
      },
      {
         "City": " Johor Bahru"
      },
      {
         "City": " Kluang"
      },
      {
         "City": " Yong Peng"
      },
      {
         "City": " Mersing"
      },
      {
         "City": " Segamat"
      },
      {
         "City": " Tangkak"
      },
      {
         "City": " Muar"
      },
      {
         "City": " Bakri"
      },
      {
         "City": " Labis"
      },
      {
         "City": " Kuala Selangor"
      },
      {
         "City": " Batang Berjuntai"
      },
      {
         "City": " Batu Arang"
      },
      {
         "City": " Shah Alam"
      },
      {
         "City": " Klang"
      },
      {
         "City": " Cukai"
      },
      {
         "City": " Kuala Lipis"
      },
      {
         "City": " Papar"
      },
      {
         "City": " Kota Kinabalu"
      },
      {
         "City": " Donggongon"
      },
      {
         "City": " Putatan"
      },
      {
         "City": " Kinarut"
      },
      {
         "City": " Ranau"
      },
      {
         "City": " Semporna"
      },
      {
         "City": " Victoria"
      },
      {
         "City": " Beaufort"
      },
      {
         "City": " Lahad Datu"
      },
      {
         "City": " Sandakan"
      },
      {
         "City": " Keningau"
      },
      {
         "City": " Tawau"
      },
      {
         "City": " Paka"
      },
      {
         "City": " Kertih"
      },
      {
         "City": " Kulim"
      },
      {
         "City": " Bagan Serai"
      },
      {
         "City": " Bedong"
      },
      {
         "City": " Simpang Empat"
      },
      {
         "City": " Taiping"
      },
      {
         "City": " Kuala Kangsar"
      },
      {
         "City": " Ipoh"
      },
      {
         "City": " Gua Musang"
      },
      {
         "City": " Kuala Terengganu"
      },
      {
         "City": " Marang"
      },
      {
         "City": " Tampin"
      },
      {
         "City": " Alor Gajah"
      },
      {
         "City": " Kampung Ayer Keroh"
      },
      {
         "City": " Sungai Udang"
      },
      {
         "City": " Malacca"
      },
      {
         "City": " Banting"
      },
      {
         "City": " Jenjarum"
      },
      {
         "City": " Semenyih"
      },
      {
         "City": " Seremban"
      },
      {
         "City": " Port Dickson"
      },
      {
         "City": " Sepang"
      },
      {
         "City": " Bahau"
      },
      {
         "City": " Kuala Pilah"
      },
      {
         "City": " Pekan"
      },
      {
         "City": " Mentekab"
      },
      {
         "City": " Temerluh"
      },
      {
         "City": " Butterworth"
      },
      {
         "City": " Perai"
      },
      {
         "City": " Bukit Mertajam"
      },
      {
         "City": " Nibong Tebal"
      },
      {
         "City": " Parit Buntar"
      },
      {
         "City": " Tasek Glugor"
      },
      {
         "City": " George Town"
      },
      {
         "City": " Serendah"
      },
      {
         "City": " Rawang"
      },
      {
         "City": " Petaling Jaya"
      },
      {
         "City": " Kuala Lumpur"
      },
      {
         "City": " Sabak Bernam"
      },
      {
         "City": " Sungai Besar"
      },
      {
         "City": " Kuantan"
      },
      {
         "City": " Batu Gajah"
      },
      {
         "City": " Kampar"
      },
      {
         "City": " Tapah Road"
      },
      {
         "City": " Bidur"
      },
      {
         "City": " Lumut"
      },
      {
         "City": " Teluk Intan"
      },
      {
         "City": " Gurun"
      },
      {
         "City": " Sungai Petani"
      },
      {
         "City": " Kepala Batas"
      },
      {
         "City": " Tanah Merah"
      },
      {
         "City": " Kuching"
      },
      {
         "City": " Simanggang"
      },
      {
         "City": " Sarikei"
      },
      {
         "City": " Sibu"
      },
      {
         "City": " Kangar"
      },
      {
         "City": " Jitra"
      },
      {
         "City": " Kuala Kedah"
      },
      {
         "City": " Alor Setar"
      },
      {
         "City": " Pasir Mas"
      },
      {
         "City": " Kota Bharu"
      },
      {
         "City": " Kudat"
      },
      {
         "City": " Kapit"
      },
      {
         "City": " Bintulu"
      },
      {
         "City": " Limbang"
      },
      {
         "City": " Miri"
      },
      {
         "City": " Ulu Tiram"
      },
      {
         "City": " Tanjung Tokong"
      },
      {
         "City": " Tanjung Sepat"
      },
      {
         "City": " Permatang Kuching"
      },
      {
         "City": " Peringat"
      },
      {
         "City": " Ladang Seri Kundang"
      },
      {
         "City": " Pantai Remis"
      },
      {
         "City": " Kuang"
      },
      {
         "City": " Klebang Besar"
      },
      {
         "City": " Kampung Tanjung Karang"
      },
      {
         "City": " Kampung Sungai Ara"
      },
      {
         "City": " Kampung Simpang Renggam"
      },
      {
         "City": " Kampong Pangkal Kalong"
      },
      {
         "City": " Kampong Masjid Tanah"
      },
      {
         "City": " Kampong Kadok"
      },
      {
         "City": " Kampong Dungun"
      },
      {
         "City": " Kampung Bukit Baharu"
      },
      {
         "City": " Kampung Baru Subang"
      },
      {
         "City": " Kampung Baharu Nilai"
      },
      {
         "City": " Kampong Baharu Balakong"
      },
      {
         "City": " Kampung Ayer Molek"
      },
      {
         "City": " Bukit Rambai"
      },
      {
         "City": " Bentong Town"
      },
      {
         "City": " Batu Berendam"
      },
      {
         "City": " Putrajaya"
      },
      {
         "City": " Bandar Labuan"
      },
      {
         "City": " Subang Jaya"
      },
      {
         "City": " Putra Heights"
      },
      {
         "City": " Pantai Cenang"
      }
   ],
   "Mozambique": [
      {
         "City": " Xai-Xai"
      },
      {
         "City": " Dondo"
      },
      {
         "City": " Macia"
      },
      {
         "City": " Tete"
      },
      {
         "City": " Ressano Garcia"
      },
      {
         "City": " Quelimane"
      },
      {
         "City": " Pemba"
      },
      {
         "City": " Nampula"
      },
      {
         "City": " Nacala"
      },
      {
         "City": " Montepuez"
      },
      {
         "City": " Mocímboa"
      },
      {
         "City": " Ilha de Moçambique"
      },
      {
         "City": " Maxixe"
      },
      {
         "City": " Matola"
      },
      {
         "City": " Maputo"
      },
      {
         "City": " Manjacaze"
      },
      {
         "City": " Lichinga"
      },
      {
         "City": " Inhambane"
      },
      {
         "City": " Cuamba"
      },
      {
         "City": " Chokwé"
      },
      {
         "City": " Chimoio"
      },
      {
         "City": " Chibuto"
      },
      {
         "City": " Beira"
      },
      {
         "City": " António Enes"
      },
      {
         "City": " Mutuáli"
      }
   ],
   "Namibia": [
      {
         "City": " Katima Mulilo"
      },
      {
         "City": " Windhoek"
      },
      {
         "City": " Swakopmund"
      },
      {
         "City": " Rundu"
      },
      {
         "City": " Rehoboth"
      },
      {
         "City": " Otjiwarongo"
      },
      {
         "City": " Oshakati"
      },
      {
         "City": " Okahandja"
      },
      {
         "City": " Lüderitz"
      },
      {
         "City": " Keetmanshoop"
      },
      {
         "City": " Grootfontein"
      },
      {
         "City": " Gobabis"
      },
      {
         "City": " Walvis Bay"
      }
   ],
   "New Caledonia": [
      {
         "City": " Nouméa"
      },
      {
         "City": " Mont-Dore"
      },
      {
         "City": " Dumbéa"
      }
   ],
   "Niger": [
      {
         "City": " Birni N Konni"
      },
      {
         "City": " Zinder"
      },
      {
         "City": " Tillabéri"
      },
      {
         "City": " Tibiri"
      },
      {
         "City": " Tessaoua"
      },
      {
         "City": " Téra"
      },
      {
         "City": " Tanout"
      },
      {
         "City": " Tahoua"
      },
      {
         "City": " Niamey"
      },
      {
         "City": " Nguigmi"
      },
      {
         "City": " Mirriah"
      },
      {
         "City": " Mayahi"
      },
      {
         "City": " Matamey"
      },
      {
         "City": " Maradi"
      },
      {
         "City": " Magaria"
      },
      {
         "City": " Madaoua"
      },
      {
         "City": " Illéla"
      },
      {
         "City": " Gaya"
      },
      {
         "City": " Dosso"
      },
      {
         "City": " Dogondoutchi"
      },
      {
         "City": " Diffa"
      },
      {
         "City": " Dakoro"
      },
      {
         "City": " Ayorou"
      },
      {
         "City": " Alaghsas"
      },
      {
         "City": " Agadez"
      }
   ],
   "Norfolk Island": [
      {
         "City": " Kingston"
      }
   ],
   "Nigeria": [
      {
         "City": " Zuru"
      },
      {
         "City": " Zungeru"
      },
      {
         "City": " Zaria"
      },
      {
         "City": " Yola"
      },
      {
         "City": " Yenagoa"
      },
      {
         "City": " Wukari"
      },
      {
         "City": " Wudil"
      },
      {
         "City": " Warri"
      },
      {
         "City": " Wamba"
      },
      {
         "City": " Uyo"
      },
      {
         "City": " Uromi"
      },
      {
         "City": " Umuahia"
      },
      {
         "City": " Ughelli"
      },
      {
         "City": " Ugep"
      },
      {
         "City": " Uga"
      },
      {
         "City": " Ubiaja"
      },
      {
         "City": " Tegina"
      },
      {
         "City": " Tambuwal"
      },
      {
         "City": " Talata Mafara"
      },
      {
         "City": " Takum"
      },
      {
         "City": " Suleja"
      },
      {
         "City": " Sokoto"
      },
      {
         "City": " Soba"
      },
      {
         "City": " Saki"
      },
      {
         "City": " Shagamu"
      },
      {
         "City": " Sapele"
      },
      {
         "City": " Rijau"
      },
      {
         "City": " Rano"
      },
      {
         "City": " Potiskum"
      },
      {
         "City": " Port Harcourt"
      },
      {
         "City": " Pindiga"
      },
      {
         "City": " Patigi"
      },
      {
         "City": " Pankshin"
      },
      {
         "City": " Ozubulu"
      },
      {
         "City": " Oyo"
      },
      {
         "City": " Oyan"
      },
      {
         "City": " Owo"
      },
      {
         "City": " Owerri"
      },
      {
         "City": " Otukpa"
      },
      {
         "City": " Otan Ayegbaju"
      },
      {
         "City": " Osogbo"
      },
      {
         "City": " Orita Eruwa"
      },
      {
         "City": " Onitsha"
      },
      {
         "City": " Ondo"
      },
      {
         "City": " Olupona"
      },
      {
         "City": " Okuta"
      },
      {
         "City": " Okrika"
      },
      {
         "City": " Okigwe"
      },
      {
         "City": " Okene"
      },
      {
         "City": " Oke Mesi"
      },
      {
         "City": " Oke Ila"
      },
      {
         "City": " Ohafia-Ifigh"
      },
      {
         "City": " Ogwashi-Uku"
      },
      {
         "City": " Oguta"
      },
      {
         "City": " Ogoja"
      },
      {
         "City": " Ogaminana"
      },
      {
         "City": " Offa"
      },
      {
         "City": " Ode"
      },
      {
         "City": " Obudu"
      },
      {
         "City": " Obonoma"
      },
      {
         "City": " Numan"
      },
      {
         "City": " Nsukka"
      },
      {
         "City": " Nnewi"
      },
      {
         "City": " Nkwerre"
      },
      {
         "City": " Nkpor"
      },
      {
         "City": " Nguru"
      },
      {
         "City": " Nasarawa"
      },
      {
         "City": " Nafada"
      },
      {
         "City": " Mubi"
      },
      {
         "City": " Moriki"
      },
      {
         "City": " Monguno"
      },
      {
         "City": " Mokwa"
      },
      {
         "City": " Modakeke"
      },
      {
         "City": " Minna"
      },
      {
         "City": " Marte"
      },
      {
         "City": " Malumfashi"
      },
      {
         "City": " Makurdi"
      },
      {
         "City": " Makoko"
      },
      {
         "City": " Maiduguri"
      },
      {
         "City": " Magumeri"
      },
      {
         "City": " Lokoja"
      },
      {
         "City": " Lere"
      },
      {
         "City": " Lapai"
      },
      {
         "City": " Lalupon"
      },
      {
         "City": " Lagos"
      },
      {
         "City": " Lafiagi"
      },
      {
         "City": " Lafia"
      },
      {
         "City": " Kwale"
      },
      {
         "City": " Kumo"
      },
      {
         "City": " Kumagunnam"
      },
      {
         "City": " Kukawa"
      },
      {
         "City": " Kuje"
      },
      {
         "City": " Kontagora"
      },
      {
         "City": " Kiyawa"
      },
      {
         "City": " Kisi"
      },
      {
         "City": " Keffi"
      },
      {
         "City": " Kaura Namoda"
      },
      {
         "City": " Katsina-Ala"
      },
      {
         "City": " Katsina"
      },
      {
         "City": " Kari"
      },
      {
         "City": " Kano"
      },
      {
         "City": " Kamba"
      },
      {
         "City": " Kaiama"
      },
      {
         "City": " Kagoro"
      },
      {
         "City": " Kafanchan"
      },
      {
         "City": " Kaduna"
      },
      {
         "City": " Kachia"
      },
      {
         "City": " Kabba"
      },
      {
         "City": " Jos"
      },
      {
         "City": " Jimeta"
      },
      {
         "City": " Jega"
      },
      {
         "City": " Jebba"
      },
      {
         "City": " Jalingo"
      },
      {
         "City": " Iwo"
      },
      {
         "City": " Itu"
      },
      {
         "City": " Isieke"
      },
      {
         "City": " Ise-Ekiti"
      },
      {
         "City": " Isanlu-Itedoijowa"
      },
      {
         "City": " Ipoti"
      },
      {
         "City": " Iperu"
      },
      {
         "City": " Inisa"
      },
      {
         "City": " Ilorin"
      },
      {
         "City": " Ilobu"
      },
      {
         "City": " Illela"
      },
      {
         "City": " Ilesa"
      },
      {
         "City": " Ilaro"
      },
      {
         "City": " Ila Orangun"
      },
      {
         "City": " Ikot Ekpene"
      },
      {
         "City": " Ikom"
      },
      {
         "City": " Ikirun"
      },
      {
         "City": " Ikire"
      },
      {
         "City": " Ikere-Ekiti"
      },
      {
         "City": " Ikeja"
      },
      {
         "City": " Ijero-Ekiti"
      },
      {
         "City": " Ijebu-Ode"
      },
      {
         "City": " Ijebu-Jesa"
      },
      {
         "City": " Ijebu-Igbo"
      },
      {
         "City": " Ihiala"
      },
      {
         "City": " Igede-Ekiti"
      },
      {
         "City": " Igbo-Ukwu"
      },
      {
         "City": " Igbor"
      },
      {
         "City": " Igbo-Ora"
      },
      {
         "City": " Igboho"
      },
      {
         "City": " Igbeti"
      },
      {
         "City": " Igbara-Odo"
      },
      {
         "City": " Ifo"
      },
      {
         "City": " Idanre"
      },
      {
         "City": " Idah"
      },
      {
         "City": " Ibi"
      },
      {
         "City": " Ibeto"
      },
      {
         "City": " Ibadan"
      },
      {
         "City": " Hadejia"
      },
      {
         "City": " Gwoza"
      },
      {
         "City": " Gwarzo"
      },
      {
         "City": " Gwaram"
      },
      {
         "City": " Gwadabawa"
      },
      {
         "City": " Gusau"
      },
      {
         "City": " Gummi"
      },
      {
         "City": " Gumel"
      },
      {
         "City": " Gombi"
      },
      {
         "City": " Gombe"
      },
      {
         "City": " Gembu"
      },
      {
         "City": " Geidam"
      },
      {
         "City": " Gbongan"
      },
      {
         "City": " Gaya"
      },
      {
         "City": " Gashua"
      },
      {
         "City": " Garko"
      },
      {
         "City": " Ganye"
      },
      {
         "City": " Gamboru"
      },
      {
         "City": " Funtua"
      },
      {
         "City": " Fiditi"
      },
      {
         "City": " Ezza-Ohu"
      },
      {
         "City": " Esuk Oron"
      },
      {
         "City": " Epe"
      },
      {
         "City": " Enugu-Ukwu"
      },
      {
         "City": " Enugu-Ezike"
      },
      {
         "City": " Enugu"
      },
      {
         "City": " Emure-Ekiti"
      },
      {
         "City": " Elele"
      },
      {
         "City": " Ekpoma"
      },
      {
         "City": " Eket"
      },
      {
         "City": " Ejigbo"
      },
      {
         "City": " Eha Amufu"
      },
      {
         "City": " Egbe"
      },
      {
         "City": " Effon Alaiye"
      },
      {
         "City": " Effium"
      },
      {
         "City": " Ebute Ikorodu"
      },
      {
         "City": " Dutsen Wai"
      },
      {
         "City": " Dutse"
      },
      {
         "City": " Dukku"
      },
      {
         "City": " Doma"
      },
      {
         "City": " Dikwa"
      },
      {
         "City": " Deba"
      },
      {
         "City": " Daura"
      },
      {
         "City": " Daura"
      },
      {
         "City": " Darazo"
      },
      {
         "City": " Damboa"
      },
      {
         "City": " Damaturu"
      },
      {
         "City": " Calabar"
      },
      {
         "City": " Burutu"
      },
      {
         "City": " Bukuru"
      },
      {
         "City": " Buguma"
      },
      {
         "City": " Bonny"
      },
      {
         "City": " Bode Saadu"
      },
      {
         "City": " Biu"
      },
      {
         "City": " Birnin Kudu"
      },
      {
         "City": " Birnin Kebbi"
      },
      {
         "City": " Sofo-Birnin-Gwari"
      },
      {
         "City": " Billiri"
      },
      {
         "City": " Bida"
      },
      {
         "City": " Benin City"
      },
      {
         "City": " Bende"
      },
      {
         "City": " Beli"
      },
      {
         "City": " Bauchi"
      },
      {
         "City": " Baro"
      },
      {
         "City": " Bama"
      },
      {
         "City": " Badagry"
      },
      {
         "City": " Babana"
      },
      {
         "City": " Azare"
      },
      {
         "City": " Awka"
      },
      {
         "City": " Awgu"
      },
      {
         "City": " Auchi"
      },
      {
         "City": " Asaba"
      },
      {
         "City": " Argungu"
      },
      {
         "City": " Aramoko-Ekiti"
      },
      {
         "City": " Apomu"
      },
      {
         "City": " Anchau"
      },
      {
         "City": " Amaigbo"
      },
      {
         "City": " Akwanga"
      },
      {
         "City": " Akure"
      },
      {
         "City": " Aku"
      },
      {
         "City": " Ajaokuta"
      },
      {
         "City": " Agulu"
      },
      {
         "City": " Agbor"
      },
      {
         "City": " Afikpo"
      },
      {
         "City": " Ado Odo"
      },
      {
         "City": " Ado-Ekiti"
      },
      {
         "City": " Abuja"
      },
      {
         "City": " Abeokuta"
      },
      {
         "City": " Abakaliki"
      },
      {
         "City": " Aba"
      },
      {
         "City": " Degema Hulk"
      }
   ],
   "Nicaragua": [
      {
         "City": " Tipitapa"
      },
      {
         "City": " Somoto"
      },
      {
         "City": " Somotillo"
      },
      {
         "City": " Siuna"
      },
      {
         "City": " San Rafael del Sur"
      },
      {
         "City": " San Marcos"
      },
      {
         "City": " Rivas"
      },
      {
         "City": " Río Blanco"
      },
      {
         "City": " Rama"
      },
      {
         "City": " Puerto Cabezas"
      },
      {
         "City": " Ocotal"
      },
      {
         "City": " Nueva Guinea"
      },
      {
         "City": " Nandaime"
      },
      {
         "City": " Nagarote"
      },
      {
         "City": " Matagalpa"
      },
      {
         "City": " Masaya"
      },
      {
         "City": " Masatepe"
      },
      {
         "City": " Managua"
      },
      {
         "City": " León"
      },
      {
         "City": " La Paz Centro"
      },
      {
         "City": " Juigalpa"
      },
      {
         "City": " Jinotepe"
      },
      {
         "City": " Jinotega"
      },
      {
         "City": " Jalapa"
      },
      {
         "City": " Granada"
      },
      {
         "City": " Estelí"
      },
      {
         "City": " El Viejo"
      },
      {
         "City": " El Crucero"
      },
      {
         "City": " Diriamba"
      },
      {
         "City": " Corinto"
      },
      {
         "City": " Chinandega"
      },
      {
         "City": " Chichigalpa"
      },
      {
         "City": " Camoapa"
      },
      {
         "City": " Boaco"
      },
      {
         "City": " Bluefields"
      },
      {
         "City": " Ciudad Sandino"
      }
   ],
   "Netherlands": [
      {
         "City": " Zwolle"
      },
      {
         "City": " Zwijndrecht"
      },
      {
         "City": " Zutphen"
      },
      {
         "City": " Zundert"
      },
      {
         "City": " Zoetermeer"
      },
      {
         "City": " Zevenaar"
      },
      {
         "City": " Zeist"
      },
      {
         "City": " Zeewolde"
      },
      {
         "City": " Zandvoort"
      },
      {
         "City": " Zaltbommel"
      },
      {
         "City": " Zaanstad"
      },
      {
         "City": " Zaandam"
      },
      {
         "City": " Wolvega"
      },
      {
         "City": " Woerden"
      },
      {
         "City": " Woensdrecht"
      },
      {
         "City": " Wisch"
      },
      {
         "City": " Winterswijk"
      },
      {
         "City": " Winschoten"
      },
      {
         "City": " Wijk bij Duurstede"
      },
      {
         "City": " Wijchen"
      },
      {
         "City": " Wierden"
      },
      {
         "City": " Westervoort"
      },
      {
         "City": " Werkendam"
      },
      {
         "City": " Weesp"
      },
      {
         "City": " Weert"
      },
      {
         "City": " Wassenaar"
      },
      {
         "City": " Wageningen"
      },
      {
         "City": " Waddinxveen"
      },
      {
         "City": " Waalwijk"
      },
      {
         "City": " Waalre"
      },
      {
         "City": " Vught"
      },
      {
         "City": " Voorst"
      },
      {
         "City": " Voorschoten"
      },
      {
         "City": " Voorhout"
      },
      {
         "City": " Voorburg"
      },
      {
         "City": " Volendam"
      },
      {
         "City": " Vlissingen"
      },
      {
         "City": " Vlagtwedde"
      },
      {
         "City": " Vlaardingen"
      },
      {
         "City": " Vianen"
      },
      {
         "City": " Venray"
      },
      {
         "City": " Venlo"
      },
      {
         "City": " Velsen-Zuid"
      },
      {
         "City": " Velp"
      },
      {
         "City": " Veldhoven"
      },
      {
         "City": " Veghel"
      },
      {
         "City": " Veere"
      },
      {
         "City": " Veenendaal"
      },
      {
         "City": " Veendam"
      },
      {
         "City": " Valkenswaard"
      },
      {
         "City": " Utrecht"
      },
      {
         "City": " Urk"
      },
      {
         "City": " Uithoorn"
      },
      {
         "City": " Uden"
      },
      {
         "City": " Tubbergen"
      },
      {
         "City": " Tongelre"
      },
      {
         "City": " Tilburg"
      },
      {
         "City": " Tiel"
      },
      {
         "City": " Terneuzen"
      },
      {
         "City": " Tegelen"
      },
      {
         "City": " Steenwijk"
      },
      {
         "City": " Steenbergen"
      },
      {
         "City": " Staphorst"
      },
      {
         "City": " Stadskanaal"
      },
      {
         "City": " Spijkenisse"
      },
      {
         "City": " Someren"
      },
      {
         "City": " Soest"
      },
      {
         "City": " Sneek"
      },
      {
         "City": " Sliedrecht"
      },
      {
         "City": " Sittard"
      },
      {
         "City": " Sint-Oedenrode"
      },
      {
         "City": " 's-Hertogenbosch"
      },
      {
         "City": " 's-Gravenzande"
      },
      {
         "City": " The Hague"
      },
      {
         "City": " Schijndel"
      },
      {
         "City": " Schiedam"
      },
      {
         "City": " Scheveningen"
      },
      {
         "City": " Schagen"
      },
      {
         "City": " Rucphen"
      },
      {
         "City": " Rotterdam"
      },
      {
         "City": " Roosendaal"
      },
      {
         "City": " Roermond"
      },
      {
         "City": " Rijswijk"
      },
      {
         "City": " Ridderkerk"
      },
      {
         "City": " Rhoon"
      },
      {
         "City": " Rhenen"
      },
      {
         "City": " Raalte"
      },
      {
         "City": " Putten"
      },
      {
         "City": " Purmerend"
      },
      {
         "City": " Pijnacker"
      },
      {
         "City": " Papendrecht"
      },
      {
         "City": " Oud-Beijerland"
      },
      {
         "City": " Oss"
      },
      {
         "City": " Oosterhout"
      },
      {
         "City": " Oldenzaal"
      },
      {
         "City": " Oldebroek"
      },
      {
         "City": " Oisterwijk"
      },
      {
         "City": " Oegstgeest"
      },
      {
         "City": " Nuth"
      },
      {
         "City": " Nunspeet"
      },
      {
         "City": " Nuenen"
      },
      {
         "City": " Noordwijkerhout"
      },
      {
         "City": " Noordwijk-Binnen"
      },
      {
         "City": " Nijmegen"
      },
      {
         "City": " Nijkerk"
      },
      {
         "City": " Nieuwegein"
      },
      {
         "City": " Nederweert"
      },
      {
         "City": " Naarden"
      },
      {
         "City": " Naaldwijk"
      },
      {
         "City": " Mijdrecht"
      },
      {
         "City": " Middelharnis"
      },
      {
         "City": " Middelburg"
      },
      {
         "City": " Meppel"
      },
      {
         "City": " Meerssen"
      },
      {
         "City": " Medemblik"
      },
      {
         "City": " Maastricht"
      },
      {
         "City": " Maassluis"
      },
      {
         "City": " Maarssen"
      },
      {
         "City": " Losser"
      },
      {
         "City": " Loon op Zand"
      },
      {
         "City": " Lisse"
      },
      {
         "City": " Lindenholt"
      },
      {
         "City": " Lichtenvoorde"
      },
      {
         "City": " Leusden"
      },
      {
         "City": " Lelystad"
      },
      {
         "City": " Leiderdorp"
      },
      {
         "City": " Leiden"
      },
      {
         "City": " Leeuwarden"
      },
      {
         "City": " Leerdam"
      },
      {
         "City": " Leek"
      },
      {
         "City": " Krimpen aan den IJssel"
      },
      {
         "City": " Korrewegwijk"
      },
      {
         "City": " Kerkrade"
      },
      {
         "City": " Katwijk aan Zee"
      },
      {
         "City": " Kampen"
      },
      {
         "City": " IJsselstein"
      },
      {
         "City": " Huizen"
      },
      {
         "City": " Houten"
      },
      {
         "City": " Horst"
      },
      {
         "City": " Hoorn"
      },
      {
         "City": " Hoogezand"
      },
      {
         "City": " Hoogeveen"
      },
      {
         "City": " Hoofddorp"
      },
      {
         "City": " Hoge Vucht"
      },
      {
         "City": " Hoensbroek"
      },
      {
         "City": " Hilversum"
      },
      {
         "City": " Hilvarenbeek"
      },
      {
         "City": " Hillegom"
      },
      {
         "City": " Heusden"
      },
      {
         "City": " Hengelo"
      },
      {
         "City": " Hendrik-Ido-Ambacht"
      },
      {
         "City": " Helmond"
      },
      {
         "City": " Hellevoetsluis"
      },
      {
         "City": " Heiloo"
      },
      {
         "City": " Heesch"
      },
      {
         "City": " Heerlen"
      },
      {
         "City": " Heerhugowaard"
      },
      {
         "City": " Heerenveen"
      },
      {
         "City": " Heerde"
      },
      {
         "City": " Heemstede"
      },
      {
         "City": " Heemskerk"
      },
      {
         "City": " Harlingen"
      },
      {
         "City": " Harenkarspel"
      },
      {
         "City": " Haren"
      },
      {
         "City": " Harderwijk"
      },
      {
         "City": " Hardenberg"
      },
      {
         "City": " Haarlem"
      },
      {
         "City": " Haaksbergen"
      },
      {
         "City": " Groningen"
      },
      {
         "City": " Groesbeek"
      },
      {
         "City": " Gouda"
      },
      {
         "City": " Gorinchem"
      },
      {
         "City": " Goirle"
      },
      {
         "City": " Goes"
      },
      {
         "City": " Gennep"
      },
      {
         "City": " Gendringen"
      },
      {
         "City": " Geldrop"
      },
      {
         "City": " Geldermalsen"
      },
      {
         "City": " Geertruidenberg"
      },
      {
         "City": " Ermelo"
      },
      {
         "City": " Epe"
      },
      {
         "City": " Enschede"
      },
      {
         "City": " Enkhuizen"
      },
      {
         "City": " Emmen"
      },
      {
         "City": " Emmeloord"
      },
      {
         "City": " Elst"
      },
      {
         "City": " Elburg"
      },
      {
         "City": " Eindhoven"
      },
      {
         "City": " Eibergen"
      },
      {
         "City": " Eersel"
      },
      {
         "City": " Ede"
      },
      {
         "City": " Duiven"
      },
      {
         "City": " Druten"
      },
      {
         "City": " Dronten"
      },
      {
         "City": " Drimmelen"
      },
      {
         "City": " Driebergen-Rijsenburg"
      },
      {
         "City": " Drachten"
      },
      {
         "City": " Dordrecht"
      },
      {
         "City": " Dongen"
      },
      {
         "City": " Doetinchem"
      },
      {
         "City": " Diemen"
      },
      {
         "City": " Deventer"
      },
      {
         "City": " Den Helder"
      },
      {
         "City": " Delfzijl"
      },
      {
         "City": " Delft"
      },
      {
         "City": " Delfshaven"
      },
      {
         "City": " De Bilt"
      },
      {
         "City": " Dalfsen"
      },
      {
         "City": " Culemborg"
      },
      {
         "City": " Cuijk"
      },
      {
         "City": " Cranendonck"
      },
      {
         "City": " Castricum"
      },
      {
         "City": " Capelle aan den IJssel"
      },
      {
         "City": " Bussum"
      },
      {
         "City": " Bunschoten"
      },
      {
         "City": " Brunssum"
      },
      {
         "City": " Brummen"
      },
      {
         "City": " Broek op Langedijk"
      },
      {
         "City": " Broek in Waterland"
      },
      {
         "City": " Breda"
      },
      {
         "City": " Boxtel"
      },
      {
         "City": " Boskoop"
      },
      {
         "City": " Borssele"
      },
      {
         "City": " Borne"
      },
      {
         "City": " Born"
      },
      {
         "City": " Borger"
      },
      {
         "City": " Bodegraven"
      },
      {
         "City": " Bloemendaal"
      },
      {
         "City": " Bladel"
      },
      {
         "City": " Beverwijk"
      },
      {
         "City": " Beuningen"
      },
      {
         "City": " Best"
      },
      {
         "City": " Bergschenhoek"
      },
      {
         "City": " Bergeijk"
      },
      {
         "City": " Bergen op Zoom"
      },
      {
         "City": " Benthuizen"
      },
      {
         "City": " Beek"
      },
      {
         "City": " Barneveld"
      },
      {
         "City": " Barendrecht"
      },
      {
         "City": " Baarn"
      },
      {
         "City": " Asten"
      },
      {
         "City": " Assen"
      },
      {
         "City": " Arnhem"
      },
      {
         "City": " Apeldoorn"
      },
      {
         "City": " Anloo"
      },
      {
         "City": " Amsterdam"
      },
      {
         "City": " Amstelveen"
      },
      {
         "City": " Amersfoort"
      },
      {
         "City": " Alphen aan den Rijn"
      },
      {
         "City": " Almere Stad"
      },
      {
         "City": " Almelo"
      },
      {
         "City": " Alkmaar"
      },
      {
         "City": " Alblasserdam"
      },
      {
         "City": " Aalten"
      },
      {
         "City": " Aalsmeer"
      },
      {
         "City": " Amsterdam-Zuidoost"
      },
      {
         "City": " Berkel en Rodenrijs"
      },
      {
         "City": " Ypenburg"
      }
   ],
   "Norway": [
      {
         "City": " Trondheim"
      },
      {
         "City": " Tromsø"
      },
      {
         "City": " Tønsberg"
      },
      {
         "City": " Steinkjer"
      },
      {
         "City": " Stavanger"
      },
      {
         "City": " Skien"
      },
      {
         "City": " Sarpsborg"
      },
      {
         "City": " Sandnes"
      },
      {
         "City": " Sandefjord"
      },
      {
         "City": " Porsgrunn"
      },
      {
         "City": " Oslo"
      },
      {
         "City": " Moss"
      },
      {
         "City": " Molde"
      },
      {
         "City": " Mo i Rana"
      },
      {
         "City": " Lillehammer"
      },
      {
         "City": " Larvik"
      },
      {
         "City": " Kristiansund"
      },
      {
         "City": " Kristiansand"
      },
      {
         "City": " Kongsberg"
      },
      {
         "City": " Horten"
      },
      {
         "City": " Haugesund"
      },
      {
         "City": " Harstad"
      },
      {
         "City": " Hamar"
      },
      {
         "City": " Halden"
      },
      {
         "City": " Gjøvik"
      },
      {
         "City": " Fredrikstad"
      },
      {
         "City": " Drammen"
      },
      {
         "City": " Bodø"
      },
      {
         "City": " Bergen"
      },
      {
         "City": " Arendal"
      },
      {
         "City": " Ålesund"
      },
      {
         "City": " Askøy"
      },
      {
         "City": " Ytrebygda"
      }
   ],
   "Nepal": [
      {
         "City": " Wāling"
      },
      {
         "City": " Tulsīpur"
      },
      {
         "City": " Tīkāpur"
      },
      {
         "City": " Tānsen"
      },
      {
         "City": " Sirāhā"
      },
      {
         "City": " Rājbirāj"
      },
      {
         "City": " Pokhara"
      },
      {
         "City": " Pātan"
      },
      {
         "City": " Panauti̇̄"
      },
      {
         "City": " Malangwa"
      },
      {
         "City": " Mahendranagar"
      },
      {
         "City": " Lahān"
      },
      {
         "City": " Kirtipur"
      },
      {
         "City": " Khāndbāri"
      },
      {
         "City": " Kathmandu"
      },
      {
         "City": " Janakpur"
      },
      {
         "City": " Jaleswar"
      },
      {
         "City": " Ithari"
      },
      {
         "City": " Ilām"
      },
      {
         "City": " Hetauda"
      },
      {
         "City": " Gulariyā"
      },
      {
         "City": " Gaur"
      },
      {
         "City": " Dharān Bāzār"
      },
      {
         "City": " Dhankutā"
      },
      {
         "City": " Dhangarhi"
      },
      {
         "City": " Dārchulā"
      },
      {
         "City": " Dailekh"
      },
      {
         "City": " Dadeldhurā"
      },
      {
         "City": " Butwāl"
      },
      {
         "City": " Bīrganj"
      },
      {
         "City": " Birātnagar"
      },
      {
         "City": " Bharatpur"
      },
      {
         "City": " Bhairāhawā"
      },
      {
         "City": " Bhadrapur"
      },
      {
         "City": " Banepā"
      },
      {
         "City": " Bāglung"
      },
      {
         "City": " Birendranagar"
      },
      {
         "City": " Dipayal"
      },
      {
         "City": " Nepalgunj"
      }
   ],
   "Nauru": [
      {
         "City": " Yaren"
      }
   ],
   "Niue": [
      {
         "City": " Alofi"
      }
   ],
   "New Zealand": [
      {
         "City": " Wellington"
      },
      {
         "City": " Wanganui"
      },
      {
         "City": " Timaru"
      },
      {
         "City": " Taupo"
      },
      {
         "City": " Pukekohe East"
      },
      {
         "City": " Porirua"
      },
      {
         "City": " Paraparaumu"
      },
      {
         "City": " Palmerston North"
      },
      {
         "City": " North Shore"
      },
      {
         "City": " New Plymouth"
      },
      {
         "City": " Nelson"
      },
      {
         "City": " Napier"
      },
      {
         "City": " Manukau City"
      },
      {
         "City": " Mangere"
      },
      {
         "City": " Lower Hutt"
      },
      {
         "City": " Invercargill"
      },
      {
         "City": " Hastings"
      },
      {
         "City": " Hamilton"
      },
      {
         "City": " Dunedin"
      },
      {
         "City": " Christchurch"
      },
      {
         "City": " Auckland"
      },
      {
         "City": " Levin"
      },
      {
         "City": " Gisborne"
      },
      {
         "City": " Masterton"
      },
      {
         "City": " Tauranga"
      },
      {
         "City": " Papakura"
      },
      {
         "City": " Whakatane"
      },
      {
         "City": " Ashburton"
      },
      {
         "City": " Whangarei"
      },
      {
         "City": " Cambridge"
      },
      {
         "City": " Rotorua"
      },
      {
         "City": " Blenheim"
      },
      {
         "City": " Upper Hutt"
      },
      {
         "City": " Taradale"
      },
      {
         "City": " Waitakere"
      }
   ],
   "Oman": [
      {
         "City": " Sur"
      },
      {
         "City": " Sohar"
      },
      {
         "City": " Sufālat Samā’il"
      },
      {
         "City": " Shināş"
      },
      {
         "City": " Şalālah"
      },
      {
         "City": " Şaḩam"
      },
      {
         "City": " Nizwá"
      },
      {
         "City": " Muscat"
      },
      {
         "City": " Khasab"
      },
      {
         "City": " Izkī"
      },
      {
         "City": " ‘Ibrī"
      },
      {
         "City": " Ibrā’"
      },
      {
         "City": " Bidbid"
      },
      {
         "City": " Bawshar"
      },
      {
         "City": " Barkā’"
      },
      {
         "City": " Bahlā’"
      },
      {
         "City": " Badīyah"
      },
      {
         "City": " As Suwayq"
      },
      {
         "City": " Seeb"
      },
      {
         "City": " Rustaq"
      },
      {
         "City": " Al Liwā’"
      },
      {
         "City": " Al Khābūrah"
      },
      {
         "City": " Al Buraymī"
      },
      {
         "City": " Ādam"
      },
      {
         "City": " Yanqul"
      }
   ],
   "Panama": [
      {
         "City": " Vista Alegre"
      },
      {
         "City": " Veracruz"
      },
      {
         "City": " Tocumen"
      },
      {
         "City": " Santiago de Veraguas"
      },
      {
         "City": " San Miguelito"
      },
      {
         "City": " Puerto Armuelles"
      },
      {
         "City": " Pedregal"
      },
      {
         "City": " Panamá"
      },
      {
         "City": " Pacora"
      },
      {
         "City": " Nuevo Arraiján"
      },
      {
         "City": " Las Cumbres"
      },
      {
         "City": " La Concepción"
      },
      {
         "City": " La Chorrera"
      },
      {
         "City": " La Cabima"
      },
      {
         "City": " David"
      },
      {
         "City": " Colón"
      },
      {
         "City": " Chitré"
      },
      {
         "City": " Chilibre"
      },
      {
         "City": " Chepo"
      },
      {
         "City": " Changuinola"
      },
      {
         "City": " Cativá"
      },
      {
         "City": " Arraiján"
      },
      {
         "City": " Alcalde Díaz"
      },
      {
         "City": " Aguadulce"
      }
   ],
   "Peru": [
      {
         "City": " Yurimaguas"
      },
      {
         "City": " Virú"
      },
      {
         "City": " Uchiza"
      },
      {
         "City": " Tumbes"
      },
      {
         "City": " Trujillo"
      },
      {
         "City": " Tocache"
      },
      {
         "City": " Tingo María"
      },
      {
         "City": " Tambo Grande"
      },
      {
         "City": " Talara"
      },
      {
         "City": " Sullana"
      },
      {
         "City": " Sechura"
      },
      {
         "City": " Santiago de Cao"
      },
      {
         "City": " San Pedro de Lloc"
      },
      {
         "City": " Saña"
      },
      {
         "City": " Rioja"
      },
      {
         "City": " Querecotillo"
      },
      {
         "City": " Pucallpa"
      },
      {
         "City": " Piura"
      },
      {
         "City": " Pimentel"
      },
      {
         "City": " Picsi"
      },
      {
         "City": " Paita"
      },
      {
         "City": " Paiján"
      },
      {
         "City": " Pacasmayo"
      },
      {
         "City": " Moyobamba"
      },
      {
         "City": " Monsefú"
      },
      {
         "City": " Moche"
      },
      {
         "City": " Marcavelica"
      },
      {
         "City": " La Unión"
      },
      {
         "City": " Laredo"
      },
      {
         "City": " La Peca"
      },
      {
         "City": " Lambayeque"
      },
      {
         "City": " Juanjuí"
      },
      {
         "City": " Jaén"
      },
      {
         "City": " Iquitos"
      },
      {
         "City": " Huaraz"
      },
      {
         "City": " Huánuco"
      },
      {
         "City": " Huamachuco"
      },
      {
         "City": " Guadalupe"
      },
      {
         "City": " Ferreñafe"
      },
      {
         "City": " Coishco"
      },
      {
         "City": " Chulucanas"
      },
      {
         "City": " Chongoyape"
      },
      {
         "City": " Chocope"
      },
      {
         "City": " Chimbote"
      },
      {
         "City": " Chiclayo"
      },
      {
         "City": " Chepén"
      },
      {
         "City": " Chachapoyas"
      },
      {
         "City": " Catacaos"
      },
      {
         "City": " Cajamarca"
      },
      {
         "City": " Bellavista"
      },
      {
         "City": " Bagua Grande"
      },
      {
         "City": " La Breita"
      },
      {
         "City": " Zarumilla"
      },
      {
         "City": " Yunguyo"
      },
      {
         "City": " Yanacancha"
      },
      {
         "City": " Tarma"
      },
      {
         "City": " Tambopata"
      },
      {
         "City": " Tacna"
      },
      {
         "City": " Santiago de Surco"
      },
      {
         "City": " Sicuani"
      },
      {
         "City": " Satipo"
      },
      {
         "City": " San Vicente de Cañete"
      },
      {
         "City": " Santa Ana"
      },
      {
         "City": " San Isidro"
      },
      {
         "City": " San Clemente"
      },
      {
         "City": " Puno"
      },
      {
         "City": " Puerto Maldonado"
      },
      {
         "City": " Pisco"
      },
      {
         "City": " Paramonga"
      },
      {
         "City": " Nuevo Imperial"
      },
      {
         "City": " Nazca"
      },
      {
         "City": " Moquegua"
      },
      {
         "City": " Mollendo"
      },
      {
         "City": " Minas de Marcona"
      },
      {
         "City": " Mala"
      },
      {
         "City": " Lima"
      },
      {
         "City": " La Oroya"
      },
      {
         "City": " Junín"
      },
      {
         "City": " Juliaca"
      },
      {
         "City": " Jauja"
      },
      {
         "City": " Imperial"
      },
      {
         "City": " Ilo"
      },
      {
         "City": " Ilave"
      },
      {
         "City": " Ica"
      },
      {
         "City": " Huaura"
      },
      {
         "City": " Huarmey"
      },
      {
         "City": " Huaral"
      },
      {
         "City": " Huanta"
      },
      {
         "City": " Huancayo"
      },
      {
         "City": " Huancavelica"
      },
      {
         "City": " Hualmay"
      },
      {
         "City": " Huacho"
      },
      {
         "City": " Cusco"
      },
      {
         "City": " Chosica"
      },
      {
         "City": " Chincha Alta"
      },
      {
         "City": " Chaupimarca"
      },
      {
         "City": " Chancay"
      },
      {
         "City": " Cerro de Pasco"
      },
      {
         "City": " Camaná"
      },
      {
         "City": " Callao"
      },
      {
         "City": " Barranca"
      },
      {
         "City": " Ayaviri"
      },
      {
         "City": " Ayacucho"
      },
      {
         "City": " Arequipa"
      },
      {
         "City": " Andahuaylas"
      },
      {
         "City": " Abancay"
      },
      {
         "City": " La Rinconada"
      }
   ],
   "French Polynesia": [
      {
         "City": " Punaauia"
      },
      {
         "City": " Papeete"
      },
      {
         "City": " Faaa"
      }
   ],
   "Papua New Guinea": [
      {
         "City": " Wewak"
      },
      {
         "City": " Port Moresby"
      },
      {
         "City": " Popondetta"
      },
      {
         "City": " Mount Hagen"
      },
      {
         "City": " Mendi"
      },
      {
         "City": " Madang"
      },
      {
         "City": " Lae"
      },
      {
         "City": " Kokopo"
      },
      {
         "City": " Kimbe"
      },
      {
         "City": " Goroka"
      },
      {
         "City": " Daru"
      },
      {
         "City": " Bulolo"
      },
      {
         "City": " Arawa"
      }
   ],
   "Philippines": [
      {
         "City": " Zamboanga"
      },
      {
         "City": " Wao"
      },
      {
         "City": " Virac"
      },
      {
         "City": " Vigan"
      },
      {
         "City": " Victorias"
      },
      {
         "City": " Victoria"
      },
      {
         "City": " Veruela"
      },
      {
         "City": " Valencia"
      },
      {
         "City": " Urdaneta"
      },
      {
         "City": " Ualog"
      },
      {
         "City": " Tupi"
      },
      {
         "City": " Tuguegarao City"
      },
      {
         "City": " Trento"
      },
      {
         "City": " Toledo"
      },
      {
         "City": " Tiwi"
      },
      {
         "City": " Ternate"
      },
      {
         "City": " Teresa"
      },
      {
         "City": " Telabastagan"
      },
      {
         "City": " Taytay"
      },
      {
         "City": " Tayabas"
      },
      {
         "City": " Tarlac City"
      },
      {
         "City": " Tanza"
      },
      {
         "City": " Tanjay"
      },
      {
         "City": " Tangub"
      },
      {
         "City": " Tandag"
      },
      {
         "City": " Tanay"
      },
      {
         "City": " Tanauan"
      },
      {
         "City": " Tanauan"
      },
      {
         "City": " Taloc"
      },
      {
         "City": " Talisay"
      },
      {
         "City": " Talisay"
      },
      {
         "City": " Talisay"
      },
      {
         "City": " Talavera"
      },
      {
         "City": " Talacogon"
      },
      {
         "City": " Tagum"
      },
      {
         "City": " Taguig"
      },
      {
         "City": " Tagudin"
      },
      {
         "City": " Tagoloan"
      },
      {
         "City": " Tagbilaran City"
      },
      {
         "City": " Tagas"
      },
      {
         "City": " Tacurong"
      },
      {
         "City": " Tabuk"
      },
      {
         "City": " Tabaco"
      },
      {
         "City": " Taal"
      },
      {
         "City": " Surigao"
      },
      {
         "City": " Surallah"
      },
      {
         "City": " Subic"
      },
      {
         "City": " Suay"
      },
      {
         "City": " Sorsogon"
      },
      {
         "City": " Solano"
      },
      {
         "City": " Solana"
      },
      {
         "City": " Sitangkai"
      },
      {
         "City": " Sipalay"
      },
      {
         "City": " Silang"
      },
      {
         "City": " Sibulan"
      },
      {
         "City": " Sexmoan"
      },
      {
         "City": " Sebu"
      },
      {
         "City": " Sariaya"
      },
      {
         "City": " San Vicente"
      },
      {
         "City": " Santo Tomas"
      },
      {
         "City": " Santol"
      },
      {
         "City": " Santiago"
      },
      {
         "City": " Santa Rosa"
      },
      {
         "City": " Santa Maria"
      },
      {
         "City": " Santa Maria"
      },
      {
         "City": " Santa Cruz"
      },
      {
         "City": " Santa Cruz"
      },
      {
         "City": " Santa Cruz"
      },
      {
         "City": " Santa Catalina"
      },
      {
         "City": " Santa Barbara"
      },
      {
         "City": " Santa Ana"
      },
      {
         "City": " San Simon"
      },
      {
         "City": " San Pedro"
      },
      {
         "City": " San Pascual"
      },
      {
         "City": " San Pablo"
      },
      {
         "City": " San Nicolas"
      },
      {
         "City": " San Narciso"
      },
      {
         "City": " San Miguel"
      },
      {
         "City": " San Miguel"
      },
      {
         "City": " San Mateo"
      },
      {
         "City": " San Mateo"
      },
      {
         "City": " San Mariano"
      },
      {
         "City": " San Marcelino"
      },
      {
         "City": " San Luis"
      },
      {
         "City": " San Leonardo"
      },
      {
         "City": " San Juan"
      },
      {
         "City": " San Jose del Monte"
      },
      {
         "City": " San Jose"
      },
      {
         "City": " San Jose"
      },
      {
         "City": " San Ildefonso"
      },
      {
         "City": " San Francisco"
      },
      {
         "City": " Aurora"
      },
      {
         "City": " San Francisco"
      },
      {
         "City": " San Fernando"
      },
      {
         "City": " San Fernando"
      },
      {
         "City": " San Fernando"
      },
      {
         "City": " San Antonio"
      },
      {
         "City": " San Antonio"
      },
      {
         "City": " San Antonio"
      },
      {
         "City": " Sampaloc"
      },
      {
         "City": " Samal"
      },
      {
         "City": " Samal"
      },
      {
         "City": " Sagay"
      },
      {
         "City": " Sablayan"
      },
      {
         "City": " Roxas"
      },
      {
         "City": " Roxas City"
      },
      {
         "City": " Roxas"
      },
      {
         "City": " Romblon"
      },
      {
         "City": " Rizal"
      },
      {
         "City": " Recodo"
      },
      {
         "City": " Ramos"
      },
      {
         "City": " Ramon"
      },
      {
         "City": " Quiapo"
      },
      {
         "City": " Quezon City"
      },
      {
         "City": " Quezon"
      },
      {
         "City": " Quezon"
      },
      {
         "City": " Pulupandan"
      },
      {
         "City": " Pulong Santa Cruz"
      },
      {
         "City": " Pulilan"
      },
      {
         "City": " Puerto Princesa"
      },
      {
         "City": " Port Area"
      },
      {
         "City": " Porac"
      },
      {
         "City": " Polomolok"
      },
      {
         "City": " Polangui"
      },
      {
         "City": " Plaridel"
      },
      {
         "City": " Pio"
      },
      {
         "City": " Pinamungahan"
      },
      {
         "City": " Pinamalayan"
      },
      {
         "City": " Pililla"
      },
      {
         "City": " Pilar"
      },
      {
         "City": " Pila"
      },
      {
         "City": " Peñaranda"
      },
      {
         "City": " Patuto"
      },
      {
         "City": " Passi"
      },
      {
         "City": " Parang"
      },
      {
         "City": " Paraiso"
      },
      {
         "City": " Papaya"
      },
      {
         "City": " Paombong"
      },
      {
         "City": " Pantubig"
      },
      {
         "City": " Paniqui"
      },
      {
         "City": " Pangil"
      },
      {
         "City": " Pandi"
      },
      {
         "City": " Pandacaqui"
      },
      {
         "City": " Panalanoy"
      },
      {
         "City": " Panabo"
      },
      {
         "City": " Palo"
      },
      {
         "City": " Palayan City"
      },
      {
         "City": " Pagbilao"
      },
      {
         "City": " Pagaluñgan"
      },
      {
         "City": " Pagadian"
      },
      {
         "City": " Paete"
      },
      {
         "City": " Pacol"
      },
      {
         "City": " Ozamiz City"
      },
      {
         "City": " Oroquieta"
      },
      {
         "City": " Ormoc"
      },
      {
         "City": " Orion"
      },
      {
         "City": " Orani"
      },
      {
         "City": " Olongapo"
      },
      {
         "City": " Obando"
      },
      {
         "City": " Noveleta"
      },
      {
         "City": " Norzagaray"
      },
      {
         "City": " New Corella"
      },
      {
         "City": " Nasugbu"
      },
      {
         "City": " Narra"
      },
      {
         "City": " Naic"
      },
      {
         "City": " Nagcarlan"
      },
      {
         "City": " Naga"
      },
      {
         "City": " Naga"
      },
      {
         "City": " Nabunturan"
      },
      {
         "City": " Nabua"
      },
      {
         "City": " Muricay"
      },
      {
         "City": " Murcia"
      },
      {
         "City": " Muñoz"
      },
      {
         "City": " Morong"
      },
      {
         "City": " Morong"
      },
      {
         "City": " Rodriguez"
      },
      {
         "City": " Monkayo"
      },
      {
         "City": " Molave"
      },
      {
         "City": " Minglanilla"
      },
      {
         "City": " Midsayap"
      },
      {
         "City": " Meycauayan"
      },
      {
         "City": " Mexico"
      },
      {
         "City": " Mercedes"
      },
      {
         "City": " Mendez-Nuñez"
      },
      {
         "City": " Mauban"
      },
      {
         "City": " Mati"
      },
      {
         "City": " Masinloc"
      },
      {
         "City": " Masbate"
      },
      {
         "City": " Masantol"
      },
      {
         "City": " Mariveles"
      },
      {
         "City": " Marilao"
      },
      {
         "City": " Mariano"
      },
      {
         "City": " Marawi City"
      },
      {
         "City": " Maramag"
      },
      {
         "City": " Maragondon"
      },
      {
         "City": " Mantampay"
      },
      {
         "City": " Mansilingan"
      },
      {
         "City": " Mansalay"
      },
      {
         "City": " Manolo Fortich"
      },
      {
         "City": " Manila"
      },
      {
         "City": " Manibaug Pasig"
      },
      {
         "City": " Mangaldan"
      },
      {
         "City": " Mandaue City"
      },
      {
         "City": " Mandaluyong City"
      },
      {
         "City": " Mankayan"
      },
      {
         "City": " Manay"
      },
      {
         "City": " Manapla"
      },
      {
         "City": " Manaoag"
      },
      {
         "City": " Mamburao"
      },
      {
         "City": " Mamatid"
      },
      {
         "City": " Malvar"
      },
      {
         "City": " Maluso"
      },
      {
         "City": " Maluñgun"
      },
      {
         "City": " Malolos"
      },
      {
         "City": " Malita"
      },
      {
         "City": " Malilipot"
      },
      {
         "City": " Malaybalay"
      },
      {
         "City": " Malapatan"
      },
      {
         "City": " Malanday"
      },
      {
         "City": " Malabanban Norte"
      },
      {
         "City": " Makati City"
      },
      {
         "City": " Mahayag"
      },
      {
         "City": " Magsaysay"
      },
      {
         "City": " Magarao"
      },
      {
         "City": " Maganoy"
      },
      {
         "City": " Magalang"
      },
      {
         "City": " Mabalacat City"
      },
      {
         "City": " Maasin"
      },
      {
         "City": " Maao"
      },
      {
         "City": " Lupon"
      },
      {
         "City": " Lumbang"
      },
      {
         "City": " Lucena"
      },
      {
         "City": " Lucban"
      },
      {
         "City": " Lubao"
      },
      {
         "City": " Los Baños"
      },
      {
         "City": " Lopez"
      },
      {
         "City": " Loma de Gato"
      },
      {
         "City": " Loboc"
      },
      {
         "City": " Lipa City"
      },
      {
         "City": " Lingayen"
      },
      {
         "City": " Limay"
      },
      {
         "City": " Liloan"
      },
      {
         "City": " Lilio"
      },
      {
         "City": " Libon"
      },
      {
         "City": " Libertad"
      },
      {
         "City": " Legaspi"
      },
      {
         "City": " Laur"
      },
      {
         "City": " La Trinidad"
      },
      {
         "City": " Lapu-Lapu City"
      },
      {
         "City": " La Paz"
      },
      {
         "City": " Laoang"
      },
      {
         "City": " Laoag"
      },
      {
         "City": " Lala"
      },
      {
         "City": " Laguilayan"
      },
      {
         "City": " La Castellana"
      },
      {
         "City": " La Carlota"
      },
      {
         "City": " Labo"
      },
      {
         "City": " Koronadal"
      },
      {
         "City": " Kidapawan"
      },
      {
         "City": " Kawit"
      },
      {
         "City": " Kalibo (poblacion)"
      },
      {
         "City": " Kabankalan"
      },
      {
         "City": " Kabacan"
      },
      {
         "City": " Jose Pañganiban"
      },
      {
         "City": " Jolo"
      },
      {
         "City": " Jasaan"
      },
      {
         "City": " Jalajala"
      },
      {
         "City": " Jagna"
      },
      {
         "City": " Jaen"
      },
      {
         "City": " Itogon"
      },
      {
         "City": " Isulan"
      },
      {
         "City": " Isabela"
      },
      {
         "City": " City of Isabela"
      },
      {
         "City": " Irosin"
      },
      {
         "City": " Iriga City"
      },
      {
         "City": " Ipil"
      },
      {
         "City": " Indang"
      },
      {
         "City": " Imus"
      },
      {
         "City": " Iloilo"
      },
      {
         "City": " Iligan City"
      },
      {
         "City": " Ilagan"
      },
      {
         "City": " Iba"
      },
      {
         "City": " Hinigaran"
      },
      {
         "City": " Himamaylan"
      },
      {
         "City": " Hermosa"
      },
      {
         "City": " Hagonoy"
      },
      {
         "City": " Guyong"
      },
      {
         "City": " Gumaca"
      },
      {
         "City": " Guiset East"
      },
      {
         "City": " Guimba"
      },
      {
         "City": " Guihulñgan"
      },
      {
         "City": " Guiguinto"
      },
      {
         "City": " Goa"
      },
      {
         "City": " Glan"
      },
      {
         "City": " Gerona"
      },
      {
         "City": " General Trias"
      },
      {
         "City": " General Tinio"
      },
      {
         "City": " General Santos"
      },
      {
         "City": " General Mamerto Natividad"
      },
      {
         "City": " Gapan"
      },
      {
         "City": " Escalante"
      },
      {
         "City": " Saravia"
      },
      {
         "City": " Dumaguete"
      },
      {
         "City": " Don Carlos"
      },
      {
         "City": " Domalanoan"
      },
      {
         "City": " Dologon"
      },
      {
         "City": " Dipolog"
      },
      {
         "City": " Dinalupihan"
      },
      {
         "City": " Digos"
      },
      {
         "City": " Diadi"
      },
      {
         "City": " Del Pilar"
      },
      {
         "City": " Davao"
      },
      {
         "City": " Dasmariñas"
      },
      {
         "City": " Dapitan"
      },
      {
         "City": " Danao"
      },
      {
         "City": " Danao"
      },
      {
         "City": " Daet"
      },
      {
         "City": " Cuenca"
      },
      {
         "City": " Cotabato"
      },
      {
         "City": " Cordova"
      },
      {
         "City": " Consolacion"
      },
      {
         "City": " Concepcion"
      },
      {
         "City": " Concepcion Ibaba"
      },
      {
         "City": " Compostela"
      },
      {
         "City": " Compostela"
      },
      {
         "City": " Cebu City"
      },
      {
         "City": " Cavite City"
      },
      {
         "City": " Catbalogan"
      },
      {
         "City": " Catarman"
      },
      {
         "City": " Catanauan"
      },
      {
         "City": " Castillejos"
      },
      {
         "City": " Carmona"
      },
      {
         "City": " Cogan"
      },
      {
         "City": " Carigara"
      },
      {
         "City": " Cardona"
      },
      {
         "City": " Carcar"
      },
      {
         "City": " Capas"
      },
      {
         "City": " Canlaon"
      },
      {
         "City": " Candelaria"
      },
      {
         "City": " Candaba"
      },
      {
         "City": " Camiling"
      },
      {
         "City": " Calumpit"
      },
      {
         "City": " Calumpang"
      },
      {
         "City": " Calbayog City"
      },
      {
         "City": " Calauan"
      },
      {
         "City": " Calauag"
      },
      {
         "City": " Calatagan"
      },
      {
         "City": " Calasiao"
      },
      {
         "City": " Calapan"
      },
      {
         "City": " Calamba"
      },
      {
         "City": " Calaca"
      },
      {
         "City": " Calabanga"
      },
      {
         "City": " Cainta"
      },
      {
         "City": " Cagayan de Oro"
      },
      {
         "City": " Cadiz"
      },
      {
         "City": " Cabiao"
      },
      {
         "City": " Cabayangan"
      },
      {
         "City": " Cabanatuan City"
      },
      {
         "City": " Cabagan"
      },
      {
         "City": " Cabadbaran"
      },
      {
         "City": " Butuan"
      },
      {
         "City": " Bustos"
      },
      {
         "City": " Boroon"
      },
      {
         "City": " Burgos"
      },
      {
         "City": " Bunawan"
      },
      {
         "City": " Buluan"
      },
      {
         "City": " Bulaon"
      },
      {
         "City": " Bulan"
      },
      {
         "City": " Bulacan"
      },
      {
         "City": " Buhi"
      },
      {
         "City": " Bugo"
      },
      {
         "City": " Buenavista"
      },
      {
         "City": " Budta"
      },
      {
         "City": " Botolan"
      },
      {
         "City": " Borongan"
      },
      {
         "City": " Bongao"
      },
      {
         "City": " Bongabon"
      },
      {
         "City": " Bogo"
      },
      {
         "City": " Bocaue"
      },
      {
         "City": " Bislig"
      },
      {
         "City": " Binonga"
      },
      {
         "City": " Binmaley"
      },
      {
         "City": " Binangonan"
      },
      {
         "City": " Binalbagan"
      },
      {
         "City": " Bignay Uno"
      },
      {
         "City": " Bayugan"
      },
      {
         "City": " Bayombong"
      },
      {
         "City": " Baybay"
      },
      {
         "City": " Bayawan"
      },
      {
         "City": " Bayambang"
      },
      {
         "City": " Bay"
      },
      {
         "City": " Bauang"
      },
      {
         "City": " Bauan"
      },
      {
         "City": " Bato"
      },
      {
         "City": " Batangas"
      },
      {
         "City": " Batac City"
      },
      {
         "City": " Baras"
      },
      {
         "City": " Bantayan"
      },
      {
         "City": " Bansalan"
      },
      {
         "City": " Bañga"
      },
      {
         "City": " Banaybanay"
      },
      {
         "City": " Bambang"
      },
      {
         "City": " Baliuag"
      },
      {
         "City": " Balayan"
      },
      {
         "City": " Balanga"
      },
      {
         "City": " Balamban"
      },
      {
         "City": " Balagtas"
      },
      {
         "City": " Bais"
      },
      {
         "City": " Bah-Bah"
      },
      {
         "City": " Baguio"
      },
      {
         "City": " Bago City"
      },
      {
         "City": " Baggabag B"
      },
      {
         "City": " Bacoor"
      },
      {
         "City": " Bacolod City"
      },
      {
         "City": " Babo-Pangulo"
      },
      {
         "City": " Baao"
      },
      {
         "City": " Atimonan"
      },
      {
         "City": " Asia"
      },
      {
         "City": " Aringay"
      },
      {
         "City": " Arayat"
      },
      {
         "City": " Aparri"
      },
      {
         "City": " Apalit"
      },
      {
         "City": " Antipolo"
      },
      {
         "City": " Angono"
      },
      {
         "City": " Angeles City"
      },
      {
         "City": " Angat"
      },
      {
         "City": " Amadeo"
      },
      {
         "City": " Alicia"
      },
      {
         "City": " Aliaga"
      },
      {
         "City": " Alaminos"
      },
      {
         "City": " Alabel"
      },
      {
         "City": " Agoo"
      },
      {
         "City": " Abuyog"
      },
      {
         "City": " Abucay"
      },
      {
         "City": " Bagong Pagasa"
      },
      {
         "City": " Malingao"
      },
      {
         "City": " Pasig City"
      },
      {
         "City": " Pandan"
      },
      {
         "City": " Apas"
      }
   ],
   "Pakistan": [
      {
         "City": " Chuhar Jamāli"
      },
      {
         "City": " Rāwala Kot"
      },
      {
         "City": " Pīr jo Goth"
      },
      {
         "City": " Khairpur"
      },
      {
         "City": " Zhob"
      },
      {
         "City": " Zaida"
      },
      {
         "City": " Zāhir Pīr"
      },
      {
         "City": " Zafarwāl"
      },
      {
         "City": " Yazman"
      },
      {
         "City": " Wazīrābād"
      },
      {
         "City": " Warburton"
      },
      {
         "City": " Wārāh"
      },
      {
         "City": " Vihāri"
      },
      {
         "City": " Utmānzai"
      },
      {
         "City": " Uthal"
      },
      {
         "City": " Usta Muhammad"
      },
      {
         "City": " Umarkot"
      },
      {
         "City": " Ubauro"
      },
      {
         "City": " Turbat"
      },
      {
         "City": " Topi"
      },
      {
         "City": " Toba Tek Singh"
      },
      {
         "City": " Thul"
      },
      {
         "City": " Thatta"
      },
      {
         "City": " Thāru Shāh"
      },
      {
         "City": " Taunsa"
      },
      {
         "City": " Tānk"
      },
      {
         "City": " Tangi"
      },
      {
         "City": " Tando Muhammad Khān"
      },
      {
         "City": " Tando Jām"
      },
      {
         "City": " Tando Allāhyār"
      },
      {
         "City": " Tando Ādam"
      },
      {
         "City": " Tāndliānwāla"
      },
      {
         "City": " Talhār"
      },
      {
         "City": " Talamba"
      },
      {
         "City": " Talagang"
      },
      {
         "City": " Tāl"
      },
      {
         "City": " Swābi"
      },
      {
         "City": " Surkhpur"
      },
      {
         "City": " Sukkur"
      },
      {
         "City": " Sukheke Mandi"
      },
      {
         "City": " Sodhra"
      },
      {
         "City": " Sīta Road"
      },
      {
         "City": " Sinjhoro"
      },
      {
         "City": " Sillānwāli"
      },
      {
         "City": " Sibi"
      },
      {
         "City": " Sialkot"
      },
      {
         "City": " Shujāābād"
      },
      {
         "City": " Shorko"
      },
      {
         "City": " Shikārpur"
      },
      {
         "City": " Sheikhupura"
      },
      {
         "City": " Sharqpur"
      },
      {
         "City": " Shakargarr"
      },
      {
         "City": " Shahr Sultān"
      },
      {
         "City": " Shāhpur Chākar"
      },
      {
         "City": " Shahkot"
      },
      {
         "City": " Shāhdādpur"
      },
      {
         "City": " Shāhdādkot"
      },
      {
         "City": " Shabqadar"
      },
      {
         "City": " Sehwān"
      },
      {
         "City": " Sargodha"
      },
      {
         "City": " Sarāi Sidhu"
      },
      {
         "City": " Sarāi Naurang"
      },
      {
         "City": " Sarāi Ālamgīr"
      },
      {
         "City": " Sangla Hill"
      },
      {
         "City": " Sānghar"
      },
      {
         "City": " Sambriāl"
      },
      {
         "City": " Sakrand"
      },
      {
         "City": " Sāhīwāl"
      },
      {
         "City": " Sahiwal"
      },
      {
         "City": " Sādiqābād"
      },
      {
         "City": " Rohri"
      },
      {
         "City": " Renāla Khurd"
      },
      {
         "City": " Rawalpindi"
      },
      {
         "City": " Ratodero"
      },
      {
         "City": " Rānīpur"
      },
      {
         "City": " Rājanpur"
      },
      {
         "City": " Rāja Jang"
      },
      {
         "City": " Rāiwind"
      },
      {
         "City": " Rādhan"
      },
      {
         "City": " Rabwāh"
      },
      {
         "City": " Quetta"
      },
      {
         "City": " Kambar"
      },
      {
         "City": " Qādirpur Rān"
      },
      {
         "City": " Pishin"
      },
      {
         "City": " Pīr Mahal"
      },
      {
         "City": " Pindi Gheb"
      },
      {
         "City": " Pindi Bhattiān"
      },
      {
         "City": " Pind Dādan Khān"
      },
      {
         "City": " Phālia"
      },
      {
         "City": " Peshawar"
      },
      {
         "City": " Pattoki"
      },
      {
         "City": " Pasrūr"
      },
      {
         "City": " Pasni"
      },
      {
         "City": " Pāno Āqil"
      },
      {
         "City": " Pākpattan"
      },
      {
         "City": " Pahārpur"
      },
      {
         "City": " Pad Īdan"
      },
      {
         "City": " Pabbi"
      },
      {
         "City": " Okāra"
      },
      {
         "City": " Nushki"
      },
      {
         "City": " Nawābshāh"
      },
      {
         "City": " Naushahro Fīroz"
      },
      {
         "City": " Naushahra Virkān"
      },
      {
         "City": " Naudero"
      },
      {
         "City": " Nasīrābād"
      },
      {
         "City": " Nārowāl"
      },
      {
         "City": " Nārang"
      },
      {
         "City": " Naukot"
      },
      {
         "City": " Nankāna Sāhib"
      },
      {
         "City": " Muzaffargarh"
      },
      {
         "City": " Muzaffarābād"
      },
      {
         "City": " Mustafābād"
      },
      {
         "City": " Murree"
      },
      {
         "City": " Murīdke"
      },
      {
         "City": " Multān"
      },
      {
         "City": " Moro"
      },
      {
         "City": " Mithi"
      },
      {
         "City": " Mitha Tiwāna"
      },
      {
         "City": " Mīrpur Māthelo"
      },
      {
         "City": " Mirpur Khas"
      },
      {
         "City": " Mingora"
      },
      {
         "City": " Minchinābād"
      },
      {
         "City": " Miānwāli"
      },
      {
         "City": " Miān Channūn"
      },
      {
         "City": " Mehrābpur"
      },
      {
         "City": " Mehar"
      },
      {
         "City": " Mātli"
      },
      {
         "City": " Matiāri"
      },
      {
         "City": " Mastung"
      },
      {
         "City": " Mardan"
      },
      {
         "City": " Mānsehra"
      },
      {
         "City": " Mangla"
      },
      {
         "City": " Mandi Bahāuddīn"
      },
      {
         "City": " Mānānwāla"
      },
      {
         "City": " Māmu Kānjan"
      },
      {
         "City": " Malir Cantonment"
      },
      {
         "City": " Malakwāl"
      },
      {
         "City": " Mailsi"
      },
      {
         "City": " Mach"
      },
      {
         "City": " Loralai"
      },
      {
         "City": " Lodhrān"
      },
      {
         "City": " Layyah"
      },
      {
         "City": " Lārkāna"
      },
      {
         "City": " Lāliān"
      },
      {
         "City": " Lāla Mūsa"
      },
      {
         "City": " Lakki Marwat"
      },
      {
         "City": " Lahore"
      },
      {
         "City": " Ladhewāla Warāich"
      },
      {
         "City": " Lāchi"
      },
      {
         "City": " Kunri"
      },
      {
         "City": " Kunjāh"
      },
      {
         "City": " Kundiān"
      },
      {
         "City": " Kulāchi"
      },
      {
         "City": " Kot Samāba"
      },
      {
         "City": " Kotri"
      },
      {
         "City": " Kot Rādha Kishan"
      },
      {
         "City": " Kot Mūmin"
      },
      {
         "City": " Kot Malik"
      },
      {
         "City": " Kotli Lohārān"
      },
      {
         "City": " Kotli"
      },
      {
         "City": " Kot Ghulām Muhammad"
      },
      {
         "City": " Kot Diji"
      },
      {
         "City": " Kot Addu"
      },
      {
         "City": " Kohāt"
      },
      {
         "City": " Khushāb"
      },
      {
         "City": " Khurriānwāla"
      },
      {
         "City": " Khewra"
      },
      {
         "City": " Khāriān"
      },
      {
         "City": " Khārān"
      },
      {
         "City": " Khānpur"
      },
      {
         "City": " Khānpur"
      },
      {
         "City": " Khāngarh"
      },
      {
         "City": " Khāngāh Dogrān"
      },
      {
         "City": " Khalābat"
      },
      {
         "City": " Khairpur Nathan Shāh"
      },
      {
         "City": " Khairpur"
      },
      {
         "City": " Khairpur"
      },
      {
         "City": " Kasūr"
      },
      {
         "City": " Kashmor"
      },
      {
         "City": " Karor"
      },
      {
         "City": " Karachi"
      },
      {
         "City": " Kanganpur"
      },
      {
         "City": " Kandiāro"
      },
      {
         "City": " Kandhkot"
      },
      {
         "City": " Kāmra"
      },
      {
         "City": " Kamoke"
      },
      {
         "City": " Kamīr"
      },
      {
         "City": " Kamar Mushāni"
      },
      {
         "City": " Kamālia"
      },
      {
         "City": " Kalūr Kot"
      },
      {
         "City": " Kallar Kahār"
      },
      {
         "City": " Kāleke Mandi"
      },
      {
         "City": " Kalāt"
      },
      {
         "City": " Kālābāgh"
      },
      {
         "City": " Kahūta"
      },
      {
         "City": " Kohror Pakka"
      },
      {
         "City": " Kāhna"
      },
      {
         "City": " Kabīrwāla"
      },
      {
         "City": " Johi"
      },
      {
         "City": " Jīwani"
      },
      {
         "City": " Jhumra"
      },
      {
         "City": " Jhol"
      },
      {
         "City": " Jhelum"
      },
      {
         "City": " Jhawāriān"
      },
      {
         "City": " Jhang Sadr"
      },
      {
         "City": " Jauharābād"
      },
      {
         "City": " Jatoi Shimāli"
      },
      {
         "City": " Jarānwāla"
      },
      {
         "City": " Jand"
      },
      {
         "City": " Jāmpur"
      },
      {
         "City": " Jalālpur Pīrwāla"
      },
      {
         "City": " Jalālpur"
      },
      {
         "City": " Jahāniān Shāh"
      },
      {
         "City": " Jacobābād"
      },
      {
         "City": " Islamabad"
      },
      {
         "City": " Hyderabad"
      },
      {
         "City": " Hujra"
      },
      {
         "City": " Hingorja"
      },
      {
         "City": " Hazro"
      },
      {
         "City": " Haveliān"
      },
      {
         "City": " Haveli"
      },
      {
         "City": " Hāsilpur"
      },
      {
         "City": " Hasan Abdāl"
      },
      {
         "City": " Haru Zbad"
      },
      {
         "City": " Harnoli"
      },
      {
         "City": " Harīpur"
      },
      {
         "City": " Hangu"
      },
      {
         "City": " Hāla"
      },
      {
         "City": " Hāfizābād"
      },
      {
         "City": " Hadāli"
      },
      {
         "City": " Gwadar"
      },
      {
         "City": " Gujrāt"
      },
      {
         "City": " Gujrānwāla"
      },
      {
         "City": " Gūjar Khān"
      },
      {
         "City": " Gojra"
      },
      {
         "City": " Ghotki"
      },
      {
         "City": " Ghauspur"
      },
      {
         "City": " Ghāro"
      },
      {
         "City": " Garh Mahārāja"
      },
      {
         "City": " Gambat"
      },
      {
         "City": " Fort Abbās"
      },
      {
         "City": " Fazalpur"
      },
      {
         "City": " Chak Two Hundred Forty-Nine TDA"
      },
      {
         "City": " Faruka"
      },
      {
         "City": " Faqīrwāli"
      },
      {
         "City": " Faisalābād"
      },
      {
         "City": " Eminābād"
      },
      {
         "City": " Dunyāpur"
      },
      {
         "City": " Dunga Bunga"
      },
      {
         "City": " Dullewāla"
      },
      {
         "City": " Dīr"
      },
      {
         "City": " Dīpālpur"
      },
      {
         "City": " Dinga"
      },
      {
         "City": " Dijkot"
      },
      {
         "City": " Digri"
      },
      {
         "City": " Dhoro Naro"
      },
      {
         "City": " Dhanot"
      },
      {
         "City": " Dera Ismāīl Khān"
      },
      {
         "City": " Dera Ghazi Khan"
      },
      {
         "City": " Dera Bugti"
      },
      {
         "City": " Daur"
      },
      {
         "City": " Dāūd Khel"
      },
      {
         "City": " Daska"
      },
      {
         "City": " Darya Khān"
      },
      {
         "City": " Dājal"
      },
      {
         "City": " Dadu"
      },
      {
         "City": " Dādhar"
      },
      {
         "City": " Chūniān"
      },
      {
         "City": " Chūhar Kāna"
      },
      {
         "City": " Chor"
      },
      {
         "City": " Choa Saidān Shāh"
      },
      {
         "City": " Chishtiān Mandi"
      },
      {
         "City": " Chiniot"
      },
      {
         "City": " Chīchāwatni"
      },
      {
         "City": " Chawinda"
      },
      {
         "City": " Charsadda"
      },
      {
         "City": " Chaman"
      },
      {
         "City": " Chakwāl"
      },
      {
         "City": " Chak Āzam Saffo"
      },
      {
         "City": " Būrewāla"
      },
      {
         "City": " Bhopālwāla"
      },
      {
         "City": " Bhit Shāh"
      },
      {
         "City": " Bhimbar"
      },
      {
         "City": " Bhera"
      },
      {
         "City": " Bhawāna"
      },
      {
         "City": " Bhān"
      },
      {
         "City": " Bhalwāl"
      },
      {
         "City": " Bhakkar"
      },
      {
         "City": " Bhāi Pheru"
      },
      {
         "City": " Bela"
      },
      {
         "City": " Bat Khela"
      },
      {
         "City": " Basīrpur"
      },
      {
         "City": " Bannu"
      },
      {
         "City": " Bahāwalpur"
      },
      {
         "City": " Bahāwalnagar"
      },
      {
         "City": " Badīn"
      },
      {
         "City": " Baddomalhi"
      },
      {
         "City": " Attock City"
      },
      {
         "City": " Ārifwāla"
      },
      {
         "City": " Amangarh"
      },
      {
         "City": " Alīpur"
      },
      {
         "City": " Akora"
      },
      {
         "City": " Ahmadpur East"
      },
      {
         "City": " Abbottābād"
      },
      {
         "City": " Bahāwalnagar"
      },
      {
         "City": " Nowshera Cantonment"
      },
      {
         "City": " Ahmadpur Siāl"
      },
      {
         "City": " New Bādāh"
      },
      {
         "City": " Tando Ghulām Ali"
      },
      {
         "City": " Sethārja Old"
      },
      {
         "City": " Risālpur"
      },
      {
         "City": " Malakwal City"
      }
   ],
   "Poland": [
      {
         "City": " Żyrardów"
      },
      {
         "City": " Żoliborz"
      },
      {
         "City": " Zielonka"
      },
      {
         "City": " Zamość"
      },
      {
         "City": " Zambrów"
      },
      {
         "City": " Ząbki"
      },
      {
         "City": " Wyszków"
      },
      {
         "City": " Wołomin"
      },
      {
         "City": " Wola"
      },
      {
         "City": " Włochy"
      },
      {
         "City": " Wieliczka"
      },
      {
         "City": " Wesoła"
      },
      {
         "City": " Wawer"
      },
      {
         "City": " Warsaw"
      },
      {
         "City": " Ursus"
      },
      {
         "City": " Tomaszów Mazowiecki"
      },
      {
         "City": " Tomaszów Lubelski"
      },
      {
         "City": " Tarnów"
      },
      {
         "City": " Tarnobrzeg"
      },
      {
         "City": " Targówek"
      },
      {
         "City": " Szczytno"
      },
      {
         "City": " Świdnik"
      },
      {
         "City": " Suwałki"
      },
      {
         "City": " Sulejówek"
      },
      {
         "City": " Staszów"
      },
      {
         "City": " Starachowice"
      },
      {
         "City": " Stalowa Wola"
      },
      {
         "City": " Śródmieście"
      },
      {
         "City": " Sokołów Podlaski"
      },
      {
         "City": " Sokółka"
      },
      {
         "City": " Sochaczew"
      },
      {
         "City": " Skierniewice"
      },
      {
         "City": " Skarżysko-Kamienna"
      },
      {
         "City": " Siemiatycze"
      },
      {
         "City": " Siedlce"
      },
      {
         "City": " Sanok"
      },
      {
         "City": " Sandomierz"
      },
      {
         "City": " Rzeszów"
      },
      {
         "City": " Ropczyce"
      },
      {
         "City": " Rembertów"
      },
      {
         "City": " Rawa Mazowiecka"
      },
      {
         "City": " Radzyń Podlaski"
      },
      {
         "City": " Radom"
      },
      {
         "City": " Pułtusk"
      },
      {
         "City": " Puławy"
      },
      {
         "City": " Przeworsk"
      },
      {
         "City": " Przemyśl"
      },
      {
         "City": " Przasnysz"
      },
      {
         "City": " Pruszków"
      },
      {
         "City": " Płońsk"
      },
      {
         "City": " Pisz"
      },
      {
         "City": " Pionki"
      },
      {
         "City": " Piastów"
      },
      {
         "City": " Piaseczno"
      },
      {
         "City": " Otwock"
      },
      {
         "City": " Ostrów Mazowiecka"
      },
      {
         "City": " Ostrowiec Świętokrzyski"
      },
      {
         "City": " Ostrołęka"
      },
      {
         "City": " Opoczno"
      },
      {
         "City": " Olsztyn"
      },
      {
         "City": " Olecko"
      },
      {
         "City": " Ochota"
      },
      {
         "City": " Nowy Targ"
      },
      {
         "City": " Nowy Sącz"
      },
      {
         "City": " Nowy Dwór Mazowiecki"
      },
      {
         "City": " Nisko"
      },
      {
         "City": " Mrągowo"
      },
      {
         "City": " Mokotów"
      },
      {
         "City": " Mława"
      },
      {
         "City": " Mińsk Mazowiecki"
      },
      {
         "City": " Milanówek"
      },
      {
         "City": " Mielec"
      },
      {
         "City": " Międzyrzec Podlaski"
      },
      {
         "City": " Marki"
      },
      {
         "City": " Łuków"
      },
      {
         "City": " Lublin"
      },
      {
         "City": " Lubartów"
      },
      {
         "City": " Łomża"
      },
      {
         "City": " Łomianki"
      },
      {
         "City": " Lidzbark Warmiński"
      },
      {
         "City": " Legionowo"
      },
      {
         "City": " Łęczna"
      },
      {
         "City": " Łapy"
      },
      {
         "City": " Łańcut"
      },
      {
         "City": " Krosno"
      },
      {
         "City": " Krasnystaw"
      },
      {
         "City": " Kraśnik"
      },
      {
         "City": " Kozienice"
      },
      {
         "City": " Konstancin-Jeziorna"
      },
      {
         "City": " Końskie"
      },
      {
         "City": " Kobyłka"
      },
      {
         "City": " Kielce"
      },
      {
         "City": " Kętrzyn"
      },
      {
         "City": " Kabaty"
      },
      {
         "City": " Józefów"
      },
      {
         "City": " Jędrzejów"
      },
      {
         "City": " Jasło"
      },
      {
         "City": " Jarosław"
      },
      {
         "City": " Hrubieszów"
      },
      {
         "City": " Hajnówka"
      },
      {
         "City": " Grodzisk Mazowiecki"
      },
      {
         "City": " Grajewo"
      },
      {
         "City": " Gorlice"
      },
      {
         "City": " Giżycko"
      },
      {
         "City": " Gierłoż"
      },
      {
         "City": " Garwolin"
      },
      {
         "City": " Ełk"
      },
      {
         "City": " Działdowo"
      },
      {
         "City": " Dęblin"
      },
      {
         "City": " Dębica"
      },
      {
         "City": " Ciechanów"
      },
      {
         "City": " Chełm"
      },
      {
         "City": " Busko-Zdrój"
      },
      {
         "City": " Brzesko"
      },
      {
         "City": " Bochnia"
      },
      {
         "City": " Biłgoraj"
      },
      {
         "City": " Bielsk Podlaski"
      },
      {
         "City": " Bielany"
      },
      {
         "City": " Białystok"
      },
      {
         "City": " Białołeka"
      },
      {
         "City": " Biała Podlaska"
      },
      {
         "City": " Bemowo"
      },
      {
         "City": " Bartoszyce"
      },
      {
         "City": " Augustów"
      },
      {
         "City": " Żywiec"
      },
      {
         "City": " Żory"
      },
      {
         "City": " Złotów"
      },
      {
         "City": " Złotoryja"
      },
      {
         "City": " Zielona Góra"
      },
      {
         "City": " Zgorzelec"
      },
      {
         "City": " Zgierz"
      },
      {
         "City": " Zduńska Wola"
      },
      {
         "City": " Zawiercie"
      },
      {
         "City": " Żary"
      },
      {
         "City": " Zakopane"
      },
      {
         "City": " Żagań"
      },
      {
         "City": " Zabrze"
      },
      {
         "City": " Ząbkowice Śląskie"
      },
      {
         "City": " Września"
      },
      {
         "City": " Wrocław"
      },
      {
         "City": " Wodzisław Śląski"
      },
      {
         "City": " Włocławek"
      },
      {
         "City": " Wieluń"
      },
      {
         "City": " Wejherowo"
      },
      {
         "City": " Wałcz"
      },
      {
         "City": " Wałbrzych"
      },
      {
         "City": " Wągrowiec"
      },
      {
         "City": " Wadowice"
      },
      {
         "City": " Ustroń"
      },
      {
         "City": " Ustka"
      },
      {
         "City": " Tychy"
      },
      {
         "City": " Turek"
      },
      {
         "City": " Trzebinia"
      },
      {
         "City": " Trzcianka"
      },
      {
         "City": " Toruń"
      },
      {
         "City": " Tczew"
      },
      {
         "City": " Tarnowskie Góry"
      },
      {
         "City": " Szczecinek"
      },
      {
         "City": " Szczecin"
      },
      {
         "City": " Szamotuły"
      },
      {
         "City": " Świnoujście"
      },
      {
         "City": " Świętochłowice"
      },
      {
         "City": " Świebodzin"
      },
      {
         "City": " Świecie"
      },
      {
         "City": " Świebodzice"
      },
      {
         "City": " Świdwin"
      },
      {
         "City": " Świdnica"
      },
      {
         "City": " Swarzędz"
      },
      {
         "City": " Sulechów"
      },
      {
         "City": " Strzelce Opolskie"
      },
      {
         "City": " Strzegom"
      },
      {
         "City": " Starogard Gdański"
      },
      {
         "City": " Stargard Szczeciński"
      },
      {
         "City": " Środa Wielkopolska"
      },
      {
         "City": " Śrem"
      },
      {
         "City": " Sosnowiec"
      },
      {
         "City": " Sopot"
      },
      {
         "City": " Solec Kujawski"
      },
      {
         "City": " Słupsk"
      },
      {
         "City": " Słubice"
      },
      {
         "City": " Skawina"
      },
      {
         "City": " Sierpc"
      },
      {
         "City": " Sieradz"
      },
      {
         "City": " Siemianowice Śląskie"
      },
      {
         "City": " Rypin"
      },
      {
         "City": " Rydułtowy"
      },
      {
         "City": " Rybnik"
      },
      {
         "City": " Rumia"
      },
      {
         "City": " Ruda Śląska"
      },
      {
         "City": " Reda"
      },
      {
         "City": " Rawicz"
      },
      {
         "City": " Radzionków"
      },
      {
         "City": " Radomsko"
      },
      {
         "City": " Radlin"
      },
      {
         "City": " Racibórz"
      },
      {
         "City": " Pyskowice"
      },
      {
         "City": " Pszczyna"
      },
      {
         "City": " Pruszcz Gdański"
      },
      {
         "City": " Prudnik"
      },
      {
         "City": " Poznań"
      },
      {
         "City": " Polkowice"
      },
      {
         "City": " Police"
      },
      {
         "City": " Płock"
      },
      {
         "City": " Pleszew"
      },
      {
         "City": " Piotrków Trybunalski"
      },
      {
         "City": " Piła"
      },
      {
         "City": " Piekary Śląskie"
      },
      {
         "City": " Pabianice"
      },
      {
         "City": " Ozorków"
      },
      {
         "City": " Oświęcim"
      },
      {
         "City": " Ostrów Wielkopolski"
      },
      {
         "City": " Ostróda"
      },
      {
         "City": " Orzesze"
      },
      {
         "City": " Opole"
      },
      {
         "City": " Olkusz"
      },
      {
         "City": " Oleśnica"
      },
      {
         "City": " Oława"
      },
      {
         "City": " Oborniki"
      },
      {
         "City": " Nysa"
      },
      {
         "City": " Nowy Tomyśl"
      },
      {
         "City": " Nowogard"
      },
      {
         "City": " Nowa Sól"
      },
      {
         "City": " Nowa Ruda"
      },
      {
         "City": " Namysłów"
      },
      {
         "City": " Nakło nad Notecią"
      },
      {
         "City": " Myszków"
      },
      {
         "City": " Mysłowice"
      },
      {
         "City": " Myślenice"
      },
      {
         "City": " Mikołów"
      },
      {
         "City": " Międzyrzecz"
      },
      {
         "City": " Malbork"
      },
      {
         "City": " Luboń"
      },
      {
         "City": " Lubliniec"
      },
      {
         "City": " Lubin"
      },
      {
         "City": " Lubań"
      },
      {
         "City": " Łowicz"
      },
      {
         "City": " Łódź"
      },
      {
         "City": " Libiąż"
      },
      {
         "City": " Leszno"
      },
      {
         "City": " Legnica"
      },
      {
         "City": " Lędziny"
      },
      {
         "City": " Łęczyca"
      },
      {
         "City": " Lębork"
      },
      {
         "City": " Łaziska Górne"
      },
      {
         "City": " Łask"
      },
      {
         "City": " Kwidzyn"
      },
      {
         "City": " Kutno"
      },
      {
         "City": " Krotoszyn"
      },
      {
         "City": " Krapkowice"
      },
      {
         "City": " Kraków"
      },
      {
         "City": " Koszalin"
      },
      {
         "City": " Kostrzyn nad Odrą"
      },
      {
         "City": " Kościerzyna"
      },
      {
         "City": " Kościan"
      },
      {
         "City": " Konstantynów Łódzki"
      },
      {
         "City": " Konin"
      },
      {
         "City": " Kołobrzeg"
      },
      {
         "City": " Koło"
      },
      {
         "City": " Knurów"
      },
      {
         "City": " Kluczbork"
      },
      {
         "City": " Kłodzko"
      },
      {
         "City": " Kęty"
      },
      {
         "City": " Kędzierzyn-Koźle"
      },
      {
         "City": " Katowice"
      },
      {
         "City": " Kartuzy"
      },
      {
         "City": " Kamienna Góra"
      },
      {
         "City": " Kalisz"
      },
      {
         "City": " Jelenia Góra"
      },
      {
         "City": " Jelcz"
      },
      {
         "City": " Jaworzno"
      },
      {
         "City": " Jawor"
      },
      {
         "City": " Jastrzębie Zdrój"
      },
      {
         "City": " Jarocin"
      },
      {
         "City": " Inowrocław"
      },
      {
         "City": " Iława"
      },
      {
         "City": " Gubin"
      },
      {
         "City": " Gryfino"
      },
      {
         "City": " Gryfice"
      },
      {
         "City": " Grudziądz"
      },
      {
         "City": " Gostynin"
      },
      {
         "City": " Gostyń"
      },
      {
         "City": " Gorzów Wielkopolski"
      },
      {
         "City": " Goleniów"
      },
      {
         "City": " Gniezno"
      },
      {
         "City": " Głuchołazy"
      },
      {
         "City": " Głowno"
      },
      {
         "City": " Głogów"
      },
      {
         "City": " Gliwice"
      },
      {
         "City": " Gdynia"
      },
      {
         "City": " Gdańsk"
      },
      {
         "City": " Fordon"
      },
      {
         "City": " Elbląg"
      },
      {
         "City": " Dzierżoniów"
      },
      {
         "City": " Dąbrowa Górnicza"
      },
      {
         "City": " Częstochowa"
      },
      {
         "City": " Czerwionka-Leszczyny"
      },
      {
         "City": " Czeladź"
      },
      {
         "City": " Czechowice-Dziedzice"
      },
      {
         "City": " Cieszyn"
      },
      {
         "City": " Chrzanów"
      },
      {
         "City": " Choszczno"
      },
      {
         "City": " Chorzów"
      },
      {
         "City": " Chojnice"
      },
      {
         "City": " Chodzież"
      },
      {
         "City": " Chełmża"
      },
      {
         "City": " Chełmno"
      },
      {
         "City": " Bytów"
      },
      {
         "City": " Bytom"
      },
      {
         "City": " Bydgoszcz"
      },
      {
         "City": " Brzeg"
      },
      {
         "City": " Brodnica"
      },
      {
         "City": " Braniewo"
      },
      {
         "City": " Bolesławiec"
      },
      {
         "City": " Boguszów-Gorce"
      },
      {
         "City": " Bogatynia"
      },
      {
         "City": " Bieruń"
      },
      {
         "City": " Bielsko-Biala"
      },
      {
         "City": " Bielawa"
      },
      {
         "City": " Białogard"
      },
      {
         "City": " Bełchatów"
      },
      {
         "City": " Będzin"
      },
      {
         "City": " Andrychów"
      },
      {
         "City": " Aleksandrów Łódzki"
      },
      {
         "City": " Ursynów"
      },
      {
         "City": " Praga Północ"
      },
      {
         "City": " Praga Południe"
      },
      {
         "City": " Jelcz Laskowice"
      }
   ],
   "Saint Pierre and Miquelon": [
      {
         "City": " Saint-Pierre"
      }
   ],
   "Pitcairn": [
      {
         "City": " Adamstown"
      }
   ],
   "Puerto Rico": [
      {
         "City": " Aguadilla"
      },
      {
         "City": " Arecibo"
      },
      {
         "City": " Barceloneta"
      },
      {
         "City": " Bayamón"
      },
      {
         "City": " Caguas"
      },
      {
         "City": " Candelaria"
      },
      {
         "City": " Carolina"
      },
      {
         "City": " Cataño"
      },
      {
         "City": " Cayey"
      },
      {
         "City": " Fajardo"
      },
      {
         "City": " Guayama"
      },
      {
         "City": " Guaynabo"
      },
      {
         "City": " Humacao"
      },
      {
         "City": " Levittown"
      },
      {
         "City": " Manatí"
      },
      {
         "City": " Mayagüez"
      },
      {
         "City": " Ponce"
      },
      {
         "City": " San Juan"
      },
      {
         "City": " Trujillo Alto"
      },
      {
         "City": " Vega Baja"
      },
      {
         "City": " Yauco"
      }
   ],
   "Palestinian Territory": [
      {
         "City": " Rafaḩ"
      },
      {
         "City": " An Nuşayrāt"
      },
      {
         "City": " Khān Yūnis"
      },
      {
         "City": " Jabālyā"
      },
      {
         "City": " Gaza"
      },
      {
         "City": " Dayr al Balaḩ"
      },
      {
         "City": " Bayt Lāhyā"
      },
      {
         "City": " Bayt Ḩānūn"
      },
      {
         "City": " Banī Suhaylā"
      },
      {
         "City": " Al Burayj"
      },
      {
         "City": " ‘Abasān al Kabīrah"
      },
      {
         "City": " Yuta"
      },
      {
         "City": " Ţūlkarm"
      },
      {
         "City": " Ţūbās"
      },
      {
         "City": " Sa‘īr"
      },
      {
         "City": " Ramallah"
      },
      {
         "City": " Qalqīlyah"
      },
      {
         "City": " Qabāţīyah"
      },
      {
         "City": " Nablus"
      },
      {
         "City": " Janīn"
      },
      {
         "City": " Idhnā"
      },
      {
         "City": " Ḩalḩūl"
      },
      {
         "City": " Dūrā"
      },
      {
         "City": " Bethlehem"
      },
      {
         "City": " Bayt Jālā"
      },
      {
         "City": " Banī Na‘īm"
      },
      {
         "City": " Balāţah"
      },
      {
         "City": " Az̧ Z̧āhirīyah"
      },
      {
         "City": " As Samū‘"
      },
      {
         "City": " Ar Rām wa Ḑāḩiyat al Barīd"
      },
      {
         "City": " Jericho"
      },
      {
         "City": " Al Yāmūn"
      },
      {
         "City": " Hebron"
      },
      {
         "City": " Al Bīrah"
      },
      {
         "City": " Al ‘Ayzarīyah"
      },
      {
         "City": " Old City"
      },
      {
         "City": " Al Qarārah"
      },
      {
         "City": " Az Zuwāydah"
      },
      {
         "City": " East Jerusalem"
      }
   ],
   "Portugal": [
      {
         "City": " Vila Franca de Xira"
      },
      {
         "City": " Vialonga"
      },
      {
         "City": " Torres Vedras"
      },
      {
         "City": " Tomar"
      },
      {
         "City": " Sintra"
      },
      {
         "City": " Sesimbra"
      },
      {
         "City": " Setúbal"
      },
      {
         "City": " São João da Talha"
      },
      {
         "City": " São Domingos de Rana"
      },
      {
         "City": " Santarém"
      },
      {
         "City": " Santa Iria da Azóia"
      },
      {
         "City": " Sacavém"
      },
      {
         "City": " Rio de Mouro"
      },
      {
         "City": " Ramada"
      },
      {
         "City": " Queluz"
      },
      {
         "City": " Quarteira"
      },
      {
         "City": " Póvoa de Santa Iria"
      },
      {
         "City": " Portimão"
      },
      {
         "City": " Portalegre"
      },
      {
         "City": " Pontinha"
      },
      {
         "City": " Pombal"
      },
      {
         "City": " Pinhal Novo"
      },
      {
         "City": " Piedade"
      },
      {
         "City": " Peniche"
      },
      {
         "City": " Parede"
      },
      {
         "City": " Palmela"
      },
      {
         "City": " Paço de Arcos"
      },
      {
         "City": " Olhão"
      },
      {
         "City": " Odivelas"
      },
      {
         "City": " Montijo"
      },
      {
         "City": " Monte Estoril"
      },
      {
         "City": " Monsanto"
      },
      {
         "City": " Moita"
      },
      {
         "City": " Marinha Grande"
      },
      {
         "City": " Loures"
      },
      {
         "City": " Loulé"
      },
      {
         "City": " Lisbon"
      },
      {
         "City": " Linda-a-Velha"
      },
      {
         "City": " Leiria"
      },
      {
         "City": " Laranjeiro"
      },
      {
         "City": " Lagos"
      },
      {
         "City": " Funchal"
      },
      {
         "City": " Faro"
      },
      {
         "City": " Évora"
      },
      {
         "City": " Estoril"
      },
      {
         "City": " Entroncamento"
      },
      {
         "City": " Corroios"
      },
      {
         "City": " Charneca"
      },
      {
         "City": " Castelo Branco"
      },
      {
         "City": " Cascais"
      },
      {
         "City": " Carnaxide"
      },
      {
         "City": " Carcavelos"
      },
      {
         "City": " Caparica"
      },
      {
         "City": " Camarate"
      },
      {
         "City": " Câmara de Lobos"
      },
      {
         "City": " Caldas da Rainha"
      },
      {
         "City": " Cacém"
      },
      {
         "City": " Belas"
      },
      {
         "City": " Beja"
      },
      {
         "City": " Barreiro"
      },
      {
         "City": " Arrentela"
      },
      {
         "City": " Amora"
      },
      {
         "City": " Amadora"
      },
      {
         "City": " Almada"
      },
      {
         "City": " Algés"
      },
      {
         "City": " Alcabideche"
      },
      {
         "City": " Albufeira"
      },
      {
         "City": " Viseu"
      },
      {
         "City": " Vila Real"
      },
      {
         "City": " Vilar de Andorinho"
      },
      {
         "City": " Vila Nova de Gaia"
      },
      {
         "City": " Vila do Conde"
      },
      {
         "City": " Viana do Castelo"
      },
      {
         "City": " Valongo"
      },
      {
         "City": " Sequeira"
      },
      {
         "City": " Senhora da Hora"
      },
      {
         "City": " São Pedro da Cova"
      },
      {
         "City": " São Mamede de Infesta"
      },
      {
         "City": " São João da Madeira"
      },
      {
         "City": " Rio Tinto"
      },
      {
         "City": " Póvoa de Varzim"
      },
      {
         "City": " Porto"
      },
      {
         "City": " Ponte de Lima"
      },
      {
         "City": " Pedroso"
      },
      {
         "City": " Ovar"
      },
      {
         "City": " Oliveira do Douro"
      },
      {
         "City": " Monção"
      },
      {
         "City": " Matosinhos"
      },
      {
         "City": " Maia"
      },
      {
         "City": " Leça do Bailio"
      },
      {
         "City": " Leça da Palmeira"
      },
      {
         "City": " Ílhavo"
      },
      {
         "City": " Guimarães"
      },
      {
         "City": " Guarda"
      },
      {
         "City": " Gondomar"
      },
      {
         "City": " Feira"
      },
      {
         "City": " Fânzeres"
      },
      {
         "City": " Fafe"
      },
      {
         "City": " Esposende"
      },
      {
         "City": " Esposende"
      },
      {
         "City": " Ermesinde"
      },
      {
         "City": " Custoias"
      },
      {
         "City": " Covilhã"
      },
      {
         "City": " Coimbra"
      },
      {
         "City": " Canidelo"
      },
      {
         "City": " Bragança"
      },
      {
         "City": " Braga"
      },
      {
         "City": " Bougado"
      },
      {
         "City": " Barcelos"
      },
      {
         "City": " Baguim do Monte"
      },
      {
         "City": " Aveiro"
      },
      {
         "City": " Águas Santas"
      },
      {
         "City": " Ponta Delgada"
      }
   ],
   "Palau": [
      {
         "City": " Melekeok"
      }
   ],
   "Paraguay": [
      {
         "City": " Villarrica"
      },
      {
         "City": " Villa Hayes"
      },
      {
         "City": " Villa Elisa"
      },
      {
         "City": " San Lorenzo"
      },
      {
         "City": " San Juan Bautista"
      },
      {
         "City": " San Antonio"
      },
      {
         "City": " Presidente Franco"
      },
      {
         "City": " Pilar"
      },
      {
         "City": " Pedro Juan Caballero"
      },
      {
         "City": " Nemby"
      },
      {
         "City": " Limpio"
      },
      {
         "City": " Lambaré"
      },
      {
         "City": " Itauguá"
      },
      {
         "City": " Itá"
      },
      {
         "City": " Fernando de la Mora"
      },
      {
         "City": " Encarnación"
      },
      {
         "City": " Coronel Oviedo"
      },
      {
         "City": " Concepción"
      },
      {
         "City": " Colonia Mariano Roque Alonso"
      },
      {
         "City": " Ciudad del Este"
      },
      {
         "City": " Capiatá"
      },
      {
         "City": " Caazapá"
      },
      {
         "City": " Caaguazú"
      },
      {
         "City": " Caacupé"
      },
      {
         "City": " Asunción"
      }
   ],
   "Qatar": [
      {
         "City": " Umm Şalāl Muḩammad"
      },
      {
         "City": " Ar Rayyān"
      },
      {
         "City": " Al Wakrah"
      },
      {
         "City": " Al Khawr"
      },
      {
         "City": " Doha"
      }
   ],
   "Reunion": [
      {
         "City": " Saint-Pierre"
      },
      {
         "City": " Saint-Paul"
      },
      {
         "City": " Saint-Louis"
      },
      {
         "City": " Saint-Leu"
      },
      {
         "City": " Saint-Joseph"
      },
      {
         "City": " Sainte-Suzanne"
      },
      {
         "City": " Sainte-Marie"
      },
      {
         "City": " Saint-Denis"
      },
      {
         "City": " Saint-Benoît"
      },
      {
         "City": " Saint-André"
      },
      {
         "City": " Le Tampon"
      },
      {
         "City": " Le Port"
      },
      {
         "City": " La Possession"
      },
      {
         "City": " Piton Saint-Leu"
      }
   ],
   "Romania": [
      {
         "City": " Zimnicea"
      },
      {
         "City": " Zărnești"
      },
      {
         "City": " Zalău"
      },
      {
         "City": " Vulcan"
      },
      {
         "City": " Voluntari"
      },
      {
         "City": " Vişeu de Sus"
      },
      {
         "City": " Vatra Dornei"
      },
      {
         "City": " Vaslui"
      },
      {
         "City": " Urziceni"
      },
      {
         "City": " Turnu Măgurele"
      },
      {
         "City": " Turda"
      },
      {
         "City": " Tulcea"
      },
      {
         "City": " Târnăveni"
      },
      {
         "City": " Târgu Secuiesc"
      },
      {
         "City": " Târgu Neamţ"
      },
      {
         "City": " Târgu-Mureş"
      },
      {
         "City": " Târgu Jiu"
      },
      {
         "City": " Târgovişte"
      },
      {
         "City": " Timişoara"
      },
      {
         "City": " Tecuci"
      },
      {
         "City": " Suceava"
      },
      {
         "City": " Slatina"
      },
      {
         "City": " Şimleu Silvaniei"
      },
      {
         "City": " Sighetu Marmaţiei"
      },
      {
         "City": " Sibiu"
      },
      {
         "City": " Sfântu-Gheorghe"
      },
      {
         "City": " Sebeş"
      },
      {
         "City": " Satu Mare"
      },
      {
         "City": " Salonta"
      },
      {
         "City": " Săcele"
      },
      {
         "City": " Roșiorii de Vede"
      },
      {
         "City": " Roman"
      },
      {
         "City": " Râşnov"
      },
      {
         "City": " Râmnicu Vâlcea"
      },
      {
         "City": " Râmnicu Sărat"
      },
      {
         "City": " Reşiţa"
      },
      {
         "City": " Reghin-Sat"
      },
      {
         "City": " Rădăuți"
      },
      {
         "City": " Popeşti-Leordeni"
      },
      {
         "City": " Ploieşti"
      },
      {
         "City": " Piteşti"
      },
      {
         "City": " Piatra Neamţ"
      },
      {
         "City": " Petroşani"
      },
      {
         "City": " Petrila"
      },
      {
         "City": " Pantelimon"
      },
      {
         "City": " Orăştie"
      },
      {
         "City": " Oradea"
      },
      {
         "City": " Olteniţa"
      },
      {
         "City": " Odorheiu Secuiesc"
      },
      {
         "City": " Ocna Mureş"
      },
      {
         "City": " Năvodari"
      },
      {
         "City": " Motru"
      },
      {
         "City": " Moreni"
      },
      {
         "City": " Moineşti"
      },
      {
         "City": " Mizil"
      },
      {
         "City": " Miercurea-Ciuc"
      },
      {
         "City": " Mediaş"
      },
      {
         "City": " Medgidia"
      },
      {
         "City": " Mangalia"
      },
      {
         "City": " Lupeni"
      },
      {
         "City": " Lugoj"
      },
      {
         "City": " Luduş"
      },
      {
         "City": " Iaşi"
      },
      {
         "City": " Huşi"
      },
      {
         "City": " Hunedoara"
      },
      {
         "City": " Gura Humorului"
      },
      {
         "City": " Giurgiu"
      },
      {
         "City": " Gherla"
      },
      {
         "City": " Gheorgheni"
      },
      {
         "City": " Galaţi"
      },
      {
         "City": " Găeşti"
      },
      {
         "City": " Focșani"
      },
      {
         "City": " Filiaşi"
      },
      {
         "City": " Fetești-Gară"
      },
      {
         "City": " Feteşti"
      },
      {
         "City": " Fălticeni"
      },
      {
         "City": " Făgăraș"
      },
      {
         "City": " Drobeta-Turnu Severin"
      },
      {
         "City": " Drăgăşani"
      },
      {
         "City": " Dorohoi"
      },
      {
         "City": " Deva"
      },
      {
         "City": " Dej"
      },
      {
         "City": " Curtea de Argeş"
      },
      {
         "City": " Cugir"
      },
      {
         "City": " Craiova"
      },
      {
         "City": " Corabia"
      },
      {
         "City": " Constanţa"
      },
      {
         "City": " Comăneşti"
      },
      {
         "City": " Codlea"
      },
      {
         "City": " Cluj-Napoca"
      },
      {
         "City": " Cisnădie"
      },
      {
         "City": " Câmpulung Moldovenesc"
      },
      {
         "City": " Câmpina"
      },
      {
         "City": " Câmpia Turzii"
      },
      {
         "City": " Cernavodă"
      },
      {
         "City": " Carei"
      },
      {
         "City": " Caransebeş"
      },
      {
         "City": " Caracal"
      },
      {
         "City": " Calafat"
      },
      {
         "City": " Buzău"
      },
      {
         "City": " Buhuşi"
      },
      {
         "City": " Buftea"
      },
      {
         "City": " Bucharest"
      },
      {
         "City": " Breaza"
      },
      {
         "City": " Braşov"
      },
      {
         "City": " Brăila"
      },
      {
         "City": " Brad"
      },
      {
         "City": " Botoşani"
      },
      {
         "City": " Borşa"
      },
      {
         "City": " Bocşa"
      },
      {
         "City": " Blaj"
      },
      {
         "City": " Bistriţa"
      },
      {
         "City": " Bârlad"
      },
      {
         "City": " Balş"
      },
      {
         "City": " Băileşti"
      },
      {
         "City": " Băicoi"
      },
      {
         "City": " Baia Sprie"
      },
      {
         "City": " Baia Mare"
      },
      {
         "City": " Bacău"
      },
      {
         "City": " Arad"
      },
      {
         "City": " Alexandria"
      },
      {
         "City": " Alba Iulia"
      },
      {
         "City": " Aiud"
      },
      {
         "City": " Adjud"
      },
      {
         "City": " Baia Mare"
      },
      {
         "City": " Paşcani"
      },
      {
         "City": " Mioveni"
      },
      {
         "City": " Sighișoara"
      },
      {
         "City": " Slobozia"
      },
      {
         "City": " Sector 1"
      },
      {
         "City": " Sector 2"
      },
      {
         "City": " Sector 3"
      },
      {
         "City": " Sector 4"
      },
      {
         "City": " Sector 5"
      },
      {
         "City": " Sector 6"
      }
   ],
   "Serbia": [
      {
         "City": " Zrenjanin"
      },
      {
         "City": " Zemun"
      },
      {
         "City": " Zaječar"
      },
      {
         "City": " Vršac"
      },
      {
         "City": " Vranje"
      },
      {
         "City": " Trstenik"
      },
      {
         "City": " Stara Pazova"
      },
      {
         "City": " Sremčica"
      },
      {
         "City": " Smederevska Palanka"
      },
      {
         "City": " Smederevo"
      },
      {
         "City": " Senta"
      },
      {
         "City": " Prokuplje"
      },
      {
         "City": " Požarevac"
      },
      {
         "City": " Pirot"
      },
      {
         "City": " Pančevo"
      },
      {
         "City": " Obrenovac"
      },
      {
         "City": " Novi Pazar"
      },
      {
         "City": " Nova Pazova"
      },
      {
         "City": " Niš"
      },
      {
         "City": " Negotin"
      },
      {
         "City": " Leskovac"
      },
      {
         "City": " Lazarevac"
      },
      {
         "City": " Kruševac"
      },
      {
         "City": " Kraljevo"
      },
      {
         "City": " Kragujevac"
      },
      {
         "City": " Kikinda"
      },
      {
         "City": " Jagodina"
      },
      {
         "City": " Inđija"
      },
      {
         "City": " Gornji Milanovac"
      },
      {
         "City": " Ćuprija"
      },
      {
         "City": " Čačak"
      },
      {
         "City": " Bor"
      },
      {
         "City": " Belgrade"
      },
      {
         "City": " Bečej"
      },
      {
         "City": " Aranđelovac"
      },
      {
         "City": " Vrbas"
      },
      {
         "City": " Valjevo"
      },
      {
         "City": " Užice"
      },
      {
         "City": " Subotica"
      },
      {
         "City": " Sremska Mitrovica"
      },
      {
         "City": " Sombor"
      },
      {
         "City": " Šabac"
      },
      {
         "City": " Ruma"
      },
      {
         "City": " Novi Sad"
      },
      {
         "City": " Bačka Topola"
      },
      {
         "City": " Bačka Palanka"
      },
      {
         "City": " Apatin"
      },
      {
         "City": " Knjazevac"
      }
   ],
   "Russia": [
      {
         "City": " Udomlya"
      },
      {
         "City": " Sosnovka"
      },
      {
         "City": " Sasovo"
      },
      {
         "City": " Zyuzino"
      },
      {
         "City": " Zyablikovo"
      },
      {
         "City": " Zverevo"
      },
      {
         "City": " Zvenigorod"
      },
      {
         "City": " Zlatoust"
      },
      {
         "City": " Zimovniki"
      },
      {
         "City": " Zhulebino"
      },
      {
         "City": " Zhukovskiy"
      },
      {
         "City": " Zhukovka"
      },
      {
         "City": " Zhirnovsk"
      },
      {
         "City": " Zhigulevsk"
      },
      {
         "City": " Zherdevka"
      },
      {
         "City": " Zheleznovodsk"
      },
      {
         "City": " Zheleznogorsk"
      },
      {
         "City": " Zheleznodorozhnyy"
      },
      {
         "City": " Zernograd"
      },
      {
         "City": " Zelenokumsk"
      },
      {
         "City": " Zelenograd"
      },
      {
         "City": " Zelenodolsk"
      },
      {
         "City": " Zelenchukskaya"
      },
      {
         "City": " Zavolzh’ye"
      },
      {
         "City": " Zarechnyy"
      },
      {
         "City": " Zaraysk"
      },
      {
         "City": " Zapolyarnyy"
      },
      {
         "City": " Zamoskvorech’ye"
      },
      {
         "City": " Zainsk"
      },
      {
         "City": " Yur’yev-Pol’skiy"
      },
      {
         "City": " Yoshkar-Ola"
      },
      {
         "City": " Yeysk"
      },
      {
         "City": " Yessentukskaya"
      },
      {
         "City": " Yessentuki"
      },
      {
         "City": " Yershov"
      },
      {
         "City": " Yemva"
      },
      {
         "City": " Yelizavetinskaya"
      },
      {
         "City": " Yelets"
      },
      {
         "City": " Yelan’"
      },
      {
         "City": " Yelabuga"
      },
      {
         "City": " Yegor’yevsk"
      },
      {
         "City": " Yegorlykskaya"
      },
      {
         "City": " Yefremov"
      },
      {
         "City": " Yasnyy"
      },
      {
         "City": " Yasnogorsk"
      },
      {
         "City": " Yasenevo"
      },
      {
         "City": " Yartsevo"
      },
      {
         "City": " Yaroslavl"
      },
      {
         "City": " Yaransk"
      },
      {
         "City": " Yanaul"
      },
      {
         "City": " Yagry"
      },
      {
         "City": " Yablonovskiy"
      },
      {
         "City": " Vyshniy Volochëk"
      },
      {
         "City": " Vyselki"
      },
      {
         "City": " Vyksa"
      },
      {
         "City": " Vykhino-Zhulebino"
      },
      {
         "City": " Vyborg"
      },
      {
         "City": " Vyazniki"
      },
      {
         "City": " Vyaz’ma"
      },
      {
         "City": " Vyatskiye Polyany"
      },
      {
         "City": " Vsevolozhsk"
      },
      {
         "City": " Votkinsk"
      },
      {
         "City": " Vostryakovo"
      },
      {
         "City": " Vostryakovo"
      },
      {
         "City": " Voskresensk"
      },
      {
         "City": " Voronezh"
      },
      {
         "City": " Altuf’yevskiy"
      },
      {
         "City": " Vorob’yovo"
      },
      {
         "City": " Volzhskiy"
      },
      {
         "City": " Volzhsk"
      },
      {
         "City": " Vol’sk"
      },
      {
         "City": " Volokolamsk"
      },
      {
         "City": " Vologda"
      },
      {
         "City": " Volkhov"
      },
      {
         "City": " Nagornyy"
      },
      {
         "City": " Volgorechensk"
      },
      {
         "City": " Volgograd"
      },
      {
         "City": " Volgodonsk"
      },
      {
         "City": " Vnukovo"
      },
      {
         "City": " Novovladykino"
      },
      {
         "City": " Vladimir"
      },
      {
         "City": " Vladikavkaz"
      },
      {
         "City": " Vidnoye"
      },
      {
         "City": " Vichuga"
      },
      {
         "City": " Veshnyaki"
      },
      {
         "City": " Vereshchagino"
      },
      {
         "City": " Venëv"
      },
      {
         "City": " Vel’sk"
      },
      {
         "City": " Velikiy Ustyug"
      },
      {
         "City": " Velikiye Luki"
      },
      {
         "City": " Vatutino"
      },
      {
         "City": " Valuyki"
      },
      {
         "City": " Valday"
      },
      {
         "City": " Vagonoremont"
      },
      {
         "City": " Uzlovaya"
      },
      {
         "City": " Uvarovo"
      },
      {
         "City": " Uva"
      },
      {
         "City": " Ust’-Labinsk"
      },
      {
         "City": " Ust’-Katav"
      },
      {
         "City": " Ust’-Dzheguta"
      },
      {
         "City": " Usman’"
      },
      {
         "City": " Uryupinsk"
      },
      {
         "City": " Urus-Martan"
      },
      {
         "City": " Uritsk"
      },
      {
         "City": " Unecha"
      },
      {
         "City": " Ulyanovsk"
      },
      {
         "City": " Ukhta"
      },
      {
         "City": " Uglich"
      },
      {
         "City": " Ufa"
      },
      {
         "City": " Uchkeken"
      },
      {
         "City": " Uchaly"
      },
      {
         "City": " Uchaly"
      },
      {
         "City": " Tyrnyauz"
      },
      {
         "City": " Tver"
      },
      {
         "City": " Tuymazy"
      },
      {
         "City": " Tutayev"
      },
      {
         "City": " Tula"
      },
      {
         "City": " Tuchkovo"
      },
      {
         "City": " Tuapse"
      },
      {
         "City": " Tsimlyansk"
      },
      {
         "City": " Trubchevsk"
      },
      {
         "City": " Troparëvo"
      },
      {
         "City": " Troitskaya"
      },
      {
         "City": " Troitsk"
      },
      {
         "City": " Tosno"
      },
      {
         "City": " Torzhok"
      },
      {
         "City": " Tomilino"
      },
      {
         "City": " Tol’yatti"
      },
      {
         "City": " Timashëvsk"
      },
      {
         "City": " Tikhvin"
      },
      {
         "City": " Tikhoretsk"
      },
      {
         "City": " Teykovo"
      },
      {
         "City": " Terek"
      },
      {
         "City": " Tyoply Stan"
      },
      {
         "City": " Temryuk"
      },
      {
         "City": " Tekstil’shchiki"
      },
      {
         "City": " Tbilisskaya"
      },
      {
         "City": " Tambov"
      },
      {
         "City": " Agidel’"
      },
      {
         "City": " Taganrog"
      },
      {
         "City": " Taganskiy"
      },
      {
         "City": " Syzran’"
      },
      {
         "City": " Syktyvkar"
      },
      {
         "City": " Svobody"
      },
      {
         "City": " Sviblovo"
      },
      {
         "City": " Svetogorsk"
      },
      {
         "City": " Svetlyy"
      },
      {
         "City": " Svetlograd"
      },
      {
         "City": " Suvorovskaya"
      },
      {
         "City": " Suvorov"
      },
      {
         "City": " Surovikino"
      },
      {
         "City": " Surkhakhi"
      },
      {
         "City": " Sukhinichi"
      },
      {
         "City": " Stupino"
      },
      {
         "City": " Strunino"
      },
      {
         "City": " Stroitel’"
      },
      {
         "City": " Strogino"
      },
      {
         "City": " Sterlitamak"
      },
      {
         "City": " Stavropol’"
      },
      {
         "City": " Staryy Oskol"
      },
      {
         "City": " Staroshcherbinovskaya"
      },
      {
         "City": " Starominskaya"
      },
      {
         "City": " Starodub"
      },
      {
         "City": " Staraya Russa"
      },
      {
         "City": " Staraya Kupavna"
      },
      {
         "City": " Staraya Derevnya"
      },
      {
         "City": " Sovetsk"
      },
      {
         "City": " Sovetsk"
      },
      {
         "City": " Sosnovyy Bor"
      },
      {
         "City": " Sosnovaya Polyana"
      },
      {
         "City": " Sosnogorsk"
      },
      {
         "City": " Sortavala"
      },
      {
         "City": " Sorochinsk"
      },
      {
         "City": " Solntsevo"
      },
      {
         "City": " Solnechnogorsk"
      },
      {
         "City": " Sol’-Iletsk"
      },
      {
         "City": " Solikamsk"
      },
      {
         "City": " Sokol’niki"
      },
      {
         "City": " Sokol"
      },
      {
         "City": " Sokol"
      },
      {
         "City": " Sofrino"
      },
      {
         "City": " Sochi"
      },
      {
         "City": " Sobinka"
      },
      {
         "City": " Smolensk"
      },
      {
         "City": " Slobodskoy"
      },
      {
         "City": " Slobodka"
      },
      {
         "City": " Slavyansk-na-Kubani"
      },
      {
         "City": " Slantsy"
      },
      {
         "City": " Skopin"
      },
      {
         "City": " Skhodnya"
      },
      {
         "City": " Sim"
      },
      {
         "City": " Sibay"
      },
      {
         "City": " Shuya"
      },
      {
         "City": " Shushary"
      },
      {
         "City": " Shumerlya"
      },
      {
         "City": " Mikhaylovsk"
      },
      {
         "City": " Shilovo"
      },
      {
         "City": " Sheksna"
      },
      {
         "City": " Shebekino"
      },
      {
         "City": " Shchukino"
      },
      {
         "City": " Shchigry"
      },
      {
         "City": " Shcherbinka"
      },
      {
         "City": " Shchelkovo"
      },
      {
         "City": " Shchëkino"
      },
      {
         "City": " Shatura"
      },
      {
         "City": " Shar’ya"
      },
      {
         "City": " Shali"
      },
      {
         "City": " Shakhun’ya"
      },
      {
         "City": " Shakhty"
      },
      {
         "City": " Severskaya"
      },
      {
         "City": " Severo-Zadonsk"
      },
      {
         "City": " Severoural’sk"
      },
      {
         "City": " Severomorsk"
      },
      {
         "City": " Severodvinsk"
      },
      {
         "City": " Severnyy"
      },
      {
         "City": " Setun’"
      },
      {
         "City": " Sestroretsk"
      },
      {
         "City": " Sertolovo"
      },
      {
         "City": " Serpukhov"
      },
      {
         "City": " Sergiyev Posad"
      },
      {
         "City": " Sergach"
      },
      {
         "City": " Serdobsk"
      },
      {
         "City": " Semiluki"
      },
      {
         "City": " Semikarakorsk"
      },
      {
         "City": " Semënovskoye"
      },
      {
         "City": " Semënov"
      },
      {
         "City": " Sel’tso"
      },
      {
         "City": " Segezha"
      },
      {
         "City": " Satka"
      },
      {
         "City": " Sarov"
      },
      {
         "City": " Saratov"
      },
      {
         "City": " Sarapul"
      },
      {
         "City": " Saransk"
      },
      {
         "City": " Saraktash"
      },
      {
         "City": " Saint Petersburg"
      },
      {
         "City": " Samara"
      },
      {
         "City": " Sal’sk"
      },
      {
         "City": " Salavat"
      },
      {
         "City": " Safonovo"
      },
      {
         "City": " Rzhev"
      },
      {
         "City": " Rybnoye"
      },
      {
         "City": " Rybinsk"
      },
      {
         "City": " Rybatskoye"
      },
      {
         "City": " Ryazhsk"
      },
      {
         "City": " Ryazan’"
      },
      {
         "City": " Ruzayevka"
      },
      {
         "City": " Rublëvo"
      },
      {
         "City": " Rtishchevo"
      },
      {
         "City": " Rostov-na-Donu"
      },
      {
         "City": " Rostov"
      },
      {
         "City": " Rostokino"
      },
      {
         "City": " Rossosh’"
      },
      {
         "City": " Rossosh’"
      },
      {
         "City": " Roslavl’"
      },
      {
         "City": " Roshal’"
      },
      {
         "City": " Rodniki"
      },
      {
         "City": " Revda"
      },
      {
         "City": " Reutov"
      },
      {
         "City": " Razumnoye"
      },
      {
         "City": " Rayevskiy"
      },
      {
         "City": " Rasskazovo"
      },
      {
         "City": " Ramenki"
      },
      {
         "City": " Pyatigorsk"
      },
      {
         "City": " Pushkino"
      },
      {
         "City": " Pushkin"
      },
      {
         "City": " Pushchino"
      },
      {
         "City": " Pugachev"
      },
      {
         "City": " Pskov"
      },
      {
         "City": " Protvino"
      },
      {
         "City": " Proletarsk"
      },
      {
         "City": " Prokhladnyy"
      },
      {
         "City": " Priyutovo"
      },
      {
         "City": " Privolzhskiy"
      },
      {
         "City": " Privolzhsk"
      },
      {
         "City": " Priozërsk"
      },
      {
         "City": " Primorsko-Akhtarsk"
      },
      {
         "City": " Pridonskoy"
      },
      {
         "City": " Povorino"
      },
      {
         "City": " Kotlovka"
      },
      {
         "City": " Annino"
      },
      {
         "City": " Polyarnyye Zori"
      },
      {
         "City": " Polyarnyy"
      },
      {
         "City": " Pokrovskoye-Streshnëvo"
      },
      {
         "City": " Pokrov"
      },
      {
         "City": " Pokhvistnevo"
      },
      {
         "City": " Podporozh’ye"
      },
      {
         "City": " Podol’sk"
      },
      {
         "City": " Pochep"
      },
      {
         "City": " Ryazanskiy"
      },
      {
         "City": " Plavsk"
      },
      {
         "City": " Pikalëvo"
      },
      {
         "City": " Petushki"
      },
      {
         "City": " Petrozavodsk"
      },
      {
         "City": " Petrovskaya"
      },
      {
         "City": " Petrovsk"
      },
      {
         "City": " Petrodvorets"
      },
      {
         "City": " Peterhof"
      },
      {
         "City": " Pestovo"
      },
      {
         "City": " Pervoural’sk"
      },
      {
         "City": " Perovo"
      },
      {
         "City": " Perm"
      },
      {
         "City": " Pereslavl’-Zalesskiy"
      },
      {
         "City": " Novo-Peredelkino"
      },
      {
         "City": " Penza"
      },
      {
         "City": " Pechora"
      },
      {
         "City": " Pavlovskiy Posad"
      },
      {
         "City": " Pavlovskaya"
      },
      {
         "City": " Pavlovsk"
      },
      {
         "City": " Pavlovsk"
      },
      {
         "City": " Pashkovskiy"
      },
      {
         "City": " Pallasovka"
      },
      {
         "City": " Ozëry"
      },
      {
         "City": " Ozerki"
      },
      {
         "City": " Otradnyy"
      },
      {
         "City": " Otradnoye"
      },
      {
         "City": " Otradnoye"
      },
      {
         "City": " Otradnaya"
      },
      {
         "City": " Ostrov"
      },
      {
         "City": " Ostrogozhsk"
      },
      {
         "City": " Ostashkov"
      },
      {
         "City": " Ostankinskiy"
      },
      {
         "City": " Osa"
      },
      {
         "City": " Orsk"
      },
      {
         "City": " Orlovskiy"
      },
      {
         "City": " Orenburg"
      },
      {
         "City": " Orël"
      },
      {
         "City": " Orekhovo-Zuyevo"
      },
      {
         "City": " Orekhovo-Borisovo Severnoye"
      },
      {
         "City": " Ordzhonikidzevskaya"
      },
      {
         "City": " Onega"
      },
      {
         "City": " Omutninsk"
      },
      {
         "City": " Olenegorsk"
      },
      {
         "City": " Tsotsin-Yurt"
      },
      {
         "City": " Oktyabr’skiy"
      },
      {
         "City": " Odintsovo"
      },
      {
         "City": " Ochër"
      },
      {
         "City": " Ochakovo-Matveyevskoye"
      },
      {
         "City": " Obninsk"
      },
      {
         "City": " Nytva"
      },
      {
         "City": " Nyandoma"
      },
      {
         "City": " Nurlat"
      },
      {
         "City": " Novyy Oskol"
      },
      {
         "City": " Novyye Kuz’minki"
      },
      {
         "City": " Novyye Cherëmushki"
      },
      {
         "City": " Novozybkov"
      },
      {
         "City": " Novovoronezh"
      },
      {
         "City": " Novouzensk"
      },
      {
         "City": " Novoul’yanovsk"
      },
      {
         "City": " Novotroitsk"
      },
      {
         "City": " Novotitarovskaya"
      },
      {
         "City": " Novoshakhtinsk"
      },
      {
         "City": " Novorossiysk"
      },
      {
         "City": " Novopokrovskaya"
      },
      {
         "City": " Novopavlovsk"
      },
      {
         "City": " Novomoskovsk"
      },
      {
         "City": " Novomichurinsk"
      },
      {
         "City": " Novokuz’minki"
      },
      {
         "City": " Novokuybyshevsk"
      },
      {
         "City": " Novokubansk"
      },
      {
         "City": " Novokhovrino"
      },
      {
         "City": " Novogireyevo"
      },
      {
         "City": " Novodvinsk"
      },
      {
         "City": " Novocherkassk"
      },
      {
         "City": " Novocheboksarsk"
      },
      {
         "City": " Novoanninskiy"
      },
      {
         "City": " Novoaleksandrovsk"
      },
      {
         "City": " Velikiy Novgorod"
      },
      {
         "City": " Novaya Usman’"
      },
      {
         "City": " Novaya Derevnya"
      },
      {
         "City": " Noginsk"
      },
      {
         "City": " Nizhnyaya Tura"
      },
      {
         "City": " Nizhniy Tagil"
      },
      {
         "City": " Nizhniy Novgorod"
      },
      {
         "City": " Nizhniy Lomov"
      },
      {
         "City": " Nizhnekamsk"
      },
      {
         "City": " Nikulino"
      },
      {
         "City": " Nikol’skoye"
      },
      {
         "City": " Nikol’skoye"
      },
      {
         "City": " Nikol’sk"
      },
      {
         "City": " Nikolayevsk"
      },
      {
         "City": " Nikel’"
      },
      {
         "City": " Nezlobnaya"
      },
      {
         "City": " Nevinnomyssk"
      },
      {
         "City": " Nevel’"
      },
      {
         "City": " Nesterovskaya"
      },
      {
         "City": " Nerekhta"
      },
      {
         "City": " Nelidovo"
      },
      {
         "City": " Neftekamsk"
      },
      {
         "City": " Neftegorsk"
      },
      {
         "City": " Nazran’"
      },
      {
         "City": " Navashino"
      },
      {
         "City": " Nar'yan-Mar"
      },
      {
         "City": " Nartkala"
      },
      {
         "City": " Naro-Fominsk"
      },
      {
         "City": " Nal’chik"
      },
      {
         "City": " Nakhabino"
      },
      {
         "City": " Naberezhnyye Chelny"
      },
      {
         "City": " Mytishchi"
      },
      {
         "City": " Murom"
      },
      {
         "City": " Murmansk"
      },
      {
         "City": " Mtsensk"
      },
      {
         "City": " Mozhga"
      },
      {
         "City": " Mozhaysk"
      },
      {
         "City": " Mozdok"
      },
      {
         "City": " Mostovskoy"
      },
      {
         "City": " Moscow"
      },
      {
         "City": " Morshansk"
      },
      {
         "City": " Morozovsk"
      },
      {
         "City": " Monino"
      },
      {
         "City": " Monchegorsk"
      },
      {
         "City": " Mirnyy"
      },
      {
         "City": " Mineralnye Vody"
      },
      {
         "City": " Millerovo"
      },
      {
         "City": " Mikhaylovka"
      },
      {
         "City": " Mikhalkovo"
      },
      {
         "City": " Michurinsk"
      },
      {
         "City": " Metallostroy"
      },
      {
         "City": " Menzelinsk"
      },
      {
         "City": " Mendeleyevsk"
      },
      {
         "City": " Meleuz"
      },
      {
         "City": " Melenki"
      },
      {
         "City": " Medvezh’yegorsk"
      },
      {
         "City": " Medvedovskaya"
      },
      {
         "City": " Medvedevo"
      },
      {
         "City": " Mednogorsk"
      },
      {
         "City": " Maykop"
      },
      {
         "City": " Matveyevskoye"
      },
      {
         "City": " Marks"
      },
      {
         "City": " Mar’ino"
      },
      {
         "City": " Mar’ina Roshcha"
      },
      {
         "City": " Manturovo"
      },
      {
         "City": " Yaroslavskiy"
      },
      {
         "City": " Maloyaroslavets"
      },
      {
         "City": " Malgobek"
      },
      {
         "City": " Malakhovka"
      },
      {
         "City": " Makhachkala"
      },
      {
         "City": " Magnitogorsk"
      },
      {
         "City": " Lyudinovo"
      },
      {
         "City": " Lyublino"
      },
      {
         "City": " Lyubertsy"
      },
      {
         "City": " Lytkarino"
      },
      {
         "City": " Lys’va"
      },
      {
         "City": " Lyskovo"
      },
      {
         "City": " Luzhniki"
      },
      {
         "City": " Lukhovitsy"
      },
      {
         "City": " Luga"
      },
      {
         "City": " Losino-Petrovskiy"
      },
      {
         "City": " Lomonosov"
      },
      {
         "City": " Lodeynoye Pole"
      },
      {
         "City": " Lobnya"
      },
      {
         "City": " Livny"
      },
      {
         "City": " Liski"
      },
      {
         "City": " Lipetsk"
      },
      {
         "City": " Likino-Dulevo"
      },
      {
         "City": " Likhobory"
      },
      {
         "City": " Lianozovo"
      },
      {
         "City": " L’govskiy"
      },
      {
         "City": " Levoberezhnaya"
      },
      {
         "City": " Komendantsky aerodrom"
      },
      {
         "City": " Lermontov"
      },
      {
         "City": " Leonovo"
      },
      {
         "City": " Leninskiye Gory"
      },
      {
         "City": " Leninsk"
      },
      {
         "City": " Leninogorsk"
      },
      {
         "City": " Tsaritsyno"
      },
      {
         "City": " Leningradskaya"
      },
      {
         "City": " Yubileyny"
      },
      {
         "City": " Lefortovo"
      },
      {
         "City": " Lebedyan’"
      },
      {
         "City": " Lazarevskoye"
      },
      {
         "City": " Lakinsk"
      },
      {
         "City": " Labinsk"
      },
      {
         "City": " Dugulubgey"
      },
      {
         "City": " Kuznetsk"
      },
      {
         "City": " Kuz’minki"
      },
      {
         "City": " Kuvandyk"
      },
      {
         "City": " Kuskovo"
      },
      {
         "City": " Kushva"
      },
      {
         "City": " Kushchëvskaya"
      },
      {
         "City": " Kusa"
      },
      {
         "City": " Kur’yanovo"
      },
      {
         "City": " Kursk"
      },
      {
         "City": " Kurovskoye"
      },
      {
         "City": " Kurganinsk"
      },
      {
         "City": " Kurchatov"
      },
      {
         "City": " Kurchaloy"
      },
      {
         "City": " Kupchino"
      },
      {
         "City": " Kungur"
      },
      {
         "City": " Kumertau"
      },
      {
         "City": " Kulebaki"
      },
      {
         "City": " Kukmor"
      },
      {
         "City": " Kudymkar"
      },
      {
         "City": " Kudepsta"
      },
      {
         "City": " Kubinka"
      },
      {
         "City": " Kstovo"
      },
      {
         "City": " Krymsk"
      },
      {
         "City": " Kropotkin"
      },
      {
         "City": " Kronshtadt"
      },
      {
         "City": " Krasnyy Sulin"
      },
      {
         "City": " Biryulëvo Zapadnoye"
      },
      {
         "City": " Krasnoye Selo"
      },
      {
         "City": " Krasnovishersk"
      },
      {
         "City": " Krasnoufimsk"
      },
      {
         "City": " Krasnokamsk"
      },
      {
         "City": " Krasnogvardeyskoye"
      },
      {
         "City": " Krasnogorsk"
      },
      {
         "City": " Krasnodar"
      },
      {
         "City": " Krasnoarmeyskaya"
      },
      {
         "City": " Krasnoarmeysk"
      },
      {
         "City": " Krasnoarmeysk"
      },
      {
         "City": " Presnenskiy"
      },
      {
         "City": " Koz’modem’yansk"
      },
      {
         "City": " Kozhukhovo"
      },
      {
         "City": " Kozeyevo"
      },
      {
         "City": " Kozel’sk"
      },
      {
         "City": " Kovylkino"
      },
      {
         "City": " Kovrov"
      },
      {
         "City": " Kovdor"
      },
      {
         "City": " Kotovsk"
      },
      {
         "City": " Kotovo"
      },
      {
         "City": " Kotlas"
      },
      {
         "City": " Kotel’nikovo"
      },
      {
         "City": " Kotel’niki"
      },
      {
         "City": " Kotel’nich"
      },
      {
         "City": " Kostroma"
      },
      {
         "City": " Kostomuksha"
      },
      {
         "City": " Kosaya Gora"
      },
      {
         "City": " Koryazhma"
      },
      {
         "City": " Korenovsk"
      },
      {
         "City": " Konstantinovsk"
      },
      {
         "City": " Kondrovo"
      },
      {
         "City": " Kondopoga"
      },
      {
         "City": " Konakovo"
      },
      {
         "City": " Kommunar"
      },
      {
         "City": " Kolpino"
      },
      {
         "City": " Kolomyagi"
      },
      {
         "City": " Kolomna"
      },
      {
         "City": " Kolomenskoye"
      },
      {
         "City": " Kol’chugino"
      },
      {
         "City": " Kokhma"
      },
      {
         "City": " Klintsy"
      },
      {
         "City": " Klin"
      },
      {
         "City": " Klimovsk"
      },
      {
         "City": " Kizlyar"
      },
      {
         "City": " Kizilyurt"
      },
      {
         "City": " Kizel"
      },
      {
         "City": " Kislovodsk"
      },
      {
         "City": " Kirzhach"
      },
      {
         "City": " Kirsanov"
      },
      {
         "City": " Kirovsk"
      },
      {
         "City": " Kirovsk"
      },
      {
         "City": " Kirovo-Chepetsk"
      },
      {
         "City": " Kirov"
      },
      {
         "City": " Kirov"
      },
      {
         "City": " Kirishi"
      },
      {
         "City": " Kireyevsk"
      },
      {
         "City": " Kingisepp"
      },
      {
         "City": " Kineshma"
      },
      {
         "City": " Kinel’-Cherkassy"
      },
      {
         "City": " Kinel’"
      },
      {
         "City": " Kimry"
      },
      {
         "City": " Kimovsk"
      },
      {
         "City": " Khot'kovo"
      },
      {
         "City": " Khosta"
      },
      {
         "City": " Khoroshëvo-Mnevniki"
      },
      {
         "City": " Kholmskiy"
      },
      {
         "City": " Khimki"
      },
      {
         "City": " Khasavyurt"
      },
      {
         "City": " Kharabali"
      },
      {
         "City": " Khadyzhensk"
      },
      {
         "City": " Kazan"
      },
      {
         "City": " Katav-Ivanovsk"
      },
      {
         "City": " Kastanayevo"
      },
      {
         "City": " Kaspiysk"
      },
      {
         "City": " Kasimov"
      },
      {
         "City": " Kashira"
      },
      {
         "City": " Kashin"
      },
      {
         "City": " Karachev"
      },
      {
         "City": " Karachayevsk"
      },
      {
         "City": " Karabulak"
      },
      {
         "City": " Karabanovo"
      },
      {
         "City": " Kapotnya"
      },
      {
         "City": " Kantyshevo"
      },
      {
         "City": " Kanevskaya"
      },
      {
         "City": " Kandalaksha"
      },
      {
         "City": " Kanash"
      },
      {
         "City": " Kamyzyak"
      },
      {
         "City": " Kamyshin"
      },
      {
         "City": " Kamensk-Shakhtinskiy"
      },
      {
         "City": " Kaluga"
      },
      {
         "City": " Kalininsk"
      },
      {
         "City": " Korolev"
      },
      {
         "City": " Kaliningrad"
      },
      {
         "City": " Kalach-na-Donu"
      },
      {
         "City": " Kalach"
      },
      {
         "City": " Kachkanar"
      },
      {
         "City": " Kabanovo"
      },
      {
         "City": " Izobil’nyy"
      },
      {
         "City": " Izmaylovo"
      },
      {
         "City": " Izhevsk"
      },
      {
         "City": " Izberbash"
      },
      {
         "City": " Ivanteyevka"
      },
      {
         "City": " Ivanovskoye"
      },
      {
         "City": " Ivanovo"
      },
      {
         "City": " Istra"
      },
      {
         "City": " Ishimbay"
      },
      {
         "City": " Ipatovo"
      },
      {
         "City": " Inza"
      },
      {
         "City": " Inozemtsevo"
      },
      {
         "City": " Il’skiy"
      },
      {
         "City": " Igra"
      },
      {
         "City": " Gus’-Khrustal’nyy"
      },
      {
         "City": " Gusev"
      },
      {
         "City": " Gul’kevichi"
      },
      {
         "City": " Gukovo"
      },
      {
         "City": " Gudermes"
      },
      {
         "City": " Gubkin"
      },
      {
         "City": " Gubakha"
      },
      {
         "City": " Gryazovets"
      },
      {
         "City": " Gryazi"
      },
      {
         "City": " Groznyy"
      },
      {
         "City": " Gribanovskiy"
      },
      {
         "City": " Grazhdanka"
      },
      {
         "City": " Goryachiy Klyuch"
      },
      {
         "City": " Goryachevodskiy"
      },
      {
         "City": " Gorodishche"
      },
      {
         "City": " Gorodets"
      },
      {
         "City": " Gorelovo"
      },
      {
         "City": " Gol’yanovo"
      },
      {
         "City": " Golitsyno"
      },
      {
         "City": " Glazov"
      },
      {
         "City": " Giaginskaya"
      },
      {
         "City": " Georgiyevsk"
      },
      {
         "City": " Gelendzhik"
      },
      {
         "City": " Gay"
      },
      {
         "City": " Gavrilov-Yam"
      },
      {
         "City": " Gatchina"
      },
      {
         "City": " Galich"
      },
      {
         "City": " Gagarin"
      },
      {
         "City": " Furmanov"
      },
      {
         "City": " Fryazino"
      },
      {
         "City": " Fryazevo"
      },
      {
         "City": " Frolovo"
      },
      {
         "City": " Fili"
      },
      {
         "City": " Ezhva"
      },
      {
         "City": " Engel’s"
      },
      {
         "City": " Enem"
      },
      {
         "City": " Elista"
      },
      {
         "City": " Elektrougli"
      },
      {
         "City": " Elektrostal’"
      },
      {
         "City": " Elektrogorsk"
      },
      {
         "City": " Ekazhevo"
      },
      {
         "City": " Dzerzhinskiy"
      },
      {
         "City": " Dzerzhinsk"
      },
      {
         "City": " Dyurtyuli"
      },
      {
         "City": " Dyat’kovo"
      },
      {
         "City": " Dubovka"
      },
      {
         "City": " Dubna"
      },
      {
         "City": " Dorogomilovo"
      },
      {
         "City": " Donskoye"
      },
      {
         "City": " Donskoy"
      },
      {
         "City": " Donetsk"
      },
      {
         "City": " Domodedovo"
      },
      {
         "City": " Dolgoprudnyy"
      },
      {
         "City": " Dobryanka"
      },
      {
         "City": " Dmitrov"
      },
      {
         "City": " Divnoye"
      },
      {
         "City": " Dinskaya"
      },
      {
         "City": " Dimitrovgrad"
      },
      {
         "City": " Desnogorsk"
      },
      {
         "City": " Derbent"
      },
      {
         "City": " Zapadnoye Degunino"
      },
      {
         "City": " Dedovsk"
      },
      {
         "City": " Davydkovo"
      },
      {
         "City": " Davlekanovo"
      },
      {
         "City": " Dankov"
      },
      {
         "City": " Danilov"
      },
      {
         "City": " Dagestanskiye Ogni"
      },
      {
         "City": " Dachnoye"
      },
      {
         "City": " Chusovoy"
      },
      {
         "City": " Chudovo"
      },
      {
         "City": " Chistopol’"
      },
      {
         "City": " Chishmy"
      },
      {
         "City": " Chernyanka"
      },
      {
         "City": " Chernyakhovsk"
      },
      {
         "City": " Chernushka"
      },
      {
         "City": " Chernogolovka"
      },
      {
         "City": " Cherkessk"
      },
      {
         "City": " Cherepovets"
      },
      {
         "City": " Cherëmushki"
      },
      {
         "City": " Chekhov"
      },
      {
         "City": " Chegem"
      },
      {
         "City": " Cheboksary"
      },
      {
         "City": " Chaykovskiy"
      },
      {
         "City": " Chapayevsk"
      },
      {
         "City": " Buzuluk"
      },
      {
         "City": " Buynaksk"
      },
      {
         "City": " Buy"
      },
      {
         "City": " Buturlinovka"
      },
      {
         "City": " Businovo"
      },
      {
         "City": " Buinsk"
      },
      {
         "City": " Buguruslan"
      },
      {
         "City": " Bugul’ma"
      },
      {
         "City": " Budënnovsk"
      },
      {
         "City": " Bryukhovetskaya"
      },
      {
         "City": " Bryansk"
      },
      {
         "City": " Bronnitsy"
      },
      {
         "City": " Brateyevo"
      },
      {
         "City": " Borovichi"
      },
      {
         "City": " Borisoglebsk"
      },
      {
         "City": " Bor"
      },
      {
         "City": " Bol’shaya Setun’"
      },
      {
         "City": " Bologoye"
      },
      {
         "City": " Boksitogorsk"
      },
      {
         "City": " Boguchar"
      },
      {
         "City": " Bogorodskoye"
      },
      {
         "City": " Bogorodsk"
      },
      {
         "City": " Bogoroditsk"
      },
      {
         "City": " Bobrov"
      },
      {
         "City": " Blagoveshchensk"
      },
      {
         "City": " Blagodarnyy"
      },
      {
         "City": " Biryulëvo"
      },
      {
         "City": " Birsk"
      },
      {
         "City": " Bibirevo"
      },
      {
         "City": " Bezhetsk"
      },
      {
         "City": " Bezenchuk"
      },
      {
         "City": " Beslan"
      },
      {
         "City": " Berezniki"
      },
      {
         "City": " Beloretsk"
      },
      {
         "City": " Belorechensk"
      },
      {
         "City": " Beloozërskiy"
      },
      {
         "City": " Belgorod"
      },
      {
         "City": " Belëv"
      },
      {
         "City": " Belebey"
      },
      {
         "City": " Belaya Kalitva"
      },
      {
         "City": " Belaya Glina"
      },
      {
         "City": " Baymak"
      },
      {
         "City": " Bavly"
      },
      {
         "City": " Bataysk"
      },
      {
         "City": " Barysh"
      },
      {
         "City": " Balezino"
      },
      {
         "City": " Balashov"
      },
      {
         "City": " Balashikha"
      },
      {
         "City": " Balakovo"
      },
      {
         "City": " Novaya Balakhna"
      },
      {
         "City": " Balabanovo"
      },
      {
         "City": " Baksan"
      },
      {
         "City": " Bakal"
      },
      {
         "City": " Bagayevskaya"
      },
      {
         "City": " Babushkin"
      },
      {
         "City": " Azov"
      },
      {
         "City": " Avtury"
      },
      {
         "City": " Avtovo"
      },
      {
         "City": " Atkarsk"
      },
      {
         "City": " Astrakhan"
      },
      {
         "City": " Asha"
      },
      {
         "City": " Arzgir"
      },
      {
         "City": " Arzamas"
      },
      {
         "City": " Arsk"
      },
      {
         "City": " Armavir"
      },
      {
         "City": " Arkhangel’sk"
      },
      {
         "City": " Argun"
      },
      {
         "City": " Ardon"
      },
      {
         "City": " Apsheronsk"
      },
      {
         "City": " Aprelevka"
      },
      {
         "City": " Apatity"
      },
      {
         "City": " Anna"
      },
      {
         "City": " Andreyevskoye"
      },
      {
         "City": " Anapa"
      },
      {
         "City": " Amin’yevo"
      },
      {
         "City": " Al’met’yevsk"
      },
      {
         "City": " Aleksin"
      },
      {
         "City": " Alekseyevka"
      },
      {
         "City": " Alekseyevka"
      },
      {
         "City": " Aleksandrovskoye"
      },
      {
         "City": " Aleksandrovsk"
      },
      {
         "City": " Aleksandrov"
      },
      {
         "City": " Alatyr’"
      },
      {
         "City": " Levoberezhnyy"
      },
      {
         "City": " Aksay"
      },
      {
         "City": " Akhtyrskiy"
      },
      {
         "City": " Akhtubinsk"
      },
      {
         "City": " Agryz"
      },
      {
         "City": " Afipskiy"
      },
      {
         "City": " Adler"
      },
      {
         "City": " Achkhoy-Martan"
      },
      {
         "City": " Abinsk"
      },
      {
         "City": " Abdulino"
      },
      {
         "City": " Vasil’yevo"
      },
      {
         "City": " Ryl’sk"
      },
      {
         "City": " Neftekumsk"
      },
      {
         "City": " Alagir"
      },
      {
         "City": " Persianovka"
      },
      {
         "City": " Annino"
      },
      {
         "City": " Dagomys"
      },
      {
         "City": " Pavlovo"
      },
      {
         "City": " Belidzhi"
      },
      {
         "City": " Lesnoy"
      },
      {
         "City": " Trëkhgornyy"
      },
      {
         "City": " Mirnyy"
      },
      {
         "City": " Znamensk"
      },
      {
         "City": " Zarechnyy"
      },
      {
         "City": " Kochubeyevskoye"
      },
      {
         "City": " Vnukovo"
      },
      {
         "City": " Moskovskiy"
      },
      {
         "City": " Usinsk"
      },
      {
         "City": " Obukhovo"
      },
      {
         "City": " Staryy Malgobek"
      },
      {
         "City": " Zavodoukovsk"
      },
      {
         "City": " Zarinsk"
      },
      {
         "City": " Zarechnyy"
      },
      {
         "City": " Yuzhnyy"
      },
      {
         "City": " Yuzhnoural’sk"
      },
      {
         "City": " Yurga"
      },
      {
         "City": " Yeniseysk"
      },
      {
         "City": " Yemanzhelinsk"
      },
      {
         "City": " Yekaterinburg"
      },
      {
         "City": " Yashkino"
      },
      {
         "City": " Yarovoye"
      },
      {
         "City": " Yalutorovsk"
      },
      {
         "City": " Vorkuta"
      },
      {
         "City": " Vorgashor"
      },
      {
         "City": " Verkhnyaya Salda"
      },
      {
         "City": " Verkhnyaya Pyshma"
      },
      {
         "City": " Verkhniy Ufaley"
      },
      {
         "City": " Uzhur"
      },
      {
         "City": " Zelenogorsk"
      },
      {
         "City": " Uray"
      },
      {
         "City": " Tyumen"
      },
      {
         "City": " Turinsk"
      },
      {
         "City": " Troitsk"
      },
      {
         "City": " Topki"
      },
      {
         "City": " Tomsk"
      },
      {
         "City": " Toguchin"
      },
      {
         "City": " Tobol’sk"
      },
      {
         "City": " Tayshet"
      },
      {
         "City": " Tayga"
      },
      {
         "City": " Tavda"
      },
      {
         "City": " Tatarsk"
      },
      {
         "City": " Tashtagol"
      },
      {
         "City": " Tarko-Sale"
      },
      {
         "City": " Tara"
      },
      {
         "City": " Talnakh"
      },
      {
         "City": " Tal’menka"
      },
      {
         "City": " Talitsa"
      },
      {
         "City": " Talitsa"
      },
      {
         "City": " Sysert’"
      },
      {
         "City": " Suzun"
      },
      {
         "City": " Surgut"
      },
      {
         "City": " Sukhoy Log"
      },
      {
         "City": " Strezhevoy"
      },
      {
         "City": " Sredneuralsk"
      },
      {
         "City": " Sovetskiy"
      },
      {
         "City": " Sosnovoborsk"
      },
      {
         "City": " Slavgorod"
      },
      {
         "City": " Shushenskoye"
      },
      {
         "City": " Shumikha"
      },
      {
         "City": " Sharypovo"
      },
      {
         "City": " Shadrinsk"
      },
      {
         "City": " Serov"
      },
      {
         "City": " Sayanogorsk"
      },
      {
         "City": " Salekhard"
      },
      {
         "City": " Rubtsovsk"
      },
      {
         "City": " Rezh"
      },
      {
         "City": " Reftinskiy"
      },
      {
         "City": " Promyshlennaya"
      },
      {
         "City": " Prokop’yevsk"
      },
      {
         "City": " Poykovskiy"
      },
      {
         "City": " Polysayevo"
      },
      {
         "City": " Polevskoy"
      },
      {
         "City": " Plast"
      },
      {
         "City": " Osinniki"
      },
      {
         "City": " Omsk"
      },
      {
         "City": " Ob’"
      },
      {
         "City": " Nyagan"
      },
      {
         "City": " Noyabrsk"
      },
      {
         "City": " Novyy Urengoy"
      },
      {
         "City": " Novosilikatnyy"
      },
      {
         "City": " Novosibirsk"
      },
      {
         "City": " Novokuznetsk"
      },
      {
         "City": " Novoaltaysk"
      },
      {
         "City": " Norilsk"
      },
      {
         "City": " Nizhnyaya Salda"
      },
      {
         "City": " Nizhnevartovsk"
      },
      {
         "City": " Nizhneudinsk"
      },
      {
         "City": " Nev’yansk"
      },
      {
         "City": " Nefteyugansk"
      },
      {
         "City": " Nazarovo"
      },
      {
         "City": " Nadym"
      },
      {
         "City": " Myski"
      },
      {
         "City": " Minusinsk"
      },
      {
         "City": " Miass"
      },
      {
         "City": " Mezhdurechensk"
      },
      {
         "City": " Megion"
      },
      {
         "City": " Mayma"
      },
      {
         "City": " Mariinsk"
      },
      {
         "City": " Linëvo"
      },
      {
         "City": " Lesosibirsk"
      },
      {
         "City": " Leninsk-Kuznetsky"
      },
      {
         "City": " Labytnangi"
      },
      {
         "City": " Kyzyl"
      },
      {
         "City": " Kyshtym"
      },
      {
         "City": " Kuybyshev"
      },
      {
         "City": " Kurtamysh"
      },
      {
         "City": " Kurgan"
      },
      {
         "City": " Kupino"
      },
      {
         "City": " Kulunda"
      },
      {
         "City": " Krasnoyarsk"
      },
      {
         "City": " Krasnoural’sk"
      },
      {
         "City": " Krasnotur’insk"
      },
      {
         "City": " Krasnoobsk"
      },
      {
         "City": " Korkino"
      },
      {
         "City": " Kopeysk"
      },
      {
         "City": " Yugorsk"
      },
      {
         "City": " Kolpashevo"
      },
      {
         "City": " Kodinsk"
      },
      {
         "City": " Kochenëvo"
      },
      {
         "City": " Kiselëvsk"
      },
      {
         "City": " Kirovgrad"
      },
      {
         "City": " Khanty-Mansiysk"
      },
      {
         "City": " Kemerovo"
      },
      {
         "City": " Kedrovka"
      },
      {
         "City": " Kayyerkan"
      },
      {
         "City": " Kataysk"
      },
      {
         "City": " Kasli"
      },
      {
         "City": " Kartaly"
      },
      {
         "City": " Karpinsk"
      },
      {
         "City": " Karasuk"
      },
      {
         "City": " Karabash"
      },
      {
         "City": " Kansk"
      },
      {
         "City": " Kamyshlov"
      },
      {
         "City": " Kamensk-Ural’skiy"
      },
      {
         "City": " Kamen’-na-Obi"
      },
      {
         "City": " Kaltan"
      },
      {
         "City": " Kalachinsk"
      },
      {
         "City": " Ivdel’"
      },
      {
         "City": " Iskitim"
      },
      {
         "City": " Ishim"
      },
      {
         "City": " Irbit"
      },
      {
         "City": " Ilanskiy"
      },
      {
         "City": " Gur’yevsk"
      },
      {
         "City": " Gornyak"
      },
      {
         "City": " Gorno-Altaysk"
      },
      {
         "City": " Dudinka"
      },
      {
         "City": " Divnogorsk"
      },
      {
         "City": " Degtyarsk"
      },
      {
         "City": " Chunskiy"
      },
      {
         "City": " Chernogorsk"
      },
      {
         "City": " Cherepanovo"
      },
      {
         "City": " Chelyabinsk"
      },
      {
         "City": " Chebarkul’"
      },
      {
         "City": " Borovskiy"
      },
      {
         "City": " Borodino"
      },
      {
         "City": " Bolotnoye"
      },
      {
         "City": " Bogotol"
      },
      {
         "City": " Bogdanovich"
      },
      {
         "City": " Biysk"
      },
      {
         "City": " Beryozovsky"
      },
      {
         "City": " Berëzovskiy"
      },
      {
         "City": " Berëzovka"
      },
      {
         "City": " Berdsk"
      },
      {
         "City": " Beloyarskiy"
      },
      {
         "City": " Belovo"
      },
      {
         "City": " Barnaul"
      },
      {
         "City": " Barabinsk"
      },
      {
         "City": " Asino"
      },
      {
         "City": " Asbest"
      },
      {
         "City": " Artëmovskiy"
      },
      {
         "City": " Aramil"
      },
      {
         "City": " Anzhero-Sudzhensk"
      },
      {
         "City": " Aleysk"
      },
      {
         "City": " Alapayevsk"
      },
      {
         "City": " Akademgorodok"
      },
      {
         "City": " Achinsk"
      },
      {
         "City": " Abaza"
      },
      {
         "City": " Abakan"
      },
      {
         "City": " Snezhinsk"
      },
      {
         "City": " Ozersk"
      },
      {
         "City": " Zheleznogorsk"
      },
      {
         "City": " Novoural’sk"
      },
      {
         "City": " Seversk"
      },
      {
         "City": " Gubkinskiy"
      },
      {
         "City": " Raduzhny"
      },
      {
         "City": " Muravlenko"
      },
      {
         "City": " Lyantor"
      },
      {
         "City": " Zima"
      },
      {
         "City": " Zheleznogorsk-Ilimskiy"
      },
      {
         "City": " Zeya"
      },
      {
         "City": " Yakutsk"
      },
      {
         "City": " Vyazemskiy"
      },
      {
         "City": " Vrangel’"
      },
      {
         "City": " Vladivostok"
      },
      {
         "City": " Vikhorevka"
      },
      {
         "City": " Ust’-Kut"
      },
      {
         "City": " Ust’-Ilimsk"
      },
      {
         "City": " Ussuriysk"
      },
      {
         "City": " Usol’ye-Sibirskoye"
      },
      {
         "City": " Ulan-Ude"
      },
      {
         "City": " Udachny"
      },
      {
         "City": " Tynda"
      },
      {
         "City": " Tulun"
      },
      {
         "City": " Trudovoye"
      },
      {
         "City": " Fokino"
      },
      {
         "City": " Svobodnyy"
      },
      {
         "City": " Spassk-Dal’niy"
      },
      {
         "City": " Slyudyanka"
      },
      {
         "City": " Shimanovsk"
      },
      {
         "City": " Shelekhov"
      },
      {
         "City": " Severobaykal’sk"
      },
      {
         "City": " Raychikhinsk"
      },
      {
         "City": " Petrovsk-Zabaykal’skiy"
      },
      {
         "City": " Partizansk"
      },
      {
         "City": " Neryungri"
      },
      {
         "City": " Nerchinsk"
      },
      {
         "City": " Nakhodka"
      },
      {
         "City": " Mirny"
      },
      {
         "City": " Luchegorsk"
      },
      {
         "City": " Lesozavodsk"
      },
      {
         "City": " Lensk"
      },
      {
         "City": " Kyakhta"
      },
      {
         "City": " Krasnokamensk"
      },
      {
         "City": " Komsomolsk-on-Amur"
      },
      {
         "City": " Khabarovsk"
      },
      {
         "City": " Kavalerovo"
      },
      {
         "City": " Irkutsk"
      },
      {
         "City": " Gusinoozyorsk"
      },
      {
         "City": " Dal’nerechensk"
      },
      {
         "City": " Chita"
      },
      {
         "City": " Cheremkhovo"
      },
      {
         "City": " Borzya"
      },
      {
         "City": " Bol’shoy Kamen’"
      },
      {
         "City": " Bodaybo"
      },
      {
         "City": " Blagoveshchensk"
      },
      {
         "City": " Birobidzhan"
      },
      {
         "City": " Bikin"
      },
      {
         "City": " Belogorsk"
      },
      {
         "City": " Baykal’sk"
      },
      {
         "City": " Aykhal"
      },
      {
         "City": " Artëm"
      },
      {
         "City": " Arsen’yev"
      },
      {
         "City": " Angarsk"
      },
      {
         "City": " Amursk"
      },
      {
         "City": " Aldan"
      },
      {
         "City": " Dal'negorsk"
      },
      {
         "City": " Bratsk"
      },
      {
         "City": " Sayansk"
      },
      {
         "City": " Khabarovsk Vtoroy"
      },
      {
         "City": " Markova"
      },
      {
         "City": " Vilyuchinsk"
      },
      {
         "City": " Yuzhno-Sakhalinsk"
      },
      {
         "City": " Yelizovo"
      },
      {
         "City": " Vanino"
      },
      {
         "City": " Sovetskaya Gavan’"
      },
      {
         "City": " Poronaysk"
      },
      {
         "City": " Petropavlovsk-Kamchatsky"
      },
      {
         "City": " Okha"
      },
      {
         "City": " Nikolayevsk-on-Amure"
      },
      {
         "City": " Nevel’sk"
      },
      {
         "City": " Magadan"
      },
      {
         "City": " Korsakov"
      },
      {
         "City": " Kholmsk"
      },
      {
         "City": " Baltiysk"
      },
      {
         "City": " Isakogorka"
      },
      {
         "City": " Krasnoznamensk"
      },
      {
         "City": " Chertanovo Yuzhnoye"
      },
      {
         "City": " Zagor’ye"
      },
      {
         "City": " Orekhovo-Borisovo"
      },
      {
         "City": " Metrogorodok"
      },
      {
         "City": " Kogalym"
      },
      {
         "City": " Pyt-Yakh"
      },
      {
         "City": " Langepas"
      },
      {
         "City": " Lesnoy"
      },
      {
         "City": " Zarya"
      },
      {
         "City": " Raduzhnyy"
      },
      {
         "City": " Nizhnesortymskiy"
      },
      {
         "City": " Pokachi"
      },
      {
         "City": " Izluchinsk"
      },
      {
         "City": " Kurortnyy"
      },
      {
         "City": " Chernaya Rechka"
      },
      {
         "City": " Untolovo"
      },
      {
         "City": " Petrogradka"
      },
      {
         "City": " Vasyl'evsky Ostrov"
      },
      {
         "City": " Parnas"
      },
      {
         "City": " Kalininskiy"
      },
      {
         "City": " Krasnogvargeisky"
      },
      {
         "City": " Admiralteisky"
      },
      {
         "City": " Krestovskiy ostrov"
      },
      {
         "City": " Akademicheskoe"
      },
      {
         "City": " Finlyandskiy"
      },
      {
         "City": " Centralniy"
      },
      {
         "City": " Svetlanovskiy"
      },
      {
         "City": " Sampsonievskiy"
      },
      {
         "City": " Vostochnoe Degunino"
      }
   ],
   "Rwanda": [
      {
         "City": " Rwamagana"
      },
      {
         "City": " Musanze"
      },
      {
         "City": " Nzega"
      },
      {
         "City": " Kigali"
      },
      {
         "City": " Kibuye"
      },
      {
         "City": " Kibungo"
      },
      {
         "City": " Gitarama"
      },
      {
         "City": " Cyangugu"
      },
      {
         "City": " Gisenyi"
      },
      {
         "City": " Byumba"
      },
      {
         "City": " Butare"
      }
   ],
   "Saudi Arabia": [
      {
         "City": " Yanbu"
      },
      {
         "City": " Umm Lajj"
      },
      {
         "City": " Ţurayf"
      },
      {
         "City": " Turabah"
      },
      {
         "City": " Tārūt"
      },
      {
         "City": " Tabuk"
      },
      {
         "City": " Ţubarjal"
      },
      {
         "City": " Sulţānah"
      },
      {
         "City": " Sayhāt"
      },
      {
         "City": " Şāmitah"
      },
      {
         "City": " Sakakah"
      },
      {
         "City": " Şafwá"
      },
      {
         "City": " Şabyā"
      },
      {
         "City": " Raḩīmah"
      },
      {
         "City": " Rābigh"
      },
      {
         "City": " Qal‘at Bīshah"
      },
      {
         "City": " Najrān"
      },
      {
         "City": " Mecca"
      },
      {
         "City": " Khamis Mushait"
      },
      {
         "City": " Jizan"
      },
      {
         "City": " Jeddah"
      },
      {
         "City": " Ha'il"
      },
      {
         "City": " Duba"
      },
      {
         "City": " Buraydah"
      },
      {
         "City": " Abqaiq"
      },
      {
         "City": " Badr Ḩunayn"
      },
      {
         "City": " Az Zulfi"
      },
      {
         "City": " Dhahran"
      },
      {
         "City": " Aţ Ţaraf"
      },
      {
         "City": " Ta’if"
      },
      {
         "City": " As Sulayyil"
      },
      {
         "City": " Riyadh"
      },
      {
         "City": " Ar Rass"
      },
      {
         "City": " ‘Ar‘ar"
      },
      {
         "City": " An Nimāş"
      },
      {
         "City": " Qurayyat"
      },
      {
         "City": " Al Wajh"
      },
      {
         "City": " Al ‘Ulá"
      },
      {
         "City": " Al Qayşūmah"
      },
      {
         "City": " Al Qaţīf"
      },
      {
         "City": " Al Munayzilah"
      },
      {
         "City": " Al Mubarraz"
      },
      {
         "City": " Al Mithnab"
      },
      {
         "City": " Medina"
      },
      {
         "City": " Khobar"
      },
      {
         "City": " Al Khafjī"
      },
      {
         "City": " Al Jumūm"
      },
      {
         "City": " Al Jubayl"
      },
      {
         "City": " Al Hufūf"
      },
      {
         "City": " Al Bukayrīyah"
      },
      {
         "City": " Al Baţţālīyah"
      },
      {
         "City": " Al Bāḩah"
      },
      {
         "City": " ‘Afīf"
      },
      {
         "City": " Ad Dilam"
      },
      {
         "City": " Ad Dawādimī"
      },
      {
         "City": " Dammam"
      },
      {
         "City": " Abū ‘Arīsh"
      },
      {
         "City": " Abha"
      },
      {
         "City": " Ash Shafā"
      },
      {
         "City": " Unaizah"
      }
   ],
   "Solomon Islands": [
      {
         "City": " Honiara"
      }
   ],
   "Seychelles": [
      {
         "City": " Victoria"
      }
   ],
   "Sudan": [
      {
         "City": " Zalingei"
      },
      {
         "City": " Wad Medani"
      },
      {
         "City": " Umm Ruwaba"
      },
      {
         "City": " Omdurman"
      },
      {
         "City": " Tokār"
      },
      {
         "City": " Tandaltī"
      },
      {
         "City": " Singa"
      },
      {
         "City": " Shendi"
      },
      {
         "City": " Sawākin"
      },
      {
         "City": " Sinnar"
      },
      {
         "City": " Rabak"
      },
      {
         "City": " Maiurno"
      },
      {
         "City": " Kosti"
      },
      {
         "City": " Kuraymah"
      },
      {
         "City": " Kināna"
      },
      {
         "City": " Kassala"
      },
      {
         "City": " Kadugli"
      },
      {
         "City": " Doka"
      },
      {
         "City": " Dilling"
      },
      {
         "City": " Port Sudan"
      },
      {
         "City": " Berber"
      },
      {
         "City": " Bārah"
      },
      {
         "City": " Atbara"
      },
      {
         "City": " As Sūkī"
      },
      {
         "City": " Ar Ruseris"
      },
      {
         "City": " Ar Rahad"
      },
      {
         "City": " An Nuhūd"
      },
      {
         "City": " El Obeid"
      },
      {
         "City": " Al Qiţena"
      },
      {
         "City": " Al Qadarif"
      },
      {
         "City": " Al Mijlad"
      },
      {
         "City": " Al Manāqil"
      },
      {
         "City": " Khartoum"
      },
      {
         "City": " Geneina"
      },
      {
         "City": " Al Hilāliyya"
      },
      {
         "City": " Al Ḩawātah"
      },
      {
         "City": " Al Hasaheisa"
      },
      {
         "City": " El Fasher"
      },
      {
         "City": " El Bauga"
      },
      {
         "City": " Ad Douiem"
      },
      {
         "City": " El Daein"
      },
      {
         "City": " Ad Dindar"
      },
      {
         "City": " Ed Damer"
      },
      {
         "City": " Ad-Damazin"
      },
      {
         "City": " Abū Zabad"
      },
      {
         "City": " Abu Jibeha"
      }
   ],
   "Sweden": [
      {
         "City": " Umeå"
      },
      {
         "City": " Skellefteå"
      },
      {
         "City": " Piteå"
      },
      {
         "City": " Luleå"
      },
      {
         "City": " Kiruna"
      },
      {
         "City": " Boden"
      },
      {
         "City": " Ystad"
      },
      {
         "City": " Visby"
      },
      {
         "City": " Växjö"
      },
      {
         "City": " Västervik"
      },
      {
         "City": " Västerås"
      },
      {
         "City": " Värnamo"
      },
      {
         "City": " Varberg"
      },
      {
         "City": " Vänersborg"
      },
      {
         "City": " Vallentuna"
      },
      {
         "City": " Uppsala"
      },
      {
         "City": " Upplands Väsby"
      },
      {
         "City": " Uddevalla"
      },
      {
         "City": " Tumba"
      },
      {
         "City": " Tullinge"
      },
      {
         "City": " Trollhättan"
      },
      {
         "City": " Trelleborg"
      },
      {
         "City": " Täby"
      },
      {
         "City": " Sundsvall"
      },
      {
         "City": " Sundbyberg"
      },
      {
         "City": " Stockholm"
      },
      {
         "City": " Solna"
      },
      {
         "City": " Sollentuna"
      },
      {
         "City": " Södertälje"
      },
      {
         "City": " Skövde"
      },
      {
         "City": " Skara"
      },
      {
         "City": " Sandviken"
      },
      {
         "City": " Råsunda"
      },
      {
         "City": " Partille"
      },
      {
         "City": " Östersund"
      },
      {
         "City": " Östermalm"
      },
      {
         "City": " Oskarshamn"
      },
      {
         "City": " Örnsköldsvik"
      },
      {
         "City": " Örebro"
      },
      {
         "City": " Nyköping"
      },
      {
         "City": " Norrtälje"
      },
      {
         "City": " Norrköping"
      },
      {
         "City": " Nässjö"
      },
      {
         "City": " Nacka"
      },
      {
         "City": " Motala"
      },
      {
         "City": " Mölndal"
      },
      {
         "City": " Märsta"
      },
      {
         "City": " Malmö"
      },
      {
         "City": " Lund"
      },
      {
         "City": " Linköping"
      },
      {
         "City": " Lidköping"
      },
      {
         "City": " Lidingö"
      },
      {
         "City": " Lerum"
      },
      {
         "City": " Landskrona"
      },
      {
         "City": " Kungsbacka"
      },
      {
         "City": " Kungälv"
      },
      {
         "City": " Kristinehamn"
      },
      {
         "City": " Kristianstad"
      },
      {
         "City": " Köping"
      },
      {
         "City": " Katrineholm"
      },
      {
         "City": " Karlstad"
      },
      {
         "City": " Karlskrona"
      },
      {
         "City": " Karlskoga"
      },
      {
         "City": " Karlshamn"
      },
      {
         "City": " Kalmar"
      },
      {
         "City": " Jönköping"
      },
      {
         "City": " Jakobsberg"
      },
      {
         "City": " Huskvarna"
      },
      {
         "City": " Huddinge"
      },
      {
         "City": " Helsingborg"
      },
      {
         "City": " Hässleholm"
      },
      {
         "City": " Härnösand"
      },
      {
         "City": " Haninge"
      },
      {
         "City": " Halmstad"
      },
      {
         "City": " Göteborg"
      },
      {
         "City": " Gävle"
      },
      {
         "City": " Gamla Uppsala"
      },
      {
         "City": " Falun"
      },
      {
         "City": " Falköping"
      },
      {
         "City": " Falkenberg"
      },
      {
         "City": " Eslöv"
      },
      {
         "City": " Eskilstuna"
      },
      {
         "City": " Enköping"
      },
      {
         "City": " Bromma"
      },
      {
         "City": " Borlänge"
      },
      {
         "City": " Borås"
      },
      {
         "City": " Boo"
      },
      {
         "City": " Årsta"
      },
      {
         "City": " Ängelholm"
      },
      {
         "City": " Alingsås"
      },
      {
         "City": " Åkersberga"
      },
      {
         "City": " Majorna"
      }
   ],
   "Singapore": [
      {
         "City": " Singapore"
      }
   ],
   "Saint Helena": [
      {
         "City": " Jamestown"
      }
   ],
   "Slovenia": [
      {
         "City": " Trbovlje"
      },
      {
         "City": " Velenje"
      },
      {
         "City": " Ptuj"
      },
      {
         "City": " Novo Mesto"
      },
      {
         "City": " Maribor"
      },
      {
         "City": " Ljubljana"
      },
      {
         "City": " Kranj"
      },
      {
         "City": " Koper"
      },
      {
         "City": " Celje"
      }
   ],
   "Svalbard and Jan Mayen": [
      {
         "City": " Longyearbyen"
      }
   ],
   "Slovakia": [
      {
         "City": " Vranov nad Topľou"
      },
      {
         "City": " Trebišov"
      },
      {
         "City": " Stará Ľubovňa"
      },
      {
         "City": " Spišská Nová Ves"
      },
      {
         "City": " Snina"
      },
      {
         "City": " Rožňava"
      },
      {
         "City": " Rimavská Sobota"
      },
      {
         "City": " Prešov"
      },
      {
         "City": " Poprad"
      },
      {
         "City": " Michalovce"
      },
      {
         "City": " Košice"
      },
      {
         "City": " Kežmarok"
      },
      {
         "City": " Humenné"
      },
      {
         "City": " Bardejov"
      },
      {
         "City": " Zvolen"
      },
      {
         "City": " Zlaté Moravce"
      },
      {
         "City": " Žilina"
      },
      {
         "City": " Žiar nad Hronom"
      },
      {
         "City": " Trnava"
      },
      {
         "City": " Trenčín"
      },
      {
         "City": " Skalica"
      },
      {
         "City": " Senica"
      },
      {
         "City": " Sellye"
      },
      {
         "City": " Ružomberok"
      },
      {
         "City": " Púchov"
      },
      {
         "City": " Prievidza"
      },
      {
         "City": " Považská Bystrica"
      },
      {
         "City": " Piešťany"
      },
      {
         "City": " Pezinok"
      },
      {
         "City": " Partizánske"
      },
      {
         "City": " Nové Zámky"
      },
      {
         "City": " Nové Mesto nad Váhom"
      },
      {
         "City": " Nitra"
      },
      {
         "City": " Martin"
      },
      {
         "City": " Malacky"
      },
      {
         "City": " Lučenec"
      },
      {
         "City": " Liptovský Mikuláš"
      },
      {
         "City": " Levice"
      },
      {
         "City": " Kysucké Nové Mesto"
      },
      {
         "City": " Komárno"
      },
      {
         "City": " Hlohovec"
      },
      {
         "City": " Handlová"
      },
      {
         "City": " Galanta"
      },
      {
         "City": " Dunajská Streda"
      },
      {
         "City": " Dubnica nad Váhom"
      },
      {
         "City": " Dolný Kubín"
      },
      {
         "City": " Detva"
      },
      {
         "City": " Čadca"
      },
      {
         "City": " Brezno"
      },
      {
         "City": " Bratislava"
      },
      {
         "City": " Banská Bystrica"
      },
      {
         "City": " Bánovce nad Bebravou"
      }
   ],
   "Sierra Leone": [
      {
         "City": " Waterloo"
      },
      {
         "City": " Segbwema"
      },
      {
         "City": " Port Loko"
      },
      {
         "City": " Makeni"
      },
      {
         "City": " Lunsar"
      },
      {
         "City": " Koidu"
      },
      {
         "City": " Kenema"
      },
      {
         "City": " Kabala"
      },
      {
         "City": " Freetown"
      },
      {
         "City": " Bo"
      }
   ],
   "San Marino": [
      {
         "City": " San Marino"
      }
   ],
   "Senegal": [
      {
         "City": " Ziguinchor"
      },
      {
         "City": " Vélingara"
      },
      {
         "City": " Touba"
      },
      {
         "City": " Tiébo"
      },
      {
         "City": " Thiès Nones"
      },
      {
         "City": " Tambacounda"
      },
      {
         "City": " Sédhiou"
      },
      {
         "City": " Saint-Louis"
      },
      {
         "City": " Richard-Toll"
      },
      {
         "City": " Pout"
      },
      {
         "City": " Pourham"
      },
      {
         "City": " Pikine"
      },
      {
         "City": " Nioro du Rip"
      },
      {
         "City": " Nguékhokh"
      },
      {
         "City": " Ndibène Dahra"
      },
      {
         "City": " Mékhé"
      },
      {
         "City": " Mbaké"
      },
      {
         "City": " Matam"
      },
      {
         "City": " Louga"
      },
      {
         "City": " Kolda"
      },
      {
         "City": " Kédougou"
      },
      {
         "City": " Kayar"
      },
      {
         "City": " Kaolack"
      },
      {
         "City": " Kaffrine"
      },
      {
         "City": " Joal-Fadiout"
      },
      {
         "City": " Guinguinéo"
      },
      {
         "City": " Dara"
      },
      {
         "City": " Dakar"
      },
      {
         "City": " Bignona"
      }
   ],
   "Somalia": [
      {
         "City": " Wanlaweyn"
      },
      {
         "City": " Qoryooley"
      },
      {
         "City": " Qandala"
      },
      {
         "City": " Mogadishu"
      },
      {
         "City": " Marka"
      },
      {
         "City": " Luuq"
      },
      {
         "City": " Kismayo"
      },
      {
         "City": " Jilib"
      },
      {
         "City": " Jawhar"
      },
      {
         "City": " Jamaame"
      },
      {
         "City": " Hargeysa"
      },
      {
         "City": " Garoowe"
      },
      {
         "City": " Gaalkacyo"
      },
      {
         "City": " Eyl"
      },
      {
         "City": " Ceerigaabo"
      },
      {
         "City": " Ceeldheer"
      },
      {
         "City": " Buurhakaba"
      },
      {
         "City": " Buulobarde"
      },
      {
         "City": " Burao"
      },
      {
         "City": " Bosaso"
      },
      {
         "City": " Berbera"
      },
      {
         "City": " Beledweyne"
      },
      {
         "City": " Baidoa"
      },
      {
         "City": " Baardheere"
      },
      {
         "City": " Afgooye"
      },
      {
         "City": " Laascaanood"
      },
      {
         "City": " Baki"
      }
   ],
   "Suriname": [
      {
         "City": " Paramaribo"
      },
      {
         "City": " Lelydorp"
      }
   ],
   "South Sudan": [
      {
         "City": " Yei"
      },
      {
         "City": " Yambio"
      },
      {
         "City": " Wau"
      },
      {
         "City": " Aweil"
      },
      {
         "City": " Torit"
      },
      {
         "City": " Tonj"
      },
      {
         "City": " Rumbek"
      },
      {
         "City": " Malakal"
      },
      {
         "City": " Juba"
      },
      {
         "City": " Gogrial"
      },
      {
         "City": " Pajok"
      },
      {
         "City": " Bor"
      }
   ],
   "Sao Tome and Principe": [
      {
         "City": " São Tomé"
      }
   ],
   "El Salvador": [
      {
         "City": " Zacatecoluca"
      },
      {
         "City": " Usulután"
      },
      {
         "City": " Soyapango"
      },
      {
         "City": " Sonzacate"
      },
      {
         "City": " Sonsonate"
      },
      {
         "City": " Sensuntepeque"
      },
      {
         "City": " San Vicente"
      },
      {
         "City": " Santiago de María"
      },
      {
         "City": " Santa Ana"
      },
      {
         "City": " San Salvador"
      },
      {
         "City": " San Rafael Oriente"
      },
      {
         "City": " San Miguel"
      },
      {
         "City": " San Martín"
      },
      {
         "City": " San Marcos"
      },
      {
         "City": " San Francisco"
      },
      {
         "City": " Quezaltepeque"
      },
      {
         "City": " Puerto El Triunfo"
      },
      {
         "City": " Santa Tecla"
      },
      {
         "City": " Metapán"
      },
      {
         "City": " Mejicanos"
      },
      {
         "City": " La Unión"
      },
      {
         "City": " La Libertad"
      },
      {
         "City": " Izalco"
      },
      {
         "City": " Ilopango"
      },
      {
         "City": " Delgado"
      },
      {
         "City": " Cuscatancingo"
      },
      {
         "City": " Cojutepeque"
      },
      {
         "City": " Chalchuapa"
      },
      {
         "City": " Chalatenango"
      },
      {
         "City": " Ayutuxtepeque"
      },
      {
         "City": " Apopa"
      },
      {
         "City": " Antiguo Cuscatlán"
      },
      {
         "City": " Ahuachapán"
      },
      {
         "City": " Aguilares"
      },
      {
         "City": " Acajutla"
      }
   ],
   "Sint Maarten": [
      {
         "City": " Philipsburg"
      }
   ],
   "Syria": [
      {
         "City": " Yabrūd"
      },
      {
         "City": " Ţayyibat al Imām"
      },
      {
         "City": " Tartouss"
      },
      {
         "City": " Tall Rif‘at"
      },
      {
         "City": " Tallkalakh"
      },
      {
         "City": " Tallbīsah"
      },
      {
         "City": " Ţafas"
      },
      {
         "City": " Tadmur"
      },
      {
         "City": " Tādif"
      },
      {
         "City": " Souran"
      },
      {
         "City": " Subaykhān"
      },
      {
         "City": " Ash Shaykh Miskīn"
      },
      {
         "City": " Sarāqib"
      },
      {
         "City": " Salqīn"
      },
      {
         "City": " As Salamīyah"
      },
      {
         "City": " Satita"
      },
      {
         "City": " Qaţanā"
      },
      {
         "City": " Jāsim"
      },
      {
         "City": " Qārah"
      },
      {
         "City": " Nubl"
      },
      {
         "City": " Maşyāf"
      },
      {
         "City": " Manbij"
      },
      {
         "City": " Ma‘arratmişrīn"
      },
      {
         "City": " Khān Shaykhūn"
      },
      {
         "City": " Kafr Zaytā"
      },
      {
         "City": " Kafr Takhārīm"
      },
      {
         "City": " Kafr Nubl"
      },
      {
         "City": " Kafr Lāhā"
      },
      {
         "City": " Jisr ash Shughūr"
      },
      {
         "City": " Jayrūd"
      },
      {
         "City": " Jarābulus"
      },
      {
         "City": " Jablah"
      },
      {
         "City": " ‘Irbīn"
      },
      {
         "City": " Inkhil"
      },
      {
         "City": " Idlib"
      },
      {
         "City": " Homs"
      },
      {
         "City": " Ḩarastā"
      },
      {
         "City": " Ḩamāh"
      },
      {
         "City": " Ḩalfāyā"
      },
      {
         "City": " Aleppo"
      },
      {
         "City": " Douma"
      },
      {
         "City": " Damascus"
      },
      {
         "City": " Dayr Ḩāfir"
      },
      {
         "City": " Deir ez-Zor"
      },
      {
         "City": " Ad Darbāsīyah"
      },
      {
         "City": " Dārayyā"
      },
      {
         "City": " Dar‘ā"
      },
      {
         "City": " Binnish"
      },
      {
         "City": " Bāniyās"
      },
      {
         "City": " Az Zabadānī"
      },
      {
         "City": " I‘zāz"
      },
      {
         "City": " ‘Ayn al ‘Arab"
      },
      {
         "City": " At Tall"
      },
      {
         "City": " Ath Thawrah"
      },
      {
         "City": " As Suwaydā’"
      },
      {
         "City": " Aş Şanamayn"
      },
      {
         "City": " As Safīrah"
      },
      {
         "City": " Ar Rastan"
      },
      {
         "City": " Ar Raqqah"
      },
      {
         "City": " An Nabk"
      },
      {
         "City": " Al Quţayfah"
      },
      {
         "City": " Al Quşayr"
      },
      {
         "City": " Al Qunayţirah"
      },
      {
         "City": " Al Qaryatayn"
      },
      {
         "City": " Al Mayādīn"
      },
      {
         "City": " Latakia"
      },
      {
         "City": " Al Kiswah"
      },
      {
         "City": " Al Ḩasakah"
      },
      {
         "City": " Al Ḩarāk"
      },
      {
         "City": " Al Bāb"
      },
      {
         "City": " ‘Afrīn"
      },
      {
         "City": " Ad Dānā"
      },
      {
         "City": " Ālbū Kamāl"
      },
      {
         "City": " Hajīn"
      }
   ],
   "Swaziland": [
      {
         "City": " Mbabane"
      },
      {
         "City": " Manzini"
      },
      {
         "City": " Lobamba"
      }
   ],
   "Turks and Caicos Islands": [
      {
         "City": " Cockburn Town"
      }
   ],
   "Chad": [
      {
         "City": " Fada"
      },
      {
         "City": " Am Timan"
      },
      {
         "City": " Abéché"
      },
      {
         "City": " Sagh"
      },
      {
         "City": " Pala"
      },
      {
         "City": " Oum Hadjer"
      },
      {
         "City": " N'Djamena"
      },
      {
         "City": " Moussoro"
      },
      {
         "City": " Moundou"
      },
      {
         "City": " Mongo"
      },
      {
         "City": " Mboursou Léré"
      },
      {
         "City": " Massakory"
      },
      {
         "City": " Massaguet"
      },
      {
         "City": " Mao"
      },
      {
         "City": " Laï"
      },
      {
         "City": " Kyabé"
      },
      {
         "City": " Koumra"
      },
      {
         "City": " Kelo"
      },
      {
         "City": " Dourbali"
      },
      {
         "City": " Doba"
      },
      {
         "City": " Bongor"
      },
      {
         "City": " Bitkine"
      },
      {
         "City": " Benoy"
      },
      {
         "City": " Ati"
      }
   ],
   "French Southern Territories": [
      {
         "City": " Port-aux-Français"
      }
   ],
   "Togo": [
      {
         "City": " Vogan"
      },
      {
         "City": " Tsévié"
      },
      {
         "City": " Tchamba"
      },
      {
         "City": " Sotouboua"
      },
      {
         "City": " Sokodé"
      },
      {
         "City": " Notsé"
      },
      {
         "City": " Niamtougou"
      },
      {
         "City": " Sansanné-Mango"
      },
      {
         "City": " Lomé"
      },
      {
         "City": " Kpalimé"
      },
      {
         "City": " Kara"
      },
      {
         "City": " Dapaong"
      },
      {
         "City": " Bassar"
      },
      {
         "City": " Bafilo"
      },
      {
         "City": " Badou"
      },
      {
         "City": " Atakpamé"
      },
      {
         "City": " Aného"
      }
   ],
   "Thailand": [
      {
         "City": " Ban Talat Yai"
      },
      {
         "City": " Ban Talat Nua"
      },
      {
         "City": " Sam Roi Yot"
      },
      {
         "City": " Phetchaburi"
      },
      {
         "City": " Trang"
      },
      {
         "City": " Thung Song"
      },
      {
         "City": " Thoen"
      },
      {
         "City": " Thap Than"
      },
      {
         "City": " Tha Muang"
      },
      {
         "City": " Tha Maka"
      },
      {
         "City": " Tak"
      },
      {
         "City": " Surat Thani"
      },
      {
         "City": " Sukhothai"
      },
      {
         "City": " Si Satchanalai"
      },
      {
         "City": " Sawankhalok"
      },
      {
         "City": " San Pa Tong"
      },
      {
         "City": " San Kamphaeng"
      },
      {
         "City": " Ron Phibun"
      },
      {
         "City": " Ratchaburi"
      },
      {
         "City": " Ranong"
      },
      {
         "City": " Pran Buri"
      },
      {
         "City": " Prachuap Khiri Khan"
      },
      {
         "City": " Phunphin"
      },
      {
         "City": " Phuket"
      },
      {
         "City": " Photharam"
      },
      {
         "City": " Phayao"
      },
      {
         "City": " Pa Sang"
      },
      {
         "City": " Nakhon Si Thammarat"
      },
      {
         "City": " Mae Sot"
      },
      {
         "City": " Mae Sai"
      },
      {
         "City": " Mae Ramat"
      },
      {
         "City": " Mae Chan"
      },
      {
         "City": " Lat Yao"
      },
      {
         "City": " Lang Suan"
      },
      {
         "City": " Lamphun"
      },
      {
         "City": " Lampang"
      },
      {
         "City": " Kui Buri"
      },
      {
         "City": " Krabi"
      },
      {
         "City": " Khao Yoi"
      },
      {
         "City": " Khanu Woralaksaburi"
      },
      {
         "City": " Kathu"
      },
      {
         "City": " Kanchanaburi"
      },
      {
         "City": " Kamphaeng Phet"
      },
      {
         "City": " Huai Yot"
      },
      {
         "City": " Hua Hin"
      },
      {
         "City": " Hang Dong"
      },
      {
         "City": " Dok Kham Tai"
      },
      {
         "City": " Damnoen Saduak"
      },
      {
         "City": " Chumphon"
      },
      {
         "City": " Chom Bueng"
      },
      {
         "City": " Chiang Rai"
      },
      {
         "City": " Chiang Mai"
      },
      {
         "City": " Cha-am"
      },
      {
         "City": " Bo Phloi"
      },
      {
         "City": " Ban Tak"
      },
      {
         "City": " Ko Samui"
      },
      {
         "City": " Ban Pong"
      },
      {
         "City": " Ban Na San"
      },
      {
         "City": " Ban Na"
      },
      {
         "City": " Bang Saphan"
      },
      {
         "City": " Bang Phae"
      },
      {
         "City": " Nong Kung Si"
      },
      {
         "City": " Ban Nong Wua So"
      },
      {
         "City": " Ban Mai"
      },
      {
         "City": " Ban Huai Thalaeng"
      },
      {
         "City": " Ban Khlong Bang Sao Thong"
      },
      {
         "City": " Na Klang"
      },
      {
         "City": " Yasothon"
      },
      {
         "City": " Yaring"
      },
      {
         "City": " Yala"
      },
      {
         "City": " Wiset Chaichan"
      },
      {
         "City": " Wichian Buri"
      },
      {
         "City": " Warin Chamrap"
      },
      {
         "City": " Wang Saphung"
      },
      {
         "City": " Wang Noi"
      },
      {
         "City": " Wang Nam Yen"
      },
      {
         "City": " Uttaradit"
      },
      {
         "City": " Uthai Thani"
      },
      {
         "City": " Udon Thani"
      },
      {
         "City": " Ubon Ratchathani"
      },
      {
         "City": " Trat"
      },
      {
         "City": " Tha Yang"
      },
      {
         "City": " Tha Ruea"
      },
      {
         "City": " Thap Khlo"
      },
      {
         "City": " Tha Mai"
      },
      {
         "City": " Tha Bo"
      },
      {
         "City": " Taphan Hin"
      },
      {
         "City": " Tak Bai"
      },
      {
         "City": " Surin"
      },
      {
         "City": " Suphan Buri"
      },
      {
         "City": " Su-ngai Kolok"
      },
      {
         "City": " Songkhla"
      },
      {
         "City": " Si Sa Ket"
      },
      {
         "City": " Si Racha"
      },
      {
         "City": " Sing Buri"
      },
      {
         "City": " Seka"
      },
      {
         "City": " Sawang Daen Din"
      },
      {
         "City": " Satun"
      },
      {
         "City": " Sattahip"
      },
      {
         "City": " Saraburi"
      },
      {
         "City": " Samut Songkhram"
      },
      {
         "City": " Samut Sakhon"
      },
      {
         "City": " Samut Prakan"
      },
      {
         "City": " Sam Phran"
      },
      {
         "City": " Sakon Nakhon"
      },
      {
         "City": " Sa Kaeo"
      },
      {
         "City": " Sadao"
      },
      {
         "City": " Roi Et"
      },
      {
         "City": " Rayong"
      },
      {
         "City": " Ranot"
      },
      {
         "City": " Ra-ngae"
      },
      {
         "City": " Prakhon Chai"
      },
      {
         "City": " Prachin Buri"
      },
      {
         "City": " Phu Kradueng"
      },
      {
         "City": " Phu Khiao"
      },
      {
         "City": " Phra Pradaeng"
      },
      {
         "City": " Phra Phutthabat"
      },
      {
         "City": " Phra Nakhon Si Ayutthaya"
      },
      {
         "City": " Phrae"
      },
      {
         "City": " Phon Charoen"
      },
      {
         "City": " Phitsanulok"
      },
      {
         "City": " Phichit"
      },
      {
         "City": " Phibun Mangsahan"
      },
      {
         "City": " Phetchabun"
      },
      {
         "City": " Phatthalung"
      },
      {
         "City": " Phan Thong"
      },
      {
         "City": " Phanom Sarakham"
      },
      {
         "City": " Phanat Nikhom"
      },
      {
         "City": " Phak Hai"
      },
      {
         "City": " Pattani"
      },
      {
         "City": " Pathum Thani"
      },
      {
         "City": " Pak Phanang"
      },
      {
         "City": " Pak Kret"
      },
      {
         "City": " Pak Chong"
      },
      {
         "City": " Mueang Nonthaburi"
      },
      {
         "City": " Non Sung"
      },
      {
         "City": " Nong Phai"
      },
      {
         "City": " Nong Khai"
      },
      {
         "City": " Nong Khae"
      },
      {
         "City": " Nong Bua Lamphu"
      },
      {
         "City": " Narathiwat"
      },
      {
         "City": " Nang Rong"
      },
      {
         "City": " Nan"
      },
      {
         "City": " Nam Som"
      },
      {
         "City": " Nakhon Sawan"
      },
      {
         "City": " Nakhon Ratchasima"
      },
      {
         "City": " Nakhon Phanom"
      },
      {
         "City": " Nakhon Pathom"
      },
      {
         "City": " Nakhon Nayok"
      },
      {
         "City": " Nakhon Luang"
      },
      {
         "City": " Mukdahan"
      },
      {
         "City": " Maha Sarakham"
      },
      {
         "City": " Lop Buri"
      },
      {
         "City": " Lom Sak"
      },
      {
         "City": " Loei"
      },
      {
         "City": " Laem Sing"
      },
      {
         "City": " Kut Chap"
      },
      {
         "City": " Kuchinarai"
      },
      {
         "City": " Bangkok"
      },
      {
         "City": " Krathum Baen"
      },
      {
         "City": " Klaeng"
      },
      {
         "City": " Khon Kaen"
      },
      {
         "City": " Khon Buri"
      },
      {
         "City": " Khlong Luang"
      },
      {
         "City": " Khao Wong"
      },
      {
         "City": " Kaset Wisai"
      },
      {
         "City": " Kaset Sombun"
      },
      {
         "City": " Kantharalak"
      },
      {
         "City": " Kamalasai"
      },
      {
         "City": " Kalasin"
      },
      {
         "City": " Kaeng Khoi"
      },
      {
         "City": " Kaeng Khro"
      },
      {
         "City": " Kabin Buri"
      },
      {
         "City": " Hat Yai"
      },
      {
         "City": " Det Udom"
      },
      {
         "City": " Den Chai"
      },
      {
         "City": " Dan Khun Thot"
      },
      {
         "City": " Chum Phae"
      },
      {
         "City": " Chon Daen"
      },
      {
         "City": " Chon Buri"
      },
      {
         "City": " Chok Chai"
      },
      {
         "City": " Chanthaburi"
      },
      {
         "City": " Chaiyaphum"
      },
      {
         "City": " Chai Nat"
      },
      {
         "City": " Chai Badan"
      },
      {
         "City": " Chachoengsao"
      },
      {
         "City": " Buriram"
      },
      {
         "City": " Bua Yai"
      },
      {
         "City": " Betong"
      },
      {
         "City": " Ban Selaphum"
      },
      {
         "City": " Ban Rangsit"
      },
      {
         "City": " Phatthaya"
      },
      {
         "City": " Ban Phan Don"
      },
      {
         "City": " Ban Phai"
      },
      {
         "City": " Ban Phaeo"
      },
      {
         "City": " Ban Mo"
      },
      {
         "City": " Ban Lam Luk Ka"
      },
      {
         "City": " Bang Rakam"
      },
      {
         "City": " Bang Racham"
      },
      {
         "City": " Bang Pakong"
      },
      {
         "City": " Bang Pa-in"
      },
      {
         "City": " Bang Mun Nak"
      },
      {
         "City": " Bang Len"
      },
      {
         "City": " Bang Lamung"
      },
      {
         "City": " Bang Kruai"
      },
      {
         "City": " Bang Krathum"
      },
      {
         "City": " Bang Bua Thong"
      },
      {
         "City": " Bang Ban"
      },
      {
         "City": " Ban Dung"
      },
      {
         "City": " Ban Chang"
      },
      {
         "City": " Ban Bueng"
      },
      {
         "City": " Ban Talat Bueng"
      },
      {
         "City": " Ban Bang Kadi Pathum Thani"
      },
      {
         "City": " Bang Bo District"
      },
      {
         "City": " Aranyaprathet"
      },
      {
         "City": " Amnat Charoen"
      },
      {
         "City": " Amphoe Sikhiu"
      },
      {
         "City": " Wichit"
      },
      {
         "City": " Ban Chalong"
      },
      {
         "City": " Ban Ratsada"
      }
   ],
   "Tajikistan": [
      {
         "City": " Yovon"
      },
      {
         "City": " Vose’"
      },
      {
         "City": " Vakhsh"
      },
      {
         "City": " Istaravshan"
      },
      {
         "City": " Tursunzoda"
      },
      {
         "City": " Qŭrghonteppa"
      },
      {
         "City": " Panjakent"
      },
      {
         "City": " Farkhor"
      },
      {
         "City": " Vahdat"
      },
      {
         "City": " Norak"
      },
      {
         "City": " Kŭlob"
      },
      {
         "City": " Kolkhozobod"
      },
      {
         "City": " Khorugh"
      },
      {
         "City": " Ishqoshim"
      },
      {
         "City": " Hisor"
      },
      {
         "City": " Dushanbe"
      },
      {
         "City": " Danghara"
      },
      {
         "City": " Chubek"
      },
      {
         "City": " Boshkengash"
      },
      {
         "City": " Proletar"
      },
      {
         "City": " Khŭjand"
      },
      {
         "City": " Konibodom"
      },
      {
         "City": " Isfara"
      },
      {
         "City": " Chkalov"
      },
      {
         "City": " Moskovskiy"
      }
   ],
   "East Timor": [
      {
         "City": " Suai"
      },
      {
         "City": " Maubara"
      },
      {
         "City": " Maliana"
      },
      {
         "City": " Liquica"
      },
      {
         "City": " Dili"
      },
      {
         "City": " Baucau"
      },
      {
         "City": " Aileu"
      },
      {
         "City": " Same"
      },
      {
         "City": " Lospalos"
      },
      {
         "City": " Venilale"
      }
   ],
   "Turkmenistan": [
      {
         "City": " Balkanabat"
      },
      {
         "City": " Kaka"
      },
      {
         "City": " Gumdag"
      },
      {
         "City": " Gazanjyk"
      },
      {
         "City": " Abadan"
      },
      {
         "City": " Baharly"
      },
      {
         "City": " Ashgabat"
      },
      {
         "City": " Annau"
      },
      {
         "City": " Yylanly"
      },
      {
         "City": " Tagta"
      },
      {
         "City": " Türkmenbaşy"
      },
      {
         "City": " Köneürgench"
      },
      {
         "City": " Boldumsaz"
      },
      {
         "City": " Daşoguz"
      },
      {
         "City": " Yolöten"
      },
      {
         "City": " Tejen"
      },
      {
         "City": " Seydi"
      },
      {
         "City": " Saýat"
      },
      {
         "City": " Mary"
      },
      {
         "City": " Atamyrat"
      },
      {
         "City": " Gowurdak"
      },
      {
         "City": " Türkmenabat"
      },
      {
         "City": " Bayramaly"
      },
      {
         "City": " Gazojak"
      }
   ],
   "Tunisia": [
      {
         "City": " Zaghouan"
      },
      {
         "City": " Oued Lill"
      },
      {
         "City": " Tunis"
      },
      {
         "City": " Tozeur"
      },
      {
         "City": " Tataouine"
      },
      {
         "City": " Thala"
      },
      {
         "City": " Takelsa"
      },
      {
         "City": " Tajerouine"
      },
      {
         "City": " Sousse"
      },
      {
         "City": " Siliana"
      },
      {
         "City": " Sidi Bouzid"
      },
      {
         "City": " Skanes"
      },
      {
         "City": " Sfax"
      },
      {
         "City": " La Sebala du Mornag"
      },
      {
         "City": " Radès"
      },
      {
         "City": " Ksour Essaf"
      },
      {
         "City": " Korba"
      },
      {
         "City": " Kélibia"
      },
      {
         "City": " Kebili"
      },
      {
         "City": " Ksar Hellal"
      },
      {
         "City": " Carthage"
      },
      {
         "City": " El Fahs"
      },
      {
         "City": " Galaat el Andeless"
      },
      {
         "City": " Gafsa"
      },
      {
         "City": " Gabès"
      },
      {
         "City": " Nefta"
      },
      {
         "City": " Nabeul"
      },
      {
         "City": " Midoun"
      },
      {
         "City": " Mateur"
      },
      {
         "City": " Msaken"
      },
      {
         "City": " Menzel Jemil"
      },
      {
         "City": " Mennzel Bou Zelfa"
      },
      {
         "City": " Menzel Bourguiba"
      },
      {
         "City": " Menzel Abderhaman"
      },
      {
         "City": " Manouba"
      },
      {
         "City": " Medjez el Bab"
      },
      {
         "City": " Medenine"
      },
      {
         "City": " Jendouba"
      },
      {
         "City": " Zarzis"
      },
      {
         "City": " Djemmal"
      },
      {
         "City": " Houmt Souk"
      },
      {
         "City": " Hammam Sousse"
      },
      {
         "City": " Hammam-Lif"
      },
      {
         "City": " La Goulette"
      },
      {
         "City": " Douz"
      },
      {
         "City": " Douar Tindja"
      },
      {
         "City": " Dar Chabanne"
      },
      {
         "City": " Ben Arous"
      },
      {
         "City": " Bizerte"
      },
      {
         "City": " Beni Khiar"
      },
      {
         "City": " Béja"
      },
      {
         "City": " Zouila"
      },
      {
         "City": " Chebba"
      },
      {
         "City": " Ariana"
      },
      {
         "City": " Ar Rudayyif"
      },
      {
         "City": " Ouardenine"
      },
      {
         "City": " Kairouan"
      },
      {
         "City": " Kasserine"
      },
      {
         "City": " Gremda"
      },
      {
         "City": " Monastir"
      },
      {
         "City": " La Mohammedia"
      },
      {
         "City": " Metlaoui"
      },
      {
         "City": " Al Marsá"
      },
      {
         "City": " Mahdia"
      },
      {
         "City": " El Kef"
      },
      {
         "City": " El Jem"
      },
      {
         "City": " Hammamet"
      },
      {
         "City": " El Hamma"
      },
      {
         "City": " Bekalta"
      },
      {
         "City": " El Alia"
      },
      {
         "City": " Akouda"
      },
      {
         "City": " Douane"
      }
   ],
   "Tonga": [
      {
         "City": " Nuku‘alofa"
      }
   ],
   "Turkey": [
      {
         "City": " Yüksekova"
      },
      {
         "City": " Yozgat"
      },
      {
         "City": " Yeşilli"
      },
      {
         "City": " Erzin"
      },
      {
         "City": " Yerköy"
      },
      {
         "City": " Didim"
      },
      {
         "City": " Yatağan"
      },
      {
         "City": " Yalvaç"
      },
      {
         "City": " Yahyalı"
      },
      {
         "City": " Viranşehir"
      },
      {
         "City": " Varto"
      },
      {
         "City": " Van"
      },
      {
         "City": " Cimin"
      },
      {
         "City": " Uşak"
      },
      {
         "City": " Urla"
      },
      {
         "City": " Ürgüp"
      },
      {
         "City": " Şanlıurfa"
      },
      {
         "City": " Turgutlu"
      },
      {
         "City": " Tunceli"
      },
      {
         "City": " Torbalı"
      },
      {
         "City": " Tire"
      },
      {
         "City": " Tekirova"
      },
      {
         "City": " Tavşanlı"
      },
      {
         "City": " Tatvan"
      },
      {
         "City": " Tarsus"
      },
      {
         "City": " Talas"
      },
      {
         "City": " Susurluk"
      },
      {
         "City": " Suruç"
      },
      {
         "City": " Sorgun"
      },
      {
         "City": " Soma"
      },
      {
         "City": " Solhan"
      },
      {
         "City": " Söke"
      },
      {
         "City": " Siverek"
      },
      {
         "City": " Sivas"
      },
      {
         "City": " Şırnak"
      },
      {
         "City": " Simav"
      },
      {
         "City": " Silvan"
      },
      {
         "City": " Silopi"
      },
      {
         "City": " Silifke"
      },
      {
         "City": " Siirt"
      },
      {
         "City": " Seydişehir"
      },
      {
         "City": " Serinyol"
      },
      {
         "City": " Serik"
      },
      {
         "City": " Şereflikoçhisar"
      },
      {
         "City": " Senirkent"
      },
      {
         "City": " Şemdinli"
      },
      {
         "City": " Selçuk"
      },
      {
         "City": " Seferhisar"
      },
      {
         "City": " Şarkışla"
      },
      {
         "City": " Şarkîkaraağaç"
      },
      {
         "City": " Sarayköy"
      },
      {
         "City": " Sandıklı"
      },
      {
         "City": " Salihli"
      },
      {
         "City": " Reyhanlı"
      },
      {
         "City": " Polatlı"
      },
      {
         "City": " Pazarcık"
      },
      {
         "City": " Patnos"
      },
      {
         "City": " Pasinler"
      },
      {
         "City": " Osmaniye"
      },
      {
         "City": " Ortaköy"
      },
      {
         "City": " Ortaca"
      },
      {
         "City": " Ödemiş"
      },
      {
         "City": " Nusaybin"
      },
      {
         "City": " Nizip"
      },
      {
         "City": " Niğde"
      },
      {
         "City": " Nevşehir"
      },
      {
         "City": " Nazilli"
      },
      {
         "City": " Mut"
      },
      {
         "City": " Muş"
      },
      {
         "City": " Muğla"
      },
      {
         "City": " Mucur"
      },
      {
         "City": " Milas"
      },
      {
         "City": " Midyat"
      },
      {
         "City": " Mercin"
      },
      {
         "City": " Menemen"
      },
      {
         "City": " Marmaris"
      },
      {
         "City": " Mardin"
      },
      {
         "City": " Manisa"
      },
      {
         "City": " Manavgat"
      },
      {
         "City": " Malazgirt"
      },
      {
         "City": " Malatya"
      },
      {
         "City": " Mahmutlar"
      },
      {
         "City": " Lice"
      },
      {
         "City": " Kütahya"
      },
      {
         "City": " Kuşadası"
      },
      {
         "City": " Kurtalan"
      },
      {
         "City": " Beykonak"
      },
      {
         "City": " Kulu"
      },
      {
         "City": " Kulp"
      },
      {
         "City": " Kula"
      },
      {
         "City": " Kozluk"
      },
      {
         "City": " Kozan"
      },
      {
         "City": " Kovancılar"
      },
      {
         "City": " Korkuteli"
      },
      {
         "City": " Konya"
      },
      {
         "City": " Kızıltepe"
      },
      {
         "City": " Serinhisar"
      },
      {
         "City": " Kırşehir"
      },
      {
         "City": " Kırkağaç"
      },
      {
         "City": " Kırıkkale"
      },
      {
         "City": " Kırıkhan"
      },
      {
         "City": " Kilis"
      },
      {
         "City": " Keskin"
      },
      {
         "City": " Kemer"
      },
      {
         "City": " Kemalpaşa"
      },
      {
         "City": " Kayseri"
      },
      {
         "City": " Karapınar"
      },
      {
         "City": " Karaman"
      },
      {
         "City": " Ağrı"
      },
      {
         "City": " Karakoçan"
      },
      {
         "City": " Karaçoban"
      },
      {
         "City": " Kaman"
      },
      {
         "City": " Kâhta"
      },
      {
         "City": " Kahramanmaraş"
      },
      {
         "City": " Kadirli"
      },
      {
         "City": " Kadınhanı"
      },
      {
         "City": " İzmir"
      },
      {
         "City": " Isparta"
      },
      {
         "City": " İdil"
      },
      {
         "City": " Hizan"
      },
      {
         "City": " Hınıs"
      },
      {
         "City": " Hilvan"
      },
      {
         "City": " Hadim"
      },
      {
         "City": " Hacılar"
      },
      {
         "City": " Güroymak"
      },
      {
         "City": " Gölbaşı"
      },
      {
         "City": " Göksun"
      },
      {
         "City": " Genç"
      },
      {
         "City": " Gemerek"
      },
      {
         "City": " Gediz"
      },
      {
         "City": " Gazipaşa"
      },
      {
         "City": " Gaziantep"
      },
      {
         "City": " Foça"
      },
      {
         "City": " Fethiye"
      },
      {
         "City": " Ezine"
      },
      {
         "City": " Eskişehir"
      },
      {
         "City": " Erzurum"
      },
      {
         "City": " Erzincan"
      },
      {
         "City": " Ermenek"
      },
      {
         "City": " Ergani"
      },
      {
         "City": " Ereğli"
      },
      {
         "City": " Erdemli"
      },
      {
         "City": " Erciş"
      },
      {
         "City": " Emirdağ"
      },
      {
         "City": " Emet"
      },
      {
         "City": " Elmalı"
      },
      {
         "City": " Elmadağ"
      },
      {
         "City": " Eleşkirt"
      },
      {
         "City": " Elbistan"
      },
      {
         "City": " Elazığ"
      },
      {
         "City": " Eğirdir"
      },
      {
         "City": " Edremit"
      },
      {
         "City": " Dursunbey"
      },
      {
         "City": " Dörtyol"
      },
      {
         "City": " Doğubayazıt"
      },
      {
         "City": " Diyarbakır"
      },
      {
         "City": " Diyadin"
      },
      {
         "City": " Dinar"
      },
      {
         "City": " Develi"
      },
      {
         "City": " Denizli"
      },
      {
         "City": " Demirci"
      },
      {
         "City": " Dargeçit"
      },
      {
         "City": " Darende"
      },
      {
         "City": " Çumra"
      },
      {
         "City": " Menderes"
      },
      {
         "City": " Hakkari"
      },
      {
         "City": " Cizre"
      },
      {
         "City": " Çine"
      },
      {
         "City": " Ceylanpınar"
      },
      {
         "City": " Ceyhan"
      },
      {
         "City": " Çeşme"
      },
      {
         "City": " Çermik"
      },
      {
         "City": " Çay"
      },
      {
         "City": " Çağlayancerit"
      },
      {
         "City": " Burhaniye"
      },
      {
         "City": " Burdur"
      },
      {
         "City": " Bulanık"
      },
      {
         "City": " Bucak"
      },
      {
         "City": " Bozyazı"
      },
      {
         "City": " Bozüyük"
      },
      {
         "City": " Bozova"
      },
      {
         "City": " Bor"
      },
      {
         "City": " Bolvadin"
      },
      {
         "City": " Bodrum"
      },
      {
         "City": " Bitlis"
      },
      {
         "City": " Bismil"
      },
      {
         "City": " Birecik"
      },
      {
         "City": " Bingöl"
      },
      {
         "City": " Bigadiç"
      },
      {
         "City": " Beyşehir"
      },
      {
         "City": " Besni"
      },
      {
         "City": " Bergama"
      },
      {
         "City": " Belen"
      },
      {
         "City": " Belek"
      },
      {
         "City": " Bayındır"
      },
      {
         "City": " Batman"
      },
      {
         "City": " Baskil"
      },
      {
         "City": " Banaz"
      },
      {
         "City": " Balıkesir"
      },
      {
         "City": " Bahçe"
      },
      {
         "City": " Ayvalık"
      },
      {
         "City": " Aydın"
      },
      {
         "City": " Aşkale"
      },
      {
         "City": " Antalya"
      },
      {
         "City": " Antakya"
      },
      {
         "City": " Ankara"
      },
      {
         "City": " Anamur"
      },
      {
         "City": " Aliağa"
      },
      {
         "City": " Alaşehir"
      },
      {
         "City": " Alanya"
      },
      {
         "City": " Akşehir"
      },
      {
         "City": " Aksaray"
      },
      {
         "City": " Akhisar"
      },
      {
         "City": " Akdağmadeni"
      },
      {
         "City": " Akçakale"
      },
      {
         "City": " Ahlat"
      },
      {
         "City": " Afyonkarahisar"
      },
      {
         "City": " Afşin"
      },
      {
         "City": " Adıyaman"
      },
      {
         "City": " Adilcevaz"
      },
      {
         "City": " Adana"
      },
      {
         "City": " Denizciler"
      },
      {
         "City": " Batikent"
      },
      {
         "City": " Dalaman"
      },
      {
         "City": " Zonguldak"
      },
      {
         "City": " Zile"
      },
      {
         "City": " Zeytinburnu"
      },
      {
         "City": " Yomra"
      },
      {
         "City": " Yenişehir"
      },
      {
         "City": " Körfez"
      },
      {
         "City": " Yalova"
      },
      {
         "City": " Yakuplu"
      },
      {
         "City": " Vezirköprü"
      },
      {
         "City": " Vakfıkebir"
      },
      {
         "City": " Uzunköprü"
      },
      {
         "City": " Üsküdar"
      },
      {
         "City": " Ünye"
      },
      {
         "City": " Umraniye"
      },
      {
         "City": " Turhal"
      },
      {
         "City": " Trabzon"
      },
      {
         "City": " Tosya"
      },
      {
         "City": " Tokat"
      },
      {
         "City": " Tirebolu"
      },
      {
         "City": " Terme"
      },
      {
         "City": " Tepecik"
      },
      {
         "City": " Tekkeköy"
      },
      {
         "City": " Tekirdağ"
      },
      {
         "City": " Taşova"
      },
      {
         "City": " Taşköprü"
      },
      {
         "City": " Suşehri"
      },
      {
         "City": " Sürmene"
      },
      {
         "City": " Sungurlu"
      },
      {
         "City": " Suluova"
      },
      {
         "City": " Şişli"
      },
      {
         "City": " Sinop"
      },
      {
         "City": " Silivri"
      },
      {
         "City": " Şebin Karahisar"
      },
      {
         "City": " Sarıkamış"
      },
      {
         "City": " Sapanca"
      },
      {
         "City": " Samsun"
      },
      {
         "City": " Safranbolu"
      },
      {
         "City": " Rize"
      },
      {
         "City": " Osmaneli"
      },
      {
         "City": " Osmancık"
      },
      {
         "City": " Orhangazi"
      },
      {
         "City": " Ordu"
      },
      {
         "City": " Oltu"
      },
      {
         "City": " Of"
      },
      {
         "City": " Niksar"
      },
      {
         "City": " Nallıhan"
      },
      {
         "City": " Mustafakemalpaşa"
      },
      {
         "City": " Mudanya"
      },
      {
         "City": " Mimarsinan"
      },
      {
         "City": " Merzifon"
      },
      {
         "City": " Maltepe"
      },
      {
         "City": " Malkara"
      },
      {
         "City": " Lüleburgaz"
      },
      {
         "City": " Kumru"
      },
      {
         "City": " Korgan"
      },
      {
         "City": " Kocaali"
      },
      {
         "City": " Kızılcahamam"
      },
      {
         "City": " Kırklareli"
      },
      {
         "City": " Kestel"
      },
      {
         "City": " Keşan"
      },
      {
         "City": " Kelkit"
      },
      {
         "City": " Kazan"
      },
      {
         "City": " Kavaklı"
      },
      {
         "City": " Kastamonu"
      },
      {
         "City": " Kars"
      },
      {
         "City": " Karasu"
      },
      {
         "City": " Karamürsel"
      },
      {
         "City": " Karacabey"
      },
      {
         "City": " Karabük"
      },
      {
         "City": " Kağızman"
      },
      {
         "City": " İznik"
      },
      {
         "City": " İzmit"
      },
      {
         "City": " İstanbul"
      },
      {
         "City": " İskilip"
      },
      {
         "City": " İnegol"
      },
      {
         "City": " Horasan"
      },
      {
         "City": " Hopa"
      },
      {
         "City": " Hendek"
      },
      {
         "City": " Hayrabolu"
      },
      {
         "City": " Havza"
      },
      {
         "City": " Gürsu"
      },
      {
         "City": " Gürpınar"
      },
      {
         "City": " Gürgentepe"
      },
      {
         "City": " Gumushkhane"
      },
      {
         "City": " Görele"
      },
      {
         "City": " Gönen"
      },
      {
         "City": " Gölcük"
      },
      {
         "City": " Giresun"
      },
      {
         "City": " Geyve"
      },
      {
         "City": " Gerede"
      },
      {
         "City": " Gemlik"
      },
      {
         "City": " Gelibolu"
      },
      {
         "City": " Gebze"
      },
      {
         "City": " Ferizli"
      },
      {
         "City": " Fatsa"
      },
      {
         "City": " Esenyurt"
      },
      {
         "City": " Esenler"
      },
      {
         "City": " Ereğli"
      },
      {
         "City": " Erdek"
      },
      {
         "City": " Erbaa"
      },
      {
         "City": " Eminönü"
      },
      {
         "City": " Edirne"
      },
      {
         "City": " Düzce"
      },
      {
         "City": " Devrek"
      },
      {
         "City": " Çubuk"
      },
      {
         "City": " Çorum"
      },
      {
         "City": " Çorlu"
      },
      {
         "City": " Çerkezköy"
      },
      {
         "City": " Çerkeş"
      },
      {
         "City": " Çayeli"
      },
      {
         "City": " Çaycuma"
      },
      {
         "City": " Çatalca"
      },
      {
         "City": " Çarşamba"
      },
      {
         "City": " Khanjarah"
      },
      {
         "City": " Çanakkale"
      },
      {
         "City": " Çan"
      },
      {
         "City": " Bursa"
      },
      {
         "City": " Bulancak"
      },
      {
         "City": " Boyabat"
      },
      {
         "City": " Bolu"
      },
      {
         "City": " Bilecik"
      },
      {
         "City": " Biga"
      },
      {
         "City": " Beypazarı"
      },
      {
         "City": " Beşikdüzü"
      },
      {
         "City": " Bayburt"
      },
      {
         "City": " Bartın"
      },
      {
         "City": " Bandırma"
      },
      {
         "City": " Bağcılar"
      },
      {
         "City": " Bafra"
      },
      {
         "City": " Babaeski"
      },
      {
         "City": " Artvin"
      },
      {
         "City": " Arsin"
      },
      {
         "City": " Arhavi"
      },
      {
         "City": " Ardeşen"
      },
      {
         "City": " Ardahan"
      },
      {
         "City": " Araklı"
      },
      {
         "City": " Amasya"
      },
      {
         "City": " Alaplı"
      },
      {
         "City": " Alaca"
      },
      {
         "City": " Akyazı"
      },
      {
         "City": " Akçakoca"
      },
      {
         "City": " Akçaabat"
      },
      {
         "City": " Adapazarı"
      },
      {
         "City": " Espiye"
      },
      {
         "City": " merter keresteciler"
      },
      {
         "City": " güngören merter"
      },
      {
         "City": " Turgutreis"
      },
      {
         "City": " Sarigerme"
      },
      {
         "City": " Ataşehir"
      },
      {
         "City": " Başakşehir"
      },
      {
         "City": " Beylikdüzü"
      },
      {
         "City": " Büyükçekmece"
      },
      {
         "City": " Çankaya"
      },
      {
         "City": " Bahçelievler"
      },
      {
         "City": " Sultangazi"
      },
      {
         "City": " Sultanbeyli"
      },
      {
         "City": " Sancaktepe"
      },
      {
         "City": " Karabağlar"
      },
      {
         "City": " Muratpaşa"
      }
   ],
   "Trinidad and Tobago": [
      {
         "City": " Tunapuna"
      },
      {
         "City": " Scarborough"
      },
      {
         "City": " Sangre Grande"
      },
      {
         "City": " San Fernando"
      },
      {
         "City": " Rio Claro"
      },
      {
         "City": " Port of Spain"
      },
      {
         "City": " Point Fortin"
      },
      {
         "City": " Paradise"
      },
      {
         "City": " Mon Repos"
      },
      {
         "City": " Marabella"
      },
      {
         "City": " Laventille"
      },
      {
         "City": " Chaguanas"
      },
      {
         "City": " Arima"
      }
   ],
   "Tuvalu": [
      {
         "City": " Funafuti"
      }
   ],
   "Taiwan": [
      {
         "City": " Douliu"
      },
      {
         "City": " Yujing"
      },
      {
         "City": " Taipei"
      },
      {
         "City": " Tainan"
      },
      {
         "City": " Taichung"
      },
      {
         "City": " Daxi"
      },
      {
         "City": " Banqiao"
      },
      {
         "City": " Puli"
      },
      {
         "City": " Nantou"
      },
      {
         "City": " Magong"
      },
      {
         "City": " Lugu"
      },
      {
         "City": " Kaohsiung"
      },
      {
         "City": " Yilan"
      },
      {
         "City": " Hualien City"
      },
      {
         "City": " Hsinchu"
      },
      {
         "City": " Hengchun"
      },
      {
         "City": " Jincheng"
      },
      {
         "City": " Keelung"
      },
      {
         "City": " Taoyuan City"
      },
      {
         "City": " Taitung City"
      },
      {
         "City": " Zhongxing New Village"
      }
   ],
   "Tanzania": [
      {
         "City": " Zanzibar"
      },
      {
         "City": " Wete"
      },
      {
         "City": " Vwawa"
      },
      {
         "City": " Vikindu"
      },
      {
         "City": " Uyovu"
      },
      {
         "City": " Uvinza"
      },
      {
         "City": " Ushirombo"
      },
      {
         "City": " Usevia"
      },
      {
         "City": " Usagara"
      },
      {
         "City": " Usa River"
      },
      {
         "City": " Urambo"
      },
      {
         "City": " Tunduma"
      },
      {
         "City": " Tumbi"
      },
      {
         "City": " Tukuyu"
      },
      {
         "City": " Tinde"
      },
      {
         "City": " Tarime"
      },
      {
         "City": " Tanga"
      },
      {
         "City": " Tabora"
      },
      {
         "City": " Sumbawanga"
      },
      {
         "City": " Songwa"
      },
      {
         "City": " Somanda"
      },
      {
         "City": " Sokoni"
      },
      {
         "City": " Sirari"
      },
      {
         "City": " Singida"
      },
      {
         "City": " Sikonge"
      },
      {
         "City": " Shinyanga"
      },
      {
         "City": " Shelui"
      },
      {
         "City": " Sepuka"
      },
      {
         "City": " Same"
      },
      {
         "City": " Rulenge"
      },
      {
         "City": " Rujewa"
      },
      {
         "City": " Puma"
      },
      {
         "City": " Old Shinyanga"
      },
      {
         "City": " Nzega"
      },
      {
         "City": " Nyamuswa"
      },
      {
         "City": " Nyalikungu"
      },
      {
         "City": " Nyakabindi"
      },
      {
         "City": " Nsunga"
      },
      {
         "City": " Nshamba"
      },
      {
         "City": " Njombe"
      },
      {
         "City": " Nguruka"
      },
      {
         "City": " Ngudu"
      },
      {
         "City": " Ngerengere"
      },
      {
         "City": " Ngara"
      },
      {
         "City": " Nangwa"
      },
      {
         "City": " Namanyere"
      },
      {
         "City": " Mwanza"
      },
      {
         "City": " Mwadui"
      },
      {
         "City": " Mvomero"
      },
      {
         "City": " Musoma"
      },
      {
         "City": " Muriti"
      },
      {
         "City": " Mungaa"
      },
      {
         "City": " Muheza"
      },
      {
         "City": " Mugumu"
      },
      {
         "City": " Mtwango"
      },
      {
         "City": " Mto wa Mbu"
      },
      {
         "City": " Mtinko"
      },
      {
         "City": " Msowero"
      },
      {
         "City": " Mpwapwa"
      },
      {
         "City": " Mpanda"
      },
      {
         "City": " Moshi"
      },
      {
         "City": " Morogoro"
      },
      {
         "City": " Mlowo"
      },
      {
         "City": " Mlimba"
      },
      {
         "City": " Mlangali"
      },
      {
         "City": " Mlandizi"
      },
      {
         "City": " Mlalo"
      },
      {
         "City": " Mkuranga"
      },
      {
         "City": " Mwandiga"
      },
      {
         "City": " Misungwi"
      },
      {
         "City": " Mikumi"
      },
      {
         "City": " Mhango"
      },
      {
         "City": " Mgandu"
      },
      {
         "City": " Mbuguni"
      },
      {
         "City": " Mbeya"
      },
      {
         "City": " Mazinde"
      },
      {
         "City": " Matui"
      },
      {
         "City": " Matai"
      },
      {
         "City": " Maswa"
      },
      {
         "City": " Masumbwe"
      },
      {
         "City": " Maramba"
      },
      {
         "City": " Malinyi"
      },
      {
         "City": " Malampaka"
      },
      {
         "City": " Makuyuni"
      },
      {
         "City": " Makumbako"
      },
      {
         "City": " Mahanje"
      },
      {
         "City": " Kihangara"
      },
      {
         "City": " Magugu"
      },
      {
         "City": " Magomeni"
      },
      {
         "City": " Magole"
      },
      {
         "City": " Mafinga"
      },
      {
         "City": " Mabama"
      },
      {
         "City": " Lushoto"
      },
      {
         "City": " Lugoba"
      },
      {
         "City": " Liwale"
      },
      {
         "City": " Lembeni"
      },
      {
         "City": " Lalago"
      },
      {
         "City": " Laela"
      },
      {
         "City": " Kyela"
      },
      {
         "City": " Kondoa"
      },
      {
         "City": " Kiwira"
      },
      {
         "City": " Kishapu"
      },
      {
         "City": " Kisesa"
      },
      {
         "City": " Kirando"
      },
      {
         "City": " Kiomboi"
      },
      {
         "City": " Kingori"
      },
      {
         "City": " Kilosa"
      },
      {
         "City": " Kigoma"
      },
      {
         "City": " Kidodi"
      },
      {
         "City": " Kidatu"
      },
      {
         "City": " Kibondo"
      },
      {
         "City": " Kibiti"
      },
      {
         "City": " Kibara"
      },
      {
         "City": " Kibakwe"
      },
      {
         "City": " Kibaha"
      },
      {
         "City": " Katumba"
      },
      {
         "City": " Katoro"
      },
      {
         "City": " Katerero"
      },
      {
         "City": " Kasulu"
      },
      {
         "City": " Kasamwa"
      },
      {
         "City": " Kiratu"
      },
      {
         "City": " Kamachumu"
      },
      {
         "City": " Kakonko"
      },
      {
         "City": " Kahama"
      },
      {
         "City": " Kabanga"
      },
      {
         "City": " Izazi"
      },
      {
         "City": " Itigi"
      },
      {
         "City": " Isaka"
      },
      {
         "City": " Iringa"
      },
      {
         "City": " Ipinda"
      },
      {
         "City": " Ilula"
      },
      {
         "City": " Ilongero"
      },
      {
         "City": " Ilembula"
      },
      {
         "City": " Ikungi"
      },
      {
         "City": " Igurusi"
      },
      {
         "City": " Igunga"
      },
      {
         "City": " Igugunu"
      },
      {
         "City": " Ifakara"
      },
      {
         "City": " Hedaru"
      },
      {
         "City": " Geita"
      },
      {
         "City": " Geiro"
      },
      {
         "City": " Galappo"
      },
      {
         "City": " Dongobesh"
      },
      {
         "City": " Dodoma"
      },
      {
         "City": " Dar es Salaam"
      },
      {
         "City": " Dareda"
      },
      {
         "City": " Chimala"
      },
      {
         "City": " Chato"
      },
      {
         "City": " Chanika"
      },
      {
         "City": " Chalinze"
      },
      {
         "City": " Chala"
      },
      {
         "City": " Chake Chake"
      },
      {
         "City": " Butiama"
      },
      {
         "City": " Buseresere"
      },
      {
         "City": " Bungu"
      },
      {
         "City": " Bunda"
      },
      {
         "City": " Bukoba"
      },
      {
         "City": " Bugarama"
      },
      {
         "City": " Biharamulo"
      },
      {
         "City": " Basotu"
      },
      {
         "City": " Bashanet"
      },
      {
         "City": " Bariadi"
      },
      {
         "City": " Bagamoyo"
      },
      {
         "City": " Babati"
      },
      {
         "City": " Arusha"
      },
      {
         "City": " Tingi"
      },
      {
         "City": " Tandahimba"
      },
      {
         "City": " Songea"
      },
      {
         "City": " Nyangao"
      },
      {
         "City": " Newala Kisimani"
      },
      {
         "City": " Nanyamba"
      },
      {
         "City": " Nangomba"
      },
      {
         "City": " Nanganga"
      },
      {
         "City": " Nachingwea"
      },
      {
         "City": " Mtwara"
      },
      {
         "City": " Mbinga"
      },
      {
         "City": " Matiri"
      },
      {
         "City": " Masasi"
      },
      {
         "City": " Maposeni"
      },
      {
         "City": " Lukuledi"
      },
      {
         "City": " Luchingu"
      },
      {
         "City": " Lindi"
      },
      {
         "City": " Kitama"
      },
      {
         "City": " Kigonsera"
      },
      {
         "City": " Merelani"
      }
   ],
   "Ukraine": [
      {
         "City": " Lebedyn"
      },
      {
         "City": " Druzhkivka"
      },
      {
         "City": " Vasylivka"
      },
      {
         "City": " Zvenyhorodka"
      },
      {
         "City": " Zuhres"
      },
      {
         "City": " Zolotonosha"
      },
      {
         "City": " Zolochiv"
      },
      {
         "City": " Znomenka"
      },
      {
         "City": " Zmiyiv"
      },
      {
         "City": " Zhytomyr"
      },
      {
         "City": " Zhmerynka"
      },
      {
         "City": " Zhovti Vody"
      },
      {
         "City": " Zhashkiv"
      },
      {
         "City": " Zdolbuniv"
      },
      {
         "City": " Zaporizhzhya"
      },
      {
         "City": " Yuzhne"
      },
      {
         "City": " Yevpatoriya"
      },
      {
         "City": " Yenakiyeve"
      },
      {
         "City": " Yasynuvata"
      },
      {
         "City": " Yalta"
      },
      {
         "City": " Yahotyn"
      },
      {
         "City": " Vyshhorod"
      },
      {
         "City": " Vynohradiv"
      },
      {
         "City": " Voznesensk"
      },
      {
         "City": " Volnovakha"
      },
      {
         "City": " Vovchans’k"
      },
      {
         "City": " Volodymyr-Volyns’kyy"
      },
      {
         "City": " Vyshneve"
      },
      {
         "City": " Vinnytsya"
      },
      {
         "City": " Vatutine"
      },
      {
         "City": " Vasylkiv"
      },
      {
         "City": " Uzhhorod"
      },
      {
         "City": " Uman’"
      },
      {
         "City": " Tul’chyn"
      },
      {
         "City": " Tsyurupyns’k"
      },
      {
         "City": " Truskavets"
      },
      {
         "City": " Torez"
      },
      {
         "City": " Tokmak"
      },
      {
         "City": " Ternopil’"
      },
      {
         "City": " Tal’ne"
      },
      {
         "City": " Syevyerodonets’k"
      },
      {
         "City": " Svitlovods’k"
      },
      {
         "City": " Sverdlovs’k"
      },
      {
         "City": " Svatove"
      },
      {
         "City": " Svalyava"
      },
      {
         "City": " Sumy"
      },
      {
         "City": " Stryi"
      },
      {
         "City": " Stebnyk"
      },
      {
         "City": " Starokostyantyniv"
      },
      {
         "City": " Starobil’s’k"
      },
      {
         "City": " Stakhanov"
      },
      {
         "City": " Sokal’"
      },
      {
         "City": " Snizhne"
      },
      {
         "City": " Smila"
      },
      {
         "City": " Sloviansk"
      },
      {
         "City": " Slavuta"
      },
      {
         "City": " Skvyra"
      },
      {
         "City": " Skadovs’k"
      },
      {
         "City": " Synel’nykove"
      },
      {
         "City": " Simferopol"
      },
      {
         "City": " Shpola"
      },
      {
         "City": " Shostka"
      },
      {
         "City": " Shepetivka"
      },
      {
         "City": " Shakhtars’k"
      },
      {
         "City": " Sevastopol"
      },
      {
         "City": " Selydove"
      },
      {
         "City": " Sarny"
      },
      {
         "City": " Sambir"
      },
      {
         "City": " Saky"
      },
      {
         "City": " Rubizhne"
      },
      {
         "City": " Rozdil’na"
      },
      {
         "City": " Roven’ky"
      },
      {
         "City": " Romny"
      },
      {
         "City": " Rivne"
      },
      {
         "City": " Reni"
      },
      {
         "City": " Radomyshl’"
      },
      {
         "City": " Piatykhatky"
      },
      {
         "City": " Putyvl’"
      },
      {
         "City": " Pryluky"
      },
      {
         "City": " Popasna"
      },
      {
         "City": " Poltava"
      },
      {
         "City": " Polonne"
      },
      {
         "City": " Polohy"
      },
      {
         "City": " Pidhorodne"
      },
      {
         "City": " Pyryatyn"
      },
      {
         "City": " Pervomays’k"
      },
      {
         "City": " Pervomays’k"
      },
      {
         "City": " Pereyaslav-Khmel’nyts’kyy"
      },
      {
         "City": " Pereval’s’k"
      },
      {
         "City": " Pavlohrad"
      },
      {
         "City": " Ovruch"
      },
      {
         "City": " Orikhiv"
      },
      {
         "City": " Oleksandriya"
      },
      {
         "City": " Odessa"
      },
      {
         "City": " Ochakiv"
      },
      {
         "City": " Obukhiv"
      },
      {
         "City": " Novyy Buh"
      },
      {
         "City": " Novovolyns’k"
      },
      {
         "City": " Novoukrayinka"
      },
      {
         "City": " Novomoskovs’k"
      },
      {
         "City": " Novohrad-Volyns’kyy"
      },
      {
         "City": " Nova Kakhovka"
      },
      {
         "City": " Nosivka"
      },
      {
         "City": " Nizhyn"
      },
      {
         "City": " Nyzhn’ohirs’kyy"
      },
      {
         "City": " Nikopol’"
      },
      {
         "City": " Netishyn"
      },
      {
         "City": " Nadvirna"
      },
      {
         "City": " Mykolayiv"
      },
      {
         "City": " Mukacheve"
      },
      {
         "City": " Molodohvardiys’k"
      },
      {
         "City": " Mohyliv-Podil’s’kyy"
      },
      {
         "City": " Miskhor"
      },
      {
         "City": " Myrhorod"
      },
      {
         "City": " Merefa"
      },
      {
         "City": " Melitopol’"
      },
      {
         "City": " Mariupol"
      },
      {
         "City": " Marhanets’"
      },
      {
         "City": " Malyn"
      },
      {
         "City": " Makiyivka"
      },
      {
         "City": " Lyubotyn"
      },
      {
         "City": " Lviv"
      },
      {
         "City": " Lutuhyne"
      },
      {
         "City": " Luts’k"
      },
      {
         "City": " Luhansk"
      },
      {
         "City": " Lubny"
      },
      {
         "City": " Lozova"
      },
      {
         "City": " Lysychans’k"
      },
      {
         "City": " Ladyzhyn"
      },
      {
         "City": " Kiev"
      },
      {
         "City": " Kuznetsovs’k"
      },
      {
         "City": " Kurakhovo"
      },
      {
         "City": " Kupjansk"
      },
      {
         "City": " Kryvyi Rih"
      },
      {
         "City": " Krolevets’"
      },
      {
         "City": " Kreminna"
      },
      {
         "City": " Kremenets’"
      },
      {
         "City": " Kremenchuk"
      },
      {
         "City": " Krasnyy Luch"
      },
      {
         "City": " Krasnyy Lyman"
      },
      {
         "City": " Krasnoperekops’k"
      },
      {
         "City": " Krasnohrad"
      },
      {
         "City": " Krasnodon"
      },
      {
         "City": " Krasnoarmiys’k"
      },
      {
         "City": " Krasyliv"
      },
      {
         "City": " Kramators’k"
      },
      {
         "City": " Kivsharivka"
      },
      {
         "City": " Kovel’"
      },
      {
         "City": " Kotovs’k"
      },
      {
         "City": " Kostopil’"
      },
      {
         "City": " Korsun’-Shevchenkivs’kyy"
      },
      {
         "City": " Korostyshiv"
      },
      {
         "City": " Korosten’"
      },
      {
         "City": " Kostyantynivka"
      },
      {
         "City": " Konotop"
      },
      {
         "City": " Komsomol’s’ke"
      },
      {
         "City": " Kolomyya"
      },
      {
         "City": " Kivertsi"
      },
      {
         "City": " Kirovs’k"
      },
      {
         "City": " Kirovohrad"
      },
      {
         "City": " Kiliya"
      },
      {
         "City": " Khust"
      },
      {
         "City": " Khmel’nyts’kyy"
      },
      {
         "City": " Khmil’nyk"
      },
      {
         "City": " Kherson"
      },
      {
         "City": " Khartsyz’k"
      },
      {
         "City": " Kharkiv"
      },
      {
         "City": " Kerch"
      },
      {
         "City": " Kozyatyn"
      },
      {
         "City": " Karlivka"
      },
      {
         "City": " Kaniv"
      },
      {
         "City": " Kamieniec Podolski"
      },
      {
         "City": " Kalush"
      },
      {
         "City": " Kalynivka"
      },
      {
         "City": " Kakhovka"
      },
      {
         "City": " Izyum"
      },
      {
         "City": " Izyaslav"
      },
      {
         "City": " Izmayil"
      },
      {
         "City": " Ivano-Frankivs’k"
      },
      {
         "City": " Irpin"
      },
      {
         "City": " Ilovays’k"
      },
      {
         "City": " Illichivs’k"
      },
      {
         "City": " Horodok"
      },
      {
         "City": " Horlivka"
      },
      {
         "City": " Hlukhiv"
      },
      {
         "City": " Hulyaypole"
      },
      {
         "City": " Horodok"
      },
      {
         "City": " Horodyshche"
      },
      {
         "City": " Hola Prystan’"
      },
      {
         "City": " Heniches’k"
      },
      {
         "City": " Hayvoron"
      },
      {
         "City": " Haysyn"
      },
      {
         "City": " Hadyach"
      },
      {
         "City": " Feodosiya"
      },
      {
         "City": " Fastiv"
      },
      {
         "City": " Energodar"
      },
      {
         "City": " Dzhankoy"
      },
      {
         "City": " Dzerzhyns’k"
      },
      {
         "City": " Dunaivtsi"
      },
      {
         "City": " Dubno"
      },
      {
         "City": " Drohobych"
      },
      {
         "City": " Donetsk"
      },
      {
         "City": " Dolyna"
      },
      {
         "City": " Dolyns'ka"
      },
      {
         "City": " Dokuchayevs’k"
      },
      {
         "City": " Dobropillya"
      },
      {
         "City": " Dnipropetrovsk"
      },
      {
         "City": " Dniprodzerzhyns’k"
      },
      {
         "City": " Dniprorudne"
      },
      {
         "City": " Dymytrov"
      },
      {
         "City": " Derhachi"
      },
      {
         "City": " Debal’tseve"
      },
      {
         "City": " Chuhuyiv"
      },
      {
         "City": " Chortkiv"
      },
      {
         "City": " Chervonopartyzans’k"
      },
      {
         "City": " Chervonohrad"
      },
      {
         "City": " Chernivtsi"
      },
      {
         "City": " Chernihiv"
      },
      {
         "City": " Cherkasy"
      },
      {
         "City": " Bucha"
      },
      {
         "City": " Bryanka"
      },
      {
         "City": " Brovary"
      },
      {
         "City": " Brody"
      },
      {
         "City": " Boyarka"
      },
      {
         "City": " Boryspil’"
      },
      {
         "City": " Boryslav"
      },
      {
         "City": " Bolhrad"
      },
      {
         "City": " Bohuslav"
      },
      {
         "City": " Bohodukhiv"
      },
      {
         "City": " Bilhorod-Dnistrovs’kyy"
      },
      {
         "City": " Bila Tserkva"
      },
      {
         "City": " Бережани"
      },
      {
         "City": " Berehove"
      },
      {
         "City": " Berdychiv"
      },
      {
         "City": " Berdyans’k"
      },
      {
         "City": " Bilopillya"
      },
      {
         "City": " Bilohirs’k"
      },
      {
         "City": " Bar"
      },
      {
         "City": " Balta"
      },
      {
         "City": " Balakliya"
      },
      {
         "City": " Balaklava"
      },
      {
         "City": " Bakhmach"
      },
      {
         "City": " Bakhchysaray"
      },
      {
         "City": " Avdiyivka"
      },
      {
         "City": " Artsyz"
      },
      {
         "City": " Artemivs’k"
      },
      {
         "City": " Armyans’k"
      },
      {
         "City": " Apostolove"
      },
      {
         "City": " Antratsyt"
      },
      {
         "City": " Amvrosiyivka"
      },
      {
         "City": " Alushta"
      },
      {
         "City": " Alchevs’k"
      },
      {
         "City": " Okhtyrka"
      },
      {
         "City": " Komsomolsk"
      },
      {
         "City": " Славутич"
      },
      {
         "City": " Yuzhnoukrains'k"
      },
      {
         "City": " Novoyavorivs'k"
      }
   ],
   "Uganda": [
      {
         "City": " Yumbe"
      },
      {
         "City": " Wobulenzi"
      },
      {
         "City": " Wakiso"
      },
      {
         "City": " Tororo"
      },
      {
         "City": " Soroti"
      },
      {
         "City": " Pallisa"
      },
      {
         "City": " Paidha"
      },
      {
         "City": " Nyachera"
      },
      {
         "City": " Ntungamo"
      },
      {
         "City": " Ntungamo"
      },
      {
         "City": " Njeru"
      },
      {
         "City": " Nebbi"
      },
      {
         "City": " Namasuba"
      },
      {
         "City": " Mukono"
      },
      {
         "City": " Mubende"
      },
      {
         "City": " Moyo"
      },
      {
         "City": " Mityana"
      },
      {
         "City": " Mbarara"
      },
      {
         "City": " Mbale"
      },
      {
         "City": " Masindi"
      },
      {
         "City": " Masaka"
      },
      {
         "City": " Luwero"
      },
      {
         "City": " Lugazi"
      },
      {
         "City": " Lira"
      },
      {
         "City": " Kyenjojo"
      },
      {
         "City": " Kotido"
      },
      {
         "City": " Kitgum"
      },
      {
         "City": " Kireka"
      },
      {
         "City": " Kayunga"
      },
      {
         "City": " Kasese"
      },
      {
         "City": " Kamwenge"
      },
      {
         "City": " Kampala"
      },
      {
         "City": " Kabale"
      },
      {
         "City": " Jinja"
      },
      {
         "City": " Iganga"
      },
      {
         "City": " Hoima"
      },
      {
         "City": " Gulu"
      },
      {
         "City": " Fort Portal"
      },
      {
         "City": " Entebbe"
      },
      {
         "City": " Bwizibwera"
      },
      {
         "City": " Buwenge"
      },
      {
         "City": " Busia"
      },
      {
         "City": " Busembatia"
      },
      {
         "City": " Bundibugyo"
      },
      {
         "City": " Bugiri"
      },
      {
         "City": " Arua"
      },
      {
         "City": " Adjumani"
      }
   ],
   "United States": [
      {
         "City": " Fort Hunt"
      },
      {
         "City": " Bessemer"
      },
      {
         "City": " Paducah"
      },
      {
         "City": " Birmingham"
      },
      {
         "City": " Center Point"
      },
      {
         "City": " Daphne"
      },
      {
         "City": " Decatur"
      },
      {
         "City": " Dothan"
      },
      {
         "City": " East Florence"
      },
      {
         "City": " Enterprise"
      },
      {
         "City": " Fairhope"
      },
      {
         "City": " Florence"
      },
      {
         "City": " Gadsden"
      },
      {
         "City": " Helena"
      },
      {
         "City": " Homewood"
      },
      {
         "City": " Hoover"
      },
      {
         "City": " Hueytown"
      },
      {
         "City": " Huntsville"
      },
      {
         "City": " Madison"
      },
      {
         "City": " Mobile"
      },
      {
         "City": " Montgomery"
      },
      {
         "City": " Mountain Brook"
      },
      {
         "City": " Northport"
      },
      {
         "City": " Opelika"
      },
      {
         "City": " Oxford"
      },
      {
         "City": " Pelham"
      },
      {
         "City": " Phenix City"
      },
      {
         "City": " Prattville"
      },
      {
         "City": " Prichard"
      },
      {
         "City": " Selma"
      },
      {
         "City": " Talladega"
      },
      {
         "City": " Tillmans Corner"
      },
      {
         "City": " Troy"
      },
      {
         "City": " Trussville"
      },
      {
         "City": " Tuscaloosa"
      },
      {
         "City": " Vestavia Hills"
      },
      {
         "City": " Bella Vista"
      },
      {
         "City": " Benton"
      },
      {
         "City": " Bentonville"
      },
      {
         "City": " Blytheville"
      },
      {
         "City": " Bryant"
      },
      {
         "City": " Cabot"
      },
      {
         "City": " Conway"
      },
      {
         "City": " El Dorado"
      },
      {
         "City": " Fayetteville"
      },
      {
         "City": " Forrest City"
      },
      {
         "City": " Fort Smith"
      },
      {
         "City": " Hot Springs"
      },
      {
         "City": " Jacksonville"
      },
      {
         "City": " Jonesboro"
      },
      {
         "City": " Little Rock"
      },
      {
         "City": " Maumelle"
      },
      {
         "City": " North Little Rock"
      },
      {
         "City": " Paragould"
      },
      {
         "City": " Pine Bluff"
      },
      {
         "City": " Rogers"
      },
      {
         "City": " Russellville"
      },
      {
         "City": " Searcy"
      },
      {
         "City": " Siloam Springs"
      },
      {
         "City": " Springdale"
      },
      {
         "City": " Texarkana"
      },
      {
         "City": " Van Buren"
      },
      {
         "City": " West Memphis"
      },
      {
         "City": "Washington,  D.C."
      },
      {
         "City": " Bear"
      },
      {
         "City": " Dover"
      },
      {
         "City": " Middletown"
      },
      {
         "City": " Newark"
      },
      {
         "City": " Wilmington"
      },
      {
         "City": " Allapattah"
      },
      {
         "City": " Altamonte Springs"
      },
      {
         "City": " Apopka"
      },
      {
         "City": " Aventura"
      },
      {
         "City": " Bartow"
      },
      {
         "City": " Bayonet Point"
      },
      {
         "City": " Bayshore Gardens"
      },
      {
         "City": " Belle Glade"
      },
      {
         "City": " Bellview"
      },
      {
         "City": " Bloomingdale"
      },
      {
         "City": " Boca Del Mar"
      },
      {
         "City": " Boca Raton"
      },
      {
         "City": " Bonita Springs"
      },
      {
         "City": " Boynton Beach"
      },
      {
         "City": " Bradenton"
      },
      {
         "City": " Brandon"
      },
      {
         "City": " Brent"
      },
      {
         "City": " Brownsville"
      },
      {
         "City": " Buenaventura Lakes"
      },
      {
         "City": " Cantonment"
      },
      {
         "City": " Cape Coral"
      },
      {
         "City": " Carol City"
      },
      {
         "City": " Carrollwood"
      },
      {
         "City": " Carrollwood Village"
      },
      {
         "City": " Casselberry"
      },
      {
         "City": " Citrus Park"
      },
      {
         "City": " Clearwater"
      },
      {
         "City": " Clermont"
      },
      {
         "City": " Cocoa"
      },
      {
         "City": " Coconut Creek"
      },
      {
         "City": " Coconut Grove"
      },
      {
         "City": " Cooper City"
      },
      {
         "City": " Coral Gables"
      },
      {
         "City": " Coral Springs"
      },
      {
         "City": " Coral Terrace"
      },
      {
         "City": " Country Walk"
      },
      {
         "City": " Country Club"
      },
      {
         "City": " Crestview"
      },
      {
         "City": " Cutler"
      },
      {
         "City": " Cutler Ridge"
      },
      {
         "City": " Dania Beach"
      },
      {
         "City": " Davie"
      },
      {
         "City": " Daytona Beach"
      },
      {
         "City": " DeLand"
      },
      {
         "City": " DeBary"
      },
      {
         "City": " Deerfield Beach"
      },
      {
         "City": " Delray Beach"
      },
      {
         "City": " Deltona"
      },
      {
         "City": " Doral"
      },
      {
         "City": " Dunedin"
      },
      {
         "City": " East Lake"
      },
      {
         "City": " East Pensacola Heights"
      },
      {
         "City": " Edgewater"
      },
      {
         "City": " Egypt Lake-Leto"
      },
      {
         "City": " Ensley"
      },
      {
         "City": " Estero"
      },
      {
         "City": " Eustis"
      },
      {
         "City": " Ferry Pass"
      },
      {
         "City": " Flagami"
      },
      {
         "City": " Florida Ridge"
      },
      {
         "City": " Fort Lauderdale"
      },
      {
         "City": " Fort Myers"
      },
      {
         "City": " Fort Pierce"
      },
      {
         "City": " Fort Walton Beach"
      },
      {
         "City": " Fountainebleau"
      },
      {
         "City": " Fruit Cove"
      },
      {
         "City": " Gainesville"
      },
      {
         "City": " Glenvar Heights"
      },
      {
         "City": " Golden Gate"
      },
      {
         "City": " Golden Glades"
      },
      {
         "City": " Greenacres City"
      },
      {
         "City": " Haines City"
      },
      {
         "City": " Hallandale Beach"
      },
      {
         "City": " Hialeah"
      },
      {
         "City": " Hialeah Gardens"
      },
      {
         "City": " Holiday"
      },
      {
         "City": " Hollywood"
      },
      {
         "City": " Homestead"
      },
      {
         "City": " Immokalee"
      },
      {
         "City": " Iona"
      },
      {
         "City": " Ives Estates"
      },
      {
         "City": " Jacksonville"
      },
      {
         "City": " Jacksonville Beach"
      },
      {
         "City": " Jasmine Estates"
      },
      {
         "City": " Jupiter"
      },
      {
         "City": " Kendale Lakes"
      },
      {
         "City": " Kendall"
      },
      {
         "City": " Key West"
      },
      {
         "City": " Keystone"
      },
      {
         "City": " Kissimmee"
      },
      {
         "City": " Lake Butler"
      },
      {
         "City": " Lake Magdalene"
      },
      {
         "City": " Lake Worth"
      },
      {
         "City": " Lake Worth Corridor"
      },
      {
         "City": " Lakeland"
      },
      {
         "City": " Lakeside"
      },
      {
         "City": " Land O' Lakes"
      },
      {
         "City": " Largo"
      },
      {
         "City": " Lauderdale Lakes"
      },
      {
         "City": " Lauderhill"
      },
      {
         "City": " Lealman"
      },
      {
         "City": " Leesburg"
      },
      {
         "City": " Lehigh Acres"
      },
      {
         "City": " Leisure City"
      },
      {
         "City": " Lutz"
      },
      {
         "City": " Lynn Haven"
      },
      {
         "City": " Maitland"
      },
      {
         "City": " Margate"
      },
      {
         "City": " Meadow Woods"
      },
      {
         "City": " Melbourne"
      },
      {
         "City": " Merritt Island"
      },
      {
         "City": " Miami"
      },
      {
         "City": " Miami Beach"
      },
      {
         "City": " Miami Gardens"
      },
      {
         "City": " Miami Lakes"
      },
      {
         "City": " Miramar"
      },
      {
         "City": " Myrtle Grove"
      },
      {
         "City": " Naples"
      },
      {
         "City": " Navarre"
      },
      {
         "City": " New Smyrna Beach"
      },
      {
         "City": " Norland"
      },
      {
         "City": " North Fort Myers"
      },
      {
         "City": " North Lauderdale"
      },
      {
         "City": " North Miami"
      },
      {
         "City": " North Miami Beach"
      },
      {
         "City": " North Port"
      },
      {
         "City": " Oak Ridge"
      },
      {
         "City": " Oakland Park"
      },
      {
         "City": " Ocala"
      },
      {
         "City": " Ocoee"
      },
      {
         "City": " Ojus"
      },
      {
         "City": " Opa-locka"
      },
      {
         "City": " Orlando"
      },
      {
         "City": " Ormond Beach"
      },
      {
         "City": " Oviedo"
      },
      {
         "City": " Pace"
      },
      {
         "City": " Palm Bay"
      },
      {
         "City": " Palm Beach Gardens"
      },
      {
         "City": " Palm City"
      },
      {
         "City": " Palm Coast"
      },
      {
         "City": " Palm Harbor"
      },
      {
         "City": " Palm Springs"
      },
      {
         "City": " Palm Valley"
      },
      {
         "City": " Palmetto Bay"
      },
      {
         "City": " Panama City"
      },
      {
         "City": " Parkland"
      },
      {
         "City": " Pembroke Pines"
      },
      {
         "City": " Pensacola"
      },
      {
         "City": " Pine Hills"
      },
      {
         "City": " Pinecrest"
      },
      {
         "City": " Pinellas Park"
      },
      {
         "City": " Pinewood"
      },
      {
         "City": " Plant City"
      },
      {
         "City": " Plantation"
      },
      {
         "City": " Poinciana"
      },
      {
         "City": " Pompano Beach"
      },
      {
         "City": " Ponte Vedra Beach"
      },
      {
         "City": " Port Charlotte"
      },
      {
         "City": " Port Orange"
      },
      {
         "City": " Port Saint Lucie"
      },
      {
         "City": " Princeton"
      },
      {
         "City": " Punta Gorda"
      },
      {
         "City": " Punta Gorda Isles"
      },
      {
         "City": " Richmond West"
      },
      {
         "City": " Riverview"
      },
      {
         "City": " Riviera Beach"
      },
      {
         "City": " Rockledge"
      },
      {
         "City": " Royal Palm Beach"
      },
      {
         "City": " Ruskin"
      },
      {
         "City": " Safety Harbor"
      },
      {
         "City": " Saint Cloud"
      },
      {
         "City": " Saint Petersburg"
      },
      {
         "City": " San Carlos Park"
      },
      {
         "City": " Sanford"
      },
      {
         "City": " Sarasota"
      },
      {
         "City": " Sebastian"
      },
      {
         "City": " Seminole"
      },
      {
         "City": " South Bradenton"
      },
      {
         "City": " South Miami Heights"
      },
      {
         "City": " Southchase"
      },
      {
         "City": " Spring Hill"
      },
      {
         "City": " Stuart"
      },
      {
         "City": " Sun City Center"
      },
      {
         "City": " Sunny Isles Beach"
      },
      {
         "City": " Sunrise"
      },
      {
         "City": " Sunset"
      },
      {
         "City": " Tallahassee"
      },
      {
         "City": " Tamarac"
      },
      {
         "City": " Tamiami"
      },
      {
         "City": " Tampa"
      },
      {
         "City": " Tarpon Springs"
      },
      {
         "City": " Temple Terrace"
      },
      {
         "City": " The Crossings"
      },
      {
         "City": " The Hammocks"
      },
      {
         "City": " The Villages"
      },
      {
         "City": " Three Lakes"
      },
      {
         "City": " Titusville"
      },
      {
         "City": " Town 'n' Country"
      },
      {
         "City": " University Park"
      },
      {
         "City": " Valrico"
      },
      {
         "City": " Venice"
      },
      {
         "City": " Vero Beach"
      },
      {
         "City": " Wekiwa Springs"
      },
      {
         "City": " Wellington"
      },
      {
         "City": " Wesley Chapel"
      },
      {
         "City": " Westchase"
      },
      {
         "City": " West Little River"
      },
      {
         "City": " West Melbourne"
      },
      {
         "City": " West Palm Beach"
      },
      {
         "City": " West Pensacola"
      },
      {
         "City": " West and East Lealman"
      },
      {
         "City": " Westchester"
      },
      {
         "City": " Weston"
      },
      {
         "City": " Winter Garden"
      },
      {
         "City": " Winter Haven"
      },
      {
         "City": " Winter Park"
      },
      {
         "City": " Winter Springs"
      },
      {
         "City": " Wright"
      },
      {
         "City": " Acworth"
      },
      {
         "City": " Albany"
      },
      {
         "City": " Alpharetta"
      },
      {
         "City": " Americus"
      },
      {
         "City": " Athens"
      },
      {
         "City": " Atlanta"
      },
      {
         "City": " Augusta"
      },
      {
         "City": " Belvedere Park"
      },
      {
         "City": " Brookhaven"
      },
      {
         "City": " Brunswick"
      },
      {
         "City": " Calhoun"
      },
      {
         "City": " Canton"
      },
      {
         "City": " Carrollton"
      },
      {
         "City": " Cartersville"
      },
      {
         "City": " Columbus"
      },
      {
         "City": " Conyers"
      },
      {
         "City": " Dalton"
      },
      {
         "City": " Decatur"
      },
      {
         "City": " Douglasville"
      },
      {
         "City": " Dublin"
      },
      {
         "City": " Duluth"
      },
      {
         "City": " Dunwoody"
      },
      {
         "City": " East Point"
      },
      {
         "City": " Evans"
      },
      {
         "City": " Fayetteville"
      },
      {
         "City": " Forest Park"
      },
      {
         "City": " Gainesville"
      },
      {
         "City": " Griffin"
      },
      {
         "City": " Hinesville"
      },
      {
         "City": " Kennesaw"
      },
      {
         "City": " Kingsland"
      },
      {
         "City": " La Grange"
      },
      {
         "City": " Lawrenceville"
      },
      {
         "City": " Lithia Springs"
      },
      {
         "City": " Mableton"
      },
      {
         "City": " Macon"
      },
      {
         "City": " Marietta"
      },
      {
         "City": " Martinez"
      },
      {
         "City": " McDonough"
      },
      {
         "City": " Milledgeville"
      },
      {
         "City": " Newnan"
      },
      {
         "City": " North Decatur"
      },
      {
         "City": " North Druid Hills"
      },
      {
         "City": " Peachtree City"
      },
      {
         "City": " Pooler"
      },
      {
         "City": " Redan"
      },
      {
         "City": " Riverdale"
      },
      {
         "City": " Rome"
      },
      {
         "City": " Roswell"
      },
      {
         "City": " St. Marys"
      },
      {
         "City": " Sandy Springs"
      },
      {
         "City": " Savannah"
      },
      {
         "City": " Smyrna"
      },
      {
         "City": " Snellville"
      },
      {
         "City": " Statesboro"
      },
      {
         "City": " Stockbridge"
      },
      {
         "City": " Sugar Hill"
      },
      {
         "City": " Suwanee"
      },
      {
         "City": " Thomasville"
      },
      {
         "City": " Tifton"
      },
      {
         "City": " Tucker"
      },
      {
         "City": " Union City"
      },
      {
         "City": " Valdosta"
      },
      {
         "City": " Warner Robins"
      },
      {
         "City": " Wilmington Island"
      },
      {
         "City": " Woodstock"
      },
      {
         "City": " Alton"
      },
      {
         "City": " Belleville"
      },
      {
         "City": " Cahokia"
      },
      {
         "City": " Carbondale"
      },
      {
         "City": " Charleston"
      },
      {
         "City": " Collinsville"
      },
      {
         "City": " Decatur"
      },
      {
         "City": " East Saint Louis"
      },
      {
         "City": " Edwardsville"
      },
      {
         "City": " Fairview Heights"
      },
      {
         "City": " Godfrey"
      },
      {
         "City": " Granite City"
      },
      {
         "City": " Jacksonville"
      },
      {
         "City": " Marion"
      },
      {
         "City": " Mattoon"
      },
      {
         "City": " Mount Vernon"
      },
      {
         "City": " O'Fallon"
      },
      {
         "City": " Quincy"
      },
      {
         "City": " Springfield"
      },
      {
         "City": " Upper Alton"
      },
      {
         "City": " Bloomington"
      },
      {
         "City": " Broad Ripple"
      },
      {
         "City": " Brownsburg"
      },
      {
         "City": " Carmel"
      },
      {
         "City": " Clarksville"
      },
      {
         "City": " Columbus"
      },
      {
         "City": " Evansville"
      },
      {
         "City": " Fishers"
      },
      {
         "City": " Greenfield"
      },
      {
         "City": " Greenwood"
      },
      {
         "City": " Indianapolis"
      },
      {
         "City": " Jasper"
      },
      {
         "City": " Jeffersonville"
      },
      {
         "City": " Lawrence"
      },
      {
         "City": " New Albany"
      },
      {
         "City": " New Castle"
      },
      {
         "City": " Plainfield"
      },
      {
         "City": " Richmond"
      },
      {
         "City": " Seymour"
      },
      {
         "City": " Shelbyville"
      },
      {
         "City": " Terre Haute"
      },
      {
         "City": " Vincennes"
      },
      {
         "City": " Derby"
      },
      {
         "City": " Emporia"
      },
      {
         "City": " Gardner"
      },
      {
         "City": " Great Bend"
      },
      {
         "City": " Hays"
      },
      {
         "City": " Hutchinson"
      },
      {
         "City": " Junction City"
      },
      {
         "City": " Kansas City"
      },
      {
         "City": " Lawrence"
      },
      {
         "City": " Leavenworth"
      },
      {
         "City": " Leawood"
      },
      {
         "City": " Lenexa"
      },
      {
         "City": " Manhattan"
      },
      {
         "City": " Newton"
      },
      {
         "City": " Olathe"
      },
      {
         "City": " Overland Park"
      },
      {
         "City": " Pittsburg"
      },
      {
         "City": " Prairie Village"
      },
      {
         "City": " Salina"
      },
      {
         "City": " Shawnee"
      },
      {
         "City": " Topeka"
      },
      {
         "City": " Wichita"
      },
      {
         "City": " Ashland"
      },
      {
         "City": " Bowling Green"
      },
      {
         "City": " Burlington"
      },
      {
         "City": " Covington"
      },
      {
         "City": " Danville"
      },
      {
         "City": " Elizabethtown"
      },
      {
         "City": " Erlanger"
      },
      {
         "City": " Fern Creek"
      },
      {
         "City": " Florence"
      },
      {
         "City": " Fort Thomas"
      },
      {
         "City": " Frankfort"
      },
      {
         "City": " Georgetown"
      },
      {
         "City": " Henderson"
      },
      {
         "City": " Highview"
      },
      {
         "City": " Hopkinsville"
      },
      {
         "City": " Independence"
      },
      {
         "City": " Ironville"
      },
      {
         "City": " Jeffersontown"
      },
      {
         "City": " Lexington"
      },
      {
         "City": " Lexington-Fayette"
      },
      {
         "City": " Louisville"
      },
      {
         "City": " Madisonville"
      },
      {
         "City": " Meads"
      },
      {
         "City": " Murray"
      },
      {
         "City": " Newburg"
      },
      {
         "City": " Newport"
      },
      {
         "City": " Nicholasville"
      },
      {
         "City": " Okolona"
      },
      {
         "City": " Owensboro"
      },
      {
         "City": " Pleasure Ridge Park"
      },
      {
         "City": " Radcliff"
      },
      {
         "City": " Richmond"
      },
      {
         "City": " Saint Matthews"
      },
      {
         "City": " Shively"
      },
      {
         "City": " Valley Station"
      },
      {
         "City": " Winchester"
      },
      {
         "City": " Alexandria"
      },
      {
         "City": " Baton Rouge"
      },
      {
         "City": " Bayou Cane"
      },
      {
         "City": " Bossier City"
      },
      {
         "City": " Central"
      },
      {
         "City": " Chalmette"
      },
      {
         "City": " Estelle"
      },
      {
         "City": " Gretna"
      },
      {
         "City": " Hammond"
      },
      {
         "City": " Harvey"
      },
      {
         "City": " Houma"
      },
      {
         "City": " Kenner"
      },
      {
         "City": " Lafayette"
      },
      {
         "City": " Lake Charles"
      },
      {
         "City": " Laplace"
      },
      {
         "City": " Marrero"
      },
      {
         "City": " Metairie"
      },
      {
         "City": " Metairie Terrace"
      },
      {
         "City": " Monroe"
      },
      {
         "City": " Natchitoches"
      },
      {
         "City": " New Iberia"
      },
      {
         "City": " New Orleans"
      },
      {
         "City": " Opelousas"
      },
      {
         "City": " Prairieville"
      },
      {
         "City": " Ruston"
      },
      {
         "City": " Shenandoah"
      },
      {
         "City": " Shreveport"
      },
      {
         "City": " Slidell"
      },
      {
         "City": " Sulphur"
      },
      {
         "City": " Terrytown"
      },
      {
         "City": " Adelphi"
      },
      {
         "City": " Annapolis"
      },
      {
         "City": " Arbutus"
      },
      {
         "City": " Arnold"
      },
      {
         "City": " Aspen Hill"
      },
      {
         "City": " Baltimore"
      },
      {
         "City": " Ballenger Creek"
      },
      {
         "City": " Beltsville"
      },
      {
         "City": " Bethesda"
      },
      {
         "City": " Bowie"
      },
      {
         "City": " Calverton"
      },
      {
         "City": " Camp Springs"
      },
      {
         "City": " Carney"
      },
      {
         "City": " Catonsville"
      },
      {
         "City": " Chillum"
      },
      {
         "City": " Cloverly"
      },
      {
         "City": " Clinton"
      },
      {
         "City": " Cockeysville"
      },
      {
         "City": " College Park"
      },
      {
         "City": " Columbia"
      },
      {
         "City": " Crofton"
      },
      {
         "City": " Cumberland"
      },
      {
         "City": " Damascus"
      },
      {
         "City": " Dundalk"
      },
      {
         "City": " East Riverdale"
      },
      {
         "City": " Easton"
      },
      {
         "City": " Edgewood"
      },
      {
         "City": " Eldersburg"
      },
      {
         "City": " Elkton"
      },
      {
         "City": " Elkridge"
      },
      {
         "City": " Ellicott City"
      },
      {
         "City": " Essex"
      },
      {
         "City": " Fairland"
      },
      {
         "City": " Ferndale"
      },
      {
         "City": " Fort Washington"
      },
      {
         "City": " Frederick"
      },
      {
         "City": " Gaithersburg"
      },
      {
         "City": " Germantown"
      },
      {
         "City": " Glassmanor"
      },
      {
         "City": " Glen Burnie"
      },
      {
         "City": " Green Haven"
      },
      {
         "City": " Greenbelt"
      },
      {
         "City": " Hagerstown"
      },
      {
         "City": " Hanover"
      },
      {
         "City": " Hillcrest Heights"
      },
      {
         "City": " Hunt Valley"
      },
      {
         "City": " Hyattsville"
      },
      {
         "City": " Ilchester"
      },
      {
         "City": " Lake Shore"
      },
      {
         "City": " Landover"
      },
      {
         "City": " Langley Park"
      },
      {
         "City": " Laurel"
      },
      {
         "City": " Lochearn"
      },
      {
         "City": " Maryland City"
      },
      {
         "City": " Middle River"
      },
      {
         "City": " Milford Mill"
      },
      {
         "City": " Montgomery Village"
      },
      {
         "City": " North Bel Air"
      },
      {
         "City": " North Bethesda"
      },
      {
         "City": " North Potomac"
      },
      {
         "City": " Odenton"
      },
      {
         "City": " Olney"
      },
      {
         "City": " Owings Mills"
      },
      {
         "City": " Oxon Hill"
      },
      {
         "City": " Parkville"
      },
      {
         "City": " Parole"
      },
      {
         "City": " Pasadena"
      },
      {
         "City": " Perry Hall"
      },
      {
         "City": " Pikesville"
      },
      {
         "City": " Potomac"
      },
      {
         "City": " Randallstown"
      },
      {
         "City": " Redland"
      },
      {
         "City": " Reisterstown"
      },
      {
         "City": " Rockville"
      },
      {
         "City": " Rosedale"
      },
      {
         "City": " Rossville"
      },
      {
         "City": " Saint Charles"
      },
      {
         "City": " Salisbury"
      },
      {
         "City": " Seabrook"
      },
      {
         "City": " Severn"
      },
      {
         "City": " Severna Park"
      },
      {
         "City": " Silver Spring"
      },
      {
         "City": " South Bel Air"
      },
      {
         "City": " South Gate"
      },
      {
         "City": " South Laurel"
      },
      {
         "City": " Suitland"
      },
      {
         "City": " Takoma Park"
      },
      {
         "City": " Towson"
      },
      {
         "City": " Waldorf"
      },
      {
         "City": " West Elkridge"
      },
      {
         "City": " Westminster"
      },
      {
         "City": " Wheaton"
      },
      {
         "City": " White Oak"
      },
      {
         "City": " Woodlawn"
      },
      {
         "City": " Affton"
      },
      {
         "City": " Arnold"
      },
      {
         "City": " Ballwin"
      },
      {
         "City": " Belton"
      },
      {
         "City": " Blue Springs"
      },
      {
         "City": " Cape Girardeau"
      },
      {
         "City": " Chesterfield"
      },
      {
         "City": " Clayton"
      },
      {
         "City": " Columbia"
      },
      {
         "City": " Concord"
      },
      {
         "City": " Creve Coeur"
      },
      {
         "City": " East Independence"
      },
      {
         "City": " Farmington"
      },
      {
         "City": " Ferguson"
      },
      {
         "City": " Florissant"
      },
      {
         "City": " Gladstone"
      },
      {
         "City": " Grandview"
      },
      {
         "City": " Hannibal"
      },
      {
         "City": " Hazelwood"
      },
      {
         "City": " Independence"
      },
      {
         "City": " Jefferson City"
      },
      {
         "City": " Joplin"
      },
      {
         "City": " Kansas City"
      },
      {
         "City": " Kirkwood"
      },
      {
         "City": " Lee's Summit"
      },
      {
         "City": " Lemay"
      },
      {
         "City": " Liberty"
      },
      {
         "City": " Manchester"
      },
      {
         "City": " Maryland Heights"
      },
      {
         "City": " Mehlville"
      },
      {
         "City": " Nixa"
      },
      {
         "City": " O'Fallon"
      },
      {
         "City": " Oakville"
      },
      {
         "City": " Overland"
      },
      {
         "City": " Ozark"
      },
      {
         "City": " Poplar Bluff"
      },
      {
         "City": " Raymore"
      },
      {
         "City": " Raytown"
      },
      {
         "City": " Rolla"
      },
      {
         "City": " Saint Charles"
      },
      {
         "City": " Saint Joseph"
      },
      {
         "City": " St. Louis"
      },
      {
         "City": " Saint Peters"
      },
      {
         "City": " Sedalia"
      },
      {
         "City": " Sikeston"
      },
      {
         "City": " Spanish Lake"
      },
      {
         "City": " Springfield"
      },
      {
         "City": " University City"
      },
      {
         "City": " Warrensburg"
      },
      {
         "City": " Webster Groves"
      },
      {
         "City": " Wentzville"
      },
      {
         "City": " Wildwood"
      },
      {
         "City": " Biloxi"
      },
      {
         "City": " Brandon"
      },
      {
         "City": " Clarksdale"
      },
      {
         "City": " Clinton"
      },
      {
         "City": " Columbus"
      },
      {
         "City": " Gautier"
      },
      {
         "City": " Greenville"
      },
      {
         "City": " Greenwood"
      },
      {
         "City": " Gulfport"
      },
      {
         "City": " Hattiesburg"
      },
      {
         "City": " Horn Lake"
      },
      {
         "City": " Jackson"
      },
      {
         "City": " Laurel"
      },
      {
         "City": " Madison"
      },
      {
         "City": " Meridian"
      },
      {
         "City": " Natchez"
      },
      {
         "City": " Ocean Springs"
      },
      {
         "City": " Olive Branch"
      },
      {
         "City": " Oxford"
      },
      {
         "City": " Pascagoula"
      },
      {
         "City": " Pearl"
      },
      {
         "City": " Ridgeland"
      },
      {
         "City": " Southaven"
      },
      {
         "City": " Starkville"
      },
      {
         "City": " Tupelo"
      },
      {
         "City": " Vicksburg"
      },
      {
         "City": " West Gulfport"
      },
      {
         "City": " Albemarle"
      },
      {
         "City": " Apex"
      },
      {
         "City": " Asheboro"
      },
      {
         "City": " Asheville"
      },
      {
         "City": " Boone"
      },
      {
         "City": " Burlington"
      },
      {
         "City": " Carrboro"
      },
      {
         "City": " Cary"
      },
      {
         "City": " Chapel Hill"
      },
      {
         "City": " Charlotte"
      },
      {
         "City": " Clayton"
      },
      {
         "City": " Clemmons"
      },
      {
         "City": " Concord"
      },
      {
         "City": " Cornelius"
      },
      {
         "City": " Durham"
      },
      {
         "City": " Eden"
      },
      {
         "City": " Elizabeth City"
      },
      {
         "City": " Fayetteville"
      },
      {
         "City": " Fuquay-Varina"
      },
      {
         "City": " Garner"
      },
      {
         "City": " Gastonia"
      },
      {
         "City": " Goldsboro"
      },
      {
         "City": " Greensboro"
      },
      {
         "City": " Greenville"
      },
      {
         "City": " Havelock"
      },
      {
         "City": " Henderson"
      },
      {
         "City": " Hickory"
      },
      {
         "City": " High Point"
      },
      {
         "City": " Holly Springs"
      },
      {
         "City": " Hope Mills"
      },
      {
         "City": " Huntersville"
      },
      {
         "City": " Indian Trail"
      },
      {
         "City": " Jacksonville"
      },
      {
         "City": " Kannapolis"
      },
      {
         "City": " Kernersville"
      },
      {
         "City": " Kinston"
      },
      {
         "City": " Laurinburg"
      },
      {
         "City": " Lenoir"
      },
      {
         "City": " Lexington"
      },
      {
         "City": " Lumberton"
      },
      {
         "City": " Matthews"
      },
      {
         "City": " Mint Hill"
      },
      {
         "City": " Monroe"
      },
      {
         "City": " Mooresville"
      },
      {
         "City": " Morganton"
      },
      {
         "City": " Morrisville"
      },
      {
         "City": " New Bern"
      },
      {
         "City": " Raleigh"
      },
      {
         "City": " Roanoke Rapids"
      },
      {
         "City": " Rocky Mount"
      },
      {
         "City": " Salisbury"
      },
      {
         "City": " Sanford"
      },
      {
         "City": " Shelby"
      },
      {
         "City": " Statesville"
      },
      {
         "City": " Thomasville"
      },
      {
         "City": " Wake Forest"
      },
      {
         "City": " West Raleigh"
      },
      {
         "City": " Wilmington"
      },
      {
         "City": " Wilson"
      },
      {
         "City": " Winston-Salem"
      },
      {
         "City": " Atlantic City"
      },
      {
         "City": " Bridgeton"
      },
      {
         "City": " Camden"
      },
      {
         "City": " Cherry Hill"
      },
      {
         "City": " Glassboro"
      },
      {
         "City": " Jackson"
      },
      {
         "City": " Lindenwold"
      },
      {
         "City": " Maple Shade"
      },
      {
         "City": " Millville"
      },
      {
         "City": " Mount Laurel"
      },
      {
         "City": " Ocean Acres"
      },
      {
         "City": " Pennsauken"
      },
      {
         "City": " Pleasantville"
      },
      {
         "City": " Sicklerville"
      },
      {
         "City": " South Vineland"
      },
      {
         "City": " Toms River"
      },
      {
         "City": " Vineland"
      },
      {
         "City": " Williamstown"
      },
      {
         "City": " Athens"
      },
      {
         "City": " Beavercreek"
      },
      {
         "City": " Centerville"
      },
      {
         "City": " Cincinnati"
      },
      {
         "City": " Columbus"
      },
      {
         "City": " Dayton"
      },
      {
         "City": " Fairborn"
      },
      {
         "City": " Fairfield"
      },
      {
         "City": " Forest Park"
      },
      {
         "City": " Grove City"
      },
      {
         "City": " Hamilton"
      },
      {
         "City": " Huber Heights"
      },
      {
         "City": " Kettering"
      },
      {
         "City": " Lancaster"
      },
      {
         "City": " Lebanon"
      },
      {
         "City": " Mason"
      },
      {
         "City": " Miamisburg"
      },
      {
         "City": " Middletown"
      },
      {
         "City": " Norwood"
      },
      {
         "City": " Oxford"
      },
      {
         "City": " Pickerington"
      },
      {
         "City": " Portsmouth"
      },
      {
         "City": " Reynoldsburg"
      },
      {
         "City": " Riverside"
      },
      {
         "City": " Springboro"
      },
      {
         "City": " Springfield"
      },
      {
         "City": " Trotwood"
      },
      {
         "City": " Upper Arlington"
      },
      {
         "City": " Vandalia"
      },
      {
         "City": " White Oak"
      },
      {
         "City": " Whitehall"
      },
      {
         "City": " Xenia"
      },
      {
         "City": " Zanesville"
      },
      {
         "City": " Ada"
      },
      {
         "City": " Altus"
      },
      {
         "City": " Ardmore"
      },
      {
         "City": " Bartlesville"
      },
      {
         "City": " Bethany"
      },
      {
         "City": " Bixby"
      },
      {
         "City": " Broken Arrow"
      },
      {
         "City": " Chickasha"
      },
      {
         "City": " Claremore"
      },
      {
         "City": " Del City"
      },
      {
         "City": " Duncan"
      },
      {
         "City": " Durant"
      },
      {
         "City": " Edmond"
      },
      {
         "City": " El Reno"
      },
      {
         "City": " Enid"
      },
      {
         "City": " Jenks"
      },
      {
         "City": " Lawton"
      },
      {
         "City": " McAlester"
      },
      {
         "City": " Midwest City"
      },
      {
         "City": " Moore"
      },
      {
         "City": " Muskogee"
      },
      {
         "City": " Mustang"
      },
      {
         "City": " Norman"
      },
      {
         "City": " Oklahoma City"
      },
      {
         "City": " Owasso"
      },
      {
         "City": " Ponca City"
      },
      {
         "City": " Sand Springs"
      },
      {
         "City": " Sapulpa"
      },
      {
         "City": " Shawnee"
      },
      {
         "City": " Stillwater"
      },
      {
         "City": " Tahlequah"
      },
      {
         "City": " Tulsa"
      },
      {
         "City": " Yukon"
      },
      {
         "City": " Chambersburg"
      },
      {
         "City": " Chester"
      },
      {
         "City": " Drexel Hill"
      },
      {
         "City": " Hanover"
      },
      {
         "City": " Philadelphia"
      },
      {
         "City": " Springfield"
      },
      {
         "City": " West Chester"
      },
      {
         "City": " York"
      },
      {
         "City": " Aiken"
      },
      {
         "City": " Anderson"
      },
      {
         "City": " Charleston"
      },
      {
         "City": " Columbia"
      },
      {
         "City": " Conway"
      },
      {
         "City": " Easley"
      },
      {
         "City": " Florence"
      },
      {
         "City": " Goose Creek"
      },
      {
         "City": " Greenville"
      },
      {
         "City": " Greenwood"
      },
      {
         "City": " Greer"
      },
      {
         "City": " Hanahan"
      },
      {
         "City": " Hilton Head Island"
      },
      {
         "City": " Lexington"
      },
      {
         "City": " Mauldin"
      },
      {
         "City": " Mount Pleasant"
      },
      {
         "City": " Myrtle Beach"
      },
      {
         "City": " North Augusta"
      },
      {
         "City": " North Charleston"
      },
      {
         "City": " Rock Hill"
      },
      {
         "City": " Saint Andrews"
      },
      {
         "City": " Seven Oaks"
      },
      {
         "City": " Simpsonville"
      },
      {
         "City": " Socastee"
      },
      {
         "City": " Spartanburg"
      },
      {
         "City": " Summerville"
      },
      {
         "City": " Sumter"
      },
      {
         "City": " Taylors"
      },
      {
         "City": " Wade Hampton"
      },
      {
         "City": " Bartlett"
      },
      {
         "City": " Brentwood"
      },
      {
         "City": " Brentwood Estates"
      },
      {
         "City": " Bristol"
      },
      {
         "City": " Chattanooga"
      },
      {
         "City": " Clarksville"
      },
      {
         "City": " Cleveland"
      },
      {
         "City": " Collierville"
      },
      {
         "City": " Columbia"
      },
      {
         "City": " Cookeville"
      },
      {
         "City": " Dyersburg"
      },
      {
         "City": " East Brainerd"
      },
      {
         "City": " East Chattanooga"
      },
      {
         "City": " East Ridge"
      },
      {
         "City": " Farragut"
      },
      {
         "City": " Franklin"
      },
      {
         "City": " Gallatin"
      },
      {
         "City": " Germantown"
      },
      {
         "City": " Goodlettsville"
      },
      {
         "City": " Greeneville"
      },
      {
         "City": " Hendersonville"
      },
      {
         "City": " Jackson"
      },
      {
         "City": " Johnson City"
      },
      {
         "City": " Kingsport"
      },
      {
         "City": " Knoxville"
      },
      {
         "City": " La Vergne"
      },
      {
         "City": " Lebanon"
      },
      {
         "City": " Maryville"
      },
      {
         "City": " Memphis"
      },
      {
         "City": " Morristown"
      },
      {
         "City": " Mount Juliet"
      },
      {
         "City": " Murfreesboro"
      },
      {
         "City": " Nashville"
      },
      {
         "City": " New South Memphis"
      },
      {
         "City": " Oak Ridge"
      },
      {
         "City": " Shelbyville"
      },
      {
         "City": " Smyrna"
      },
      {
         "City": " Spring Hill"
      },
      {
         "City": " Springfield"
      },
      {
         "City": " Tullahoma"
      },
      {
         "City": " Abilene"
      },
      {
         "City": " Alamo"
      },
      {
         "City": " Aldine"
      },
      {
         "City": " Alice"
      },
      {
         "City": " Allen"
      },
      {
         "City": " Alvin"
      },
      {
         "City": " Angleton"
      },
      {
         "City": " Arlington"
      },
      {
         "City": " Atascocita"
      },
      {
         "City": " Austin"
      },
      {
         "City": " Balch Springs"
      },
      {
         "City": " Baytown"
      },
      {
         "City": " Beaumont"
      },
      {
         "City": " Bedford"
      },
      {
         "City": " Bellaire"
      },
      {
         "City": " Belton"
      },
      {
         "City": " Benbrook"
      },
      {
         "City": " Brenham"
      },
      {
         "City": " Brownsville"
      },
      {
         "City": " Brownwood"
      },
      {
         "City": " Brushy Creek"
      },
      {
         "City": " Bryan"
      },
      {
         "City": " Burleson"
      },
      {
         "City": " Canyon Lake"
      },
      {
         "City": " Carrollton"
      },
      {
         "City": " Cedar Hill"
      },
      {
         "City": " Cedar Park"
      },
      {
         "City": " Channelview"
      },
      {
         "City": " Cibolo"
      },
      {
         "City": " Cinco Ranch"
      },
      {
         "City": " Cleburne"
      },
      {
         "City": " Cloverleaf"
      },
      {
         "City": " College Station"
      },
      {
         "City": " Colleyville"
      },
      {
         "City": " Conroe"
      },
      {
         "City": " Converse"
      },
      {
         "City": " Coppell"
      },
      {
         "City": " Copperas Cove"
      },
      {
         "City": " Corinth"
      },
      {
         "City": " Corpus Christi"
      },
      {
         "City": " Corsicana"
      },
      {
         "City": " Cypress"
      },
      {
         "City": " Dallas"
      },
      {
         "City": " DeSoto"
      },
      {
         "City": " Deer Park"
      },
      {
         "City": " Denison"
      },
      {
         "City": " Denton"
      },
      {
         "City": " Dickinson"
      },
      {
         "City": " Donna"
      },
      {
         "City": " Duncanville"
      },
      {
         "City": " Edinburg"
      },
      {
         "City": " Ennis"
      },
      {
         "City": " Euless"
      },
      {
         "City": " Farmers Branch"
      },
      {
         "City": " Flower Mound"
      },
      {
         "City": " Fort Worth"
      },
      {
         "City": " Fresno"
      },
      {
         "City": " Friendswood"
      },
      {
         "City": " Frisco"
      },
      {
         "City": " Gainesville"
      },
      {
         "City": " Galveston"
      },
      {
         "City": " Garland"
      },
      {
         "City": " Gatesville"
      },
      {
         "City": " Georgetown"
      },
      {
         "City": " Grand Prairie"
      },
      {
         "City": " Grapevine"
      },
      {
         "City": " Greenville"
      },
      {
         "City": " Groves"
      },
      {
         "City": " Haltom City"
      },
      {
         "City": " Harker Heights"
      },
      {
         "City": " Harlingen"
      },
      {
         "City": " Highland Village"
      },
      {
         "City": " Houston"
      },
      {
         "City": " Humble"
      },
      {
         "City": " Huntsville"
      },
      {
         "City": " Hurst"
      },
      {
         "City": " Irving"
      },
      {
         "City": " West Hartford"
      },
      {
         "City": " West Haven"
      },
      {
         "City": " West Torrington"
      },
      {
         "City": " Westport"
      },
      {
         "City": " Wethersfield"
      },
      {
         "City": " Willimantic"
      },
      {
         "City": " Wilton"
      },
      {
         "City": " Windham"
      },
      {
         "City": " Windsor"
      },
      {
         "City": " Wolcott"
      },
      {
         "City": " Ames"
      },
      {
         "City": " Ankeny"
      },
      {
         "City": " Bettendorf"
      },
      {
         "City": " Burlington"
      },
      {
         "City": " Cedar Falls"
      },
      {
         "City": " Cedar Rapids"
      },
      {
         "City": " Clinton"
      },
      {
         "City": " Clive"
      },
      {
         "City": " Coralville"
      },
      {
         "City": " Council Bluffs"
      },
      {
         "City": " Davenport"
      },
      {
         "City": " Des Moines"
      },
      {
         "City": " Dubuque"
      },
      {
         "City": " Fort Dodge"
      },
      {
         "City": " Iowa City"
      },
      {
         "City": " Johnston"
      },
      {
         "City": " Marion"
      },
      {
         "City": " Marshalltown"
      },
      {
         "City": " Mason City"
      },
      {
         "City": " Muscatine"
      },
      {
         "City": " Newton"
      },
      {
         "City": " Ottumwa"
      },
      {
         "City": " Sioux City"
      },
      {
         "City": " Urbandale"
      },
      {
         "City": " Waterloo"
      },
      {
         "City": " West Des Moines"
      },
      {
         "City": " Addison"
      },
      {
         "City": " Algonquin"
      },
      {
         "City": " Alsip"
      },
      {
         "City": " Arlington Heights"
      },
      {
         "City": " Aurora"
      },
      {
         "City": " Bartlett"
      },
      {
         "City": " Batavia"
      },
      {
         "City": " Bellwood"
      },
      {
         "City": " Belvidere"
      },
      {
         "City": " Bensenville"
      },
      {
         "City": " Berwyn"
      },
      {
         "City": " Bloomingdale"
      },
      {
         "City": " Bloomington"
      },
      {
         "City": " Blue Island"
      },
      {
         "City": " Bolingbrook"
      },
      {
         "City": " Bourbonnais"
      },
      {
         "City": " Bradley"
      },
      {
         "City": " Bridgeview"
      },
      {
         "City": " Brookfield"
      },
      {
         "City": " Buffalo Grove"
      },
      {
         "City": " Burbank"
      },
      {
         "City": " Calumet City"
      },
      {
         "City": " Carol Stream"
      },
      {
         "City": " Carpentersville"
      },
      {
         "City": " Cary"
      },
      {
         "City": " Champaign"
      },
      {
         "City": " Chicago"
      },
      {
         "City": " Chicago Heights"
      },
      {
         "City": " Cicero"
      },
      {
         "City": " Country Club Hills"
      },
      {
         "City": " Crest Hill"
      },
      {
         "City": " Crystal Lake"
      },
      {
         "City": " Danville"
      },
      {
         "City": " Darien"
      },
      {
         "City": " DeKalb"
      },
      {
         "City": " Deerfield"
      },
      {
         "City": " Des Plaines"
      },
      {
         "City": " Dixon"
      },
      {
         "City": " Dolton"
      },
      {
         "City": " Downers Grove"
      },
      {
         "City": " East Moline"
      },
      {
         "City": " East Peoria"
      },
      {
         "City": " Elgin"
      },
      {
         "City": " Elk Grove Village"
      },
   ],