import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyle from "../components/index.module.scss"
import { Link } from "gatsby"
const IndexPage = () => (
  <Layout>

    <SEO title="Optidents" />
    <div className="container">
        <div className={indexStyle.bg}></div>
        <div className="row intro">
            <h1>Cuidamos tu sonrisa con experiencias agradables</h1>
            <p>En OPTIDENT, buscamos convertirnos en un líder en la industria dental al mantener un enfoque coherente y sistematizado de la atención dental, así como un alto nivel de servicio al cliente. Nuestra identidad de marca está diseñada para incorporar confianza y, al mismo tiempo, garantizar un cuidado cómodo de su salud bucal.</p>
        </div>
        <div className="row ">
            <p>
            </p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            </div>
        </div>
    </div>
      <div className={indexStyle.indexdiv}>
          <div className="row"><h3><Link className={indexStyle.indexLink} to="/servicios/">Nuestros servicios</Link></h3></div>
      </div>
  </Layout>
);

export default IndexPage
