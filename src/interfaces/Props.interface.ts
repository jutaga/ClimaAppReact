import { APIResp } from "./ApiResp.Interface";

interface Form {
    ciudad: string;
    pais: string;
}

export interface HeaderProp {
    title: string;
}

export interface FormularioProps {
    setValores: React.Dispatch<React.SetStateAction<Form>>,
    setConsultar: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ClimaProp {
    resultadoApi: APIResp | undefined;
}