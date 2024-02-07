import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import MaterialMCard from './MaterialMCard'


const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function MaterialLibrary({data}) {
    
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
                    
                    <input type="text" name="name" className='inputBox' placeholder='Enter Material Name' />
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
                <button style={{width:"100px" ,borderRadius:"5px"} } >Search</button>
            </div>

            {/* card render  */}
            <div style={{width:"99%",border:'1px solid red'}} >
            <Grid  container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.map((media) => {
                    return <Grid item xs={3}>
                        <MaterialMCard name={media.name} size={media.size} group={media.group} file={media.file || null}/>
                    </Grid>
                })}
            </Grid>
            </div>
        </>
    )
}

export default MaterialLibrary