export interface FormOBJ {
  name?: string; //  名称
  value?: any; //  值
  field?: string; //  字段名
  type?: FormType; //  input类型
  option?: any[]; //  单选多选下拉的值数组
  kind?: string; //  分类
  required?: boolean | number; //  是否必填
  colLeft?: number; //  左宽度
  colRight?: number; //  右宽度
  row?: number; //  行宽
  visible?: boolean; //  是否显示行 ture为隐藏
  regular?: any; //  正则
  message?: any; //  备注
  disableds?: { key: string; value: boolean }[]; //  是否可操作
  checkbox?: CheckBoxType[]; //   多选项
  imgs?: string[]; //  图片
  remark?: any; //  备用字段
  outKey?: string; // key2
  edito?: boolean;
  func?: (item: FormOBJ, ...values: any) => void;
}

export enum FormType {
  value,
  xyz,
  select,
  input,
  color,
  radio,
  checkbox,
}

export interface CheckBoxType {
  val: any;
  checked?: boolean;
  disabled?: boolean;
}
