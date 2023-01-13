import HomeTop from './HomeTop';
import HomeBottom from './HomeBottom';
import Navbar from '../../Components/Navbar';


export function Home() {
  return (
    <div>
          <Navbar />
          <HomeTop/>
          <HomeBottom/>
    </div>
  );

}



export default Home;
