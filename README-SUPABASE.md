# Supabase 연결 설정

1. Supabase 프로젝트를 생성합니다.
2. SQL Editor에서 `supabase/schema.sql` 전체를 실행합니다.
3. Authentication → Providers → Google에서 Google OAuth를 활성화합니다.
4. Authentication → URL Configuration의 Site URL을 GitHub Pages 주소로 설정하고 Redirect URLs에 다음 주소를 추가합니다.
   - `https://yjh31415.github.io/Tacloban-mission/`
5. Project Settings → API에서 Project URL과 anon/public key를 복사합니다.
6. GitHub 저장소 Settings → Secrets and variables → Actions에 다음 Repository secrets를 등록합니다.
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
7. Actions workflow의 Build 단계 전에 아래 환경 변수를 전달하도록 설정합니다.
   - `env: VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}`
   - `VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}`
8. Google 계정으로 웹사이트에 한 번 로그인하면 profiles 행이 생성됩니다. SQL Editor에서 해당 이메일의 role을 admin으로 변경합니다.

주의: 프론트엔드에는 anon/public key만 사용합니다. service_role key는 절대 GitHub 저장소나 브라우저에 넣지 마세요.
