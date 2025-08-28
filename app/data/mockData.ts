import { CategoryGroup } from '../types';

export const categoryGroups: CategoryGroup[] = [
  {
    name: "Skills/Best Dancers",
    categories: [
      {
        id: 'salsa',
        name: 'Salsa',
        description: 'Cuban & Latin American rhythm',
        icon: '🔥',
        dancers: [
          {
            id: 'dancer1',
            name: 'Sofia Rodriguez',
            city: 'Kuala Lumpur',
            photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Natural groove that makes everyone stop and watch'
          },
        ]
      },
      {
        id: 'bachata',
        name: 'Bachata',
        description: 'Dominican sensual flow',
        icon: '💫',
        dancers: []
      },
      {
        id: 'kizomba_semba',
        name: 'Kizomba/Semba',
        description: 'Angolan connection & groove',
        icon: '🌊',
        dancers: [
          {
            id: 'kiz1',
            name: 'Carlos Santos',
            city: 'Kuala Lumpur',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Smooth flow and authentic Angolan roots'
          },
          {
            id: 'kiz2',
            name: 'Marina Silva',
            city: 'Singapore',
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Grace and connection that tells a story'
          },
          {
            id: 'kiz3',
            name: 'João Miguel',
            city: 'Bangkok',
            photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Traditional semba energy meets modern style'
          },
          {
            id: 'kiz4',
            name: 'Aisha Kumar',
            city: 'Mumbai',
            photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Fusion of Indian grace with African rhythm'
          },
          {
            id: 'kiz5',
            name: 'Rafael Mendes',
            city: 'Jakarta',
            photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Master of ginga and musical interpretation'
          },
          {
            id: 'kiz6',
            name: 'Elena Rodriguez',
            city: 'Manila',
            photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Bringing warmth and joy to every dance'
          }
        ]
      },
      {
        id: 'tarraxo',
        name: 'Tarraxo',
        description: 'Urban Angolan expression',
        icon: '⚡',
        dancers: []
      },
      {
        id: 'kompa',
        name: 'Kompa',
        description: 'Haitian rhythmic celebration',
        icon: '🎵',
        dancers: []
      },
      {
        id: 'urban_kiz',
        name: 'Urban Kiz',
        description: 'Modern fusion & creativity',
        icon: '🔮',
        dancers: [
          {
            id: 'uk1',
            name: 'David Chen',
            city: 'Kuala Lumpur',
            photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Innovative moves with urban flair'
          },
          {
            id: 'uk2',
            name: 'Sophia Tan',
            city: 'Singapore',
            photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Creative expression meets technical precision'
          },
          {
            id: 'uk3',
            name: 'Marcus Lee',
            city: 'Bangkok',
            photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Pushing boundaries with every step'
          }
        ]
      },
      {
        id: 'breakthrough_dancer',
        name: 'Breakthrough Dancer',
        description: 'Rising star of the year',
        icon: '🚀',
        dancers: []
      },
    ]
  },
  {
    name: "Music",
    categories: [
      {
        id: 'best_dj_kizomba',
        name: 'Best DJ Kizomba',
        description: 'Setting the vibe for Kizomba lovers',
        icon: '🎧',
        dancers: [
          {
            id: 'dj1',
            name: 'DJ Paulo',
            city: 'Kuala Lumpur',
            photo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Master of smooth transitions and perfect energy'
          },
          {
            id: 'dj2',
            name: 'DJ Maya',
            city: 'Singapore',
            photo: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Creating magical moments on the dance floor'
          },
          {
            id: 'dj3',
            name: 'DJ Ricardo',
            city: 'Jakarta',
            photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'From traditional to modern, always on point'
          }
        ]
      },
      {
        id: 'best_dj_bachata',
        name: 'Best DJ Bachata',
        description: 'Spinning the best Bachata tracks',
        icon: '🎶',
        dancers: []
      },
      {
        id: 'best_dj_salsa',
        name: 'Best DJ Salsa',
        description: 'Bringing the heat to the Salsa floor',
        icon: '🎤',
        dancers: []
      },
      {
        id: 'best_live_musician',
        name: 'Best Live Musician',
        description: 'Creating magic with live music',
        icon: '🎸',
        dancers: []
      },
      {
        id: 'best_music_producer',
        name: 'Best Music Producer',
        description: 'Crafting the sounds of tomorrow',
        icon: '🎹',
        dancers: []
      },
      {
        id: 'best_remixer',
        name: 'Best Remixer',
        description: 'Reimagining our favorite tracks',
        icon: '🎛️',
        dancers: []
      },
      {
        id: 'best_event_music_curation',
        name: 'Best Event Music Curation',
        description: 'Creating unforgettable musical journeys',
        icon: '🎼',
        dancers: []
      },
    ]
  },
  {
    name: "Social",
    categories: [
      {
        id: 'best_newcomer',
        name: 'Best Newcomer',
        description: 'Making a mark in the community',
        icon: '🌟',
        dancers: []
      },
      {
        id: 'best_welcomer_host',
        name: 'Best Welcomer/Host',
        description: 'Making everyone feel at home',
        icon: '🤗',
        dancers: []
      },
      {
        id: 'safe_dancer',
        name: 'Safe Dancer',
        description: 'Creating a safe space on the dance floor',
        icon: '🛡️',
        dancers: []
      },
      {
        id: 'connection_expert',
        name: 'Connection Expert',
        description: 'Master of the dance connection',
        icon: '🤝',
        dancers: []
      },
      {
        id: 'tricks_expert',
        name: 'Tricks Expert',
        description: 'Wowing us with their creativity',
        icon: '🤸',
        dancers: []
      },
      {
        id: 'always_available_dancer',
        name: 'Always Available Dancer',
        description: 'Always ready for a dance',
        icon: '💃',
        dancers: []
      },
      {
        id: 'community_builder',
        name: 'Community Builder',
        description: 'Bringing the community together',
        icon: '👨‍👩‍👧‍👦',
        dancers: [
          {
            id: 'cb1',
            name: 'Angela Martinez',
            city: 'Kuala Lumpur',
            photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Organizer of weekly socials and workshops'
          },
          {
            id: 'cb2',
            name: 'James Wong',
            city: 'Singapore',
            photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Building bridges between dance communities'
          },
          {
            id: 'cb3',
            name: 'Fatima Ali',
            city: 'Mumbai',
            photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Creating inclusive spaces for all dancers'
          }
        ]
      },
      {
        id: 'best_teacher_instructor',
        name: 'Best Teacher/Instructor',
        description: 'Inspiring the next generation of dancers',
        icon: '👩‍🏫',
        dancers: [
          {
            id: 'teach1',
            name: 'Master André',
            city: 'Kuala Lumpur',
            photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: '15 years of teaching excellence'
          },
          {
            id: 'teach2',
            name: 'Instructor Lisa',
            city: 'Bangkok',
            photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Patient, clear, and inspiring teaching style'
          },
          {
            id: 'teach3',
            name: 'Coach Roberto',
            city: 'Manila',
            photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
            votes: 0,
            description: 'Technique and soul in perfect balance'
          }
        ]
      },
      {
        id: 'most_improved_dancer',
        name: 'Most Improved Dancer',
        description: 'Showing incredible growth and dedication',
        icon: '📈',
        dancers: []
      },
      {
        id: 'social_dance_ambassador',
        name: 'Social Dance Ambassador',
        description: 'Representing the best of our community',
        icon: '🌍',
        dancers: []
      },
    ]
  }
];