import React from "react";

const list=[
  {
      file: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
      name: "Lenova i5",
      group: "Lenova",
      size: "16:4",
      sold:'22',
      price:'39',
    },
    {
      file: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
      name: "Lenova i3",
      group: "Lenova",
      size: "16:9",
      sold:'21',
      price:'29',
    },
    {
      file: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
      name: "Lenova i7",
      group: "Lenova",
      size: "16:0",
      sold:'12',
      price:'50',
    },
    {
      file: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
      name: "MacBook air i5",
      group: "apple",
      size: "16:0",
      sold:'44',
      price:'29',
    },
    {
      file: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
      name: "MacBook air M1",
      group: "apple",
      size: "12:6",
      sold:'24',
      price:'34',
    },
]
export default function ObjectSelling() {
  return (
    <section className="section dashboard">
      <div className="col-12">
        <div className="card top-selling overflow-auto">

          <div className="card-body pb-0" style={{backgroundColor:"rgba(234, 231, 231, 0.776)"}}>
            <h5 className="card-title text-start">Top Object Selling</h5>

            <table className="table table-borderless" 
            style={{'--bs-table-bg':"none"}}
            >
              <thead>
                <tr>
                  <th scope="col">Preview</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sold</th>
                  <th scope="col">Size</th>
                </tr>
              </thead>
              <tbody>
                {list.map((el,index)=>{
                  return(
                   <tr key={index}>
                   <th scope="row">
                       <img src={el.file} style={{width:"3rem"}} alt=""/>
                     
                   </th>
                   <td>
                     {el.name}
                   </td>
                   <td>{el.price}</td>
                   <td className="fw-bold">{el.sold}</td>
                   <td>{el.size}</td>
                 </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
