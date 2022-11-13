// const express = require('express');
// const v1Router = require("../v1/routes");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) =>{
//     res.send("<h1>Hello world</h1>");
// });

// app.use("/api/v1", v1Router);

// app.listen(PORT, () =>{
//     console.log(`Server listening on port ${PORT}`)
// })
import app from "./app";

const main=()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main();