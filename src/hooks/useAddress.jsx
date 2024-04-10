import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useAddress(lat, lng) {
  const { data, error, isLoading } = useSWR(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
    fetcher,
    { shouldRetryOnError: false },
  );

  return {
    direction: data,
    isLoading,
    isError: error,
  };
}
