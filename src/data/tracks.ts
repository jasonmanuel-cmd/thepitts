export interface Track {
  title: string
  slug: string
  duration: string
  durationText: string
  path: string
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
  'Mother Mary': 'mother-mary-the-pitts/lyrics.txt',
  'Cash Flow Money': 'cash-flow-money-the-pitts/cashflowmoneylyrics.txt',
  'Lost and Lonely': 'lost-and-lonely-the-pitts/lostandlonelylyrics.txt',
  'Polygraph': 'polygraph-the-pitts/polygraphlyrics.txt',
}

export const getTrackBySlug = (slug: string): Track | undefined =>
  tracks.find(t => t.slug === slug)

export const comparableArtists = [
  'Queens of the Stone Age',
  'The Black Keys',
  'Rage Against the Machine',
  'The Hives',
  'The Stooges',
  'Dead Kennedys',
]
