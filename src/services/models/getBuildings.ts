import { useCallback, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IfControlService } from "../IfControlService";

export namespace GetBuilding{
  export type Room = {
    id: string;
    name: string;
    type: string;
    capacity: number;
    movements: any;
  }
  export type Building = {
    id: string;
    name: string;
    rooms: Room[];
  }

  export async function execute(){
    const { data } = await IfControlService.get<Building[]>(`/rooms`);
    return data;
  }
}

export function useBuildings(){
  const [data, setEnvironment] = useState<GetBuilding.Building[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { directSignOut } = useContext(AuthContext);

  const loadBuildings = useCallback(async() => {
    setIsLoading(true);
    setHasError(false);
    setEnvironment([]);

    try {
      const response = await GetBuilding.execute();
      setEnvironment(response);
    } catch (error) {
      if(error.response.status == 401){
        directSignOut()
      }
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, hasError, rooms: data, loadBuildings };
}
