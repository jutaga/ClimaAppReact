interface Form {
    ciudad: string;
    pais: string;
}

export interface HeaderProp {
    title: string;
}

export interface FormularioProps {
    setValores: React.Dispatch<React.SetStateAction<Form>>,
}