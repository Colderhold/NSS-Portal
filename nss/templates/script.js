  function flowChart() {
        if ($('.flow-chart').length) {
           var chart = '.flow-chart';
           var inputText = '_input';
           var svgText = '_text';
     
           // Group 1
           var inputGroup1 = '_group1';
           var inputRow1 = '-row1';
           var inputRow2 = '-row2';
           var inputRow3 = '-row3';
           var inputRow4 = '-row4';
           var inputRow5 = '-row5';
           var inputRow6 = '-row6';
           var inputGroup1Row1 = $(chart + inputText + inputGroup1 + inputRow1).text();
           var inputGroup1Row2 = $(chart + inputText + inputGroup1+ inputRow2).text();
           var inputGroup1Row3 = $(chart + inputText + inputGroup1+ inputRow3).text();
           var inputGroup1Row4 = $(chart + inputText + inputGroup1+ inputRow4).text();
           var textGroup1Row1 = $(chart + svgText + inputGroup1 + inputRow1);
           var textGroup1Row2 = $(chart + svgText + inputGroup1 + inputRow2);
           var textGroup1Row3 = $(chart + svgText + inputGroup1 + inputRow3);
           var textGroup1Row4 = $(chart + svgText + inputGroup1 + inputRow4);
           textGroup1Row1.text(inputGroup1Row1);
           textGroup1Row2.text(inputGroup1Row2);
           textGroup1Row3.text(inputGroup1Row3);
           textGroup1Row4.text(inputGroup1Row4);
           
           // Group 2
           var inputGroup2 = '_group2';
           var inputGroup2Row1 = $(chart + inputText + inputGroup2 + inputRow1).text();
           var inputGroup2Row2 = $(chart + inputText + inputGroup2+ inputRow2).text();
           var inputGroup2Row3 = $(chart + inputText + inputGroup2+ inputRow3).text();
           var inputGroup2Row4 = $(chart + inputText + inputGroup2+ inputRow4).text();
           var inputGroup2Row5 = $(chart + inputText + inputGroup2+ inputRow5).text();
           var inputGroup2Row6 = $(chart + inputText + inputGroup2+ inputRow6).text();
           var textGroup2Row1 = $(chart + svgText + inputGroup2 + inputRow1);
           var textGroup2Row2 = $(chart + svgText + inputGroup2 + inputRow2);
           var textGroup2Row3 = $(chart + svgText + inputGroup2 + inputRow3);
           var textGroup2Row4 = $(chart + svgText + inputGroup2 + inputRow4);
           var textGroup2Row5 = $(chart + svgText + inputGroup2 + inputRow5);
           var textGroup2Row6 = $(chart + svgText + inputGroup2 + inputRow6);
           textGroup2Row1.text(inputGroup2Row1);
           textGroup2Row2.text(inputGroup2Row2);
           textGroup2Row3.text(inputGroup2Row3);
           textGroup2Row4.text(inputGroup2Row4);
           textGroup2Row5.text(inputGroup2Row5);
           textGroup2Row6.text(inputGroup2Row6);
           
           
           // Group 3
           var inputGroup3 = '_group3';
           var inputGroup3Row1 = $(chart + inputText + inputGroup3 + inputRow1).text();
           var inputGroup3Row2 = $(chart + inputText + inputGroup3+ inputRow2).text();
           var inputGroup3Row3 = $(chart + inputText + inputGroup3+ inputRow3).text();
           var inputGroup3Row4 = $(chart + inputText + inputGroup3+ inputRow4).text();
           var textGroup3Row1 = $(chart + svgText + inputGroup3 + inputRow1);
           var textGroup3Row2 = $(chart + svgText + inputGroup3 + inputRow2);
           var textGroup3Row3 = $(chart + svgText + inputGroup3 + inputRow3);
           var textGroup3Row4 = $(chart + svgText + inputGroup3 + inputRow4);
           textGroup3Row1.text(inputGroup3Row1);
           textGroup3Row2.text(inputGroup3Row2);
           textGroup3Row3.text(inputGroup3Row3);
           textGroup3Row4.text(inputGroup3Row4);
           
           
           // Group 4
           var inputGroup4 = '_group4';
           var inputGroup4Row1 = $(chart + inputText + inputGroup4 + inputRow1).text();
           var inputGroup4Row2 = $(chart + inputText + inputGroup4+ inputRow2).text();
           var inputGroup4Row3 = $(chart + inputText + inputGroup4+ inputRow3).text();
           var inputGroup4Row4 = $(chart + inputText + inputGroup4+ inputRow4).text();
           var textGroup4Row1 = $(chart + svgText + inputGroup4 + inputRow1);
           var textGroup4Row2 = $(chart + svgText + inputGroup4 + inputRow2);
           var textGroup4Row3 = $(chart + svgText + inputGroup4 + inputRow3);
           var textGroup4Row4 = $(chart + svgText + inputGroup4 + inputRow4);
           textGroup4Row1.text(inputGroup4Row1);
           textGroup4Row2.text(inputGroup4Row2);
           textGroup4Row3.text(inputGroup4Row3);
           textGroup4Row4.text(inputGroup4Row4);
           
           
           // Group 5
           var inputGroup5 = '_group5';
           var inputGroup5Row1 = $(chart + inputText + inputGroup5 + inputRow1).text();
           var inputGroup5Row2 = $(chart + inputText + inputGroup5+ inputRow2).text();
           var inputGroup5Row3 = $(chart + inputText + inputGroup5+ inputRow3).text();
           var inputGroup5Row4 = $(chart + inputText + inputGroup5+ inputRow4).text();
           var textGroup5Row1 = $(chart + svgText + inputGroup5 + inputRow1);
           var textGroup5Row2 = $(chart + svgText + inputGroup5 + inputRow2);
           var textGroup5Row3 = $(chart + svgText + inputGroup5 + inputRow3);
           var textGroup5Row4 = $(chart + svgText + inputGroup5 + inputRow4);
           textGroup5Row1.text(inputGroup5Row1);
           textGroup5Row2.text(inputGroup5Row2);
           textGroup5Row3.text(inputGroup5Row3);
           textGroup5Row4.text(inputGroup5Row4);
        }
     }
     
    function pieChartDesc() {
        // Assuming you have an element with class 'pie-chart-description'
        var descriptionElement = $('.pie-chart-description');
    
        // Your logic for updating the pie chart description goes here
        // For example, you might retrieve data and update the description
        var descriptionText = "This is a pie chart description.";
        descriptionElement.text(descriptionText);
    }
     
     // Run Functions
     $(window).resize(function() {
        pieChartDesc();
     
     });
     $(document).ready(function() {
        flowChart();
        // pieChartRotate();
     
     });
