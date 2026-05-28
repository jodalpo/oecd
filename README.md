# 🏌️‍♂️ 골프 OECD (Golf OECD)

골프 라운딩 내기 게임 중 하나인 **OECD 게임**의 벌칙 점수와 벌금을 실시간으로 기록하고 정산해 주는 웹 애플리케이션입니다. 모바일 기기에서도 한눈에 쉽게 기록할 수 있도록 최적화된 반응형 UI를 제공합니다.

---

## 🎨 주요 특징

- **Classic Emerald 디자인**: 골프 코스의 잔디와 자연 친화적인 감성을 닮은 세련된 에메랄드/포레스트 그린 톤앤매너를 적용했습니다.
- **실시간 정산 및 요약**: 플레이어별 벌칙이 추가될 때마다 하단의 최종 정산(Totals) 카드에 즉각 반영되어 골머리 아픈 정산을 한 번에 해결합니다.
- **최대 5인 플레이어 설정**: 동적으로 인원을 추가하거나 이름을 지정할 수 있습니다 (최대 5명).
- **룰별 벌금 및 커스텀 룰 추가**:
  - 기본 6대 벌칙(오비, 해저드, 멀리건, 벙커, 쓰리퍼트, 트리플보기)의 금액을 자유롭게 변경할 수 있습니다.
  - 사용자가 현장 상황에 맞춰 원하는 커스텀 룰(예: 원펏 보너스, 양파 등)과 금액을 무제한으로 동적 추가/제거할 수 있습니다.
- **안전한 데이터 보존**: 게임 도중 창을 닫거나 새로고침을 하더라도 `localStorage`를 통해 입력했던 플레이어 명단, 룰 금액 설정, 18홀 스코어 데이터가 안전하게 자동 저장 및 보존됩니다.
- **다양한 데이터 리셋 기능**: 
  - `전체 초기화`: 플레이어 이름과 룰 설정을 포함한 모든 데이터를 완전히 지웁니다.
  - `스코어 기록 초기화`: 플레이어 명단과 금액 설정은 놔두고, 18개 홀의 벌칙 기록만 비웁니다.
  - `홀별 초기화`: 특정 홀에 입력된 데이터만 개별로 비울 수 있습니다.

---

## 🛠️ 기술 스택

- **Framework**: Next.js (Pages Router)
- **Language**: JavaScript (React 19)
- **Styling**: Tailwind CSS v3 (CSS Variables 기반 디자인 토큰 관리)
- **Deployment**: GitHub Pages (`docs/` 폴더 대상 정적 호스팅)

---

## 📂 프로젝트 구조

```
├── pages/
│   ├── _app.js         # 글로벌 스타일 (globals.css) 주입
│   ├── _document.js    # HTML 뼈대 정의 및 파비콘 등 메타데이터 정의
│   └── index.js        # 메인 페이지 및 핵심 비즈니스 로직
├── src/
│   └── components/
│       ├── Header.js        # 헤더 그라디언트 배너 컴포넌트
│       ├── PlayerSetup.js   # 플레이어 이름 입력 및 전체 리셋 컴포넌트
│       ├── RuleSetup.js     # 벌금 수정 및 커스텀 룰 추가 컴포넌트
│       ├── Scorecard.js     # 1~18홀별 벌칙 배지 등록/삭제 컴포넌트
│       └── Totals.js        # 실시간 집계 카드 컴포넌트
├── styles/
│   └── globals.css     # CSS Variables 정의 및 리셋 스타일
├── public/
│   └── favicon.ico      # 파비콘
├── docs/                # GitHub Pages 배포용 정적 빌드 폴더 (Git 관리 대상)
├── next.config.js       # basePath 설정 ('/oecd') 및 Export 설정
├── tailwind.config.js   # CSS Variables를 Tailwind 컬러 테마로 맵핑
└── package.json         # 의존성 및 실행 스크립트 정의
```

---

## 💻 로컬 개발 환경 실행 방법

### Prerequisites

- Node.js 18.x 이상
- npm 또는 yarn

### 1. 의존성 패키지 설치
```bash
npm install
```

### 2. 개발 서버 구동 (Webpack 권장)
Next.js 15/16 버전에서 `basePath` 설정을 사용하는 환경에서는 Turbopack 캐시 루프가 생길 수 있으므로, 아래의 **Webpack 모드** 실행을 적극 권장합니다.
```bash
npx next dev --webpack
```

### 3. 브라우저 접속
서버 구동 완료 후 아래의 로컬 주소로 접속해 주세요.
👉 **[http://localhost:3000/oecd/](http://localhost:3000/oecd/)**  
*(next.config.js의 `basePath` 설정에 따라 하위 주소 `/oecd/` 경로로 접속하셔야 정상 작동합니다.)*

---

## 🚀 GitHub Pages 배포 방법

이 프로젝트는 GitHub Pages에서 `docs/` 폴더 경로를 웹 루트로 서비스하도록 구성되어 있습니다.

소스를 수정하고 원격 저장소에 배포하기 전에 반드시 아래 빌드 명령어를 실행하여 `docs/` 폴더의 정적 빌드 결과물을 최신 상태로 갱신해 주어야 합니다.

```bash
npm run build:gh
```
*(위 스크립트 실행 시 `next build && next export`가 수행되고, 결과물이 `docs/` 폴더로 모인 후 깃허브 페이지 라우팅 우회를 위한 `.nojekyll` 파일이 자동 생성됩니다.)*

빌드가 완료되면 변경된 `docs/` 폴더를 포함하여 Git 커밋 후 푸시해 주세요:
```bash
git add .
git commit -m "style: apply classic emerald theme and rebuild"
git push origin <your-branch>
```