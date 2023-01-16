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
document.querySelector('.fa-chevron-right').addEventListener('click', function(e){
    if(e){
        $('.service-side-sec').fadeToggle(200);
    }
})
    