import {get} from '../request';
import {CategoryResponseModel} from '../models/category.model';

export class CategoryService {
  static getCategoryList(): Promise<CategoryResponseModel[]> {
    return get('Product/ListCategories').then(response => response.getBody());
  }
}
