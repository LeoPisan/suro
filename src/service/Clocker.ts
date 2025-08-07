export default class Clocker {
    private _clocksEntries: Date[] = []

    clock(date: Date = new Date()): void {
        this._clocksEntries.push(date)
    }

    get clockEntries() {
        return this._clocksEntries
    }
}