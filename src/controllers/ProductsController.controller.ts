import { Collection } from 'mongodb';
import { DBController } from '.';
import { PRODUCTS_COLLECTION } from '../lib';
import { IProduct } from '../resources';
import { Controller } from './controller';

export default class ProductsController extends Controller {
  private static productsCollection: Collection<IProduct>;

  constructor() {
    super();
    if (!ProductsController.productsCollection && DBController.dbInstance) {
      ProductsController.productsCollection = DBController.dbInstance.collection(PRODUCTS_COLLECTION);
    }
  }

  static getCollection(): typeof ProductsController.productsCollection {
    return this.productsCollection;
  }

  static async getProducts(): Promise<IProduct[]> {
    return await this.productsCollection.find().toArray();
  }

  static async addProduct(product: IProduct): Promise<IProduct | undefined> {
    const response = await this.productsCollection.insertOne(product);
    if (response.insertedId) {
      return { ...product, _id: response.insertedId.toString() };
    }

    return undefined;
  }
}
