import React from 'react';
import {Col, Layout, Row} from 'antd'
import MovieCard from './movieCard';

const MovieList = (props) => {
  const {movies = []} = props

  return (
    <Layout.Content className='my-10'>
      <Row>
        <Col xs={24} sn={{ span:18, offset:3 }}>
          <Row className='px-10' gutter={[16, 16]}>
            {movies.length ? 
              movies.map((movies) => (
                <MovieCard 
                  key={movies.imdbID}
                  Title={movies.Title}
                  Type={movies.Type}
                  Year={movies.Year}
                  Poster={movies.Poster}
                />
              ))
              :
              <div>Movies not found</div>
            }
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
}

export default MovieList;