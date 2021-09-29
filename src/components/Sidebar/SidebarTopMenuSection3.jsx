import PlaylistPlayOutlinedIcon from '@material-ui/icons/PlaylistPlayOutlined'
import { SidebarRow } from './SidebarRow'

export const SidebarTopMenuSection3 = () => {
  return catBreed.map((breed) => {
    return (
      <SidebarRow key={breed} Icon={PlaylistPlayOutlinedIcon} text={breed} />
    )
  })
}

const catBreed = [
  'Kitten',
  'Tabby',
  'Bengal',
  'Siamese',
  'Norwegian Forest Cat',
  'Maine Coon',
  'British Shorthair',
  'Puma',
  'Canadian Lynx',
  'Savannah',
  'Persian cat',
  'Caracal',
  'Courgar',
  'Leopard',
  'Abyssinian',
  'Scottish Fold',
  'Panther',
  'Burmese cat',
]
