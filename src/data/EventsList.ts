export interface Event {
    id: number;
    title: string;
    date: string;
    city: string;
}

export const eventsList = ():Event[] => [
    {id: 1, title: 'first event', date: '20-01-1980', city: 'manchester'}, 
    {id: 2, title: 'second event', date: '20-01-1980', city: 'manchester'}, 
    {id: 3, title: 'third event', date: '20-01-1980', city: 'manchester'}]