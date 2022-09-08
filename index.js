var numberOfButtons = document.querySelectorAll(".drum").length;
// переменная которая содержит количество кнопок


//цикл с кликом который создает звук и меняет внешний вид

for (i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
    });
   
}


//функция звука по кнопке

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
            
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            
            break;
        case "d":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
            
            break;
        case "k":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
            
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
            
            break;
       

        default: 
    }
}


//детект нажатия кнопки на всей страницы со звуком и внешкой

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});



//функция которая меняет цвет кнопки



function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
    activeButton.classList.remove("pressed");
    },100);
}







// // переменная которая содержит количество кнопок
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// //
// //цикл с кликом который создает звук и меняет внешний вид
// for (i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click" ,function () {
//         var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML);
//     buttonAnimation(buttonInnerHTML);
//     });
// }
// //

// //функция звука по кнопке
// function makeSound(key) {
//     switch (key) {
//         case "w":
//             var tom1 = new Audio('sounds/tom-1.mp3');
//             tom1.play();
//             break;
//             case "a":
//                 var tom2 = new Audio('sounds/tom-2.mp3');
//                 tom2.play();
//                 break;
//         default:
//     }
  
// }
// //

// //детект нажатия кнопки на всей страницы со звуком и внешкой
// document.addEventListener("keypress", function(event) {
//     makeSound(event.key);
//     buttonAnimation(event.key);
// })
// //

// //функция которая меняет цвет кнопки

// function buttonAnimation (currentKey) {
//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function () {
//   activeButton.classList.remove("pressed");
//   },100);
// }
// //




























// var numberOfDrumButtons = document.querySelectorAll(".drum").length;


// for (i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {

//         var buttonInnerHTML = this.innerHTML;

//   makeSound(buttonInnerHTML);

//   buttonAnimation(buttonInnerHTML);
//     });
// }

// document.addEventListener("keypress", function (event) {
//     makeSound(event.key);
//     buttonAnimation(event.key);
// });

// function makeSound(key) {
//     switch (key) {
//         case "w":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;

//         case "a":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;
//         case "s":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;
//         case "d":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break;
//         case "j":
//             var tom5 = new Audio("sounds/crash.mp3");
//             tom5.play();
//             break;
//         case "k":
//             var tom6 = new Audio("sounds/kick-bass.mp3");
//             tom6.play();
//             break;
//         case "l":
//             var tom7 = new Audio("sounds/snare.mp3");
//             tom7.play();
//             break;
//         default: console.log(buttonInnerHTML);
//     }

// }

// function buttonAnimation(currentKey){

//    var activeButton = document.querySelector("." + currentKey);

//     activeButton.classList.add("pressed");

//     setTimeout(function() {
//         activeButton.classList.remove("pressed");
//     }, 100);
// }





