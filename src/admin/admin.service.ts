import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getUser(): object {
    return {
      code: 200,
      data: [
        { name: '张三', age: 20 },
        { name: '李四', age: 21 },
        { name: '王五', age: 22 },
      ],
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
