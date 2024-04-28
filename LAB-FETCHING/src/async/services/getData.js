( async () => {

  const arrayRandom = new Uint32Array(1);

  crypto.getRandomValues(arrayRandom);
  const idProduct = arrayRandom[0] % 100 + 1;

  const url = `https://dummyjson.com/products/${idProduct}`;
  
  const response = await fetch(url);
  
  const data = await response.json();

  console.log(data); 

})();