import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default function Login(props) {
  const dispath = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (login.length < 0 || password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha invalida');
    }
    if (formErrors) return;
    const response = await axios.post('/login/login', {
      email: login,
      senha: password,
    });
    console.log(response.data);
    dispath(actions.loginRequest({ email: login, senha: password, prevPath }));
    // localStorage.setItem('user', JSON.stringify(response.data));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Login</h1>
      <Row>
        <Col md={6}>
          <Form>
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Digite o seu e-mail"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite o sua senha"
            />
            <button type="submit" onClick={handleSubmit}>
              Entrar
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
