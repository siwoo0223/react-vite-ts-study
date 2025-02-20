import { MenuProps } from 'antd';
import {
    UserOutlined,
    LogoutOutlined,
    VideoCameraAddOutlined,
    VideoCameraOutlined,
    ProfileOutlined
} from '@ant-design/icons';
import React from 'react'; // ReactNode 사용을 위해 필요

export const menuItems: MenuProps['items'] = [
    { key: '/myInfo/myInfo', icon: React.createElement(UserOutlined), label: '내정보' },
    { key: 'divider', type: 'divider' }, // 구분선 추가
    { key: '/myInfo/myChanner', icon: React.createElement(ProfileOutlined), label: '나의 채널' },
    { key: '/myInfo/myMedia', icon: React.createElement(VideoCameraOutlined), label: '나의 게시글' },
    { key: '/myInfo/addMedia', icon: React.createElement(VideoCameraAddOutlined), label: '게시글 작성' },
    { key: 'logout', icon: React.createElement(LogoutOutlined), label: '로그아웃' }
];
