import HomeTop from './HomeTop';
import HomeBottom from './HomeBottom';
import Navbar from '../../Components/Navbar';
import Contents from "./Home.json";
import { useEffect, useState } from "react";


export function Home() {

  const [tableData] = useState(Contents);
  
  return (
    <div>
          <Navbar />
          <HomeTop/>
          <HomeBottom/>
    </div>
  );

}



export default Home;
