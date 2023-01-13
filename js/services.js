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
const closeicon=document.querySelectorAll('.ri-close-line')
closeicon.forEach((close)=>{
    close.addEventListener('click', function(e){
        if(e.target){
        $('.services-content').fadeToggle(400);
        }
    })
}) 
const serviceitem1 = document.querySelectorAll('.services-item')[0]
serviceitem1.addEventListener('click',function(e){
        if(e.target){
            $('#headclean').fadeIn(100);
            $('.services-content').fadeToggle(400);
        }
    })
const serviceitem2 = document.querySelectorAll('.services-item')[1]
serviceitem2.addEventListener('click',function(e){
    if(e.target){
         $('#projfit').fadeIn(100);
        $('.services-content').fadeToggle(400);
    }
})
const serviceitem3 = document.querySelectorAll('.services-item')[2]
serviceitem3.addEventListener('click',function(e){
    if(e.target){
         $('#foglamp').fadeIn(100);
        $('.services-content').fadeToggle(400);
    }
})
const serviceitem4 = document.querySelectorAll('.services-item')[3]
serviceitem4.addEventListener('click',function(e){
    if(e.target){
         $('#sysspeak').fadeIn(100);
        $('.services-content').fadeToggle(400);
    }
})
const serviceitem5 = document.querySelectorAll('.services-item')[4]
serviceitem5.addEventListener('click',function(e){
    if(e.target){
         $('#barlight').fadeIn(100);
        $('.services-content').fadeToggle(400);
    }
})
const serviceitem6 = document.querySelectorAll('.services-item')[5]
serviceitem6.addEventListener('click',function(e){
    if(e.target){
         $('#headwiring').fadeIn(100);
        $('.services-content').fadeToggle(400);
    }
})
const serviceitem7 = document.querySelectorAll('.services-item')[6]
serviceitem7.addEventListener('click',function(e){
    if(e.target){
         $('#drl').fadeIn(100);
        $('.services-content').fadeToggle(400);
    }
})
    