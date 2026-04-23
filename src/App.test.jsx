import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Hello World heading', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent('Hello, World!')
  })

  it('shows the deployment message', () => {
    render(<App />)
    expect(screen.getByText(/Week 4 DevReady Demo!/i)).toBeInTheDocument()
  })
})
