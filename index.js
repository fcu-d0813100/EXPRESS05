const express = require("express");
const app = express();

const { singers } = require("./singers.json");
console.log(singers);
app.get("/", (req, res) => {
  res.send("首頁");
});
app.get("/singer/:id.html", (req, res) => {
  const { id } = req.params;
  const result = singers.find((singer) => {
    if (singer.id == id) {
      return true;
    }
  });
  if (!result) {
    res.send("<h1>404</h1>");
    return;
  }
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>K-POP:${result.singer_name}</title>
    <style>
      img {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <h1>${result.singer_name}</h1>
    <h3>${result.singer_id}</h3>
    <img src="${result.singer_img}" alt="" />
  </body>
</html>
`);
});

app.listen(3000, () => {
  console.log("啟動");
});
