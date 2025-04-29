
# wook_travel 전체 프로젝트 - 해야 할 일 정리

---

## ✅ 프로젝트 구조

- [x] frontend/ (Nuxt 3 + PWA + Apollo Client)
- [x] backend/ (Node.js + Apollo Server + Prisma)
- [x] database/ (Prisma 스키마 관리)
- [x] docs/ (기획서, API 명세, ERD)

---

## ✅ 세팅 완료 목록

- [x] Supabase 설치 및 로컬 서버 실행
- [ ] Supabase Studio 접속 확인
- [ ] Supabase 기본 환경 (.env) 설정

---

## 🚀 해야 할 일 (진행순서)

### 1. Backend 초기 세팅
- [ ] backend 폴더 구조 생성
- [ ] package.json, tsconfig.json 설정
- [ ] .env 파일 작성 (DATABASE_URL, JWT_SECRET)

### 2. Prisma 세팅
- [ ] prisma/schema.prisma 작성 (User, Route, Place 모델)
- [ ] prisma generate 실행
- [ ] prisma migrate dev 실행 (DB 테이블 실제 생성)

### 3. GraphQL 서버 구축
- [ ] Apollo Server 인스턴스 생성
- [ ] context.ts 작성 (JWT 인증 로직)
- [ ] 기본 TypeDefs (User, Route, Place) 작성
- [ ] 기본 Resolvers 작성 (Query, Mutation)

### 4. Nuxt 3 프론트엔드 연결
- [ ] Apollo Client 설정 (@nuxtjs/apollo)
- [ ] GraphQL API 연결 테스트
- [ ] 로그인/회원가입 페이지 구성
- [ ] 장소 등록 / 수정 / 삭제 기능 구성
- [ ] 경로(Route) 생성/조회/삭제 기능 구성

### 5. 추가 작업
- [ ] 인증 처리 (로그인 상태 유지)
- [ ] PWA 오프라인 캐시 설정
- [ ] 지도 연동 (Google Maps or Leaflet)
- [ ] UI/UX 디자인 (TailwindCSS)

---

## 🛠️ 나중에 할 것 (확장 아이디어)

- [ ] 경로 최적화 추천 (Directions API 사용)
- [ ] 루트 공유 초대 기능 추가
- [ ] 테마별 루트 추천 기능 (미식 / 사진 / 관광 등)
- [ ] 위치 기반 실시간 안내 기능
- [ ] 다국어(i18n) 지원 추가

---

# ✨ 최종 목표

> "Nuxt 3 + Apollo Server + Supabase 조합으로 운영 가능한 자유 여행 루트 앱 구축"

