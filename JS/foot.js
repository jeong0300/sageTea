//foot
fetch('foot.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('footer').innerHTML = data;
});