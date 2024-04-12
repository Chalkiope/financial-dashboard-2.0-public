// format numbers to german formatting
export const useGermanNumberFormat = (number: number) => {
  const formattedNumber = new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 2
  }).format(number)
  return formattedNumber
}
