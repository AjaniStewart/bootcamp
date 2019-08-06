const express = require('express');

const app = express();

app.get(['/apple', '/ale'], (req, res) => {
  res.status(200).send("Apple or Ale?");
  console.log("apple or ale hit");
});

app.get("/who+a+"), (req, res) => {
  res.status(200).send("I know, right?!");
  console.log("whoa hit");
}

app.get("/reverse/:word", (req, res) => {
  res.status(200).send(req.params.word.split("").reverse().join(''));
})

app.get("/name/:firstname/:lastname", (req, res) => {
  res.status(200).send(`Hi ${req.params.firstname} ${req.params.lastname}`);
})

app.get("*", (req, res) => {
  res.status(200).send("Nothing matched!");
})

app.listen(3001, () => {
  console.log('example app listening on port 3001!');
});