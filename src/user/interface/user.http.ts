import { MaxLength } from '@deepkit/type';
import { http, HttpBody } from '@deepkit/http'; 
import { UserService } from '../domain/user.service';

@http.controller('/users')
export class UserInterfaceHttp {
    constructor(private service: UserService) { }

    @http.GET()
    async getAll() {
        return this.service.list();
    }

    @http.POST()
    async create(body: HttpBody<{ name: string; email: string }>) {
        return this.service.create(body.name, body.email);
    }
}
