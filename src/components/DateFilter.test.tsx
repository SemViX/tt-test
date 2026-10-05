import { render, screen } from '@testing-library/react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { describe, expect, it, vi } from 'vitest'
import DateFilter from './DateFilter'

describe('DateFilter', () => {
  it('renders the date input', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateFilter value={null} onChange={vi.fn()} />
      </LocalizationProvider>
    )

    expect(screen.getAllByLabelText('Дата додавання').length).toBeGreaterThan(0)
  })
})
