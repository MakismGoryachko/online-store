import { Controller, Post, Get, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DevicesService } from './devices.service';
import { createDeviceDto } from './dto/create-device.dto';


@Controller('devices')
export class DevicesController {

    constructor(private devicesService: DevicesService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createDevice(@Body() dto: createDeviceDto,
                 @UploadedFile() image) {
        return this.devicesService.createDevice(dto, image)
    }
}
