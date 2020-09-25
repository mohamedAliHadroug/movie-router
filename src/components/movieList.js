import React,{Fragment} from 'react'
import MovieCard from './movieCard'
import StarRatingComponent from 'react-star-rating-component'
import {Link} from 'react-router-dom'



  const MovieList = ({movies} )=>{

    return (
        <Fragment>
            <div style={{display:"inline-flex"}} >
            <StarRatingComponent name="rate1" starCount={5} value={5}  className='stars'/>
            <h1 style={{color :'#473531', margin:'10px'}}> Box Office </h1>
            <StarRatingComponent name="rate1" starCount={5} value={5}  className='stars'/>
            </div>
            <div className="row">
            
            {movies.map((MovieInfos,index)=>{
                return (
                <Link to={`/description/${MovieInfos.description}/${MovieInfos.video}`} style={{textDecoration : "none", color :'#473531'}}>
                <MovieCard key={index} title={MovieInfos.title} posterUrl={MovieInfos.posterUrl} description={MovieInfos.description} rate={MovieInfos.rate} />
                </Link>)
            })}
            </div>
        </Fragment>
    )
  }

  export default MovieList
