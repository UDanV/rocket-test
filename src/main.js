import '../scss/main.scss'
import Video from "../components/video/video.js";
import Cards from "../components/cards/cards.js";

document.querySelector('#app').innerHTML = `
  <div class="video-container">
    <div id="video-container"></div>
  </div>
  <div class="cards-container">
    <div id="cards-container"></div>
  </div>
`

new Video(
    '#video-container',
    'https://rutube.ru/video/39474b19943afa6a5505fd179d3d622d/?r=wd'
)

new Cards (
    '#cards-container'
)