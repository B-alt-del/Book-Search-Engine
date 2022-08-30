import gql from 'graphql-tag';

export const MUTATIONS = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        bookId
        image
        link
        title
        description
      }
    }
    token
  }
}

mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}

mutation addBook($input: savedBook!) {
saveBook (input: $input)
    {
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

mutation removeBook($_id: ID!) {
    removeBook(_id:$_id) {
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