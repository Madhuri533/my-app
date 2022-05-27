import { FormControl } from "@angular/forms";

export class CustomNameValidaor {
    static nameVal(control: FormControl):{[s:string]: boolean} | null{
        if(control.value === 'test'){
            return {'nameVal': true}
        }
        else{
            return null;
        }
    }
}