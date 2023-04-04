import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyComponent } from './components/myComponents'
import axios from 'axios'

const obj = {
  name: 'maxime',
  lastname: 'maxime',
  age: '19'
}

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('salut')
    axios.get('http://localhost:8080/api/get-profitability-list').then((response) => {
      setData(response.data);
    });
   },[]);

  return (
    <div className="App">
      <MyComponent title="saldfhjgudhguyfrshgfrdut" description="djruigheuvhdsuvhsdufvhsd" user={data} />
    </div>
  )
}

export default App
