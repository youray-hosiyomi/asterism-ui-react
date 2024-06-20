import { useCallback, useEffect, useState } from "react";

export type useQParams<Data, Error = unknown> = {
  fn: () => Promise<Data>
  onError?: (err: Error) => void;
  auto?: boolean;
}

export type useQReturns<Data> = {
  isLoading: boolean;
  data?: Data;
  load: () => Promise<Data>;
}

export function useQ<Data>({fn, onError,auto}: useQParams<Data>): useQReturns<Data> {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Data | undefined>(undefined);
  const load = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fn();
      setData(data);
      return data;
    } catch (err) {
      if (onError) {
        onError(err)
      }
      throw err
    } finally {
      setIsLoading(false);
    }
  }, [fn, onError])
  useEffect(() => {
    if (auto) {
      load();
    }
  }, [load, auto])
  return {
    data,
    isLoading,
    load,
  }
}

export type useMParams<Req, Res, Error = unknown> = {
  fn: (req: Req) => Promise<Res>;
  onError?: (err: Error) => void;
}

export type useMReturns<Req, Res> = {
  isPending: boolean;
  mutate: (req: Req) => Promise<Res>;
}

export function useM<Req, Res>({fn, onError}: useMParams<Req, Res>): useMReturns<Req, Res> {
  const [isPending, setIsPending] = useState(true);
  const mutate = useCallback(async (req: Req) => {
    setIsPending(true);
    try {
      const data = await fn(req);
      return data;
    } catch (err) {
      if (onError) {
        onError(err)
      }
      throw err
    } finally {
      setIsPending(false);
    }
  }, [fn, onError])
  return {
    isPending,
    mutate,
  }
}