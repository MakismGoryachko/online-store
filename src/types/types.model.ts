import { Brand } from "src/brands/brands.model"
import { Device } from "src/devices/devices.model"
import { ApiProperty } from "@nestjs/swagger"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"

@Entity('types')
export class Type {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'Пылесосы', description: 'Название' })
    @Column({
        length: 20,
        unique: true,
        nullable: false
    })
    name: string

    @OneToMany(() => Device, device => device.brand)
    devices: Device[] 

    @ManyToMany(() => Brand)
    @JoinTable()
    brands: Brand[]

}