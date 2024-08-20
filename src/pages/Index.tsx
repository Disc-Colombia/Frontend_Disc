import { Home } from '../component/Home';
import logo from '../img/logoDISC_sinfondo.png';
import'../style/index.css';
export const Index = () => {
  return (
<>
<div className='container_index'>
  <div className='container_index--tittle'>
    <img className='tittle_index--img' src={logo} alt="logo develoment" />
    <h2 className='text_index--tittle'>Innovative <span className='tittle_index--span'>Results</span> </h2>
  </div>
  <div className='container_background'></div>
      <Home/>
    </div>
</>
  )
}
