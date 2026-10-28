let stores = [
    { name: "Alberto Store Karachi", city: "Karachi", address: "Tariq Road, Karachi", phone: "021-1234567", service: "Repair", lat: 24.8607, lng: 67.0011 },
    { name: "Alberto Store Lahore", city: "Lahore", address: "MM Alam Road, Lahore", phone: "042-1234567", service: "Retail", lat: 31.5204, lng: 74.3587 },
    { name: "Alberto Store Islamabad", city: "Islamabad", address: "Blue Area, Islamabad", phone: "051-1234567", service: "Appraisal", lat: 33.6844, lng: 73.0479 },
    { name: "Alberto Store Rawalpindi", city: "Rawalpindi", address: "Saddar, Rawalpindi", phone: "051-9876543", service: "Repair", lat: 33.5651, lng: 73.0169 },
    { name: "Alberto Store Faisalabad", city: "Faisalabad", address: "D-Ground, Faisalabad", phone: "041-1234567", service: "Retail", lat: 31.4187, lng: 73.0791 },
    { name: "Alberto Store Multan", city: "Multan", address: "Bosan Road, Multan", phone: "061-1234567", service: "Appraisal", lat: 30.1575, lng: 71.5249 }
];

function showStores(list) {
    let box = document.getElementById("stores");
    box.innerHTML = "";

    if (list.length == 0) {
        box.innerHTML = "<p>Koi store nahi mila.</p>";
        return;
    }

    for (let i = 0; i < list.length; i++) {
        let s = list[i];
        box.innerHTML = box.innerHTML + 
        "<div class='store'>" +
            "<h3>" + s.name + "</h3>" +
            "<p>City: " + s.city + "</p>" +
            "<p>Address: " + s.address + "</p>" +
            "<p>Phone: " + s.phone + "</p>" +
            "<p>Service: " + s.service + "</p>" +
            "<button onclick='showMap(" + s.lat + "," + s.lng + ")'>View Map</button>" +
        "</div>";
    }
}

function loadDropdowns() {
    let citySelect = document.getElementById("city");
    let serviceSelect = document.getElementById("service");

    let cities = [];
    let services = [];

    for (let i = 0; i < stores.length; i++) {
        let city = stores[i].city;
        let service = stores[i].service;

        // city 
        let cityFound = false;
        for(let j=0; j < cities.length; j++){
            if(cities[j] == city){ cityFound = true; }
        }
        if(cityFound == false){
            cities.push(city);
            citySelect.innerHTML = citySelect.innerHTML + "<option>" + city + "</option>";
        }

        // service 
        let serviceFound = false;
        for(let k=0; k < services.length; k++){
            if(services[k] == service){ serviceFound = true; }
        }
        if(serviceFound == false){
            services.push(service);
            serviceSelect.innerHTML = serviceSelect.innerHTML + "<option>" + service + "</option>";
        }
    }
}

function searchStore() {
    let search = document.getElementById("search").value;
    search = search.toLowerCase();
    let filtered = [];

    for (let i = 0; i < stores.length; i++) {
        let city = stores[i].city.toLowerCase();
        let name = stores[i].name.toLowerCase();

        if (city.includes(search) || name.includes(search)) {
            filtered.push(stores[i]);
        }
    }
    showStores(filtered);
}

function filterStore() {
    let selectedCity = document.getElementById("city").value;
    let selectedService = document.getElementById("service").value;
    let filtered = [];

    for (let i = 0; i < stores.length; i++) {
        if (selectedCity == "all" || stores[i].city == selectedCity) {
            if (selectedService == "all" || stores[i].service == selectedService) {
                filtered.push(stores[i]);
            }
        }
    }
    showStores(filtered);
}

function showMap(lat, lng) {
    let map = document.getElementById("map");
    map.src = "https://www.google.com/maps?q=" + lat + "," + lng + "&output=embed";
}

function myLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos){
            let lat = pos.coords.latitude;
            let lng = pos.coords.longitude;
            showMap(lat, lng);
        });
    } else {
        alert("Geolocation not supported");
    }
}

showStores(stores);
loadDropdowns();