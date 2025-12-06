import { Controller, Get } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AuthServiceController {
    constructor(private readonly authServiceService: AuthServiceService) { }

    @MessagePattern({ cmd: 'auth-register' })
    register(@Payload() data: any, @Ctx() context: any) {
        console.log('Registering user with data:', data);
        console.log('Message context:', context);
        // Registration logic goes here
        return { status: 'User registered successfully' };
    }
}
