import React, { useEffect, useState} from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

  return (
    <div>
        <h3>{ category }</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        

        <div className='card-grid'>
            {
                images.map( ( image )=> (
                    //Properties which I send to GifItem in order to be used from that component
                    <GifItem 
                        key={ image.id } 
                        //title={ image.title }
                        //url={ image.url } 
                        // instead of specify the props, I can spread it and all the images properties can be used from GifItem component
                        { ...image }  
                    />
            ))   
            }   
        </div>
    </div>
  )
};
