const express = require('express');

let app = express();
app.get("/add", function(req, res) {
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    console.log(req);
    res.send("a + b");
});

const port = 8080;
app.listen(8080, function(err) {
    if (err) {
        console.error("fail to start server:", err);
        return;
    }
    console.log("listening on port", port, "...");
});