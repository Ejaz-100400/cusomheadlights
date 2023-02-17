//Header action
// bar and close button
const menuToggle = document.querySelector('#menuToggle');
const menuContainer = document.querySelector('.responsivemenu');

// Add an event listener to the toggle
menuToggle.addEventListener('click', function() {
  // Toggle the 'active' class on the container to show or hide it
  menuContainer.classList.toggle('show');
});
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

// products sidebar btns
document.querySelector('.product-btns').addEventListener('click',function(e){
    $('.btns-sections').fadeToggle(100);
    $('.btns-sections').css('top','0%')
})
