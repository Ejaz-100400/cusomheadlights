//Header action

// bar and close button
document.querySelector('.fa-bars').addEventListener('click', () => {
    $('.responsivemenu').fadeToggle(200);
})
document.querySelector('.responsivemenu').addEventListener('click', () => {
    $('.responsivemenu').fadeToggle(200);
})
document.querySelector('.customheadlight').style.display = 'none';
// Preloader
setTimeout(function(){
    $('#preloader').fadeToggle(100);
    document.querySelector('.customheadlight').style.display = 'block';
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
        $('.aboutans-sec').css('display','flex');
        const observer=new IntersectionObserver(function(entries,observer){
            entries.forEach(entry=>{
                if(entry.isIntersecting==true){
                    $('.aboutstats-sec').css('display','block')
                    document.querySelectorAll('.statsbox').forEach((statbox)=>{
                                        statbox.classList.add('xyz-in')
                                    })
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
                else{
                    document.querySelectorAll('.statsbox').forEach((statbox)=>{
                        statbox.classList.remove('xyz-in')
                    })
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
        
        $('.car-brands').css('display','block')
        $('#tab-content').css('display','block')
    }
    $('.services-ques').fadeToggle(200);
})


// const statsdesc= document.querySelector('.stats-group')
// const observer=new IntersectionObserver(function(entries,observer){
//     entries.forEach(entry=>{
//         if(entry.isIntersecting==true){
//             document.querySelectorAll('.statsbox').forEach((statbox)=>{
//                 statbox.classList.add('square')
//             })
//         }
//     })
// })
// observer.observe(statsdesc)    
