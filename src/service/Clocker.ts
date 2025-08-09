export default class Clocker {
    _clocksEntries: Date[] = []
    readonly _dataSaver: (data: Date[]) => void;

    constructor(dataSaver: (data: Date[]) => void) {
        this._dataSaver = dataSaver;
    }

    clock(date: Date = new Date()): void {
        this._clocksEntries.push(date)
        this._dataSaver(this._clocksEntries)
    }

    /**
     * Get the entries for a given day
     *
     * @param day A date pointing to the day searched
     */
    getDayEntries(day: Date): Date[] {
        let dayEntries: Date[] = []
        for (let entry of this._clocksEntries) {
            if (day.getDate() === entry.getDate()
                && day.getMonth() === entry.getMonth()
                && day.getFullYear() === entry.getFullYear()) {
                dayEntries.push(entry)
            }
        }
        return dayEntries
    }

    get clockEntries(): Date[] {
        return this._clocksEntries
    }

    get lastEntry(): Date {
        return this._clocksEntries[this._clocksEntries.length - 1]
    }

    /**
     * Get the entries for the current day
     */
    get todayEntries(): Date[] {
        return this.getDayEntries(new Date())
    }

    get todayClockedHours() {
        let count = 0
        for (let i = 0; i < this._clocksEntries.length; i += 2) {
            if (i < (this._clocksEntries.length - 1)) {
                count += (this._clocksEntries[i + 1].getTime() - this._clocksEntries[i].getTime())
            }
        }
        return new Date(count)
    }

    /**
     * Set the clock entries, typically to load them at startup
     *
     * @param value Entries to be loaded
     */
    set clockEntries(value: Date[] | null) {
        if (value != null) {
            this._clocksEntries = value
        }
    }
}