import global from './Header.module.css'

import igniteLogo from '../assets/logo-ignite.svg'

export  function Header() {
 return(
    <header className={global.header}>

        <img src={igniteLogo} alt="Logotipo Ignite"/>

        <strong > Ignite Feed </strong>

    </header>
    
 )
}