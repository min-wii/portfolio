// const navBtns = document.querySelectorAll('header nav ul li button');
// const sections = document.querySelectorAll('main section');
// const resetBtn = document.querySelector('.frame');

// resetBtn.addEventListener('click',(e)=>{
//     navBtns.forEach((btn)=>{
//         btn.classList.remove('active')
//     })
//     sections.forEach((sec)=>{
//         sec.classList.remove('active')
//     })
// })
// navBtns.forEach((btn, indx) => {
//     btn.addEventListener('click', (e) => {
//         // 모든 버튼에서 'active' 클래스 제거
//         navBtns.forEach(btn => btn.classList.remove('active'));

//         // 현재 클릭된 버튼에만 'active' 클래스 추가
//         e.target.classList.add('active');

//         // 섹션을 처리
//         sections.forEach((sec, secIndx) => {
//             if (secIndx === indx) {
//                 sec.classList.add('active');
//             } else {
//                 sec.classList.remove('active');
//             }
//         });
//     });
// });


// 요소 선택
const navBtns = document.querySelectorAll('header nav ul li button');
const sections = document.querySelectorAll('main section');
const resetBtn = document.querySelector('.frame');

// 모든 버튼 및 섹션에서 'active' 클래스 제거
const resetActiveClasses = () => {
    navBtns.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));
};

// 버튼 클릭 시 동작
const handleNavButtonClick = (indx) => {
    resetActiveClasses(); // 모든 'active' 클래스 제거

    navBtns[indx].classList.add('active'); // 클릭된 버튼에 'active' 클래스 추가
    sections[indx].classList.add('active'); // 해당 섹션에 'active' 클래스 추가
};

// 초기화 버튼 클릭 이벤트
resetBtn.addEventListener('click', resetActiveClasses);

// 내비게이션 버튼 클릭 이벤트 추가
navBtns.forEach((btn, indx) => {
    btn.addEventListener('click', () => handleNavButtonClick(indx));
});
