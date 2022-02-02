import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <section className="whole-frame-container" >
            <Navbar/>
                { children }
            <Footer/>
        </section>
     );
}
 
export default Layout;