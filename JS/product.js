// 네비게이션바 로드
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
});


// 원래 로고 애니메이션
const logoAnimation = () => {
  const sagelogo = document.querySelector('.sagelogo');
  const tealogo = document.querySelector('.tealogo');
  

  if (sagelogo && tealogo) {
    sagelogo.style.transform = 'translateX(0)';
    tealogo.style.transform = 'translateX(0)';
  }

};

// 바뀐 로고 애니메이션
const changeLogoAnimation = () => {
  const changeSage = document.querySelector('.changeSage');
  const changeTea = document.querySelector('.changeTea');
  const lineTop = document.querySelector('.lineTop');
  const lineBottom = document.querySelector('.lineBottom');

  if (changeSage && changeTea) {
    changeSage.style.transform = 'translateX(0)';
    changeTea.style.transform = 'translateX(0)';
    lineTop.style.transform = 'translateX(0)';
    lineBottom.style.transform = 'translateX(0)';
    changeSage.style.opacity = 1;
    changeTea.style.opacity = 1;
    lineTop.style.opacity = 1;
    lineBottom.style.opacity = 1;
  }
};

// 스크롤 애니메이션 중에 로고 전환
const scrollAnimation = () => {
  const backCircle = document.querySelector('.backCircle');
  const sagelogo = document.querySelector('.sagelogo');
  const tealogo = document.querySelector('.tealogo');

  if (backCircle) {
    backCircle.style.transform = 'scale(10)';
    backCircle.style.transition = 'transform 1s ease-out';
  }

  document.body.style.transition = 'background-color 1s ease-out';
  document.body.style.backgroundColor = '#143321';
  document.body.classList.add('no-scroll');

  setTimeout(() => {
    // 원래 로고 사라짐
    if (sagelogo && tealogo) {
      sagelogo.style.opacity = 0;
      tealogo.style.opacity = 0;
    }

    // 변경된 로고 나타남
    setTimeout(() => {
      const teaMenu = document.querySelector('.teaMenu');
      teaMenu.style.marginTop = '120px';
      changeLogoAnimation();

      // 애니메이션 종료 후 스크롤 허용
      setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 1000); // changeLogoAnimation과 동일한 시간
    }, 1000); // backCircle 애니메이션 시간
  }, 1000); // 초기 애니메이션 시간
};

// 페이지가 처음 로드될 때 애니메이션을 실행
document.addEventListener('DOMContentLoaded', () => {
  if (!sessionStorage.getItem('loaded')) {

    sessionStorage.setItem('loaded', 'true');
    logoAnimation();

  } else {
    // 이미 로드된 경우에는 스크롤 위치만 조정
    window.scrollTo(0, 0);
  }
});

// 페이지 전환 시 로고 애니메이션 재실행
window.addEventListener('pageshow', () => {

  window.scrollTo(0, 0); 

  // 애니메이션 실행
  logoAnimation();

  let scrollTriggered = false;
  let disableScroll = false;

  window.addEventListener('scroll', () => {
    if (disableScroll) return;

    const scrollThreshold = 1;
    if (!scrollTriggered && window.scrollY > scrollThreshold) {
      scrollTriggered = true;
      disableScroll = true;

      scrollAnimation().then(() => {
        disableScroll = false;
      });
    }
  });
});

// scroll down
window.addEventListener('scroll', function() {
  const downLine = document.querySelector('.downLine');
  const scrollDown = document.querySelector('.scrollDown');
  
  const scrollPosition = window.scrollY; // 페이지의 스크롤 위치
  const scrollDownPosition = scrollDown.getBoundingClientRect().top; // .scrollDown 요소의 화면에서의 상단 위치
  const windowHeight = window.innerHeight; // 뷰포트의 높이
  
  // .scrollDown 요소의 top이 화면의 50%를 지날 때
  if (scrollDownPosition <= windowHeight / 1) {
    downLine.style.height = '200px';
  } else {
    downLine.style.height = '0px';
  }
});

// 제품
let isExpanded = false; // 확장 상태를 추적하는 변수

window.addEventListener('scroll', function () {
  const teaProduct = document.querySelector('.teaProduct');
  const teaProductTop = teaProduct.getBoundingClientRect().top + window.scrollY; // teaProduct의 화면 상단 위치
  const photoMain = document.querySelector('.photo-main');
  const photo2 = document.querySelector('.photo2');

  if (!isExpanded && window.scrollY >= teaProductTop) {
    // 스크롤에 따른 너비 증가 계산
    let scrollOffset = window.scrollY - teaProductTop; // 스크롤 오프셋
    let maxWidth = 30; // 최대 너비
    let calculatedWidth = Math.min(maxWidth, scrollOffset / 15); // 증가 속도

    // 너비 설정
    photoMain.style.transition = 'width 0.5s ease-out';
    photo2.style.transition = 'width 0.5s ease-out';

    // 점진적 너비 증가
    photoMain.style.width = `${calculatedWidth}vw`;
    photo2.style.width = `${calculatedWidth}vw`;

    // 너비가 최대치에 도달하면 고정
    if (calculatedWidth >= maxWidth) {
      isExpanded = true; // 확장 완료 상태
    }
  } else if (isExpanded) {
    // 확장된 상태에서 너비를 유지
    photoMain.style.width = '100vw';
    photo2.style.width = '100vw';
    photo2.style.overflow = 'visible';
  }
});

// 이미지 드래그 방지
document.addEventListener('DOMContentLoaded', function () {
  const teaImages = document.querySelectorAll('.teaImg');

  teaImages.forEach((img) => {
    img.addEventListener('dragstart', function (e) {
      e.preventDefault(); 
    });
  });
});

// footer 로드
fetch('foot.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  }
);