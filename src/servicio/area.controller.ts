import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaDTO } from './dto/area.dto';
import { AreaMSG } from 'src/common/constants';
import {MessagePattern, Payload} from '@nestjs/microservices'


@Controller()
export class AreaController {
    private readonly logger = new Logger(AreaController.name);
    constructor(private readonly areaService:AreaService){}

    @MessagePattern(AreaMSG.CREATE)
    async create(@Payload() payload: { areaDTO: AreaDTO }) {
        const { areaDTO,  } = payload;

        try {
            const createdArea = await this.areaService.create(areaDTO);
            return { message: 'Service created successfully', service: createdArea };
        } catch (error) {
            this.logger.error(`Error creating service: ${error.message}`);
            throw error; // Propagate the error to handle it properly
        }
    }
    @MessagePattern(AreaMSG.FIND_ALL)
    findAll(){
        return this.areaService.findAll();
    }
    @MessagePattern(AreaMSG.FIND_ONE)
    findOne(@Payload() id:string){
        return this.areaService.findOne(id);
    }

    @MessagePattern(AreaMSG.UPDATE)
    update(@Payload() payload: { id: string, serviceDTO: AreaDTO }) {
        return this.areaService.update(payload.id, payload.serviceDTO);
    }

    @MessagePattern(AreaMSG.DELETE)
    delete(@Payload() id:string){
        return this.areaService.delete(id);
    }

    
}


