import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from '@zag-js/types'
import type { StateMachine as S } from '@zag-js/core'

export interface ValueChangeDetails {
  // 更新対象の値を指定する
  value: boolean
}

interface PublicContext extends CommonProperties {
  value: boolean
  disabled: boolean
  onValueChange?: (details: ValueChangeDetails) => void
}

export type UserDefinedContext = RequiredBy<PublicContext, 'id'>

type ComputedContext = Readonly<{}>

interface PrivateContext {}

export interface MachineContext extends PublicContext, ComputedContext, PrivateContext {}

export interface MachineState {
  // 必要に応じて追加する
  value: 'idle' | 'focused'
}

export type State = S.State<MachineContext, MachineState>

export type Send = S.Send<S.AnyEventObject>

export interface MachineApi<T extends PropTypes = PropTypes> {
  value: boolean
  toggleValue(): void
  rootProps: T['button']
  knobProps: T['element']
}
