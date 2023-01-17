let countdowndisplay =document.getElementById('countdowndisplay');
let reload=document.getElementById('container')
function countdown()
{
let num=10
let count=0
let int = setInterval(()=>{
  
    let numbers=`<span class="numcolor"><b>${num}</b></span>`;
    let colornum=document.getElementsByClassName('numcolor')
    countdowndisplay.innerHTML=numbers;
  
    if (num <= 10) {
      countdowndisplay.style.color='green'
  
    }
  if (num <= 5) {
      countdowndisplay.style.color='red'
  
    }
  
  if (num === 0) {
    let reloadbtn=`<button id="resetbtn" onclick="countdown()"><b>RESET</b></button>`
    reload.innerHTML=reloadbtn

    clearInterval(int)
  }
  num=num-1
},2000)
}