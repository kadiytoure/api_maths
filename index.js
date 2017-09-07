const express = require('express');

let app = express();
app.get("/add", function(req, res) {
    console.log(req);
    res.send("ok");
});

const port = 8080;
app.listen(8080, function(err) {
    if (err) {
        console.error("fail to start server:", err);
        return;
    }
    console.log("listening on port", port, "...");
});