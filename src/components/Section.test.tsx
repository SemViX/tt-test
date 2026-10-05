import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Section from './Section'

describe('Section', () => {
  it('renders with the red style', () => {
    render(<Section tone="red" data-testid="section" />)

    const section = screen.getByTestId('section')

    expect(section).toHaveStyle({
      backgroundColor: '#ffebee',
      border: '2px solid #e53935',
    })
  })
})
