import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { Form } from "./interfaces/Form.interface"
import { APIResp } from './interfaces/ApiResp.Interface';
import { Clima } from "./components/Clima";
import { ErrorMsj } from "./components/ErrorMsj";


export const App = () => {

  const [valores, setValores] = useState<Form>({
    ciudad: '',
    pais: ''
  })

  const [consultar, setConsultar] = useState(false);
  const [resultadoConsulta, setresultadoConsulta] = useState<APIResp>();
  const [errorApi, setErrorApi] = useState<boolean>(false);

  const { ciudad, pais } = valores;



  useEffect(() => {

    const consultarApi = async () => {
      const apiUrl: string = 'https://api.openweathermap.org/data/2.5'
      const apiKey: string = '9e94dc457873f0a900180171040195c5'
      const url: string = `${apiUrl}/weather?q=${ciudad},${pais}&appid=${apiKey}`

      const respuesta: Response = await fetch(url);
      const resultado: APIResp = await respuesta.json();

      //Validar SI obtuvo resultados
      if ((resultado?.cod).toString() === '404') {
        (setErrorApi(true));
      } else {
        setresultadoConsulta(resultado);
        setErrorApi(false);
      }
    }

    if (consultar) consultarApi();


  }, [valores])



  return (
    <>
      <Header title='Clima React App' />

      <div className="container-fluid main-container ">
        <div className="container ">
          <div className="row p-3">
            <div className="col-md-6 mt-2">
              {
                errorApi && <ErrorMsj mensaje="No encontramos Resultados" />
              }
              <Formulario setConsultar={setConsultar} setValores={setValores} />
            </div>
            <div className="col-md-6 mt-2">
              {
                resultadoConsulta && <Clima resultadoApi={resultadoConsulta} />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
