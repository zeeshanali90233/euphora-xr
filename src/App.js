import { Layout } from "antd";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import Introduction from "./Components/Introduction";


function App() {
  return (
    <Layout>
        <Header/>
        <Carousel/>    
        <Introduction/>    
    </Layout>
  );
}

export default App;
