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
		
  
};

getSumBtn.addEventListener("click", getSum);

