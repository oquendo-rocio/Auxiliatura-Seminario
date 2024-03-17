function createDates(name, ci, email) {
    var personDate = "Nombre: ".concat(name, " CI: ").concat(ci, " EMAIL:").concat(email);
    return personDate;
}
var person = createDates("Rocio", "8518887", "rocio@gmail.com");
console.log(person);
