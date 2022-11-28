import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/brands/brands.model';
import { FilesModule } from 'src/files/files.module';
import { Type } from 'src/types/types.model';
import { DevicesController } from './devices.controller';
import { Device } from './devices.model';
import { DevicesService } from './devices.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Device, Brand, Type]),
        FilesModule
    ],
    controllers: [DevicesController],
    providers: [DevicesService]
})
export class DevicesModule {}
