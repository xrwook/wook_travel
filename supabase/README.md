```sh
    supabase.exe 환경변수 등록
```


# WOOK_TRABEL - Supabase 테이블 설계

---

## ✅ 테이블 개요

| 테이블명 | 설명 |
|---------|------|
| users   | 사용자 정보 저장 |
| routes  | 여행 경로 저장 |
| places  | 여행 경로에 포함된 장소 저장 |

---

## 🗂️ 테이블 상세 설계

### 1. users 테이블

| 컬럼명 | 타입 | 설명 | 제약조건 |
|-------|------|------|---------|
| id | uuid | 사용자 고유 ID | Primary Key, default gen_random_uuid() |
| email | text | 사용자 이메일 | Unique |
| name | text | 사용자 이름 | Nullable |

---

### 2. routes 테이블

| 컬럼명 | 타입 | 설명 | 제약조건 |
|-------|------|------|---------|
| id | uuid | 경로 ID | Primary Key, default gen_random_uuid() |
| title | text | 경로 제목 | Not Null |
| description | text | 경로 설명 | Nullable |
| creator_id | uuid | 생성자 ID | Foreign Key (users.id) |
| created_at | timestamp | 생성 시간 | Default now() |

---

### 3. places 테이블

| 컬럼명 | 타입 | 설명 | 제약조건 |
|-------|------|------|---------|
| id | uuid | 장소 ID | Primary Key, default gen_random_uuid() |
| name | text | 장소 이름 | Not Null |
| address | text | 장소 주소 | Nullable |
| lat | float8 | 위도 | Not Null |
| lng | float8 | 경도 | Not Null |
| memo | text | 메모 | Nullable |
| order | int4 | 장소 순서 | Not Null |
| route_id | uuid | 속한 경로 ID | Foreign Key (routes.id) |
| created_at | timestamp | 생성 시간 | Default now() |

---

## 🔗 테이블 관계 (ERD)

```plaintext
users (1) --- (N) routes (1) --- (N) places
```

- 하나의 사용자(users)는 여러 개의 경로(routes)를 가질 수 있음
- 하나의 경로(routes)는 여러 개의 장소(places)를 가질 수 있음

---

## ✨ 참고사항

- Foreign Key는 "ON DELETE CASCADE" 설정 추천
- UUID 기본값은 `gen_random_uuid()` 사용
- created_at은 `now()` 기본값으로 자동 설정

---

# ✅ 다음 작업
- Supabase Studio를 이용해 테이블 생성
- FK 관계 설정 (users.id ↔ routes.creator_id, routes.id ↔ places.route_id)





API URL: http://127.0.0.1:54321
GraphQL URL: http://127.0.0.1:54321/graphql/v1
S3 Storage URL: http://127.0.0.1:54321/storage/v1/s3
DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
Studio URL: http://127.0.0.1:54323
Inbucket URL: http://127.0.0.1:54324
JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
S3 Access Key: 625729a08b95bf1b7ff351a663f3a23c
S3 Secret Key: 850181e4652dd023b7a98c58ae0d2d34bd487ee0cc3254aed6eda37307425907
S3 Region: local