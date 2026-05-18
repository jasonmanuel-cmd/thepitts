import os
import json

album_name = "Jamestown"
artist_name = "The Pitts"

tracks = [
    {"title": "Jamestown", "duration": "PT3M20S", "duration_text": "03:20"},
    {"title": "Mother Mary", "duration": "PT4M21S", "duration_text": "04:21"},
    {"title": "Cash Flow Money", "duration": "PT3M27S", "duration_text": "03:27"},
    {"title": "Wicked Lady", "duration": "PT3M21S", "duration_text": "03:21"},
    {"title": "Sweet Revenge", "duration": "PT4M45S", "duration_text": "04:45"},
    {"title": "Break Me Down", "duration": "PT3M21S", "duration_text": "03:21"},
    {"title": "Lost and Lonely", "duration": "PT4M39S", "duration_text": "04:39"},
    {"title": "Polygraph", "duration": "PT3M53S", "duration_text": "03:53"},
    {"title": "Wasted Away", "duration": "PT5M07S", "duration_text": "05:07"}
]

lyrics_file_map = {
    "Mother Mary": "mother-mary-the-pitts/lyrics.txt",
    "Cash Flow Money": "cash-flow-money-the-pitts/cashflowmoneylyrics.txt",
    "Lost and Lonely": "lost-and-lonely-the-pitts/lostandlonelylyrics.txt",
    "Polygraph": "polygraph-the-pitts/polygraphlyrics.txt"
}

def slugify(text):
    return text.lower().replace(" ", "-")

def get_track_url(title):
    if title == "Jamestown":
        return "/jamestown-song-the-pitts"
    return f"/{slugify(title)}-the-pitts"

def read_lyrics(title):
    if title in lyrics_file_map:
        path = lyrics_file_map[title]
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                return f.read().strip()
    return None

def lyrics_to_html(lyrics_text):
    if not lyrics_text:
        return None
    lines = lyrics_text.split("\n")
    html_parts = []
    for line in lines:
        stripped = line.strip()
        if stripped == "":
            html_parts.append("                <br>")
        elif stripped.startswith("(") and stripped.endswith(")"):
            html_parts.append(f'                <span class="lyrics-section-label">{stripped}</span><br>')
        else:
            html_parts.append(f"                {stripped}<br>")
    return "\n".join(html_parts)

base_url = "https://thepittsband.com"

# ============================================================
# COMMON SNIPPETS
# ============================================================

splash_screen = """<!-- Punk Splash Screen -->
    <div id="splash-screen">
        <div class="punk-bg"></div>
        <div class="splash-content">
            <img src="/pitts-artwork.jpg" alt="The Pitts" class="splash-image">
            <span class="splash-text">THE PITTS</span>
        </div>
    </div>
    <script>
        window.addEventListener('load', () => {
            setTimeout(() => {
                const splash = document.getElementById('splash-screen');
                splash.classList.add('slide-up-out');
                setTimeout(() => splash.style.display = 'none', 600);
            }, 1800);
        });
    </script>"""

def navbar_html(active="epk"):
    epk_link = '<a href="/"'
    if active == "epk":
        epk_link += ' aria-current="page"'
    epk_link += '>EPK</a>'

    album_link = '<a href="/jamestown-the-pitts"'
    if active == "album":
        album_link += ' aria-current="page"'
    album_link += '>Album: Jamestown</a>'

    links = epk_link + album_link
    return f"""<nav class="navbar">
        <a href="/" class="nav-brand">The Pitts</a>
        <div class="nav-links">
            {links}
        </div>
    </nav>"""

def make_page(title_tag, meta_description, schema_obj, content_body, nav_active="epk"):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title_tag}</title>
    <meta name="description" content="{meta_description}">
    <link rel="stylesheet" href="/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <script type="application/ld+json">
    {json.dumps(schema_obj, indent=4)}
    </script>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to content</a>
    {splash_screen}
    {navbar_html(nav_active)}
    <main id="main-content">
        {content_body}
    </main>
    <footer>
        <p>&copy; 2026 The Pitts. All rights reserved.</p>
    </footer>
</body>
</html>"""

def tracklist_html():
    html = '<div class="tracklist">'
    for i, t in enumerate(tracks):
        html += f'<a href="{get_track_url(t["title"])}" class="track-link"><span class="track-num">{i+1}</span> <span class="track-name">{t["title"]}</span> <span class="track-time">{t["duration_text"]}</span></a>'
    html += '</div>'
    return html

# ============================================================
# 1. EPK HOMEPAGE
# ============================================================

epk_hero = """<section class="epk-hero">
            <div class="epk-hero-bg"></div>
            <div class="epk-hero-overlay"></div>
            <div class="epk-hero-content">
                <h1>The Pitts</h1>
                <p class="hero-tagline">Raw rock from the underground. Loud. Unfiltered. Unstoppable.</p>
                <div class="hero-buttons">
                    <a href="#music" class="btn btn-primary">Listen to Jamestown</a>
                    <a href="#contact" class="btn btn-secondary">Book The Pitts</a>
                </div>
                <div class="scroll-indicator">Scroll</div>
            </div>
        </section>"""

pitch_section = """<section class="epk-section">
            <div class="glass-panel pitch-panel">
                <p class="pitch-text">Tired of rock that plays it safe? The Pitts are nine tracks of raw, unfiltered rebellion — blending punk fury with hard-rock hooks and lyrics that don't pull punches. This is music for the misfits, the overlooked, and the loud.</p>
            </div>
        </section>"""

press_quotes_section = """<section class="epk-section">
            <h2 class="section-title">Press</h2>
            <p class="section-subtitle">What people are saying</p>
            <div class="press-quotes">
                <div class="press-card">
                    <blockquote>"A band that reminds you what rock and roll is supposed to sound like — loud, honest, and dangerous."</blockquote>
                    <div class="press-attribution">Press Quote TBD</div>
                </div>
                <div class="press-card">
                    <blockquote>"Lyrics that cut deep and riffs that hit harder. The Pitts are the real thing."</blockquote>
                    <div class="press-attribution">Press Quote TBD</div>
                </div>
            </div>
        </section>"""

bio_section = """<section class="epk-section">
            <h2 class="section-title">About</h2>
            <div class="glass-panel">
                <div class="bio-content">
                    <p>The Pitts deliver a sound rooted in the raw tradition of punk and hard rock. Formed with a simple mission — to write songs that matter and play them loud enough to feel in your chest.</p>
                    <p>Their debut album <strong>Jamestown</strong> is a 9-track statement that pulls no punches. From the politically charged grit of <em>Cash Flow Money</em> to the desperate honesty of <em>Lost and Lonely</em>, every track is a window into a world that refuses to look away.</p>
                    <p>Whether it is a packed club stage or a festival field, The Pitts bring the same relentless energy. This is rock and roll for people who need it.</p>
                </div>
            </div>
        </section>"""

members_section = """<section class="epk-section">
            <h2 class="section-title">Band</h2>
            <div class="members-grid">
                <div class="member-card is-placeholder">
                    <span class="placeholder-badge">Awaiting details</span>
                    <div class="member-photo-placeholder">JM</div>
                    <h3 class="member-name">Name TBD</h3>
                    <p class="member-role">Lead Vocals, Guitar</p>
                    <p class="member-hometown">Hometown TBD</p>
                </div>
                <div class="member-card is-placeholder">
                    <span class="placeholder-badge">Awaiting details</span>
                    <div class="member-photo-placeholder">LG</div>
                    <h3 class="member-name">Name TBD</h3>
                    <p class="member-role">Lead Guitar, Backing Vocals</p>
                    <p class="member-hometown">Hometown TBD</p>
                </div>
                <div class="member-card is-placeholder">
                    <span class="placeholder-badge">Awaiting details</span>
                    <div class="member-photo-placeholder">B</div>
                    <h3 class="member-name">Name TBD</h3>
                    <p class="member-role">Bass</p>
                    <p class="member-hometown">Hometown TBD</p>
                </div>
                <div class="member-card is-placeholder">
                    <span class="placeholder-badge">Awaiting details</span>
                    <div class="member-photo-placeholder">D</div>
                    <h3 class="member-name">Name TBD</h3>
                    <p class="member-role">Drums</p>
                    <p class="member-hometown">Hometown TBD</p>
                </div>
            </div>
        </section>"""

fans_section = """<section class="epk-section">
            <h2 class="section-title">For Fans Of</h2>
            <div class="fan-badges">
                <span class="fan-badge">Queens of the Stone Age</span>
                <span class="fan-badge">The Black Keys</span>
                <span class="fan-badge">Rage Against the Machine</span>
                <span class="fan-badge">The Hives</span>
                <span class="fan-badge">The Stooges</span>
                <span class="fan-badge">Dead Kennedys</span>
            </div>
        </section>"""

album_section = f"""<section class="epk-section">
            <h2 class="section-title">Jamestown — Tracklist</h2>
            <p class="section-subtitle">Dive into the full album</p>
            {tracklist_html()}
            <div class="section-cta">
                <a href="/jamestown-the-pitts" class="btn btn-primary">View Full Album</a>
            </div>
        </section>"""

streaming_section = """<section id="music" class="epk-section">
            <h2 class="section-title">Stream Jamestown</h2>
            <p class="section-subtitle">Listen on your platform of choice</p>
            <div class="streaming-buttons">
                <a href="#" class="btn btn-primary btn-lg" aria-disabled="true">Listen on Spotify</a>
                <a href="#" class="btn btn-secondary btn-lg" aria-disabled="true">Listen on Apple Music</a>
            </div>
        </section>"""

video_section = """<section class="epk-section">
            <h2 class="section-title">Live</h2>
            <div class="video-wrapper">
                <div class="video-placeholder">
                    <span class="placeholder-icon">&#9654;</span>
                    <p class="placeholder-label">Live video coming soon</p>
                </div>
            </div>
        </section>"""

shows_section = """<section class="epk-section">
            <h2 class="section-title">Shows</h2>
            <div class="shows-placeholder">
                <p>Upcoming show dates and past performances listing coming soon.</p>
            </div>
        </section>"""

downloads_section = """<section class="epk-section">
            <h2 class="section-title">Press Kit</h2>
            <p class="section-subtitle">Download promo photos and artwork</p>
            <div class="downloads-grid">
                <a href="/bandpic.webp" download class="download-card">
                    <div class="download-thumb" style="background-image: url('/bandpic.webp')"></div>
                    <p class="download-label">Press Photo</p>
                    <span class="btn btn-secondary btn-sm">Download</span>
                </a>
                <a href="/pitts-artwork.jpg" download class="download-card">
                    <div class="download-thumb" style="background-image: url('/pitts-artwork.jpg')"></div>
                    <p class="download-label">Album Artwork</p>
                    <span class="btn btn-secondary btn-sm">Download</span>
                </a>
            </div>
        </section>"""

contact_section = """<section id="contact" class="epk-section">
            <h2 class="section-title">Booking & Contact</h2>
            <div class="contact-card glass-panel">
                <h3>Get in Touch</h3>
                <a href="mailto:booking@thepittsband.com" class="contact-email">booking@thepittsband.com</a>
                <div class="social-links">
                    <a href="#" class="social-link is-placeholder" aria-label="Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" class="social-link is-placeholder" aria-label="TikTok">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4h5"></path></svg>
                    </a>
                    <a href="#" class="social-link is-placeholder" aria-label="YouTube">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.3 29.3 0 0 0 1 12a29.3 29.3 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.3 29.3 0 0 0 23 12a29.3 29.3 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                    </a>
                    <a href="#" class="social-link is-placeholder" aria-label="Facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                </div>
            </div>
        </section>"""

stage_plot_section = """<section class="epk-section">
            <h2 class="section-title">Stage Plot & Tech</h2>
            <div class="stage-plot-placeholder">
                <span class="placeholder-badge">Coming soon</span>
                <p>Stage plot diagram and input list details to be added.</p>
            </div>
        </section>"""

epk_content = f"""
        {epk_hero}
        {pitch_section}
        {press_quotes_section}
        {bio_section}
        {members_section}
        {fans_section}
        {album_section}
        {streaming_section}
        {video_section}
        {shows_section}
        {downloads_section}
        {contact_section}
        {stage_plot_section}
"""

epk_schema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": artist_name,
    "description": "Raw rock band blending punk energy with hard-hitting lyrics.",
    "album": [{
        "@type": "MusicAlbum",
        "name": album_name,
        "url": f"{base_url}/jamestown-the-pitts"
    }]
}

epk_html = make_page(
    title_tag=f"{artist_name} | Official EPK & Press Kit",
    meta_description=f"Official electronic press kit for {artist_name}. Stream the album Jamestown, view live videos, download press photos, and book the band.",
    schema_obj=epk_schema,
    content_body=epk_content,
    nav_active="epk"
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(epk_html)
print("  Generated: index.html (EPK homepage)")

# ============================================================
# 2. ALBUM PAGE
# ============================================================

album_schema = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    "name": album_name,
    "byArtist": {
        "@type": "MusicGroup",
        "name": artist_name
    },
    "image": f"{base_url}/pitts-artwork.jpg",
    "track": [
        {
            "@type": "MusicRecording",
            "name": t["title"],
            "url": f"{base_url}{get_track_url(t['title'])}",
            "duration": t["duration"]
        } for t in tracks
    ]
}

album_content = f"""
        <section class="hero glass-panel">
            <div class="hero-content">
                <img src="/pitts-artwork.jpg" alt="Jamestown by The Pitts - Album Cover" class="album-cover">
                <div class="hero-text">
                    <h1>Jamestown by The Pitts</h1>
                    <p class="tagline">The complete album experience. Listen to the official tracks, explore the lyrics, and dive deep into the music.</p>
                    <div class="listen-links">
                        <a href="#" class="btn btn-primary">Listen on Spotify</a>
                        <a href="#" class="btn btn-secondary">Listen on Apple Music</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="tracks-section">
            <h2>Tracklist</h2>
            {tracklist_html()}
        </section>
"""

album_dir = "jamestown-the-pitts"
os.makedirs(album_dir, exist_ok=True)
with open(os.path.join(album_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(make_page(
        title_tag=f"{album_name} – {artist_name} | Official Album",
        meta_description=f"Listen to {album_name} by {artist_name}. Explore the full tracklist, lyrics, and official streaming links for the latest album.",
        schema_obj=album_schema,
        content_body=album_content,
        nav_active="album"
    ))
print("  Generated: jamestown-the-pitts/index.html (Album page)")

# ============================================================
# 3. TRACK PAGES
# ============================================================

for track in tracks:
    track_url = get_track_url(track["title"])
    track_dir = track_url.strip("/")
    os.makedirs(track_dir, exist_ok=True)

    track_schema = {
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": track["title"],
        "byArtist": {
            "@type": "MusicGroup",
            "name": artist_name
        },
        "inAlbum": {
            "@type": "MusicAlbum",
            "name": album_name,
            "url": f"{base_url}/jamestown-the-pitts"
        },
        "duration": track["duration"],
        "image": f"{base_url}/pitts-artwork.jpg"
    }

    other_tracks_html = '<div class="other-tracks">'
    for t in tracks:
        if t["title"] != track["title"]:
            other_tracks_html += f'<a href="{get_track_url(t["title"])}" class="pill-link">{t["title"]}</a>'
    other_tracks_html += '</div>'

    real_lyrics = read_lyrics(track["title"])
    if real_lyrics:
        lyrics_html = lyrics_to_html(real_lyrics)
        lyrics_block = f"""<div class="lyrics">
                    {lyrics_html}
                </div>"""
    else:
        lyrics_block = f"""<div class="lyrics-placeholder">
                    <span class="placeholder-badge">Coming soon</span>
                    <p>Lyrics for "{track['title']}" are not yet available. Check back for the full text.</p>
                </div>"""

    track_content = f"""
        <section class="hero glass-panel track-hero">
            <div class="hero-content">
                <img src="/pitts-artwork.jpg" alt="{track['title']} by The Pitts - Jamestown Album Cover" class="album-cover track-cover">
                <div class="hero-text">
                    <h1>{track['title']} by The Pitts</h1>
                    <p class="opening-copy">{track['title']} by The Pitts is a track from the album Jamestown. Listen to the official track, read the lyrics, and explore more songs from the album.</p>
                </div>
            </div>
        </section>

        <section class="media-section">
            <div class="embed-container">
                <h3>Listen on Spotify</h3>
                <div class="placeholder-embed spotify-embed">
                    <p>Spotify Player for {track['title']}</p>
                </div>
            </div>
            <div class="embed-container">
                <h3>Listen on Apple Music</h3>
                <div class="placeholder-embed apple-embed">
                    <p>Apple Music Player for {track['title']}</p>
                </div>
            </div>
            <div class="embed-container">
                <h3>Watch on YouTube</h3>
                <div class="placeholder-embed youtube-embed">
                    <p>YouTube Video for {track['title']}</p>
                </div>
            </div>
        </section>

        <section class="lyrics-section glass-panel">
            <h2>{track['title']} Lyrics</h2>
            {lyrics_block}
        </section>

        <section class="explore-section">
            <h2>More from Jamestown</h2>
            {other_tracks_html}
            <div class="back-to-album">
                <a href="/jamestown-the-pitts" class="btn btn-primary">Back to Full Album</a>
            </div>
        </section>
"""

    with open(os.path.join(track_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(make_page(
            title_tag=f"{track['title']} – {artist_name} | {album_name}",
            meta_description=f"Listen to {track['title']} by {artist_name} from the album {album_name}. Read the official lyrics, stream the track, and watch the video.",
            schema_obj=track_schema,
            content_body=track_content,
            nav_active="track"
        ))
    status = " (with real lyrics)" if real_lyrics else ""
    print(f"  Generated: {track_dir}/index.html ({track['title']}){status}")

print("\nGeneration complete!")
