export enum ProductActionsTypes{

  GET_ALL_PRODUCTS="[Product] Get All products ",
  GET_AVAILABLE_PRODUCTS="[Product] Get available products ",
  GET_UNAVAILABLE_PRODUCTS="[Product] Get unavailable products ",
  SEARCH_PRODUCTS="[Product] Search products",
  CHANGE_STATUS_PRODUCT="[Product] change status product ",
  DELETE_PRODUCT="[Product] delete product ",
  Edit_PRODUCT="[Product] edit product ",
  NEW_PRODUCT="[Product] Add new product",
  PRODUCT_ADDED="[Product] product added ",
  UPDATE_PRODUCT="[Product] product updated",

}
export interface ActionEvent{
  type:ProductActionsTypes,
  payload?:any,
}
