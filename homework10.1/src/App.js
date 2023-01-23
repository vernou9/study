import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    
    return () => {
      clearTimeout(count);
      console.log("ComponentDidmount")
      };
        // Добавить очистку таймера
        // Добавить console.log аналогичного метода!
  });

  // Без параметров
  useEffect(() => {
    
    console.log("ComponenetDidUpdate")
    // выполнится на каждый рендер
    // Добавить console.log аналогичного метода!
  });

 // Пустой массив
 useEffect(() => {
  setInterval(()=> setCount(1),1000)
  console.log("will umount")
  // Выполнится только на первый рендер
  // Добавить console.log аналогичного метода!
}, []);



  return (
  <>
  <h1>I've rendered {count} times!</h1>;
  
  </>
  )
}
export default Timer;
