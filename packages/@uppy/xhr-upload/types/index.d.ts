import Uppy = require('@uppy/core')

declare module XHRUpload {
  export interface XHRUploadOptions extends Uppy.PluginOptions {
    limit?: number
    bundle?: boolean
    formData?: boolean
    headers?: any
    metaFields?: string[]
    fieldName?: string
    timeout?: number
    responseUrlFieldName?: string
    endpoint: string
    method?: 'GET' | 'POST' | 'PUT' | 'HEAD'
  }
}

declare class XHRUpload extends Uppy.Plugin<XHRUpload.XHRUploadOptions> {}

export = XHRUpload
