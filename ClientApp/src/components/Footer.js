import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


export default function Footer() {
  return(
    <>
      <div style={{ height: 300 }} className="padding-top-5 center-text">
          <h2>Open<span className="orange-text">Court</span> Contact </h2>
          <h5>© 2020 Copyright: Tien Nguyen</h5>
          <a href="https://github.com/Tien96ng/open-court" target="_blank" rel="noopener noreferrer">
            <h5>
              <i class="fa fa-github"></i>
              <span className="padding-left-5">Github</span>
            </h5>
          </a>
      </div>
    </>
  );
};