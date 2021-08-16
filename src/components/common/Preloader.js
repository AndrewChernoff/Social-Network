import loader from './../../assets/images/loader.gif';

const Preloader = (props) => {
    return (
        <div>
            <img src={loader} style={{ width: 550 }} /> 
        </div>
    )
}

export default Preloader