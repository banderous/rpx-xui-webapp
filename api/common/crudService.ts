import { AxiosResponse } from 'axios'
import { NextFunction } from 'express'
import { http } from '../lib/http'
import * as log4jui from '../lib/log4jui'
import { EnhancedRequest, JUILogger } from '../lib/models'
import { setHeaders } from '../lib/proxy'

const logger: JUILogger = log4jui.getLogger('crud-service')

/**
 * Generic handleGet call Rest API with GET method
 * @param path
 * @param req
 * @returns {Promise<AxiosResponse>}
 */
export async function handleGet(path: string, req: EnhancedRequest, next: NextFunction): Promise<AxiosResponse> {
    try {
        logger.info('handle get:', path)
        const headers = setHeaders(req)
        return await http.get(path, { headers })
    } catch (e) {
        next(e)
    }
}

/**
 * Generic handlePost call Rest API with POST method
 * @param path
 * @param body
 * @param req
 * @returns {Promise<AxiosResponse>}
 */
export async function handlePost<T>(path: string, body: T, req: EnhancedRequest, next: NextFunction): Promise<AxiosResponse> {
    try {
        logger.info('handle post:', path)
        const headers = setHeaders(req)
        return await http.post(path, body, { headers })
    } catch (e) {
       next(e)
    }
}

export async function handlePostNonNext<T>(path: string, body: T, req: EnhancedRequest): Promise<AxiosResponse> {
  try {
    logger.info('handle post with non next:', path)
    const headers = setHeaders(req)
    return await http.post(path, body, { headers })
  } catch (e) {
    logger.error(e.status, e.statusText, JSON.stringify(e.data))
    throw e
  }
}

/**
 * Generic handlePostBlob call Rest API with POST method
 * @param path
 * @param body
 * @param req
 * @returns {Promise<AxiosResponse>}
 */
export async function handlePostBlob<T>(path: string, body: T, req: EnhancedRequest, next: NextFunction): Promise<AxiosResponse> {
  try {
    logger.info('handle post blob:', path)
    const headers = setHeaders(req)
    return await http.post(path, body, {
      headers,
      responseType: 'arraybuffer',
    })
  } catch (e) {
    next(e)
  }
}

/**
 * Generic handlePut call Rest API with PUT method
 * @param path
 * @param body
 * @param req
 * @returns {Promise<AxiosResponse>}
 */
export async function handlePut<T>(path: string, body: T, req: EnhancedRequest, next: NextFunction): Promise<AxiosResponse> {

    try {
        logger.info('handle put:', path)
        const headers = setHeaders(req)
        return await http.put(path, body, { headers })
    } catch (e) {
        next(e)
    }

}

/**
 * Generic handleDelete call Rest API with DELETE method
 * @param path
 * @param req
 * @returns {Promise<AxiosResponse>}
 */
export async function handleDelete<T>(path: string, body: T, req: EnhancedRequest, next: NextFunction): Promise<AxiosResponse> {
    try {
        logger.info('handle delete:', path)
        const headers = setHeaders(req)
        return await http.delete(path, {
            data: body,
            headers,
        })
    } catch (e) {
        next(e)
    }
}
