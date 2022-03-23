import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateWalletDto {
  @Expose()
  @IsNotEmpty()
  retailerId: number;

  @Expose()
  @IsNotEmpty()
  country: string;
}
