import { ProductsController } from '.';
import { Controller } from './controller';
import DBController from './DBController.controller';

class MainController extends Controller {
  private async initializeDb() {
    await DBController.initialize();
  }

  private initProducts() {
    new ProductsController();
  }

  async init() {
    await this.initializeDb();
    this.initProducts();
  }
}

export default new MainController();
