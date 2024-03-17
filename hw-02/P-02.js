function saludarUsuario(nombre) {
    const mensaje = `¡Hola, ${nombre}! Bienvenido/a a la clase de Seminario.`;
    return mensaje;
  }
  
  const nombreUsuario = "Rocio";
  const saludo = saludarUsuario(nombreUsuario);
  console.log(saludo);
  