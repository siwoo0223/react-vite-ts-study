import React, { ReactNode } from 'react';
import { HomeOutlined, AppstoreAddOutlined, LikeOutlined, BookOutlined, BlockOutlined } from '@ant-design/icons';
import { Paths } from '../../../paths';

interface SideMenuItem {
  text: string;
  icon: ReactNode;
  path: string;
}

const sideMenu: SideMenuItem[] = [
  {
    text: '홈',
    icon:  React.createElement(HomeOutlined),
    path: Paths.HOME,
  },
  {
    text: '쇼츠',
    icon: React.createElement(AppstoreAddOutlined),
    path: Paths.HOME,
  },
  {
    text: '좋아요',
    icon: React.createElement(LikeOutlined),
    path: Paths.HOME,
  },
  {
    text: '구독',
    icon: React.createElement(BookOutlined),
    path: Paths.HOME,
  },
  {
    text: '차단',
    icon: React.createElement(BlockOutlined),
    path: Paths.HOME,
  },
];

export default sideMenu;
