import { Injectable } from '@nestjs/common';
import { init, loadRemote } from '@module-federation/runtime';

@Injectable()
export class AppService {
  async ssr(): Promise<string> {
    init({
      name: 'myapp',
      remotes: [
        {
          name: 'myapp',
          entry: 'http://localhost:3004/server/remoteEntry.js',
          shareScope: 'default',
        },
      ],
    });

    await loadRemote('myapp/Banner')
      .then((module) => {
        console.log(module);
      })
      .catch((err) => {
        console.error(err);
      });
    return 'Hello World!';
  }
}
