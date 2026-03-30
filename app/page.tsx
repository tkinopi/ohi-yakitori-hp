'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'reserve'

export default function Home() {
  const [active, setActive] = useState<Tab>('top')

  const navItems: { key: Tab; label: string }[] = [
    { key: 'top', label: 'TOP' },
    { key: 'menu', label: 'お品書き' },
    { key: 'info', label: '店舗情報' },
    { key: 'reserve', label: 'ご予約' },
  ]

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <header style={{
        background: 'rgba(12,9,5,0.95)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '0 40px',
        backdropFilter: 'blur(8px)',
      }}>
        <div className="site-header-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 40, height: 40, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🔥</div>
            <div>
              <p style={{ fontSize: 22, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--text)' }}>炭火焼鳥 おうひ</p>
              <p style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-light)' }}>大阪・福島 ／ YAKITORI ŌHI</p>
            </div>
          </div>
          <nav className="site-nav">
            {navItems.map(({ key, label }) => (
              <button key={key} onClick={() => setActive(key)} style={{
                whiteSpace: 'nowrap', background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px 20px', fontSize: 14, letterSpacing: '0.08em',
                color: active === key ? 'var(--accent)' : 'var(--text-light)',
                borderBottom: active === key ? '2px solid var(--accent)' : '2px solid transparent',
                transition: 'all 0.2s', fontFamily: "'Shippori Mincho B1', serif",
              }}>{label}</button>
            ))}
          </nav>
        </div>
      </header>

      {active === 'top' && (
        <>
          <section className="hero-grid" style={{ minHeight: '88vh' }}>
            <div className="hero-pad" style={{ padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 40, left: 40, width: 1, height: 120, background: 'var(--accent)' }} />
              <div style={{ paddingLeft: 24 }}>
                <p style={{ fontSize: 11, letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: 24, textTransform: 'uppercase' }}>Charcoal Grilled Yakitori — Osaka Fukushima</p>
                <h1 className="hero-title" style={{ color: 'var(--text)', marginBottom: 8 }}>炭火と職人。</h1>
                <h1 className="hero-title" style={{ color: 'var(--accent)', marginBottom: 40 }}>一串入魂。</h1>
                <p style={{ fontSize: 15, lineHeight: 2.2, color: 'var(--text-light)', maxWidth: 380, marginBottom: 48 }}>
                  JR福島駅近く、細い路地に佇む炭火焼鳥専門店。<br />
                  備長炭でじっくりと焼き上げる一本一本に、<br />
                  職人の技と魂が宿ります。
                </p>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <button onClick={() => setActive('menu')} style={{ whiteSpace: 'nowrap', background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', padding: '14px 36px', fontSize: 15, letterSpacing: '0.1em', minHeight: 50, fontFamily: "'Shippori Mincho B1', serif" }}>お品書きを見る</button>
                  <button onClick={() => setActive('reserve')} style={{ whiteSpace: 'nowrap', background: 'none', color: 'var(--gold)', border: '1px solid var(--gold)', cursor: 'pointer', padding: '14px 36px', fontSize: 15, letterSpacing: '0.1em', minHeight: 50, fontFamily: "'Shippori Mincho B1', serif" }}>ご予約はこちら</button>
                </div>
              </div>
            </div>
            <div className="hero-deco" style={{ background: 'linear-gradient(160deg, #1A0E08 0%, #2D1208 50%, #0C0905 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,88,32,0.4) 0%, transparent 70%)', filter: 'blur(30px)' }} />
              <div style={{ textAlign: 'center', zIndex: 1, padding: 40 }}>
                <p style={{ fontSize: 96, lineHeight: 1 }}>🍢</p>
                <p style={{ fontSize: 48, color: 'rgba(232,88,32,0.15)', fontWeight: 700, letterSpacing: '0.08em', marginTop: 16 }}>おうひ</p>
                <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 32 }}>
                  {['備長炭', '地酒', '職人技'].map(t => (
                    <span key={t} style={{ fontSize: 12, letterSpacing: '0.15em', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '6px 14px' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div style={{ background: 'var(--bg-light)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '18px 40px' }}>
            <div className="info-bar" style={{ maxWidth: 1100, margin: '0 auto' }}>
              <span style={{ color: 'var(--text-light)', fontSize: 13, letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>📍 大阪市福島区福島5丁目6-50</span>
              <span style={{ color: 'var(--text-light)', fontSize: 13, whiteSpace: 'nowrap' }}>🕐 17:00 〜 翌2:00（不定休）</span>
              <span style={{ color: 'var(--text-light)', fontSize: 13, whiteSpace: 'nowrap' }}>📞 06-6131-6337</span>
            </div>
          </div>
          <section style={{ padding: '80px 0' }}>
            <div className="main-pad">
              <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 12, textAlign: 'center' }}>CRAFT &amp; SOUL</p>
              <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 56, color: 'var(--text)' }}>おうひのこだわり</h2>
              <div className="grid-3">
                {[
                  { icon: '🔥', title: '備長炭で焼く', body: '職人が備長炭の火加減を一本一本調整。遠赤外線が素材の旨みを引き出し、外はカリッ、中はジューシーに仕上げます。' },
                  { icon: '🍶', title: '厳選の地酒', body: '全国から選り抜いた日本酒・焼酎を常時10種以上ご用意。焼鳥との相性を考え抜いたペアリングをお楽しみいただけます。' },
                  { icon: '🏮', title: '路地裏の隠れ家', body: 'JR福島駅から歩いてすぐの路地奥に佇む小さなお店。落ち着いた雰囲気の中で、ゆったりとした大人の時間を。' },
                ].map(f => (
                  <div key={f.icon} style={{ background: 'var(--bg-mid)', padding: '48px 32px', borderTop: '2px solid var(--accent)' }}>
                    <p style={{ fontSize: 40, marginBottom: 20 }}>{f.icon}</p>
                    <h3 style={{ fontSize: 20, marginBottom: 16, color: 'var(--text)', letterSpacing: '0.08em' }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 2 }}>{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {active === 'menu' && (
        <section style={{ padding: '60px 0 100px' }}>
          <div className="main-pad">
            <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 12 }}>お品書き</p>
            <h2 className="section-title" style={{ marginBottom: 48, color: 'var(--text)' }}>串焼き</h2>
            <div className="grid-2-menu" style={{ marginBottom: 48 }}>
              {[
                { name: 'ももたれ', price: '¥180', desc: '柔らかな鶏もも肉を特製タレで' },
                { name: 'もも塩', price: '¥180', desc: '素材の旨みを塩で引き立てる' },
                { name: 'つくね', price: '¥200', desc: '自家製タレで仕上げた職人つくね' },
                { name: 'なんこつ', price: '¥180', desc: '食感が楽しいコリコリなんこつ' },
                { name: '砂肝', price: '¥180', desc: '備長炭でカリッと香ばしく' },
                { name: 'ねぎま', price: '¥200', desc: '鶏肉と長ネギの黄金コンビ' },
                { name: 'かわ', price: '¥180', desc: 'パリパリに焼き上げた鶏皮' },
                { name: 'とり串盛り合わせ（5本）', price: '¥850', desc: 'おすすめ5種の盛り合わせ' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '24px 28px', background: 'var(--bg-mid)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  <div>
                    <p style={{ fontSize: 17, color: 'var(--text)', marginBottom: 4, letterSpacing: '0.05em' }}>{item.name}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-light)' }}>{item.desc}</p>
                  </div>
                  <span style={{ whiteSpace: 'nowrap', fontSize: 20, color: 'var(--accent)', fontWeight: 600 }}>{item.price}</span>
                </div>
              ))}
            </div>
            <h2 className="section-title" style={{ marginBottom: 32, color: 'var(--text)' }}>一品料理・おつまみ</h2>
            <div className="grid-3" style={{ marginBottom: 48 }}>
              {[
                { name: '焼き鳥出汁の玉子焼き', price: '¥480' },
                { name: 'とり刺し（ささみ/胸）', price: '¥580' },
                { name: 'とりわさ', price: '¥480' },
                { name: 'もつ煮', price: '¥580' },
                { name: 'おにぎり（梅/鮭）', price: '¥280' },
                { name: '〆の親子丼', price: '¥680' },
              ].map(item => (
                <div key={item.name} style={{ background: 'var(--bg-mid)', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontSize: 15, color: 'var(--text)', letterSpacing: '0.03em' }}>{item.name}</p>
                  <span style={{ whiteSpace: 'nowrap', fontSize: 17, color: 'var(--gold)', marginLeft: 12 }}>{item.price}</span>
                </div>
              ))}
            </div>
            <h2 className="section-title" style={{ marginBottom: 32, color: 'var(--text)' }}>お飲み物</h2>
            <div className="grid-3">
              {[
                { cat: '日本酒', items: ['地酒グラス ¥550〜', '地酒一合 ¥800〜', 'ボトルキープ応相談'] },
                { cat: 'ビール・焼酎', items: ['生ビール ¥580', '焼酎（芋/麦）¥480〜', 'ハイボール ¥480'] },
                { cat: 'ソフトドリンク', items: ['ウーロン茶 ¥280', 'コーラ ¥280', 'ジュース各種 ¥280'] },
              ].map(d => (
                <div key={d.cat} style={{ background: 'var(--bg-mid)', padding: '32px', borderTop: '2px solid var(--accent)' }}>
                  <p style={{ fontSize: 18, letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 20 }}>{d.cat}</p>
                  {d.items.map((item, i) => (
                    <p key={i} style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid var(--border-light)' }}>{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {active === 'info' && (
        <section style={{ padding: '60px 0 100px' }}>
          <div className="main-pad">
            <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 12 }}>SHOP INFO</p>
            <h2 className="section-title" style={{ marginBottom: 48, color: 'var(--text)' }}>店舗情報・アクセス</h2>
            <div className="grid-2">
              <div style={{ background: 'var(--bg-mid)', padding: '40px' }}>
                {[
                  { label: '店名', value: '炭火焼鳥 おうひ' },
                  { label: '住所', value: '〒553-0003\n大阪府大阪市福島区\n福島5丁目6-50' },
                  { label: '電話番号', value: '06-6131-6337' },
                  { label: '営業時間', value: '17:00 〜 翌2:00\n（不定休）' },
                  { label: 'アクセス', value: 'JR東西線「新福島」駅 徒歩3分\nJR「福島」駅 徒歩5分\n阪神「福島」駅 徒歩6分' },
                  { label: '席数', value: '約20席（カウンター席あり）' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', gap: 24, padding: '16px 0', borderBottom: '1px solid var(--border-light)' }}>
                    <span style={{ minWidth: 100, fontSize: 12, letterSpacing: '0.12em', color: 'var(--accent)', paddingTop: 2 }}>{row.label}</span>
                    <span style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--bg-mid)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 380, borderTop: '2px solid var(--accent)', padding: 40 }}>
                <p style={{ fontSize: 48, marginBottom: 16 }}>🏮</p>
                <p style={{ fontSize: 20, color: 'var(--text)', letterSpacing: '0.1em', marginBottom: 8 }}>炭火焼鳥 おうひ</p>
                <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.9, textAlign: 'center', marginBottom: 28 }}>福島5丁目6-50<br />JR新福島駅 徒歩3分</p>
                <a href="https://maps.google.com/?q=34.6964207,135.4881869" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', padding: '13px 28px', background: 'var(--accent)', color: '#fff', textDecoration: 'none', fontSize: 14, letterSpacing: '0.08em', minHeight: 48, whiteSpace: 'nowrap' }}>
                  Google マップで開く
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {active === 'reserve' && (
        <section style={{ padding: '60px 0 100px' }}>
          <div className="main-pad">
            <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 12 }}>RESERVATION</p>
            <h2 className="section-title" style={{ marginBottom: 16, color: 'var(--text)' }}>ご予約・お問い合わせ</h2>
            <p style={{ fontSize: 15, color: 'var(--text-light)', lineHeight: 2, marginBottom: 48, maxWidth: 560 }}>
              お席のご予約はお電話にて承っております。<br />
              当日のご来店も歓迎ですが、確実なご予約をおすすめします。
            </p>
            <div className="contact-grid">
              <div style={{ background: 'var(--bg-mid)', padding: '48px 40px', borderTop: '3px solid var(--accent)' }}>
                <p style={{ fontSize: 13, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 24 }}>お電話でのご予約</p>
                <p style={{ fontSize: 40, color: 'var(--text)', marginBottom: 12, letterSpacing: '0.05em', wordBreak: 'break-all' }}>06-6131-6337</p>
                <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.9, marginBottom: 28 }}>受付時間：17:00 〜 翌2:00<br />（不定休）</p>
                <a href="tel:0661316337" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'var(--accent)', color: '#fff', textDecoration: 'none', fontSize: 15, letterSpacing: '0.08em', minHeight: 50, whiteSpace: 'nowrap', fontFamily: "'Shippori Mincho B1', serif" }}>
                  📞 今すぐ電話する
                </a>
              </div>
              <div style={{ background: 'var(--bg-mid)', padding: '48px 40px', borderTop: '3px solid var(--gold)' }}>
                <p style={{ fontSize: 13, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: 24 }}>ご来店について</p>
                <p style={{ fontSize: 16, color: 'var(--text)', marginBottom: 20, lineHeight: 2 }}>
                  当日のご来店も歓迎しております。満席の場合はお断りすることもございますので、事前のご予約をおすすめします。
                </p>
                <div style={{ padding: '20px', background: 'var(--bg)', borderLeft: '2px solid var(--gold)', marginTop: 8 }}>
                  <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 2 }}>
                    <strong style={{ color: 'var(--gold)' }}>営業時間：</strong>17:00 〜 翌2:00<br />
                    <strong style={{ color: 'var(--gold)' }}>定休日：</strong>不定休<br />
                    <strong style={{ color: 'var(--gold)' }}>座席数：</strong>約20席（カウンター含む）
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer style={{ background: 'var(--bg-mid)', borderTop: '1px solid var(--border)', color: 'var(--text-light)', padding: '40px', textAlign: 'center' }}>
        <p style={{ fontSize: 22, color: 'var(--text)', letterSpacing: '0.15em', marginBottom: 8 }}>炭火焼鳥 おうひ</p>
        <p style={{ fontSize: 12, letterSpacing: '0.08em', marginBottom: 4 }}>〒553-0003 大阪府大阪市福島区福島5丁目6-50</p>
        <p style={{ fontSize: 12 }}>TEL: 06-6131-6337 ｜ 17:00 – 翌2:00</p>
        <p style={{ fontSize: 11, marginTop: 20, opacity: 0.4 }}>© 2026 炭火焼鳥 おうひ. All rights reserved.</p>
      </footer>
    </div>
  )
}
