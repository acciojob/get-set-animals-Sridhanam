class Animal {
    constructor(species) {
        this._species = species; // Use a private variable
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Cat extends Animal {
    purr() {
        console.log("purr");
    }
}

class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}

// Test your classes
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected Output: The Siamese makes a sound
myCat.purr(); // Expected Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected Output: The Golden Retriever makes a sound
myDog.bark(); // Expected Output: woof
