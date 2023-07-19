import { TransactionProgressEventPayload } from '../types'
import { TransactionProgressType } from '@iota/wallet'

export function isPreparedTransaction(payload: TransactionProgressEventPayload): boolean {
    const type = payload.getProgressType()
    return type === TransactionProgressType.PreparedTransaction
}
