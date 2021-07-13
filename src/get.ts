export function get<T, Key extends keyof T>(
    obj: T,
    path: Key
): T[Key] {
    return obj[path];
} 