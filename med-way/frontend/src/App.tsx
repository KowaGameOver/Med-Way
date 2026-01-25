import './App.css'
import About from './components/about/About';
import Doctors from './components/doctors/Doctors';
import Info from './components/info/Info';
import Slider from './components/slider/Slider';
import Layout from './layout/Layout';

function App() {

  return (
    <Layout>
      <Slider/>
      <Info/>
      <About/>
      <Doctors/>
    </Layout>
  )
}

export default App;