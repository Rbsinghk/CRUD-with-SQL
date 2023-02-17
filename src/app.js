const express = require("express");
const app = express();
const model = require("./config/conn");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

//Create
app.post("/add", (req, res) => {
  const { name, number } = req.body;
  model.query(
    `insert into userinfo(username,Number) values("${name}","${number}")`
  );

  res.json({ message: "send successfully" });
});

//Read
app.get("/", (req, res) => {
  let get = model.query("select * from userinfo", (err, result) => {
    if (err) {
      res.send("err");
    } else {
      res.send(result);
    }
  });
});

//Update
app.patch("/update/:id", (req, res) => {
  const data = [req.body.name, req.body.number, req.params.id];
  model.query(
    "Update userinfo SET username=?,number=? where userid=? ",
    data,
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

//delete
app.delete("/delete/:id", (req, res) => {
  model.query(
    "DELETE FROM userinfo where userid =" + req.params.id,
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`The Port is running at ${port}`);
});
