import { Layout, Typography, Button } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title, Text } = Typography;

const NotFound: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Content style={{ textAlign: "center", padding: "2rem" }}>
        <Title level={1} style={{ fontSize: "6rem", fontWeight: "bold", marginBottom: "1rem" }}>
          404
        </Title>
        <Text style={{ fontSize: "1.5rem", display: "block", marginBottom: "2rem" }}>
          요청하신 페이지를 찾을 수 없습니다.
        </Text>
        <Button type="primary" size="large">
          <Link to="/">Go Back Home</Link>
        </Button>
      </Content>
    </Layout>
  );
};

export default NotFound;
