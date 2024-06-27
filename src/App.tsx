import {memo} from "react";
import './theme/index.css';
import Routes from "@/routes";

export default memo(() => {

  return (
    <div className="h-full w-full">
      <Routes/>
    </div>
  )
})