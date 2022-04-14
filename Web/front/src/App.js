import axios from 'axios';
function App() {
  const cookie = async () => {
    const response = await axios.get('http://localhost:3000/getCookie', {withCredentials: true});
    const token = response.data.token;
    console.log(token);
  }
  cookie();
  
  return (
    <div className="App">
      <p>FRONT PORT: 4000</p>
    </div>
  );
}
export default App;