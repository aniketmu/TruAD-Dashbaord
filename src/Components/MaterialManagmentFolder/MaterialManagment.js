import React, { useState, useEffect } from "react";
import "./MaterialManagment.css";

import MaterialLibrary from "./MaterialLibrary";
import UploadMaterial from "./UploadMaterial";
import { useLocation } from "react-router-dom";

function MaterialManagment() {

  const location = useLocation()
  const isUpload = location?.state

  const [data, setData] = useState([
   
  ]);
  const [materialAdded, setMaterialAdded] = useState(0);

  const [swap, setSwap] = useState(true);
  

  console.log(location?.state?.swap)

  const handleForLibrary = () => {
    setSwap(true);
  };

  const handleForUpload = () => {
    setSwap(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://truad-dashboard-backend.onrender.com/api/getMaterial");
      const datar = await response.json();

      const materials = datar.materials;

      materials.forEach((element) => {
        element["file"] = element.url;
        delete element["url"];
      });

      console.log(materials);
      setData(materials);

      console.log("updated", data);
    };

    fetchData();
  }, [materialAdded]);

  return (
    <div className="container1">
      <div className="firstContainer">
        <p className="row1" onClick={handleForLibrary}>
          {" "}
          <span>Material Library</span>
        </p>
        <p className="row1" onClick={handleForUpload}>
          <span>Upload Material</span>
        </p>
      </div>

     

      {swap ? (
        <>
          {data.length !== 0 ? (
            <MaterialLibrary initData={data} />
          ) : (
            <div></div>
          )}
        </>
      ) : (
        <UploadMaterial setData={setData} setMaterialAdded={setMaterialAdded} />
      )}

     
    </div>
  );
}

export default MaterialManagment;
