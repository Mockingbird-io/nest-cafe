import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getUserInfo(id: number): object {
    let result: object;
    switch (id) {
      case 1:
        result = { name: '张三', age: 20 };
        break;
      case 2:
        result = { name: '李四', age: 21 };
        break;
      case 3:
        result = { name: '王五', age: 22 };
        break;
      default:
        result = {};
        break;
    }
    return {
      code: 200,
      data: result,
      msg: '请求成功',
    };
  }
  addUser(): object {
    return {
      code: 200,
      data: {},
      msg: '添加成功',
    };
  }
}
