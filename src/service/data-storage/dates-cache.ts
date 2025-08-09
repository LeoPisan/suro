/**
 * Function to store a list of dates in cache
 *
 * @param dates List of dates to store
 */
export function storeDatesInCache(dates: Date[]): void {
    const cachedDates = JSON.stringify(dates);
    localStorage.setItem('cachedDates', cachedDates);
}

/**
 * Function to retrieve the stored dates from cache
 */
export function getCachedDates(): Date[] | null {
    const cachedDatesString = localStorage.getItem('cachedDates');
    if (cachedDatesString) {
        const cachedDate = JSON.parse(cachedDatesString);
        return cachedDate.map((date: string) => new Date(date));
    }
    return null;
}
