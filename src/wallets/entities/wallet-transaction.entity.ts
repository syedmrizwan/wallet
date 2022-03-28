import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TransactionType, WalletBucket } from '../../shared/enums/wallet.enum';
import { Wallet } from './wallet.entity';

@Entity()
export class WalletTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    name: 'transaction_id',
  })
  transactionId: string;

  @Column({
    nullable: false,
    name: 'idemp_key',
  })
  idempKey: string;

  @Column({
    nullable: false,
    name: 'amount',
  })
  amount: string;

  @Column({
    type: 'enum',
    enum: [WalletBucket.RETAILO_COIN, WalletBucket.LOAN, WalletBucket.CASH],
    name: 'bucket',
  })
  bucket: string;

  @Column({
    type: 'enum',
    enum: [TransactionType.INCREASE, TransactionType.DECREASE],
    name: 'transaction_entry',
  })
  transactionEntry: string;

  @Column({
    nullable: true,
    name: 'expiry',
  })
  expiry: string;

  @ManyToOne(() => Wallet, (w) => w.walletTransactions) wallet: Wallet;
}
