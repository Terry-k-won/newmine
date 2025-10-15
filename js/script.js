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

const buttons = [...document.querySelectorAll(".third-page button")];
buttons.forEach(button => {
  button.addEventListener("click", function() {
    button.classList.toggle("following");
    button.textContent = button.classList.contains("following") ? "Unfollow" : "Follow";
  })
});