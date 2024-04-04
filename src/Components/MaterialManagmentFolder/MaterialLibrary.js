import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MaterialMCard from "./MaterialMCard";

function MaterialLibrary({ initData }) {
  const [data, setData] = useState(initData);
  const [searchData, setSearchData] = useState(initData);
  const [productName, setProductName] = useState("");
  const [mGroup, setMGroup] = useState([]);
  const [selectMgroup,setSeletctMgroup]=useState("");
  const [mSize, setMSize] = useState([]);
  

  useEffect(() => {
    const arr1 = [];
    const arr2 = [];
    initData.forEach((element) => {
      if (!arr1.includes(element.group)) {
        arr1.push(element.group);
      }
      if (!arr2.includes(element.size)) {
        arr2.push(element.size);
      }
    });
    setMGroup(arr1);
    setMSize(arr2);
  }, [initData]);

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const response = await fetch("http://localhost:4000/api/getMaterial");
  //     const datar = await response.json()

  //     const materials = datar.materials

  //     materials.forEach(element => {
  //       element["file"] = element.url;
  //       delete  element['url']
  //     })

  //     console.log(materials)
  //     setData(materials)

  //     console.log("updated",data)
  //   }

  //   fetchData()
  // }, []);
  
  function handleProductName(event) {
    if (event.target.value.trim() !== "") {
      const arr = [...searchData];
      const newArr = arr.filter((ele) => {
        return ele.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      setData(newArr);
    } else if (event.target.value.trim() === "") {
      setData(initData);
    }
    setProductName(event.target.value);
  }

  async function handleDelete(key) {
    // const arr = [...data];
    // arr.splice(key, 1);
    const response = await fetch("https://truad-dashboard-backend.onrender.com/api/deleteMaterial", {
      method: "POST",
      body: JSON.stringify( {
        materialID : key
      }),
      headers: {
        "Content-Type" : "application/json"
      }
    })

    if(response.status == 404){
      console.log("Material not found")
      return 
    };

    if(response.status == 200){
      const filtered = data.filter((elem) => elem._id !== key)
      setData(filtered);
    }
  }
  const handleChangeMGroup=()=> {
    // setSeletctMgroup("chnage")
    console.log("testing")
  }

  return (
    <>
      <div className="firstContainer ">
        <p className="row2">Picture</p>
        <p className="row2">Video</p>
        <p className="row2">3D</p>
      </div>
      <div className="inputContainer">
        <label className="inputLabelContainer">
          Material Name:
          <input
            type="text"
            name="name"
            value={productName}
            onChange={handleProductName}
            className="inputBox"
            placeholder="Enter Material Name"
          />
        </label>
        <label className="inputLabelContainer">
          Material Group :
          <select
            name="material-group"
            id="material-group"
            className="inputBox"
          >
            <option value={selectMgroup} onChange={handleChangeMGroup}>Select Material Group</option>
            {mGroup.map((el) => {
              return <option value={el}>{el}</option>;
            })}
          </select>
        </label>
        <label className="inputLabelContainer">
          Material Size:
          <select name="material-size" id="material-size" className="inputBox">
            <option value="" >Select Material Size</option>
            {mSize.map((el) => {
              return <option value={el}>{el}</option>;
            })}
          </select>
        </label>
      </div>
      <div
        style={{
          width: "98.5%",
          overflow: "auto",
          margin: "auto",
          height: "76vh",
          backgroundColor: "#343a40",
          padding: "10px 10px 10px 10px",
          borderRadius: "10px"
        }}
        className="card_container"
      >
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.map((val) => {
            return (
              <Grid item {...{ xs: 12, sm: 6, md: 4, lg: 3 }} key={val._id}>
                <MaterialMCard
                  data={val}
                  key={val._id}
                  handleDelete={handleDelete}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default MaterialLibrary;
