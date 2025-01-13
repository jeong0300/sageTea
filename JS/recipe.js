// nav
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('navbar').innerHTML = data;
});

// recipe
const onClickImg = (type) =>{
  // Bootstrap 모달 객체 생성
  let modal = new bootstrap.Modal(document.getElementById(type), {
    keyboard: false
  });
  modal.show();

}

// recipe 떠오르게 하기
document.addEventListener("DOMContentLoaded", () => {
  const recipeMenus = document.querySelectorAll(".recipeImgs .recipeMenu");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const menu = entry.target;
        const images = menu.querySelectorAll(".recipeImg");

        // recipeMenu 내의 이미지 순차적으로 활성화
        images.forEach((image, index) => {
          setTimeout(() => {
            image.classList.add("active"); // 이미지에 active 클래스 추가
          }, index * 300); // 각 이미지에 딜레이 적용
        });

        // 한 번만 동작하도록 observer에서 해제
        observer.unobserve(menu);
      }
    });
  }, {
    threshold: 0.1 // 10% 이상 보일 때 트리거
  });

  recipeMenus.forEach((menu) => observer.observe(menu));
});


// foot
fetch('foot.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('footer').innerHTML = data;
});

