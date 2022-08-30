const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
});
server.listen().then(() => {
  console.log(
    "server is runnig on port 4000 query at : https://studio.apollographql.com/sandbox/explorer"
  );
});
