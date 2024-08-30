// Function to calculate position size and other metrics
function calculatePositionSize() {
    const capital = 50000;  // Predefined Capital
    const leverage = 5;     // Predefined Leverage

    // Get values from the input fields
    const riskPercentage = parseFloat(document.getElementById("riskPercentage").value);
    const entryPrice = parseFloat(document.getElementById("entryPrice").value);
    const stopLossPrice = parseFloat(document.getElementById("stopLossPrice").value);

    // Calculate the Risk Amount considering the leverage
    const riskAmount = (capital * (riskPercentage / 100)) / leverage;

    // Calculate the Position Size based on risk amount and price difference
    const positionSize = riskAmount / (entryPrice - stopLossPrice);

    // Calculate the Potential Reward (not adjusted for reward calculation logic)
    const potentialReward = positionSize * (entryPrice - stopLossPrice) * leverage;

    // Display the results in the HTML elements
    document.getElementById("positionSize").innerText = `${positionSize.toFixed(2)} Qty`;
    document.getElementById("riskedAmount").innerText = `₹${(riskAmount * leverage).toFixed(2)}`;
    document.getElementById("potentialReward").innerText = `₹${potentialReward.toFixed(2)}`;
}

// Function to reset the input fields
function resetFields() {
    document.getElementById("riskPercentage").value = '';
    document.getElementById("entryPrice").value = '';
    document.getElementById("stopLossPrice").value = '';

    // Optionally reset the displayed results as well
    document.getElementById("positionSize").innerText = '';
    document.getElementById("riskedAmount").innerText = '';
    document.getElementById("potentialReward").innerText = '';
}

// Event listeners for 'Enter' key press and button clicks
document.getElementById("riskPercentage").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculatePositionSize();
    }
});

document.getElementById("entryPrice").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculatePositionSize();
    }
});

document.getElementById("stopLossPrice").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculatePositionSize();
    }
});

document.getElementById("calculateBtn").addEventListener("click", calculatePositionSize);
document.getElementById("resetBtn").addEventListener("click", resetFields);
