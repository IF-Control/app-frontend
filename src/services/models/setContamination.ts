import { IfControlService } from "../IfControlService";

export namespace setContamination{
    export type Contamination = {
		contamination_date: string;
		report: any;
		symptomatic: boolean | any;
		case_type: boolean | string | any;
    }

    export async function execute(formData: FormData){
        const { data } = await IfControlService.post('/contamination', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
        );

        return data;
    }
}