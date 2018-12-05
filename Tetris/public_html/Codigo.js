function NuevaPartida(){
    DibujarMapa();
}

function CrearPiezas()
{var piezas= [
     [[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],"amarillo"],
                 [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],"lila"],
                 [[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],"verde"],
                 [[[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,0]],"rojo"],
                 [[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],"azul"],
                 [[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],"naranja"],
                 [[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],"morado"] ];
 };
 
  var tablero= new Array();
     tablero = [
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,0,0,0,0,1],
     [1,1,1,1,1,1,1,1,1,1,1,1]
 ];
 
 function DibujarMapa() {//sirve para representar el mapa 
    for (var y = 0; y < 26; y++) { //se crea un contador que recorra toda la array mapa de 0 a 30 en filas
        for (var x = 0; x < 12; x++) { //se crea un contador que recorra toda la array mapa de 0 a 30 en columnas
             if(tablero[y][x] === 1) {//nos dice que si en alguna posicion de la array mapa hay un 1, lo cambie por un *
                document.write("*");
            }else if(tablero[y][x]===2){ //esto nos dice que en el caso de que se encuentre con un 2 en la array lo cambie por Jugador
                    document.write("J");
                }else if(tablero[y][x]===3){
                    document.write("F");
                }else
                document.write("&nbsp;"); //sino que lo deje en blanco
        }
        document.write("<br>");
    }
    }
