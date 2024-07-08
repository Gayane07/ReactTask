import React from 'react';
import { Button, Select, Form, Input } from 'antd';
import { UsersContext } from '../../contexts/UsersContext';

const FormAddUser = () => {
    const { allergies, createUser } = React.useContext(UsersContext);
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={createUser}
    onFinishFailed={(data) => {
        console.log('onFinishFailed', data);    }}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input size='large' />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
            required: true,
            message: 'Please enter your email',
        },
        {
            type: 'email',
            message: 'Please enter a valid email',
        },
    ]}
    >
      <Input size='large' />
    </Form.Item>

    <Form.Item
      label="Phone"
      name="phone"
      rules={[{ required: true, message: 'Please input your phone!' }]}
    >
      <Input size='large' />
    </Form.Item>

    <Form.Item label="Allergies" name='allergies' rules={[{ required: true, message: 'Please select your allergies!' }]}>
        <Select mode="multiple" size='large'>
          {
            allergies.map((allergy, index) => <Select.Option key={index} value={allergy}>{allergy}</Select.Option>)
          }
        </Select>
      </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default FormAddUser;