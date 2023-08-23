import { VESTING_OUTPUT_SUPPLY_MARKER } from '@core/wallet/constants'
import { OutputData } from '@iota/wallet'

export function isVestingOutputId(outputId: string): boolean {
    const regex = new RegExp(`^${VESTING_OUTPUT_SUPPLY_MARKER}`)
    return regex.test(outputId)
}

export function isVestingOutput(outputData: OutputData): boolean {
    return isVestingOutputId(outputData.outputId)
}
