'use client';

import {QueryClient} from '@tanstack/query-core';
import {PropsWithChildren, useState} from 'react';
import {QueryClientProvider} from '@tanstack/react-query';

export default function QueryProvider({children}: PropsWithChildren) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
