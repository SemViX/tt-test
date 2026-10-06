import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { Task } from '../types/task.type'
import TaskStats from './TaskStats'

describe('TaskStats', () => {
  it('renders totals by status', () => {
    const items: Task[] = [
      { id: 1, title: 'Task 1', description: 'Todo', status: 'Todo', priority: 'High', createdAt: '2024-01-01T00:00:00.000Z' },
      { id: 2, title: 'Task 2', description: 'Todo', status: 'Todo', priority: 'Medium', createdAt: '2024-01-01T00:00:00.000Z' },
      { id: 3, title: 'Task 3', description: 'Todo', status: 'Todo', priority: 'Low', createdAt: '2024-01-01T00:00:00.000Z' },
      { id: 4, title: 'Task 4', description: 'In Progress', status: 'In Progress', priority: 'High', createdAt: '2024-01-01T00:00:00.000Z' },
      { id: 5, title: 'Task 5', description: 'In Progress', status: 'In Progress', priority: 'Medium', createdAt: '2024-01-01T00:00:00.000Z' },
      { id: 6, title: 'Task 6', description: 'Done', status: 'Done', priority: 'Low', createdAt: '2024-01-01T00:00:00.000Z' },
    ]

    render(<TaskStats items={items} />)

    expect(screen.getByText('Total')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
    expect(screen.getByText('Todo')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('In Progress')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
