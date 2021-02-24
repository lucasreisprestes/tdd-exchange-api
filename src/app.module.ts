import { Module } from '@nestjs/common';
import { ExchangeModule } from './exchange/exchange.module';
import { CurrenciesServiceModule } from './currencies-service/currencies-service.module';

@Module({
  imports: [ExchangeModule, CurrenciesServiceModule],
})
export class AppModule {}
