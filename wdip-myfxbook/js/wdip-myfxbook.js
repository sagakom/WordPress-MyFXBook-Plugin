jQuery(document).ready(function ($) {
    google.charts.load('current', {'packages': ['bar', 'corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var graph_error = $(wdip_myfxbook_notify.graph_error);
        if (!$.isEmptyObject(wdip_myfxbook_daily_gain)) {
            var BarData = google.visualization.arrayToDataTable(wdip_myfxbook_daily_gain);
            var BarChart = new google.charts.Bar($('#wdip-myfxbook-daily-gain')[0]);
            BarChart.draw(BarData);
        } else {
            $('#wdip-myfxbook-data-daily').html(graph_error);
        }

        if (!$.isEmptyObject(wdip_myfxbook_data_daily)) {
            var ColumnChartData = google.visualization.arrayToDataTable(wdip_myfxbook_data_daily);
            var ColumnChartView = new google.visualization.DataView(ColumnChartData);
            var ColumnChart = new google.visualization.ColumnChart($('#wdip-myfxbook-data-daily')[0]);
            ColumnChart.draw(ColumnChartView);
        } else {
            $('#wdip-myfxbook-data-daily').html(graph_error);
        }
    }
});