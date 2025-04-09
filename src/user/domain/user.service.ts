import { Logger } from '@deepkit/logger';
import { Database } from '@deepkit/orm';
import { User } from './user.entity';

export class UserService {
  constructor(private db: Database) {}

  async create(name: string, email: string) {
    const session = this.db.createSession();
    const user = new User();
    user.name = name;
    user.email = email;
    session.add(user);
    await session.commit();
    return user;
  }

  async list(): Promise<User[]> {
    const session = this.db.createSession();
    return session.query(User).find();
  }
}
