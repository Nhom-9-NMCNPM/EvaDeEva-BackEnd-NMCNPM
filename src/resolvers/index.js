import Query from './Query';
import Mutation from './Mutation';
import Subscription from './Subscription';
const {
    GraphQLUpload,
  } = require('graphql-upload');
const resolvers = {
    Query,
    Upload: GraphQLUpload,
    Mutation,
    Subscription
};
export default resolvers; 