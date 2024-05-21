import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from '@zag-js/types'
import type { StateMachine as S } from '@zag-js/core'

export interface ValueChangeDetails {
  value: boolean
}

interface PublicContext extends CommonProperties {
  value: boolean
  onValueChange?: (details: ValueChangeDetails) => void
}

export type UserDefinedContext = RequiredBy<PublicContext, 'id'>

type ComputedContext = Readonly<{}>

interface PrivateContext {}

export interface MachineContext extends PublicContext, ComputedContext, PrivateContext {}

export interface MachineState {
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
