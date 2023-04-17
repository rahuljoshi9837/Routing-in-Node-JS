const express = require("express");
const router = require("./route/route");
console.log(router, "router");
const app = express();
const port = process.env.PORT || 3000;

app.use("/api" , router);
// routes

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
})