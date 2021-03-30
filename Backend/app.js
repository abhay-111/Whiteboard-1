var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.use(require("cors")());

io.on("connection", (socket) => {
  console.log("User Online");

  socket.on("canvas-data", (data) => {
    socket.broadcast.emit("canvas-data", data);
  });
});
io.on("connection", (socket) => {
  //   console.log("clear command");
  socket.on("clear", (data) => {
    socket.broadcast.emit("clear", data);
  });
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
http.listen(server_port, () => {
  console.log("Started on : " + server_port);
});
