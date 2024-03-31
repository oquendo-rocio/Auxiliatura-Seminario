(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  
  //const l: Array<string> = [
  const mailMetaX: Array<String> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];
  console.log(mailMetaX);

  //Lista de compras de un carrito
  //const var2: Array<Object> = [
  const shoppingList: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];
  console.log(shoppingList);

  //funcion para sumar mas 3 a un numero y retornarlo
  //const fff = (asdfg: number): number => {
  const addThree = (number: number): number => {
    return number + 3;
  }
  console.log(addThree(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  /*function capi(w: string): string {
    w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }*/
  const capitalize = (palabra: string): string => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  }
  console.log(capitalize("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  //let www: boolean = false;
  let eventHappened: boolean = true;
  //if(www) console.log('event');
  if(eventHappened) console.log('event');


  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  //let c: boolean = true;
  let userAccess: boolean = true;

  if(userAccess) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  //const sudo: number = (1 + 2 + 3) / 3;
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);
  
  //variable que almacena el valor de PI
  //let pizza: number = 3.141592654;
  let valuePI: number = Math.PI;

  console.log(valuePI);
  

  //variabel que controla si un archivo es modificable 
  //let Bv: boolean = false;
  let modifiableFile: boolean = true;

  if(modifiableFile) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  //const eiova: number = 2.718281828459045;
  const e: number = Math.E; 

  console.log(e);

})();