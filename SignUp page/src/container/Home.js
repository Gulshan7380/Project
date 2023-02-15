import { Container, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ImageCard from '../component/ImageCard';
import { getGreeting } from '../utils/greeting';

const Home = () => {
  const [images, setimages] = useState([]);
  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const result = await fetch(url).then((reponse) => {
      return reponse.json();
    });
    if (result) {
      setimages(result);
    }
  };

  const showImage = () => {
    if (!images.length) {
      return (<div>Loading images...</div>);
    }
    return images?.splice(0, 10).map((item) => {
      return (
        <ImageCard item={item} />
      );
    });
  };

  return (
    <>
    <Container maxWidth="sm">
      <div>{getGreeting()}</div>
      <div>
        {showImage()}
      </div>
      <Pagination count={20} variant="outlined" color="secondary" />
    </Container>
    
    </>
  )
}

export default Home;