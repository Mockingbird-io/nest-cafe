import { Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @Get()
  getUser(): object {
    return this.adminService.getUser();
  }

  @Post()
  addUser(): object {
    return this.adminService.addUser();
  }
}
