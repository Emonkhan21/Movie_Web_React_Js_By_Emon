import Layout from "../Layout/Layout"
import Loading from "../component/Loading"
import MovieCard from "../component/MovieCard"
import { useMovieContext } from "../context/allData"

const Movies = () => {
    const { movies, loading, category } = useMovieContext()
    console.log(movies)

    return (
        <Layout title={"Movies"}>
            <section className="flex justify-center my-8 gap-3">
                <input type="search" placeholder="Search Movies" className="input input-bordered w-[50%] " />
                <select className="select select-bordered ">
                    <option disabled selected>Choose Category</option>
                    {
                        category.map(cat => <option key={cat._id}>{cat.name}</option>)
                    }
                </select>
            </section>
            <section >
                <div className="flex flex-wrap gap-4 my-4 justify-center">

                    {
                        loading && <Loading />
                    }

                    {
                        movies.map(movie => <MovieCard key={movie._id} movieInfo={movie} />)
                    }
                </div>

                <div className="container mx-auto flex justify-between my-4">
                    <button className="btn btn-primary">Previous</button>
                    <button className="btn btn-neutral">Next</button>
                </div>
            </section>
        </Layout>
    )
}

export default Movies