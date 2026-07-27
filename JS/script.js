// Горизонтальный скроллинг для отзывов
const scrollWrapper = document.querySelector('.reviews_scroll_wrapper');

if (scrollWrapper) {
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollWrapper.style.cursor = 'grabbing';
        startX = e.pageX - scrollWrapper.offsetLeft;
        scrollLeft = scrollWrapper.scrollLeft;
    });

    scrollWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        scrollWrapper.style.cursor = 'grab';
    });

    scrollWrapper.addEventListener('mouseup', () => {
        isDown = false;
        scrollWrapper.style.cursor = 'grab';
    });

    scrollWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollWrapper.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollWrapper.scrollLeft = scrollLeft - walk;
    });
}