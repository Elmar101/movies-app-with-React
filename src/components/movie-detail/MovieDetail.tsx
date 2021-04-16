import { useContext } from 'react'
import {MovieContext} from '../../context-provider/ContextProvider'
const MovieDetail = () => {
    let {id,name,updateMovie} = useContext(MovieContext);

    const changeMovieName = (e:any)=>{
       name = e.target.value;
       updateMovie({id: id , name: e.target.value}); 
    } 
    
    return (   
        <div className="card">
            <div className="card-body">
            <span className="badge badge-warning">
                id: {id} 
                name: {name}
            </span>
            
            <div className="input-group my-3">
                <input type="text" className="form-control"
                        value={name}
                        onChange={changeMovieName}
                       
                    />
                <button className="btn btn-outline-secondary" type="button">Button</button>
            </div>
            </div>
        </div>   
    )
}

export default MovieDetail;
