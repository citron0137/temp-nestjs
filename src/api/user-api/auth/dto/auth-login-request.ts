import { ApiProperty } from "@nestjs/swagger"

export class UserAuthLoginRequest{
    @ApiProperty()
    loginId: string
    @ApiProperty()
    password: string
}