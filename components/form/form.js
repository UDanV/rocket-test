import IMask from 'imask';
import './form.scss'

export class ModalForm {
    constructor() {
        this.modalHTML = `
      <div class="modal-overlay js-modal-overlay">
        <div class="modal">
          <div class="modal__container">
              <h2 class="modal__title">Оставьте заявку</h2>
              <button class="modal__close js-modal-close">×</button>
          </div>  
          
          <form class="js-order-form">
            <div class="form-group">
              <input type="text" id="name" class="form-input js-name-input" placeholder="Иван Иванов">
              <div class="error-message js-name-error">Пожалуйста, введите ваше имя</div>
            </div>
            
            <div class="form-group">
              <input type="tel" id="phone" class="form-input js-phone-input" placeholder="+7 (___) ___-__-__">
              <div class="error-message js-phone-error">Пожалуйста, введите корректный номер телефона</div>
            </div>
            
            <div class="checkbox-group">
              <input type="checkbox" id="agree" class="checkbox-input js-agree-input" required>
              <label for="agree" class="checkbox-label">
                Я соглашаюсь на обработку персональных данных
              </label>
              <button type="submit" class="submit-btn js-submit-btn" disabled>Отправить заявку</button>
            </div>
            <div class="error-message js-agree-error">Необходимо ваше согласие</div>
          </form>
        </div>
      </div>
    `;

        this.init();
    }

    init() {
        document.body.insertAdjacentHTML('beforeend', this.modalHTML);
        this.setupPhoneMask();
        this.setupEventListeners();
    }

    setupPhoneMask() {
        const phoneInput = document.querySelector('.js-phone-input');
        this.phoneMask = IMask(phoneInput, {
            mask: '+{7} (000) 000-00-00',
            lazy: false,
            placeholderChar: '_'
        });
    }

    setupEventListeners() {
        document.querySelector('.js-modal-close').addEventListener('click', () => this.closeModal());
        document.querySelector('.js-modal-overlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) this.closeModal();
        });

        const nameInput = document.querySelector('.js-name-input');
        const phoneInput = document.querySelector('.js-phone-input');
        const agreeInput = document.querySelector('.js-agree-input');
        const submitBtn = document.querySelector('.js-submit-btn');

        [nameInput, phoneInput, agreeInput].forEach(input => {
            input.addEventListener('input', () => this.validateForm());
        });

        document.querySelector('.js-order-form').addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.submitForm();
            }
        });
    }

    validateForm() {
        let isValid = true;
        const name = document.querySelector('.js-name-input').value.trim();
        const phone = document.querySelector('.js-phone-input').value;
        const agree = document.querySelector('.js-agree-input').checked;

        if (name.length < 2) {
            document.querySelector('.js-name-error').style.display = 'block';
            document.querySelector('.js-name-input').classList.add('error');
            isValid = false;
        } else {
            document.querySelector('.js-name-error').style.display = 'none';
            document.querySelector('.js-name-input').classList.remove('error');
        }

        if (!this.phoneMask.masked.isComplete) {
            document.querySelector('.js-phone-error').style.display = 'block';
            document.querySelector('.js-phone-input').classList.add('error');
            isValid = false;
        } else {
            document.querySelector('.js-phone-error').style.display = 'none';
            document.querySelector('.js-phone-input').classList.remove('error');
        }

        if (!agree) {
            document.querySelector('.js-agree-error').style.display = 'block';
            isValid = false;
        } else {
            document.querySelector('.js-agree-error').style.display = 'none';
        }

        document.querySelector('.js-submit-btn').disabled = !isValid;

        return isValid;
    }

    async submitForm() {
        const formData = {
            name: document.querySelector('.js-name-input').value.trim(),
            phone: document.querySelector('.js-phone-input').value,
            agree: document.querySelector('.js-agree-input').checked
        };

        try {
            document.querySelector('.js-submit-btn').disabled = true;
            document.querySelector('.js-submit-btn').textContent = 'Отправка...';

            const response = await fetch('/php/sendMail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    name: formData.name,
                    phone: formData.phone
                })
            });

            const result = await response.json();

            if (result.success) {
                alert(result.message || 'Спасибо! Ваша заявка принята.');
                this.closeModal();
                this.resetForm();
            } else {
                alert(result.message || 'Произошла ошибка при отправке формы.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
        } finally {
            document.querySelector('.js-submit-btn').disabled = false;
            document.querySelector('.js-submit-btn').textContent = 'Отправить заявку';
        }
    }

    openModal()
    {
        document.querySelector('.js-modal-overlay').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.js-modal-overlay').classList.add('active');
        }, 10);
    }

    closeModal()
    {
        document.querySelector('.js-modal-overlay').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.js-modal-overlay').style.display = 'none';
        }, 300);
    }

    resetForm()
    {
        document.querySelector('.js-order-form').reset();
        this.phoneMask.updateValue();
        document.querySelector('.js-submit-btn').disabled = true;
    }
}