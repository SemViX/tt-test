import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useItems } from './useItems'

describe('useItems', () => {
  it('adds a new item with the description', () => {
    const { result } = renderHook(() => useItems())

    act(() => {
      result.current.addItem('Нова назва', 'Опис фільму')
    })

    expect(result.current.visible[0].title).toBe('Нова назва')
    expect(result.current.visible[0].description).toBe('Опис фільму')
    expect(new Date(result.current.visible[0].createdAt).toString()).not.toBe('Invalid Date')
  })
})
