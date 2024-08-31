// write rfc
import Featured from '@/components/featured/Featured'
import CategoryList from '@/components/categorylist/CategoryList'
import CardList from '@/components/cardlist/CardList'
import Menu from '@/components/menu/Menu'
export default function Home() {
  return (
    <div className=' bg-slate-300 dark:bg-slate-900 dark:text-white px-10'>
      <div className='max-w-7xl mx-auto'>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div>
        <CardList></CardList>
        <Menu></Menu>
      </div>
      </div>
    </div>
  )
}
