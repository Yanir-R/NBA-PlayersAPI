import React from 'react'
import { GeneralList } from './components/generalList/generalList'

import './App.css';
interface AppProps {

}

export const App: React.FC<AppProps> = () => {
  return (
    <div >
      <div >
        <GeneralList />
      </div>
    </div>
  );
}

