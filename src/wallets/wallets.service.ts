import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepository: Repository<Wallet>,
  ) {}

  create(wallet: CreateWalletDto): Promise<Wallet> {
    return this.walletRepository.save({ ...wallet });
  }

  findAll(): Promise<Wallet[]> {
    return this.walletRepository.find({ relations: ['walletTransactions'] });
  }

  findOne(id: number): Promise<Wallet> {
    return this.walletRepository.findOne(id);
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  async remove(id: number): Promise<void> {
    await this.walletRepository.delete(id);
  }
}
