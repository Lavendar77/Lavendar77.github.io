export type PreviewType = 'diagram' | 'code' | 'metric' | 'image'

export interface ProjectPreview {
  id: string
  type: PreviewType
  label: string
  content: string
}

export interface Project {
  id: string
  order: number
  title: string
  problemStatement: string
  role: string
  context: string
  stack: string[]
  problem: string
  solution: string
  outcome: string
  previews: ProjectPreview[]
  repo?: string
  demo?: string
  date: string // Format: "YYYY" or "YYYY-MM" or "YYYY-MM-DD"
  company: {
    name: string
    logo?: string
  }
}

export interface SpecialMention {
  id: string
  order: number
  name: string
  role: string
  summary: string
  bullets: string[]
  stack: string[]
  demo?: string
  /** If true, show a "No longer live" badge (e.g. company folded). */
  noLongerLive?: boolean
}
