import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('calls onSearch with the typed query', async () => {
    const user = userEvent.setup()
    const onSearch = vi.fn()

    render(<SearchBar onSearch={onSearch} />)

    await user.type(screen.getByLabelText('Пошук'), 'matrix')
    await user.click(screen.getByRole('button', { name: 'Шукати' }))

    expect(onSearch).toHaveBeenCalledWith('matrix')
  })
})
