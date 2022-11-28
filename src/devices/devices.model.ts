import { Brand } from "src/brands/brands.model"
import { Type } from "src/types/types.model"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity('devices')
export class Device {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 25,
        unique: true,
        nullable: false
    })
    name: string

    @Column('int', {
        nullable: false
    })
    price: number

    @Column('int',{
        default: 0
    })
    rating: number

    @Column({
        nullable: false
    })
    image: string

    @ManyToOne(() => Brand, brand => brand.devices)
    brand: Brand
    @ManyToOne(() => Type, type => type.devices)
    type: Type
}