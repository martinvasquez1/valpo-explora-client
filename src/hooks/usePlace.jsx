import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function usePlace(id) {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}places/${id}/`,
    fetcher,
    { shouldRetryOnError: false },
  );

  return {
    place: data,
    isLoading,
    isError: error,
  };
}
