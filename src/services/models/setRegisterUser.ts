import { IfControlService } from "../IfControlService";

export namespace setRegisterUser{
  export type User = {
		name: string;
    email: string;
    password: string;
    type: string;
    enrollment: string;
    vaccine_doses: number | any;
    course: string;
    group_of_risk: boolean;
  }

  export async function execute({ name, email, password, type, enrollment, vaccine_doses, course, group_of_risk }: User){
    const user = {
      campus_id: "ce7a3707-55d7-49c1-b092-b9227df39433",
      course: course,
      email: email,
      enrollment: enrollment,
      group_of_risk: group_of_risk,
      name: name,
      password: password,
      type: type, 
      vaccine_doses: parseInt(vaccine_doses)
    };
    
    try{
      const { data } = await IfControlService.post('/users', user);
      return data;
    }catch(e){
      return {"erro": e.response.data.error};
    }
  }
}