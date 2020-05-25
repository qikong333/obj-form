import { Component, OnInit, Input } from '@angular/core';
import { FormOBJ, FormType, CheckBoxType } from './obj-form.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() datas: FormOBJ[];
  FormType = FormType;
  constructor() {}
  data: FormOBJ[] = [
    {
      name: '显示值',
      value: 0,
      key: '',
      type: FormType.value,
    },
    {
      name: '输入框',
      value: '',
      key: '',
      type: FormType.input,
    },
    {
      name: '下拉选择器',
      value: 1,
      option: [1, 2, 3, 4, 5, 6],
      key: '',
      type: FormType.select,
    },
    {
      name: '颜色选择弃',
      value: '',
      key: '',
      type: FormType.color,
    },
    {
      name: '单选',
      value: '',
      key: '',
      option: [1, 2, 3, 4, 5, 6],
      type: FormType.radio,
    },
    {
      name: '多选',
      value: '',
      key: '',
      checkbox: [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }],
      type: FormType.checkbox,
      // message
    },
  ];
  ngOnInit(): void {
    this.initCheckBox();
  }

  initCheckBox() {
    this.data.map((r) => {
      if (r.type === FormType.checkbox) {
        r.checkbox['checked' as string] = false;
      }
    });
  }

  getCheckBoxValue(item: FormOBJ) {
    // item.value = '';
    const arr = [];
    item.checkbox.map((r) => {
      if (r.checked) {
        arr.push(r.val);
      }
    });
    return arr.join(',');
  }

  Number(e) {
    return Number(e);
  }

  func(item: FormOBJ) {
    if (item.func) {
      item.func(item);
    }
  }

  funcCheckbox(item: FormOBJ, e) {
    console.log(e);

    item.value = this.getCheckBoxValue(item);
    if (item.func) {
      item.func(item);
    }
    console.log(item);
  }

  setCheckBoxChecked() {}
}
