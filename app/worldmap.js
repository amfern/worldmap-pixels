document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById('container1');
    // element.align = "center"
    const map = new Datamap({
        element,
        fills: {
            defaultFill: '#ccc'
        },
        responsive: true,
        projection: 'mercator', // big world map
        aspectRatio: 1,
        geographyConfig: {
            borderColor: '#DEDEDE',
            highlightFillColor: '#B7B7B7',
            highlightBorderColor: '#777',
            highlightBorderWidth: 1,
        },
        done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', (geography) => {
                window.location = `/country.html#${geography.id}`;
            });
        },
    });

    d3.select(window).on('resize', () => map.resize());
});
