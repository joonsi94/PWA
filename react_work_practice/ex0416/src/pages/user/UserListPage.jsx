import React, {useEffect, useState} from 'react';
import {Card, Layout, Table} from "antd";
import {getUsers} from "../../database/userManager.js";

const {Content} = Layout;

function UserListPage(props) {

    const columns = [
        {title: "Name", dataIndex: "name"},
        {title: "Email", dataIndex: "email"},
        {titel: "Phone", dataIndex: "phone"},
        {title: "Age", dataIndex: "age"},
    ];
    const [dataSource, setDataSource] = useState([]);
    // [
    //     {key:1, name: "홍길동", email:"aaa@naver.com", phone:"010-1234-5678", age:"2"},
    // ];

    useEffect(() => {
        async function localData() {
            const {data} = await getUsers();
            setDataSource(data);
        }
        localData();
    }, []);

    return (
        <>
            <Content>
                <Card hoverable style={{margin: '1rem'}}>
                    <h1>안녕하세요</h1>
                    <Table columns={columns} dataSource={dataSource} rowKey="id">

                    </Table>
                </Card>
            </Content>
        </>
    );
}

export default UserListPage;