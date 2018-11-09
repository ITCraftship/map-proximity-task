let api  = `https://api.openbrewerydb.org/breweries`;

function fetchData(callback) {
  return fetch(api).then((resp) => {
    return resp.json();
  })
  .then(callback)
  .catch(err => {
    console.error('Problems when fetching data: ', err);
  })
}


// Map parameters
let map;
const startZoom = 8;
const startCordinates = { 
  lat: 33.524521, 
  lng: -86.774322
};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: startCordinates,
    zoom: startZoom
  });
};

// fetching of user data;
fetchData((data) => {
  console.log(data, map)
});