// import { Injectable, Logger } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import redis = require('redis');

// @Injectable()
// export class SaveCacheHelper {
//   constructor(private readonly _configService: ConfigService) {}

//   async saveInCache(key: string, result: string) {
//     try {
//       const client = redis.createClient({
//         url: this._configService.get('redis.url'),
//         socket: {
//           tls: true,
//           rejectUnauthorized: false,
//         },
//       });
//       client.on('error', (error) => Logger.error(error));
//       await client.connect();
//       await client.set(key, result);
//       await client.disconnect();
//     } catch (error) {
//       Logger.log(error);
//     }
//   }
// }
