import Link from 'next/link'
import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="banner-title">فرم عضویت منتورینگ</h1>
        <div className="rodmap">
          <Link href="/" className="rodmap-link">
            Home
          </Link>
          <LeftOutlined className="rodmap-icon" />
          <h6 className="rodmap-text">فرم عضویت منتورینگ</h6>
        </div>
      </div>
    </div>
  )
}

export default Banner
