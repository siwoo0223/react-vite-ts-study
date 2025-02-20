import { Card, Spin, Typography } from "antd";

export function LoadingScreen() {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000", // 검정색 배경
        color: "#fff", // 텍스트 색상
        zIndex: 1300, // 다른 요소보다 위에 표시되도록 설정
      }}
    >
      <Spin size="large" style={{ marginBottom: 16 }} />
      <Typography.Text style={{ color: "#fff", fontSize: "18px" }}>
        Loading...
      </Typography.Text>
    </Card>
  );
}
