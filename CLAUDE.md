# 프로젝트 개발 규칙 (Development Rules)

## 개발 지침 및 UI/UX 규칙
- **AI 아이콘 사용 자제**: 디자인 및 아이콘 에셋 선정 시 AI 스타일 아이콘의 무분별한 사용을 자제하고, 깔끔하고 일관성 있는 웹 표준 그래픽/이모지 또는 심플한 벡터(SVG) 형태를 지향합니다.

## 깃 커밋 메시지 규칙 (Git Commit Rules)
- **깃 커밋 메시지는 반드시 한국어로 작성합니다.**
- 예시:
  - `style: 클래식 에메랄드 테마 적용 및 빌드 갱신`
  - `docs: 상세 README.md 문서 추가`
  - `style: 플레이어 설정 버튼 레이아웃 격자형 대칭 개선 및 재빌드`

---

## 기술 스택 및 개발 명령어 (Commands)
- 의존성 설치: `npm install`
- 로컬 개발 서버 실행 (Webpack 모드 권장): `npx next dev --webpack`
- GitHub Pages 배포용 빌드: `npm run build:gh`
