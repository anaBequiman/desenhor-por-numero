x = 0;
y = 0;
maca = "";
altura = 0;
largura = 0;
fala = "";
numero = " ";
apple = " ";
drawApple = " ";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload(){
  apple = loadImage("apple.png");
}

function start(){
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 

recognition.onresult = function(event){
  console.log(event); 
  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
  numero = Number(content)
  if(Number.isInteger(numero)){
    document.getElementById("status").innerHTML = "A maça começou a ser desenhada";
    drawApple = "set";
  }
  else{
    document.getElementById("status").innerHTML = "O número não foi reconhecido";
  }
}
function setup(){
  largura = window.innerWidth;
  altura = window.innerHeight;
  cnv = createCanvas(largura-250,altura-250);
  cnv.position(150,150);
}
function draw(){
  if(drawApple == "set"){
    for( var i = 1; i<= numero; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
      document.getElementById("status").innerHTML = numero + "Maças desenhadas";
    }
    drawApple = " ";
  }
}
function speak(){
  var synth = window.speechSynthesis;
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis);
  speakData = numero + "Maças desenhadas";
}