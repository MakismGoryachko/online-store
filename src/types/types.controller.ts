import { Controller, Post, Body, Get } from '@nestjs/common';
import { createTypeDto } from './dto/create-type.dto';
import { Type } from './types.model';
import { TypesService } from './types.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Типы')
@Controller('types')
export class TypesController {

    constructor(private typesService: TypesService){}

    @ApiOperation({summary: "Создание типа"})
    @ApiResponse({status: 200, type: Type})
    @Post()
    create(@Body() typeDto: createTypeDto){
        return this.typesService.createType(typeDto);
    }

    @ApiOperation({summary: "Получение всех типов"})
    @ApiResponse({status: 200, type: Type})
    @Get()
    findAll(){
        return this.typesService.getTypes();
    }
}
