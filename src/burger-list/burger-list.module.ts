import { Module } from '@nestjs/common';
import { BurgerListController } from './burger-list.controller';

@Module({
  controllers: [BurgerListController],
})
export class BurgerMenuModule {}
