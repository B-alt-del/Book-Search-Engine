const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Book {
    authors: String
    description: String!
    BookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    #get a single user by id or username
    getUser(id:ID, username:String): User
  }

  type Mutation {
    #create a user -> sign token & send it back
    addUser(email: String!, username: String! password: String!): User

    # #login -> sign token and send it back

    # #save a book to user's savedBooks
    # addBook(userId: ID!, bookId: String!): User

    # #remove a book from savedBooks
    # removeBook(userId: ID!, bookId: String!): User
  }
`;

module.exports = typeDefs;