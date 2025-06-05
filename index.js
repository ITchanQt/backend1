const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const userAccountRouter = require('./routes/userAccountsRoutes');
const productRouter = require('./routes/prodRoutes')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users/', usersRoutes);
app.use('/api/accounts/', userAccountRouter);

app.use('/api/prod/', productRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});