export interface BandMember {
  initials: string
  name: string
  role: string
  hometown: string
  photoPath?: string
  bioPath?: string
}

export const members: BandMember[] = [
  {
    initials: 'M',
    name: 'Matt',
    role: 'Vocals, Guitar',
    hometown: '',
    photoPath: '/matt/mattH.png',
  },
  {
    initials: 'M',
    name: 'Mando',
    role: 'Lead Guitar',
    hometown: 'Ventura, CA',
    photoPath: '/mando/mondo.png',
    bioPath: '/mando/bio.txt',
  },
  {
    initials: 'BV',
    name: 'Billy Von',
    role: 'Rhythm Guitar',
    hometown: '',
    photoPath: '/billy/billyV.png',
  },
  {
    initials: 'A',
    name: 'Abel',
    role: 'Bass Guitar',
    hometown: '',
    photoPath: '/abel/abel.png',
  },
  {
    initials: 'D',
    name: 'David',
    role: 'Drums, Percussion',
    hometown: '',
    photoPath: '/david/david.png',
  },
]
