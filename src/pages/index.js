import React from "react"
import PageWrapper from "../components/PageWrapper"
import SEO from "../components/seo"
import Image from "./../images/show.jpg"
import GAS from "./../images/ong.png"
import Button from "../components/Button"

const IndexPage = () => {
  return (
    <PageWrapper absolute>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      <div className="main-background">
        <div className="container p-relative z-i-1">
          <div className="main-description d-flex d-flex-column h-100 d-flex-end p-bottom-60">
            <h2 className="color-white fs-6">
              Mudar não é só possível; mudar é necessário.
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div className="container p-top-100 p-bottom-100">
          <p className="m-bottom-40 fs-5 tt-uppercase fw-bold color-dark">
            Próximos eventos
          </p>
          <div className="grid">
            <div className="sm-4-12">
              <img src={Image} />
              <p className="fs-6 m-bottom-10 m-top-10">Lavanderia</p>
              <p>
                <span className="fs-8 fw-bold tt-uppercas color-gray">
                  Onde:
                </span>{" "}
                WeWork
              </p>
              <p>
                <span className="fs-8 fw-bold tt-uppercas color-gray">
                  Quando:
                </span>{" "}
                10/11/2019
              </p>
              <a href="/#" className="btn w-100 d-block p-center m-top-20">
                Detalhes
              </a>
            </div>
            <div className="sm-4-12">
              <img src={Image} />
              <p className="fs-6 m-bottom-10 m-top-10">Lavanderia</p>
              <p>
                <span className="fs-8 fw-bold tt-uppercas color-gray">
                  Onde:
                </span>{" "}
                WeWork
              </p>
              <p>
                <span className="fs-8 fw-bold tt-uppercas color-gray">
                  Quando:
                </span>{" "}
                10/11/2019
              </p>
              <a href="/#" className="btn w-100 d-block p-center m-top-20">
                Detalhes
              </a>
            </div>
            <div className="sm-4-12">
              <img src={Image} />
              <p className="fs-6 m-bottom-10 m-top-10">Lavanderia</p>
              <p>
                <span className="fs-8 fw-bold tt-uppercas color-gray">
                  Onde:
                </span>{" "}
                WeWork
              </p>
              <p>
                <span className="fs-8 fw-bold tt-uppercas color-gray">
                  Quando:
                </span>{" "}
                10/11/2019
              </p>
              <a href="/#" className="btn w-100 d-block p-center m-top-20">
                Detalhes
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <div className="container p-top-100 p-bottom-100">
          <p className="m-bottom-40 fs-5 tt-uppercase fw-bold color-white">
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
      <div className="background-blue_">
        <div className=" p-top-60 p-bottom-60">
          <p className=" container fs-5 tt-uppercase m-bottom-40 fw-bold color-dark">
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
      <div className="background-dark">
        <div className="container p-top-100 p-bottom-100">
          <p className="m-bottom-40 fs-5 tt-uppercase fw-bold color-white">
            Como fazer parte
          </p>
          <div className="grid">
            <div className="sm-12-12">
              <p className="m-bottom-40 color-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sem tortor, luctus ac est ut, tempus faucibus sem.
                Fusce iaculis congue turpis, non consequat enim lacinia nec.
                Cras pellentesque malesuada lacus, at tempus lacus varius non.
                Pellentesque posuere justo ut neque aliquam gravida. Vivamus
                rhoncus dolor eget risus eleifend rutrum.
              </p>
              <form className="d-flex max-width-container m-auto">
                <input placeholder="Seu e-mail" type="text" />
                <Button>Enviar</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="background-darker">
        <div className="container p-top-100 p-bottom-100">
          <div className="grid">
            <div className="sm-6-12">
              <p className=" color-white">InconforMakers</p>
            </div>

            <div className="sm-6-12 p-right">
              <p className=" color-white">
                Inicio, Eventos, Quem Somos, Fazer parte
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default IndexPage
