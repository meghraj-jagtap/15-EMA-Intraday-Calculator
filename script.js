document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            calculatePositionSize();
        }
    });
});

function calculatePositionSize() {
    const capital = 50000;  // Predefined capital
    const riskPercentage = parseFloat(document.getElementById('riskPercentage').value) / 100;
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    const leverage = 5;  // Predefined leverage

    if (isNaN(riskPercentage) || isNaN(entryPrice) || isNaN(stopLossPrice)) {
        alert('Please enter valid inputs.');
        return;
    }

    // Calculate the risk amount based on capital
    const riskAmount = capital * riskPercentage;

    // Calculate the difference between entry price and stop-loss price
    const stopLossDifference = entryPrice - stopLossPrice;

    // Calculate the position size considering leverage
    const positionSize = (riskAmount / stopLossDifference) * leverage;

    // Calculate the potential reward
    const rewardAmount = stopLossDifference * positionSize;

    // Update the results in the table
    document.getElementById('positionSize').textContent = positionSize.toFixed(2);
    document.getElementById('riskedAmount').textContent = riskAmount.toFixed(2);
    document.getElementById('rewardAmount').textContent = rewardAmount.toFixed(2);
}

function resetValues() {
    document.getElementById('riskPercentage').value = '';
    document.getElementById('entryPrice').value = '';
    document.getElementById('stopLossPrice').value = '';
    document.getElementById('positionSize').textContent = '-';
    document.getElementById('riskedAmount').textContent = '-';
    document.getElementById('rewardAmount').textContent = '-';
}
