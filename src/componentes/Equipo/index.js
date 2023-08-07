import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexTorgba from "hex-to-rgba"

const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario,titulo,id } = props.datos
    const { colaboradores, eliminarColaborador,actualizarColor,like } = props
    const obj = {
        backgroundColor: hexTorgba(colorPrimario,0.6)
    }
   

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input type="color" className="input-color" value={ hexTorgba(colorPrimario,0.6)} onChange={(event)=>{actualizarColor(event.target.value, id)}} />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo