import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
	const [search, setSearch] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setSearch('');
	}

	return (
<div className="contNavbar">

	<div className='navBar'>
		
			<br /><form onSubmit={(e) => handleSubmit(e)}>                    
				<input
					className='menu2'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Buscar juego'
					type='text'
				></input>
				<NavLink className='menu1' to={`/results/${search}`} >Buscar</NavLink>
			</form><br />
			<NavLink className='menu' to="/" >Inicio</NavLink><br />
			<NavLink className='menu' to="/home" >home</NavLink><br />
			<NavLink className='menu' to="/create" >create</NavLink><br />	
	</div>
</div>
	);
}

export default Navbar;