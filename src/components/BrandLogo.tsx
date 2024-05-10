import Logo from '../assets/localVendaLogo.png';
import { Link } from 'react-router-dom';

function BrandLogo({ className }: { className?: string }) {
  return (
    <Link to='/' className={className}>
      <figure>
        {' '}
        <img src={Logo} alt='Local venda Logo' />
      </figure>
    </Link>
  );
}

export default BrandLogo;
