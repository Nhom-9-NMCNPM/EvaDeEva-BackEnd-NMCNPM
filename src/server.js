// const {prisma} = require('./context');
// const {typeDefs} =require('./schema');
// const {resolvers} = require('./resolvers/index');
import prisma from './context';
import typeDefs from './schema';
import resolvers from './resolvers/index';
const { ApolloServer } = require('apollo-server')
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context(request) {
            return {
                prisma,
                request,
            }
        },
    });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});