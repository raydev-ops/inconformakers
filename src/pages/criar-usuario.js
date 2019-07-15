import React from "react"
import Layout from "../components/PageWrapper"
import Input from "../components/Input"
import Button from "./../components/Button"
import { RegisterUser } from "../services/database"

const stateDefault = {
  name: "",
  email: "",
  nascimento: "",
  celular: "",
  proposito: "",
  cidade: "",
  cargo: "",
  empresa: "",
  instagram: "",
  linkedin: "",
  talentos: "",
}

const IndexPage = props => {
  const [user, setUser] = React.useState(stateDefault)
  const onChangeHandler = ({ target: { value, name } }) =>
    setUser({
      ...user,
      [name]: value,
    })

  const onSubmitHandler = async e => {
    e.preventDefault()
    try {
      await RegisterUser(user)
      setUser(stateDefault)
    } catch (error) {}
  }
  return (
    <Layout>
      <form className="grid">
        <div className="sm-6-12">
          <Input
            label="Nome"
            name="name"
            value={user.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Email"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Data de Nascimento"
            name="nascimento"
            value={user.nascimento}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Celular"
            name="celular"
            value={user.celular}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Propósito"
            name="proposito"
            value={user.proposito}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Cidade"
            name="cidade"
            value={user.cidade}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Cargo"
            name="cargo"
            value={user.cargo}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Empresa"
            name="empresa"
            value={user.empresa}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Instagram"
            name="instagram"
            value={user.instagram}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="LinkedIn"
            name="linkedin"
            value={user.linkedin}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            label="Talentos"
            name="talentos"
            value={user.talentos}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Button onClick={onSubmitHandler}>Enviar</Button>
        </div>
      </form>
      <div />
    </Layout>
  )
}

export default IndexPage
