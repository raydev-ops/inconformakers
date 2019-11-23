import React from "react"
import PageWrapper from "../components/PageWrapper"
import SEO from "../components/seo"
import Image from "./../images/event.jpg"
import GAS from "./../images/gas.png"
import Button from "../components/Button"

const IndexPage = () => {
  return (
    <PageWrapper>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      <div className="main-background">
        <div className="container">
          <div className="main-description d-flex d-flex-column h-100 d-flex-end p-bottom-20">
            <h1 className="color-white">InconforMakers</h1>
            <h2 className="color-white">Subtitle</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="container p-top-60 p-bottom-60">
          <p className="m-bottom-20 fs-5 tt-uppercase">Próximos eventos</p>
          <div className="grid">
            <div className="sm-4-12">
              <img src={Image} />
              <p>Lavanderia</p>
              <p>Onde: WeWork</p>
              <p>Quando: 10/11/2019</p>
              <a href="/#">Detalhes</a>
            </div>
            <div className="sm-4-12">
              <img src={Image} />
              <p>Lavanderia</p>
              <p>Onde: WeWork</p>
              <p>Quando: 10/11/2019</p>
              <a href="/#">Detalhes</a>
            </div>
            <div className="sm-4-12">
              <img src={Image} />
              <p>Lavanderia</p>
              <p>Onde: WeWork</p>
              <p>Quando: 10/11/2019</p>
              <a href="/#">Detalhes</a>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <div className="container p-top-60 p-bottom-60">
          <p className="m-bottom-20 fs-5 tt-uppercase color-white">
            Nosso trabalho
          </p>
          <div className="grid">
            <div className="sm-6-12">
              <p className="color-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sem tortor, luctus ac est ut, tempus faucibus sem.
                Fusce iaculis congue turpis, non consequat enim lacinia nec.
                Cras pellentesque malesuada lacus, at tempus lacus varius non.
                Pellentesque posuere justo ut neque aliquam gravida. Vivamus
                rhoncus dolor eget risus eleifend rutrum.
              </p>
            </div>
            <div className="sm-6-12">
              <p className="color-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sem tortor, luctus ac est ut, tempus faucibus sem.
                Fusce iaculis congue turpis, non consequat enim lacinia nec.
                Cras pellentesque malesuada lacus, at tempus lacus varius non.
                Pellentesque posuere justo ut neque aliquam gravida. Vivamus
                rhoncus dolor eget risus eleifend rutrum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background-blue">
        <div className=" p-top-10 p-bottom-10">
          <p className="m-bottom-20 container fs-5 tt-uppercase color-white">
            Quem já passaram por aqui
          </p>
          <div className="d-flex d-flex-space-around">
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
            <div className="ongs-image">
              <img src={GAS} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container p-top-60 p-bottom-60">
          <p className="m-bottom-20 fs-5 tt-uppercase">Como fazer parte</p>
          <div className="grid">
            <div className="sm-12-12">
              <p className="m-bottom-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sem tortor, luctus ac est ut, tempus faucibus sem.
                Fusce iaculis congue turpis, non consequat enim lacinia nec.
                Cras pellentesque malesuada lacus, at tempus lacus varius non.
                Pellentesque posuere justo ut neque aliquam gravida. Vivamus
                rhoncus dolor eget risus eleifend rutrum.
              </p>
              <form>
                <input type="text" />
                <Button>Enviar</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default IndexPage
