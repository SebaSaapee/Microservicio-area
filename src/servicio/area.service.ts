import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {  AREA, USER} from 'src/common/models/models';
import {  AreaDTO } from './dto/area.dto';
import { IArea } from 'src/common/interface/area.interface';

import { IUser } from 'src/common/interface/user.interface';



@Injectable()
export class AreaService {
  logger: any;

    constructor(@InjectModel(AREA.name) private readonly model:Model<IArea>,
    @InjectModel(USER.name) private readonly userModel: Model<IUser>, ){}


    async create(areaDTO: AreaDTO, ): Promise<IArea> {
       
        // Asociar el ID de usuario al servicio que estás creando
        const newArea = new this.model({
            ...areaDTO,
        });

        // Guardar el servicio en la base de datos y retornar el resultado
        return await newArea.save();
    }

async findAll(): Promise<IArea[]>{
    return await this.model.find()
}

async findOne(id:string): Promise<IArea>{
    return await this.model.findById(id);
}

async update(id: string, areaDTO: AreaDTO): Promise<IArea> {
  return await this.model.findByIdAndUpdate(id, areaDTO, { new: true });
}

async delete(id:string){
    await this.model.findByIdAndDelete(id);
    return {status:HttpStatus.OK,msg:'deleted'}
}


 




}
