const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);


/*By modifying the object person2, the object person1 is also modified because when we assigned person2 = person1, it creates a reference to the same object in memory rather than creating a new copy of the object.

In JavaScript, objects are stored by reference, so when we assign person1 to person2, both variables person1 and person2 are pointing to the same object in memory. Any changes made to the object through one variable will be reflected when accessing the object through the other variable.

In this case, when we modify the firstName property of person2, it actually modifies the shared object. Therefore, when we log person1, the updated value of firstName will be displayed because person1 and person2 refer to the same object.

If we wanted to create a separate copy of the object person1 and modify it without affecting the original object, we would need to perform a deep copy of the object.
*/