import { useCallback, useState } from "react";
import { IfControlService } from "../IfControlService";

export namespace GetAlerts{
  export type Alert = {
    id: string;
    message_type: string;
    date: string;
    hour: string;
    room: string;
  }

  export async function execute(){
    const { data } = await IfControlService.get<Alert[]>(`/alerts`);
    return data;
  }
}

export function useAlerts(){
  const [ data, setAlert ] = useState<GetAlerts.Alert[]>([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ hasError, setHasError ] = useState(false);

  const loadAlerts = useCallback(async() => {
    setIsLoading(true);
    setHasError(false);
    setAlert([]);

    try{
      const response = await GetAlerts.execute();
      setAlert(response);
    }catch(error){
      setHasError(true);
    }finally{
      setIsLoading(false);
    }
  },[]);

  return { isLoading, hasError, alertsList: data, loadAlerts };
}