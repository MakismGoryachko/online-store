import { Device } from "src/devices/devices.model"
import { ApiProperty } from "@nestjs/swagger"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity('brands')
export class Brand {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'Apple', description: 'Название бренда' })
    @Column({
        length: 20,
        unique: true,
        nullable: false
    })
    name: string

    @OneToMany(() => Device, device => device.brand)
    devices: Device[] 

}