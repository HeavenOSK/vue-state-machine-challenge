import type { NormalizeProps, PropTypes } from '@zag-js/types'
import type { MachineApi, Send, State } from './toggle.types'
import { dom } from './toggle.dom'

export function connect<T extends PropTypes>(
  state: State,
  send: Send,
  normalize: NormalizeProps<T>
): MachineApi<T> {
  const value = state.context.value
  return {
    value: value,
    toggleValue() {
      send({ type: 'VALUE.TOGGLE' })
    },
    rootProps: normalize.button({
      id: dom.getRootId(state.context),
      'data-active': value ? 'true' : 'false',
      onClick: () => send({ type: 'VALUE.TOGGLE' })
    }),
    knobProps: normalize.element({
      id: dom.getKnobId(state.context),
      'data-active': value ? 'true' : 'false'
    })
  }
}
