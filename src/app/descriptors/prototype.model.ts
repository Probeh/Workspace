import { Descriptor, IDescriptor } from '@client/descriptors/descriptor.model'
import { IFunction } from '@client/descriptors/function.model'

export interface IPrototype extends IDescriptor {
  methods?: IFunction[];
}
export class Prototype extends Descriptor {
  public methods?: IFunction[];
  constructor(args?: IPrototype) {
    super(args);
  }
}
export interface IParams {
  [name: string]: {
    object?: string;
    result?: string;
  }
}
