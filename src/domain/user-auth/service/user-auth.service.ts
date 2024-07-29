import { BadRequestException, Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserAuth, UserAuth } from '../model/user-auth';
import { randomUUID } from 'crypto';
import { UserService } from 'src/domain/user/service/user.service';

@Injectable()
export class UserAuthService {
    
    constructor(
        private userService: UserService,
        private userAuthRepository: UserAuthRepository,
    ) { }

    /**
     * @param loginId 
     * @param password 
     * @param distinction any value not to be changed 
     * @returns sessionId 
     */
    async login(loginId: string, password: string, distinction: string): Promise<string> {
        let user = await this.userService.get(loginId, password)
        let userAuth = await this.userAuthRepository.save(user.id, distinction, moment().plusSecond(30*60))
        return userAuth.sessionId
    }
    
    async getUserId(sessionId: string, distinction: string): Promise<string> {
        // check authSession
        let userAuth = await this.userAuthRepository.findOne({sessionId, distinction})
        // if invalid -> throw
        if(userAuth == null){
            throw new BadRequestException()
        }
        // if it has short ttl -> expand it
        if(userAuth.expiredAt < moment().minuseSecond(25*30)){
            await this.userAuthRepository.updateExpiredAt(sessionId, moment().plusSecond(30*60))
        }
        return userAuth.userId
    }
    
    async logout(sessionId: string) {
        // check authSession
        let userAuth = await this.userAuthRepository.findOne({sessionId})
        // if invalid -> throw
        if(userAuth == null){
            throw new BadRequestException()
        }
        // delete authSession
        this.userAuthRepository.delete(sessionId)
    }

}