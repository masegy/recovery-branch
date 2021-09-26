import React from "react";
import { Layout } from "antd";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <Layout>
        <Layout.Footer className="footer">
          Copyright©2021 | Created by Front End & Back End Group B
        </Layout.Footer>
      </Layout>
    </div>
  );
};

export default Footer;
