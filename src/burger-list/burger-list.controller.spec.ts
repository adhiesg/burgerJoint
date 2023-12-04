import { Test, TestingModule } from '@nestjs/testing';
import { BurgerListController } from './burger-list.controller';

describe('BurgerListController', () => {
  let controller: BurgerListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BurgerListController],
    }).compile();

    controller = module.get<BurgerListController>(BurgerListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
