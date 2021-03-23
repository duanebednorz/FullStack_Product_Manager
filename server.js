const express = require("express");  
const cors = require("cors");
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

// imports file into one line:
require("./server/config/config.database");
require("./server/routes/routes.items")(app)