export interface Festivo {
    id: number;
    dia: number;
    mes: number;
    nombre: string;
    tipoFestivoId: number;
    diasDesdePascua?: number;
  }