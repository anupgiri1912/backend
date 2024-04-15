// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("APP is running successfully");
// });
// app.get("/", (req, res) => {
//   res.send(`<h1>This is HomePage</h1>`);
// });

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");
//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT, () => {
  console.log(`App is started at Port no ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is my homePage baby</h1>`);
});
