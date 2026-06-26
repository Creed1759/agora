"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Generic event details hook that returns { data, loading, error }.
 * Replaces direct inline fetch logic for individual event cards.
 *
 * @param fetchFn - Async function that fetches/returns the event data.
 * @param deps - Dependency array to trigger refetch (e.g. [eventId]).
 */
export function useEventDetails<T>(
  fetchFn: () => Promise<T>,
  deps: React.DependencyList = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const mountedRef = useRef(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      if (mountedRef.current) {
        setData(result);
        setLoading(false);
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(
          err instanceof Error ? err : new Error("An unexpected error occurred")
        );
        setLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    mountedRef.current = true;
    fetch();
    return () => {
      mountedRef.current = false;
    };
  }, [fetch]);

  return { data, loading, error, refetch: fetch };
}