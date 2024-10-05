window.addEventListener("load", function() {
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 5000);  // 3000ms = 3초
  });

const navBtns = document.querySelectorAll('header nav ul li button');
const sections = document.querySelectorAll('main section');
const tagBtns = document.querySelectorAll('.sec__tag li');
const resetBtn = document.querySelector('.frame');


const resetActiveClasses = () => {
    navBtns.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));
    // tagBtns.forEach(btn => btn.classList.remove('active'));
};


const handleNavButtonClick = (indx) => {
    resetActiveClasses();
    navBtns[indx].classList.add('active');
    sections[indx].classList.add('active'); 
    // tagBtns[indx].classList.add('active');
};


resetBtn.addEventListener('click', () => {
    resetActiveClasses(); 
});

navBtns.forEach((btn, indx) => {
    btn.addEventListener('click', () => {
        handleNavButtonClick(indx); // 그 후 클릭된 버튼에 맞는 섹션을 활성화
    });
});

