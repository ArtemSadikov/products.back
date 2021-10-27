import express from 'express';
import { ProductsController } from '../controllers';
import { parseProduct } from '../utils';

const router = express.Router();

router.get('/', async (_res, req) => {
  const products = await ProductsController.getProducts();
  req.send(products);
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const product = parseProduct(req.body);
  
  if (!product) {
    res.status(400).send('Invalid product');
    return;
  }
  const response = await ProductsController.addProduct(product);
  res.send(response);
});

export default router;
