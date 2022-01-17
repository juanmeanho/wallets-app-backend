import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsModule } from './modules/wallets/wallets.module';

@Module({
  imports: [TypeOrmModule.forRoot(), WalletsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
