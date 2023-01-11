//Header action

// bar and close button
document.querySelector('.fa-bars').addEventListener('click', () => {
    $('.responsivemenu').fadeToggle(200);
})
document.querySelector('.responsivemenu').addEventListener('click', () => {
    $('.responsivemenu').fadeToggle(200);
})

setTimeout(function(){
    $('#preloader').fadeToggle();
},2000)
document.querySelector('.fa-phone').addEventListener('click', () => {
    $('.fa-phone').fadeToggle(200);
})


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

// CHOOSE SECTION
// door open -choose
document.querySelector('#chooseusdoor').addEventListener('click', (e) => {
    if(e){
        $('.chooseans-sec').css('display','flex')
        document.querySelector('.chooseans-left').classList.add('square')
        document.querySelector('.chooseans-right').classList.add('square')
        document.querySelector('.chooseans-left').classList.add('xyz-in')
        document.querySelector('.chooseans-right').classList.add('xyz-in')
    }
    $('.choose').fadeToggle(200);
})





// door open - about
// intersection observer 
const statsec=document.querySelector('.about-statssec');
const options={
    threshold:1,
}
// ABOUT SECTION
document.querySelector('#aboutdoor').addEventListener('click', function(e){
    if(e){
        $('.aboutans-sec').css('display','block')
        $('.aboutstats-sec').css('display','block')
        const observer=new IntersectionObserver(function(entries,observer){
            entries.forEach(entry=>{
                if(entry.isIntersecting==true){
                    var customers =setInterval(customerdone,3)
        
                    let customer=1;
                    
                    function customerdone(){
                        customer++;
                        document.querySelector('#customers').innerHTML = customer + '+';
                        if(customer==500){
                            clearInterval(customers)
                        }
                    }
                    var projects =setInterval(projectsdone,3)
                    let project=1;
                    function projectsdone(){
                        project++;
                        document.querySelector('#projects').innerHTML = project + '+';
                        if(project==700){
                            clearInterval(projects)
                        }
                    }
                    var years =setInterval(yearsdone,500)
                    let year=0.1;
                    function yearsdone(){
                        year++;
                        document.querySelector('#years').innerHTML = year + '+';
                        if(year==5.1){
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



// SERVICE SECTION
document.querySelector('#servicedoor').addEventListener('click', (e) => {
    if(e){
        $('.serviceans-sec').css('display','block')
        $('.service-img').css('display','block')
        $('.car-brands').css('display','block')
        $('#tab-content').css('display','block')
    }
    $('.services-ques').fadeToggle(200);
})

// CONTACT SECTION
