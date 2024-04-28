# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Install & Run
- yarn 
- yarn dev

##  FETCHING DE DATOS CON TSX
Modificaciones en los codigos javascript de fetching dentro del proyecto que ahora llevaran extension tsx.
**1. getData.ts:**
Como se puede observar, se realizo modificaciones en el codigo, sin alterar la funcionalidad.
<details>
<summary>Ver</summary>

```ts
(async () => {

  const productId = Math.floor(Math.random() * 100) + 1;

  const url = `https://dummyjson.com/products/${productId}`;

  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
})();
```
</details>

**2. main.tsx:**
Se realizaron algunas modificaciones dentro de respectivo codigo.
<details>
<summary>Ver</summary>

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
* Se importa React desde react. 
* Se importa createRoot desde react-dom/lient para su determinado uso.
* Se utiliza el ooperadr (!) en document.getElementById('root')! para indicar que el elemento con ID "root" siempre estará presente en el DOM y nunca será nulo.
</details>

**3. index.html:**
Se modifico una sola linea de dentro del respectivo codigo.
<details>
<summary>Ver</summary>

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
* se modifico en la linea del script ya que main ya no tendria la extension de jsx sino tsx.
</details>

**4. App.tsx:**
Se puede ver los siguientes cambios dentro del codigo.
<details>
<summary>Ver</summary>

```tsx
import React from 'react';
import './App.css';
import './async/services/getData';
import Card from './ui/components/Card';

function App(){

  return (
    <>
      <h2>LAB DATA - FETCHING</h2>
      <Card />
    </>
  );
};

export default App;
```
* Se exporto React.
</details>

**5. Card.tsx:**
Se realizaron modificaciones considerables dentro del respectivo codigo.
<details>
<summary>Ver</summary>

```tsx
import React, { useEffect, useState } from "react";
import "./Card.css";

interface Product {
  title: string;
  description: string;
  price: number;
}

const Card = () => {
  const [product, setProduct] = useState({ title: "", description: "", price: 0 });

  useEffect(() => {
    fetch(`https://dummyjson.com/products/2`)
      .then((res) => res.json())
      .then((data: Product) => setProduct(data));
  }, []);

  return (
    <div className="card-container">
      <p className="card-title">{product.title}</p>
      <p className="card-description">Descripcion: {product.description}</p>
      <p className="card-price">USD$: {product.price}</p>
    </div>
  );
};

export default Card;
```
* Se exporto React.
* import React, { useEffect, useState } from "react";: Importa las funcionalidades de React que se utilizarán en el componente.
* interface Product { ... }: Define una interfaz Product que describe la estructura de un producto con propiedades como title, description y price.
</details>