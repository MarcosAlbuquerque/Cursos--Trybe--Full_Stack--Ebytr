import { Link } from 'react-router-dom';


function ButtonEntrar() {
  return (
    <Link to="/dashboard">
      <input type="submit" value="Entrar"/>
    </Link>
  )
}

export default ButtonEntrar;