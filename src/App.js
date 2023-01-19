import React from "react";
import ComponenteInput from "./components/Input.js";
import { 
    Formulario, 
    Label,  
    ContenedorTerminos, 
    ContenedorBotonCentrado, 
    Boton,
    MensajeExito,
    MensajeError
 } from "./elementos/Formulario";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
    return (
        <main>

            <Formulario action="">
            <ComponenteInput />

                


                <ContenedorTerminos>
                <Label>
                    <input type="checkbox" name="terminos" id="terminos"/>
                    Acepto los Terminos y Condiciones
                </Label>
                </ContenedorTerminos>
                {false && <MensajeError>
                    <p>
                    <FontAwesomeIcon icon={faTriangleExclamation}/>
                        <b>Error:</b>Por favor rellena el formulario adecuadamente.
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    <MensajeExito>Formulario enviado exitosamente</MensajeExito>
                </ContenedorBotonCentrado>
            </Formulario>
        </main>

    );
}

export default App;