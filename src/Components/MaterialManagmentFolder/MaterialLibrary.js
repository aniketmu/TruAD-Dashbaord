import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import MaterialMCard from './MaterialMCard';

function MaterialLibrary({ initData }) {
    const [data, setData] = useState(initData);
    const [searchData, setSearchData] = useState(initData);
    const [productName, setProductName] = useState("");

    function handleProductName(event) {
        if (event.target.value.trim() !== "") {
            const arr = [...searchData];
            const newArr = arr.filter((ele) => {
                return ele.name.toLowerCase().includes(event.target.value.toLowerCase());
            });
            setData(newArr);
        } else if (event.target.value.trim() === "") {
            setData(initData);
        }
        setProductName(event.target.value);
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
                </label>
                <label className='inputLabelContainer'>
                    Material Size:
                    <select name="material-size" id="material-size" className='inputBox'>
                        <option value="">Select Material Size</option>
                    </select>
                </label>
            </div>
            <div style={{ width: "99%", overflow: "auto", height: "75vh" }}>
                <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {data.map((val, i) => {
                        return (
                            <Grid item {...{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                                <MaterialMCard data={val} index={i} handleDelete={handleDelete} />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </>
    );
}

export default MaterialLibrary;
