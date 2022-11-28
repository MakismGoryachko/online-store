import { ApiProperty } from "@nestjs/swagger"

export class createDeviceDto {
    @ApiProperty({ example: 'Apple', description: 'Бренд устройства' })
    readonly name: string;

    @ApiProperty({ example: 255, description: 'Стоимость устройства' })
    readonly price: number;

    @ApiProperty({ example: 3, description: 'Рейтинг устройства' })
    readonly rating: number;

    @ApiProperty({ example: 1, description: 'Id бренда устройства' })
    readonly brandId: number;

    @ApiProperty({ example: 1, description: 'Id типа устройства' })
    readonly typeId: number;

    // @ApiProperty({ example: 'qwer.jpg', description: 'Фото устройства' })
    // readonly img: any;
}