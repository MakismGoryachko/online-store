import { ApiProperty } from "@nestjs/swagger"

export class createBrandDto {
    @ApiProperty({ example: 'Apple', description: 'Бренд устройства' })
    readonly name: string;
}