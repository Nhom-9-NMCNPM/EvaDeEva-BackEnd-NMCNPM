const { PrismaClient } = require('@prisma/client')
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();
export const prisma = new PrismaClient()
