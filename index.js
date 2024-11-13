const express = require("express");
const app = express();
const port = 3000;

app.get('/hola', (req, res) => {
	res.send("Hello world!");
});

app.listen(3000, () => {
	console.log("App is listening on port", port);
});