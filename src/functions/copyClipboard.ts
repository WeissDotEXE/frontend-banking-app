export default function copyClipboard(link: string) {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(link);
}
