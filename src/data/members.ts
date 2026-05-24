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
    initials: 'JM',
    name: 'Armando E. Moreno',
    role: 'Lead Vocals, Guitar',
    hometown: 'Ventura, CA',
    photoPath: '/armando.png',
    bioPath: '/Armando E. Moreno/bio.txt',
  },
  {
    initials: 'LG',
    name: 'Name TBD',
    role: 'Lead Guitar, Backing Vocals',
    hometown: 'TBD',
  },
  {
    initials: 'B',
    name: 'Name TBD',
    role: 'Bass',
    hometown: 'TBD',
  },
  {
    initials: 'D',
    name: 'Name TBD',
    role: 'Drums',
    hometown: 'TBD',
  },
]
