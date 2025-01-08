// 네비게이션바 로드
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

// 원래 로고 애니메이션 (페이지 로드 시 실행)
const logoAnimation = () => {
  const sagelogo = document.querySelector('.sagelogo');
  const tealogo = document.querySelector('.tealogo');

  sagelogo.style.transform = 'translateX(-110%)';
  tealogo.style.transform = 'translateX(110%)';

  // 강제로 리플로우
  sagelogo.offsetHeight;

  sagelogo.style.transform = 'translateX(0)';
  tealogo.style.transform = 'translateX(0)';
};

// 원 확대 및 배경색 변경 (스크롤 시 실행)
const scrollAnimation = () => {
  const sagelogo = document.querySelector('.sagelogo');
  const tealogo = document.querySelector('.tealogo');
  const backCircle = document.querySelector('.backCircle');

  // 스크롤 제한
  document.body.classList.add('no-scroll'); // 스크롤 제한

  // 원이 화면을 꽉 채우도록 크기 증가
  backCircle.style.transform = 'scale(20)'; // 원을 크게 확장
  backCircle.style.transition = 'transform 1s ease-out'; // 원 확대 애니메이션

  // 배경색 변경 (원 색상과 동일)
  document.body.style.transition = 'background-color 1s ease-out';
  document.body.style.backgroundColor = '#143321'; // 원의 색상으로 변경

  // 애니메이션 완료 후 실행
  setTimeout(() => {
    // 이미지 변경 및 추가
    sagelogo.src = '../images/product_sage(white).png';
    tealogo.src = '../images/product_tea(white).png';

    // 고정 위치 스타일 적용
    sagelogo.classList.remove('sagelogo');
    tealogo.classList.remove('tealogo');
    sagelogo.classList.add('changeSage');
    tealogo.classList.add('changeTea');

    // 원 제거
    backCircle.style.display = 'none';

    // 스크롤 허용
    document.body.classList.remove('no-scroll');
  }, 1000); // 애니메이션 시간이 끝난 후
};

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
  logoAnimation(); // 페이지 로드 시 로고 애니메이션 실행

  // 페이지가 로드되면 원은 커지지 않도록 초기화
  let scrollTriggered = false;

  window.addEventListener('scroll', () => {
    if (scrollTriggered) return; // 이미 애니메이션이 실행되면 다시 실행되지 않도록

    scrollTriggered = true; // 스크롤을 한 번만 트리거
    scrollAnimation(); // 스크롤 애니메이션 실행
  });
});

// 페이지 전환 시 실행
window.addEventListener('pageshow', () => {
  logoAnimation(); // 페이지 전환 시에도 로고 애니메이션 실행
});

// foot 로드
fetch('foot.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
