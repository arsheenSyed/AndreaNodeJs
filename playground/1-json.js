const fs = require("fs");
const { json } = require("stream/consumers");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Hoiday",
// };

// const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// // const parsedData = JSON.parse(bookJSON);
// // console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.file);
// console.log(dataBuffer.toString());

const dataRead = fs.readFileSync("1-json.json");

const string = dataRead.toString();

// console.log(string);
const obj = JSON.parse(string);

obj["name"] = "Arsheen";
obj["age"] = "23";

// stringify

const userJSON = JSON.stringify(obj);

console.log(userJSON);
