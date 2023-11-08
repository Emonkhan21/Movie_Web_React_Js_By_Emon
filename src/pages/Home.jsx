
import Layout from "../Layout/Layout"
import MovieSlider from "../component/MovieSlider"
import ThreeDSlider from "../component/ThreeDSlider"
import Title from "../component/Title"
import { useMovieContext } from "../context/allData"

const Home = () => {
   

    return (
        <Layout title="Home">
            <section>
                <MovieSlider />
            </section>
            <section>
                <Title sectionTitle="Choose Category" />
            </section>

            <section className="my-5">
                <ThreeDSlider />
            </section>
        </Layout>
    )
}

export default Home