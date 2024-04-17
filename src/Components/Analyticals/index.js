import React from "react";
import RecentSales from "./Recent_Sales";
import ObjectSelling from "./Object_Selling";
import Footer from "./Footer";
import Totalcard from "./Totalcard";
function Analytics() {
  return (
    <div className="text-white" style={{backgroundColor:"rgb(108, 117, 125)", width:"100%", height:"100vh", overflowY:"auto"}}>
      <main className="main container vstack gap-4">
        <nav className="pt-3">
          <h3 className="rounded text-center p-2 mb-0" style={{ '--bs-breadcrumb-divider-color': '"#fff"', backgroundColor:"rgb(33, 37, 41)" }}>Analytical</h3>
         
        </nav>
     
        <Totalcard/>
        <RecentSales/>
        <ObjectSelling/>
        <Footer/>
      </main>
      </div>
  );
}

export default Analytics;
