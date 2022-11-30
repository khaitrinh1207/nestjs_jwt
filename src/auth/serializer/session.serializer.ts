import { PassportSerializer } from "@nestjs/passport";

export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: any): any {
    done(null, user);
  }

  deserializeUser(payload: any, done: any): any {
    done(null, payload);
  }
}
