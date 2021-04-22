// Formas de definir un arreglo 
// Un arreglo es una estructura de datos estática. Ademas, es un conjunto de datos que se tienen ordenados en una estructura, a través de un indice
// Tema del Scope
var nombre_planetas = Array("Tierra", "Marte");
let distancias = [3, 4, 5, "67"];
const tamano = [102, 897, 201];

const planetas = []
    // Ejemplo de JSON
const planeta = {
    nombre: "Tierra",
    tamaño: 300000,
    distanciaAlaTierra: 0,
    minerales: ["mineral 1", "mineral 2", "mineral 3"]
}

// Para agregar el objeto en el arreglo Método Push
    // Este agrega el elemento al final del arreglo. 
planetas.push(planeta)
planetas.push({ nombre: "marte", tamaño: 80000, distanciaALaTierra: 676767676})

// El arreglo planetas tiene:
console.log(planetas);



nombre_planetas[2] = "Jupiter"


console.log(nombre_planetas);
console.log(distancias);
console.log(tamano);


// Para recorrer un arreglo

console.log("----While----");
let i = 0;
while (i <= 2) {
    console.log(nombre_planetas[i]);
    i = i +1;
}

// Ojo aca el scope influye, la j no se puede acceder afuera porque esta declarada solo en el ciclo for. 
    // Concepto de prototipos -- (Buscar)
        // Propiedad de los arreglo length
        console.log("----for----");
for (let j = 0; j < distancias.length; j++) {
  console.log(distancias[j]);
}

// Variaciones del For 
    // For in

    console.log("----for in----");
for (const key in nombre_planetas) {
    console.log(key);
    console.log(nombre_planetas[key]);
}

        // Diferencias entre == y ====
            // Para este ejemplo === es que se coincida si o si con el tipo de dato, mientras que el == es mas flexible
for (const key in distancias) {
    if (distancias[key] === 5) {
        console.log("Se encontro la distancia 5");
    }
}


    console.log("--- for of ----");
for (const iterador of nombre_planetas) {
    console.log(iterador);
    console.log(iterador);
}
    
// For Each 
    // El metodo forEach() llama a una función una vez para cada elemento de un arreglo, en orden 
        // Primero saber que es una funcion flecha
// Las funciones sirven para encapsular un pequeño fragmento de codigo

console.log(sumar(12, 3));
function sumar(n1, n2){
    // console.log("El valor de la suma es: " + (2+3));
    return n1 + n2;
}
    // Otra manera de definir funciones
    // Arrow function o funciones flecha (Deben definirse antes de ser invocadas)
let resta = (n1, n2) => {
    return n1 - n2;
}

console.log(resta(5, 2));

// Otra forma de hacer la funcion flecha 
    // FORMA MAS RECOMENDADA 
    let resta2 = (n1, n2) => n1 - n2;
        // Retorna lo que esta despues de flecha;

console.log(resta2(20, 10));
                // Uso del ForEach
            // OJO A LA DERECHA DE FLECHA SI SE PONEN VARIOS ELEMENTOS SEPARADOS POR ; 
    const miFuncionIteradora = (planeta) => console.log("El planeta es: " + planeta);
    

            // NOTA:
    // A medida que el va iterando el va a ejecutar la funcion (Funcion Callback)
        // Funcion anonima: Se declara dentro del mismo ciclo que utilice, cuando la declaro en el lugar donde la necesito


let resultado = nombre_planetas.forEach ((miFuncionIteradora)); 
    // Aca no devuelve nada: Underfined
console.log(resultado);

            // El metodo map si devuelve un arreglo de la dimension que se solicita 

        // Map

console.log("---map----")

let resultado_map =  nombre_planetas.map((planeta, index) => {
        console.log(planeta);
        console.log(index);
        return "El tamaño del planeta  " + planeta + " es " + tamano[index];
    })

    console.log(resultado_map);


        // Filter 
            // Itera pero verifica de acuerdo a una condicion que se quiera que yo itere. 

    console.log("---filter---")

tamano.filter((t) => {
    console.log("Tamaño es: " + t);
})

let resultado_filter = tamano.filter((x) => {
    return x % 2 == 0
})

console.log(resultado_filter);

    // Funcion find 

        // Se usa para buscar un valor especifico }
        // Ubica exactamente en un arreglo, saber si existe o no, y el devuelve el valor que cumpla la condición. 
console.log("--find--")
let resultado_find = tamano.find((valor) => valor % 2 != 0)
console.log(resultado_find);

// Otro ejemplo

let resultado_find2 = planetas.find((planeta) => planeta.nombre.toLocaleLowerCase() == "marte")
console.log(resultado_find2);

console.log("--find/index--")
    // toLocaleLowerCase -- es para poner coincidencia en minuscula 
let resultado_findIndex = nombre_planetas.findIndex((p) => p.toLocaleLowerCase() == "tierra")
console.log(resultado_findIndex);

console.log("--includes--")

// Revisar la documentacion
let resultado_includes = nombre_planetas.includes("Tierra", 0);
console.log(resultado_includes);