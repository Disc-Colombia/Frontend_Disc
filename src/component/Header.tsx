import { Link } from 'react-router-dom'
import logo from '../img/logoDISC_sinfondo.png'
import Col from '../img/col.png';
import Us from '../img/us.png';
import '../style/headers.css';
import { Outlet } from 'react-router-dom';
import { Footers } from './Footers';
export const Header = () => {
  return (
    <>
    <div className='container_header'>
        <div className='container_logo'>
            <Link to={"/"}>
            <img className='container_logo--img' src={logo} alt='logo development'/>
            </Link>
            
        </div>
        <div className='container'>
         <div className='container_nav'>
            <nav className='container_nav--lin'>
             <Link className='navegations_links'  to={"/"}>Home</Link>
             <Link className='navegations_links' to={"#"}>Services</Link>
             <Link className='navegations_links' to={"#"}>About us</Link>
             <Link className='navegations_links' to={"#"}>Conatct us</Link>
            </nav>
         </div>
         <div className='container_flags'>
           <div className='container_flags--contry'>
            <img className='flags' src={Col}/>
           </div>
           <div className='container_flags--contry'>
            <img className='flags usaflag' src={Us}/>
           </div>
         </div>
        </div>
    </div>
    <Outlet/>
    <Footers/>
    </>
  )
}
