# OpenPlan Assignment

오픈플랜 프론트엔드 과제 프로젝트입니다.

## 프로젝트 구조

이 프로젝트는 Turborepo를 사용한 모노레포 구조입니다.

```
openplan-assignment/
├── apps/
│   ├── web/              # Next.js 웹 애플리케이션
│   └── storybook/        # Storybook 워크스페이스
├── packages/
│   └── ui/               # 공유 UI 컴포넌트 패키지
└── package.json
```

## 기술 스택

### 필수 기술

- **Turborepo**: 모노레포 관리
- **pnpm**: 패키지 매니저
- **Next.js 14**: 웹 애플리케이션 프레임워크
- **React 18**: UI 라이브러리
- **TypeScript**: 타입 안정성
- **Tailwind CSS**: 스타일링

### 추가 기능

- **TanStack Query**: 서버 상태 관리
- **Zustand**: 클라이언트 전역 상태 관리
- **Storybook**: 컴포넌트 문서화 및 테스트

## 설치 및 실행

### 사전 요구사항

- Node.js 18 이상
- pnpm 10 이상

### 설치

```bash
pnpm install
```

### 개발 서버 실행

#### Web 애플리케이션

```bash
pnpm dev
# 또는
pnpm --filter @openplan/web dev
```

웹 앱은 http://localhost:3000 에서 실행됩니다.

#### Storybook

```bash
pnpm storybook
# 또는
pnpm --filter @openplan/storybook storybook
```

Storybook은 http://localhost:6006 에서 실행됩니다.

### 빌드

```bash
pnpm build
```

## 주요 기능

### 필수 기능

- ✅ Turborepo 모노레포 구조
- ✅ Web 및 Storybook 워크스페이스
- ✅ 공유 UI 패키지 (Button 컴포넌트)
- ✅ Button 컴포넌트의 다양한 상태별 Storybook 스토리
- ✅ 사진 조회 API 통신 (picsum.photos)
- ✅ 라우팅: `/` (메인) → `/result` (결과)
- ✅ API 응답 데이터 전달

### 추가 기능

- ✅ TanStack Query를 사용한 API 데이터 상태 관리
- ✅ Zustand를 사용한 전역 상태 관리 (persist 미들웨어)
- ✅ 새로고침 시에도 데이터 유지 (localStorage)
- ✅ 버튼 클릭 디바운스 처리 (500ms)
- ✅ 로딩 애니메이션 (스피너)
- ✅ 사진 조회 이력이 있으면 자동으로 `/result` 페이지로 이동
- ✅ 스켈레톤 UI (로딩 상태)
- ✅ 사진 조회 이력 없이 `/result` 접근 시 1초 후 메인으로 리다이렉트
- ✅ 사진 조회 페이지 배경을 조회한 사진으로 설정
- ✅ 404 페이지 구현
- ✅ ESLint 및 Prettier 설정

## 프로젝트 구조 설명

### apps/web

Next.js 14 App Router를 사용한 웹 애플리케이션입니다.

- `/`: 사진 조회 메인 페이지
- `/result`: 사진 정보 결과 페이지
- `/api/photo`: 사진 조회 API 라우트

### apps/storybook

UI 컴포넌트의 Storybook 워크스페이스입니다.

- Button 컴포넌트의 다양한 상태와 변형을 확인할 수 있습니다.

### packages/ui

공유 UI 컴포넌트 패키지입니다.

- `Button`: 다양한 variant, size, 상태를 지원하는 버튼 컴포넌트

## 배포

### Vercel 배포

Web 워크스페이스는 Vercel을 통해 배포할 수 있습니다.

1. Vercel에 프로젝트 연결
2. Root Directory를 `apps/web`로 설정
3. Build Command: `pnpm build`
4. Output Directory: `.next`

## 개발 가이드

### 코드 포맷팅

```bash
pnpm format
```

### 린팅

```bash
pnpm lint
```

## 라이센스

MIT
