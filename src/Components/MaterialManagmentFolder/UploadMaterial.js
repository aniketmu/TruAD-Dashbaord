import React, { useState } from "react";
import { useCookies } from "react-cookie";

function UploadMaterial({ setData, setMaterialAdded }) {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState({});
  const [imageUrl, setImageUrl] = useState(null);
  const [cookies, setCookie] = useCookies(['user'])

  const handleChange = (e) => {
    if (e.target.id === "Image") {
      setFile(e.target.files[0]);
      const url = URL.createObjectURL(e.target.files[0]);
      setImageUrl(url);
    } else {
      setFiles((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(cookies.user)
    const fileObj = {
      name: files.Name,
      type: files.Type,
      size: files.Size,
      // date: files.Date,
      url: imageUrl, // Changed 'file' to 'Image' to match the object key
      group: files.Group,}
    //   submitBy: files.SubmitBy,
    //   file: imageUrl, // Changed 'file' to 'Image' to match the object key
    // };

    // setData((prev) => [fileObj, ...prev]);
    try {
      const response = await fetch("http://localhost:4000/api/uploadMaterial", {
        method: "POST",
        body: JSON.stringify({
          material : fileObj
        }),
        headers: {
          "Authorization": `Bearer ${cookies.user}`,
          "Content-Type" : "application/json"
        }
      })

      if(response.status == 200){
        return console.log("Success")
      }

      if(response.status == 500){
        return console.log("unsuccessful")
      }

      setMaterialAdded((prev) => prev + 1)
      setData((prev) => [...prev, fileObj])
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="uploadFileContainer"
         
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label>
              Select File:
              <input id="Image" type="file" onChange={(e) => handleChange(e)} />
            </label>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  marginRight: "20px",
                  borderRadius: "7px",
                }}
                alt="Preview"
              ></img>
            ) : (
              <span>Select file to see preview...</span>
            )}
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
            value={files.Type || ""}
          >
            <option value="" disabled>
              Select a File Type
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
            value={files.Size || ""}
          >
            <option value="" disabled>
              Select a File Size
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
            value={files.Group || ""}
          >
            <option value="" disabled>
              Select a File Group
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