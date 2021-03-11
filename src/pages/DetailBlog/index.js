import React from "react";
import { BgLogin } from "../../assets";
import { Gap, Link } from "../../component";
import "./detail.scss";
import { useHistory } from "react-router-dom";
const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-detail">
      <Gap height={20} />
      <img src={BgLogin} alt="detail-blog" className="blog-image-detail" />
      <p className="blog-title-detail">Title Blog</p>
      <p className="blog-author-detail">Author - Date</p>
      <p className="blog-author-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        neque quibusdam repudiandae aut maxime eum ducimus harum iste
        accusantium laudantium, fugit reiciendis alias hic minima, ex iusto
        earum sequi eius
      </p>
      <Link title="Kembali ke Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
