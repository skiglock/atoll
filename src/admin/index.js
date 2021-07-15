// CMS
import CMS from 'netlify-cms'
import { IdControl, IdPreview } from './widgets/uuid-widget'
import { ru } from 'netlify-cms-locales'

// PREVIEW TEMPLATE
import previewtpl from './preview/previewtpl'
import blogPreview from './preview/blog'
import casesPreview from './preview/case'
import pagesPreview from './preview/page'

CMS.registerLocale('ru', ru)

CMS.registerWidget('id', IdControl, IdPreview)

CMS.registerPreviewStyle('/preview/style.css')

CMS.registerPreviewTemplate('products', previewtpl)

CMS.registerPreviewTemplate('home', previewtpl)

CMS.registerPreviewTemplate('about', previewtpl)

CMS.registerPreviewTemplate('blog', blogPreview)

CMS.registerPreviewTemplate('cases', casesPreview)

CMS.registerPreviewTemplate('pages', pagesPreview)
