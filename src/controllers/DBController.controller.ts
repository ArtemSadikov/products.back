import { MongoClient } from 'mongodb';
import { Controller } from './controller';

export default class DBController extends Controller {
  static dbInstance?: ReturnType<MongoClient['db']>;

  private static async connectMongo() {
    try {
      const response = await MongoClient.connect('mongodb://localhost:27017/');
      DBController.dbInstance = response.db();
    } catch (e) {
      console.log(e);
    }
    return undefined;
  }

  static async initialize() {
    await this.connectMongo();
  }
}
