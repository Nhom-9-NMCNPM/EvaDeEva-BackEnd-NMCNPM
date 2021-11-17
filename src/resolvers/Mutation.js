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
    async createDress(parent, args, {prisma, request}, info){
        return prisma.dress.create({
            data: {
                ...args.data,
            }
        }, info);
    },
    async createShirt(parent, args, {prisma, request}, info){
        return prisma.shirt.create({
            data:{
                ...args.data,
            }
        }, info);
    },
    async createSkirt(parent, args, {prisma, request}, info){
        return prisma.skirt.create({
            data: {
                ...args.data,
            }
        }, info);
    },
    async createTrousers(parent, args, {prisma, request}, info){
        return prisma.trousers.create({
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
    async updateDress(parent, args, {prisma, request}, info){
        return prisma.dress.update({
            where:{
                id: args.id,
            }, 
            data:{...args.data}
        }, info);
    }, 
    async updateSkirt(parent, args, {prisma, request}, info){
        return prisma.skirt.update({
            where:{
                id: args.id,
            }, 
            data:{...args.data}
        }, info);
    }, 
    async updateShirt(parent, args, {prisma, request}, info){
        return prisma.shirt.update({
            where:{
                id: args.id,
            }, 
            data:{...args.data}
        }, info);
    }, 
    async updateTrousers(parent, args, {prisma, request}, info){
        return prisma.trousers.update({
            where:{
                id: args.id,
            }, 
            data:{...args.data}
        }, info);
    }, 
    async deleteDress(parent, args, {prisma, request}, info){
        return prisma.dress.delete({
            where:{
                id: args.id
            }
        }, info);
    }, 
    async deleteSkirt(parent, args, {prisma, request}, info){
        return prisma.skirt.delete({
            where:{
                id: args.id
            }
        }, info)
    }, 
    async deleteShirt(parent, args, {prisma, request}, info){
        return prisma.shirt.delete({
            where:{
                id: args.id
            }
        }, info)
    }, 
    async deleteTrousers(parent, args, {prisma, request}, info){
        return prisma.trousers.delete({
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