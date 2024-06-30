
import React, {useState, useEffect} from 'react'
import { createClient } from 'pexels';
import './InfoApp.css'


const InfoApp = () => {
  const[loading,setLoading] = useState(true)
  const[photor,setPhotor] = useState(null);

  const client = createClient('JEVr30L44x1pr7n5beH7sYyl8Wf1tdV7pKVnOIo1ONfD8zeqXUkDRdAM');
  useEffect(() => {
   
      client.photos.curated({per_page:30}).then((res) => {
console.log(res)
     setPhotor(res.photos)

  }).catch((err)=>console.log(err)).finally(()=>setLoading(false))

  },[])
  return(
    <div className="info">
      {loading?(
        <div className='white-text'>Loading...</div>
      ):(
        <>
        <p>Image Gallery</p>
        {photor&&photor.length>0?(
          <div className='img_con'>
            {photor.map((data) => (
              <div className='imager' key={data.id}>
                <img src={data.src.landscape} alt={data.alt} />
              </div>
            ))}
          </div>
        ):(
          <div className='white-text'>No Photos Found</div>
        )}
        </>
      )}
    </div>
  )
}


export default InfoApp