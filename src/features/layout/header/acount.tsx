import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Dropdown, Typography, Button } from 'antd';
import { menuItems } from './acountMenu'; // 수정된 메뉴 가져오기
import { logoutApi } from '../../../api/login/login';
import { logout } from '../../../store/slices/loginSlice';

const Account = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginState = useSelector((state: any) => state.login?.userInfo || {});
    const [open, setOpen] = useState(false);
    const signOut = logoutApi();
    const handleMenuClick = async ({ key }: { key: string }) => {
        setOpen(false);
        if (key === 'logout') {
            await signOut.mutateAsync();
            dispatch(logout());
            setOpen(false);
        } else if (key !== 'divider') {
            navigate(key);
        }
    };

    return (
        <>
            {loginState?.username ? (
                <Dropdown
                    menu={{ items: menuItems, onClick: handleMenuClick }}
                    trigger={['click']}
                    onOpenChange={setOpen}
                    open={open}
                >
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Typography.Text style={{ marginRight: 10, color: "white" }}>
                            {loginState.name}님
                        </Typography.Text>
                        <Avatar style={{ backgroundColor: '#87d068' }}>
                            {loginState.name[0]}
                        </Avatar>
                    </div>
                </Dropdown>
            ) : (
                <>
                    <Button type="link" onClick={() => navigate('/login/login')}>
                        로그인
                    </Button>
                    <Button type="link" onClick={() => navigate('/register/register')}>
                        회원가입
                    </Button>
                </>
            )}
        </>
    );
};

export default Account;
