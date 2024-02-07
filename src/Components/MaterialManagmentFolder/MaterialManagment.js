import React, { useState } from 'react'
import "./MaterialManagment.css"

import MaterialLibrary from './MaterialLibrary';
import UploadMaterial from './UploadMaterial';


function MaterialManagment() {
  const [swap, setSwap] = useState(true);

  const handleForLibrary = () => {
    setSwap(true);
  }
  const handleForUpload = () => {
    setSwap(false);
  }


  return (
    <div className='container'>
      <div className='firstContainer'>
        <p className='row1' onClick={handleForLibrary}> <span>Material Library</span></p>
        <p className='row1' onClick={handleForUpload}><span>Upload Material</span></p>
      </div>

      {swap ? <MaterialLibrary /> : <UploadMaterial />}
      {/* <MaterialLibrary/> */}

    </div>
  )
}

export default MaterialManagment