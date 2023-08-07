import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const[titulo, actualizartitulo]= useState("")
    const[color, actualizarcolor]= useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }
    const manejarnuevoEquipo=(e)=>{
        e.preventDefault()
    crearEquipo({titulo,  colorPrimario:color})


    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarnuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto
                titulo="titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizartitulo}
            />
            <CampoTexto
                titulo="color"
                placeholder="Ingresar el color"
                required
                valor={color}
                actualizarValor={actualizarcolor}
                type="color"
            />
            <Boton> Registrar equipo</Boton>
            </form>
    </section>
}

export default Formulario