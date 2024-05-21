import { type Meta, type StoryObj } from '@storybook/vue3'
import Toggle from './Toggle.vue'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      return { args }
    },
    template: '<Toggle v-bind="args" />'
  }),
  args: {
    value: true
  },
  argTypes: {
    onUpdate: {
      action: 'onUpdate'
    }
  }
}
