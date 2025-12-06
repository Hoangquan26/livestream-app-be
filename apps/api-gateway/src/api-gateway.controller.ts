import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
    constructor(
        private readonly apiGatewayService: ApiGatewayService,
        @Inject('AUTH_SERVICE') private readonly authServiceService: ClientProxy
    ) { }


    @Post('/register')
    async registers(): Promise<any> {
        return await this.authServiceService.send({cmd: 'auth-register'}, {username: 'testuser', password: 'testpass'})
    }
}
