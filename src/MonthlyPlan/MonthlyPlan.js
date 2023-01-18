

export default function MonthlyPlan(){


    const monthlyCost = [
        {
            name:"Arcade",
            price: "$9"
        },
        {
            name:"Advanced",
            price: "$12"
        },
        {
            name:"Pro",
            price: "$15"
        }
    ]
    return(
        <div class="monthly-container">
            <div class="monthly-text">
                <p>Select your plan</p>
                <p>You have option of monthly or yearly billing.</p>
            </div>

            {monthlyCost.map((item, idx)=> (
                <div class = "list-item"key={idx}>
                    {item.name}
                    {item.price}
                </div>
            ))}

        </div>
    )
}