import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"
import headerStyle from "./header.module.scss"

const Header = ({ siteTitle }) => {
    const direccion = useStaticQuery(graphql`
    query SiteDirQuery {
      site {
        siteMetadata {
          headerDir,
          headerTelefono
        }
      }
    }
  `);
    return(
        <header className={headerStyle.headerStyle}>
        <div className={headerStyle.headerDivStyle}>
            <div className={"row " + headerStyle.headerImg}>
                <Image/>
            </div>
            <div className={headerStyle.headerText}>
                <h1>
                    <Link to="/" className={headerStyle.headerLink}>
                        {siteTitle}
                    </Link>
                </h1>
            </div>
            <div className="row"><p className={headerStyle.headerSeparator}/></div>
            <div className="row">
                <p className={headerStyle.headerDir}>
                    {direccion.site.siteMetadata.headerDir}</p>
                <p className={headerStyle.headerDir}>
                    {direccion.site.siteMetadata.headerTelefono}
                </p>
            </div>
        </div>
         <div className={headerStyle.headerDivider}>
             <nav>
                 <ul className={headerStyle.navList}>
                     <li className={headerStyle.navListLi}>
                         <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/servicios/">Servicios</Link>
                     </li>
                     <li className={headerStyle.navListLi}>
                         <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/mision/">Mision</Link>
                     </li>
                     <li className={headerStyle.navListLi}>
                         <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/vision/">Vision</Link>
                     </li>
                     <li className={headerStyle.navListLi}>
                         <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/contacto/">Contacto</Link>
                     </li>
                 </ul>
             </nav>

         </div>
      </header>
    )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
