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
import { MovieItem } from '../../types/MovieItem';

export const Home = () => {
  const movies = useSelector((state:AppState) => state.movies.docs)
  const dispatch = useDispatch()
  const screenSize = useResize()
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(false)
  let limit = 0

  if (screenSize.isScreen380){
    limit=10
  } else if (screenSize.isScreen680){
    limit=10
  } else if (screenSize.isScreen720){
    limit=9
  } else if (screenSize.isScreen850){
    limit=9
  } else if (screenSize.isScreen1000){
    limit=8
  } else if (screenSize.isScreen1150){
    limit=8
  } else if (screenSize.isScreen1400){
    limit=10
  } else if (screenSize.isScreen1600){
    limit=12
  } else if (screenSize.isScreen2000){
    limit=12
  } else if (screenSize.isScreen2400){
    limit=15
  } else if (screenSize.isScreen2800){
    limit=18
  } else if (screenSize.isScreen3150){
    limit=21
  } else if (screenSize.isScreen3400) {
    limit=24
  } 
  else{
    limit=27
  }

  useEffect(() => {
    dispatch(asyncLoadMoviesAction(limit,page))
    setLoading(false)
  },[limit,page])
  
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
      <ButtonShowMore loading={loading} onClick={() => { setLoading(true)
        setPage(page+1)} 
      }/>
    </div>
  )
}