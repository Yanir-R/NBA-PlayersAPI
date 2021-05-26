import React from 'react'
import { LeftSideList } from './components/leftSideList'
import { RightSideList } from './components/rightSideList'
import './App.css';
interface AppProps {

}

export const App: React.FC<AppProps> = () => {
  return (
    <div className="flex-container">
      <div className="flex-child">
        <LeftSideList />
      </div>
      <div className="flex-child">
        <RightSideList />
      </div>
    </div>
  );
}

