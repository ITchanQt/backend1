const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users/', usersRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});