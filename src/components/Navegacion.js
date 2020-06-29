import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

const Navegacion = () => {
    return ( 
        <nav className="col-12 col-md-8 d-flex justify-content-between">
            <Link to={'/'}>Todos los Posts</Link>
            <Link to={'/crear'}>Nuevo Post</Link>
        </nav>
     );
}
 
export default Navegacion;