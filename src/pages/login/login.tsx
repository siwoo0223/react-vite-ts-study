import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Typography, Input, Button, Checkbox, Form } from "antd";
import { loginApi } from "../../api/login/login"; // useSignIn을 컴포넌트 내에서 호출
import { InputRef } from "antd/es/input";
import { login } from "../../store/slices/loginSlice";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // dispatch는 컴포넌트 내에서 사용

  const inputRef = useRef<InputRef>(null);
  const [autoLogin, setAutoLogin] = useState<boolean>(true);
  const signIn = loginApi();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();  // ref로 focus 설정
    }
  }, []);

  const handleSubmit = async (values: any) => {
    const data = {
      ...values,
      autoLogin: autoLogin,
    }
    try {
      const me = await signIn.mutateAsync(data);
      if (me?.flag) {
        dispatch(login(me.userRes));
        navigate('/')
      } else {
        alert(me.message);
      }
    } catch (error) {
      console.log("로그인 중 에러" + error);
      alert("로그인 중 에러" + error);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, black, white)",
      }}
    >
      <Card style={{ width: 400, padding: 20, borderRadius: 16, textAlign: "center" }}>
        <Typography.Title level={3} style={{ cursor: "pointer" }}>
          로그인정도는 해줄수 있자나?
        </Typography.Title>

        <Form onFinish={handleSubmit} layout="vertical">
          <Form.Item label="아이디" name="username" rules={[{ required: true, message: "아이디를 입력하세요!" }]}>
            <Input ref={inputRef} />
          </Form.Item>

          <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: "비밀번호를 입력하세요!" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Checkbox checked={autoLogin} onChange={() => setAutoLogin(!autoLogin)}>
              로그인 상태 유지
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              로그인
            </Button>
          </Form.Item>

          <Form.Item>
            <Button block onClick={() => navigate("/register/register")}>
              회원가입
            </Button>
          </Form.Item>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
            <Button onClick={() => navigate("/register/register")}>아이디 찾기</Button>
            <Button onClick={() => navigate("/register/register")}>비밀번호 찾기</Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
