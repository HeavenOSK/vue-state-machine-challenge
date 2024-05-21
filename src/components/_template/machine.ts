import { createMachine } from '@zag-js/core'
import { type MachineContext, type MachineState, type UserDefinedContext } from './types'
import { compact, isEqual } from '@zag-js/utils'

export function machine(userContext: UserDefinedContext) {
  const ctx = compact(userContext)
  return createMachine<MachineContext, MachineState>(
    {
      /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswGIBqAggDICqAogHQAqA8gOJ1FkDaADALqKgAOqsAlsn6oAdlxAAPRAEZpAFgoBOAEwBWAMzqN6gBw65i1aoA0IAJ4zlAXyum0GbBX4RsOAGKoAxgFdYbTkggvAJCouJSCNJaStKsqjrqaoo6AGyqAOwm5ojKyooUKYpRerJyUayKNnboWGAUAGZevpA4AEKY3gBO-uLBgsJigRHSqqwU6oopeazKFQms0ummFpE6Y3JyFSlTqnKqigc2tiAiqBBw4va1vXz9YUOIALTSy4iK6hRJsrnSynIpVRAV0czmwNxCA3CiDkS2yq1USlY6nSrHSyImKWkAOOwLqjR8sEg4Lug1AET+Y0U6XSOnSsVU8h0yTkr1WOgom2RqPRkyxRysQA */
      id: 'toggle',
      initial: 'idle',
      context: {
        ...ctx,
        value: ctx.value ?? false,
        disabled: ctx.disabled ?? false,
        onValueChange: ctx.onValueChange
      },
      on: {
        'VALUE.TOGGLE': {
          actions: ['toggleValue']
        }
      },
      states: {
        idle: {
          on: {
            Focus: 'focused'
          }
        },
        focused: {
          on: {
            Blur: 'idle'
          }
        }
      }
    },
    {
      actions: {
        toggleValue(ctx) {
          const nextValue = !ctx.value
          set.value(ctx, nextValue)
        }
      }
    }
  )
}

const invoke = {
  onChange: (ctx: MachineContext) => {
    ctx.onValueChange?.({
      value: ctx.value
    })
  }
}

const set = {
  value: (ctx: MachineContext, value: boolean) => {
    if (isEqual(ctx.value, value)) return
    ctx.value = value
    invoke.onChange(ctx)
  }
}
