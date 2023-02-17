import React from 'react';
import { Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';
import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';
import EditPass from '../pages/AbaSecretaria/EditPass';

import Configuracoes from '../pages/AbaConfiguracoes/Configuracoes';
import Home from '../pages/Home';
import CadCliente from '../pages/CadCliente';

import CadPerguntas from '../pages/CadPergunta';
import PainelPergunta from '../pages/PainelPergunta';
import PainelPrincipal from '../pages/PainelPrincipal';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={PainelPrincipal} isClosed={false} />
      <MyRoute path="/home" component={Home} isClosed={false} />

      <MyRoute
        path="/cadCliente/:id/:titulo"
        component={CadCliente}
        isClosed={false}
      />
      <MyRoute path="/cadCliente" component={CadCliente} isClosed={false} />
      <MyRoute
        path="/painelPergunta/:id/:titulo"
        component={PainelPergunta}
        isClosed={false}
      />
      <MyRoute
        path="/painelPergunta"
        component={PainelPergunta}
        isClosed={false}
      />

      <MyRoute path="/configuracoes/" component={Configuracoes} isClosed />

      <MyRoute path="/login/" component={Login} isClosed={false} />
      <MyRoute path="/register/" component={Register} isClosed={false} />
      <MyRoute
        path="/cadPerguntas/"
        component={CadPerguntas}
        isClosed={false}
      />

      <MyRoute
        path="/editPass/"
        component={EditPass}
        usuarioPermitido={[{ id: 1 }, { id: 2 }, { id: 4 }]}
        isClosed={false}
      />

      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
