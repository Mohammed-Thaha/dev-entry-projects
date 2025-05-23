/*
0-->rock
1-->paper
2-->scissor
*/


//instead of alert i want to show to my user about winning and give congrats


//random number generator
var computer_generate_value=Math.floor((Math.random()*3));
console.log(computer_generate_value);
var winner=document.getElementById("show_winner");
console.log(winner);
//image creation using js
var computer_image=document.getElementById("computer_image");

function replay(){
    var play_again=0;
    if(play_again==0){
        if(confirm("Are You Want To Play again")){
            location.reload();
        }else{
            alert("Thanks for playing the game");
        }
    }
    }
function rock_logic(){
    //rock-->paper win
    if(computer_generate_value==2){
        // alert("USER WIN")
        computer_image.src="images/scissor1.png";
        setTimeout(function(){winner.innerHTML="🎉YOU WON THE GAME🎉";},1050);
    }else if(computer_generate_value==0){
        computer_image.src="images/stone_game.png";
        setTimeout(function(){winner.innerHTML="🎉MATCH DRAW🎉";},1050);
    }else{
        computer_image.src="images/paper_game.png";
        setTimeout(function(){winner.innerHTML="🎉COMPUTER WON THE GAME🎉";},1050);
    }
    setTimeout(function(){replay();},1500);
}

function paper_logic(){
    if(computer_generate_value==0){
        computer_image.src="images/stone_game.png";
        setTimeout(function(){winner.innerHTML="🎉YOU WON THE GAME🎉";},1050);
    }else if(computer_generate_value==1){
        computer_image.src="images/paper_game.png";
        setTimeout(function(){winner.innerHTML="🎉MATCH DRAW🎉";},1050);
    }else{
        computer_image.src="images/scissor1.png";
        setTimeout(function(){winner.innerHTML="🎉COMPUTER WON THE GAME🎉";},1050);
    }
    setTimeout(function(){replay();},1500);
}

function scissor_logic(){
    if(computer_generate_value==1){
       computer_image.src="images/paper_game.png";
       setTimeout(function(){winner.innerHTML="🎉YOU WON THE GAME🎉";},1050);
    }else if(computer_generate_value==2){
        computer_image.src="images/scissor1.png";
       setTimeout(function(){winner.innerHTML="🎉MATCH DRAW🎉";},1050);
    }else{
        computer_image.src="images/stone_game.png";
        setTimeout(function(){winner.innerHTML="🎉COMPUTER WON THE GAME🎉";},1050);
    }
    setTimeout(function(){replay();},1500);
}

