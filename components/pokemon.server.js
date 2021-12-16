import { buildImageUrl } from 'cloudinary-build-url'
import { STORAGE_TYPES } from '@cld-apis/utils'
import useCloudinary from '../lib/useCloudinary'

useCloudinary()

export default function Pokemon({
  id,
  name,
  color,
  types,
  avatar
}) {
  const overlayBackground = buildImageUrl('vueschool/Asset_1', {
    transformations: {
      resize: {
        width: 250,
        type: 'scale',
      },
      opacity: 50,
      effect: {
        name: 'blur'
      }
    }
  })

  const optimizedAvatar = buildImageUrl(avatar, { 
    cloud: { 
      storageType: STORAGE_TYPES.FETCH, 
    }, 
    transformations: {
      resize: {
        width: 150,
        type: 'scale'
      }
    }
  })

  return (
    <div 
      style={{ 
        background: color.dark,
        border: `1px solid ${color.dark}`
      }} 
      className='item pokemon-gallery--list-item'
    >
      <div className='overlay'>
        <img src={overlayBackground} aria-hidden="true" />
      </div>
      <div className='class="item--description"'>
        <h2 className="item--name">{name}</h2>
        <div className="item--decription-types">
          {types.map(({ name}) => <div className='chip sm' key={name} >{name}</div>)}
        </div>
      </div>
      <div className="item--avatar-info">
          <h3 className="item--id">No. {id}</h3>          
          <img src={optimizedAvatar} />
        </div>
    </div>
  )
}
