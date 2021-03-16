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
});

/*==========Create and Add marker========== */

let marker;

mymap.on('click',function(event){
  const latitude = event.latlng.lat;
  const longitude = event.latlng.lng;

  document.querySelector('[name=latitude]').value = latitude;
  document.querySelector('[name=longitude]').value = longitude;

  //Remove icon
  marker && mymap.removeLayer(marker)

  // add icon layer
  marker = L.marker([latitude, longitude], {icon})
  .addTo(mymap);
})


/*==========Adicionar campo de fotos========== */

function addPhotoField(){
  // 1.Pegar o container de fotos #images;

  const container = document.querySelector('#images');

  // 2.Pegar o container para duplicação .new-upload;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  // 3.Realizar a duplicação da última imagem adicionada;

  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  // 4.Verificar se o campo está vazio para não adicionar novo campo de imagens
  const input = newFieldContainer.children[0];
    if (input.value ==''){
      return
    }

  // 5.Limpar o campo antes de adicionar ao container #images
  input.value = '';

  // 6.Adicionar a duplicação ao container de #images

  container.appendChild(newFieldContainer);
}

/*==========Excluir campo de fotos========== */
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if(fieldsContainer.length <= 1){
    // Limpar o valor do campo
    span.parentNode.children[0].value = '';
    return
  }
  // Deletar o campo
  span.parentNode.remove();
}

/*==========Alterar funcionalidade do botão SIM/NÃO========== */

function toggleSelect(event){
  // 1.Pegar o botão clicado
  
  // 1.Retirar a classe active dos botões
  document.querySelectorAll('.button-select button')
  .forEach((button) => button.classList.remove('active'))
  
  // 2.Colocar a classe .active nesse botão clicado
  const button = event.currentTarget
  
  button.classList.add('active');
  
  // 3.Atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"')
  
  // 4.Verificar se é SIM ou NÃO
  input.value = button.dataset.value
  
}