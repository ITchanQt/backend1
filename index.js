const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users/', usersRoutes);

// app.get('/api/users', (req, res) => {
//     dbConnnection.query('SELECT 1', (err, results) => {
//         if (err) {
//             return res.status(500).json({ 
//                 success: false,
//                 message: 'Database connection error',
//                 error: err.message
//             });
//         }
//         res.json({
//             success: true,
//             message: 'Database connection successful',
//             results: results
//         });
//     })
// });


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});