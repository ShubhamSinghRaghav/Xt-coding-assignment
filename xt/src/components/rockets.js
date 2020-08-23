import React from 'react'
import Spinner from './spinner';

const rockets = ({objs,loading}) => {
        let img_save= null;
        if(loading){
            return <Spinner/>
        }
        else{
                return (
                    <div className="container-2">
                        {objs && (objs.map(obj=>( 
                            <div className="card" key={obj.flight_number+obj.launch_year}>
                                <img src={img_save = obj.links.mission_patch?obj.links.mission_patch:obj.links.flickr_images[0]} 
                                alt='wait...'/>
                                <p style={{
                                    color:'blue',
                                    fontSize:'20px',
                                    fontWeight:'bolder',
                                    textAlign:'justify'
                                
                                }} 
                                >{obj.mission_name} # {obj.flight_number}</p>
                                Mission Ids
                                    <ul>
                                        { obj.mission_id.length>0? obj.mission_id.map(e=>(
                                            <li style={{
                                                color:'blue'
                                            }}>{e}</li>
                                        )) : (<li
                                            style={{
                                                color:'blue'
                                            }}>mission_ids</li>)
                                    }
                                    </ul>
                                <p>Launch Year : <span style={{color:'blue'}}>{obj.launch_year}</span> </p>
                                <p>Successfull Launch :<span style={{color:'blue'}}> {String(obj.launch_success)}</span></p>
                            </div>
                        )
                        
                        ))}
                    </div>
                )
        }
}



export default rockets;