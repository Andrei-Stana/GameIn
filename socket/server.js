// Für Peer SET PATH=%AppData%\npm;%PATH%
// peerjs --port 3001
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require("uuid");
const localStorage = require("localStorage");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

// Firebase Init
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// Using ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

// Get user creds from firebase
app.get("/:uid/:id", (req, res) => {
  db.collection("Registered Accounts")
    .doc(req.params.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No Such document exsists");
      } else {
        let data = doc.data();
        localStorage.setItem("uid", req.params.uid);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        localStorage.setItem("photoUrl", data.photoUrl);
        console.log(doc.data());
      }
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect(`/${uuidV4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", {
    roomId: req.params.room,
  });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", userId);
    });
  });
});

// Opening server
server.listen(PORT, () => console.log("Sever Runnig on " + PORT));
