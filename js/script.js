document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.imagetext-container');
    const imageElement = container.querySelector('.image-element');

    imageElement.addEventListener('click', function() {
        // imagetext-container에 'active' 클래스를 토글하여 CSS 변경을 적용
        container.classList.toggle('active');
    });
});