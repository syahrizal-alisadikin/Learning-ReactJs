import React from "react";
import { Button, Gap } from "../../component";
import { BlogItem } from "../../component/molecule";
import "./home.scss";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wraper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={25} />
        <Button title="Next" />
      </div>
      <Gap height={25} />
    </div>
  );
};

export default Home;
