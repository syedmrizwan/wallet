import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { WalletTransactionRepository } from './repositories/wallet-transaction.repository';
import { WalletRepository } from './repositories/wallet.repository';

@Injectable()
export class WalletsService {
  constructor(
    private readonly walletRepository: WalletRepository,
    private readonly walletTransactionRepository: WalletTransactionRepository,
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
