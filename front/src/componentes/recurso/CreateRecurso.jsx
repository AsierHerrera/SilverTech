import { createRecurso } from "../../utils/fetch";
import "./CreateRecurso.scss"
const CreateRecurso = ({onCreate})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const img = e.target.img.value;  
        const name = e.target.name.value;        
        const description = e.target.description.value;
        const day = e.target.day.value; 
        const time = e.target.time.value; 
        const place = e.target.place.value; 
        const tickes = e.target.tickes.value; 
        const price = e.target.price.value; 

        const data = {img,name,description,day,time,place,tickes,price};
        console.log("data: ",data)
        const result = await createRecurso(data);
        console.log("result",result)
        onCreate();
        window.location.reload()
    }
    return (
        <form action="" className="create-recurso" onSubmit={handleSubmit}>
            <label htmlFor="img" >Imagen</label>
            <input type="file" name="img"/>
            <label htmlFor="name" >Nombre</label>
            <input type="text" name="name"/>
            <label htmlFor="description" >Description</label>
            <textarea name="description"></textarea>
            <label htmlFor="day" >Dia</label>
            <input type="text" name="day"/>
            <label htmlFor="time" >Hora</label>
            <input type="text" name="time"/>
            <label htmlFor="place" >Lugar</label>
            <input type="text" name="place"/>
            <label htmlFor="tickes" >Asistentes</label>
            <input type="text" name="tickes"/>
            <label htmlFor="price" >Precio</label>
            <input type="text" name="price"/>

            <button type="submit" className="btn-create-recurso">Crear</button>
        </form>
    )
}
export default CreateRecurso;