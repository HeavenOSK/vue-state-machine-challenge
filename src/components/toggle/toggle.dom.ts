import { createScope, isSafari, MAX_Z_INDEX } from '@zag-js/dom-query'
import type { MachineContext as Ctx } from './toggle.types'

export const dom = createScope({
  getRootId: (ctx: Ctx) => `toggle:root${ctx.id}`,
  getKnobId: (ctx: Ctx) => `toggle:knob:${ctx.id}`
})
