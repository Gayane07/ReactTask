import React from 'react';
import { Button, Form, Select } from 'antd';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../../contexts/UsersContext';


const UpdateAllergiesForm = () => {
const { id } = useParams();
const { updateUserAllergies, allergies } = React.useContext(UsersContext);
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={({email}) => updateUserAllergies(id, email)}
    onFinishFailed={(data) => {
        console.log('onFinishFailed', data);    }}
    autoComplete="off"
  >
     <Form.Item label="Allergies" name='allergies' rules={[{ required: true, message: 'Please select your allergies!' }]}>
        <Select mode="multiple" size='large'>
          {
            allergies.map((allergy, index) => <Select.Option key={index} value={allergy}>{allergy}</Select.Option>)
          }
        </Select>
      </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Update email
      </Button>
    </Form.Item>
  </Form>
  )
}

export default UpdateAllergiesForm;