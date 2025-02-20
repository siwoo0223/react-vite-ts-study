import { Card, Typography } from "antd";

const Footer = () => {
  return (
    <Card
      style={{
        position: 'absolute', bottom: 0, width: '100%'
      }}
    >
      <Typography.Text>
        © 2024 Siwoo Blog. All Rights Reserved.
      </Typography.Text>
    </Card>
  );
};

export default Footer;
