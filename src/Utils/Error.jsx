import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">Oops!!!</h1>
      <h2 className="text-2xl font-semibold text-gray-800">
        Something went wrong...
      </h2>
      <h3 className="text-lg text-gray-700">
        {err?.status}: {err?.statusText}
      </h3>
    </div>
  );
};
export default Error;
