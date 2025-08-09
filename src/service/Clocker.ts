export default class Clocker {
    _clocksEntries: Date[] = []

    clock(date: Date = new Date()): void {
        this._clocksEntries.push(date)
    }

    get clockEntries(): Date[] {
        return this._clocksEntries
    }

    get lastEntry(): Date {
        return this._clocksEntries[this._clocksEntries.length - 1]
    }

    /**
     * Get the entries for a given day
     *
     * @param day A date pointing to the day searched
     */
    getDayEntries(day: Date): Date[] {
        let dayEntries = []
        for (const entry of this._clocksEntries) {
            if (day.getDay() === entry.getDay()) {
                dayEntries.push(day)
            }
        }
        return dayEntries
    }

    /**
     * Get the entries for the current day
     */
    get todayEntries(): Date[] {
        return this.getDayEntries(new Date())
    }

    get todayClockedHours() {
        let count = 0
        for (let i = 0; i < this._clocksEntries.length; i+=2) {
            if (i < (this._clocksEntries.length - 1)) {
                count += (this._clocksEntries[i+1].getTime() - this._clocksEntries[i].getTime())
            }
        }
        return new Date(count)
    }
}