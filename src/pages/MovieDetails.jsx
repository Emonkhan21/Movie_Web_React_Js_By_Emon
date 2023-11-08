import { useParams } from 'react-router-dom';

import Layout from "../Layout/Layout"
import { useState } from 'react';
import { useEffect } from 'react';
import { client } from '../lib/sanity';
import { PortableText } from '@portabletext/react';
import ReactPlayer from 'react-player'
const MovieDetails = () => {

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState()

    const { cast, category, desc, imageUrl, releaseDate, trailerUrl, name } = movie

    console.log(movie)

    const { id } = useParams()

    const query = `*[_type=="movies" && _id=="${id}"]{_id, name, 
        "imageUrl": poster.asset->url, cast, category->{name}, desc, releaseDate, trailerUrl }`

    const getMovie = async () => {
        setLoading(true)
        const movie = await client.fetch(query)
        setLoading(false)
        return setMovie(movie[0])
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <Layout title={"Movie Details"}>

            <div className="card lg:card-side bg-base-100 shadow-xl p-4 flex">
                <figure><img className='w-[80%]' src={imageUrl} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <div className='w-[76%]'>
                            <PortableText
                                value={desc}
                            />
                        </div>
                    </div>
                    <button className="btn w-52" onClick={() => document.getElementById('my_modal_1').showModal()}>Trailer</button>

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <ReactPlayer width={460} playIcon url={trailerUrl} />
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                </div>
            </div>
        </Layout>
    )
}

export default MovieDetails