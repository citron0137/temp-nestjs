import { ApiProperty } from "@nestjs/swagger"

export class ApiStatus{
    @ApiProperty()
    success: boolean
    constructor(success: boolean){
        this.success = success
    }
}

export class ApiError{
    @ApiProperty()
    code: string
    @ApiProperty()
    message: string
}

export class ApiResponseBody<T>{
    @ApiProperty()
    status: ApiStatus 
    @ApiProperty({nullable: true, type: ApiError})
    error: ApiError | null 
    @ApiProperty({nullable: true})
    data: T | null 

    constructor(status: ApiStatus, error: ApiError|null = null, data: T|null = null){
        this.status = status
        this.error = error
        this.data = data
    }

    public static onSuccess<T>(data: T): ApiResponseBody<T>{
        return new ApiResponseBody(
            new ApiStatus(true),
            null,
            data
        )
    }
    public static onFail(error: ApiError): ApiResponseBody<any>{
        return new ApiResponseBody(
            new ApiStatus(true),
            error,
            null
        )
    }

}
