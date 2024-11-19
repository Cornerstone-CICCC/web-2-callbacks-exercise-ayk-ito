const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  // your code here
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        let hobbies = data4
          .slice(1, -1)
          .split(",")
          .map((hobby) => hobby.trim().replace(/"/g, ""));
        const sentence = `${data1} ${data2} is ${data3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`;
        console.log(sentence);
      });
    });
  });
});
