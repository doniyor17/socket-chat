const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
const PORT = process.env.PORT || 5432;

app.get('/', (req, res) => {});

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
