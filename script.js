const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	  // Select all price elements
    const prices = document.querySelectorAll(".price");

    // Calculate the total sum
    let total = 0;
    prices.forEach(price => {
        total += parseInt(price.innerText);
    });

    // Check if total row already exists and remove it
    const existingTotalRow = document.getElementById("ans");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for total price
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    totalRow.setAttribute("id", "ans"); // Ensure Cypress can find this element

    // Create a single cell that spans both columns
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.style.textAlign = "center";
    totalCell.style.fontWeight = "bold";
    totalCell.innerText = `Total Price: Rs ${total}`;

    // Append cell to row and row to table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
		
};

getSumBtn.addEventListener("click", getSum);

