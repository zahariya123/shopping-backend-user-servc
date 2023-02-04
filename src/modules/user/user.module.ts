/* eslint-disable prettier/prettier */


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/submodules/shopping-backend-entities/src/entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [ TypeOrmModule.forFeature([User]) ],                      
    controllers: [UserController],    
    providers: [UserService],
})
export class UserModule {}