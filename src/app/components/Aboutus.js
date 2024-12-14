import styles from './styles.modules.css';
import bottleBeach from '../../../public/bottle - beach.jpg'

export default function AboutUs() {
    return (
        <div className="row px-5 py-5 aboutUs">
            <h2>H2Water</h2>
            <p>Founded in 2024 with the mission to reduce plastic water bottle waste worldwide, H2Water is a company that is focused on creating lasting water bottles that can be used time and time again for years.</p>
            <p className='mb-3'>Come save the world with us One bottle at time.</p>
            <img className="object-fit-cover mt-5" src={bottleBeach.src} style={{height: "50vh"}} />
        </div>
    )
}