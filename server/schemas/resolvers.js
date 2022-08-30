const { User } = require('../models');

const resolvers = {
  Query: {
    async getUser(_, args) {
      // return await User.findOne({_id: args.id},{username: args.username});
      return await User.findOne({$or: [{ _id: args.id}, { username: args.username }]});
    }
  },

  Mutation: {
    async addUser(_, { email, username, password }, context) {
      return await User.create({
        email,
        username,
        password
      });
    },
    // async addTodo(_, args) {
    //   return await Todo.create(args);
    // }
  }
};

module.exports = resolvers;