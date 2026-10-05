import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import AddItemDialog from './AddItemDialog'

describe('AddItemDialog', () => {
  it('calls onAdd with title and description', async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    const onClose = vi.fn()

    render(<AddItemDialog open onClose={onClose} onAdd={onAdd} />)

    await user.type(screen.getByLabelText('Назва'), 'Matrix')
    await user.type(screen.getByLabelText('Опис'), 'Sci-fi')
    await user.click(screen.getByRole('button', { name: 'Зберегти' }))

    expect(onAdd).toHaveBeenCalledWith('Matrix', 'Sci-fi')
  })
})
