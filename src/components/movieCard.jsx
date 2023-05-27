import React from 'react';
import {Card, Col} from 'antd'

const {Meta} = Card

const MovieCard = (
  {
    Title,
    Poster,
    Year,
    Type,
  }
) => {
  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          hoverable
          cover={<img src={Poster} alt='Nothing'></img>}>
            <Meta title={Title} description={`${Type} ${Year}`} />
        </Card>
      </Col>
    </>
  );
}

export default MovieCard;