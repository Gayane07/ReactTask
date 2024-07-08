import React, { useContext } from 'react';
import { UsersContext } from '../../contexts/UsersContext';
import { Button, Table } from 'antd';
import Link from 'antd/es/typography/Link';

const Users = () => {
    const { users } = useContext(UsersContext);
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Allergies',
        render: (user) => {
          console.log(user)
        return <>{user?.allergies?.join(', ')}</>
      },
        key: 'allergies',
      },
      {
        title: 'Update',
        render: (user) => <>
         <Link href={`/update-email/${user.id}`}>
      <Button>
      Update email
      </Button>
      </Link>
      <Link href={`/update-phone/${user.id}`}>
      <Button style={{margin: '0 10px'}}>
        Update Phone
      </Button>
      </Link>
      <Link href={`/update-allergies/${user.id}`}>
      <Button>
        Update Allergies
      </Button>
      </Link>
      </>,
        key: 'updates',
      },
     ]
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px', flexDirection: 'column', alignItems: 'center', rowGap: '40px'}}>
      <Link href='/add-user'>
      <Button style={{maxWidth: '250px'}}>Add new user</Button>
      </Link>
       <Table dataSource={users} columns={columns} />;
    </div>

  )
}

export default Users;