import { Module } from '@nestjs/common';

import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallets } from './wallet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Wallets]),
  ],
  providers: [WalletsService],
  controllers: [WalletsController]
})
export class WalletsModule {}
