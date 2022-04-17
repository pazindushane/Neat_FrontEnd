export class productDTO {
  private _product_id: string;
  private _product_name: string;
  private _model : string;
  private _description: string;
  private _image_path: string;
  private _price: number;
  private _qty: number;
  private _status: string;
  private _category_name: string;

  constructor(product_id: string, product_name: string, model: string, description: string, image_path: string, price: number, qty: number, status: string, category_name: string) {
    this._product_id = product_id;
    this._product_name = product_name;
    this._model = model;
    this._description = description;
    this._image_path = image_path;
    this._price = price;
    this._qty = qty;
    this._status = status;
    this._category_name = category_name;
  }

  get product_id(): string {
    return this._product_id;
  }

  set product_id(value: string) {
    this._product_id = value;
  }

  get product_name(): string {
    return this._product_name;
  }

  set product_name(value: string) {
    this._product_name = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image_path(): string {
    return this._image_path;
  }

  set image_path(value: string) {
    this._image_path = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get qty(): number {
    return this._qty;
  }

  set qty(value: number) {
    this._qty = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get category_name(): string {
    return this._category_name;
  }

  set category_name(value: string) {
    this._category_name = value;
  }
}
