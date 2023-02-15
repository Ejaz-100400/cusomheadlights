//Header action
// bar and close button
document.querySelector('.fa-bars').addEventListener('click', () => {
    $('.responsivemenu').fadeToggle(200);
})
document.querySelector('.responsivemenu').addEventListener('click', () => {
    $('.responsivemenu').fadeToggle(200);
})
// document.querySelector('.customheadlight').style.display = 'none';
// Preloader
// setTimeout(function(){
//     $('#preloader').fadeToggle();
//     document.querySelector('.customheadlight').style.display = 'block';
// },2000)


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


document.getElementById("click1").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelectorAll('.service-detail-main')[0].classList.add('xyz-in')
    document.querySelectorAll('.service-detail-main')[0].classList.remove('xyz-out')
    document.querySelector('#detail1').style.display='block';
  };
  
  document.getElementById("click2").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelectorAll('.service-detail-main')[1].classList.add('xyz-in')
    document.querySelectorAll('.service-detail-main')[1].classList.remove('xyz-out')
    document.querySelector('#detail2').style.display='block';
  };
  document.getElementById("click3").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelectorAll('.service-detail-main')[2].classList.add('xyz-in')
    document.querySelectorAll('.service-detail-main')[2].classList.remove('xyz-out')
    document.querySelector('#detail3').style.display='block';
  };
  document.getElementById("click4").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelectorAll('.service-detail-main')[3].classList.add('xyz-in')
    document.querySelectorAll('.service-detail-main')[3].classList.remove('xyz-out')
    document.querySelector('#detail4').style.display='block';
  };
  document.getElementById("click5").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelectorAll('.service-detail-main')[4].classList.add('xyz-in')
    document.querySelectorAll('.service-detail-main')[4].classList.remove('xyz-out')
    document.querySelector('#detail5').style.display='block';
  };
  document.getElementById("click6").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelectorAll('.service-detail-main')[5].classList.add('xyz-in')
    document.querySelectorAll('.service-detail-main')[5].classList.remove('xyz-out')
    document.querySelector('#detail6').style.display='block';
  };
  document.getElementById("click7").onclick = function() {
    closeContainers();
    document.querySelector('.service-detail-section').style.display='block';
    document.querySelectorAll('.service-detail-main')[6].classList.add('xyz-in')
    document.querySelectorAll('.service-detail-main')[6].classList.remove('xyz-out')
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
    document.querySelector('.service-detail-main').classList.add('xyz-out')
    document.querySelector('.service-detail-main').classList.remove('xyz-in')
    closeContainers(); //
  })

  const statsec=document.querySelector('.about-statssec');
  const options={
      threshold:1,
  }
  // ABOUT SECTION
  document.querySelector('#aboutdoor').addEventListener('click', function(e){
      if(e){
          $('.aboutans-sec').css('display','flex');
          $('.aboutstats-sec').css('display','block')
          const observer=new IntersectionObserver(function(entries,observer){
              entries.forEach(entry=>{
                  if(entry.isIntersecting==true){
                      var customers =setInterval(customerdone,3)
          
                      let customer=1;
                      
                      function customerdone(){
                          customer=customer+1;
                          document.querySelector('#customers').innerHTML = customer + '+';
                          if(customer==700){
                              clearInterval(customers)
                          }
                      }
                      var projects =setInterval(projectsdone,3)
                      let project=1;
                      function projectsdone(){
                          project=project+1;
                          document.querySelector('#projects').innerHTML = project + '+';
                          if(project==1000){
                              clearInterval(projects)
                          }
                      }
                      var years =setInterval(yearsdone,500)
                      let year=1;
                      function yearsdone(){
                          year++;
                          document.querySelector('#years').innerHTML = year + '+';
                          if(year==6){
                              clearInterval(years)
                          }
                      }
                      var ratings =setInterval(ratingsdone,1000)
                      let rating=1;
                      function ratingsdone(){
                          rating++;
                          document.querySelector('#ratings').innerHTML = rating + '+';
                          if(rating==5){
                              clearInterval(ratings)
                          }
                      }
  
                  }
              })
          })
          observer.observe(statsec)    
      }
  
      $('.about-ques').fadeToggle(200);
  });
  

  let whatsappBtns = document.querySelectorAll('.buttons');
  whatsappBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.open('https://api.whatsapp.com/send?phone=919789868288', '_blank');
    });
  });