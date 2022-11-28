import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { Brand } from './brands.model';
import { Repository } from 'typeorm';
import { createBrandDto } from './dto/create-brand.dto';



@Injectable()
export class BrandsService {

    constructor(@InjectRepository(Brand)
     private brandRepository: Repository<Brand>){ }

    async createBrand(dto: createBrandDto){
        const name = dto.name;
        const candidate = await this.brandRepository.findOne({where: {name}})
        if(candidate){
            throw new HttpException('Такой бренд уже существует', HttpStatus.BAD_REQUEST)
        } else {
        const brand = await this.brandRepository.save(dto)
        return brand;
        }
    }

    async getBrands(){
        const allBrand = await this.brandRepository.find()
        return allBrand;

    }
}
