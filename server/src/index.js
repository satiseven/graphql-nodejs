const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const NoteApi = require("./note-api");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      noteApi: new NoteApi(),
    };
  },
});
server.listen().then(() => {
  console.log(
    "server is runnig on port 4000 query at : https://studio.apollographql.com/sandbox/explorer"
  );
});
