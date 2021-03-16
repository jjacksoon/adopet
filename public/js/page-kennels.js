/* ==========Map========== */
const mymap = L.map('mapid').setView([-2.5086959,-44.3027689], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamphY2tzb29uIiwiYSI6ImNrazdidzN4ajBjYmQycW50YnlrcDFibGUifQ.ItajEg6SJTZuB-xHPtz6xg'
}).addTo(mymap);

/* ==========Icon from Map========== */
const icon = L.icon({
  iconUrl: '/img/map-icon.svg',
  iconSize: [58,68],
  iconAnchor:[29,68],
  popupAnchor:[170,2]
});


function addMarker({id, name, latitude, longitude}){
  /* ==========Pop  up from Map========== */
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 210,
    minHeight: 210
  }).setContent(`${name} <a href="/kennel?id=${id}"><img src="/img/arrow-white.svg"></a>`);

  L.marker([latitude, longitude], {icon})
  .addTo(mymap)
  .bindPopup(popup);
}

const kennelsSpan = document.querySelectorAll('.kennels span');
kennelsSpan.forEach((span)=>{
  const kennel = {
    id: span.dataset.id,
    name: span.dataset.name,
    latitude: span.dataset.latitude,
    longitude: span.dataset.longitude
  }
  addMarker(kennel)
})
