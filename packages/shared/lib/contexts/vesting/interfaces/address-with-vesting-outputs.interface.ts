import { IVestingOutput } from './'

export interface AddressWithVestingOutputs {
    address: string
    outputs: IVestingOutput[]
}
