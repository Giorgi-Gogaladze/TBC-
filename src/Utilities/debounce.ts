export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeOut: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
      if (timeOut) clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        func(...args);
      }, delay);
    }) as T;
  }
  