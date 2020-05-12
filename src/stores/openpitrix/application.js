/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import { get, omit } from 'lodash'
import { observable, action } from 'mobx'

import ObjectMapper from 'utils/object.mapper'
import { CLUSTER_QUERY_STATUS } from 'configs/openpitrix/app'

import Base from './base'

export default class Application extends Base {
  resourceName = 'applications'

  defaultStatus = CLUSTER_QUERY_STATUS

  get baseUrl() {
    return 'kapis/openpitrix.io/v1'
  }

  getUrl = ({ cluster, namespace, cluster_id } = {}) => {
    if (cluster_id) {
      return `${this.baseUrl}${this.getPath({
        cluster,
        namespace,
      })}/applications/${cluster_id}`
    }

    return `${this.baseUrl}${this.getPath({ cluster, namespace })}/applications`
  }

  @observable
  env = {
    data: {},
    isLoading: false,
  }

  @action
  fetchList = async ({
    cluster,
    namespace,
    workspace,
    more,
    ...params
  } = {}) => {
    this.list.isLoading = true

    params.status = params.status || this.defaultStatus

    if (!params.runtime_id) {
      this.list.isLoading = false
      return
    }

    if (!params.sortBy && params.ascending === undefined) {
      params.sortBy = 'status_time'
    }

    if (params.limit === Infinity || params.limit === -1) {
      params.limit = -1
      params.page = 1
    }

    params.limit = params.limit || 10

    const result = await request.get(
      this.getUrl({ cluster, namespace }),
      params
    )

    const data = (result.items || []).map(item => ({
      ...item.cluster,
      ...item,
      cluster,
    }))

    this.list = {
      data: more ? [...this.list.data, ...data] : data,
      total: result.totalItems || result.total_count || data.length || 0,
      ...omit(params, ['runtime_id', 'status']),
      limit: Number(params.limit) || 10,
      page: Number(params.page) || 1,
      isLoading: false,
      ...(this.list.silent ? {} : { selectedRowKeys: [] }),
    }
  }

  @action
  fetchDetail = async ({ namespace, id: cluster_id }) => {
    this.isLoading = true

    const result = await request.get(this.getUrl({ namespace, cluster_id }))

    if (result.services) {
      result.services = result.services.map(ObjectMapper.services)
    }

    if (result.workloads) {
      Object.keys(result.workloads).forEach(key => {
        if (ObjectMapper[key]) {
          result.workloads[key] = result.workloads[key].map(ObjectMapper[key])
        }
      })
    }

    const { cluster, ...rest } = result
    this.detail = {
      ...rest,
      ...cluster,
    }

    try {
      const clusterData = get(result, 'cluster.env', '')
      this.env.data = JSON.parse(clusterData)
    } catch (err) {}

    this.isLoading = false
  }

  @action
  update = ({ cluster_id, zone, ...data }) =>
    this.submitting(
      request.patch(this.getUrl({ namespace: zone, cluster_id }), data)
    )

  @action
  patch = ({ cluster_id, zone }, data) =>
    this.submitting(
      request.patch(this.getUrl({ namespace: zone, cluster_id }), data)
    )

  @action
  delete = ({ cluster_id, zone }) =>
    this.submitting(
      request.delete(this.getUrl({ namespace: zone, cluster_id }))
    )

  @action
  batchDelete = (rowKeys, { namespace }) =>
    this.submitting(
      Promise.all(
        rowKeys.map(cluster_id =>
          request.delete(this.getUrl({ namespace, cluster_id }))
        )
      )
    )

  // todo: nex version
  @action
  upgrade = ({ cluster_id, version_id }) =>
    this.submitting(
      request.post(`${this.baseUrl}clusters/upgrade`, {
        cluster_id,
        version_id,
      })
    )
}
