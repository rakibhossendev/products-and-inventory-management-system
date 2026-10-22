import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(`${process.env.BETTER_AUTH_MONGODB_CLIENT}`);
const db = client.db("product-management-system-db");

export const auth = betterAuth({
    database: mongodbAdapter(db,{client}),
    emailAndPassword: {
        enabled: true
    }
})