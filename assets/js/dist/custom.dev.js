"use strict";

// 로딩 페이지
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").style.zIndex = "-100";
    document.getElementById("content").style.display = "flex";
  }, 1700);
}); // 전체 

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
  });
};

var handleNavButtonClick = function handleNavButtonClick(indx) {
  if (matchMedia('max-width:767px')) {
    var _header = document.querySelector('header');

    _header.classList.add('hidden');

    setTimeout(function () {
      _header.classList.remove('active');
    }, 200);
  }

  resetActiveClasses();
  navBtns[indx].classList.add('active');
  sections[indx].classList.add('active');
};

resetBtn.addEventListener('click', function () {
  resetActiveClasses();

  if (matchMedia('max-width:767px')) {
    var _header2 = document.querySelector('header');

    _header2.classList.remove('active');
  }
});
navBtns.forEach(function (btn, indx) {
  btn.addEventListener('click', function () {
    handleNavButtonClick(indx);
  });
}); // 프로젝트 차트

google.charts.load("current", {
  packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([['Skill', 'Proficiency (%)'], ['HTML', 100], ['CSS', 90], ['SCSS', 90], ['JS', 80], ['jQuery', 70], ['React', 40], ['Vue', 30]]);
  var options = {
    title: 'Skills',
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: '#fff',
      fontSize: 16
    },
    legend: 'none',
    chartArea: {
      width: '90%',
      height: '90%',
      fontName: 'pretendard'
    },
    colors: ['#dd4b25', '#146faf', '#c66394', '#f6aa3f', '#0868ac', '#5ed3f3', '#3fb17f']
  };
  var chart = new google.visualization.PieChart(document.getElementById('skillsChart'));
  chart.draw(data, options);
}

window.addEventListener('resize', drawChart); //모바일 토글 메뉴

var toggleBtn = document.querySelector('.toggle-btn');
var header = document.querySelector('header');
toggleBtn.addEventListener('click', function (e) {
  header.classList.remove('hidden');
  header.classList.toggle('active');
});