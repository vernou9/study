import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
        clearTimeout(count);
        console.log("таймер остановлен")
      };
  });

  // Без параметров
  useEffect(() => {
    // выполнится на каждый рендер

    // Добавить console.log аналогичного метода!
  });

 // Пустой массив
 useEffect(() => {
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
