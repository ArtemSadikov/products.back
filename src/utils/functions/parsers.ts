import { IProduct } from '../../resources';

export function parseProduct(body: object): IProduct | undefined {
  const res = body as IProduct;
  return res.name && res.price && res.availableQuantity ? res : undefined;
}
