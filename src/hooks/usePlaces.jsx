import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function usePlaces() {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}places/`,
    fetcher,
    { shouldRetryOnError: false },
  );

  return {
    places: data,
    isLoading,
    isError: error,
  };
}
