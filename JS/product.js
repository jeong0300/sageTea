//네비게이션바
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('navbar').innerHTML = data;
});

//foot
fetch('foot.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('footer').innerHTML = data;
});