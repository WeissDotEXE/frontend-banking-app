const MAX_MOBILE_WIDTH = 1024;
const MIN_DESKTOP_WIDTH = 1025;

export function IsMobile(width: number): boolean {
    return width <= MAX_MOBILE_WIDTH;
}
export function IsDesktop(width: number): boolean {
    return width >= MIN_DESKTOP_WIDTH;
}
