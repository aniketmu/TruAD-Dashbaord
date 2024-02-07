import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import MaterialMCard from './MaterialMCard'

const initialData = [{
    mImage: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
    mName: "Lenova i5",
    mGroup: "Lenova",
    mSize: "16:4"
}, {
    mImage: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
    mName: "Lenova i3",
    mGroup: "Lenova",
    mSize: "16:9"
}, {
    mImage: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
    mName: "Lenova i7",
    mGroup: "Lenova",
    mSize: "16:0"
}, {
    mImage: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
    mName: "MacBook air i5",
    mGroup: "apple",
    mSize: "16:0"
}, {
    mImage: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
    mName: "MacBook air M1",
    mGroup: "apple",
    mSize: "12:6"
}, {
    mImage: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
    mName: "MacBook air M2",
    mGroup: "apple",
    mSize: "16:9"
}, {
    mImage: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    mName: "Samsung S1 ",
    mGroup: "samsung",
    mSize: "10:0"
}, {
    mImage: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    mName: "Samsung S2",
    mGroup: "samsung",
    mSize: "10:2"
}, {
    mImage: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    mName: "Samsung S3",
    mGroup: "samsung",
    mSize: "4:9"
}, {
    mImage: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    mName: "Samsung S4",
    mGroup: "samsung",
    mSize: "12:0"
}, {
    mImage: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    mName: "Samsung S5",
    mGroup: "samsung",
    mSize: "16:9"
}, {
    mImage: "https://imgs.search.brave.com/Q-HWKQSSUFIvuXTOHYW3Jh8phPsxk9x30wcp_Y-WYRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3MDY0MDcxNDIt/Y2FmZTBjOTFlNWE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJt/OXJhV0Y4Wlc1OE1I/eDhNSHg4ZkRBPQ",
    mName: "Nokia A1",
    mGroup: "nokia",
    mSize: "15:9"
}, {
    mImage: "https://imgs.search.brave.com/Q-HWKQSSUFIvuXTOHYW3Jh8phPsxk9x30wcp_Y-WYRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3MDY0MDcxNDIt/Y2FmZTBjOTFlNWE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJt/OXJhV0Y4Wlc1OE1I/eDhNSHg4ZkRBPQ",
    mName: "Nokia A2",
    mGroup: "nokia",
    mSize: "12:9"
}, {
    mImage: "https://imgs.search.brave.com/Q-HWKQSSUFIvuXTOHYW3Jh8phPsxk9x30wcp_Y-WYRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3MDY0MDcxNDIt/Y2FmZTBjOTFlNWE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJt/OXJhV0Y4Wlc1OE1I/eDhNSHg4ZkRBPQ",
    mName: "Nokia A1",
    mGroup: "nokia",
    mSize: "16:0"
}, {
    mImage: "https://imgs.search.brave.com/NsrfMBC2jrDnyLwTe4InCbSa6hM5IgvCR-Lon3Nm13g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL1hpYW9taS1N/aS1Ob3RlYm9vay1Q/cm8tMTUtNzQweDQ3/Ny5qcGc",
    mName: "Mi i5",
    mGroup: "mi",
    mSize: "16:9"
}, {
    mImage: "https://imgs.search.brave.com/NsrfMBC2jrDnyLwTe4InCbSa6hM5IgvCR-Lon3Nm13g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL1hpYW9taS1N/aS1Ob3RlYm9vay1Q/cm8tMTUtNzQweDQ3/Ny5qcGc",
    mName: "Mi i3",
    mGroup: "mi",
    mSize: "14.5"
}, {
    mImage: "https://imgs.search.brave.com/NsrfMBC2jrDnyLwTe4InCbSa6hM5IgvCR-Lon3Nm13g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL1hpYW9taS1N/aS1Ob3RlYm9vay1Q/cm8tMTUtNzQweDQ3/Ny5qcGc",
    mName: "mi ultra",
    mGroup: "mi",
    mSize: "18:0"
}, {
    mImage: "https://imgs.search.brave.com/BjP66chO1Y-yfdkupsFJRN71YfNg9pm_GlQLdwdgWS0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3NX/VWd0aU05bXA4UU5B/YWRpOGFtd1otNDgw/LTgwLmpwZw",
    mName: "Reame 7",
    mGroup: "realme",
    mSize: "10:0"
}, {
    mImage: "https://imgs.search.brave.com/BjP66chO1Y-yfdkupsFJRN71YfNg9pm_GlQLdwdgWS0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3NX/VWd0aU05bXA4UU5B/YWRpOGFtd1otNDgw/LTgwLmpwZw",
    mName: "Realme 5",
    mGroup: "realme",
    mSize: "12:0"
}
]
function MaterialLibrary() {
    const [data, setData] = useState(initialData);
    const [searchData,setSearchData]=useState(initialData);

    const [productName, setproductName] = useState("");

    function handleProductName(event) {

        if(event.target.value.trim()!=""){
            const arr=[...searchData];
            const newArr=arr.filter((ele)=>{
                return ele.mName.toLowerCase().includes(event.target.value.toLowerCase());
            })
            setData(newArr);
        }
        else if(event.target.value.trim()==""){
            // setSearchData(initialData);
            setData(initialData);
        }
        
        setproductName(event.target.value);

        
    }

    function searchByName() {

        
       

    }

    function handleDelete(key) {
        const arr = [...data];
        arr.splice(key, 1);
        setData(arr);
    }


    return (
        <>
            <div className='firstContainer '>
                <p className='row2'>Picture</p>
                <p className='row2'>Video</p>
                <p className='row2'>3D</p>
            </div>
            <div className='inputContainer'>
                <label className='inputLabelContainer'>
                    Material Name:
                    <input type="text" name="name" value={productName} onChange={handleProductName} className='inputBox' placeholder='Enter Material Name' />
                </label>
                <label className='inputLabelContainer'>
                    Material Group :
                    <select name="material-group" id="material-group" className='inputBox'>
                        <option value="">Select Material Group</option>

                    </select>
                    {/* <input type="text" name="name" className='inputBox' placeholder='Enter Material Group' /> */}
                </label>
                <label className='inputLabelContainer'>
                    Material Size:
                    <select name="material-size" id="material-size" className='inputBox'>
                        <option value="">Select Material Size</option>

                    </select>
                    {/* <input type="text" name="name" className='inputBox' placeholder='Enter Material Size' /> */}
                </label>
                {/* <button style={{ width: "100px", borderRadius: "5px" } } onClick={searchByName} >Search</button> */}
            </div>

            {/* card render  */}
            <div style={{ width: "99%", overflow: "auto", height: "75vh" }} >
                <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {data.map((val, i) => {

                        return <Grid item {...{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                            <MaterialMCard data={val} index={i} handleDelete={handleDelete} />
                        </Grid>
                    })}
                </Grid>
            </div>
        </>
    )
}

export default MaterialLibrary