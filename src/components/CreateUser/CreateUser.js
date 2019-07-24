import React from "react"
import Input from "../Input"
import Button from "./../Button"
import { RegisterUser } from "../../services/database"
import { CreateUserFN } from "../../services/auth"

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
  senha: "",
  confirmarSenha: "",
}

const CreateUser = props => {
  const [user, setUser] = React.useState(stateDefault)
  const onChangeHandler = ({ target: { value, name } }) =>
    setUser({
      ...user,
      [name]: value,
    })

  const onSubmitHandler = async e => {
    e.preventDefault()
    try {
      const { email, senha, confirmarSenha, ...otherProps } = user
      const { uid } = await CreateUserFN(email, senha)
      console.log(uid)
      await RegisterUser({ ...otherProps, email })
      setUser(stateDefault)
    } catch (error) {}
  }
  return (
    <div className="">
      <div className="d-flex d-flex-space-between d-flex-align-center">
        <div>
          <h3 className="fs-custom tt-uppercase fs-2 m-top-40 color-dark">
            Criar Conta
          </h3>
          <p className="fs-custom m-bottom-10 color-gray m-bottom-40">
            Lorem Ipson
          </p>
        </div>
        <div>
          <button className="btn">Fechar</button>
        </div>
      </div>
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
          <Input
            type="password"
            label="Senha"
            name="senha"
            value={user.senha}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Input
            type="password"
            label="Confirmar Senha"
            name="confirmarSenha"
            value={user.confirmarSenha}
            onChange={onChangeHandler}
          />
        </div>
        <div className="sm-6-12">
          <Button onClick={onSubmitHandler}>Enviar</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser
