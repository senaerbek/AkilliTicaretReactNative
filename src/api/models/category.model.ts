export interface CategoryResponseModel {
  id: number;
  categoryName: string;
  order: number;
  link: string;
  imagePath: ImagePath;
  hasImage: number;
  parentId: number;
  subCategoryCount: number;
  subCategoryList: SubCategoryList[];
}

interface ImagePath {
  id: number;
  imagePath: null | string;
}

interface SubCategoryList {
  id: number;
  categoryName: string;
  order: number;
  link: string;
  imagePath: ImagePath;
  parentId: number;
  subCategoryCount: number;
  subCategoryList: number;
}
