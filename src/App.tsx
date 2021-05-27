import React from 'react'
import { GeneralList } from './components/generalList/generalList'
import { RightSideList } from './components/rightSideList'
import './App.css';
interface AppProps {

}

export const App: React.FC<AppProps> = () => {
  return (
    <div className="flex-container">
      <div className="flex-child">
        <GeneralList />
      </div>
      <div className="flex-child">
        <RightSideList />
      </div>
    </div>
  );
}

