import EUfeacture from "../../components/feacture_EU/feactures_EU_1/EUfeacture";
import EUfeacture2 from "../../components/feacture_EU/feactures_EU_2/EUfeacture_2";
import EUfeacture3 from "../../components/feacture_EU/feactures_EU_3/EUfeacture_3";
import EUfeacture4 from "../../components/feacture_EU/feactures_EU_4/EUfeacture_4";
import EUfeacture5 from "../../components/feacture_EU/feactures_EU_5/EUfeacture_5";
import EUfeacture6 from "../../components/feacture_EU/feactures_EU_6/EUfeacture_6";
import EUfeacture7 from "../../components/feacture_EU/feactures_EU_7/EUfeacture_7";
import EUfeacture8 from "../../components/feacture_EU/feactures_EU_8/EUfeacture_8";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./event_upcoming.css";
import React from "react";


const Eventupcoming = () => {
  return (  
    <div>
        
        <Navbar />
        <Header />
        <Banner />
        <div className="coming_Container">
          <div className="coming_content">
          <div className="coming_Title">
          <button className="eventButton1"><b>Upcoming Events</b></button>
          <button className="eventButton2"><b>Past Events</b></button>
        </div>
            <div className="coming_topic">
                <h1>Beach Camping</h1>
            </div>
        <EUfeacture/>
            <div className="coming_topic">
                <h1>RiverSide Camping</h1>
            </div>
        <EUfeacture2/>
            
            <div className="coming_topic">
                <h1>RiverSide Camping</h1>
            </div>
        <EUfeacture3/>
        <div className="coming_topic">
                <h1>RiverSide Camping</h1>
            </div>
        <EUfeacture4/>

        <div className="coming_topic">
                <h1>RiverSide Camping</h1>
            </div>
        <EUfeacture5/>

        <div className="coming_topic">
                <h1>RiverSide Camping</h1>
            </div>
        <EUfeacture6/>

        <div className="coming_topic">
                <h1>RiverSide Camping</h1>
            </div>
        <EUfeacture7/>

        <div className="coming_topic">
                <h1>RiverSide Camping</h1>
            </div>
        <EUfeacture8/>
          </div>
          <Footer />
        </div>
        
    </div>
  );
};

export default Eventupcoming;