
import { Container } from 'react-bootstrap';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

function Layouts() {
    return (
 <>
 <Container>
 <Header />
 <Main />
 <Footer />
 </Container>

 </>
    );
  }
  
  export default Layouts;