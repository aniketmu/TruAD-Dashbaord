import React from "react";
import Card from "./card";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import CategoryIcon from '@mui/icons-material/Category';
export default function Totalcard() {
  return (
    <section className="section dashboard">
      <div className="row">
        <div className="col-xxl-4 col-md-4">
          <Card icon={<PlayCircleOutlineIcon/>} number={28} title="Total Upload Video"/>
        </div>
        <div className="col-xxl-4 col-md-4">
          <Card icon={<CategoryIcon/>} title="Total Number Of Object" number={142} />
        </div>
        <div className="col-xxl-4 col-md-4">
          <Card icon={<SlowMotionVideoIcon/>} title='Total Blend Video' number={130}/>
        </div>
      </div>
    </section>
  );
}
