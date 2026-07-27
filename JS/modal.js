// Модальное окно
const modal = document.getElementById('bookingModal');
const bookBtn = document.querySelector('.hero_btn');
const closeBtn = document.querySelector('.modal_close');

if (modal && bookBtn && closeBtn) {
    // Открыть окно
    bookBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Закрыть окно
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрыть при клике вне окна
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
} else {
    console.log('Элементы не найдены:');
    console.log('modal:', modal);
    console.log('bookBtn:', bookBtn);
    console.log('closeBtn:', closeBtn);
}

// В файле modal.js добавьте в уже существующий код:

const modalBtn = document.querySelector('.modal_btn');

if (modalBtn) {
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}