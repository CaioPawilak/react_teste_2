import { useEffect, useState } from 'react';

import { Button } from './components/Button';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { MovieCard } from './components/MovieCard';


export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar />
      <Content />
    </div>

  )
}