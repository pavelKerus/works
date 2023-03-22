import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Card } from '../../components/Card';
import { AppState } from '../../reduxTools/store';
import styles from './index.module.scss';
import React, { useEffect } from 'react';
import { asyncLoadMoviesAction } from '../../reduxTools/movies/actions';

export const Home = () => {
  const movies = useSelector((state:AppState) => state.movies.docs)
  const dispatch = useDispatch()
  const limit = 10

  useEffect(() => dispatch(asyncLoadMoviesAction(limit)),[limit])
  
  return(
    <>
      <div className={styles["cards-grid"]}>
        {movies.map(movie => 
          <Card 
            id={movie.id} 
            poster={movie.poster} 
            rating={movie.rating} 
            name={movie.name} 
            genres={movie.genres}
          />)}
      </div>
    </>
  )
}