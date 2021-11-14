const express = require('express');

//this is supercharged endpoint where all the query is made
const {graphqlHTTP} = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

// middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});