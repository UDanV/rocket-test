import './cards.scss';

export default class Cards {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.container.innerHTML = `
      <div class="cards">
        <div class="cards__wrapper">
          <div class="cards__wrapper--long">
            <div class="cards__wrapper--name">
                <p class="cards__wrapper--label">Горох в стручках, 1 кг</p>
                <div class="cards__wrapper--rate">
                    <img src="/assets/rate.svg" alt="">
                    <img src="/assets/watch.svg" alt="">
                </div>
            </div>
            <div class="cards__wrapper--actions">
                <div class="cards__wrapper--badges">
                    <p class="cards__sale">- 29%</p>
                    <p class="cards__label">Товар дня</p>
                </div>
                <div class="cards__wrapper--price">
                    <p class="cards__price">570 ₽</p>
                    <button class="cards__button">Оставить заявку</button>
                </div>
            </div>
          </div>
          <div class="cards__wrapper--wide">
            <div class="cards__wrapper--name">
                <p class="cards__wrapper--label">Голубика лесная, 200 г</p>
                <div class="cards__wrapper--rate">
                    <img src="/assets/rate.svg" alt="">
                    <img src="/assets/watch.svg" alt="">
                </div>
            </div>
            <div class="cards__wrapper--actions">
                <div class="cards__wrapper--badges">
                    <p class="cards__sale" data-bg="pink">- 31%</p>
                    <p class="cards__label" data-bg="blue">Распродажа</p>
                </div>
                <div class="cards__wrapper--price">
                    <p class="cards__price">140 ₽</p>
                    <button class="cards__button">Оставить заявку</button>
                </div>
            </div>
          </div>
          <div class="cards__wrapper--wide" data-img="carrot">
            <div class="cards__wrapper--name">
                <p class="cards__wrapper--label">Морковь мытая, 1 кг</p>
                <div class="cards__wrapper--rate">
                    <img src="/assets/rate.svg" alt="">
                    <img src="/assets/watch.svg" alt="">
                </div>
            </div>
            <div class="cards__wrapper--actions">
                <div class="cards__wrapper--badges">
                    <p class="cards__label" data-bg="violet">Хит</p>
                </div>
                <div class="cards__wrapper--price">
                    <p class="cards__price">140 ₽</p>
                    <button class="cards__button">Оставить заявку</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    setupEventListeners() {
        const btn = this.container.querySelector('.cards__btn');
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