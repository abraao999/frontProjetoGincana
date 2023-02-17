import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Painel Principal',
    path: '/',
    icon: <FaIcons.FaCalendarAlt />,
  },

  {
    title: 'Configurações',
    path: '#',
    icon: <AiIcons.AiFillSetting />,
    iconClosed: <RiIcons.RiArrowDownCircleLine />,
    iconOpened: <RiIcons.RiArrowDownCircleLine />,

    subNav: [
      {
        title: 'Configuração de Quartos',
        path: '/tipoQuarto',
        icon: <AiIcons.AiFillSetting />,
      },
      {
        title: 'Consumo',
        path: '/consumo',
        icon: <FaIcons.FaCartPlus />,
      },
    ],
  },
  {
    title: 'Perguntas',
    path: '#',
    icon: <AiIcons.AiFillSetting />,
    iconClosed: <RiIcons.RiArrowDownCircleLine />,
    iconOpened: <RiIcons.RiArrowDownCircleLine />,

    subNav: [
      {
        title: 'Nova Pergunta',
        path: '/cadPerguntas',
        icon: <AiIcons.AiFillSetting />,
      },
      {
        title: 'Consumo',
        path: '/consumo',
        icon: <FaIcons.FaCartPlus />,
      },
    ],
  },

  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
