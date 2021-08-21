const Query = {
    async users(parent, agrs, {prisma}, info) {
        return await prisma.user.findMany();
    },
    async posts(parent, agrs, {prisma}, info) { 
        return await prisma.post.findMany();
    }   
}
// module.exports={
//     Query: Query,
// }
export default Query;