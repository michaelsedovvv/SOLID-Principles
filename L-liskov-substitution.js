// Liskov Substitution Principle

class Person {}

class Member extends Person {
  access() {
    console.log("You have an access");
  }
}

class Guest extends Person {
  isGuest = true;
}

class Frontend extends Member {}

class Backend extends Member {}

class DeveloperFromDifferentCompany extends Guest {
  access() {
    throw new Error("You don't have an access");
  }
}

function openSecretDoor(person) {
  person.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new DeveloperFromDifferentCompany());
