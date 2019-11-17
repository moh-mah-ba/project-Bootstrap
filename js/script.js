/* Start buttons Changing  */
var bttnOne = document.getElementById('btn-1') ,
    bttnTwo = document.getElementById('btn-2') ,
    bttnThree = document.getElementById('btn-3') ,
    bttnFour = document.getElementById('btn-4') ,
    bttnFive = document.getElementById('btn-5') ,
    bttnSix = document.getElementById('btn-6');

var phoOne = document.querySelector('.photo1'), 
    phoTwo = document.querySelector('.photo2'), 
    phoThree = document.querySelector('.photo3'), 
    phoFour = document.querySelector('.photo4'), 
    phoFive = document.querySelector('.photo5'), 
    phoSix = document.querySelector('.photo6'), 
    phoSeven = document.querySelector('.photo7'), 
    phoEight = document.querySelector('.photo8'); 

var bordOne = document.getElementById('bord1'), 
    bordTwo = document.getElementById('bord2'), 
    bordThree = document.getElementById('bord3'), 
    bordFour = document.getElementById('bord4'), 
    bordFive = document.getElementById('bord5'), 
    bordSix = document.getElementById('bord6'), 
    bordSeven = document.getElementById('bord7'), 
    bordEight = document.getElementById('bord8');
    


bttnOne.onclick = function (){
    'use strict';
    this.classList.add('active');
    bttnTwo.classList.remove('active');
    bttnThree.classList.remove('active');
    bttnFour.classList.remove('active');
    bttnFive.classList.remove('active');
    bttnSix.classList.remove('active');
    phoOne.style.opacity=('1');
    phoTwo.style.opacity=('1');
    phoThree.style.opacity=('1');
    phoFour.style.opacity=('1');
    phoFive.style.opacity=('1');
    phoSix.style.opacity=('1');
    phoSeven.style.opacity=('1');
    phoEight.style.opacity=('1');
    phoOne.classList.add('lay-hov');
    phoTwo.classList.add('lay-hov');
    phoThree.classList.add('lay-hov');
    phoFour.classList.add('lay-hov');
    phoFive.classList.add('lay-hov');
    phoSix.classList.add('lay-hov');
    phoSeven.classList.add('lay-hov');
    phoEight.classList.add('lay-hov'); 
}
bttnTwo.onclick = function (){
     'use strict';
     this.classList.add('active');
    bttnOne.classList.remove('active');
    bttnThree.classList.remove('active');
    bttnFour.classList.remove('active');
    bttnFive.classList.remove('active');
    bttnSix.classList.remove('active');
    phoOne.style.opacity=('1');
    phoTwo.style.opacity=('.1');
    phoThree.style.opacity=('.1');
    phoFour.style.opacity=('.1');
    phoFive.style.opacity=('.1');
    phoSix.style.opacity=('1');
    phoSeven.style.opacity=('.1');
    phoEight.style.opacity=('.1');
    phoOne.classList.add('lay-hov');
    phoTwo.classList.remove('lay-hov');
    phoThree.classList.remove('lay-hov');
    phoFour.classList.remove('lay-hov');
    phoFive.classList.remove('lay-hov');
    phoSix.classList.add('lay-hov');
    phoSeven.classList.remove('lay-hov');
    phoEight.classList.remove('lay-hov'); 
}
bttnThree.onclick = function (){
    'use strict';
    this.classList.add('active');
    bttnOne.classList.remove('active');
    bttnTwo.classList.remove('active');
    bttnFour.classList.remove('active');
    bttnFive.classList.remove('active');
    bttnSix.classList.remove('active');
    phoOne.style.opacity=('.1');
    phoTwo.style.opacity=('1');
    phoThree.style.opacity=('.1');
    phoFour.style.opacity=('.1');
    phoFive.style.opacity=('.1');
    phoSix.style.opacity=('.1');
    phoSeven.style.opacity=('1');
    phoEight.style.opacity=('.1');
    phoOne.classList.remove('lay-hov');
    phoTwo.classList.add('lay-hov');
    phoThree.classList.remove('lay-hov');
    phoFour.classList.remove('lay-hov');
    phoFive.classList.remove('lay-hov');
    phoSix.classList.remove('lay-hov');
    phoSeven.classList.add('lay-hov');
    phoEight.classList.remove('lay-hov'); 
}
bttnFour.onclick = function (){
     'use strict';
     this.classList.add('active');
    bttnOne.classList.remove('active');
    bttnTwo.classList.remove('active');
    bttnThree.classList.remove('active');
    bttnFive.classList.remove('active');
    bttnSix.classList.remove('active');
    phoOne.style.opacity=('.1');
    phoTwo.style.opacity=('.1');
    phoThree.style.opacity=('1');
    phoFour.style.opacity=('.1');
    phoFive.style.opacity=('.1');
    phoSix.style.opacity=('.1');
    phoSeven.style.opacity=('.1');
    phoEight.style.opacity=('.1'); 
    phoOne.classList.remove('lay-hov');
    phoTwo.classList.remove('lay-hov');
    phoThree.classList.add('lay-hov');
    phoFour.classList.remove('lay-hov');
    phoFive.classList.remove('lay-hov');
    phoSix.classList.remove('lay-hov');
    phoSeven.classList.remove('lay-hov');
    phoEight.classList.remove('lay-hov'); 
}
bttnFive.onclick = function (){
    'use strict';
    this.classList.add('active');
    bttnOne.classList.remove('active');
    bttnTwo.classList.remove('active');
    bttnThree.classList.remove('active');
    bttnFour.classList.remove('active');
    bttnSix.classList.remove('active');
    phoOne.style.opacity=('.1');
    phoTwo.style.opacity=('.1');
    phoThree.style.opacity=('.1');
    phoFour.style.opacity=('1');
    phoFive.style.opacity=('.1');
    phoSix.style.opacity=('.1');
    phoSeven.style.opacity=('.1');
    phoEight.style.opacity=('.1'); 
    phoOne.classList.remove('lay-hov');
    phoTwo.classList.remove('lay-hov');
    phoThree.classList.remove('lay-hov');
    phoFour.classList.add('lay-hov');
    phoFive.classList.remove('lay-hov');
    phoSix.classList.remove('lay-hov');
    phoSeven.classList.remove('lay-hov');
    phoEight.classList.remove('lay-hov'); 
}
bttnSix.onclick = function (){
     'use strict';
     this.classList.add('active');
    bttnOne.classList.remove('active');
    bttnTwo.classList.remove('active');
    bttnThree.classList.remove('active');
    bttnFour.classList.remove('active');
    bttnFive.classList.remove('active');
    phoOne.style.opacity=('.1');
    phoTwo.style.opacity=('.1');
    phoThree.style.opacity=('.1');
    phoFour.style.opacity=('.1');
    phoFive.style.opacity=('1');
    phoSix.style.opacity=('.1');
    phoSeven.style.opacity=('.1');
    phoEight.style.opacity=('1');
    phoOne.classList.remove('lay-hov');
    phoTwo.classList.remove('lay-hov');
    phoThree.classList.remove('lay-hov');
    phoFour.classList.remove('lay-hov');
    phoFive.classList.add('lay-hov');
    phoSix.classList.remove('lay-hov');
    phoSeven.classList.remove('lay-hov');
    phoEight.classList.add('lay-hov'); 
   
}
/* End buttons Changing  */
/* Start go up button by jqery */
$(document).ready(function () {
    
    
    
    $(window).scroll(function () {
        
       if ($(window).scrollTop() > 500){
           
           
           $(scrollGoUp).fadeIn(500);
        
       } 
        else{
            
            $(scrollGoUp).fadeOut(500);
        }
    });
    
    var scrollGoUp = $('.go-up');
    
    $(scrollGoUp).click(function () {
       
        $('html, body').animate({
           
            scrollTop: 0
            
        }, 1000);
    });
});

/* End go up button by jqery */


































































