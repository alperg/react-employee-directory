const express = require('express');
const path = require("path");
const app = express();
const router = require("./routes/route");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5555;

if(process.env.NODE_ENV === "production") {
  console.log("Static assets live here:", path.join(__dirname, "../client/build/static"));
  app.use("/static", express.static(path.join(__dirname, "../client/build/static")));
  // app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../client/build/"));
  // })
}

app.use(router);

app.use(function(err, req, res, next) {
  console.log(err.static);
  res.status(500);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
