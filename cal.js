function number(num){
    let display=document.getElementById('display')
    display.value += num

}
function clearscreen(){
    display.value=''
}
function calculate(){
    display.value=eval(display.value)
}
document.addEventListener("keydown", function (e) {
  const a = '0123456789+-*/';
  if (a.includes(e.key)) {
    number(e.key);
  } 
  else if (e.key === 'Enter') {
    calculate();
  } 
   else if (e.key === 'Backspace') {
    clearscreen();
  }
});