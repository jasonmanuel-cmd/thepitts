export interface Track {
  title: string
  slug: string
  duration: string
  durationText: string
  path: string
}

export interface StreamingLink {
  platform: string
  url: string
}

export const tracks: Track[] = [
  { title: 'Jamestown', slug: 'jamestown-song-the-pitts', duration: 'PT3M20S', durationText: '03:20', path: '/jamestown-song-the-pitts' },
  { title: 'Mother Mary', slug: 'mother-mary-the-pitts', duration: 'PT4M21S', durationText: '04:21', path: '/mother-mary-the-pitts' },
  { title: 'Cash Flow Money', slug: 'cash-flow-money-the-pitts', duration: 'PT3M27S', durationText: '03:27', path: '/cash-flow-money-the-pitts' },
  { title: 'Wicked Lady', slug: 'wicked-lady-the-pitts', duration: 'PT3M21S', durationText: '03:21', path: '/wicked-lady-the-pitts' },
  { title: 'Sweet Revenge', slug: 'sweet-revenge-the-pitts', duration: 'PT4M45S', durationText: '04:45', path: '/sweet-revenge-the-pitts' },
  { title: 'Break Me Down', slug: 'break-me-down-the-pitts', duration: 'PT3M21S', durationText: '03:21', path: '/break-me-down-the-pitts' },
  { title: 'Lost and Lonely', slug: 'lost-and-lonely-the-pitts', duration: 'PT4M39S', durationText: '04:39', path: '/lost-and-lonely-the-pitts' },
  { title: 'Polygraph', slug: 'polygraph-the-pitts', duration: 'PT3M53S', durationText: '03:53', path: '/polygraph-the-pitts' },
  { title: 'Wasted Away', slug: 'wasted-away-the-pitts', duration: 'PT5M07S', durationText: '05:07', path: '/wasted-away-the-pitts' },
]

export const lyricsMap: Record<string, string> = {
  'Jamestown': 'jamestown-the-pitts/jamestownlyrics.txt',
  'Mother Mary': 'mother-mary-the-pitts/lyrics.txt',
  'Cash Flow Money': 'cash-flow-money-the-pitts/cashflowmoneylyrics.txt',
  'Lost and Lonely': 'lost-and-lonely-the-pitts/lostandlonelylyrics.txt',
  'Wicked Lady': 'Wicked-lady-the-pitts/wickedlady.txt',
  'Break Me Down': 'break-me-down-the-pitts/breakmedownlyrics.txt',
  'Wasted Away': 'Wasted-away-the-pitts/Wastedawaylyrics.txt',
  'Polygraph': 'polygraph-the-pitts/polygraphlyrics.txt',
}

export const streamingLinks: Record<string, StreamingLink[]> = {
  'Jamestown': [
    { platform: 'Spotify', url: 'https://open.spotify.com/track/4CQLEaiCQ0JvnL78BdPAB5?si=4AUfSjg1TbCvX_ZImEWzug' },
    { platform: 'Apple Music', url: 'https://music.amazon.com/albums/B0GRJZGPHH?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_dnt2YiKEoei2wE4LyiiOKuAuJ&trackAsin=B0GRK8GW9Z' },
    { platform: 'YouTube Music', url: 'https://music.youtube.com/watch?v=oD0c41Slldc&si=_PLAna7abdzKBgHi' },
    { platform: 'Tidal', url: 'https://tidal.com/album/504958098/u' },
    { platform: 'Pandora', url: 'https://pandora.app.link/TEZxXH8yH3b' },
  ],
}

export const getTrackBySlug = (slug: string): Track | undefined =>
  tracks.find(t => t.slug === slug)

export const comparableArtists = [
  'Gaslight Anthem',
  'The Replacements',
  'Tom Petty and the Heartbreakers',
  'The Menzingers',
  'Lucero',
]
