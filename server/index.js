require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');


const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('DB connected Successfully'))
.catch((error) => console.log('Error while connecting to DB', error))

app.listen(PORT, () => console.log('Server running on port', PORT));