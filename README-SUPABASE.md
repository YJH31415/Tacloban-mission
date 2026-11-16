# Supabase 연결 설정

1. Supabase 프로젝트의 SQL Editor에서 `supabase/schema.sql` 전체를 실행합니다.
2. Settings → API Keys에서 Project URL과 Publishable key(`sb_publishable_...`)를 복사합니다.
3. GitHub 저장소 Settings → Secrets and variables → Actions에 다음 Repository secrets를 등록합니다.
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
4. Authentication → Providers에서 Google 로그인을 설정합니다.
5. Authentication → URL Configuration의 Site URL을 `https://yjh31415.github.io`로 설정하고 Redirect URLs에 `https://yjh31415.github.io/Tacloban-mission/`를 추가합니다.
6. Google 계정으로 웹사이트에 한 번 로그인하면 profiles 행이 생성됩니다. SQL Editor에서 해당 이메일의 role을 admin으로 변경합니다.

Google OAuth의 Authorized redirect URI에는 Supabase Google provider 화면에 표시되는 callback URL을 입력합니다.

주의: 브라우저에는 Publishable key만 사용합니다. Secret key는 절대 GitHub 저장소나 브라우저에 넣지 마세요.
