const Query = {
    async getPizza(parent, agrs, {prisma}, info) {
        return await prisma.pizza.findMany();
    }, 
    async getWater(parent, agrs, {prisma}, info) {
        return await prisma.water.findMany();
    }, 
    async getCombo(parent, agrs, {prisma}, info) {
        return await prisma.combo.findMany();
    }, 
    async getMybox(parent, agrs, {prisma}, info) {
        return await prisma.mybox.findMany();
    },   
}
export default Query;