const chart = document.querySelector('.chart')
const bar = document.querySelectorAll('.bar')
const amount = document.querySelectorAll('.amount')

const fetchData = async () => {
    const db = await fetch('data.json');
    const json = await db.json();
    console.log(json);
    
    const bars = json.map((bar,index) => {

        return `<li key=${index}>
            <div class="amount">$${bar.amount}</div>
            <div class="bar">
                <span style="height: ${bar.amount *3}px"></span>
                <p>${bar.day}</p>
            </div>
        </li>`
    }).join("")

    chart.innerHTML = bars
}

fetchData();
console.log(bar);

// for (let i=0; i<bar.length; i++) {
//     bar[i].addEventListener("mouseover", () => {
//         amount[i].style.display = none;
//     })
// }

