export type PreviewType = 'diagram' | 'code' | 'metric' | 'image'

export interface ProjectPreview {
  id: string
  type: PreviewType
  label: string
  content: string
}

export interface Project {
  id: string
  title: string
  problemStatement: string
  role: string
  context: string
  stack: string[]
  problem: string
  solution: string
  outcome: string
  previews: ProjectPreview[]
}
