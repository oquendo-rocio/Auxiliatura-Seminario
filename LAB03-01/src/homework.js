(() => {

  /* Excercises */

  /* First excercise */
  let numbers = [1, 2, 3, 4, 5];
  let numberMultiplication = '[' + numbers.map(num => num * 5).join(', ') +']';
  console.log('EJERCICIO 1 MULTIPLICACION:', numberMultiplication);
  /*Resultado esperado: [5, 10, 15, 20, 25] */
  /* First excercise */

  /* Second excercise */
  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"]; 
  let sortNames = names.sort();
  let sortStringNames = '[' + sortNames.map(name => `"${name}"`).join(', ') + ']';
  console.log('EJERCICIO 2 ORDEN NOMBRES:', sortStringNames);
  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */
  /* Second excercise */

  /* Thrid excercise */
  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];
  const unique = data.filter((letter, index, array) => array.indexOf(letter) === index);
  const newData = '[' + unique.map (data => `'${data}'`).join(', ') +  ']';
  console.log('EJERCICIO 3 NO REPETIDAS:', newData);
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */
  /* Thrid excercise */

  /* Fourth excercise */
  const largeWord = "abcdabcdABCD";
  const charCount = {};
  for(const char of largeWord){
    charCount[char] = (charCount[char] || 0 ) + 1;
  }
  console.log('EJERCICIO 4',charCount);

  
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */
  /* Fourth excercise */
})();
