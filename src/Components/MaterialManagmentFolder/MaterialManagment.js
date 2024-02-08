import React, { useState, useEffect } from 'react'
import "./MaterialManagment.css"

import MaterialLibrary from './MaterialLibrary';
import UploadMaterial from './UploadMaterial';


function MaterialManagment() {
// <<<<<<< HEAD
  const [data, setData] = useState([{
        file: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
        name: "Lenova i5",
        group: "Lenova",
        size: "16:4"
    }, {
        file: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
        name: "Lenova i3",
        group: "Lenova",
        size: "16:9"
    }, {
        file: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
        name: "Lenova i7",
        group: "Lenova",
        size: "16:0"
    }, {
        file: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
        name: "MacBook air i5",
        group: "apple",
        size: "16:0"
    }, {
        file: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
        name: "MacBook air M1",
        group: "apple",
        size: "12:6"
    }, {
        file: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
        name: "MacBook air M2",
        group: "apple",
        size: "16:9"
    }, {
        file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
        name: "Samsung S1 ",
        group: "samsung",
        size: "10:0"
    }, {
        file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
        name: "Samsung S2",
        group: "samsung",
        size: "10:2"
    }, {
        file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
        name: "Samsung S3",
        group: "samsung",
        size: "4:9"
    }, {
        file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
        name: "Samsung S4",
        group: "samsung",
        size: "12:0"
    }, {
        file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
        name: "Samsung S5",
        group: "samsung",
        size: "16:9"
    }, {
        file: "https://imgs.search.brave.com/Q-HWKQSSUFIvuXTOHYW3Jh8phPsxk9x30wcp_Y-WYRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3MDY0MDcxNDIt/Y2FmZTBjOTFlNWE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJt/OXJhV0Y4Wlc1OE1I/eDhNSHg4ZkRBPQ",
        name: "Nokia A1",
        group: "nokia",
        size: "15:9"
    }, {
        file: "https://imgs.search.brave.com/Q-HWKQSSUFIvuXTOHYW3Jh8phPsxk9x30wcp_Y-WYRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3MDY0MDcxNDIt/Y2FmZTBjOTFlNWE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJt/OXJhV0Y4Wlc1OE1I/eDhNSHg4ZkRBPQ",
        name: "Nokia A2",
        group: "nokia",
        size: "12:9"
    }, {
        file: "https://imgs.search.brave.com/Q-HWKQSSUFIvuXTOHYW3Jh8phPsxk9x30wcp_Y-WYRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3MDY0MDcxNDIt/Y2FmZTBjOTFlNWE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJt/OXJhV0Y4Wlc1OE1I/eDhNSHg4ZkRBPQ",
        name: "Nokia A1",
        group: "nokia",
        size: "16:0"
    }, {
        file: "https://imgs.search.brave.com/NsrfMBC2jrDnyLwTe4InCbSa6hM5IgvCR-Lon3Nm13g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL1hpYW9taS1N/aS1Ob3RlYm9vay1Q/cm8tMTUtNzQweDQ3/Ny5qcGc",
        name: "Mi i5",
        group: "mi",
        size: "16:9"
    }, {
        file: "https://imgs.search.brave.com/NsrfMBC2jrDnyLwTe4InCbSa6hM5IgvCR-Lon3Nm13g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL1hpYW9taS1N/aS1Ob3RlYm9vay1Q/cm8tMTUtNzQweDQ3/Ny5qcGc",
        name: "Mi i3",
        group: "mi",
        size: "14.5"
    }, {
        file: "https://imgs.search.brave.com/NsrfMBC2jrDnyLwTe4InCbSa6hM5IgvCR-Lon3Nm13g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL1hpYW9taS1N/aS1Ob3RlYm9vay1Q/cm8tMTUtNzQweDQ3/Ny5qcGc",
        name: "mi ultra",
        group: "mi",
        size: "18:0"
    }, {
        file: "https://imgs.search.brave.com/BjP66chO1Y-yfdkupsFJRN71YfNg9pm_GlQLdwdgWS0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3NX/VWd0aU05bXA4UU5B/YWRpOGFtd1otNDgw/LTgwLmpwZw",
        name: "Reame 7",
        group: "realme",
        size: "10:0"
    }, {
        file: "https://imgs.search.brave.com/BjP66chO1Y-yfdkupsFJRN71YfNg9pm_GlQLdwdgWS0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3NX/VWd0aU05bXA4UU5B/YWRpOGFtd1otNDgw/LTgwLmpwZw",
        name: "Realme 5",
        group: "realme",
        size: "12:0"
    }
    ])
  const [swap, setSwap]=useState(true);
// =======
//   const [swap, setSwap] = useState(true);
// >>>>>>> 790dee5c0b629f4d47ec39a49c8d5a99b492be38

  const handleForLibrary = () => {
    setSwap(true);
  }
  const handleForUpload = () => {
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

{/* <<<<<<< HEAD */}

      {swap?<MaterialLibrary initData={data}/>:<UploadMaterial setData={setData}/>}
{/* // ======= */}
{/* //       {swap ? <MaterialLibrary /> : <UploadMaterial />} */}
{/* // >>>>>>> 790dee5c0b629f4d47ec39a49c8d5a99b492be38 */}
      {/* <MaterialLibrary/> */}

    </div>
  )
}

export default MaterialManagment