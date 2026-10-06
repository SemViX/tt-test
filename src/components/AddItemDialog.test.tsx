import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ItemFormDialog from './AddItemDialog'

describe('AddItemDialog', () => {
  it('renders the title and description fields', () => {
    render(
      <ItemFormDialog
        open
        onClose={() => {}}
        onSubmit={async () => {
          return undefined
        }}
      />,
    )

    expect(screen.getByLabelText('Назва')).toBeInTheDocument()
    expect(screen.getByLabelText('Опис')).toBeInTheDocument()
  })
})
