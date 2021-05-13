import Chart from 'react-apexcharts';

const DonutChart = () => {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Seller 1', 'Seller 2', 'Seller 3', 'Seller 4', 'Seller 5']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={ mockData.series }
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;

