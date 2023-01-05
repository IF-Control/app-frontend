import { IfControlService } from "../IfControlService";

export namespace setNewUserData{
    export type NewUserData = {
		name: string;
		vaccine_doses: number | string;
		group_of_risk: boolean | string;
		course: string;
    }

    export async function execute({ name, vaccine_doses, group_of_risk, course }: NewUserData){
        const { data } = await IfControlService.patch('/editme', {
                name: name, 
                vaccine_doses: vaccine_doses, 
                group_of_risk: group_of_risk, 
                course: course
            }
        );

        return data;
    }
}