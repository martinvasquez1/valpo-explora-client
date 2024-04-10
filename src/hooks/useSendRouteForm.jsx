import useSWRMutation from 'swr/mutation';

async function fetcher(url, { arg }) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}

export default function useSendRouteForm() {
  const { trigger, isMutating } = useSWRMutation(
    `${import.meta.env.VITE_API_URL}routes/`,
    fetcher,
  );

  return {
    trigger,
    isMutating,
  };
}
