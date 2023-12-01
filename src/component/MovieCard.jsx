
import { Link } from "react-router-dom"

const MovieCard = ({ movieInfo }) => {
    const { _id, imageUrl, Name } = movieInfo

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/moviesInfo/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard