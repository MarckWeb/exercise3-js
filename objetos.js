//los metodos de dentro de un objeto son solo valores que tiene como funcion:

//la programacion orientada a objetos, es un conjunto de tecnicas que usan objetos(objetos normales{})

//Encapsulacion= usar uyna funcion dentro de los objetos


//esto es un metodo que las bjetos estas toamdo para hacer algo con sus propiedades
function hablar(linea){
    console.log(`el conejo ${this.tipo} dice "${linea}"`)
}

let conejoBlanco = {
    tipo: 'blanco',
    hablar
}

let conejoHambriento = {
    tipo: 'hambriento',
    hablar
}
//un metodo debe hacer algo en el objeto para estar ahi
conejoBlanco.hablar("Oh mis orejas y bigotes, " + "que tarde se esta haciendo!");

conejoHambriento.hablar("Podria comerme una zanahoria ahora mismo.");

//se puede pensar en this como un parametro nuevo pasdo 
hablar.call(conejoHambriento, 'burp')

//this hace referencia al objeto donde se utilizara el metodo.

//******************************************* */
//PROTOTIPOS= son subfunciones que vienen con los objetos que tenemos en js, el cual se puedes ver en la consola un lisatdo de prototipos

//en los prototipos primero lee el valor de los objetos, luego si no encontro nada, entra a las subfunciones, y asi sucesivamente hast allegar a las funciones predetermiandas

const persona = {
    nombre: 'david',
    edad: 25,
    saludar : function(saludo){
        console.log(`hello iam ${this.nombre} y ${saludo}`)
    }
}
console.log(persona)

//El Object.create()método estático crea un nuevo objeto, utilizando un objeto existente como prototipo del objeto recién creado.
const newPersona = Object.create(persona)
//newPersona.saludar('yo si saludo')



//ejemplo eloquent prototipo
let conejoPrototipo = {
    hablar (linea) {
      console.log(`El conejo ${this.tipo} dice '${linea}'`);
    }
  };
//se crea un objeto indicidual con obejt,create, y tomara las propiedades de conejoprototipo cambiando su tipo
  let conejoAsesino = Object.create(conejoPrototipo);

  conejoAsesino.tipo = "asesino";
  conejoAsesino.hablar("SKREEEE!");

  //CLASES-. es la forma de un tipo de objeto, si se llama instancia de clases

  // las prototipos son utiles, pro que todas las nuevas instancias pueden compartir el mismo valor com metodos.

//se debe hacer una instancia del prototipo adecuado, y tambien hay que aseguararse de que este constructor tenga las propiedades que la nueva instancia nesecitara.
//funcion  constructora
  function crearConejo(tipo) {
    let conejo = Object.create(conejoPrototipo);
    conejo.tipo = tipo;
    return conejo;
    //esto es una manera que ya no se utiiza y hay mejor forma de hacer esto
  }


  //FUNCION TRATADA COMO UN CONSTRUCTOR-. debe llevar mayuscula al comienzo
  function Conejo(tipo) {
    //funcion constructor
    this.tipo = tipo;
  }
// esta toamdo el el valro de conejo para invocar junto con la funcion
  Conejo.prototype.hablar = function(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
  };
  //si se coloca la palabra new delante de una llamada de una funcion, la funcion sera tratadac como un constructor

//una ves que se crea la nueva instancia del constructor se puede llegar a usar todos sus propiedades del objeto padre.
  let conejoRaro = new Conejo("raro");
  console.log(conejoRaro)
  conejoRaro.hablar('hola a todos')

  let conejoSalton = new Conejo()
  conejoSalton.tipo = 'salton'
  conejoSalton.hablar('salto mucho')
//lo constructores de javascript son funciones que hacen algo

//NOTACION DE CLASE = ahora se escribe de esta forma, antes se tenia que hacer las funciones constructoras


 class Person {
  constructor(name,lastname){
      this.name = name
      this.lastname = lastname
  }
  greet(){
      return `${this.name} ${this.lastname}`
  }

  saludar() {
      return "I'm"+ ' ' + this.name
  }
}

const user = new Person("Joe", 'Owen')
console.log(user.greet())
console.log(user.saludar())


let edades = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia tiene ${edades["Júlia"]}`);
// → Júlia tiene 62
console.log("Se conoce la edad de Jack?", "Jack" in edades);
// → Se conoce la edad de Jack? false
console.log("Se conoce la edad de toString?", "toString" in edades);
// → Se conoce la edad de toString? true

//POLIMORFISMO -. es cuando se crea una funcion directa en el prototipo o creado en dos en dos funciones constructuras y se puede utilzar los dos constructores con sus propiedades ver fazt

Conejo.prototype.toString = function() {
  return `un conejo ${this.tipo}`;
};

//console.log(String(conejoNegro));
// → un conejo negro

//SIMBOLO-. se puede crear un simbolo unico al aplicar o comoara una variable igual a symbol ya pasarle un nombre de parametro 

//el simbolo entonces es una forma de llamar a las propiedades que se reutilizaran o haran algo como funcion. esto es parecido a crear una toString(), Number() que son nombres propios 

const simboloToString = Symbol("toString");
//prototipo de array que se combirtio en una funcion que cuenta una longitud de array y muestra el resultado por consola
Array.prototype[simboloToString] = function() {
  return `${this.length} cm de hilo azul`;
};


console.log([1, 2].toString());
// → 1,2

let lista = [1,2,3,4,5,6]
console.log(lista[simboloToString]());
// → 2 cm de hilo azul

//[Symbol.iterator](); =  es un metodo que itera sobre el valor dado el cual manda un resulatdo en objeto y que tiene sus nombre de propiedades next()siguiente, value(todos los valores ieterardos), done (listo) ya termino mostrara false, cuando termine true
//el cual puede iterar arrays y string


let iterarConSimbolo = ['hola'][Symbol.iterator]();
console.log(iterarConSimbolo.next())
console.log(iterarConSimbolo.next())


//clase matriz que actuara como un array bidimencional
//cuando se hace una  nueva instancia los patrametros a colocar con los del constructor porque matriz sus parametros serian lso valores que estan en constructor
//el constructor solo se puede ejecutar en el momento de que creamos una nueva instancia
//en las clases el constructor se ejecuta una sola vez

class Matriz{
  constructor(ancho, altura, elemento = (x, y) => undefined){
    this.ancho = ancho;
    this.altura = altura;
    this.contenido = [];

    for(let y = 0; y < altura; y++){
      for(let x = 0; x < ancho; x++){
        this.contenido[y * ancho + x] = elemento(x, y)
      }
    }
  }

  obtener(x, y){
    return this.contenido[y * this.ancho + x];
  }

  establecer(x, y, valor){
    this.contenido[y * this.ancho + x] = valor
  }
}


class IteratorMatriz {
  constructor(matriz){
    this.x = 0
    this.y = 0
    this.matriz = matriz
  }

  next(){
    if(this.y === this.matriz.altura) return {done:true};
    let value = {x : this.x,
                  y: this.y,
                  value: this.matriz.obtener(this.x, this.y)

                  }
    this.x++;
    if(this.x == this.matriz.ancho){
      this.x = 0;
      this .y++;
    }
    return {value, done:false}
}

}

Matriz.prototype[Symbol.iterator] = function(){
  return new IteratorMatriz(this)
}

let matriz1 = new Matriz(2,2, (x,y)=> `valor ${x}, ${y}`)

for(let {x, y, value} of matriz1){
    console.log(x, y, value)
}
//getter y setter
let tamañoCambiante = {
  //para mostrar por consoal he entendido que si usas get no es necesario colocar los parentesis a la funcion tamaño cunado tiene el get.

  //quiere decir que cuando get esta ahi la funcion yaa sido llamada
  get tamaño() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(tamañoCambiante.tamaño);
// → 73
console.log(tamañoCambiante.tamaño);
// → 49
//usando stter = al igyual que geteer ya se llama sin colocar parentesis
class Temperatura {
  constructor(celsius) {
    this.celsius = celsius;
  }
  //Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.
  //el get esta obteniendo el valor de la propiedad celsio
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  //y set esta estableciendo un valro para al constructor celcio, 
  set fahrenheit(valor) {
    this.celsius = (valor - 32) / 1.8;
  }

  static desdeFahrenheit(valor) {
    return new Temperatura((valor - 32) / 1.8);
  }
}

let temp = new Temperatura(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30

//Funcionamiento
// En ocasiones queremos valores basados en otros valores, para esto los data accessors son bastante útiles.

// Para crearlos usamos los keywords get y set

const obj = {
  get prop() {
    return this.__prop__;
  },
  set prop(value) {
    this.__prop__ = value * 2;
  },
};

obj.prop = 12;

console.log(obj.prop); //24

//https://yeisondaza.com/entendiendo-getters-y-setters-en-javascript

//HERENCIA -. se refirea a crear una nueva clase constructor para que este herede las propiedds y comportamiendo de la clase antigua
//en este ejemplo se crea matrizsimetrica donde mtriz es la antigua

class MatrizSimetrica extends Matriz {
  //exend indica que la clase no debe estar directamente en el prototipo de objeto predeterminado
  constructor(tamaño, elemento = (x, y) => undefined) {
    super(tamaño, tamaño, (x, y) => {
      if (x < y) return elemento(y, x);
      else return elemento(x, y);
    });
  }

  set(x, y, valor) {
    super.set(x, y, valor);
    if (x != y) {
      super.set(y, x, valor);
    }
  }
}
//este constructor llamaa su constructor atravez de la palabra super
let matriz = new MatrizSimetrica(5, (x, y) => `${x},${y}`);
//console.log(matriz.get(2, 3));
// → 3,2

//El operador instanceof = nos dice si un objeto fue derivadi de una clase especifica. 
//el operador ve atraves de los tips heredados pro lo que que una MatrizSimetrica(2) instanceof Matriz.
console.log(new MatrizSimetrica(2) instanceof MatrizSimetrica);
// → true
console.log(new MatrizSimetrica(2) instanceof Matriz);
// → true
console.log(new Matriz(2, 2) instanceof MatrizSimetrica);
// → false
console.log([1] instanceof Array);

//Una cosa útil que hacer con los objetos es especificar una interfaz para ellos y decirle a todos que se supone que deben hablar con ese objeto solo a través de esa interfaz

//. El resto de los detalles que componen tu objeto ahora estan encapsulados, escondidos detrás de la interfaz.

// Más de un tipo puede implementar la misma interfaz. El código escrito para utilizar una interfaz automáticamente sabe cómo trabajar con cualquier cantidad de objetos diferentes que proporcionen la interfaz. Esto se llama polimorfismo.

// Al implementar múltiples clases que difieran solo en algunos detalles, puede ser útil escribir las nuevas clases como subclases de una clase existente, heredando parte de su comportamiento.
//Un tipo vector
// Escribe una clase Vec que represente un vector en un espacio de dos dimensiones. Toma los parámetros (numericos) x y y, que debería guardar como propiedades del mismo nombre.

// Dale al prototipo de Vector dos métodos, mas y menos, los cuales toman otro vector como parámetro y retornan un nuevo vector que tiene la suma o diferencia de los valores x y y de los dos vectores (this y el parámetro).

// Agrega una propiedad getter llamada longitud al prototipo que calcule la longitud del vector—es decir, la distancia del punto (x, y) desde el origen (0, 0)

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mas(otroVector) {
    
    return new Vec(this.x + otroVector.x, this.y + otroVector.y);
  }

 menos(otroVector) {
    return new Vec(this.x - otroVector.x, this.y - otroVector.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).mas(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).menos(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);

//ej 2
class Conjunto {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
