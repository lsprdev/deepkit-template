import { Database } from '@deepkit/orm';
import { PostgresDatabaseAdapter } from '@deepkit/postgres';
import dotenv from "dotenv";
import { User } from '../user/domain/user.entity';

dotenv.config();
export class PostgresDatabase extends Database {
    constructor() {
        super(
            new PostgresDatabaseAdapter({
            host: 'localhost',
            port: 15432,
            database: 'deepkit',
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            }),
            [User]
        );
    }
}