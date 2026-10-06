import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useItems } from './useItems'

describe('useItems', () => {
  it('updates filters state', () => {
    const { result } = renderHook(() => useItems())

    act(() => {
      result.current.setStatus('Todo')
      result.current.setPriority('High')
      result.current.setQuery('Matrix')
    })

    expect(result.current.status).toBe('Todo')
    expect(result.current.priority).toBe('High')
    expect(result.current.visible).toEqual([])
  })
})
