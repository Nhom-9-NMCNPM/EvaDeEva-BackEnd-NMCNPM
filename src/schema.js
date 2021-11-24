const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: Int!,
        email: String!,
        name: String!,
        phoneNumber: String!,
        address: String!,
        point: Int!,
        orders: [Order!],
        admin: Boolean!,
        staff: Boolean!,
    }
    type SliderImg{
        id: Int!,
        name: String!,
        publish: Boolean!,
        img: String!,
        createdAt: String!,
        updatedAt: String!,
    }
    type BannerImg{
        id: Int!,
        name: String!,
        publish: Boolean!,
        img: String!,
        createdAt: String!,
        updatedAt: String!,
    }
    type Dress{
        id:   Int     
        createdAt: String!,
        updatedAt: String!,
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        newPro: Boolean!
        publish: Boolean!,
    }
    type Skirt{
        id:   Int     
        createdAt: String!,
        updatedAt: String!,
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        newPro: Boolean!
        publish: Boolean!,
    }
    type Trousers{
        id:   Int     
        createdAt: String!,
        updatedAt: String!,
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        newPro: Boolean!
        publish: Boolean!,
    }
    type Shirt{
        id:   Int     
        createdAt: String!,
        updatedAt: String!,
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
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
        getDress:[Dress!]!,
        getTrousers:[Trousers!]!,
        getShirt:[Shirt!]!,
        getSkirt:[Skirt!]!,
        getBannerImg:[BannerImg!]!,
        getSliderImg:[SliderImg!]!,
        getUser: [User!]!,
    }
    type File {
        url: [String!]!
    }
    scalar Upload
    input createUserInput {
        email: String!,
        name: String!,
        phoneNumber: String!,
        address: String!,
        point: Int!,
        admin: Boolean!,
        staff: Boolean!,
    }
    input createDressInput {
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input createShirtInput {
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input createSkirtInput {
        publish: Boolean!,
        newPro: Boolean!
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!
    }
    input createTrousersInput {
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input updateUserInput {
        name: String!,
        phoneNumber: String!,
        address: String!,
    }
    input updateDressInput {
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input createOrderInput {
        namePro: [String!]!,
        price: String!,
        userId: Int!,
        status: String!,
    }
    input updateShirtInput {
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input updateSkirtInput {
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input updateTrousersInput {
        name: String!,
        description: String!,
        img:    [String!]!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    type Mutation{
        # login(data: LoginInput!): AuthPayload!
        # createUser(data: CreatedUserInput!): AuthPayload!
        # updateUser(data: UpdatedUserInput!): User!
        createUser(data: createUserInput!): User!
        upLoadFile(file: [Upload!]!): File!
        createDress(data: createDressInput!): Dress!,
        createSkirt(data: createSkirtInput!): Skirt!,
        createShirt(data: createShirtInput!): Shirt!,
        createOrder(data: createOrderInput!): Order!,
        createTrousers(data: createTrousersInput!): Trousers!,
        updateUser(data: updateUserInput!, email: String!): User!,
        updateDress(data: updateDressInput!, id: Int!): Dress!,
        updateSkirt(data: updateSkirtInput!, id: Int!):Skirt!,
        updateShirt(data: updateShirtInput!, id: Int!):Shirt!,
        updateTrousers(data: updateTrousersInput!, id: Int!):Trousers!,
        deleteTrousers(id: Int!): Trousers!,
        deleteShirt(id: Int!): Shirt!,
        deleteSkirt(id: Int!): Skirt!,
        deleteOrder(id: Int!): Order!,
        deleteDress(id: Int!): Dress!,
    }
`;

export default typeDefs;