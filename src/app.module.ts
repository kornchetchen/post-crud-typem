import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { CyptoModule } from './cypto/cypto.module';

@Module({
  imports: [ ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject:[ConfigService],
        useFactory:(configservice:ConfigService) => ({
          type:'postgres',
          host: configservice.get('DB_HOST'),
          port: configservice.get('DB_port'),
          username: configservice.get('DB_USERNAME'),
          password: configservice.get('DB_PASSWORD'),
          database: configservice.get('DB_NAME'),
          entites:[join(process.cwd(),'dist/**/*.entity.js')],
          // in realproject don't recommand to using synchronize:true!!
          synchronize:true, 
        })
      }
    ),
    CyptoModule
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
