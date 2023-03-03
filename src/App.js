import logo from './logo.svg';
import './App.css';
import baseUrl from './apis/baseUrl';

function App() {



  function testAPIS(){
    baseUrl.post("/superAdminLogin",{
      username:"subhath1",
      password:"12345678"   
  })
  .then((res) => { 
      alert(res.data)
      console.log("result : ", res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }

  return (
    <div className="App">
      <h1>TEST</h1>
      <button onClick={testAPIS}>Test API</button>
    </div>
  );
}

export default App;
