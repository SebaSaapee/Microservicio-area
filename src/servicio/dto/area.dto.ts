
import { IsNotEmpty, IsString } from "class-validator";


export class AreaDTO{
    
    readonly nombreArea: string;
    readonly descripcion: string;
    
    readonly contacto: string;
    readonly fotos: string[];
    
}


