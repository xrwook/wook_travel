# 🎨 WOOK_TRAVEL 디자인 가이드

---

## 테마 & 토널

- **머니터의 서비스와 다양한 역시에 해당**하는 구조로, 바이코스숍 아이콘을 이용해 시각적 통조성 가진 UI 구성
- 조명: 개인의 열심 + 정리된 전략의 방향

---

## 텍스트 & 포니트

- **글꼴**: `Pretendard`, `Inter`, `system-ui`
- **글꼴 사이즈**:
  - Header: 20~24px / bold
  - Body: 14~16px / regular
  - Sub: 12px / muted gray

---

## 색상 파레트 (Color Palette)

| 용도 | 키 색상 | HEX |
|--------|---------|------|
| Primary | Blue | `#1E88E5` |
| Secondary | Light Blue | `#90CAF9` |
| Background | Light Gray | `#FAFAFA` |
| Surface (Card, List) | White | `#FFFFFF` |
| Accent | Coral Orange | `#FF7043` |
| Text (Main) | Black | `#212121` |
| Text (Muted) | Gray | `#757575` |

---

## 기능별 UI 구성

### 해당 화면: 메인 (고정)

#### 밀림코지에 (메인 화면) UI 구성

1. **Header**
   - 태그: "장소 등록 및 관리"
   - 보조 텍스트: "여행지를 추가하세요"

2. **MapView (Google Maps API)**
   - 현재 위치 구분
   - 추가한 장소 링크로 표시
   - 클릭 시: "장소 추가" 메인 목록 or 메모 토입

3. **Floating Button (+)**
   - 위치: 바닥 오른쪽 or 원형 FAB
   - 클릭 시 AddPlaceModal 하시 방지

4. **Place List (Card UI)**
   - 개별 장소가 컨테이너 형식
     - 이름
     - 주소 (Optional)
     - 메모 아이콘
     - 버튼 (변경, 삭제)
     - 드래그 핸들 (≡)

5. **Create Route Button**
   - 단일 CTA 버튼
   - 무한제 위치 거리 없이 많은 개수의 장소가 있을 경우 허리적 활성화

6. **Bottom TabBar**
   - Explore / My Routes / Profile
   - Icon + Text
   - 선택중인 테라 하위 강조 색상

---

## 게임스쿨 / Tailwind 및 기반 시스템

| 요소 | Tailwind 키워드 |
|--------|-----------------|
| 글꼴 | `font-sans`, `text-lg`, `font-medium` |
| 텍스트 상대적 지정 | `text-gray-900`, `text-gray-500` |
| 하단 탭 | `fixed bottom-0 w-full flex justify-around` |
| 버튼 | `rounded-xl px-6 py-3 bg-blue-600 text-white` |
| 컨테이너 | `rounded-lg shadow p-4 bg-white` |

---

## 값이 바로 보이는 포인트

- 그림자가 아니라, 적당한 값과 개별 기능과 도구들이 이미 표시되도록 가능
- 개별 장소 리스트는 작은 Card UI 전문
- 화면과 전체 복도는 가능한 포인트와 열력적인 기호가 원칙

---

# ✅ 결별

> **WOOK_TRAVEL 디자인 시스템은 가장 간단하고 자주 사용할 구조가 명확해야 한다.**

- 지도 기반 UX
- 컨테이너/메모/버튼/리스트 매우 가볍게 구현
- PWA, 화면과 열기 기능, 게임스�리형 방식 관행

