import React, { useState, useEffect } from 'react'
import "./MaterialManagment.css"

import MaterialLibrary from './MaterialLibrary';
import UploadMaterial from './UploadMaterial';


function MaterialManagment() {
  const [data, setData] = useState([{
    name: "Mountains",
    group: "TV",
    size: "6:9",
    type: "Image",
    date: "2024-02-07",
    submitBy : "Aniket",
},

{
    name: "Rivers",
    group: "TV",
    size: "4:3",
    type: "Image",
    date: "2024-02-07",
    submitBy : "Mukesh",
},

{
    name: "Desert",
    group: "TV",
    size: "16∶9",
    type: "Video",
    date: "2024-02-07",
    submitBy : "Ramesh",
}, 
{
    name: "Mountains",
    group: "TV",
    size: "6:9",
    type: "Image",
    date: "2024-02-07",
    submitBy : "Aniket",
},

{
    name: "Rivers",
    group: "TV",
    size: "4:3",
    type: "Image",
    date: "2024-02-07",
    submitBy : "Mukesh",
},

{
    name: "Desert",
    group: "TV",
    size: "16∶9",
    type: "Video",
    date: "2024-02-07",
    submitBy : "Ramesh",
},
{
    name: "Mountains",
    group: "TV",
    size: "6:9",
    type: "Image",
    date: "2024-02-07",
    submitBy : "Aniket",
},

{
    name: "Rivers",
    group: "TV",
    size: "4:3",
    type: "Image",
    date: "2024-02-07",
    submitBy : "Mukesh",
}])
  const [swap, setSwap]=useState(true);

  const handleForLibrary=()=>{
      setSwap(true);
  }
  const handleForUpload=()=>{
    setSwap(false);
  }

  useEffect(() => {

  }, [data])
  

  return (
    <div className='container'>
      <div className='firstContainer'>
        <p className='row1' onClick={handleForLibrary}> <span>Material Library</span></p>
        <p className='row1' onClick={handleForUpload}><span>Upload Material</span></p>
      </div>

      {swap?<MaterialLibrary data={data}/>:<UploadMaterial setData={setData}/>}
      {/* <MaterialLibrary/> */}
      
    </div>
  )
}

export default MaterialManagment