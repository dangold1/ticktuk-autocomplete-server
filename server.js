const { PORT = 8080 } = process.env;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { getSearchResults } = require('./services');

//----------------------------------Middlewares-------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//----------------------------------Routes-------------------------------------

// Search service
app.post('/api/countries', getSearchResults);

//----------------------------------Run Server---------------------------------------------

app.listen(PORT, () => {
    console.log("server is running! =>", { PORT });
});