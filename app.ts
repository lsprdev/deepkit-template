import { App } from '@deepkit/app';
import { FrameworkModule } from '@deepkit/framework';
import { JSONTransport, Logger } from '@deepkit/logger';

import { AppConfig } from './src/config/config';

import { MainInterfaceHttp } from './src/config/main.http';

import { UserInterfaceHttp } from './src/user/interface/user.http';
import { UserService } from './src/user/domain/user.service';
import { PostgresDatabase } from './src/config/database';
import { Database } from '@deepkit/orm';


new App({
    config: AppConfig,
    controllers: [
        MainInterfaceHttp,
        UserInterfaceHttp
    ],
    providers: [
        { provide: Database, useClass: PostgresDatabase },
        UserService
    ],
    imports: [
        new FrameworkModule({ 
            debug: true,
            migrationDir: 'src/migrations',
         }),
    ]
})
    .loadConfigFromEnv({ envFilePath: ['production.env', '.env'] })
    .setup((module, config: AppConfig) => {
        if (config.environment === 'production') {
            //enable logging JSON messages instead of formatted strings
            module.configureProvider<Logger>(v => v.setTransport([new JSONTransport]));

            //disable debugging
            module.getImportedModuleByClass(FrameworkModule).configure({debug: false});
        }
    })
    .run();
