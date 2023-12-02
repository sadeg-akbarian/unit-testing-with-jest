export class Person {
  constructor(theName, hobbies = []) {
    this.name = theName;
    this.hobbies = hobbies;
  }
  introduce() {
    return "My name is " + this.name;
  }
  addHobby(newHobby) {
    return this.hobbies.push(newHobby);
  }
}

// npm run test:coding -- -t "Person"
