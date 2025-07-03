import './App.css'
import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Breadcrumb, Col, Image, Layout, Menu, Row, theme} from 'antd';

const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('MENU-1', '1', <PieChartOutlined />),
    getItem('가게매출', '2', <DesktopOutlined />),
    getItem('직원', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [currentMenu, setCurrentMenu] = useState("menu1");

    const handleMenu = (e) => {
        console.log(e);
        setCurrentMenu(e.key);
    };

    return (
        <Layout className='w-full h-screen'>
            <Sider style={{backgroundColor: '#1a59f6'}} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div/>
                <h1 className='text-3xl text-white text-center py-3.5'>관리자페이지</h1>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                    onClick={handleMenu}
                    selectedKeys={currentMenu}
                />
            </Sider>
            <Layout>
                <Header style={{ height: 60, padding: 0, backgroundColor: '#1677ff' }}>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        mode="horizontal"
                        items={items}
                        onClick={handleMenu}
                        selectedKeys={currentMenu}
                    />
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <h1 className='text-5xl'>Content</h1>
                    <Row>
                        <Col xs={12}>
                            <h1>제목</h1>
                            <p>lorem</p>
                        </Col>
                        <Col xs={6}>
                            <h1>제목</h1>
                            <p>lorem</p>
                        </Col>
                        <Col xs={6}>
                            <h1>제목</h1>
                            <p>lorem</p>
                        </Col>
                    </Row>
                    <Image
                        width={400}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"/>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;
