import { validator } from "./validations.js";

export function getVerifiedDetails(data, fields, requireAllFields = false) {
    const finalDetails = {};
    
    for(const field of fields){
        const value = data[field];       
        if (value === undefined) {
            if (requireAllFields) throw new Error(`Missing ${field}`);
            continue;
        }

        const { checking, errMessage } = validator[field];
        if (checking && !checking(value)) throw new Error(errMessage);

        finalDetails[field] = value;
    };
    return finalDetails;
}
