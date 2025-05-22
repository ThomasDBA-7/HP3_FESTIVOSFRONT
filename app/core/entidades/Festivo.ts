export interface Festivo {
    id: number;
    nombre: string;
    dia: number;
    mes: number;
    diasPascua:number;
    tipo:{
        id:number,
        nombre:string
    }
    idTipo:number;
}