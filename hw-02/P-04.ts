function createDates(name: string, ci: string, email: string): string{
    const personDate =`Nombre: ${name} CI: ${ci} EMAIL:${email}`
    return personDate;
  }
  
  const person = createDates("Rocio","8518887","rocio@gmail.com");
  console.log(person);
