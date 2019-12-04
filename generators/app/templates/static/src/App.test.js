import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

test('should contain the Hello World string', async () => {
  const { getByText } = render(<App />)

  const result = getByText('Hello World')

  expect(result).toBeInTheDocument()
})
