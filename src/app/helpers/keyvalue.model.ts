export interface IKeyValue {
  [key: string]: any;
}
export class KeyValue {
  public name: string;
  public value: any;
  public type: string;
  constructor(name: string, value?: any) {
    this.name = name;
    this.value = value;
  }
  public setValue(value: any) {
    this.value = value;
    this.type = typeof (value);
  }
}