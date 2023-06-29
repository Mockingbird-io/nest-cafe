import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  getUserInfo(
    @Query('id', ParseIntPipe) id: number,
    @Query('page') page: string,
  ): object {
    console.log(page);
    console.log(id);
    return this.adminService.getUserInfo(id);
  }

  @Post()
  addUser(): object {
    return this.adminService.addUser();
  }
}
