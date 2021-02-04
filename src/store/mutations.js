import state from './state'

export default {
    setDataMenu(data) {
        state.dataMenu.data = data;
        state.dataMenu.mounted = true;
    },
}