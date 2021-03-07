import { Guid } from 'guid-ts'

export interface IAbstractModel {
  description?: string;
  name       ?: string;
}
export abstract class AbstractModel<T extends AbstractModel<T>> {
  public created    : any   ;
  public description: string;
  public id         : string;
  public name       : string;

  constructor(args?: IAbstractModel) {
    this.id = Guid.newGuid().toString().split('-')[0];
    this.created = new Date().toLocaleTimeString('en-US', { hour12: false });
    this.initialize(args);
  }
  public initialize<T>(value?: T) {
    Object.keys(value)?.forEach(key => this[key] = this[key] ?? value[key]);
    return this;
  }
  public clone(clone: T = Object.create(this)) {
    Object.keys(this).slice().filter(x => x != 'instances').map(key => clone[key] = this[key]);
    return clone;
  }
}