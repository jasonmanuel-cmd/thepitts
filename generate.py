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

def slugify(text):
    return text.lower().replace(" ", "-")

def get_track_url(title):
    if title == "Jamestown":
        return "/jamestown-song-the-pitts"
    return f"/{slugify(title)}-the-pitts"

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title_tag}</title>
    <meta name="description" content="{meta_description}">
    <link rel="stylesheet" href="/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <script type="application/ld+json">
    {schema_json}
    </script>
</head>
<body>
    <!-- Punk Splash Screen -->
    <div id="splash-screen">
        <div class="punk-bg"></div>
        <div class="splash-content">
            <img src="/pitts-artwork.jpg" alt="The Pitts" class="splash-image">
            <h1 class="splash-text">THE PITTS</h1>
        </div>
    </div>
    <script>
        window.addEventListener('load', () => {{
            setTimeout(() => {{
                const splash = document.getElementById('splash-screen');
                splash.classList.add('slide-up-out');
                setTimeout(() => splash.style.display = 'none', 600); // matches CSS transition
            }}, 1800); // Show splash for 1.8 seconds
        }});
    </script>

    <nav class="navbar">
        <a href="/jamestown-the-pitts" class="nav-brand">The Pitts</a>
        <div class="nav-links">
            <a href="/jamestown-the-pitts">Album: Jamestown</a>
        </div>
    </nav>
    <main>
        {content}
    </main>
    <footer>
        <p>&copy; 2026 The Pitts. All rights reserved.</p>
    </footer>
</body>
</html>
"""

# 1. Generate Main Album Page
album_schema = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    "name": album_name,
    "byArtist": {
        "@type": "MusicGroup",
        "name": artist_name
    },
    "image": "http://localhost:3000/pitts-artwork.jpg",
    "track": [
        {
            "@type": "MusicRecording",
            "name": t["title"],
            "url": f"http://localhost:3000{get_track_url(t['title'])}",
            "duration": t["duration"]
        } for t in tracks
    ]
}

album_tracklist_html = '<div class="tracklist">'
for i, t in enumerate(tracks):
    album_tracklist_html += f'<a href="{get_track_url(t["title"])}" class="track-link"><span class="track-num">{i+1}</span> <span class="track-name">{t["title"]}</span> <span class="track-time">{t["duration_text"]}</span></a>'
album_tracklist_html += '</div>'

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
            {album_tracklist_html}
        </section>
"""

album_dir = f"jamestown-the-pitts"
os.makedirs(album_dir, exist_ok=True)
with open(os.path.join(album_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(html_template.format(
        title_tag="Jamestown – The Pitts | Official Album",
        meta_description="Listen to Jamestown by The Pitts. Explore the full tracklist, lyrics, and official streaming links for the latest album.",
        schema_json=json.dumps(album_schema, indent=4),
        content=album_content
    ))

# 2. Generate Track Pages
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
            "url": "http://localhost:3000/jamestown-the-pitts"
        },
        "duration": track["duration"],
        "image": "http://localhost:3000/pitts-artwork.jpg"
    }

    other_tracks_html = '<div class="other-tracks">'
    for t in tracks:
        if t["title"] != track["title"]:
            other_tracks_html += f'<a href="{get_track_url(t["title"])}" class="pill-link">{t["title"]}</a>'
    other_tracks_html += '</div>'
    
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
                    <!-- Spotify Embed Code Here -->
                    <p>Spotify Player for {track['title']}</p>
                </div>
            </div>
            <div class="embed-container">
                <h3>Listen on Apple Music</h3>
                <div class="placeholder-embed apple-embed">
                    <!-- Apple Music Embed Code Here -->
                    <p>Apple Music Player for {track['title']}</p>
                </div>
            </div>
            <div class="embed-container">
                <h3>Watch on YouTube</h3>
                <div class="placeholder-embed youtube-embed">
                    <!-- YouTube Embed Code Here -->
                    <p>YouTube Video for {track['title']}</p>
                </div>
            </div>
        </section>

        <section class="lyrics-section glass-panel">
            <h2>{track['title']} Lyrics</h2>
            <div class="lyrics">
                <p>
                    (Verse 1)<br>
                    Lyrics for {track['title']} go here...<br>
                    This is a placeholder for the actual lyrics.<br>
                    <br>
                    (Chorus)<br>
                    Singing the song, feeling the vibe<br>
                    {track['title']} coming alive...
                </p>
            </div>
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
        f.write(html_template.format(
            title_tag=f"{track['title']} – The Pitts | {album_name}",
            meta_description=f"Listen to {track['title']} by The Pitts from the album {album_name}. Read the official lyrics, stream the track, and watch the video.",
            schema_json=json.dumps(track_schema, indent=4),
            content=track_content
        ))

print("Generation complete!")
