import './video.scss';

export default class Video {
    constructor(containerSelector, videoUrl) {
        this.container = document.querySelector(containerSelector);
        this.videoUrl = videoUrl;
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
    }

    render() {
    this.container.innerHTML = `
      <div class="video">
        <div class="video__wrapper">
          <img 
            src="/assets/video-poster.jpg" 
            alt="Видео" 
            class="video__poster"
          >
          <button class="video__btn" aria-label="Смотреть видео">
            <p class="video__text">Смотреть видео</p>
            <img class="video__icon" src="/assets/play.svg" alt="">
          </button>
        </div>
      </div>
    `;
    }

    setupEventListeners() {
        const btn = this.container.querySelector('.video__btn');
        btn.addEventListener('click', () => this.openVideoModal());
    }

    openVideoModal() {
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
        <div class="video-modal__overlay"></div>
        <div class="video-modal__content">
            <button class="video-modal__close" aria-label="Закрыть">×</button>
            <iframe width="700" height="405" 
            src="https://rutube.ru/play/embed/39474b19943afa6a5505fd179d3d622d/" 
            frameBorder="0" 
            allow="clipboard-write; autoplay" 
            webkitAllowFullScreen 
            mozallowfullscreen 
            allowFullScreen>
            </iframe>
        </div>
    `;

        document.body.appendChild(modal);
        modal.querySelector('.video-modal__close').addEventListener('click', () => modal.remove());
        modal.querySelector('.video-modal__overlay').addEventListener('click', () => modal.remove());
    }
}