import React, { useState } from 'react';
//antd components
import { Layout, Menu  , Image } from 'antd';
import { BarsOutlined, UserOutlined, HomeOutlined ,MessageOutlined, InstagramFilled  , FacebookFilled ,GooglePlusCircleFilled, GithubFilled , TwitterCircleFilled , LinkedinFilled} from '@ant-design/icons';
//bootstrap components
import {Nav , OverlayTrigger ,  Tooltip } from 'react-bootstrap'
//css files
import './layout.css';
import { Link } from 'react-router-dom'
import ContactForm from '../ContactForm';
//assign antd components
const { Header, Content, Sider } = Layout;


export default function LayoutComponent(props) {


   const [show , setShow] = useState(false) ;

   const handleClose = () => setShow(false)

  

    return (
      <>
        <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{position:'fixed' , height:'100%'}}
    >
      <div className="logo" >
      <Image src="https://pbs.twimg.com/profile_images/1393672180534333441/bv1mBeqf_400x400.jpg"  id='profileImage'   /></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} id='sideBarMenu' >
        
        <Menu.Item key="1" icon={<UserOutlined />}  >
          <Link to='/'>
            profile
          </Link>
        </Menu.Item>
        
        <Menu.Item key="2" icon={<HomeOutlined />}>
          <Link to='/landing' >
            Landing
          </Link>
        </Menu.Item>
        
        <Menu.Item key="3" icon={<BarsOutlined />}>
          <Link to='/projects' >
          Projects
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<MessageOutlined />} onClick={() => setShow(true)} >
          Contact me
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
        <div className="icons-list">
        
        <OverlayTrigger      
              placement={'bottom'}
              overlay={
                <Tooltip id={`tooltip-${'right'}`}>
                  Follow me on Instagram <strong></strong>
                </Tooltip>
                     } >
          <Nav.Link href='https://www.instagram.com/qusay_am/' ><InstagramFilled /></Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger      
              placement={'bottom'}
              overlay={
                <Tooltip id={`tooltip-${'right'}`}>
                  Contact me on Facebook <strong></strong>
                </Tooltip>
                     } >
          <Nav.Link href='https://web.facebook.com/qusay.amarat/'><FacebookFilled  id='facebook' /></Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger      
              placement={'bottom'}
              overlay={
                <Tooltip id={`tooltip-${'right'}`}>
                  Tooltip on <strong></strong>
                </Tooltip>
                     } >
          <Nav.Link href='/'><GooglePlusCircleFilled /></Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger      
              placement={'bottom'}
              overlay={
                <Tooltip id={`tooltip-${'right'}`}>
                  Follow me on Twitter <strong></strong>
                </Tooltip>
                     } >
          <Nav.Link href='https://twitter.com/QusayAmarat'><TwitterCircleFilled /></Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger      
              placement={'bottom'}
              overlay={
                <Tooltip id={`tooltip-${'right'}`}>
                  Navigate my projects on github <strong></strong>
                </Tooltip>
                     } >
          <Nav.Link href='https://github.com/Qusay114'><GithubFilled /></Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger      
              placement={'bottom'}
              overlay={
                <Tooltip id={`tooltip-${'right'}`}>
                 Contact me on Linkedin <strong></strong>
                </Tooltip>
                     } >
          <Nav.Link href='https://www.linkedin.com/in/qusay-al-amarat/'><LinkedinFilled id='linkedin' /></Nav.Link>
          </OverlayTrigger>
        </div>
      </Header>
      <Content  id='contentProfile' >
        <div className="site-layout-background" >
          
          {<props.content />}
        </div>
      </Content>
     
    </Layout>
  </Layout>
  <>

      <ContactForm  show={show} handleClose={handleClose} />
    </>
      </>
    )
  
}


