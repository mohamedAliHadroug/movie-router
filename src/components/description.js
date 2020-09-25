import React, {Fragment} from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import {Card, Button} from 'react-bootstrap'

const Description = () => {
  const { description, video } = useParams();
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  console.log(video);
  return (

<Fragment>
    <Card style={{ width: '640px', margin:"100px auto" }}>
  <ReactPlayer  url={`https://www.youtube.com/embed/${video}`}   />
  <Card.Body>
    <Card.Title>Movie description</Card.Title>
    <Card.Text>
    {description}
    </Card.Text>
    <Button onClick={handleClick}>GO BACK</Button>
  </Card.Body>
</Card>
</Fragment>
  );
};

export default Description;
