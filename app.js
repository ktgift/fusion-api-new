const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const notfoundMiddleWare = require('./middleware/notfound');
const errorMiddleware = require('./middleware/error');

const db = require('./services/db');

const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/users', userRoute);
app.use('/auth', authRoute);

app.all('*', notfoundMiddleWare);

app.use(errorMiddleware);

const port = 8002;
app.listen(port, () => console.log('server running on port' + port));