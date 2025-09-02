type Key = string;
type Value =
  | string
  | boolean
  | number
  | object
  | (string | number | boolean | object)[];
  
export { Key, Value };
