import Swiper from "swiper";
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import './cards.scss';
import {ModalForm} from "../form/form.js";

export default class Cards {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.modal = new ModalForm();
        this.init();
    }

    init() {
        this.render();
        this.setupModal();

        document.addEventListener("DOMContentLoaded", () => {
            new Swiper('.swiper', {
                slidesPerView: 1,
                modules: [Pagination],
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'bullets',
                },
                loop: true,
            });
        });
    }

    setupModal() {
        this.container.addEventListener('click', (e) => {
            if (e.target.classList.contains('cards__button')) {
                this.modal.openModal();
            }
        });
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
            <div class="cards__wrapper--mobileBadges">
                <p class="cards__sale">- 29%</p>
                <p class="cards__label">Товар дня</p>
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
          <div class="cards__container">
              <div class="cards__wrapper--wide">
                <div class="cards__wrapper--name">
                    <p class="cards__wrapper--label">Голубика лесная, 200 г</p>
                    <div class="cards__wrapper--rate">
                        <img src="/assets/rate.svg" alt="">
                        <img src="/assets/watch.svg" alt="">
                    </div>
                </div>
                <div class="cards__wrapper--mobileBadges">
                    <p class="cards__sale" data-bg="pink">- 31%</p>
                    <p class="cards__label" data-bg="blue">Распродажа</p>
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
                <div class="cards__wrapper--mobileBadges">
                    <p class="cards__label" data-bg="violet">Хит</p>
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
          <div class="cards__layout">
              <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="cards__wrapper--two-sized">
                            <div class="cards__wrapper--name">
                                <div class="cards__wrapper--badges">
                                    <p class="cards__label">Товар дня</p>
                                    <p class="cards__sale">- 29%</p>
                                </div>
                                <div class="cards__wrapper--rate">
                                    <img src="/assets/rate.svg" alt="">
                                    <img src="/assets/watch.svg" alt="">
                                </div>
                            </div>
                            <div class="cards__wrapper--info">        
                                <p class="cards__wrapper--label">Попкорн солёный, для СВЧ-печи, 120 г</p>
                                <p class="cards__price">160 ₽</p>
                                <button class="cards__button">Оставить заявку</button>
                            </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="cards__wrapper--two-sized" data-img="icecream">
                            <div class="cards__wrapper--name">
                                <div class="cards__wrapper--badges">
                                    <p class="cards__label" data-bg="violet">Хит</p>
                                </div>
                                <div class="cards__wrapper--rate">
                                    <img src="/assets/rate.svg" alt="">
                                    <img src="/assets/watch.svg" alt="">
                                </div>
                            </div>
                            <div class="cards__wrapper--info">        
                                <p class="cards__wrapper--label">Эскимо с малиной, <br>100 г</p>
                                <p class="cards__price">190 ₽</p>
                                <button class="cards__button">Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
              <div class="cards__wrapper--two-sized">
                <div class="cards__wrapper--name">
                    <div class="cards__wrapper--badges">
                        <p class="cards__label">Товар дня</p>
                        <p class="cards__sale">- 29%</p>
                    </div>
                    <div class="cards__wrapper--rate">
                        <img src="/assets/rate.svg" alt="">
                        <img src="/assets/watch.svg" alt="">
                    </div>
                </div>
                <div class="cards__wrapper--info">        
                    <p class="cards__wrapper--label">Попкорн солёный, для СВЧ-печи, 120 г</p>
                    <p class="cards__price">160 ₽</p>
                    <button class="cards__button">Оставить заявку</button>
                </div>
              </div>
              <div class="cards__wrapper--two-sized" data-img="icecream">
                <div class="cards__wrapper--name">
                    <div class="cards__wrapper--badges">
                        <p class="cards__label" data-bg="violet">Хит</p>
                    </div>
                    <div class="cards__wrapper--rate">
                        <img src="/assets/rate.svg" alt="">
                        <img src="/assets/watch.svg" alt="">
                    </div>
                </div>
                <div class="cards__wrapper--info">        
                    <p class="cards__wrapper--label">Эскимо с малиной, <br>100 г</p>
                    <p class="cards__price">190 ₽</p>
                    <button class="cards__button">Оставить заявку</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    `;
    }
}