import prisma from './context';
import typeDefs from './schema';
import resolvers from './resolvers/index';
const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const {
  graphqlUploadExpress, // A Koa implementation is also exported.
} = require('graphql-upload');


async function startServer() {
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
    await server.start();
  
    const app = express();
  
    // This middleware should be added before calling `applyMiddleware`.
    app.use(graphqlUploadExpress());
    app.use(cors());
    server.applyMiddleware({ app });
    app.use(express.static('public'))
  
    await new Promise(r => app.listen({ port: process.env.PORT || 4000 }, r));
  
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  }
  
  startServer();