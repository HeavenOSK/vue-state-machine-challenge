import { createMachine } from 'xstate'

export const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCSAdgIYDGyAlgG5gDEAKgPIDiTAMgKIDaADALqKgADqljkKqAgJAAPRAEYArAA4cAZiUAWBVo3rVqgGwB2IwBoQAT3mruOXQCZ7ATnvGnR+4qMBfb+bQY2DgAgmRUtIwsHDz8SCDCouKScbIIiirqOtp6hibmVghKcjhyRUoGcib2Wk7c9r5+IASoEHBSAVhgUgli5BJSqQC0BvmIw77+6J34xGHU3SK9-SmIGvajhQY4BhoaBtwGOwoGCi4+jR1BoRTzcT1JA4j2RXb23MdOxkr2qrobSk4Srt9octCczg1vEA */
  id: 'toggle',
  initial: 'Inactive',
  states: {
    Inactive: {
      on: { click: 'Active' }
    },
    Active: {
      on: { click: 'Inactive' }
    }
  }
})
