import { Controller, Get, Body, Post, Put, Param, Delete } from '@nestjs/common';

import { Wallets } from './wallet.entity';
import { WalletsService } from './wallets.service';


@Controller('api/wallets')
export class WalletsController {

	constructor(private walletsService: WalletsService){}

	@Get()
	index(): Promise<Wallets[]> {
	    return this.walletsService.findAll();
	}  

	@Post()
    async create(@Body() walletData: Wallets): Promise<any> {
      return this.walletsService.create(walletData);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() walletData: Wallets): Promise<any> {
       walletData.id = Number(id);
       return this.walletsService.update(walletData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.walletsService.delete(id);
    }  

}
