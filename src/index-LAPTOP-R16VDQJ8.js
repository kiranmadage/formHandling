import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {Button} from '../src/Butten/Butten'
import {Increment} from '../src/Butten/Incriment'
import {Butterfly} from "../src/Practice/Homework"
import {Evennum} from '../src/Practice/Table'
import {Home} from './UseStat/UseEffect/UseStat'
import {Dmart} from '../src/DMart/DMart'
import { About } from './View/WeaderCard/WeaderCard'

import { Mcard } from './View/WeaderCard/Mcard/Mcard';
import { Basic } from './useEffect/useEffect';
import { User } from './useEffect/UseEffect2';
import { Form } from './Form handaling/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     {/* <Increment/> */}
     {/* <Button/> */}
     {/* <Evennum/> <br></br> */}
     {/* <Butterfly/> */}
     {/* <Home/> */}
      {/* <Dmart/> */}
      {/* <About/>/ */}
      {/* <Mcard/> */}

      <Basic/>
      {/* <User/> */}
{/* <Form/> */}

    </>
);
