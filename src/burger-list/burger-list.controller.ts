import { Param, Body, Controller, Get, Post, Delete} from '@nestjs/common';
import {BurgerDto} from './burger.dto'


@Controller('burger-list')
export class BurgerListController {
    private burgerList: BurgerDto[] = []

    @Get()
    getBurgerMenu() {
        return this.burgerList;
    }

    @Get(':name')
    getBurgerByName(@Param('name') burgerName: string) {
        const burger = this.burgerList.find(burger => burger.name === burgerName);

        if (burger) {
            return burger;
        } else {
            return { success: false, message: 'Burger not found' };
        }
    }

    @Post()
    createBurgerMenu(@Body() burgerDto: BurgerDto) {
        this.burgerList.push(burgerDto);
        return burgerDto;
    }

    @Delete(':name')
    deleteBurgerMenu(@Param('name') burgerName: string) {
        const index = this.burgerList.findIndex(burger => burger.name === burgerName);

        if (index !== -1) {
        const deletedBurger = this.burgerList.splice(index, 1);
        return { success: true, deletedBurger };
        } else {
        return { success: false, message: 'Burger not found' };
        }
    }
    
}
