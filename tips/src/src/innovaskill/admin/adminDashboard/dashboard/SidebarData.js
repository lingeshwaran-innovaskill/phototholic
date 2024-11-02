import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/admin-dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Courses',
    path: '/course',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Navigation',
    path: '/navigation',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Footer',
    path: '/footer',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
  // {
  //   title: 'Messages',
  //   path: '/',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
