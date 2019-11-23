var MaxNumber = 0;
var chances = 0;
var RandomNumber = 0;
var maxChances = 0;

function restart() {
  document.getElementById("buttons").style.display = "initial";
  document.getElementById("input").style.display = "none";
  document.getElementById("restart").style.display = "none";
  document.getElementById("Header").innerHTML = "Scegli la difficoltà";
  document.getElementById("tentativi").innerHTML = "";
}

function Difficulty(diff) { // selezione difficolta'
  if (diff == 1) 
  {
    MaxNumber = 10;
    chances = 4;
  } 
  else if (diff == 2) 
  {
    MaxNumber = 100;
    chances = 10;
  } 
  else if (diff == 3) 
  {
    MaxNumber = 1000;
    chances = 10;
  }
  RandomNumber = Math.floor(Math.random() * MaxNumber);
  maxChances = chances; //controllo maggiore o minore
  document.getElementById("buttons").style.display = "none";
  document.getElementById("Header").innerHTML = "Il numero da indovinare e' compreso tra 1 e " + MaxNumber;
  document.getElementById("tentativi").innerHTML = "hai " + (maxChances) + " tentativi";
  document.getElementById("input").style.display = "block";
  document.getElementById("restart").style.display = "initial";
}

function GuessFunction() { //prende l'input e lo confronta con il numero casuale
  var guess = document.getElementById("guess").value;
  chances--;
  if (guess == RandomNumber) 
  {
    if ((maxChances - 1) == chances) 
    {
      document.getElementById("tentativi").innerHTML = "giusto hai vinto in " + (maxChances - chances) + " tentativo";
      document.getElementById("input").style.display = "none";
    } 
    else
    {
      document.getElementById("tentativi").innerHTML = "giusto hai vinto in " + (maxChances - chances) + " tentativi";
      document.getElementById("input").style.display = "none";
    }
  } 
  else if (guess <= MaxNumber && guess != RandomNumber && guess >= 0) 
    {
    if (guess < RandomNumber) 
    {
      document.getElementById("tentativi").innerHTML = "troppo basso, hai ancora " + chances + " possibilita";
    }
    if (guess > RandomNumber)
    {
      document.getElementById("tentativi").innerHTML = "troppo alto, hai ancora " + chances + " possibilita";
    }
  } 
  else
   {
    document.getElementById("tentativi").innerHTML = "devi inserire un numero tra 1 e " + MaxNumber;
    chances++;
  }
  if (chances <= 0 && guess != RandomNumber) 
  {
    document.getElementById("tentativi").innerHTML = "HAI PERSO";
    document.getElementById("restart").style.display = "inline-block";
  }
  document.getElementById("guess").value="";
}

var input = document.getElementById("guess");
input.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
   event.preventDefault();
   GuessFunction();
  }
});