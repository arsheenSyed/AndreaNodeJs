// const fileSystem = require("fs");
const add = require("./utils.js");
const validator = require("validator");
const callNotes = require("./notes");
const yargs = require("yargs");

// const call = callNotes();
// const sum = add(3, 2);

// console.log(sum);
// console.log(call);
// console.log(validator.isEmail("gmail.com"));
// console.log(validator.isURL("https://mead.io"));
// console.log("Salam");

// section 4

// console.log(process.argv[1]);

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

// console.log(process.argv);

yargs.version("1.1.0");
// console.log(yargs.argv);

//add , remove, read, list

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title" + argv.title);
    console.log("Body: " + argv.body);
  },
});

// console.log(yargs.argv);

//remove  command

yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("removing the note");
  },
});

//Create List command

yargs.command({
  command: "List",
  describe: "Listing the notes",
  handler: function () {
    console.log("Listing out all the notes");
  },
});

//Create Read command
yargs.command({
  command: "read",
  describe: "Reading the note",
  handler: function () {
    console.log("Reading the Note");
  },
});

// console.log(yargs.argv);

// another test

//challlenge: Add 2 new commands

// 1. setup commad to support "list" command
// 2. Setup command to support "react" command
// 3. Test your work by running both commands

/*yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },

  handler: function (argv) {
    console.log("title: " + argv.title);
  },
});*/

yargs.parse();
