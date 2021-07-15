import CMS from 'netlify-cms'

import { IdControl, IdPreview } from './widgets/uuid-widget'

import { ru } from 'netlify-cms-locales'
import previewtpl from './preview/previewtpl'
import blog from './preview/blog'

import cases from './preview/case'

CMS.registerLocale('ru', ru)

CMS.registerWidget('id', IdControl, IdPreview)

CMS.registerPreviewStyle('/preview/style.css')

var Products = previewtpl
CMS.registerPreviewTemplate('products', Products)

var Home = previewtpl
CMS.registerPreviewTemplate('home', Home)

var About = previewtpl
CMS.registerPreviewTemplate('about', About)

CMS.registerPreviewTemplate('blog', blog)

CMS.registerPreviewTemplate('cases', cases)
