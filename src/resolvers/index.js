import Query from './Query';
import Mutation from './Mutation';
const {
    GraphQLUpload,
  } = require('graphql-upload');
const resolvers = {
    Query,
    Upload: GraphQLUpload,
    Mutation,
};
export default resolvers; 