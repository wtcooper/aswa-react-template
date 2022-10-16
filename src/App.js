import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('default');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/test_fnx`)).json();
      setData(text);
      console.log("FA text: ", text);
    })();
  });

  return (
    <>
      <div>Test App</div>
      <div>{data}</div>
    </>
  );
}

export default App;