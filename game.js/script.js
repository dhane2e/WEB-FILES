
const boxs=document.querySelectorAll('.box');
const statusTxt=document.querySelector('.status');
const btnRestart=document.querySelector('#restart');

let x="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgcNu3kORaZnF0uC1cjDFXJkMdHR-JoZfWVPvmi1rh-0XDuTzZYpOk1s&usqp=CAU'>"; 
let o="<img src=' data:image/jpeg;base64,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'>";

const win=[
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6],
];

let options=["","","","","","","","",""];
let currentplayer=x;
let player="X";
let running=false;
init();

function init(){
boxs.forEach(box=>box.addEventListener('click',boxClick));
btnRestart.addEventListener('click',restartGame);
statusTxt.textContent=`${player} Your Turn`;
running=true;
}
function boxClick(){
const index=this.dataset.index;
if(options[index]!="" || !running){
    return;
}
      updateBox(this,index);
    chechWinner();
}
  function updateBox(box,index){
  options[index]=player;
  box.innerHTML=currentplayer;
}
function changePlayer(){
   player=(player=='X') ? "O" : "X";
   currentplayer=(currentplayer==x) ? o :x;
   statusTxt.textContent=`${player} Your Turn`;
    
}       
function chechWinner(){
    let iswin=false;
    for(let i=0;i<win.length;i++){
        const condition=win[i];  //[0,1,2]
        const box1=options[condition[0]]; //x
        const box2=options[condition[1]]; //''
        const box3=options[condition[2]]; //''

        if(box1=="" || box2=="" || box3==""){
            continue;
        }
        if(box1==box2 && box2==box3){
            iswin=true;
            boxs[condition[0]].classList.add('win');
            boxs[condition[1]].classList.add('win');
            boxs[condition[2]].classList.add('win');
     }
}
     if(iswin){
        statusTxt.textContent=`${player} win..`;
        running=false;
     }else if(!options.includes("")){
        statusTxt.textContent=`Game Draw..!`;
        running=false;
     }else{
        changePlayer();
     }
    }


function restartGame(){

     options=["","","","","","","","",""];
     currentplayer=x;
     player="X";
     running=true;
     statusTxt.textContent=`${player} Your Turn`;

     boxs.forEach(box=>{
        box.innerHTML="";
        box.classList.remove('win');
     });
}









