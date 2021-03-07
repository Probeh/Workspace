import { IDescriptor } from '@client/descriptors/descriptor.model'
import { FunctionDescriptor } from '@client/descriptors/function.model'

const decorators: { [type: string]: any[] } = {};

export function Log(options?: IDescriptor) {
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    const original: Function = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const instance = FunctionDescriptor.initialize(options, target, original, key as string);
      decorators[instance.type]
        ? decorators[instance.type].push(instance)
        : decorators[instance.type] = [instance];

      instance.updateParams(args);
      instance.updateCaller(new Error());
      instance.result = call(original.bind(target), args);
      console.log(instance)
      return instance.result;
    };
    return descriptor;
  };

  function call(reference: Function, args?: any[]) {
    if (!args || args.length == 0) return reference();
    if (args && args.length > 0) {
      if (args.length == 1) return reference(args[0])
      if (args.length == 2) return reference(args[0], args[1]);
      if (args.length == 3) return reference(args[0], args[1], args[2]);
      if (args.length == 4) return reference(args[0], args[1], args[2], args[3]);
      if (args.length == 5) return reference(args[0], args[1], args[2], args[3], args[4]);
      if (args.length == 6) return reference(args[0], args[1], args[2], args[3], args[4], args[5]);
      if (args.length == 7) return reference(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      if (args.length == 8) return reference(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
      if (args.length == 9) return reference(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
    }
  }
}