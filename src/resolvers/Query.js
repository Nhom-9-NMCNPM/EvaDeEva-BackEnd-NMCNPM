const Query = {
    async getDress(parent, agrs, {prisma}, info) {
        return await prisma.dress.findMany();
    }, 
    async getShirt(parent, agrs, {prisma}, info) {
        return await prisma.shirt.findMany();
    }, 
    async getSkirt(parent, agrs, {prisma}, info) {
        return await prisma.skirt.findMany();
    }, 
    async getTrousers(parent, agrs, {prisma}, info) {
        return await prisma.trousers.findMany();
    },   
    async getBannerImg(parent, agrs,{prisma}, info) {
        return await prisma.bannerImg.findMany({
            where:{
                publish: true,
            }
        });
    },
    async getBannerImg(parent, agrs, {prisma}, info) {
        return await prisma.bannerImg.findMany();
    }, 
    async getUser(parent, agrs, {prisma}, info){
        return await prisma.user.findMany();
    },
    async getVoucher(parent, agrs, {prisma}, info) {
        return await prisma.voucher.findMany();
    }
}
export default Query;