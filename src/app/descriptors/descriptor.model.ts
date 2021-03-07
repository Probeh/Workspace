import { AbstractModel, IAbstractModel } from '@client/descriptors/abstract.model'
import { IParams } from '@client/descriptors/prototype.model'

export interface IDescriptor extends IAbstractModel {
  arguments?: string[]; /* properties, variables, parameters */
  output?: string; /* output message */
  parent?: any; /* a reference to the target item' parent */
  source?: any; /* a reference to the target item */
}

export class Descriptor extends AbstractModel<Descriptor> {
  public arguments: IParams = {};
  public output: string;
  public parent: any;
  public source: any;
  public type: string; /* type represented by the descriptor */
  public result: any; /* the item's current value */
  constructor(args?: IDescriptor) {
    super(args);
    args?.arguments.forEach(x => this.arguments[x] = {})
    Object.keys(args)?.forEach(key => this[key] = this[key] ?? args[key]);
    this.type = this.source.constructor.name;
  }
}

