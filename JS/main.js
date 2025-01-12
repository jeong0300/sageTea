
// 제품 이미지 삽입
document.addEventListener("DOMContentLoaded", () => {
  const teaSections = [
    {
      title: "caffeine-free",
      teas: [
        { src: "../images/caffeine-free(히비스커스).webp", alt: "히비스커스블렌드", name: "히비스커스블렌드" },
        { src: "../images/caffeine-free(캐모마일).webp", alt: "캐모마일블렌드", name: "캐모마일블렌드" },
        { src: "../images/caffeine-free(루이보스).webp", alt: "루이보스블렌드", name: "루이보스블렌드" },
        { src: "../images/caffeine-free(레몬).webp", alt: "레몬머틀블렌드", name: "레몬머틀블렌드" },
        { src: "../images/caffeine-free(민트).webp", alt: "민트블렌드", name: "민트블렌드" },
        { src: "../images/caffeine-free(라벤더).webp", alt: "라벤더블렌드", name: "라벤더블렌드" },
      ]
    },
    {
      title: "blending",
      teas: [
        { src: "../images/blending(3시의 요정).jpg", alt: "3시의 요정", name: "3시의 요정" },
        { src: "../images/blending(다이너마이트).jpg", alt: "다이너마이트티", name: "다이너마이트티" },
        { src: "../images/blending(레드와인).jpg", alt: "레드와인의 향기", name: "레드와인의 향기" },
        { src: "../images/blending(마살라차).jpg", alt: "마살라차이라이트", name: "마살라차이라이트" },
        { src: "../images/blending(블루스카이).jpg", alt: "블루스카이", name: "블루스카이" },
        { src: "../images/blending(웨딩드레스).jpg", alt: "웨딩드레스티", name: "웨딩드레스티" },
        { src: "../images/blending(잉글리시).jpg", alt: "잉글리쉬브렉퍼스트", name: "잉글리쉬브렉퍼스트" },
        { src: "../images/blending(코리안).jpg", alt: "코리안브렉퍼스트", name: "코리안브렉퍼스트" },
        { src: "../images/blending(코블밀크).jpg", alt: "코블밀크인퍼스트", name: "코블밀크인퍼스트" },
        { src: "../images/blending(하루의 저녁).jpg", alt: "하루의 저녁", name: "하루의 저녁" },
        { src: "../images/blending(혼자있는시간).jpg", alt: "혼자있는 시간", name: "혼자있는 시간" },
      ]
    },
    {
      title: "flavor",
      teas: [
        { src: "../images/flavor(다크초코향홍차).jpg", alt: "다크초코향 홍차", name: "다크초코향 홍초" },
        { src: "../images/flavor(동백꽃향홍차).jpg", alt: "동백꽃향 홍차", name: "동백꽃향 홍차" },
        { src: "../images/flavor(딸기향홍차).jpg", alt: "딸기향 홍차", name: "딸기향 홍차" },
        { src: "../images/flavor(배향홍차).jpg", alt: "배향 홍차", name: "배향 홍차" },
        { src: "../images/flavor(복숭아향홍차).jpg", alt: "복숭아향 홍차", name: "복숭아향 홍차" },
        { src: "../images/flavor(샤인머스켓향홍차).jpg", alt: "샤인머스켓향 홍차", name: "샤인머스켓향 홍차" },
        { src: "../images/flavor(자몽허니향홍차).jpg", alt: "자몽허니향 홍차", name: "자몽허니향 홍차" },
        { src: "../images/flavor(애플향홍차).jpg", alt: "애플향 홍차", name: "애플향 홍차" },
        { src: "../images/flavor(캐러멜향홍차).jpg", alt: "캐러멜향 홍차", name: "애플향 홍차" },
      ]
    },
    {
      title: "milkTea",
      teas: [
        { src: "../images/milkTea(밀크티용홍차베이스).jpg", alt: "밀크티용 홍차베이스", name: "밀크티용 홍차베이스" },
        { src: "../images/milkTea(딸기 밀크티백).jpg", alt: "딸기 밀크티백", name: "딸기 밀크티백" },
        { src: "../images/milkTea(슈크림향 밀크티백).jpg", alt: "슈크림향 밀크티백", name: "슈크림향 밀크티백" },
        { src: "../images/milkTea(얼그레이 밀크티백).jpg", alt: "얼그레이 밀크티백", name: "얼그레이 밀크티백" },
        { src: "../images/milkTea(얼그레이바닐라밀크티백).webp", alt: "얼그레이 바닐라 밀크티백", name: "얼그레이 바닐라 밀크티백" },
      ]
    }
  ];
  
  const teaSection = document.getElementById("teaSection");
  
  teaSections.forEach(section => {
    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("picture");
  
    const typeupDiv = document.createElement("div");
    typeupDiv.classList.add("typeup"); //addEventListener 사용할 예정
  
    const titleImg = document.createElement("img");
    titleImg.classList.add("type");
    titleImg.src = `../images/${section.title}.jpg`;
    titleImg.alt = section.title;
    typeupDiv.appendChild(titleImg);
  
    const autoMoveDiv = document.createElement("div");
    autoMoveDiv.classList.add("autoMove"); //addEventListener 사용할 예정
  
    section.teas.forEach(tea => {
      const centerDiv = document.createElement("div");
      centerDiv.classList.add("center");
  
      const teaImg = document.createElement("img");
      teaImg.classList.add("tea");
      teaImg.src = tea.src;
      teaImg.alt = tea.alt;
  
      const teaName = document.createElement("p");
      teaName.classList.add("kR-font");
      teaName.textContent = tea.name;
  
      centerDiv.appendChild(teaImg);
      centerDiv.appendChild(teaName);
      autoMoveDiv.appendChild(centerDiv);
    });
  
    pictureDiv.appendChild(typeupDiv);
    pictureDiv.appendChild(autoMoveDiv);
    teaSection.appendChild(pictureDiv);

    // 드래그 스크롤 기능
    let isDragging = false;
    let startX;
    let scrollLeft;

    autoMoveDiv.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX;
      scrollLeft = autoMoveDiv.scrollLeft;
      autoMoveDiv.style.cursor = 'grabbing'; // 커서 스타일 변경
    });

    autoMoveDiv.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const x = e.pageX - startX;
      autoMoveDiv.scrollLeft = scrollLeft - x;
    });

    autoMoveDiv.addEventListener("mouseup", () => {
      isDragging = false;
      autoMoveDiv.style.cursor = 'grab'; // 커서 스타일 복원
    });

    autoMoveDiv.addEventListener("mouseleave", () => {
      isDragging = false;
      autoMoveDiv.style.cursor = 'grab'; // 커서 스타일 복원
    });
    
  });      

});


// 제품 떠오르게 하기
document.addEventListener("DOMContentLoaded", () => {
  const teaSections = document.querySelectorAll("#teaSection .picture");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const picture = entry.target;
        const typeup = picture.querySelector(".typeup");
        const centers = picture.querySelectorAll(".autoMove .center");

        // typeup 애니메이션 활성화
        typeup.classList.add("active");

        // autoMove 내부 center 요소 애니메이션 (순차적 활성화)
        centers.forEach((center, index) => {
          setTimeout(() => {
            center.classList.add("active");
          }, index * 200); // 각 요소에 딜레이 적용
        });

        // 한 번만 동작하도록 observer에서 해제
        observer.unobserve(picture);
      }
    });
  });

  teaSections.forEach((picture) => observer.observe(picture));
});

// 제품에서 best로 스크롤
document.addEventListener("DOMContentLoaded", function () {
  const line = document.querySelector(".line");
  const underline = document.querySelector(".underline");
  const content = document.querySelector(".content");
  const underScroll = document.querySelector(".underScroll");
  const colorSection = document.querySelector(".color");

  // scroll 이벤트 감지
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const colorPosition = colorSection.offsetTop;
    const colorHeight = colorSection.offsetHeight;

    // color 영역에 닿았을 때
    if (scrollPosition + window.innerHeight >= colorPosition) {
      // line의 길이 증가
      const maxHeight = 100; // line의 최대 높이
      const maxScroll = 100; // line이 늘어나는 최대 스크롤 값

      const height = Math.min((scrollPosition / maxScroll) * maxHeight, maxHeight);
      line.style.height = height + "px";

      // line이 최대 길이에 도달하면 underline 이동
      if (height >= maxHeight) {
        underline.style.transform = "translateY(90px)";
        const under = document.querySelector(".under");
        under.style.opacity = 1; // Underline 이동 시 이미지 표시
      } else {
        underline.style.transform = "translateY(0)";
      }
    }
  });
});

//best 떠오르게 하기
document.addEventListener("DOMContentLoaded", () => {
  // .best 요소들을 선택 (각 .best 항목에 대해 애니메이션 적용)
  const bestItems = document.querySelectorAll('.best');

  // IntersectionObserver 초기화
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const bestItem = entry.target;

        // 순차적인 딜레이 setTimeout 사용
        setTimeout(() => {
          // .best 요소에 active 클래스를 추가하여 애니메이션 실행
          bestItem.classList.add('active');
        }, index * 300);

        // 한 번만 동작하도록 observer에서 해제
        observer.unobserve(bestItem);
      }
    });
  }, { threshold: 0.5 }); // .best 요소의 50%가 보이면 애니메이션 시작

  // .best 항목들에 대해 observer 시작
  bestItems.forEach(bestItem => observer.observe(bestItem));
});


// 인스타그램 로고
document.addEventListener('scroll', () => {
  const instagram = document.querySelector('.instagram');
  const logo1 = document.querySelector('.instaLogo1');
  const logo2 = document.querySelector('.instaLogo2');

  // .instagram의 화면 내 위치 확인
  const instagramRect = instagram.getBoundingClientRect();

  // .instagram이 화면 내에 있을 때
  if (instagramRect.top < window.innerHeight && instagramRect.bottom > 0) {
    logo1.style.transform = 'translateX(0)';
    logo2.style.transform = 'translateX(0)';
    logo1.style.transition = 'transform 2s ease-out';
    logo2.style.transition = 'transform 2s ease-out';
  } else {
    // 화면에서 벗어나면 원래 위치로 초기화
    logo1.style.transform = 'translateX(-100%)';
    logo2.style.transform = 'translateX(100%)';
    logo1.style.transition = 'transform 2s ease-out';
    logo2.style.transition = 'transform 2s ease-out';
  }
});

// 인스타그램 사진 반복 재생
document.addEventListener("DOMContentLoaded", function () {
  const instaSection = document.querySelector('.instaSection');
  const instaImages = document.querySelectorAll('.instaImg');
  
  // 이미지를 두 번 복제하여 공백 없이 반복
  function cloneImages() {
    instaImages.forEach(image => {
      const clone = image.cloneNode(true);
      instaSection.appendChild(clone);
    });
  }

  // 두 번째 복제 추가
  cloneImages();
});
