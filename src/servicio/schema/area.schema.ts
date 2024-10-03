import * as mongoose from 'mongoose';




export const AreaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    contacto: { type: String, required: true },
    fotos: [{ type: String }],
    
  },
  { timestamps: true }
);

AreaSchema.index({ nombre: 1 }, { unique: true });