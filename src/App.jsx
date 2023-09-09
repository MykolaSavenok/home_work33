import React from 'react';
import Counter from './Counter.jsx';
import * as wrapperStyle from './App.module.scss'

const App = () => {
   return (
      <div className={wrapperStyle.wrapper}>
         <Counter initialValue={0} />
      </div>
   );
};

export default App;