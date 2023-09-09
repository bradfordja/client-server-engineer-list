// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, resolvers } = require('./graphql');
const { connect } = require('./dbConfig');

const app = express();
connect();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enable the GraphiQL UI for testing
  })
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/graphql`);
});