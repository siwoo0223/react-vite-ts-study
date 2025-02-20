import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import sideMenu from './sideMenu';
import Footer from '../footer/footer';
import { icons } from 'antd/es/image/PreviewGroup';

const { Sider, Content } = Layout;

interface SideProps {
  isSidebarVisible: boolean;
}

const Side: React.FC<SideProps> = ({ isSidebarVisible }) => {
  const navigate = useNavigate();

  const menuItems = sideMenu.map((menu) => {
    const item: any = {
      key: menu.text,
      label: menu.text,
      onClick: () => menu.path && navigate(menu.path),
      icons:menu.icon,
    };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      {/* 사이드바 */}
      <Sider
        collapsible
        collapsed={isSidebarVisible}
        width={150}
        trigger={null}
        style={{
          backgroundColor: '#fff',
          minHeight: '100vh',
          position: 'relative', // 사이드바 내부에서 푸터가 절대 위치를 사용할 수 있도록
        }}
      >
        <Menu 
          mode="inline" 
          theme="light" 
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
          
        {!isSidebarVisible && <Footer />}
      </Sider>
    </div>
  );
};

export default Side;
