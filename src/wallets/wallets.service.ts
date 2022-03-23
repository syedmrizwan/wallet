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
    private readonly walletsRepository: Repository<Wallet>,
  ) {}

  create(wallet: CreateWalletDto): Promise<Wallet> {
    return this.walletsRepository.save({ ...wallet });
  }

  findAll(): Promise<Wallet[]> {
    return this.walletsRepository.find();
  }

  findOne(id: number): Promise<Wallet> {
    return this.walletsRepository.findOne(id);
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  async remove(id: number): Promise<void> {
    await this.walletsRepository.delete(id);
  }
}
