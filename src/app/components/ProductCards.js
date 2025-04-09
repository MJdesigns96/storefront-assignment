import { tempFxn } from '../getItems';
import styles from './styles.modules.css';
import smWide from '../../../public/bottles/8oz-wide.png';
import mdWide from '../../../public/bottles/16oz-wide.png';
import Wide from '../../../public/bottles/32oz-wide.png';
import silo from '../../../public/bottles/48silo.png';
import siloSustain from '../../../public/bottles/48silo-sustainable.png';
import smCanteen from '../../../public/bottles/32oz-canteen.png';
import mdCanteen from '../../../public/bottles/48oz-canteen.png';
import lgCanteen from '../../../public/bottles/96oz-canteen.png';

<<<<<<< HEAD
export default async function ProductCards() {
=======
export default async function ItemsListItems({ currencyAmount, currencyName, userCurrency }) {
    // console.log(currencyAmount);
    // console.log(currencyName);
    // console.log(userCurrency);
>>>>>>> cda6e0a7c29af54c118c5d7a94e679104c427bd4
    const itemsList = await tempFxn();
    let itemsArr = [];
    itemsList.items.forEach(entry => {
        itemsArr.push(entry);
    });

    const stockCheker = (stock) => {
        if (stock < 20) {
            return <div className='col text-danger text-center'> Only { stock } bottles left.</div>
        } 
        return <div className='col'>{ stock } bottles remaining.</div>
    }
    const images = [
        mdWide.src,
        Wide.src,
        smWide.src,
        silo.src,
        siloSustain.src,
        smCanteen.src,
        mdCanteen.src,
        lgCanteen.src
    ]
    const currencyChoice = (price, currencyAmount, currencyName, userCurrency) => {
        return <h3>${ (price * currencyAmount[userCurrency -1]).toFixed(2) } { currencyName[userCurrency -1] }</h3>
    }
    
    const itemsElement = itemsArr.map((entry) => 
        <div className='col-3 mb-2' key={entry.id}>
            <div className='card h-100'>
                <img className='card-img-top'
                    src= {images[entry.id - 1]}
                />
                <div className='card-body mx-3 mt-3'>
                    <h3 className='card-title'>{ entry.name }</h3>
                    <p className='card-text'>{ entry.description }</p>
                </div>
                <div className='card-footer mt-2'>
                    <div className='row align-items-center mt-auto'>
                        <div className='col text-center '>{ currencyChoice(entry.price, currencyAmount, currencyName, userCurrency) }</div>
                        { stockCheker(entry.stock) }
                    </div>
                </div>
            </div>
        </div>
    );

    return(
        <div className='row row-cols-1 row-cols-md-4 g-4'>
            { itemsElement }
        </div>
    )
}