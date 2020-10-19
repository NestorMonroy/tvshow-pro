import Link from 'next/link';
import TumbnailStyles from './styles'

const Thumbnail = ({
    imageUrl = 'https://via.placeholder.com/210x295?text=?', 
    caption
  }) => {
  return (
    <div className="thumbnail">
      <Link href="us/5617" as="/us/5617" >
        <a>
          <img src={imageUrl} className="thumbnail__image" />
          <h4 className="thumbnail__caption" >{caption} </h4>
        </a>
      </Link>

      <style jsx> {TumbnailStyles}
      </style>
    </div>
    
  )
}

export default Thumbnail;