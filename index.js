const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use("/dash/static/",express.static('/home/vishnu/Desktop/soundcollide/soundcollide-dashboard-app/dashboard-app/build/static'))
app.get('/dash/*', function (req, res) {
 res.sendFile('/home/vishnu/Desktop/soundcollide/soundcollide-dashboard-app/dashboard-app/build/index.html');
});

app.use("/auth/static/",express.static('/home/vishnu/Desktop/soundcollide/soundCollide-auth-app/auth-app/build/static'))
app.get('/auth/*', function (req, res) {
 res.sendFile('/home/vishnu/Desktop/soundcollide/soundCollide-auth-app/auth-app/build/index.html');
});

//Admin paths
// app.use(express.static('/home/vishnu/Desktop/soundcollide/soundCollide-auth-app/build'))
// app.get('/*', function (req, res) {
//  res.sendFile('/home/vishnu/Desktop/soundcollide/soundCollide-auth-app/build/index.html');
// });

// // Site path




  // Serve any static files
  // Handle React routing, return all requests to React ap

//app.use("/",express.static('/home/vishnu/Desktop/soundcollide/soundCollide-auth-app/build/index.html'));
//app.use("/login-app",express.static('/home/vishnu/Desktop/soundcollide/soundCollide-auth-app/build'));
//app.use("/signup",express.static('/home/vishnu/Desktop/soundcollide/soundCollide-auth-app/build'));
//app.use("/dashboard",express.static('/home/vishnu/Desktop/soundcollide/soundcollide-dashboard-app/build'));

app.listen(port, () => {
  console.log(`Server running on port ${port}/`);
});