import { render } from '@testing-library/react'
import Home from './Home'

describe('test home', ()=>{
  test('should render txt', ()=>{
    const {queryByText} = render(<Home />)
    expect(queryByText(/home/)).toBeInTheDocument()
  })
})
