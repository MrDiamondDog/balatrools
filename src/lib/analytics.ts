export function analytics(name: string, value: any) {
    (window as any).gtag("event", name, {
        value,
    });
};
