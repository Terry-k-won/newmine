document.querySelectorAll('.imagetext-container').forEach(container => {
  container.addEventListener('click', function() {
    container.classList.toggle('active');
    document.querySelectorAll('.intro-ment').forEach(function(el) {
      el.classList.toggle('activeIntro');
    });
    document.querySelectorAll('.highlight').forEach(function(el) {
      el.classList.toggle('activeHighlight');
    });
  });
});