// write rfc
import Featured from '@/components/featured/Featured'
import CategoryList from '@/components/categorylist/CategoryList'
import CardList from '@/components/cardlist/CardList'
import Menu from '@/components/menu/Menu'
export default function Home() {
  return (
    <div>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div>
        <CardList></CardList>
        <Menu></Menu>
      </div>
    </div>
  )
}
