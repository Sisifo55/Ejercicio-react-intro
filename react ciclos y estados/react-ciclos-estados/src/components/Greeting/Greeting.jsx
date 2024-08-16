import React, { useState, useEffect } from "react";

function Greeting({ name }) {
  const [greetingName, setGreetingName] = useState(name);

  useEffect(() => {
    // Cambia el nombre a "Alfonsina" después de 3 segundos
    const timer = setTimeout(() => {
      setGreetingName("Alfonsina");
    }, 3000);

    // Limpieza del timer cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return <p>Hola {greetingName}</p>;
}

export default Greeting;
