//Header action
// bar and close button
document.querySelector('.fa-bars').addEventListener('click', () => {
    $('.responsivemenu').fadeToggle(200);
})
document.querySelector('.responsivemenu').addEventListener('click', () => {
    $('.responsivemenu').fadeToggle(200);
})
// Preloader
setTimeout(function(){
    $('#preloader').fadeToggle();
},2000)



window.onscroll=function(){
    if(document.documentElement.scrollTop>0){
        document.querySelector('header').style.backgroundColor = 'black';
        document.querySelector('.resp-header').style.backgroundColor = 'black';
        
    }
    else{
        document.querySelector('header').style.backgroundColor="transparent";
        document.querySelector('.resp-header').style.backgroundColor = 'transparent';
    }
}


// SERVICES SECTION 

// closing services content
document.querySelector('#proj1').addEventListener('click', function(){
    const element = document.querySelectorAll('.services-item')[0];

})
document.querySelector('#proj2').addEventListener('click', function(){
    const element = document.querySelectorAll('.services-item')[1];
})
document.querySelector('body').addEventListener('click', function(e){
    if (e.target.classList.contains('rotate')) {
        $('#service-side-sec-desview').slideToggle(100)
        e.target.style.transform='rotate(180deg)';
        e.target.classList.toggle('rotate-again')
        e.target.classList.toggle('rotate')
    } else if (e.target.classList.contains('rotate-again')) {
        e.target.style.transform='rotate(0deg)';
        $('#service-side-sec-desview').slideToggle(100)
        e.target.classList.toggle('rotate-again')
        e.target.classList.toggle('rotate')
    }
});

    

// services sidemenu button section
const navlink = document.querySelectorAll('.nav-link-mob');
navlink.forEach(function(navbtn){
    navbtn.addEventListener('click', function(){
        $('#service-side-sec-mobview').slideToggle(100);
        document.querySelector('.services-section').scrollIntoView();
    });
});



// DISPLAY AND HIDE SERVICE DETAIL IN MOBILE VIEW 

// document.querySelector('#click1').addEventListener('click', (e)=>{
//     document.querySelector('.service-detail-section').style.display='block';
//     document.querySelector('#detail1').style.display='block';
// })
// document.querySelector('#click2').addEventListener('click', (e)=>{
//     document.querySelector('.service-detail-section').style.display='block';
//     document.querySelector('#detail2').style.display='block';
// })
// document.querySelector('#click3').addEventListener('click', (e)=>{
//     document.querySelector('.service-detail-section').style.display='block';
//     document.querySelector('#detail3').style.display='block';
// })

// document.querySelector('.fa-xmark').addEventListener('click', (e)=>{
//     document.querySelector('.service-detail-section').style.display='none';
//     document.querySelector('#detail1').classList.toggle('.toggle-dis');
//     document.querySelector('#detail2').classList.toggle('.toggle-dis');
//     document.querySelector('#detail3').classList.toggle('.toggle-dis');
// })

document.getElementById("click1").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelector('#detail1').style.display='block';
  };
  
  document.getElementById("click2").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelector('#detail2').style.display='block';
  };
  document.getElementById("click3").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelector('#detail3').style.display='block';
  };
  document.getElementById("click4").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelector('#detail4').style.display='block';
  };
  document.getElementById("click5").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelector('#detail5').style.display='block';
  };
  document.getElementById("click6").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelector('#detail6').style.display='block';
  };
  document.getElementById("click7").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelector('#detail7').style.display='block';
  };
  function closeContainers() {
    var containers = document.getElementsByClassName("service-detail-main");
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.display = "none";
    }
  }
  document.querySelector('.fa-xmark').addEventListener('click', (e)=>{
    document.querySelector('.service-detail-section').style.display='none';
    closeContainers(); //
  })