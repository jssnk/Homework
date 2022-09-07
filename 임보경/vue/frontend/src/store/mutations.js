import {
    REQUEST_CHARACTER_STATUS_DATA,
    REQUEST_MONSTER_DATA,
    REQUEST_STOCK_DATA,
} from './mutation-types'

export default {
    [REQUEST_CHARACTER_STATUS_DATA] (state, passingData) {
        state.characterStatusData = passingData
    },
    [REQUEST_MONSTER_DATA] (state, passingData) {
        state.monstersData = passingData
    },
    [REQUEST_STOCK_DATA] (state, passingData) {
        state.stockData = passingData
    }
}
