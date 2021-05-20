import React, { useContext } from 'react';
import { Context } from "../context/appContext";
import { Parallax } from 'react-parallax';
import { Input, Row, Col, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Link } from 'react-router-dom';
import image1 from '../img/fall.jpg';
import image2 from '../img/macbook.png'
import image3 from '../img/outdoor-rim.jpeg'
import states from '../data/states';
import '../css/custom.css';
import 'font-awesome/css/font-awesome.min.css';

export function Home() {
  const { search, setSearch, courts } = useContext(Context);

  const handleSearchChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toUpperCase());
  }

  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  
  return (
    <>
      <Parallax bgImage={image1} strength={200} blur={0} bgImageAlt="Outdoor basketball hoop">
        <div style={{ height: 600 }}>
          <div style={insideStyles}>
            <h3 className="page-subtitle white-text">Find a basketball court near you</h3>
              <InputGroup>
                <Input 
                  type="text" 
                  name="search" 
                  id="search" 
                  placeholder="Search by court name, city, state, or zipcode" 
                  value={search} 
                  onChange={handleSearchChange}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <Link to="/court-list"><i className="fa fa-search"></i></Link>
                    </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
          </div>
        </div>
      </Parallax>
      <div style={{ height: 600 }} className="padding-top-5">
        <Row>
          <Col>
            <div className="left-container">
              <h2 className="page-subtitle" >Need a place to <span className="orange-text">hoop?</span></h2>
              <h4>
                It's not just about finding the best court, it's figuring out the ones to avoid!
                View ratings and reviews from over <span className="orange-text">[Placeholder]</span> other hoopers in the US.
              </h4>
            </div>
          </Col>
          <Col>
            <div className="right-container">
              <img src={image2} alt="MacBook" id="macbook"/>
            </div>
          </Col>
        </Row>
      </div>
      <Parallax bgImage={image3} strength={200} blur={1} bgImageAlt="basketball on white background">
        <div style={{ height: 700 }}>
          <div className="section-title page-subtitle white-text">
            <h3>Browse <span className="orange-text">Courts</span> by State!</h3>
            <h4>Over <span className="orange-text">{courts.length}</span> basketball courts currently available to view.</h4>
            <hr />
            <Row>
              {states.map((s, index) => (
                <Col key={index} sm="3" className="mt-2">
                  <Link to="/court-list">
                    <h5 className="segoe-font white-text" onClick={() => setSearch(s[1])}>
                      {s[0]}
                    </h5>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Parallax>
    </>
  );
}
