import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core'
import { IPrototype, Prototype } from '@client/descriptors/prototype.model'

export interface IComponent extends IPrototype {
  changeDetection?: ChangeDetectionStrategy;
  encapsulation?: ViewEncapsulation;
  moduleId?: string;
  styleUrls?: string[];
  templateUrl?: string;
}
export class ComponentDescriptor extends Prototype {
  public changeDetection: ChangeDetectionStrategy;
  public encapsulation: ViewEncapsulation;
  public moduleId: string;
  public styleUrls: string[];
  public templateUrl: string;
  constructor(args?: IComponent) {
    super(args);
  }
}
