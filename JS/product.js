//네비게이션바
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('navbar').innerHTML = data;
});

// 브랜드 로고
const initAnimation = () => {
  const sagelogo = document.querySelector('.sagelogo');
  const tealogo = document.querySelector('.tealogo');

  sagelogo.style.transform = 'translateX(-110%)';
  tealogo.style.transform = 'translateX(110%)';

  // 강제로 리플로우
  sagelogo.offsetHeight;

  sagelogo.style.transform = 'translateX(0)';
  tealogo.style.transform = 'translateX(0)';
};

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
  initAnimation();
});

// 페이지 전환 시 실행
window.addEventListener('pageshow', () => {
  initAnimation();
});

// 로고 사이 원
const initAnimation = () => {
  const sagelogo = document.querySelector('.sagelogo');
  const tealogo = document.querySelector('.tealogo');
  const backCircle = document.querySelector('.backCircle');

  // 스크롤 제한
  document.body.classList.add('no-scroll');

  // 초기 로고 애니메이션
  sagelogo.style.transform = 'translateX(0)';
  tealogo.style.transform = 'translateX(0)';

  // 원의 확대와 배경색 변화
  let scrollTriggered = false;
  window.addEventListener('scroll', () => {
    if (scrollTriggered) return;

    // 원이 화면을 꽉 채우도록 크기 증가
    backCircle.style.transform = 'scale(20)'; // 원을 크게 확장
    backCircle.style.transition = 'transform 1s ease-out'; // 원 확대 애니메이션

    // 배경색 변경 (원 색상과 동일)
    document.body.style.transition = 'background-color 1s ease-out';
    document.body.style.backgroundColor = '#143321'; // 원의 색상으로 변경

    scrollTriggered = true;

    // 애니메이션 완료 후 실행
    setTimeout(() => {
      // 이미지 변경
      sagelogo.src = 'path_to_new_image_sage.png';
      tealogo.src = 'path_to_new_image_tea.png';

      // 고정 위치 스타일 적용
      sagelogo.classList.remove('sagelogo');
      tealogo.classList.remove('tealogo');
      sagelogo.classList.add('fixedSage');
      tealogo.classList.add('fixedTea');

      // 원 제거
      backCircle.style.display = 'none';

      // 스크롤 허용
      document.body.classList.remove('no-scroll');
    }, 1000); // 애니메이션 시간이 끝난 후
  });
};

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
  initAnimation();
});


//foot
fetch('foot.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('footer').innerHTML = data;
});