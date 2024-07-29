import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/domain/user-auth/service/user-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userAuthService: UserAuthService){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    let sessionId = ""//TODO getFromContext
    if(sessionId == null){
      request["userId"] = null
      return true
    }
    let userId = this.userAuthService.getUserId(sessionId,"")
    request["userId"] = userId
    return true
  }
}
