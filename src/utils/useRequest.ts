import { useState, useEffect } from "react";

const useRequest = (requestCall: any) => {
  const [requestResponse, setRequestResponse] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await requestCall();
        console.log(requestCall);
        if (!ignore) setRequestResponse(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [requestCall]);
  return { requestResponse, loading, error };
};

export default useRequest;
