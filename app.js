const API_KEY = 'NVVEYKOLN2BZOSJR';
const BASE_URL = 'https://www.alphavantage.co/query';

async function fetchStockData(symbol) {
    try {
        const response = await fetch(`${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

fetchStockData('AAPL');

  