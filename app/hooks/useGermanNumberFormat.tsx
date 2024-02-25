// format numbers to german formatting
export const useGermanNumberFormat = (number: number) => {
    const formattedNumber = new Intl.NumberFormat('de-DE').format(number);
    return formattedNumber;
};