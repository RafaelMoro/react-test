import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Something } from "../components/Something";
import { useSomething } from "../hooks/useSomething";

jest.mock('../hooks/useSomething')

const mockUseSomething = jest.mocked(useSomething)
const mockedSuccess = { data: [{ id: 1, name: 'test' }], isError: false, error: null, isLoading: false }
describe('Something', () => {
  test('render data', () => {
    const queryClient = new QueryClient()
    mockUseSomething.mockReturnValue(mockedSuccess)
    render(
      <QueryClientProvider client={queryClient}>
        <Something />
      </QueryClientProvider>
    )

    const title = screen.getByRole('heading', { name: /test/i})
    expect(title).toBeInTheDocument()
  })
})