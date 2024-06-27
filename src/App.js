import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Something } from './components/Something';

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Something />
    </QueryClientProvider>
  );
}

export default App;
