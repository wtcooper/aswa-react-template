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

      <div>Test API</div>
      <div>{data}</div>
      <div></div>

      <div>Test Login</div>
      <a href="/.auth/login/github">Login</a>
    </>
  );
}

export default App;