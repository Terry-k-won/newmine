document.querySelectorAll('.imagetext-container').forEach(container => {
  container.addEventListener('click', function() {
    container.classList.toggle('active');
    document.querySelector('.intro-ment').classList.toggle('activeEffect');
    document.querySelector('.highlight').classList.toggle('activeHighlight');
  });
});