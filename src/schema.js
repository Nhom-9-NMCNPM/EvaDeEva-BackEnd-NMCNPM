const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: Int!,
        uid: String!,
        email: String!,
        name: String!,
        phoneNumber: String!,
        address: String!,
        point: Int!,
        orders: [Order!],
        admin: Boolean!,
    }
    type Pizza{
        id: Int!,
        createdAt: String!,
        updatedAt: String!,
        img: String!,
        name: String!,
        description: String!,
        price: String!,
    }
    type Water{
        id: Int!,
        createdAt: String!,
        updatedAt: String!,
        img: String!,
        name: String!,
        description: String!,
        price: String!,
    }
    type Combo{
        id: Int!,
        createdAt: String!,
        updatedAt: String!,
        img: String!,
        name: String!,
        description: String!,
        price: String!,
    }
    type Mybox{
        id: Int!,
        createdAt: String!,
        updatedAt: String!,
        img: String!,
        name: String!,
        description: String!,
        price: String!,
    }
    type Order{
        id: Int!,
        createdAt: String!,
        updatedAt: String!,
        namePro: [String!]!,
        price: String!,
        user: User!,
        status: String!,
    }
    type Query {
        getPizza:[Pizza!]!,
        getWater:[Water!]!,
        getCombo:[Combo!]!,
        getMybox:[Mybox!]!,
    }
    type File {
        url: String!
    }
    scalar Upload
    input createUserInput {
        uid: String!,
        email: String!,
        name: String!,
        phoneNumber: String!,
        address: String!,
        point: Int!,
        admin: Boolean!
    }
    input createPizzaInput {
        img: String!,
        name: String!,
        description: String!,
        price: Int!,
    }
    input createWaterInput {
        img: String!,
        name: String!,
        description: String!,
        price: Int!,
    }
    input createComboInput {
        img: String!,
        name: String!,
        description: String!,
        price: Int!,
    }
    input createOrderInput {
        namePro: [String!]!,
        price: String!,
        userId: Int!,
        status: String!,
    }
    input updateUserInput {
        name: String!,
        phoneNumber: String!,
        address: String!,
    }
    input updatePizzaInput {
        img: String!,
        name: String!,
        description: String!,
        price: Int!,
    }
    input updateWaterInput {
        img: String!,
        name: String!,
        description: String!,
        price: Int!,
    }
    input updateComboInput {
        img: String!,
        name: String!,
        description: String!,
        price: Int!,
    }
    type Mutation{
        # login(data: LoginInput!): AuthPayload!
        # createUser(data: CreatedUserInput!): AuthPayload!
        # updateUser(data: UpdatedUserInput!): User!
        createUser(data: createUserInput!): User!
        upLoadFile(file: Upload!): File!
        createPizza(data: createPizzaInput!): Pizza!,
        createWater(data: createWaterInput!): Water!,
        createCombo(data: createComboInput!): Combo!,
        createOrder(data: createOrderInput!): Order!,
        updateUser(data: updateUserInput!, email: String!): User!,
        updatePizza(data: updatePizzaInput!, id: Int!): Pizza!,
        updateWater(data: updateWaterInput!, id: Int!):Water!,
        updateCombo(data: updateComboInput!, id: Int!):Combo!,
        deletePizza(id: Int!): Pizza!,
        deleteWater(id: Int!): Water!,
        deleteCombo(id: Int!): Combo!,
        deleteOrder(id: Int!): Order!,
    }
`;

export default typeDefs;