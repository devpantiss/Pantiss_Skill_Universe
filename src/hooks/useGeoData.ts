import { useEffect, useState } from 'react';
import type { GeoJsonObject } from 'geojson';

// Share in-flight requests and parsed geometry across maps and route changes.
const cache = new Map<string, Promise<GeoJsonObject>>();
export function useGeoData(url: string) {
  const [geoData, setGeoData] = useState<GeoJsonObject | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let mounted = true;
    setError(false);
    let request = cache.get(url);
    if (!request) {
      request = fetch(url).then(response => {
        if (!response.ok) throw new Error('Map data unavailable');
        return response.json() as Promise<GeoJsonObject>;
      }).catch(error => { cache.delete(url); throw error; });
      cache.set(url, request);
    }
    request.then(data => { if (mounted) setGeoData(data); })
      .catch(() => { if (mounted) setError(true); });
    return () => { mounted = false; };
  }, [url]);
  return { geoData, error };
}
