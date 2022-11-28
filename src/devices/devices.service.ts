import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { Device } from './devices.model';
import { Repository } from 'typeorm';
import { createDeviceDto } from './dto/create-device.dto';
import { FilesService } from 'src/files/files.service';



@Injectable()
export class DevicesService {

    constructor(@InjectRepository(Device)
     private deviceRepository: Repository<Device>,
     private fileService: FilesService){ }

    async createDevice(dto: createDeviceDto, image: string){
        const name = dto.name;
        const candidate = await this.deviceRepository.findOne({where: {name}})
        if(candidate){
            throw new HttpException('Товар с таким названием уже существует', HttpStatus.BAD_REQUEST)
        } else {
        const fileName = await this.fileService.createFile(image)
        const device = await this.deviceRepository.save({...dto, image: fileName})
        return device;
        }
    }

    async getDevices(){
        const allBrand = await this.deviceRepository.find()
        return allBrand;

    }
}
