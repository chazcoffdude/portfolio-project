//images 

let goingup = "images/ladder.gif";
let goingdown = "images/ladder2.gif";
let still = "images/staticladder.png";

//list of questions, their answer, and the attached associated image

let montysquestions = [
 ["You are on a ladder. Each step will come with its own question. You will answer each question with yes or no. Proceed?", true, "images/lament.gif"],
 ["Tomorrow, you will wake up twelve minutes earlier than usual. Continue sleeping?", false, "images/lament.gif"],
 ["You crawl out from your covers and see that you are completely submerged in darkness. Turn the lights on?", true, "images/lament.gif"],
 ["You feel around for the light switch. Your hands stop at something cold and metallic. Inspect?", false, "images/lament.gif"],
 ["You ignore the object, instead finding the light switch. You flick it on, the flourescent bulb above buzzing. Prepare for school?", true, "images/bedroomstill.jpg"],
 ["You stumble into the bathroom, tripping on a half opened box of dominoes. Brush teeth?", true, "images/bathroom.jpg"] ,
 ["You start brushing. Your throat swells and your gums begin to ache. Continue?", false, "images/brushingteeth.gif"],
 ["You turn the faucet off and walk to your garage. Open garage door?", true, "images/garage.jpg"],
 ["The garage door grinds and folds. You are blinded by the sun. Step outside?", true, "images/garageopen.jpg"],
 ["Your eyes are struck by the sun, everything around you blurring. Head for the bus stop?", false, "images/blurryview.jpg"],
 ["You take the bus to school. The person next to you wears black socks and a South of Heaven tshirt. Talk to them?", false, "images/drivetowork.gif"],
 ["You lay your head back and begin to doze off. Enter sleep?", true, "images/lament.gif"],
 
]


//ladder pos and other important vars
let lp = 0;
let textbox = document.getElementById("textinput");
textbox.innerText = montysquestions[0][0];
let ladderimage = document.getElementById("ladderimg");
let encounterimg = document.getElementById("encounterimg");







function checkanswer(x){
//checks if the inputted answer is yes or no, and then checks the question list to see if it's
//the right answer

if(x == "yes" || "no"){

function moveup(){
  lp += 1;
  textbox.innerText = montysquestions[lp][0];
  console.log("You moved up.");
  ladderimage.src = goingup;
  codeline.value = "";
  encounterimg.src = montysquestions[lp][2]

}
function stationary(){
  
  console.log("You're going nowhere, pipsqueak");
  ladderimage.src = still;
  codeline.value = "";
}
function movedown(){
  if(lp >= 1){
  lp -= 1;
  textbox.innerText = montysquestions[lp][0];
  console.log("You moved down.");
  ladderimage.src = goingdown;
  codeline.value = "";
  encounterimg.src = montysquestions[lp][2];
  }else{
    stationary();
  }
  
}

answer = montysquestions[lp][1];

if(answer == false){
//montyanswer is false
console.log("Answer should be no.");
if(x == "yes"){
  movedown();
}else if (x == "no"){
  moveup()
}else{
  stationary();
}

}else{
  
//montyanswer is true
console.log("Answer should be yes.")
if(x == "yes"){
  moveup();
}else if(x ==  "no"){
  movedown();
}else{
stationary();
}

}
}    
}


let codeline = document.getElementById("textoutput");
//following code to detect enter press to confirm
codeline.addEventListener("keyup", function(event) {
  
  if (event.keyCode === 13) {
      //keycode 13 = enter
    event.preventDefault();
    //^ new thing I haven't used before, cancels the function if it doesn't run right 
    document.getElementById("textoutput").click();
    console.log(codeline.value);
    checkanswer(codeline.value.toLowerCase());
  }
});



  


















