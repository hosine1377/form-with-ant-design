import React from 'react'
import { Col, Row } from 'antd'
import { InstagramOutlined, UpOutlined } from '@ant-design/icons'
function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-top">
          <div className="container">
            <Row>
              <Col md="9">
                <div className="cover-logo">
                  <img
                    src="https://coachunion.ir/wp-content/uploads/2023/08/WhatsApp_Image_2023-08-08_at_16.11.43-removebg-preview.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="footer-icons">
                  <h3 className="title">شبکه های اجتماعی</h3>
                  <ul className="icon-lists">
                    <li className="item-icon-list">
                      <div className="icon-cover tele-cover">
                        <InstagramOutlined className="icon-tele" />
                      </div>
                      <h5>تلگرام</h5>
                    </li>
                    <li className="item-icon-list">
                      <div className="icon-cover insta-cover">
                        <InstagramOutlined className="icon-insta" />
                      </div>
                      <h5> اینستاگرام</h5>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="9">
                <div className="footer-buttons">
                  <h3 className="title">لینک های مهم</h3>
                </div>
                <ul className="buttons-lists">
                  <li className="item-buttons-lists">
                    <a href="" className="link">
                      مقررات عضویت
                    </a>
                  </li>
                  <li className="item-buttons-lists">
                    <a href="" className="link">
                      مدیران تعاونی
                    </a>
                  </li>
                  <li className="item-buttons-lists">
                    <a href="" className="link">
                      اخبار و رویدادها
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrapper">
              <p>© 2023 تعاونی فعالین مربیگری. تمام حقوق محفوظ است </p>
              <a href="#">
                {' '}
                <UpOutlined className="arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
