import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags("Создание пользователя")
@Controller('auth')
export class AuthController {

    constructor(private authSetvice: AuthService){}

    @Post('/login')
    login(@Body() userDto: createUserDto){
        return this.authSetvice.login(userDto)
        
    }

    @Post('/registration')
    registration(@Body() userDto: createUserDto){
        return this.authSetvice.registration(userDto)
        
    }
}
