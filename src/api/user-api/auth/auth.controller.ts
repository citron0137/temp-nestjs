import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserAuthLoginRequest } from './dto/auth-login-request';
import {  UserAuthLoginResponse, UserAuthLoginResponseData } from './dto/auth-login-response';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiResponseBody } from 'src/api/api-response';
import { UserAuthLogoutResponse, UserAuthLogoutResponseData } from './dto/auth-logout-response';
import { UserAuthMeResponse, UserAuthMeResponseData } from './dto/auth-logout-response copy';
import { UserAuthService } from 'src/domain/user-auth/service/user-auth.service';

@Controller('/user/v1/auth')
@ApiTags("User Auth")
export class UserAuthController {

    constructor(
        private userAuthService: UserAuthService
    ) { }

    @Post('login')
    @ApiResponse({status: 200, type: UserAuthLoginResponse})
    async login(@Body() req: UserAuthLoginRequest): Promise<UserAuthLoginResponse> {
        let sessionId = await this.userAuthService.login(req.loginId, req.password, "")
        // (TODO) set Cookie
        return UserAuthLoginResponse.onSuccess(new UserAuthLoginResponseData(sessionId)) 
    }


    @Get('me')
    @ApiResponse({status: 200, type: UserAuthMeResponse})
    async getMyInfo(): Promise<UserAuthMeResponse>{
        //TODO
        return UserAuthMeResponse.onSuccess(new UserAuthMeResponseData("userId")) 
    }

    
    @Post('logout')
    @ApiResponse({status: 200, type: UserAuthLogoutResponse})
    async logout(): Promise<UserAuthLogoutResponse>{
        //TODO
        await this.userAuthService.logout("aaaa")
        // (TODO) delete Cookie
        return UserAuthLogoutResponse.onSuccess(new UserAuthLogoutResponseData("message")) 
    }

}
