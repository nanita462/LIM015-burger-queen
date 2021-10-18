import React from 'react';
import chef from '../assets/chef.png';
import mesero from '../assets/mesero.png';
import { Link } from 'react-router-dom';


const Users = () => {

   
    return (
        <section className='container__User'>
        
        <div className= 'img__User2'>
            <img className= 'imgMesero' src={mesero} alt="" width='300px' height='300px'></img>
           <Link to='/waiter'>
            <button 
            className= 'btn__User2' >Meserx</button>
            </Link> 
        </div>
        <div className= 'img__User3'>
           <img className= 'imgChef' src={chef} alt="" width='300px' height='300px'></img>
           <Link to='/chef'>
           <button 
           className= 'btn__User3'>Chef</button>
           </Link> 
        </div>
        

        </section>
    )
}

export default Users;