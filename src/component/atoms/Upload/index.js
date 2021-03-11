import React from "react";
import { BgLogin } from "../../../assets";
import Gap from "../Gap";
import "./upload.scss";
const Upload = () => {
  return (
    <div className="create-upload">
      <Gap height={16} />
      <img src={BgLogin} alt="priview" className="priview" />
      <Gap height={16} />
      <input type="file" />
      <Gap height={16} />
    </div>
  );
};

export default Upload;
