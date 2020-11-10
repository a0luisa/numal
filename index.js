
document.body.getElementsByTagName('button')[0].addEventListener("click", clicar);

function clicar(){
  var a = document.body.querySelector('#lowestNumber').value;
  var b = document.body.querySelector('#biggestNumber').value;
  var c = b-a;
  var rand = Math.round(Math.random()*c+Number(a));
  document.body.getElementsByTagName("h3")[0].innerText="O seu número é "+rand;
}
