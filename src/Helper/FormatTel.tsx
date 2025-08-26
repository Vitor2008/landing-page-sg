
export interface ParametroTel {
    telefone: string;
}

const FormatTel = ({ telefone }: ParametroTel): string => {
    const numeroStr = telefone.toString().padStart(11, '0');
    const ddd = numeroStr.slice(0, 2);
    const digito9 = numeroStr.slice(2, 3);
    const parte1 = numeroStr.slice(3, 7);
    const parte2 = numeroStr.slice(7, 11);
    return `${ddd} ${digito9} ${parte1}-${parte2}`
}

export default FormatTel