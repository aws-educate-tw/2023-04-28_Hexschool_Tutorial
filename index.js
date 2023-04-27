const express = require("express");
const app = express();

app.use(express.static("public"));
app.listen(80, () => {
    console.log("Listen on the port 3000...");
});
