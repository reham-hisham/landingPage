/* hide  table when page load*/
$(document).ready(function(){
    
      $("table").hide();
   
  });
  /* hide and show table on click*/ 
function size(){
  $("table").toggle();
}
/* Folwing function for swutching between images*/
  function changeImageRed(){
    document.getElementById('leftimage1').src='images/dress1/red11.png '
    document.getElementById('leftimage2').src='images/dress1/red12.png '
    document.getElementById('leftimage3').src='images/dress1/red14.png '
    document.getElementById('leftimage4').src='images/dress1/red11.png '
    document.getElementById('toggleImage').src='images/dress1/red1.png '
 
  }

  
  function changeImageGrey(){
    document.getElementById('leftimage1').src='images/dress1/grey11.png '
    document.getElementById('leftimage2').src='images/dress1/grey12.png '
    document.getElementById('leftimage3').src='images/dress1/grey13.png '
    document.getElementById('leftimage4').src='images/dress1/grey11.png '

    document.getElementById('toggleImage').src='images/dress1/grey11.png '
 
  }
  function changeImageGreen(){
    document.getElementById('leftimage1').src='images/dress1/green11.png '
    document.getElementById('leftimage2').src='images/dress1/green12.png '
    document.getElementById('leftimage3').src='images/dress1/green13.png '
    document.getElementById('leftimage4').src='images/dress1/green14.png '
    document.getElementById('toggleImage').src='images/dress1/green11.png '
 
  }
  function changeImageBlack(){
    document.getElementById('leftimage1').src='images/dress1/2.png '
    document.getElementById('leftimage2').src='images/dress1/3.png '
    document.getElementById('leftimage3').src='images/dress1/5.png '
    document.getElementById('leftimage4').src='images/dress1/4.png '
    document.getElementById('toggleImage').src='images/dress1/2.png '
 
  }
  function checkWhichPicFirst(){
    var x= document.getElementById('leftimage1');

 if(x.src.indexOf("images/dress1/grey11.png") != -1){
  document.getElementById('toggleImage').src='images/dress1/grey11.png '

 }else  if(x.src.indexOf("images/dress1/red11.png") != -1){
  document.getElementById('toggleImage').src='images/dress1/red11.png '

 } else  if(x.src.indexOf("images/dress1/green11.png") != -1){
  document.getElementById('toggleImage').src='images/dress1/green11.png '

 }else{
  document.getElementById('toggleImage').src='images/dress1/2.png '

}


 }
 function checkWhichPicSec(){
  var x= document.getElementById('leftimage2');

if(x.src.indexOf("images/dress1/grey12.png") != -1){
document.getElementById('toggleImage').src='images/dress1/grey12.png '

}else  if(x.src.indexOf("images/dress1/red12.png") != -1){
document.getElementById('toggleImage').src='images/dress1/red12.png '

} else  if(x.src.indexOf("images/dress1/green12.png") != -1){
document.getElementById('toggleImage').src='images/dress1/green12.png '

}else{
  document.getElementById('toggleImage').src='images/dress1/3.png '

}


}
function checkWhichPicThird(){
  var x= document.getElementById('leftimage3');

if(x.src.indexOf("images/dress1/grey13.png") != -1){
document.getElementById('toggleImage').src='images/dress1/grey13.png '

}else  if(x.src.indexOf("images/dress1/red14.png") != -1){
document.getElementById('toggleImage').src='images/dress1/red14.png '

} else  if(x.src.indexOf("images/dress1/green13.png") != -1){
document.getElementById('toggleImage').src='images/dress1/green13.png '

}else{
  document.getElementById('toggleImage').src='images/dress1/4.png '

}


}
function checkWhichPicForth(){
  var x= document.getElementById('leftimage4');

if(x.src.indexOf("images/dress1/grey11.png") != -1){
document.getElementById('toggleImage').src='images/dress1/grey11.png '

}else  if(x.src.indexOf("images/dress1/red11.png") != -1){
document.getElementById('toggleImage').src='images/dress1/red11.png '

} else  if(x.src.indexOf("images/dress1/green14.png") != -1){
document.getElementById('toggleImage').src='images/dress1/green14.png '

} else{
  document.getElementById('toggleImage').src='images/dress1/5.png '

}


}
    function addcar(){
      alert("Added to Car");

     }
     
     function cimagechange(){
      var x= document.getElementById('cimage2');
    
    if(x.src.indexOf("images/dress1/c1.jpg") != -1){
    document.getElementById('cimage').src='images/dress1/c1.jpg '
    
    }else  if(x.src.indexOf("images/dress1/c2.jpg") != -1){
    document.getElementById('cimage').src='images/dress1/c2.jpg '
    
    } else  if(x.src.indexOf("images/dress1/c3.jpg") != -1){
    document.getElementById('cimage').src='images/dress1/c3.jpg '
    
    } else{
      document.getElementById('cimage').src='images/dress1/c4.jpg '
    }}

/**//////////////////////////////////////////////////////////////// landing page req. section//////////////////////////////////////////////////////////////////////// */
  /**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const navigation = document.getElementById('navbar__list');
var li = document.createElement("li");
// sections global var
const sections = document.querySelectorAll('section');






// build the nav
//get no. of sections
var sections2 = document.getElementsByTagName("section").length;
console.log(sections)
function function1() {
  for (var i=0;i<sections2;i++){
   
    var ul = document.getElementById("navbar__list");
    var li = document.createElement("li");
   var  a= document.createElement("a");
    var n = i+1;
    ul.appendChild(li);
    li.setAttribute("class","nav-item ");
    li.appendChild(a);
    a.setAttribute("class","nav-link");
    a.setAttribute("href", "#section"+n);
    a.appendChild(document.createTextNode("\tsection"+n));
    
   li.setAttribute("id", n);

}}
function1();

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const offset = (section) => {
 // console.log(Math.floor(section.getBoundingClientRect().top));

  return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (li) => {
li.classList.remove('your-active-class');

};
// adding the active class
var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("your-active-class");
  });
};

var addActiveClass = function (id) {
console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("your-active-class");
};
const addActive = (conditional, li) => {
  if(conditional){
      li.classList.add('your-active-class');
      
  };
};
onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;


  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      console.log(currentId)
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

