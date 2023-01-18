const mongoose = require("mongoose");

const dburl =
  "mongodb+srv://kavisara:kaVi3428@cluster0.scm0ccb.mongodb.net/fusionDB";
console.log("connecting to db ...");
const comPromise = mongoose.connect(dburl).catch((e) => {
  console.error("Error Connent to DB" + e);
  console.log("can not connect to DB");
  process.exit(1);
});

comPromise.then(conn => {
    console.log("connected to DB" + conn)
}).catch(err => {
    console.log('faileed to connect to DB' + err)
})