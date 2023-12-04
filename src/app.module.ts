import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BurgerMenuModule } from './burger-list/burger-list.module';

@Module({
  imports: [BurgerMenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
