import React, { useState, useEffect } from 'react';
import NavBar from 'common/navbar/navbar';

function App() {
  // const [data, setData] = useState('default');
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    try {

        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        
        if(clientPrincipal){
          setUser(clientPrincipal);
          userHasAuthenticated(true);
          console.log(`clientPrincipal = ${JSON.stringify(clientPrincipal)}`);
        } 
        
    } catch (error) {
        console.error('No profile could be found ' + error?.message?.toString());
    }
};  

  // useEffect(() => {
  //   (async function () {
  //     const { text } = await (await fetch(`/api/test_fnx`)).json();
  //     setData(text);
  //     console.log("FA text: ", text);
  //   })();
  // });

  return (
    <>

      {/* <div>Test API</div>
      <div>{data}</div>
      <div></div> */}

      <NavBar user={user}/>
      <main className="column">
        { isAuthenticated ? 
        <div>
          <div>Successfully logged in</div>
          <div>{user.userDetails}</div>
        </div>
        : 
        <div>Need to Login</div> }
      </main>

      {/* <div>Test Login</div>
      <a href="/.auth/login/github">Login - Github</a>
      <div></div>
      <a href="/.auth/login/aadb2c">Login - AD B2C</a>
      <div></div>
      <a href="/.auth/logout">Log out</a> */}

      
    </>
  );
}

export default App;