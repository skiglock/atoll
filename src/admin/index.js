import CMS from 'netlify-cms'

import { IdControl, IdPreview } from './widgets/uuid-widget'

import { ru } from 'netlify-cms-locales'

CMS.registerLocale('ru', ru)

CMS.registerWidget('id', IdControl, IdPreview)
