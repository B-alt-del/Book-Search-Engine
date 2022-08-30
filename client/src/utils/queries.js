import gql from 'graphql-tag';

export const QUERIES = gql`

    query getUser {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        bookId
        authors
        image
        link
        title
        description
      }
    }
  
`;