import { Module } from '@nestjs/common';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AREA , USER } from 'src/common/models/models';
import { AreaSchema, } from './schema/area.schema';
import { UserSchema } from './schema/user.schema';


@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:AREA.name,
      useFactory:()=>AreaSchema
      },
      {
        name: USER.name, // Nombre del modelo de usuario
        useFactory: () => UserSchema,
    }, 
    ])

  ],
  controllers: [AreaController],
  providers: [AreaService],
  })
export class AreaModule {}
