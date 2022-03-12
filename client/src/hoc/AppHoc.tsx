import {FC, ReactNode, StrictMode} from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

interface PropsType {
  children: ReactNode
}

const AppHoc: FC<PropsType> = ({children}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

export default AppHoc
