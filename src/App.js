import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/home";
import "./app.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 5000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
