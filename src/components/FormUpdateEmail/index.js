import React from 'react';
import { Button, Form, Input } from 'antd';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../../contexts/UsersContext';


const UpdateEmailForm = () => {
const { id } = useParams();
const { updateUserEmail } = React.useContext(UsersContext);
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={({email}) => updateUserEmail(id, email)}
    onFinishFailed={(data) => {
        console.log('onFinishFailed', data);    }}
    autoComplete="off"
  >
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

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Update email
      </Button>
    </Form.Item>
  </Form>
  )
}

export default UpdateEmailForm;