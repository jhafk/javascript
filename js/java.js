/* 
2 - Escribe un programa que pueda calcular el área de 10 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

//1) Preguntemos la fgigura que deseamos
let figura = prompt("Escribe que figura deseas utilizar: Triangulo,Rectangulo,circulo,Cuadro,Rombo,Pentagono,Hexagono,Trapecio,Paralelo")

//2) Creamos las variables
let base;
let altura;
let radio;
let lateral;
let diametro;
let Diametro;
let perimetro;
let Area;


//3) Laas condiciones en base a lka pregunta --> Switch

switch(figura){
    case "Triangulo":
        //Le preguntamos en base a la formula 
        base = prompt("¿cuanto tienes de base?: ")
        altura = prompt("¿cuanto tienes de altura?: ")
        //Prueba en la consola
        console.log(`El area del triangulo es ${base*altura/2}`)
        break
    case "Rectangulo":
        base = prompt("¿cuanto tienes de base?: ")
        altura = prompt("¿cuanto tienes de altura?: ")
        console.log(`El area del Rectangulo es ${base*altura}`)
        break
    case "Circulo":
        //math.pow()
        console.log(`El area del circulo es ${math.pi* math.pow(radio,2)}`)
        break
    case "Cuadro":
        lateral = prompt("¿cuanto de lateral 1 tiene?")
        lateral = prompt("¿cuanto de lateral 2 tiene?")
        console.log(`El area de un cuadrado es ${lateral*lateral}`)
        break
    case "Rombo":
        Diametro =prompt("¿cuanto de Diametro tiene?")
        diametro = prompt("¿cuanto de diamtreo tiene?")
        console.log(`El area de un rombo es ${Diametro*diametro/2}`)
        break
    case "Pentagono":
        lateral=prompt("Cuanto de lateral tiene?")
        console.log(`El perimetro de un pentagono es ${lateral*5}`)


        default:
        consolo.log("Esta figura no esta dsponible")


}