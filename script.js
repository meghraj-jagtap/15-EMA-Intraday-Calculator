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

    const riskAmount = capital * riskPercentage;
    const stopLossDifference = entryPrice - stopLossPrice;
    const positionSize = (riskAmount / stopLossDifference) * leverage;
    const rewardAmount = (entryPrice - stopLossPrice) * positionSize;

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
