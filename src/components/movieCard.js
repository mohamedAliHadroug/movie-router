import React from 'react'
import {Card} from 'react-bootstrap'
import './movieCard.css'
import StarRatingComponent from 'react-star-rating-component'


const MovieCard=({title, posterUrl, description, rate} ) =>{

    return(
        <div className='movieCard'>
             <Card style={{ width: '18rem', height:'600px' }}>
             <StarRatingComponent name="rate1" starCount={5} value={rate}  className='stars'/>
                    <Card.Img style={{height: '300px'}} variant="top" src={posterUrl} />
                    <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            {description}
                            </Card.Text>
                     </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard