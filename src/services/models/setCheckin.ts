import { IfControlService } from "../IfControlService";

export namespace setCheckin{
  export type Movement = {
    id: string;
		checkin_date: string;
		checkout_date: string;
		room_id: string;
		user_id: string;
		draft: boolean;
  }

  export async function execute(room_id: string){
    const { data } = await IfControlService.post('/checkin', {
      room_id: room_id
    });
    return data;
  }
}