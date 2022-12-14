const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    notes: [Note]!
    note(id: ID!): Note!
  }
  type Query {
    athut: [Author]!
  }
  union SearchResult = Author | Note
  type Author {
    id: ID!
    name: String
    aga: Int!
    photo: String
  }
  type Note {
    id: ID!
    title: String!
    description: String!
    Author: Author!
  }
`;
module.exports = typeDefs;
