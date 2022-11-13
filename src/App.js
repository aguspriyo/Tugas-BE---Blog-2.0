import './App.css';
import BackEnd from './be';
import FrontEnd from './fe';

function App() {
  return (
    <>
    <p>Hallo World</p>
    {/* <FrontEnd/> */}
    <FrontEnd name = "Agus Cuiy" warna = "Merah"/>
    <FrontEnd name = "Agus Seafudin" warna = "Kuning"/>
    <BackEnd name = "Asep Rangga"/>
    </>
  );
}

export default App;
