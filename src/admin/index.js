import CMS from 'netlify-cms'

import { IdControl, IdPreview } from './widgets/uuid-widget'

import { ru } from 'netlify-cms-locales'
import preview from './preview/preview'
import blog from './preview/blog'

import cases from './preview/case'

CMS.registerLocale('ru', ru)

CMS.registerWidget('id', IdControl, IdPreview)

CMS.registerPreviewStyle('/preview/style.css')

CMS.registerPreviewTemplate('products', preview)

CMS.registerPreviewTemplate('home', preview)

CMS.registerPreviewTemplate('about', preview)

CMS.registerPreviewTemplate('blog', blog)

CMS.registerPreviewTemplate('cases', cases)
