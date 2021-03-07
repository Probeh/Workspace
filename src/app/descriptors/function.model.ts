import { Descriptor, IDescriptor } from '@client/descriptors/descriptor.model'

export interface IFunction extends IDescriptor { }
export class FunctionDescriptor extends Descriptor {
  public result: any;
  public caller: IStackTrace;
  constructor(args?: IFunction) { super(args); }
  public static initialize(options?: IDescriptor, parent?: Object, source?: Object, name?: string): FunctionDescriptor {
    const sourcecode = source.toString();
    const parameters = sourcecode.substring(sourcecode.indexOf('(') + 1, sourcecode.indexOf(')')).split(',').map(item => item.trim());
    console.log(parameters)
    return new FunctionDescriptor({
      arguments: parameters,
      description: options?.description,
      name: name,
      parent: parent.constructor.name,
      source: source,
    });
  }
  public updateCaller(trace: any) {
    const source: string = trace.stack.split('at')[2].trim().split(' ')[0];
    const caller = { parent: source.split('.')[0], target: source.split('.')[1] };
    this.caller = { parent: caller.parent, target: caller.target };
  }
  public updateParams(params: any[]) {
    for (let index = 0; index < params.length; index++) {
      const param = Object.keys(this.arguments)[index];
      const value = params[index];
      const proto = value.constructor.name;
      this.arguments[param] = { object: proto, result: value };
    }
  }
}
export interface IStackTrace {
  parent?: any;
  target?: any;
}