const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: Int!,
        email: String!,
        name: String!,
        
    }
    type Post{
        id: Int!,
        createdAt: String!,
        updatedAt: String!,
        title: String!,
        content: String!,
        published: Boolean!,
        author: User!,
        authorId: Int!,
    }
    type Query{
        users: [User!]!,
        posts: [Post!]!,
    }
`;
// module.exports ={
//     typeDefs: typeDefs,
// }
export default typeDefs;