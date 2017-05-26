const dog = {
    type: "Mammal",
    name: "",
    setName: function(newName) { // zamiast strzałkowej normalna funkcja
        this.name = newName;
    }
}

dog.setName("Reksio");
console.log(dog.name);

// zadanie 8
// const dog = {
//     type: "Mammal",
//     name: "",
//     setName: (newName) => {
//         dog.name = newName;
//     }
// }
//
// dog.setName("Reksio");
// console.log(dog.name);
