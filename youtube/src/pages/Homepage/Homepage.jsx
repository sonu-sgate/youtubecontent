import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Homepage() {
    const [items,setItems]=useState([])
    useEffect(()=>{
        getvideos()
    },[])
    const getvideos=()=>{
      axios.get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=10&maxResults=5&key=AIzaSyBLoKbMB1usbrfYuArKOoBRIQqGuWASHo8"
      ).then((res)=>{
setItems(res.data.items)
      }).catch((err)=>{
        console.log(err)
      });  
    }
    console.log(items)
  return (
    <div>
      {items.length >= 1
        ? items.map((el, index) => (
            <div>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${el.id}`}
                allowFullScreen
        
              />
            </div>
          ))
        : "no data found"}
    </div>
  );
}
