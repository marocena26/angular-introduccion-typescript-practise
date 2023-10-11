// ========= EJERCICIOS - FUNCIONES =========

// ========= Función =========

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result: number = addNumbers(1, 2);

//cuando en una función no defines nada con return, por defecto devuelve 'void', esto significa que explicitamente no hay un return
//cuando no asignas un tipo de dato al parámetro, este por defecto se convierte en un tipo 'any'. Es importante definir los parámetros, si no sabemos de qué tipo va a ser también es aconsejable escribir "a:any"

// ========= Función tipo arrow =========

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

const result2: string = addNumbersArrow(1, 2);

//podemos determinar que tipo de dato queremos que nos de como respuesta, al pasarle dos datos de tipo number, typescript interpreta que el resultado va a ser un número, esto podemos cambiarlo al definir el resultado como un string con '():string' y más adelante hacer una interpolación con "`${a + b}`;"

// ========= Función múltiple =========

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}

const multiplyResult: number = multiply(5);

//podemos asignar datos obligatorios, no requeridos y datos con un valor específico (en ese orden)

console.log({result, result2, multiplyResult});

//es aconsejable no dejar que typescript interfiera todo, en algún momento puede equivocarse, así que se recomienda definir siempre los tipos de datos que esperamos recibir aunque sea obvio

// ========= Funciones con objetos como argumentos =========

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

//creamos una interfaz para que los tipos de datos que voy a pasar como parámetro a mi función esten definidos

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

//me creo una función para sumar punto de vida a mi personaje

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Punto de vida ${this.hp}`);
  },
};

healCharacter(strider, 10);
healCharacter(strider, 50), strider.showHp();

export {};
