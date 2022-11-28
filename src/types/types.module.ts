import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/brands/brands.model';
import { Device } from 'src/devices/devices.model';
import { TypesController } from './types.controller';
import { Type } from './types.model';
import { TypesService } from './types.service';


@Module({
    imports: [TypeOrmModule.forFeature([Type, Brand, Device])],
    controllers: [TypesController],
    providers: [TypesService],
    exports: [TypesService]
})

export class TypesModule {}


