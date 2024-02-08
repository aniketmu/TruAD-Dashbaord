import React, { useState } from "react";


function UploadMaterial({ setData }) {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState({});
    const [imageUrl, setImageUrl] = useState(null);

    const handleChange = (e) => {
        if (e.target.id === "Image") {
            setFile(e.target.files[0]);
            const url = URL.createObjectURL(e.target.files[0]);
            setImageUrl(url);
        } else {
            setFiles((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fileObj = {
            name: files.Name,
            type: files.Type,
            size: files.Size,
            date: files.Date,
            group: files.Group,
            submitBy: files.SubmitBy,
            file: imageUrl,
        };

        setData((prev) => [...prev, fileObj]);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="uploadFileContainer" style={{ backgroundImage: { imageUrl } }}>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <label >
                            Select File:
                            <input
                                id="Image"
                                type="file"
                                //   accept="image/*"
                                onChange={(e) => handleChange(e)}
                            />
                        </label>
                    </div>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {imageUrl ? <img src={imageUrl} style={{ width: "100%", height: "100%", marginRight: "20px", borderRadius: "7px" }}></img> : <span>Select file to see preview...</span>}
                    </div>
                </div>
                <div className="inputUploadContainer">
                    <input
                        type="text"
                        placeholder="File Name"
                        className="uploadInputs"
                        id="Name"
                        onChange={(e) => handleChange(e)}
                    />
                    <select
                        name="File-Type"
                        id="Type"
                        className="uploadInputs"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="" disabled selected>
                            Select an option
                        </option>
                        <option value="Image">Image</option>
                        <option value="Video">Video</option>
                    </select>
                </div>
                <div className="inputUploadContainer">
                    <select
                        name="File-Size"
                        id="Size"
                        className="uploadInputs"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="" disabled selected>
                            Select an option
                        </option>
                        <option value="6:9">6:9</option>
                        <option value="4:3">4:3</option>
                        <option value="16∶9">16∶9</option>
                    </select>
                    <input
                        type="date"
                        placeholder="Date Of Upload"
                        className="uploadInputs"
                        onChange={(e) => handleChange(e)}
                        id="Date"
                    />
                </div>
                <div className="inputUploadContainer">
                    <select
                        name="File-Group"
                        id="Group"
                        className="uploadInputs"
                        onChange={(e) => handleChange(e)}
                        value={files.Group}
                    >
                        <option value="" disabled selected>
                            Select an option
                        </option>
                        <option value="TV">TV</option>
                        <option value="Movie">Movie</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Upload By"
                        className="uploadInputs"
                        id="SubmitBy"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <input type="submit" className="submitUpload" />
            </form>
        </div>
    );
}

export default UploadMaterial;
