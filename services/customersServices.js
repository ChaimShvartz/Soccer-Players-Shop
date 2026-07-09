import { validator } from "../validations.js";

export function getVerifiedCustomerId({ customerId }) {
    const { checking, errMessage } = validator.id;
    if (!checking(customerId)) throw new Error(errMessage);
    return +customerId;
}
