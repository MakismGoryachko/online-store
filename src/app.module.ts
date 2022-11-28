import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config"
import { UsersModule } from './users/users.module';
import { User } from "./users/users.model";
import { TypesModule } from './types/types.module';
import { Type } from "./types/types.model";
import { BrandsModule } from './brands/brands.module';
import { Brand } from "./brands/brands.model";
import { DevicesModule } from './devices/devices.module';
import { AuthModule } from './auth/auth.module';
import { Device } from "./devices/devices.model";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'

@Module(
  {
    controllers: [],
    providers: [],
    imports: [
      ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname, 'static'),
      }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRESS_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [User, Type, Brand, Device],
        synchronize: true,
        logging: false,
        autoLoadEntities: true
      }), UsersModule, TypesModule, BrandsModule, DevicesModule, AuthModule, FilesModule
    ],
  }
)

export class AppModule { }