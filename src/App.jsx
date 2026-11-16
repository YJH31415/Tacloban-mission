import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, CalendarDays, Camera, ChevronRight,
  CircleHelp, Clock3, Compass, Globe2, HeartHandshake, Menu,
  Music2, Plane, X, Backpack, Languages, MapPin
} from 'lucide-react'

const menuItems = [
  { label: '자세히 보기', en: 'Mission overview', icon: Compass },
  { label: 'About 타클로반', en: 'Discover Tacloban', icon: Globe2 },
  { label: '일정', en: 'Our schedule', icon: CalendarDays },
  { label: '준비물', en: 'What to pack', icon: Backpack },
  { label: '언어 배우기', en: 'Learn a language', icon: Languages },
  { label: 'Q&A', en: 'Questions & answers', icon: CircleHelp },
  { label: '선교 갤러리', en: 'Mission gallery', icon: Camera },
  { label: 'CCM 플레이리스트', en: 'Worship playlist', icon: Music2 },
]

const themes = {
  Tropical: { main: '#2A5A3B', sub: '#5B8C5A', point: '#F4B41A', bg: '#F9F7F1' },
  Ocean: { main: '#1b4965', sub: '#62b6cb', point: '#fe6d73', bg: '#eef5db' },
  Youth: { main: '#023047', sub: '#Fb8500', point: '#ffb703', bg: '#fafafa' },
  Pastel: { main: '#ffb7b2', sub: '#e0c3fc', point: '#ffd1dc', bg: '#fff9f9' },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState('홈')
  const [themeName, setThemeName] = useState('Tropical')
  const theme = themes[themeName]

  const navigate = (page) => {
    setActivePage(page)
    setMenuOpen(false)
  }

  return (
    <div className="app-shell" style={{ '--main': theme.main, '--sub': theme.sub, '--point': theme.point, '--paper': theme.bg }}>
      <header className="topbar">
        <button className="menu-trigger" aria-label="메뉴 열기" onClick={() => setMenuOpen(true)}>
          <Menu size={23} strokeWidth={1.8} />
        </button>
        <button className="wordmark" onClick={() => navigate('홈')}>
          <span className="wordmark-mark">T</span>
          <span>TKMC<span className="wordmark-dot">.</span></span>
        </button>
        <div className="topbar-right"><span className="edition">MISSION TRIP · 2026</span><span className="status-dot" /></div>
      </header>

      <main>
        {activePage === '홈' ? (
          <section className="hero">
            <div className="hero-image" />
            <div className="hero-shade" />
            <div className="hero-content">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
                <div className="eyebrow"><span /> PHILIPPINES · EASTERN VISAYAS</div>
                <h1>마음이 향하는 곳,<br /><em>타클로반</em>으로.</h1>
                <p className="hero-copy">작은 사랑을 모아 큰 희망을 전하는 여정.<br />우리의 발걸음이 누군가의 내일에 빛이 되기를.</p>
                <div className="hero-actions">
                  <button className="primary-button" onClick={() => navigate('자세히 보기')}>선교 자세히 보기 <ArrowRight size={17} /></button>
                  <button className="text-button" onClick={() => navigate('신청 안내')}>참가 신청 <ChevronRight size={16} /></button>
                </div>
              </motion.div>
            </div>
            <div className="hero-bottom">
              <div className="countdown"><span className="count-label">DEPARTURE COUNTDOWN</span><strong>D<span>-</span>DAY</strong><small>출국일을 기다리고 있어요</small></div>
              <div className="hero-location"><MapPin size={15} /> TACLOBAN CITY, LEYTE <span>11.24° N / 125.00° E</span></div>
            </div>
            <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></div>
          </section>
        ) : (
          <section className="placeholder-page">
            <div className="eyebrow dark"><span /> TACLOBAN MISSION · 2026</div>
            <p className="page-kicker">OUR JOURNEY</p>
            <h1>{activePage}</h1>
            <p className="placeholder-copy">이 페이지는 다음 개발 단계에서 내용을 채울 예정입니다.</p>
            <button className="primary-button" onClick={() => navigate('홈')}>홈으로 돌아가기 <ArrowRight size={17} /></button>
          </section>
        )}

        <section className="intro-strip">
          <div><span className="strip-index">01 / OUR PURPOSE</span><h2>함께하는 마음이<br />변화를 만듭니다.</h2></div>
          <p>타클로반에서 만날 사람들, 함께 나눌 이야기,<br className="desktop-break" /> 그리고 그곳에서 시작될 새로운 마음을 기대합니다.</p>
          <button className="round-link" aria-label="자세히 보기" onClick={() => navigate('자세히 보기')}><ArrowRight size={20} /></button>
        </section>
      </main>

      <footer className="footer"><span>TKMC <b>·</b> TACLOBAN MISSION</span><span>GO WITH LOVE. SERVE WITH JOY.</span></footer>

      <AnimatePresence>
        {menuOpen && <>
          <motion.div className="menu-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} />
          <motion.aside className="side-menu" initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 28, stiffness: 240 }}>
            <div className="menu-head"><div className="menu-brand"><span className="wordmark-mark">T</span><span>TKMC<span className="wordmark-dot">.</span></span></div><button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기"><X /></button></div>
            <div className="menu-overline">EXPLORE THE JOURNEY</div>
            <nav>{menuItems.map((item, index) => {
              const Icon = item.icon
              return <button className="nav-item" key={item.label} onClick={() => navigate(item.label)}><span className="nav-icon"><Icon size={18} /></span><span className="nav-copy"><strong>{item.label}</strong><small>{item.en}</small></span><span className="nav-number">0{index + 1}</span></button>
            })}</nav>
            <div className="menu-bottom"><div className="menu-overline">THEME PREVIEW</div><div className="theme-options">{Object.entries(themes).map(([name, colors]) => <button key={name} className={themeName === name ? 'theme-chip selected' : 'theme-chip'} onClick={() => setThemeName(name)} aria-label={name}><i style={{ background: colors.main }} /><i style={{ background: colors.sub }} /><i style={{ background: colors.point }} /></button>)}</div><p>ONE HEART, ONE PURPOSE.</p></div>
          </motion.aside>
        </>}
      </AnimatePresence>
    </div>
  )
}

export default App