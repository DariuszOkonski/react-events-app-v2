export interface Event {
    id: number,
    title: string,
    date: string
}

export const eventsList = ():Event[] => [{id: 1, title: 'first event', date: '20-01-1980'}]