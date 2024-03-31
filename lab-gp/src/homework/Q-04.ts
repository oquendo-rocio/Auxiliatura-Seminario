(() => {

  /* APLICA DRY */
  
  //EX - 1
  
 /* function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }*/

  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }
  
  function calculateOperation1(a: number, b: number, c: number): number {
    return calculateOperation(a, b, c);
  }
  
  function calculateOperation2(x: number, y: number, z: number): number {
    return calculateOperation(x, y, z);
  }

  // EX - 2
  /*function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }*/
  const calculateArea = (shape: string, ...args: number[]): number => 
  ({
    rectangle: (length: number, width: number) => length * width,
    circle: (radius: number) => Math.PI * radius * radius,
  }[shape.toLowerCase()](...args));
  
  const rectangleArea = calculateArea('rectangle', 5, 10);
  console.log(rectangleArea);
  
  const circleArea = calculateArea('circle', 3);
  console.log(circleArea);

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  /*function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }*/

  function validate(value: string, validationFunction: (value: string) => boolean): boolean {
    return validationFunction(value);
  }
  
  const validateEmail = (email: string): boolean => {
    return false;
  }
  const validateUsername = (username: string): boolean => {
    return false;
  }
  
  const isEmailValid = validate("example@email.com", validateEmail);
  console.log(isEmailValid); 
  
  const isUsernameValid = validate("example_username", validateUsername);
  console.log(isUsernameValid);

})();