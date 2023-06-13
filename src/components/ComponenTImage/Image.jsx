import './Image.css'
import imgDaLateral from '../../assets/img-lateral.svg'

export function Image() {
  return (
    <div className='img-direito'>
        <img  src={imgDaLateral} alt="Img" />
    </div>
  )
}