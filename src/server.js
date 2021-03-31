'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/clothes', clothesRouter);
app.use('/api/v1/food', foodRouter);

app.use('*' , notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start : (port)=>{
        const PORT = port ;
        app.listen(PORT , ()=> console.log(`LISTENING ON PORT ${PORT}`));
    },
};
