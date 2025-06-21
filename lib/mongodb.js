import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB; // เพิ่มถ้าต้องการระบุชื่อ database

if (!MONGODB_URI) throw new Error('Please define MONGODB_URI in .env.local');

let cached = global.mongo || { conn: null, promise: null };

export default async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  const client = await cached.promise;
  cached.conn = MONGODB_DB ? client.db(MONGODB_DB) : client.db();
  return cached.conn;
}
