// get apprpriate currency symbols
export const useCurrencySymbols = (currency: string) => {
    let currencySymbol = '';
    switch (currency) {
        case 'nzd' :
            currencySymbol = 'NZ$';
            break;
        case 'usd' :
            currencySymbol = 'US$';
            break;
        case 'eur' :
            currencySymbol = '€';
            break;
        case 'aud' :
            currencySymbol = 'AU$';
            break;
        case 'sgd' :
            currencySymbol = 'SIN$';
            break;
        default:
            currencySymbol = '$€?'
    }
    return currencySymbol;
};