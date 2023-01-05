import { useCallback, useState } from "react";
import { IfControlService } from "../IfControlService";

export namespace GetHealthTips{
  export type HealthTip = {
    id: string;
    name: string;
    description: string;
    image: string;
  }

  export async function execute(){
    const { data } = await IfControlService.get<HealthTip[]>(`/health_tips`);
    return data;
  }
}

export function useHealthTips(){
  const [data, setHealthTip] = useState<GetHealthTips.HealthTip[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadHealthTips = useCallback(async() => {
    setIsLoading(true);
    setHasError(false);
    setHealthTip([]);

    try {
      const response = await GetHealthTips.execute();
      setHealthTip(response);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, hasError, healthTipsList: data, loadHealthTips };
}
