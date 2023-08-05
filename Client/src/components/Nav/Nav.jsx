import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch, setAccess}) => {

    const handleLogOut = () => {
        setAccess(false)
    }

    return (
    <nav >
        <div>
            <Link to='/about'>ABOUT</Link>
            <Link to='/home'>HOME</Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
       
        <button onClick={handleLogOut}> Log Out</button>
            <SearchBar onSearch={onSearch}/>
    </nav>
    )

  /*   <nav >
    <SearchBar onSearch={onSearch}/>
    <button>
        <Link to='/about'>ABOUT</Link>
    </button>
    <button>
        <Link to='/home'>HOME</Link>
    </button>
    <button></button>
</nav> */

/*  ESTO NO ESTABA NI EL SETACCESS   const handleLogOut = () => {
        setAccess(false)
    }
 */
}

export default Nav;