import { useRouteError } from 'react-router-dom';

type Error = {
  status: number;
  statusText: string;
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError();

  const status = (error as Error).status;

  return <p>{status}</p>;
}
