import { buildImageUrl } from 'cloudinary-build-url'
import { STORAGE_TYPES } from '@cld-apis/utils'

export default function Pokemon({
  id,
  name,
  color,
  types,
  avatar
}) {

  return (
    <div 
      style={{ 
        background: color.dark,
        border: `1px solid ${color.dark}`
      }} 
      className='item pokemon-gallery--list-item'
    >
      <div className='overlay'>
        <img 
          src={buildImageUrl('vueschool/Asset_1', {
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
          })}
          aria-hidden="true"          
        />
      </div>
      <div className='class="item--description"'>
        <h2 className="item--name">{name}
        </h2>
        <div className="item--decription-types">
          {types.map(({ name}) => <div className='chip sm'>{name}</div>)}
        </div>
      </div>
      <div className="item--avatar-info">
          <h3 className="item--id">No. {id}</h3>          
          <img src={buildImageUrl(avatar, { 
            cloud: { 
              storageType: STORAGE_TYPES.FETCH, 
            }, 
            transformations: {
              resize: {
                width: 150,
                type: 'scale'
              }
            }
          })}
          />
        </div>
    </div>
  )
}
