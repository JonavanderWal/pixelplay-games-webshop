import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Gamepad2, Menu, X, Search, Mail, ShoppingCart, Zap, Moon, Sun } from 'lucide-react';
import './styles.css';
import { games } from './data/games';

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('pixelplay-theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('pixelplay-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function navigate(newPage) {
    setPage(newPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormMessage('Bedankt! Je bericht is verstuurd');
    event.currentTarget.reset();
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="site-header">
        <nav className="navbar" aria-label="Hoofdnavigatie">
          <button className="logo-button" onClick={() => navigate('home')}>
            <Gamepad2 size={28} aria-hidden="true" />
            PixelPlay
          </button>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span>{darkMode ? 'Light' : 'Dark'}</span>
            </button>

            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu openen of sluiten" aria-expanded={menuOpen}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <ul className={menuOpen ? 'nav-links show' : 'nav-links'}>
            <li><button className={page === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Home</button></li>
            <li><button className={page === 'games' ? 'active' : ''} onClick={() => navigate('games')}>Games</button></li>
            <li><button className={page === 'contact' ? 'active' : ''} onClick={() => navigate('contact')}>Contact</button></li>
          </ul>
        </nav>
      </header>

      <main>
        {page === 'home' && (
          <>
            <section className="hero">
              <div className="hero-content">
                <p className="label">Nieuwe Nintendo webshop</p>
                <h1>Ontdek jouw volgende Nintendo avontuur</h1>
                <p>
                  PixelPlay Games is een beginnende games-webshop met een vrolijk Nintendo-thema.
                  Wij bieden populaire Nintendo Switch games aan met duidelijke informatie
                  en een makkelijke manier om contact op te nemen.
                </p>

                <div className="hero-buttons">
                  <button className="btn primary" onClick={() => navigate('games')}>Bekijk games</button>
                  <button className="btn secondary" onClick={() => navigate('contact')}>Neem contact op</button>
                </div>
              </div>

              <div className="hero-card" aria-label="Nintendo Switch illustratie">
                <div className="switch-shape">
                  <span className="joycon blue"></span>
                  <span className="screen">PIXEL<br />PLAY</span>
                  <span className="joycon red"></span>
                </div>
              </div>
            </section>

            <section className="features" aria-label="Website eigenschappen">
              <article className="feature-card">
                <ShoppingCart aria-hidden="true" />
                <h2>Populaire games</h2>
                <p>Van platformers tot avonturengames: de games worden duidelijk getoond met foto, tekst en prijs.</p>
              </article>

              <article className="feature-card">
                <Zap aria-hidden="true" />
                <h2>Snel en responsive</h2>
                <p>Ik heb deze webapp gebouwd met Vite en React en hij past zich aan mobiel, tablet en desktop aan.</p>
              </article>

              <article className="feature-card">
                <Search aria-hidden="true" />
                <h2>SEO-vriendelijk</h2>
                <p>De webapp gebruikt meta-tags, goede structuur, alt-teksten en structured data.</p>
              </article>
            </section>
          </>
        )}

        {page === 'games' && (
          <>
            <section className="page-intro">
              <p className="label">Ons aanbod</p>
              <h1>Nintendo games</h1>
              <p>
                Bekijk het aanbod van de webshop. Gebruik de zoekfunctie of klik op een gamekaart
                om de afbeelding groter te bekijken.
              </p>

              <div className="search-box">
                <Search aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Zoek op game of beschrijving..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  aria-label="Zoeken naar games"
                />
              </div>
            </section>

            <section className="games-grid" aria-label="Game overzicht">
              {filteredGames.map((game) => (
                <article className="game-card" key={game.id} onClick={() => setSelectedGame(game)}>
                  <img src={game.image} alt={game.alt} loading="lazy" />
                  <div className="game-info">
                    <h2>{game.title}</h2>
                    <p>{game.description}</p>
                    <span className="price">{game.price}</span>
                  </div>
                </article>
              ))}
            </section>

            {filteredGames.length === 0 && <p className="empty-state">Geen games gevonden. Probeer een andere zoekterm.</p>}
          </>
        )}

        {page === 'contact' && (
          <>
            <section className="page-intro">
              <p className="label">Vragen?</p>
              <h1>Contact opnemen</h1>
              <p>
                Heb je een vraag over een game, bestelling of de webshop? Vul het formulier hieronder in.
              </p>
            </section>

            <section className="contact-layout">
              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Naam</label>
                <input id="name" name="name" type="text" placeholder="Vul je naam in" required />

                <label htmlFor="email">E-mailadres</label>
                <input id="email" name="email" type="email" placeholder="naam@email.nl" required />

                <label htmlFor="subject">Onderwerp</label>
                <input id="subject" name="subject" type="text" placeholder="Waar gaat je bericht over?" />

                <label htmlFor="message">Bericht</label>
                <textarea id="message" name="message" rows="6" placeholder="Typ hier je bericht..." required></textarea>

                <button className="btn primary" type="submit">
                  <Mail size={18} aria-hidden="true" />
                  Verstuur bericht
                </button>

                {formMessage && <p className="form-message">{formMessage}</p>}
              </form>

              <aside className="contact-card">
                <h2>PixelPlay Games</h2>
                <p><strong>Email:</strong> info@pixelplaygames.nl</p>
                <p><strong>Openingstijden:</strong> Maandag t/m vrijdag van 09:00 tot 17:00</p>
                <p><strong>Specialisatie:</strong> Nintendo Switch games en accessoires.</p>
              </aside>
            </section>
          </>
        )}
      </main>

      {selectedGame && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedGame.title}>
          <button className="close-lightbox" onClick={() => setSelectedGame(null)} aria-label="Lightbox sluiten">×</button>
          <img src={selectedGame.image} alt={selectedGame.alt} />
          <p>{selectedGame.title}</p>
        </div>
      )}

      <footer>
        <p>&copy; 2026 PixelPlay Games. Keuzedeel Front-end Development.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
