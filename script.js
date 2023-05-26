//https://eloquentjs-es.thedojo.mx/04_data.html
//La programación es el acto de construir un programa—un conjunto de instrucciones precisas que le dicen a una computadora qué hacer. Porque las computadoras son bestias tontas y pedantes, la programación es fundamentalmente tediosa y frustrante.

//Cuando la acción deja de servirte, reúne información; cuando la información deja de servirte, duerme..

// NUMEROS BINARIOS
// 1 10 base 2 = 100 base 2 =  1000
//ejemplo
// 100  10  1
//  3   1   3

//ejemplo 2
// cuando se quiere saber un numero si es binario se empieza a contar de izquierda a derecha

//para saber los numeros binarios se empieza a contar de derecha a izquierda con exponente 2 y todos los numeros que tengas 1 se suman y eso dan un valor, en el caso de las letras la tabla ascci todos lo scaracteres tienen numero 
// 128  64  32  16  8  4  2  1
//          1   0   0  1  0  1

//para hacer la conversion de numero decimal a binario se hace pregunta de la izquierda a la derecha.  el numero dado es mayor o igual a nuemero con expoennete y asi sucesivamente hast llegar al 0

// console.log('"este es un salto de line \" \n"y este otro tambien es la segunda linea"')

console.log('manzana' == 'naranja')
console.log('manzana' != 'naranja')
console.log(2 == null)
console.log(null === undefined)

let cero = 0
let nan = NaN
const numero = 5
console.log(numero === 'string')

console.log(cero == false)
console.log(nan == false)
console.log(vacio === false)
console.log(null || 'ususario')
console.log(true || 'ususario')
console.log('arco' || 'ususario')
//el corto circuito de javascrip se considera asi porque la parte derecha de or y and es evaluada si es solo necesario porque empieza de izquierda a deracha y si falso en or es falso el de la derecha estara demas y en el and de igual manera si false en la izquierda y x en la dereacja imprimira ese valor
//+-*/ son binarios porque se utilizan con dos numeros para su funcion y de comparacion == y de logica &&|| y los unarios - ! typeof y ternarios de que ?: con un tercer valor


//number sieempres muestra false en string u numero no ytrata que convertir a nuenro em numero solo es verdadeor si es nana o nubenan para que se verdadero se puede ocuoar el signi de negacion logivco
let numeral = ''
let i = 0;
while(i < 8){
    numeral += '#'
    i++
    console.log(numeral)
}
console.log(numeral.length)

console.log('***************2************')

//fizz buzz

for(i = 1 ; i <= 100; i++){
    
    if(i % 3 === 0){
        console.log('Fizz')
    }else if(i % 5 === 0){
        console.log("Buzz")
    }

    if(i % 3 === 0 && i % 5 === 0){
        console.log('sssssss')
    }
    console.log(i)
}

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) 
    output += "Fizz";
    if (n % 5 == 0) 
    output += "Buzz";
    console.log(output || n);
  }


  

for(i = 1; i<= 4; i++){//2,3,4
  console.log(' # # # #')
  for(j = 0; j < i; j+=i){ //1,2,3
      console.log('# # # # ')
  }
}

for(i = 1; i<=50; i++){
  let n = ''
  if(i%3 === 0){
    n = n + 'fizz'
  }else if(i%5 === 0){
    n = n + 'buzz'
  }
  console.log(n || i)
}

const potencia = function(base, exponente){
    let resultado = 1;
    for(i = 0; i < exponente; i++){
      resultado *= base;
    }
    return resultado
}

console.log(potencia(2,4))

let numer = '1'
console.log(`${numer} + 5`)

function encontrarSolucion(objetivo) {
  function encontrar(actual, historia) {
    if (actual == objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    } else {//6,1+5 || 3, 1+3
      return encontrar(actual + 5, `(${historia} + 5)`) ||
             encontrar(actual * 3, `(${historia} * 3)`);
    }
  }
  return encontrar(1, "1");
}

console.log(encontrarSolucion(13));

function min (arg1, arg2){
  if(arg1 < arg2){
    return arg1
  }else{
    return arg2
  }
}

console.log(min(0, 10))
console.log(min(0, -10))

function esPar (entero){
  if(entero%2 === 0){
    return true
  }else{
    return false
  }
}

console.log(esPar(50))
console.log(esPar(75))
console.log(esPar(-1))

  function contarFs(texto){
   let contarF = 0
      for(i = 0; i < texto.length; i++){
         if(texto[i] === 'F'){
            contarF ++
         }
      }
      return contarF 
  }

  console.log(contarFs("FFC"))

  function contarCaracteres (string, caracter){
    let contarF = 0
      for(i = 0; i < string.length; i++){
         if(string[i] === caracter){
            contarF ++
         }
      }
      return contarF 
  }
  console.log(contarCaracteres('kakkerlak', 'k'))


 //Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
//  let frase = 'hola a todas'
//  let contarA = 0
//   for(i = 0; i < frase.length; i++){
//    if(frase[i] === 'a'){
//         contarA ++
//    }
//  }

//  console.log(contarA)


 /*const car = {
  color: 'red',
  marca: 'bmv',
  anyo: 2020
 }
 car.marca = 'kia'
 console.log(car)
 //console.log(Object.keys(car))

 const person ={
  name: 'jokin',
  lastname: 'mk',
  color: 'blak'
 }

 console.log(Object.assign(car,person))

 console.log(typeof[])
 let {name} = {
  name: 'jokin',
  lastname: 'mk',
  color: 'blak'
 }

 console.log(name)*/
// let book = []
//  function anadir (palabra, numero){
//     book.push({palabra, numero})
//  }

//  anadir('hola', 'torres')
//  anadir('ss', 'to')
//  console.log(book)
// //for of itera string y arrays 
//  function mezclar (lista, indice) {
//   return lista.slice(0, indice).concat(lista.slice(indice +1))
//  }

//  console.log(mezclar([1, 2, 3, 4, 5, 6, 7, 8], 2))


/*let newArray = []
function range(star,end){
  for(i = star; i<=end; i++){
    newArray.push(i)
  }
  return newArray
}

console.log(range(5, 10))

let array = []
function rango(inicio, final, paso = -1){
  if(final > inicio){
      for(i = inicio; i <= final; i+= paso){
        array.push(i)
      }
  }else{
    for(i = inicio; i >= final; i -=paso ){
      array.push(i)
    }
  }
    return array
}

console.log(rango(5, 2, 1))

function suma (lista){
  let numeros = 0
  for(i = 0; i <= lista.length; i++){
      numeros += i
  }


  return numeros
}

console.log(suma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))*/

 /*function revertirArray (array){
  let lista = []
   for(i = array.length -1; i >= 0; i--){
       lista.push(array[i])
    }
   return lista
 }

 //console.log(revertirArray(['A', 'B', 'C']))

 let newLista = []
  function revertirArrayEnLugar(array){
   for(i = array.length -1; i >= 1; i--){
       let old = array[i];

      }
      return newLista
  }*/

//  console.log(revertirArrayEnLugar([6,5,4,3,2,1]))

// function arrayALista (array){
//  for(i = array.length -1 ; i >= 0; i--){

//  }
// }

/*function arrayToList (array){
  let list = null;
  for(i = array.length -1;i>= 0; i--){
    list = {value: array[i], rest:list}
  }

  return list
}
function listToArray (list){
  let array = []
  for(node = list; node; node = node.rest){
    array.push(node.value)
  }
  return array
}

function prepend (value, list){
  return {value, rest:list};
}

function nth(list, n){
  if(!list) return undefined
  else if(n == 0) return list.value;
  else return nth(list.rest, n-1)
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
/*function lanzar (array){
  let cars =null
  for(i = array.length -1; i>=0; i--){
      cars ={
      color: i,
      marca: 'hyundai',
      repetir : cars
    }
  }
  return cars
}

console.log(lanzar([1, 2, 3 ,4]))*/

/*function igualdadProfunda(verdad, falso){

    if(typeof verdad == 'object' &&  verdad != null)
         return Object.keys(verdad)
     if(typeof falso == 'object' && falso != null)
      return Object.keys(falso) 
     if(Object.keys(verdad) == Object.keys(falso) ){
          return true
    }else{
      return false
    }

}


function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let objeto = {aqui: {hay: "un"}, objeto: 2};

console.log(deepEqual(objeto, objeto));
// → true
console.log(deepEqual(objeto, {aqui: 1, object: 2}));
// → false
console.log(deepEqual(objeto, {aqui: {hay: "un"}, objeto: 2}));
// → true*/

//https://eloquentjs-es.thedojo.mx/05_higher_order.html


/*function repetir(n, accion){
  for(i = 0; i< n; i++){
    accion(i);
  }
}
let etiquetas = []
repetir(5, i => 
  etiquetas.push(`Unidad ${i + 1}`)
);

console.log(etiquetas)
////////////////////////////////////////////////
function mayorQue (n){

  return  m =>{
    return m > n
  } 
}
let mayorQue10 = mayorQue(10);
//mayorque10 toma la funcion m=> m>n=10 y cuando llamas la funcion mayor que diez con el parametro m= 11 por eso m es mayor
console.log(mayorQue10(11))

function ruidosa(funcion) {
  return (...argumentos) => {
    console.log("llamando con", argumentos);
    let resultado = funcion(...argumentos);
    console.log("llamada con", argumentos, ", retorno", resultado);
    return resultado;
  };
}
ruidosa(Math.min)(3, 2, 1);
//funcio es math min toma lo sargumentos y escoje 

function aMenosQue(prueba, entonces) {
  if (!prueba) entonces();
}
//empieza por repetir le da sus parametros pero luego el segundo parametro llama a amenos que con sus parametros entonces dice si no hay prueba entinces llama funcion entonces(). 
repetir(5, n => {
  aMenosQue(n % 2 == 1, () => {
                            console.log(n, "es par");
                            }
  );
});*/

/*
function map(array, transformar) {
  let mapeados = [];
  for (let elemento of array) {
    mapeados.push(transformar(elemento));
  }
  return mapeados;
}

let otrasPersona = filtrar(person, valor => valor.age > 40);
console.log(map(otrasPersona, codigo => codigo.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]



 const lista = [1 ,2 ,3,4,5];
 function sumar (array, iteraSuma, inicio){
  let actual = inicio
  for(let elemento of array){
    actual = iteraSuma(actual, elemento)
  }
  return actual;
 }

 //console.log(sumar(lista, (a, b) => a +b, 0))

 let suma = 0
 for(i = 0; i <= lista.length; i++){
    suma = suma + i //0, 1, 2, 3, 4, 
 }
 console.log(suma)

 let sumarArray = person.reduce((a, b) => a > b ? a:b)
 console.log(sumarArray)*/

 /*let caballoZapato = "🐴👟";
 console.log(caballoZapato.length)
 console.log(caballoZapato[0]);
 //El método charCodeAt de JavaScript te da una unidad de código, no un código de carácter completo.
 console.log(caballoZapato.charCodeAt(0));

 //El método codePointAt, añadido despues, si da un carácter completo de Unicode.Entonces podríamos usarlo para obtener caracteres de un strin
 console.log(caballoZapato.codePointAt(0));

 let saludar = 'hola l  l'
 console.log(saludar.indexOf('l', 4))*/
 

//  let arrays = [[1, 2, 3], [4, 5], [6]];
//   console.log(arrays.reduce((plana, actual) => plana.concat(actual)).some(valor=> valor[0] == Number))
  

 /*const person = [
  {
    name: 'Jokin',
    lastName: 'Arriaga',
    age: 30,
    medidas: [25, 45, 25],
  },
  {
    name: 'Dvd',
    lastName: 'Arrow',
    age: 40,
    medidas: [25, 10, 85],
  },
  {
    name: 'Carl',
    lastName: 'Copa',
    age: 50,
    medidas: [2, 25, 5],
  },
  {
    name: 'Edgar',
    lastName: 'Cold',
    age: 100,
    medidas: [05, 78, 96],
  },
  {
    name: 'Roman',
    lastName: 'Fuentes',
    //age: 10,
    medidas: [52, 45, 96],
  }
]

let newPerson = person.filter(Element => Element.age !== undefined ).reduce((acumula, itera) => acumula.concat(itera.age), []).reduce((a, b)=> a+b, 100)

console.log(newPerson)*/

/*const ciclo = (valor, prueba, actualizar, funcion) => {
  for( i = valor; prueba(i); i = actualizar(i)){
      funcion(i)
  }
} 

ciclo(3, n => n > 0, n => n - 1, console.log);*/


/*function cada (array, prueba){
    for(let elemento of array){
      if(!prueba(elemento)) return false
    }
    return true
}

console.log(cada([1, 3, 5], n => n < 10));
// → true
console.log(cada([2, 4, 16], n => n < 10));
// → false
console.log(cada([], n => n < 10));
// → true*/

// function every(array, predicate) {
//   for (let element of array) {
//     if (!predicate(element)) return false;
//   }
//   return true;
// }

//  function every2(array, predicate) {
//    return !array.some(element => !predicate(element));
//  }

//  console.log(every2([1, 3, 5], n => n < 10));
// // → true
// console.log(every2([2, 4, 16], n => n < 10));
// // → false
// console.log(every2([], n => n < 10));
// // → true













