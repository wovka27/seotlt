import NewsList from '@/components/NewsList'
import { ArticleDetail } from '@/components/ArticleDetail'

const routes = [
  { path: '/', element: NewsList, title: 'Главная' },
  { path: '/:uuid', element: ArticleDetail, title: 'Информации о статье' }
]

export default routes
