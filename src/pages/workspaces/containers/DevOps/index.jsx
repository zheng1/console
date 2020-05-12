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

import React from 'react'

import { Avatar } from 'components/Base'
import Banner from 'components/Cards/Banner'
import Table from 'components/Tables/List'
import withList, { ListPage } from 'components/HOCs/withList'

import { getLocalTime } from 'utils'

import DevOpsStore from 'stores/devops'

@withList({
  store: new DevOpsStore(),
  name: 'DevOps Project',
  module: 'devops',
  rowKey: 'name',
})
export default class DevOps extends React.Component {
  get itemActions() {
    const { trigger, getData } = this.props
    return [
      {
        key: 'edit',
        icon: 'pen',
        text: t('Edit'),
        action: 'edit',
        onClick: item =>
          trigger('devops.edit', { detail: item, success: getData }),
      },
      {
        key: 'delete',
        icon: 'trash',
        text: t('Delete'),
        action: 'delete',
        onClick: item =>
          trigger('resource.delete', {
            type: t('DevOps Project'),
            resource: item.name,
            detail: item,
            success: getData,
          }),
      },
    ]
  }

  get tips() {
    return [
      {
        title: t('DEVOPS_TIP_GITOPS_Q'),
        description: t('DEVOPS_TIP_GITOPS_A'),
      },
      {
        title: t('DEVOPS_TIP_TYPE_Q'),
        description: t('DEVOPS_TIP_TYPE_A'),
      },
    ]
  }

  getColumns = () => [
    {
      title: t('Name'),
      dataIndex: 'name',
      width: '40%',
      render: (name, record) => (
        <Avatar
          icon="strategy-group"
          iconSize={40}
          to={`/devops/${record.name}`}
          desc={record.description || '-'}
          title={name}
        />
      ),
    },
    // {
    //   title: t('ID'),
    //   dataIndex: 'project_id',
    //   isHideable: true,
    //   width: '20%',
    // },
    {
      title: t('Creator'),
      dataIndex: 'creator',
      isHideable: true,
      width: '40%',
      render: creator => creator || '-',
    },
    {
      title: t('Created Time'),
      dataIndex: 'create_time',
      isHideable: true,
      width: '20%',
      render: time => getLocalTime(time).format('YYYY-MM-DD HH:mm:ss'),
    },
  ]

  showCreate = () =>
    this.props.trigger('devops.create', {
      ...this.props.match.params,
    })

  render() {
    const { bannerProps, tableProps } = this.props
    return (
      <ListPage {...this.props}>
        <Banner
          {...bannerProps}
          description={t('DEVOPS_DESCRIPTION')}
          tips={this.tips}
        />
        <Table
          {...tableProps}
          itemActions={this.itemActions}
          columns={this.getColumns()}
          onCreate={this.showCreate}
          searchType="keyword"
        />
      </ListPage>
    )
  }
}
