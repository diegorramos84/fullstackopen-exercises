import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from './Note'

test('render content', () => {
  const note = {
    content: 'Component test is done with react-testing-library',
    important: true
  }

  render(<Note note= {note} />)

  screen.getByText('Component test is done with react-testing-library')
})


test('clicking the button calles event handle once', async () => {
  const note = {
    content: 'Component test is done with react-testing-library',
    important: true
  }

  const mockHandler = jest.fn()

  render(
    <Note note={note} toggleImportance={mockHandler} />
  )

  const user = userEvent.setup()
  const button = screen.getByText('make not important')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})
