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

    /**
     * Get the time clocked during the current day (local time)
     */
    get todayClockedHours(): Date {
        return this.dayClockedHours(new Date())
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

    get weekEntries(): Date[] {
        let weekEntries: Date[] = []
        for (let entry of this._clocksEntries) {
            if (entry > this.lastMonday) {
                weekEntries.push(entry)
            }
        }
        return weekEntries
    }

    /**
     * Find the date for last monday
     */
    get lastMonday(): Date {
        const today = new Date()
        // Day of the month - day of the week
        let lastMonday = new Date()
        const dateDiff: number = today.getDate() - today.getDay()
        lastMonday.setDate(dateDiff)
        return lastMonday
    }

    get weekClockedTime(): Date {
        let count = 0
        const today = new Date()
        const daysSinceLastMonday = today.getDay() - this.lastMonday.getDay()
        for (let weekDay = 0; weekDay < daysSinceLastMonday; weekDay++) {
            count += this.dayClockedHours(new Date(new Date().setDate(today.getDate() - weekDay))).getTime()
        }
        return new Date(count)
    }

    dayClockedHours(day: Date): Date {
        const dayEntries = this.getDayEntries(day)
        let count = 0
        for (let i = 0; i < dayEntries.length; i += 2) {
            if (i < (dayEntries.length - 1)) {
                count += (dayEntries[i + 1].getTime() - dayEntries[i].getTime())
            }
        }
        return new Date(count)
    }
}