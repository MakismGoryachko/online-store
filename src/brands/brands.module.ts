import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from 'src/devices/devices.model';
import { Type } from 'src/types/types.model';
import { BrandsController } from './brands.controller';
import { Brand } from './brands.model';
import { BrandsService } from './brands.service';

@Module({
    imports: [TypeOrmModule.forFeature([Brand, Device, Type])],
    controllers: [BrandsController],
    providers: [BrandsService]
})
export class BrandsModule { }
