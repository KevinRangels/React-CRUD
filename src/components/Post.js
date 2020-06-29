import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';

class Post extends Component {

    confirmarEliminacion = () =>{
        const {id} = this.props.info;

        swal.fire({
            title: 'Estas seguro',
            text: "Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar',
            cancelButtonText : 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.props.borrarPost(id)
                swal.fire(
                'Eliminiado!',
                'El post ha sido eliminado',
                'success'
              )
            }
          })


        // this.props.borrarPost(id)
    }
    
    render() { 
        const {id, title} = this.props.info;
        return ( 
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
                    <Link to={`/editar/${id}`} className="btn btn-warning">Editar</Link>
                    <button onClick={ this.confirmarEliminacion } className="btn btn-danger" type="button">Eliminar</button>
                </td>
            </tr>
         );
    }
}
 
export default Post;