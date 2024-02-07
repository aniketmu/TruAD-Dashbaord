import React, { useState } from 'react'

function UploadMaterial() {

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className='uploadFileContainer'>
                    <label>Select File:
                        <input
                            type="file"

                            
                        />
                    </label>
                </div>
                <div className='inputUploadContainer' >
                    <input  type="text" placeholder='File Name' className='uploadInputs' />
                    <select name="File-Type" id="File-Type"  className='uploadInputs'>
                        <option value="">File Type</option>
                    </select>
                </div>
                <div className='inputUploadContainer' >
                    <select name="File-Size" id="File-Size"  className='uploadInputs'>
                        <option value="">File Size</option>
                    </select>
                    <input  type="date" placeholder='Date Of Upload' className='uploadInputs' />
                </div>
                <div className='inputUploadContainer' >
                    <select name="File-Group" id="File-Group"  className='uploadInputs'>
                        <option value="">File-Group</option>
                    </select>

                    <input  type="text" placeholder='Upload By' className='uploadInputs' />
                </div>

                <input type="submit" className='submitUpload' />
            </form>
        </div>
    )
}

export default UploadMaterial