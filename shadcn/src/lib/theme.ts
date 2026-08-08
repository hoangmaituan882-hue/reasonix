import { useEffect, useState } from 'react'

export type Direction = 'graphite' | 'aurora' | 'slate' | 'carbon' | 'nocturne' | 'amber'

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true
    const saved = localStorage.getItem('rx-theme')
    return saved ? saved === 'dark' : true
  })
  const [direction, setDirection] = useState<Direction>(() => {
    if (typeof window === 'undefined') return 'graphite'
    const saved = localStorage.getItem('rx-direction') as Direction | null
    return saved || 'graphite'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.setAttribute('data-direction', direction)
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
    localStorage.setItem('rx-theme', dark ? 'dark' : 'light')
    localStorage.setItem('rx-direction', direction)
  }, [dark, direction])

  return { dark, setDark, direction, setDirection }
}

export const DIRECTIONS: { id: Direction; label: string; accent: string }[] = [
  { id: 'graphite', label: '石墨', accent: '#ff6a3d' },
  { id: 'aurora', label: '极光', accent: '#8b7cff' },
  { id: 'slate', label: '石板', accent: '#4d8df6' },
  { id: 'carbon', label: '碳', accent: '#2dd4bf' },
  { id: 'nocturne', label: '夜曲', accent: '#818cf8' },
  { id: 'amber', label: '琥珀', accent: '#d4632f' },
]
