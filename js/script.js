document.querySelectorAll('.imagetext-container').forEach(container => {
  container.addEventListener('click', function() {
    container.classList.toggle('active');
  });
});