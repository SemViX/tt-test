import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ItemList from './ItemList'

describe('ItemList', () => {
  it('shows the item titles', () => {
    const items = [
      { id: 1, title: 'Matrix', description: 'Sci-fi', createdAt: '2024-01-01T12:00:00.000Z' },
      { id: 2, title: 'Dune', description: 'Adventure', createdAt: '2024-01-02T12:00:00.000Z' },
    ]

    render(<ItemList items={items} />)

    expect(screen.getByText('Matrix')).toBeInTheDocument()
    expect(screen.getByText('Dune')).toBeInTheDocument()
  })

  it('shows an empty state when items are missing', () => {
    render(<ItemList items={[]} />)

    expect(screen.getByText('Нічого не знайдено.')).toBeInTheDocument()
  })
})
