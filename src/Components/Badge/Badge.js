import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Badge.css";

const Badges = () => {
  const badgeData = [
    {
      title: "Learn Skills",
      img: "https://t3.ftcdn.net/jpg/03/01/51/58/360_F_301515843_lXnrgpNenSHGwcgMIzoZV38KfPiKNyCz.jpg",
      sub: "With Unlimited Courses",
    },
    {
      title: "Experts Teachers",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSug0VeVAwLloX_oP7K4sjMs9OksrbYuGT32Q&usqp=CAU",
      sub: "Best & Highly Qualified",
    },
    {
      title: "Certificates",
      img: "https://thumbs.dreamstime.com/b/certificate-icon-isolated-white-background-certificate-icon-trendy-design-style-certificate-vector-icon-modern-simple-181986834.jpg",
      sub: "Value All Over The World",
    },
  ];
  return (
    <div className='container mb-4'>
      <Row xs={1} md={3} className='g-4'>
        {badgeData.map((mama) => (
          <Col>
            <Card>
              <div className='card-box'>
                <img className='badge-img' src={mama.img} alt='' />
                <div className='card-title-box'>
                  <p className='card-title'>{mama.title}</p>
                  <p className='card-text'>{mama.sub}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Badges;
