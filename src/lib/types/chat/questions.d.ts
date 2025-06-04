export type QuestionType = 'text' | 'textarea' | 'radio' | 'checkbox'
export interface Question {
  id: string
  question?: string
  type: QuestionType
  options?: Array<{
    id: string
    label: string
    value: string
  }>
  placeholder?: string
  contextHint?: string
}
export interface WizardState {
  currentStepIndex: number
  answers: Record<string, any>
  selectedSections: string[]
  completedSteps: number[]
}
//# sourceMappingURL=questions.d.ts.map
