import { useCallback, useState } from "react";
import { IfControlService } from "../IfControlService";

export namespace GetEnvironment{
  export type Room = {
    id: string;
    name: string;
    type: string;
    capacity: number;
    movements: any;
  }
  export type Environment = {
    id: string;
    name: string;
    rooms: Room[];
  }

  export async function execute(){
    const { data } = await IfControlService.get<Environment[]>(`/environments`);
    return data;
  }
}

export function useEnvironment(){
  const [data, setEnvironment] = useState<GetEnvironment.Environment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadEnvironments = useCallback(async() => {
    setIsLoading(true);
    setHasError(false);
    setEnvironment([]);

    try {
      const response = await GetEnvironment.execute();
      setEnvironment(response);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, hasError, rooms: data, loadEnvironments };
}
