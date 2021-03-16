/* ==========Map========== */
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

const mymap = L.map('mapid', options).setView([-2.5086959,-44.3027689], 15);

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

/* ==========Pop  up from Map========== */

L.marker([-2.5086959,-44.3027689], {icon})
.addTo(mymap)


/* ==========Image gallery========== */
function selectImage(event){

  
  const button = event.currentTarget;
  console.log(button.children)
  
  // 1. Remover todas as classes active;
  const buttons =  document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass)
  
  function removeActiveClass(button){
    button.classList.remove("active");
  }
  
  // 2. Selecionar a imagem clicada;
  const image = button.children[0]
  
  const imageContainer = document.querySelector(".kennel-details > img");
  
  // 3. Atualizar o container de imagem;
  imageContainer.src = image.src;

  // 4. Adicionar novamente a classe active para o botão clicado
  button.classList.add("active")
}