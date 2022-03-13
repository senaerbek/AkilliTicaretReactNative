import {get} from '../request';
import {BrandResponseModel} from '../models/brand.model';

export class BrandService {
  static getBrandList(): Promise<BrandResponseModel[]> {
    return get('Product/ListBrands').then(response => response.getBody());
  }
}
