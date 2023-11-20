const { EventEmitter } = require("events");
const eventEmmiter = new EventEmitter();

eventEmmiter.on("lunch", () => {
  console.log("Sushi");
});

eventEmmiter.emit("lunch");
