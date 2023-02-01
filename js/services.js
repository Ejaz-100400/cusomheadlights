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
document.querySelector('#chevron').addEventListener('click', function(e){
    if(e){
        if(document.querySelector('#service-side-sec-desview').style.display ===''){
            $('#service-side-sec-mobview').slideToggle(100);
        }
    }
})

console.log(window.innerWidth)
    

// services sidemenu button section
const navlink = document.querySelectorAll('.nav-link-mob');
navlink.forEach(function(navbtn){
    navbtn.addEventListener('click', function(){
        $('#service-side-sec-mobview').slideToggle(100);
        document.querySelector('.services-section').scrollIntoView();
    });
});


const movie={
    id:1,
    moviename:'Vikram',
    lang:'Tamil',
    release:2022
}

const {...restoperate}=movie;
console.log(restoperate);
// returns {id: 1, moviename: 'Vikram', lang: 'Tamil', release: 2022}





// function printPersonInfo({ moviename, lang, release }) {
//     console.log(`Moviename: ${moviename}, Language: ${lang}, Release Year: ${release}`);
//   }
// printPersonInfo(movie);
// returns Moviename: Vikram, Language: Tamil, Release Year: 2022






// const { moviename:name , lang:movielang , release: movierelease } =movie
// console.log(movielang);
// returns Tamil



// let person = {
//     name: "Raj",
//     speak: function() {
//       console.log(`My name is ${this.name}.`);
//     }
//   };
//   person.speak(); //My name is Raj



// let person = { name: "Raj" };
// let speak = function() {
//   console.log(`My name is ${this.name}.`);
// }.bind(person);
// speak(); //My name is Raj

// function Person(name) {
//     this.name = name;
//     this.speak = function() {
//       console.log(`My name is ${this.name}.`);
//     }
//   }
//   let person = new Person("Raj");
//   person.speak();  //My name is Raj

let person = {
    name: "Kumar",
    friends: ['Raj', 'Ram'],
    speak: function() {
      this.friends.forEach(friend => {
          console.log(`${this.name} says hi to ${friend}.`);
      });
    }
  };
  person.speak();
//  Kumar says hi to Raj.
//  Kumar says hi to Ram.