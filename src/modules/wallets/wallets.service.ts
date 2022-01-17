import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Wallets } from './wallet.entity';


@Injectable()
export class WalletsService {
	constructor(
	    @InjectRepository(Wallets)
	    private walletRepository: Repository<Wallets>,
	) {}

	async findAll(): Promise<Wallets[]> {
	    return await this.walletRepository.find();
	}

	async create(wallet: Wallets): Promise<Wallets> {
	    return this.walletRepository.save(wallet);
	}

	async update(wallet: Wallets): Promise<UpdateResult> {
	    return await this.walletRepository.update(wallet.id, wallet);
	}

	async delete(id): Promise<DeleteResult> {
	    return await this.walletRepository.delete(id);
	}

}
