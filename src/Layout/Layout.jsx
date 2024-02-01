import './Layout.css'
import Card from '../Components/Card/Card';
import Casuol from '../Components/Casuol/Casuol';
import Field from '../Components/Field/Field';
import Services from '../Components/Field/Services/Services';
import Test from '../Components/Testmonial/Test';

const Layout = () => {
    return (
        <div className='layout'>
            <Card/>
            <Casuol />
            <Field />
            <Services/>
            <Test/>
        </div>
    )
}
export default Layout