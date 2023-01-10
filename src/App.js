import HelloWorld from "./components/01-hello-world/hello-world";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Style4 from "./components/04-styles/style4";
import Clock1 from "./components/05-clock1/clock1";
import Greetings from "./components/06-props-1/greeting";
import Products from "./components/07-props-2/products";
import Clock2 from "./components/08-clock2/clock2";
import Gallery from "./components/09-image/gallery";
import Image from "./components/09-image/image";
import ProfileCard from "./components/10-profile-card/profile-card";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import Icon from "./components/12-icons/icon";
import Events from "./components/13--events/events";
import Shop from "./components/14-products/shop";
import Content from "./components/replit/1-container/r-content";
import Header from "./components/replit/1-container/r-header";
import SideBar from "./components/replit/1-container/r-sideBar";

const App = () => {
  return (
    <div>
      {/*       
      <HelloWorld />
      <Jsx1 />
      <Jsx2 /> 
      <Jsx3 />
      <Jsx4 />  
      <Jsx5 />
      <Jsx6 />
      <Style1 />
      <Style2 />
      <Style3 />
      <Style4 />
      <Clock1 />
      <Greetings/>
      <Products />
      <Clock2 textColor="red" bgColor="yellow"/>
      */}

      {/*     <Header />
      <SideBar />
      <Content /> 
      <Image /> 
      <Gallery />
      
      <ProfileCard
        avatar="profile.jpg"
        name="Ali Gel"
        location="Turkey, Istanbul"
        shot="3"
        followers="23432"
        following="234"
      />
      
      <BootstrapStatic />
      <BootstrapDynamic/>
      <Icon/>
      <Events />
      */}
      <Shop />
    </div>
  );
};
export default App;
