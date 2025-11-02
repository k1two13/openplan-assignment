# OpenPlan Assignment

오픈플랜 프론트엔드 과제 프로젝트입니다.

## 프로젝트 구조

이 프로젝트는 Turborepo를 사용한 모노레포 구조입니다.

```
openplan-assignment/
├── apps/
│   ├── web/
│   └── storybook/
├── packages/
│   └── ui/
└── package.json
```

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

## 기술 스택

- **Turborepo**: 모노레포 관리
- **pnpm**: 패키지 매니저
- **Next.js 14**: 웹 애플리케이션 프레임워크
- **React 18**: UI 라이브러리
- **TypeScript**: 타입 안정성
- **Tailwind CSS**: 스타일링

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

## 배포

### Vercel 배포

https://openplan-assignment-web-rose.vercel.app/

## 페이지 상세 설명

### Result Page (`apps/web/app/result/page.tsx`)

사진 정보를 표시하는 결과 페이지입니다. 메인 페이지에서 사진을 조회한 후 자동으로 이동되는 페이지로, 조회한 사진과 메타데이터를 표시합니다.

#### 주요 기능

1. **페이지 접근 제어**
   - `hasViewed` 상태를 확인하여 사진 조회 이력이 없는 경우 1초 후 메인 페이지(`/`)로 자동 리다이렉트
   - Zustand store의 `persist` 미들웨어를 통해 localStorage에 데이터 저장 (새로고침 시에도 유지)

2. **"이전" 버튼 기능**
   - 버튼 클릭 시 `onClickBackButton` 핸들러 실행
   - `useDebounce` 훅으로 500ms 디바운스 처리
   - `setHasViewed(false)`로 조회 이력 초기화 후 메인 페이지로 이동

3. **로딩 상태**
   - 데이터가 없을 때 `Skeleton` 컴포넌트로 로딩 상태 표시
   - 이미지, 메타데이터 카드, 버튼 각각에 대해 스켈레톤 제공

#### 상태 관리

**Zustand Store (`usePhotoStore`)**

- `photo`: 조회한 사진 데이터 (`Photo | null`)
- `hasViewed`: 사진 조회 이력 여부 (`boolean`)
- `setHasViewed`: 조회 이력 상태 업데이트

**로컬 상태**

- `clicked`: 버튼 클릭 상태 (디바운스 처리용)
- `buttonSize`: 버튼 크기 (`'medium' | 'large'`)
- `debouncedClicked`: 디바운스된 클릭 상태

#### 주요 훅

- `useDebounce`: 클릭 이벤트 디바운스 처리 (500ms), 중복 클릭 방지
- `useRouter`: Next.js 라우터, 프로그래매틱 네비게이션 (`router.push`)

#### 스타일링

**Tailwind CSS 커스텀 브레이크포인트**

- `mobile`: 375px
- `tab`: 768px
- `desktop`: 1440px
