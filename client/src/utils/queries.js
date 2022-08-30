import gql from 'graphql-tag';

export const FIND_USER = gql`
{
    getUser {
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
  }
`;