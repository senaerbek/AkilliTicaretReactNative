import {post} from '../request';
import {SessionModel, SessionRequestModel} from '../models/user.model';

export class UserService {
  static login(sessionModel: SessionModel): Promise<SessionRequestModel> {
    return post('Auth/Login', sessionModel).then(response =>
      response.getBody(),
    );
  }
}
