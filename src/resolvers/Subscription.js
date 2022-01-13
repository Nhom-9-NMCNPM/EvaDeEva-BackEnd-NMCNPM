import {prisma, pubsub} from '../context';
const Subscription = {
    VoucherCreate:{
        subscribe(parent, agrs, context, info){
            return pubsub.asyncIterator(['VOUCHER_CREATE']);
        }
    },
    EventCreate:{
        subscribe(parent, agrs, context, info){
            return pubsub.asyncIterator(['EVENT_CREATE']);
        }
    }, 
    OrderUpdate: {
        subscribe(parent, {userId}, context, info){
            return pubsub.asyncIterator([`ORDER_UPDATE_${userId}`]);
        }
    }
}
export default Subscription;