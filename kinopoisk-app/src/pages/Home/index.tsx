import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Card } from '../../components/Card';
import { AppState } from '../../reduxTools/store';
import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';
import { asyncLoadMoviesAction } from '../../reduxTools/movies/actions';
import { useResize } from '../../components/useResize';
import { array } from '../../components/posts';
import { ButtonShowMore } from '../../components/ButtonShowMore';

export const Home = () => {
  const movies = useSelector((state:AppState) => state.movies.docs)
  const dispatch = useDispatch()
  const screenSize = useResize()
  const [limit,setLimit] = useState(0)

  if (screenSize.isScreen380){
    setLimit(10)
  } else if (screenSize.isScreen680){
    setLimit(10)
  } else if (screenSize.isScreen720){
    setLimit(9)
  } else if (screenSize.isScreen850){
    setLimit(9)
  } else if (screenSize.isScreen1000){
    setLimit(8)
  } else if (screenSize.isScreen1150){
    setLimit(8)
  } else if (screenSize.isScreen1400){
    setLimit(10)
  } else if (screenSize.isScreen1600){
    setLimit(12)
  } else if (screenSize.isScreen2000){
    setLimit(12)
  } else if (screenSize.isScreen2400){
    setLimit(15)
  } else if (screenSize.isScreen2800){
    setLimit(18)
  } else if (screenSize.isScreen3150){
    setLimit(21)
  } else if (screenSize.isScreen3400) {
    setLimit(24)
  } 
  else{
    setLimit(27)
  }

  useEffect(() => dispatch(asyncLoadMoviesAction(limit)),[limit])
  
  return(
    <div className={styles.home}>
      <div className={styles["cards-grid"]}>
        {movies.map(movie => 
          <Card 
            movie={movie}
            id={movie.id} 
            poster={movie.poster} 
            rating={movie.rating} 
            name={movie.name} 
            genres={movie.genres}
          />)}
      </div>
      <ButtonShowMore loading={true} onClick={() => setLimit(limit+limit)}/>
    </div>
  )
}