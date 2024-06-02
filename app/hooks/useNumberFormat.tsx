// format numbers to german formatting
export const useGermanNumberFormat = (number: number) => {
  const formattedNumber = new Intl.NumberFormat('de-DE', {
    maximumSignificantDigits: 2
  }).format(number)
  return formattedNumber
}

export const useNZNumberFormat = (number: number) => {
  const formattedNumber = new Intl.NumberFormat('en-EN', {
    maximumSignificantDigits: 2
  }).format(number)
  return formattedNumber
}
