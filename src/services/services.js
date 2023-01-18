
import { listItem } from "../constants/listItem"

export default function Services(){

    return (

        <div>
            <div class="outer-item">
                <p>Pick add-ons</p>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>

            <div class="list-item">
            {listItem.map((item, idx)=> (
                <div>
                    {item.name}
                    {item.paragraph}
                    {item.price}
                </div>
            ))}

            </div>
        </div>
        )
}