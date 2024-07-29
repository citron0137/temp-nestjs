import { ApiProperty } from "@nestjs/swagger"
import { ApiResponseBody } from "src/api/api-response"

export class UserAuthLogoutResponseData{
    @ApiProperty()
    message: string
    constructor(sessionId: string){
        this.message = sessionId
    }
}

export class UserAuthLogoutResponse extends ApiResponseBody<UserAuthLogoutResponseData>{
    @ApiProperty({nullable: true, type: UserAuthLogoutResponseData})
    data: UserAuthLogoutResponseData | null 

}