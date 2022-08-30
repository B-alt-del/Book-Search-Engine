const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    _id:ID!
    title: String!
    authors: [String]
    description: String!
    image: String
    link: String
    bookId: String!
  }

  input savedBook {
    description: String!
    title: String!
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Auth{
    token: ID!
    user: User
  }

  type Query {
    #get a single user by id or username
    #me: User  
    getUser(id:ID, username:String): User
  }

  type Mutation {
    #create a user -> sign token & send it back
    addUser(email: String!, username: String! password: String!): User #Auth

    # #login -> sign token and send it back
    login(email: String, username: String, password: String!): User #Auth

    # #save a book to user's savedBooks
    addBook(input: savedBook!): User  #saveBook

    # #remove a book from savedBooks
    removeBook(userId: ID, _id: ID!): User  
  }

`;

module.exports = typeDefs;
