// ========= EJERCICIO - GENÉRICOS =========

// ========= Función sin utilizar genérico =========

// export function whatsMyType(argument: any) :any{
//     return  argument;
// }

// let amIString = whatsMyType("Hola Mundo");
// let amINumber = whatsMyType(100);
// let amIArray = whatsMyType([1, 2, 3, 4, 5]);

// ========= Función utilizando genérico =========

export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hola Mundo");
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
