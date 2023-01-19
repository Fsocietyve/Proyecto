import React from 'react';
import { 
    Input,
    Label,
    GrupoInput,  
    LeyendaError, 
    IconoValidacion, } from "./../elementos/Formulario";
    import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = () => {
    return (
        <div>
            <Label htmlFor="nombre">Usuario</Label>
            <GrupoInput>
                <Input type="text" placeholder="usuario" id="nombre" />
                <IconoValidacion icon={faCircleCheck} />
            </GrupoInput>
            <LeyendaError>lorem </LeyendaError>
        </div>
    )
}

export default ComponenteInput;
