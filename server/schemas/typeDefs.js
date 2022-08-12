const { gql } = require('apollo-server-express');

const typeDefs = gpl`
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
  }

  input BookInput {
    authurs: [String]
    description: String
    title: String
    bookId: ID
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authurs: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type: Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
