import React from 'react'
import { Dropdown, Menu, Space } from "antd";
import euphorialogo from "../Assets/Images/cropped-euphorialogo-1536x237.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              All Services
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              -360 Video <br /> Production
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              -VR Development
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              -AR Development
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              -Metaverse and NFT
            </a>
          ),
        },
        {
          key: "6",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              -WebVR && WebAR
            </a>
          ),
        },
        {
          key: "7",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              -MVP Builder
            </a>
          ),
        },
        
      ]}
    />
  );

  const Header = () => {
    // to check weather to show sidebar or not
  const [showSidebar,setShowSiderbar]=useState(false);
  return (
    <>
    <section className={`sidebar ${(showSidebar)?"":"sidebarGo"}`}>
    <div className="main-sidebar">
        <div className="sidebar-header">
        <img src={euphorialogo} alt="" width={200} />
        <div className="btn-cross" onClick={()=>{setShowSiderbar(false);}}>
        <FontAwesomeIcon icon={faXmark} color="white" />
        </div>
        </div>
        <div className="sidebar-content">
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Our Work</a></li>
            <li><a href="">Whats New</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="bgshadow" onClick={()=>{setShowSiderbar(false);}}>
      </div>
    </section>

    <section className="header">
        <div className="logo">
          <img src={euphorialogo} alt="" width={220} />
        </div>

        <div className="btns">
          <div className="hamburger-logo" onClick={()=>{setShowSiderbar(true);}}>
          <FontAwesomeIcon icon={faBars} color="white" size='2xl' />
          </div>
          <div className="btn btn-about">
            <a href="/about">About</a>
          </div>
          <div className="btn btn-services">
          <Dropdown overlay={menu} style={{ color:"black" }}>
            <a onClick={(e) => e.preventDefault()} >
              <Space>
                <span> Services</span>
              </Space>
            </a>
          </Dropdown>
          </div>

          <div className="btn btn-work">
            <a href="/work">Work</a>
          </div>
          <div className="btn btn-whatsnew">
            <a href="/whatsnew">What's New</a>
          </div>

          <a href="#">
          <div className="btn-contact">
              Contact
          </div>
          </a>
        </div>

      </section>
      </>
  )
}

export default Header