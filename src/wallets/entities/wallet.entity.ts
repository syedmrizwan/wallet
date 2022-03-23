import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  walletId: number;

  @Column()
  retailerId: number;

  @Column()
  country: string;
}
