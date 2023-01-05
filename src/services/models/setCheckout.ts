import { IfControlService } from "../IfControlService";

export namespace setCheckout{
  export type Input = {
    room_id: string;
    movement_id: string;
  }

  export async function execute({ room_id, movement_id }: Input) {
    const { data } = await IfControlService.patch('/checkout', {
        room_id: room_id,
        movement_id: movement_id
    });
    return data;
  }
}