import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getUserId from "../util/getUserId";
import getNewToken from "../util/getNewToken";
const path = require("path");
const fs = require("fs");
const Mutation = {
    // async login(parent, args, {prisma}, info){
    //     const user = await prisma.user.findUnique({where: {email: args.data.email}});
    //     if(!user){
    //         throw new Error('Email not found')
    //     }
    //     const passwordToken = await bcrypt.compare(args.data.password, user.password);
    //     if(!passwordToken){
    //         throw new Error('Password false');
    //     }
    //     return {
    //         user,
    //         token: getNewToken(user.id)
    //     }
    // },
    // async createUser(parent, args, {prisma}, info){
    //     const emailExisted = await prisma.user.findUnique({
    //         where: {
    //             email: args.data.email
    //         }
    //     });
    //     if(emailExisted){
    //         throw new Error('Email is exited!');
    //     }
    //     if(args.data.password.length < 8){
    //         throw new Error('Password must be at least 8 characters');
    //     }
    //     const password = await bcrypt.hash(args.data.password, 10);
    //     const user = prisma.user.create({
    //         data: {
    //             ...args.data,
    //             password: password,
    //         }
    //     });
    //     return {
    //         user,
    //         token: getNewToken(user.id)
    //     }
    // },
    // async updateUser(parent, args, {prisma, request}, info){
    //     const userId = getUserId(request);
    //     return prisma.user.update({
    //         where:{
    //             id: userId,
    //         }, 
    //         data:{
    //             ...args.data
    //         }
    //     })
    // }, 
    // async deleteUser(parent, args, {prisma, request}, info){
    //     const userId = getUserId(request);
    //     return prisma.user.delete({
    //         where:{
    //             id: userId,
    //         }
    //     }, info)
    // }, 
    async upLoadFile(parent, {file}, {prisma}, info){
        const {createReadStream, filename} = await file;
        const stream = createReadStream();
        const pathName = path.join(__dirname, `../../public/img/${filename}`);
        await stream.pipe(fs.createWriteStream(pathName));
        console.log(pathName);
        return {
            url: `http://localhost:4000/img/${filename}`,
        }
    }, 
    async createUser(parent, args, {prisma, request}, info){
        const userExist = await prisma.user.findUnique({
            where: {
                email: args.data.email
            }
        });
        if(!userExist){
            const newUser = await prisma.user.create({
                data: {...args.data}
            });
            return {
                ...newUser
            }
        }else{
            return {
                ...userExist
            }
        }
    },
    async createPizza(parent, args, {prisma, request}, info){
        return prisma.pizza.create({
            data: {
                ...args.data,
            }
        }, info);
    },
    async createWater(parent, args, {prisma, request}, info){
        return prisma.water.create({
            data:{
                ...args.data,
            }
        }, info);
    },
    async createCombo(parent, args, {prisma, request}, info){
        return prisma.combo.create({
            data: {
                ...args.data,
            }
        }, info);
    },
    async createOrder(parent, args, {prisma, request}, info){
        return prisma.order.create({
            data: {
                ...args.data,
            }
        }, info)
    },
    async updateUser(parent, args, {prisma, request}, info){
        return prisma.user.update({
            where:{
                email: args.email,
            },
            data:{
                ...args.data,
            }
        }, info);
    }, 
    async updatePizza(parent, args, {prisma, request}, info){
        return prisma.pizza.update({
            where:{
                id: args.id,
            }, 
            data:{...args.data}
        }, info);
    }, 
    async updateWater(parent, args, {prisma, request}, info){
        return prisma.water.update({
            where:{
                id: args.id,
            }, 
            data:{...args.data}
        }, info);
    }, 
    async updateCombo(parent, args, {prisma, request}, info){
        return prisma.combo.update({
            where:{
                id: args.id,
            }, 
            data:{...args.data}
        }, info);
    }, 
    async deletePizza(parent, args, {prisma, request}, info){
        return prisma.pizza.delete({
            where:{
                id: args.id
            }
        }, info);
    }, 
    async deleteWater(parent, args, {prisma, request}, info){
        return prisma.water.delete({
            where:{
                id: args.id
            }
        }, info)
    }, 
    async deleteCombo(parent, args, {prisma, request}, info){
        return prisma.combo.delete({
            where:{
                id: args.id
            }
        }, info)
    }, 
    async deleteOrder(parent, args, {prisma, request}, info){
        return prisma.order.update({
            where:{
                id: args.id
            },
            data: {
                status: "đã hủy",
            }
        }, info);
    }
}
export default Mutation;