(async () => {

  const productId = Math.floor(Math.random() * 100) + 1;

  const url = `https://dummyjson.com/products/${productId}`;

  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
})();
