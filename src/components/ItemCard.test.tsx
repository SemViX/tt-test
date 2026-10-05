import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ItemCard from './ItemCard'

describe('ItemCard', () => {
  it('shows the item title, description and date', () => {
    const item = {
      id: 1,
      title: 'Matrix',
      description: 'Sci-fi',
      createdAt: '2024-01-01T12:00:00.000Z',
    }

    render(<ItemCard item={item} />)

    expect(screen.getByText('Matrix')).toBeInTheDocument()
    expect(screen.getByText('Sci-fi')).toBeInTheDocument()
    expect(screen.getByText(/Додано:/)).toBeInTheDocument()
  })
})
