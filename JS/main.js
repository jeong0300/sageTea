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
  });      

});
