

let myMap;
let position = { lat: 56.861644, lng: 53.212884 };

function initMap() {
    myMap = new google.maps.Map(document.getElementById("map"), {
      center: position,
      zoom: 16,
    });

    new google.maps.Marker({
      position: position,
      map: myMap,
      title: "MVEU",
    });
  }

