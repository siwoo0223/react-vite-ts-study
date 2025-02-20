import { Paths } from "../../../paths";

interface HeaderMenuItem {
  text: string;
  path?: string; // 기본적으로 개별 메뉴에는 경로가 있음
  subMenu?: { text: string; path: string }[]; // 서브메뉴 존재 가능
}

const headerMenu: HeaderMenuItem[] = [
  { 
    text: "홈페이지",
    path: Paths.HOME,
    subMenu: [
      { text: "고객문의", path: Paths.HOME },
      { text: "테스크랜드", path: Paths.HOME },
      { text: "뉴스", path: Paths.HOME },
    ]
  },
  { text: "PMS",
    path: Paths.HOME,
    subMenu: [
      { text: "고객사", path: Paths.HOME },
      { text: "프로젝트 관리", path: Paths.HOME },
      { text: "예산 및 인력 관리", path: Paths.HOME },
      { text: "문서함", path: Paths.HOME },
      { text: "CSR", path: Paths.HOME },
      { text: "일감 관리", path: Paths.HOME },
    ],
  },
  { 
    text: "게시판", 
    path: Paths.HOME,
    subMenu: [
      { text: "영업관리", path: Paths.HOME },
      { text: "IT교육", path: Paths.HOME },
      { text: "지식자료실", path: Paths.HOME },
      { text: "표준 용어", path: Paths.HOME },
      { text: "공지 사항", path: Paths.HOME },
    ],
  },
  {
    text: "회원", 
    path: Paths.HOME, // 서브메뉴 예시
    subMenu: [
      { text: "개인일정관리", path: Paths.HOME },
      { text: "출퇴근", path: Paths.HOME },
      { text: "외주사", path: Paths.HOME },
      { text: "직원", path: Paths.HOME },
      { text: "연차휴가", path: Paths.HOME },
      { text: "프리랜서", path: Paths.HOME },
    ],
  },
  {
    text: "전자결재", 
    path: Paths.HOME, // 서브메뉴 예시
  },
];

export default headerMenu;
