export const useFormattedText = (string: string) => {
    const newString = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/^./, (str) => {
        return str.toUpperCase();
    });
    return newString;
}