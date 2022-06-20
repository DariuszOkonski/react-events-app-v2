export interface Event {
    id: number;
    title: string;
    date: string;
    city: string;
}

export const eventsList = ():Event[] => [
    {id: 1, title: 'first event', date: '20-03-2022', city: 'manchester'}, 
    {id: 2, title: 'second event', date: '12-01-2021', city: 'london'}, 
    {id: 3, title: 'third event', date: '20-01-2022', city: 'manchester'}]