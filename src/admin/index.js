import CMS from 'netlify-cms'

import { IdControl, IdPreview } from './widgets/uuid-widget'

import { ru } from 'netlify-cms-locales'
import products from './preview/products/preview'
import blog from './preview/blog'

import cases from './preview/case'

CMS.registerLocale('ru', ru)

CMS.registerWidget('id', IdControl, IdPreview)

CMS.registerPreviewStyle('/preview/style.css')

CMS.registerPreviewTemplate('products', products)

// CMS.registerPreviewTemplate('home', products)

// CMS.registerPreviewTemplate('about', products)

CMS.registerPreviewTemplate('blog', blog)

CMS.registerPreviewTemplate('cases', cases)
