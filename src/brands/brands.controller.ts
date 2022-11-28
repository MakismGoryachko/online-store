import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { Brand } from './brands.model';
import { BrandsService } from './brands.service';
import { createBrandDto } from './dto/create-brand.dto';

@ApiTags('Бренды')
@Controller('brands')
export class BrandsController {
    constructor(private brandsService: BrandsService){}

    @ApiOperation({summary: "Создание типа"})
    @ApiResponse({status: 200, type: Brand})
    @Post()
    create(@Body() brandDto: createBrandDto){
        return this.brandsService.createBrand(brandDto);
    }

    @ApiOperation({summary: "Получение всех типов"})
    @ApiResponse({status: 200, type: Brand})
    @Get()
    findAll(){
        return this.brandsService.getBrands();
}
}
