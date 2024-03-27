// ./src/date-formatter.spec.ts
import { formatDate } from './date-formatter';

describe('formatDate', () => {
    it('formats a date correctly', () => {
        const date = new Date(2022, 0, 1); // January 1, 2022
        const format = 'YYYY-MM-DD';
        const expected = '2022-01-01';

        const result = formatDate(format, date);

        expect(result).toBe(expected);
    });
});