import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import {UpdateCatDto} from "./dto/update-cat.dto";

@Injectable()
export class CatService {
  private cats = [];

  getAll() {
    return this.cats;
  }
  getOneById(id: string) {
    return this.cats.find((cat) => cat.id === id);
  }
  createCat(catDto: CreateCatDto) {
    this.cats.push({ ...catDto, id: new Date().valueOf() });
    return catDto;
  }
  deleteCat(id: string) {
    const index = this.cats.findIndex((cat) => cat.id === id);
    this.cats.splice(index, 1);
  }
  updateCat(catDto: UpdateCatDto, id: string) {
    const changeCat = this.cats.find((cat) => cat.id === id);

  }
}
