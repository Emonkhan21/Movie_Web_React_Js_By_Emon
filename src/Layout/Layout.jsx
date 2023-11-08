import { Helmet } from "react-helmet"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
const Layout = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <header>
                <Navbar />
            </header>

            <main >
                {children}
            </main>


            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout