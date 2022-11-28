import { ApiProperty } from "@nestjs/swagger"

export class createTypeDto {
    @ApiProperty({ example: 'Пылесосы', description: 'Тип устройства' })
    readonly name: string;
}