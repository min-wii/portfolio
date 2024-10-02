"use strict";

var navBtns = document.querySelectorAll('header nav ul li button');
var sections = document.querySelectorAll('main section');
var tagBtns = document.querySelectorAll('.sec__tag li');
var resetBtn = document.querySelector('.frame');

var resetActiveClasses = function resetActiveClasses() {
  navBtns.forEach(function (btn) {
    return btn.classList.remove('active');
  });
  sections.forEach(function (sec) {
    return sec.classList.remove('active');
  }); // tagBtns.forEach(btn => btn.classList.remove('active'));
};

var handleNavButtonClick = function handleNavButtonClick(indx) {
  resetActiveClasses();
  navBtns[indx].classList.add('active');
  sections[indx].classList.add('active'); // tagBtns[indx].classList.add('active');
};

resetBtn.addEventListener('click', function () {
  resetActiveClasses();
});
navBtns.forEach(function (btn, indx) {
  btn.addEventListener('click', function () {
    handleNavButtonClick(indx); // 그 후 클릭된 버튼에 맞는 섹션을 활성화
  });
});