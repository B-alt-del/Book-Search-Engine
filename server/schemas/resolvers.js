const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    async getUser(_, args, context) {

      if(context.user) {
        const userData = await User.findOne({})
        .select('-__v -password')
        .populate('savedBooks')
    
        return userData;
      }

      // // return await User.findOne({_id: args.id},{username: args.username});
      // return await User.findOne({$or: [{ _id: args.id}, { username: args.username }]});
    }
  },

  Mutation: {
    async addUser(_, { email, username, password }) {
      // return await User.create({
      const user = await User.create({
        email,
        username,
        password
      });
      const token = signToken(user);
      return {token, user};
    },

    async login(_, {email, password}) {
      const user = await User.findOne({email: email});
      const check_password = await user.isCorrectPassword(password);
      if(!user || !check_password) {
        throw new AuthenticationError('email and/or password is incorrect');
      }
      const token = signToken(user);
      return {token, user};
    },

    async addBook(_, {input}, {user}) {
      if(!user){
        throw new AuthenticationError('Must Login First');
      }
      return await User.findByIdAndUpdate(
        {_id: user._id},
        {$addToSet: {savedBooks: input}},
        { new: true}
      );
    },

    async removeBook(_, {_id}, {user}) {
      if(!user){
        throw new AuthenticationError('Must Login First');
      }
      return await User.findByIdAndUpdate(
        {_id: user._id},
        {$pull: {savedBooks: {_id: _id}}},
        { new: true}
      );
    }


  }
};

module.exports = resolvers;
//--------------------------------------