document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the input values
    const riskAmount = parseFloat(document.getElementById('riskAmount').value);
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);

    // Validate input values
    if (isNaN(riskAmount) || isNaN(entryPrice) || isNaN(stopLossPrice)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    // Calculate the position size
    const positionSize = riskAmount / (entryPrice - stopLossPrice);

    // Display the result
    document.getElementById('positionSizeOutput').textContent = `Position Size: ${positionSize.toFixed(2)} shares`;
});
