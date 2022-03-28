import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './entities/wallet.entity';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';

describe('WalletsController', () => {
  let controller: WalletsController;
  let walletService: WalletsService;

  let walletRepo: Repository<Wallet>;

  const WALLET_REPOSITORY_TOKEN = getRepositoryToken(Wallet);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletsController],
      providers: [
        WalletsService,
        { provide: WALLET_REPOSITORY_TOKEN, useValue: {} },
      ],
    }).compile();

    walletService = module.get<WalletsService>(WalletsService);
    walletRepo = module.get<Repository<Wallet>>(WALLET_REPOSITORY_TOKEN);
    controller = module.get<WalletsController>(WalletsController);
  });

  it('walletService should be definde', () => {
    expect(walletService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of wallets', async () => {
      const result: Wallet[] = [];
      jest
        .spyOn(walletService, 'findAll')
        .mockImplementation(async () => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return wallet with wallet id 1', async () => {
      const result: Wallet = null;
      const walletId = '1';
      jest
        .spyOn(walletService, 'findOne')
        .mockImplementation(async () => result);

      expect(await controller.findOne(walletId)).toBe(result);
    });
  });
});
