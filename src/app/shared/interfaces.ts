export interface IPhone {
  age: Number;
  id: String;
  imageUrl: String;
  name: String;
  snippet: String;
}
export interface Phones {
  phoneId: Number;
  phoneItems: phoneItem[];
}

export interface phoneItem {
  id: Number;
  name: String;
}
