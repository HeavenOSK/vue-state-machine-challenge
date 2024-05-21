import { createMachine } from '@zag-js/core'

type ToggleContext = Record<string, unknown>

type ToggleEvent = { type: 'Toggle' }

type ToggleState = { value: 'inactive' } | { value: 'active' }

export const toggleMachine = createMachine<ToggleContext, ToggleState, ToggleEvent>({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCWAdgIYDGyeAbmAMQAq6WYA2gAwC6ioADqrHuagKcQAD0QBGAKwAOHOIBsAdkkBmAEzSFMluoA0IAJ4SVLHABZ1agJwrpa6-fsBfJ-rQZsOUuSp0G2Vg4kEB4+ASFgsQQpWQVldU15bT1DRE05TWl5NRUrNUlJFhYzF1cQAlQIOGF3RmFQ-jxBYSiAWnl9IwRWyRwrfv7xRRs1cSsWcRc3f1xCb0owet5G5sjEMzVOtPkceTMzeXFRjXHJGymQWs95qiWwpojQKLV5KxwTs0HpSVH1FS2ENI3uJ9tkHJ95JDJKUnEA */
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { Toggle: 'active' }
    },
    active: {
      on: { Toggle: 'inactive' }
    }
  }
})
