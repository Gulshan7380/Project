import React from 'react';
import FeaturedCard from './FeaturedCard';
import './featured.css';
import Heading from '../../common/Heading';

const Featured = () => {
  return (
    <>
        <section className='featured background'>
            <div className='container'>
                <Heading title='Featured Propety Types' 
                subtitle='Find All Type of Property.'/>
                <FeaturedCard/>
            </div>
            
        </section>
    </>
  )
}

export default Featured