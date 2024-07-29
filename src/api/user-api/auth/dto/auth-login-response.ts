import { ApiProperty } from "@nestjs/swagger"
import { ApiResponseBody } from "src/api/api-response"

export class UserAuthLoginResponseData{
    @ApiProperty()
    authSessionId: string
    constructor(authSessionId: string){
        this.authSessionId = authSessionId
    }
}

export class UserAuthLoginResponse extends ApiResponseBody<UserAuthLoginResponseData>{
    @ApiProperty({nullable: true, type: UserAuthLoginResponseData})
    data: UserAuthLoginResponseData | null 
}