import { ApiProperty } from "@nestjs/swagger"
import { ApiResponseBody } from "src/api/api-response"

export class UserAuthMeResponseData{
    @ApiProperty()
    userId: string

    constructor(userId: string){
        this.userId = userId 
    }
}

export class UserAuthMeResponse extends ApiResponseBody<UserAuthMeResponseData>{
    @ApiProperty({nullable: true, type: UserAuthMeResponseData})
    data: UserAuthMeResponseData | null 
}