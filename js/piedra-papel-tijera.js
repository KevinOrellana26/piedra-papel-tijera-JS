function fnAleatorio(min, max) {
  //.floor -> quita los decimales
  //.random -> numero aleatorio entre 0 y 1
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function fnMostrarEleccion(eleccion) {
  if(eleccion == 1) return "Elegiste 🪨";
  if(eleccion == 2) return "Elegiste 🧻";
  if(eleccion == 3) return "Elegiste ✂️";
  return "❌";
}

function fnGanador(jugador, pc){
  if(jugador == pc) return "Empate";
  if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
    return "Ganaste!!!";
  }
  return "Perdiste";
}

let jugador=0;
let pc=fnAleatorio(1,3);

do {
  jugador = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"));
}while(![1,2,3].includes(jugador));

alert(`Elegiste: ${fnMostrarEleccion(jugador)}`);
alert(`PC Elige: ${fnMostrarEleccion(pc)}`);

alert(fnGanador(jugador, pc));