import { Injectable, NotImplementedException } from '@nestjs/common';
import { User } from '../model/user';

@Injectable()
export class UserService {
    async create(loginId:string, password: string): Promise<User>{
        // TODO 유저 생성 및 반환
        throw new NotImplementedException() 
    }

    async get(loginId: string, password: string): Promise<User>{
        // TODO 
        // loginId로 유저 조회 
        // password 일치 여부 확인
        // 데이터 반환
        throw new NotImplementedException() 
    }
}
