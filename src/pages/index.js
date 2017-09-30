import React from "react";
import Helmet from "react-helmet";

import "./index.css";

const Index = () => (
  <div>
    <Helmet title="ω bbs" />
    <main className="page">
      <header className="header">
        <h1 className="title">ω bbs</h1>
        <h2 className="slogan">Next Generation Forum Platform</h2>
      </header>
      <footer className="footer">
        <p className="deadline">2017. 12. 31</p>
        <p className="coming-soon">Coming Soon</p>
      </footer>
    </main>
  </div>
);

export default Index;
