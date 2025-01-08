//네비게이션바
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('navbar').innerHTML = data;
});

// 스크롤 시 네비게이션 색상 변경
document.addEventListener("scroll", () => {
  const backColors = document.querySelectorAll('.backColor');

  backColors.forEach((backColor) => {
    if (window.scrollY > 0) {
      backColor.style.backgroundColor = "white";
    } else {
      backColor.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
  });
});
