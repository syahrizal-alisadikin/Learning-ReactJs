import React from "react";
import { BgLogin } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogItem.scss";
import { useHistory } from "react-router-dom";
const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="blog-img" src={BgLogin} alt="post" />
      <div className="blog-content">
        <p className="blog-title">Title Blog</p>
        <p className="blog-author">Author - Date</p>
        <p className="blog-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          neque quibusdam repudiandae aut maxime eum ducimus harum iste
          accusantium laudantium, fugit reiciendis alias hic minima, ex iusto
          earum sequi eius?
        </p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push("detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
