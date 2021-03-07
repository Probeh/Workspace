export function titleCase(string?: string) {
  const style = (value: string): string => `${value[0].toUpperCase()}${value.substr(1)}`;
  return string.includes(' ')
    ? string.split(' ').map(x => style(x)).join(' ')
    : style(string);
}