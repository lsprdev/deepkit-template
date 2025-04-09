import { MaxLength } from '@deepkit/type';
import { http } from '@deepkit/http';

export class MainInterfaceHttp {
    @http.GET('/')
    async index() {
        return `Deepkit Template API `;
    }
}
