import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { Type } from './types.model';
import { Repository } from 'typeorm';
import { createTypeDto } from './dto/create-type.dto';



@Injectable()
export class TypesService {

    constructor(@InjectRepository(Type)
     private typeRepository: Repository<Type>){ }

    async createType(dto: createTypeDto){
        const name = dto.name;
        const candidate = await this.typeRepository.findOne({where: {name}})
        if(candidate){
            throw new HttpException('Такой тип товара уже существует', HttpStatus.BAD_REQUEST)
        } else {
        const type = await this.typeRepository.save(dto)
        return type;
        }
    }

    async getTypes(){
        const allType = await this.typeRepository.find()
        return allType;

    }
}
