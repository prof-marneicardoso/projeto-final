
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/users/register">Cadastro</Link></li> */}
                <li><Link to="/products">Produtos</Link></li>
                <li><Link to="/categories">Categorias</Link></li>
                <li><Link to="/users/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;
