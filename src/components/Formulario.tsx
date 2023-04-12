import { useState } from "react"
import { Form } from "../interfaces/Form.interface";
import { ErrorMsj } from "./ErrorMsj";
import { FormularioProps } from "../interfaces/Props.interface";


export const Formulario = ({ setValores, setConsultar }: FormularioProps) => {

    const [busqueda, setBusqueda] = useState<Form>({
        ciudad: '',
        pais: ''
    });

    const [error, setError] = useState<boolean>(false);

    const { ciudad, pais } = busqueda;

    //Funcion que toma los datos
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {

        const { name, value } = e.target

        //Actualizar el state
        setBusqueda({
            ...busqueda,
            [name]: value
            // [e.target.name]: e.target.value
        })

    };

    //Enviar FOrmulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Validar Formulario
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        //Pasarlo al componente principal
        setValores(busqueda);
        setConsultar(true);

    }


    return (
        <form onSubmit={handleSubmit}>
            {
                error && <ErrorMsj />
            }
            <div className="form-floating mb-3">
                <input onChange={handleChange} value={ciudad} autoComplete="off" type="text" className="form-control" name="ciudad" id="ciudad" placeholder="Escoge una Ciudad" />
                <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="form-floating">
                <select onChange={handleChange} className="form-select" value={pais} name="pais" id="pais">
                    <option disabled value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Paises</label>

            </div>

            <button type="submit" className="mt-2 btn btn-dark w-100">Buscar Climar...</button>

        </form>
    )
}

