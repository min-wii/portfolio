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
  resetActiveClasses();
  navBtns[indx].classList.add('active');
  sections[indx].classList.add('active');
};

resetBtn.addEventListener('click', function () {
  resetActiveClasses();
});
navBtns.forEach(function (btn, indx) {
  btn.addEventListener('click', function () {
    handleNavButtonClick(indx);
  });
}); // 프로젝트 차트

google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Skills');
  data.addColumn('number', 'Proficiency (%)');
  data.addRows([['HTML', 100], ['CSS', 90], ['SCSS', 90], ['JS', 80], ['jQuery', 70], ['React', 50], ['Vue', 50]]);
  var options = {
    legend: {
      position: 'none'
    },
    hAxis: {
      minValue: 0,
      maxValue: 100
    },
    bar: {
      groupWidth: "90%"
    },
    colors: ['#4B7F93']
  }; // 차트를 그릴 div 요소의 크기를 가져옴

  var chartContainer = document.getElementById('skillsChart');
  var containerWidth = chartContainer.clientWidth;
  var containerHeight = chartContainer.clientHeight; // 옵션에 부모 div의 크기를 설정

  options.width = containerWidth;
  options.height = containerHeight;
  var chart = new google.charts.Bar(chartContainer);
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

window.addEventListener('resize', drawChart);