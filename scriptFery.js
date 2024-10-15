const data = {
  data: {
    username: "John Doe",
    age: 30,
    hobbies: ["membaca", "melukis", "bermain"],
    address: [
      {
        address: "123 Main St",
      },
      {
        address: "456 Elm St",
      },
    ],
  },
};

/*
  buatlah sebuah string seperti ini:
  "Hello, my name is John Doe, Hobby saya adalah membaca, melukis, dan bermain. Alamat saya di 456 Elm St"
*/
console.log(
  `Hello, my name is ${
    data.data.username
  } hobi saya adalah ${data.data.hobbies.join(", ")} alamat saya di ${
    data.data.address[1].address
  }`
);
