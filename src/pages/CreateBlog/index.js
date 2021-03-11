import React from "react";
import { Button, Input, Link, Upload } from "../../component";
import TextArea from "../../component/atoms/TextArea";
import "./button.scss";
import { useHistory } from "react-router-dom";
const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="create-blog">
      <Link title="Kembali ke Home" onClick={() => history.push("/")} />

      <p className="title">Create New Blog</p>
      <Input label="Nama Blog" placeholder="Masukan Nama Blog" />
      <Upload />
      <TextArea placeholder="Masukan Description" />
      <div className="button-save">
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
