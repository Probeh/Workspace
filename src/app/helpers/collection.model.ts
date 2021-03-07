import { AbstractModel } from '@client/descriptors/abstract.model'
import { Descriptor } from '@client/descriptors/descriptor.model'

export interface ICollection {
  [key: string]: any;
}
export class Collection implements ICollection {
  [key: string]: AbstractModel<any>[] | any;
  constructor() { };
  public find<T extends Descriptor>(key: string, name: string): T { return (this[key] as T[]).slice().find(x => x.name == name); }
  public first<T extends Descriptor>(key: string, predicate?: (this: void, value: T, index: number, obj: T[]) => value is T, thisArg?: any): T { return (this[key] as T[]).slice().find(predicate); }
  public where<T extends Descriptor>(key: string, predicate?: (this: void, value: T, index: number, obj: T[]) => value is T, thisArg?: any): T[] { return (this[key] as T[]).slice().filter(predicate); }
  public add<T extends Descriptor>(key: string, model: T): T {
    this.find(key, model.name)
      ? this.find(key, model.name).initialize(model) as T
      : (this[key] as T[]).push(model);
    return model;
  }

  public initialize(scopes: any): Collection {
    Array.isArray(scopes)
      ? (scopes as Array<string>).forEach(key => this[key] = new Array())
      : scopes instanceof Object
        ? Object.keys(scopes).forEach(key => this[key] = new Array()) : {};
    return this;
  }
}
