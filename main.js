// TODO
// Use the data from the openbrewerydb API to display the breweries on the google maps.
// Find a solution for grouping nearby breweries markers together
// If the user clicks on the group then there we generate a list of all items from the selected group (use angular)
// If we select an item from the list then we zoom into brewerie marker.
// And for last if we click on the marker then we show a popup with the name of the bar.

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
let googleInsance;
const startZoom = 8;
const startCordinates = { 
  lat: 33.524521, 
  lng: -86.774322
};

function initMap() {
  googleInsance = google;
  map = new google.maps.Map(document.getElementById('map'), {
    center: startCordinates,
    zoom: startZoom
  });
};


angular.module('mapApp', [])
  .controller('MarkersListController', function($scope) {

  // fetching of user data;
  fetchData((data) => {
    console.log('Loaction data', data);
  });
});
