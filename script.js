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

	 // Create a new row for total price
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");

	// Create a single cell that spans both columns
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.style.textAlign = "center";
    totalCell.style.fontWeight = "bold";
    totalCell.innerText = `Total Price: Rs ${total}`;

 // Append cell to row and row to table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);

    // Disable the button after clicking to prevent duplicate rows
    getSumBtn.disabled = true;
		
  
};

getSumBtn.addEventListener("click", getSum);

