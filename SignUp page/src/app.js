import { Outlet } from "react-router-dom";
import Header from "./container/Header";
import Footer from "./container/Footer";

const App = () => {
    return (
        <>
            <Header />
            <div style={{ minHeight: 500 }}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
};

export default App;