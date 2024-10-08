// 로딩 페이지
window.addEventListener("load", function() {

    setTimeout(function() {
      document.getElementById("loader").style.zIndex = "-100";
      document.getElementById("content").style.display = "flex";
    }, 1700);  
  });

// 전체 
const navBtns = document.querySelectorAll('header nav ul li button');
const sections = document.querySelectorAll('main section');
const tagBtns = document.querySelectorAll('.sec__tag li');
const resetBtn = document.querySelector('.frame');


const resetActiveClasses = () => {
    navBtns.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));
};


const handleNavButtonClick = (indx) => {
    if(matchMedia('max-width:767px')){
        const header = document.querySelector('header');
        header.classList.add('hidden')
        setTimeout(()=>{
            header.classList.remove('active');
        },200)
    }
    resetActiveClasses();
    navBtns[indx].classList.add('active');
    sections[indx].classList.add('active'); 
};


resetBtn.addEventListener('click', () => {
    resetActiveClasses(); 
    if(matchMedia('max-width:767px')){
        const header = document.querySelector('header');
        header.classList.remove('active');

    }
});

navBtns.forEach((btn, indx) => {
    btn.addEventListener('click', () => {
        handleNavButtonClick(indx); 
      
    });
});

// 프로젝트 차트


google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Skill', 'Proficiency (%)'],
    ['HTML', 100],
    ['CSS', 90],
    ['SCSS', 90],
    ['JS', 80],
    ['jQuery', 70],
    ['React', 40],
    ['Vue', 30],
  ]);

  var options = {
    // title: 'Skills',
    pieHole: 0.4,
    pieSliceTextStyle:{
        color:'#fff',
        fontSize:16,
    },
    legend:'none',
    chartArea:{
        width:'90%',
        height:'90%',
        fontName:'pretendard'
    },
    colors:['#dd4b25','#146faf','#c66394','#f6aa3f','#0868ac','#5ed3f3','#3fb17f']
  };


  var chart = new google.visualization.PieChart(document.getElementById('skillsChart'));
  chart.draw(data, options);
}

window.addEventListener('resize', drawChart);


//모바일 토글 메뉴
const toggleBtn = document.querySelector('.toggle-btn');
const header =document.querySelector('header');

toggleBtn.addEventListener('click',(e)=>{
    header.classList.remove('hidden');
    header.classList.toggle('active');
})