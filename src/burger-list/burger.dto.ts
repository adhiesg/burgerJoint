import {Burger} from './burger.type'

export class BurgerDto implements Burger {
    name: string;
    content: string[];
    price: number;
  }