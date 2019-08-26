import { FieldTypeEnum } from './field-type.enum';

export interface Field {
  type: FieldTypeEnum;
  checked: boolean;
  name: string;
  label: string;
}
