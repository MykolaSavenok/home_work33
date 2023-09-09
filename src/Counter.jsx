import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import * as buttonStyles from './counter.module.scss'

function Counter() {
   const [count, setCount] = useState(0);
   const [isLoading, setIsLoading] = useState();
   const showClick = () => {
      setIsLoading(true)
      setTimeout(() => {
         setIsLoading(false)
      }, 1000);
   }

   useEffect(() => {
      document.title = `Count: ${count}`;
   }, [count]);

   const increment = () => {
      setCount(count + 1);
   };

   const decrement = () => {
      setCount(count - 1);
   };

   const reset = () => {
      setCount(0)
   }

   return (
      <div className={buttonStyles.counterApp}>
         <Button className={buttonStyles.btnClick} type="primary" onClick={decrement}>-</Button>
         <span>{count}</span>
         <Button className={buttonStyles.btnClick} type="primary" onClick={increment}>+</Button>
         <Button className={buttonStyles.btnClick} loading={isLoading} onClick={() => {
            showClick(); setTimeout(() => {
               reset();
            }, 1000);
         }}>Reset</Button>
      </div>
   );
}

export default Counter;
