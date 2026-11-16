# Tacloban Mission · TKMC

타클로반 선교 안내 웹사이트의 프론트엔드 프로젝트입니다.

## 기술 스택
- React 18 + Vite
- Framer Motion
- Lucide React
- GitHub Pages + GitHub Actions

## 로컬 개발
```bash
npm install
npm run dev
```

## 빌드
```bash
npm run build
npm run preview
```

## GitHub Pages 배포
1. GitHub 저장소의 **Settings → Pages**로 이동합니다.
2. Build and deployment의 Source를 **GitHub Actions**로 설정합니다.
3. `main` 브랜치에 push하면 Actions가 빌드 및 배포합니다.

배포 주소: https://yjh31415.github.io/Tacloban-mission/

## 현재 구현 범위
- Tropical / Ocean / Youth / Pastel 테마 전환
- 반응형 홈 화면
- 글래스모피즘 스타일의 슬라이드 메뉴
- 선교 소개, 타클로반 정보, 일정, 준비물, 언어 학습, Q&A, 신청 안내 화면

각 콘텐츠 페이지, Google 로그인, 관리자 기능, 파일 업로드 및 데이터베이스 연동은 후속 단계에서 구현합니다. GitHub Pages는 정적 호스팅이므로 인증·데이터 저장 기능에는 Supabase 등 외부 백엔드가 필요합니다.