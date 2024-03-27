export function formatDate(format: string, date: Date): string {
    const tokens: { [key: string]: string } = {
        'YY': date.getFullYear().toString().slice(-2),
        'YYYY': date.getFullYear().toString(),
        'MM': (date.getMonth() + 1).toString().padStart(2, '0'),
        'MMM': date.toLocaleString('default', { month: 'short' }),
        'D': date.getDate().toString(),
        'DD': date.getDate().toString().padStart(2, '0'),
    };

    return format.replace(/YYYY|YY|MM|MMM|DD|D/g, token => tokens[token as keyof typeof tokens]);
}