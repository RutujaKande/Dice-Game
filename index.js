var randomNumber1=Math.random();
randomNumber1=randomNumber1*6+1;
randomNumber1=Math.floor(randomNumber1);

var image1="images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",image1);



var randomNumber2=Math.random();
randomNumber2=randomNumber2*6+1;
randomNumber2=Math.floor(randomNumber2);

var image2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",image2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins!";
}
if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player2 wins!";
}
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}



// if (randomNumber1===1){
//   document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// if (randomNumber1===2){
//   document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
//
// if (randomNumber1===3){
//   document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
//
// if (randomNumber1===4){
//   document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
//
// if (randomNumber1===5){
//   document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
//
// if (randomNumber1===6){
//   document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }
//
// var randomNumber2=Math.random();
// randomNumber2=randomNumber2*6;
// randomNumber2=Math.floor(randomNumber2);
//
// if (randomNumber2===1){
//   document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// if (randomNumber2===2){
//   document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
//
// if (randomNumber2===3){
//   document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
//
// if (randomNumber2===4){
//   document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
//
// if (randomNumber2===5){
//   document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
//
// if (randomNumber2===6){
//   document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
//
//
