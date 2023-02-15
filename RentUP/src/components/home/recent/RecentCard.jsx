import { color } from '@mui/system';
import React from 'react';
import { list } from '../../data/Data';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const RecentCard = () => {
  return (
    <>
        <div className='content grid3 mtop'>
            {list.map((val,index) => {
              const {cover, category, location, name, price, type} = val;
              return (
                <div className='box shadow' key={index}>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <div className='text'>
                    <div className='category flex'>
                        <span style={{background: category == "For Sale" ? 
                        "#25b652361a" : "#ff98001a", color: category == "For Sale" ?
                         "#25b579" : "#ff9800" }}>{category}</span>
                         <i><FavoriteIcon fontSize="small"/></i>
                    </div>
                    <h4>{name}</h4>
                      <p>
                        <i><LocationOnIcon/></i>{location}
                      </p>
                  </div>  
                  <div className='button flex'>
                    <div>
                        <button className='btn2'>{price}</button>
                        <label htmlFor="">/sqft</label>
                    </div>
                    <span>{type}</span>
                  </div>
                </div>
                )
            })}
        </div>
    </>
  )
}

export default RecentCard;