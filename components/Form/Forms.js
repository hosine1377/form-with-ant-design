import { Form, Col, Row, Input, Upload, Button, Checkbox } from 'antd'
import React from 'react'
import { UploadOutlined } from '@ant-design/icons'
function Forms() {
  const { TextArea } = Input
  return (
    <div className="container">
      <Form className="form" layout="vertical">
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <Form.Item label="نام" className="form-item">
              <Input placeholder="نام" size="large" />
            </Form.Item>
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <Form.Item label="نام خانوادگی" className="form-item">
              <Input placeholder="نام خانوادگی" size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <Form.Item label="نام" className="form-item">
              <Input placeholder="نام" size="large" />
            </Form.Item>
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <Form.Item label="نام خانوادگی" className="form-item">
              <Input placeholder="نام خانوادگی" size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={20}>
            <Form.Item label="محل فعالیت" className="form-item">
              <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
        <Row gap="samll">
          <Col xs={2} sm={4} md={6}>
            <Form.Item label="نام" className="form-item">
              <Input placeholder="نام" size="large" />
            </Form.Item>
          </Col>
          <Col xs={2} sm={4} md={6}>
            <Form.Item label="نام خانوادگی" className="form-item">
              <Input placeholder="نام خانوادگی" size="large" />
            </Form.Item>
          </Col>
          <Col xs={2} sm={4} md={6}>
            <Form.Item label="نام خانوادگی" className="form-item">
              <Input placeholder="نام خانوادگی" size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={20}>
            <Form.Item label="محل فعالیت" className="form-item">
              <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={8} lg={7} xl={8}>
            <Form.Item label="نام" className="form-item">
              <Input placeholder="نام" size="large" />
            </Form.Item>
          </Col>
          <Col xs={2} sm={4} md={8} lg={7} xl={8}>
            <Form.Item label="نام خانوادگی" className="form-item">
              <Input placeholder="نام خانوادگی" size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={8} lg={7} xl={8}>
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Col>
          <Col xs={2} sm={4} md={8} lg={7} xl={8}>
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={8} lg={7} xl={8}>
            <Form.Item name="disabled" valuePropName="checked">
              <Checkbox>
                1.مدرک منتورینگ دارم(بارگذاری مدرک الزامی است)
              </Checkbox>
            </Form.Item>
          </Col>
          <Col xs={2} sm={4} md={8} lg={7} xl={8}>
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Col>
        </Row>
        <Row>
          <Col md={20}>
            <Form.Item name="disabled" valuePropName="checked">
              <Checkbox>
                2.دانشپذیر منتورینگ هستم/متعهد می شوم حداکثر تا 6 ماه آینده مدرک
                منتورینگ ارائه دهم.
              </Checkbox>
            </Form.Item>
          </Col>
          <Col md={20}>
            <Form.Item name="disabled" valuePropName="checked">
              <Checkbox>
                3.اینجانب، تمام قوانین و شرایط را مطالعه کرده و می پذیرم.(تیک
                زدن این گزینه، الزامی است)
              </Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button block className="btn" size="large">
            ارسال
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Forms
