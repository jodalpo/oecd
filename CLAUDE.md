# 프로젝트 개발 규칙 (Development Rules)

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
