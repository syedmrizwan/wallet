import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { WalletTransaction } from './wallet-transaction.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  walletId: number;

  @Column({
    nullable: false,
    name: 'user_id',
  })
  userId: number;

  @Column({
    nullable: false,
    name: 'country',
  })
  country: string;

  @OneToMany(() => WalletTransaction, (walletTxn) => walletTxn.wallet)
  walletTransactions: WalletTransaction[];
}
