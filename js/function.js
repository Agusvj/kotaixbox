window.onscroll = function() {
  let navbar = document.getElementById("nav-color");
  let top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > navbar.offsetTop) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
};


const button = document.getElementById('aparecer');
const div = document.getElementById('infoDesplegable');

button.addEventListener('click', function() {
  if (div.style.display === 'none') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});
