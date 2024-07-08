import React from 'react';
import { Button, Form, Input } from 'antd';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../../contexts/UsersContext';


const UpdatePhoneForm = () => {
const { id } = useParams();
const { updateUserPhone } = React.useContext(UsersContext);
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={({phone}) => updateUserPhone(id, phone)}
    onFinishFailed={(data) => {
        console.log('onFinishFailed', data);    }}
    autoComplete="off"
  >
<Form.Item
      label="Phone"
      name="phone"
      rules={[{ required: true, message: 'Please input your phone!' }]}
    >
      <Input size='large' />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Update phone
      </Button>
    </Form.Item>
  </Form>
  )
}

export default UpdatePhoneForm;